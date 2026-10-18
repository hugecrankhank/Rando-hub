// Shared by the control panel and every overlay: the live connection to the
// bridge (Server-Sent Events) plus a few small helpers.
(function () {
  const q = new URLSearchParams(location.search);
  const CC = window.CC = {
    q,
    state: null,
    handlers: { state: [], event: [], tick: [], clear: [], live: [] },
    on(kind, fn) { this.handlers[kind].push(fn); return this; },
    esc(s) { return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); },
    fmt(s) { s = Math.max(0, Math.round(s)); return Math.floor(s / 3600) + ':' + String(Math.floor(s / 60) % 60).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); },
    num(n) { return Number(n || 0).toLocaleString('en-US'); },
    name(ev) { return ev.nickname || ev.user || 'someone'; },
    async api(action, data) {
      const r = await fetch('/studio/api', { method: 'POST', headers: { 'content-type': 'application/json', 'x-ccbridge': '1' }, body: JSON.stringify({ action, ...data }) });
      const j = await r.json().catch(() => ({ ok: false, error: 'No answer from the bridge' }));
      if (j && j.ok === false) throw new Error(j.error || 'Something went wrong');
      return j;
    },
    connected: false,
  };
  // overlay options shared by every overlay: ?scale=1.2 ?bg=0 ?font=plain
  if (q.get('scale')) document.documentElement.style.setProperty('--scale', +q.get('scale') || 1);
  if (q.get('bg') === '0') document.documentElement.classList.add('clear');
  if (q.get('font') === 'plain') document.documentElement.classList.add('plain');

  function connect() {
    const es = new EventSource('/studio/events?page=' + encodeURIComponent(location.pathname + (q.get('preview') === '1' ? '#preview' : '')));
    es.onopen = () => { CC.connected = true; document.documentElement.classList.remove('offline'); };
    es.onerror = () => { CC.connected = false; document.documentElement.classList.add('offline'); };
    es.onmessage = (m) => {
      let d; try { d = JSON.parse(m.data); } catch { return; }
      if (d.kind === 'state') CC.state = d;
      if (d.kind === 'event' && CC.state) {
        CC.state.recent = (CC.state.recent || []).concat(d.ev).slice(-40);
        if (d.stats) Object.assign(CC.state.stats, d.stats);
        if (d.goals) CC.state.settings.goals = d.goals;
      }
      if (d.kind === 'live' && CC.state && CC.state.live) {
        const L = CC.state.live;
        if ('poll' in d) L.poll = d.poll;
        if ('battle' in d) L.battle = d.battle;
        if ('predict' in d) L.predict = d.predict;
        if (d.run) L.run = d.run;
        if (d.combo) L.combo = Object.assign(L.combo || {}, d.combo);
        if (d.clip) L.clips = (L.clips || []).concat(d.clip).slice(-200);
        if (d.what === 'music') L.run = Object.assign(L.run || {}, { music: d.pack });
      }
            if (d.kind === 'tick' && CC.state) { CC.state.status = d.status; CC.state.timer = Object.assign(CC.state.timer || {}, d.timer); }
      for (const fn of CC.handlers[d.kind] || []) { try { fn(d, CC.state); } catch (e) { console.error(e); } }
    };
  }
  connect();
})();
