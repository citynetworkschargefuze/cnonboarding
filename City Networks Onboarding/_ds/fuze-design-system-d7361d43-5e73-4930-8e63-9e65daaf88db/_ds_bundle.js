/* @ds-bundle: {"format":4,"namespace":"FUZEDesignSystem_d7361d","components":[],"sourceHashes":{"plate-tokens.js":"37a2a5c70da6","ui_kits/chargefuze-app/Screens.jsx":"70a15a24958d","ui_kits/chargefuze-app/ios-frame.jsx":"d67eb3ffe562"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FUZEDesignSystem_d7361d = window.FUZEDesignSystem_d7361d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// plate-tokens.js
try { (() => {
// Resolves plate url() tokens against the project root so they work from any
// HTML page regardless of depth. Include via <script src="[../]plate-tokens.js"></script>
// The script walks up from its own src to find the project root.
(function () {
  var me = document.currentScript && document.currentScript.src;
  if (!me) return;
  var root = me.replace(/plate-tokens\.js(\?.*)?$/, ''); // dir containing this script
  var plates = {
    'af-01-purple-blue': 'af-01-purple-blue.png',
    'af-02-purple-fade': 'af-02-purple-fade.png',
    'af-03-ripple-purple-spot': 'af-03-ripple-purple-spot.png',
    'af-04-purple-dense': 'af-04-purple-dense.png',
    'af-05-ripple-purple': 'af-05-ripple-purple.png',
    'af-06-purple-spotlight': 'af-06-purple-spotlight.png',
    'cf-01-ripple-blue': 'cf-01-ripple-blue.png',
    'cf-02-ripple-spotlight': 'cf-02-ripple-spotlight.png',
    'cf-03-blue-ripple-dense': 'cf-03-blue-ripple-dense.png',
    'cf-04-blue-soft': 'cf-04-blue-soft.png',
    'cf-05-blue-fade': 'cf-05-blue-fade.png',
    'cf-06-blue-white': 'cf-06-blue-white.png',
    'spectrum-01-purple-light': 'spectrum-01-purple-light.png',
    'spectrum-02-ripple-blue-purple': 'spectrum-02-ripple-blue-purple.png',
    'spectrum-03-violet-blue': 'spectrum-03-violet-blue.png',
    'spectrum-04-purple-blue-ripples': 'spectrum-04-purple-blue-ripples.png'
  };
  var s = document.documentElement.style;
  Object.keys(plates).forEach(function (k) {
    s.setProperty('--' + k, "url('" + root + 'assets/graphics/' + plates[k] + "')");
  });
  // Rebind surface-* aliases so they pick up the new plate url()s
  var aliases = {
    'surface-hero': 'spectrum-02-ripple-blue-purple',
    'surface-charge': 'cf-03-blue-ripple-dense',
    'surface-ad': 'af-05-ripple-purple',
    'surface-spectrum': 'spectrum-04-purple-blue-ripples',
    'surface-fade': 'af-02-purple-fade',
    'surface-spotlight': 'af-03-ripple-purple-spot'
  };
  Object.keys(aliases).forEach(function (k) {
    s.setProperty('--' + k, 'var(--' + aliases[k] + ')');
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "plate-tokens.js", error: String((e && e.message) || e) }); }

// ui_kits/chargefuze-app/Screens.jsx
try { (() => {
// chargeFUZE consumer mobile app — individual screens
// Rent a power bank, find a kiosk, track a rental.

// ─── Shared primitives ────────────────────────────────────────────────
const CZ = {
  charge: '#009EFA',
  spark: '#43F4FE',
  obsidian: '#001B32',
  ink75: 'rgba(0,27,50,.75)',
  ink50: 'rgba(0,27,50,.5)',
  ink25: 'rgba(0,27,50,.25)',
  ink12: 'rgba(0,27,50,.12)',
  surfaceMuted: '#F4F6F9',
  border: '#E1E6EC',
  font: 'Poppins, -apple-system, system-ui, sans-serif',
  body: 'Inter, -apple-system, system-ui, sans-serif'
};
function Icon({
  name,
  size = 22,
  color = 'currentColor',
  stroke = 1.75
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      color,
      strokeWidth: stroke
    }
  });
}
function Button({
  children,
  variant = 'primary',
  onClick,
  style = {},
  full
}) {
  const base = {
    fontFamily: CZ.font,
    fontSize: 15,
    fontWeight: 500,
    padding: '14px 22px',
    borderRadius: 9999,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 200ms cubic-bezier(.22,1,.36,1)',
    width: full ? '100%' : 'auto'
  };
  const variants = {
    primary: {
      background: CZ.obsidian,
      color: '#fff'
    },
    charge: {
      background: CZ.charge,
      color: '#fff',
      boxShadow: '0 8px 24px rgba(0,158,250,.35)'
    },
    ghost: {
      background: 'transparent',
      color: CZ.obsidian,
      border: `1.5px solid ${CZ.border}`
    },
    quiet: {
      background: CZ.surfaceMuted,
      color: CZ.obsidian
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, children);
}
function Pill({
  children,
  color = 'neutral',
  live
}) {
  const colors = {
    charge: {
      bg: 'rgba(0,158,250,.12)',
      fg: '#0077C2'
    },
    success: {
      bg: 'rgba(15,179,107,.12)',
      fg: '#0A8A52'
    },
    warn: {
      bg: 'rgba(244,170,0,.15)',
      fg: '#8A5A00'
    },
    neutral: {
      bg: CZ.surfaceMuted,
      fg: CZ.ink75
    },
    obsidian: {
      bg: CZ.obsidian,
      fg: '#fff'
    }
  }[color];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: colors.bg,
      color: colors.fg,
      padding: '4px 10px',
      borderRadius: 9999,
      fontSize: 11,
      fontWeight: 600,
      fontFamily: CZ.body
    }
  }, live && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor',
      animation: 'czpulse 1.4s infinite'
    }
  }), children);
}

// ─── Header (status bar + top nav overlay already from device) ───────
function ScreenHeader({
  eyebrow,
  title,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 20px 14px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: CZ.ink50,
      fontFamily: CZ.body,
      marginBottom: 4
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CZ.font,
      fontSize: 26,
      fontWeight: 600,
      color: CZ.obsidian,
      letterSpacing: '-.01em',
      lineHeight: 1.1
    }
  }, title)), right);
}

// ─── Bottom tab bar ──────────────────────────────────────────────────
function TabBar({
  active,
  onChange
}) {
  const tabs = [{
    id: 'map',
    label: 'Find',
    icon: 'map-pin'
  }, {
    id: 'rental',
    label: 'Rental',
    icon: 'battery-charging'
  }, {
    id: 'history',
    label: 'History',
    icon: 'clock'
  }, {
    id: 'profile',
    label: 'Profile',
    icon: 'user'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 26,
      background: 'rgba(255,255,255,.88)',
      backdropFilter: 'blur(18px) saturate(180%)',
      WebkitBackdropFilter: 'blur(18px) saturate(180%)',
      borderRadius: 24,
      padding: '10px 8px',
      display: 'flex',
      justifyContent: 'space-around',
      boxShadow: '0 10px 30px rgba(0,27,50,.08), 0 1px 2px rgba(0,27,50,.04)',
      border: '1px solid rgba(255,255,255,.6)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => onChange(t.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      padding: '6px 12px',
      borderRadius: 14,
      color: active === t.id ? CZ.charge : CZ.ink50,
      fontFamily: CZ.body,
      fontSize: 10,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: t.icon,
    size: 22,
    stroke: active === t.id ? 2.2 : 1.75
  }), t.label)));
}

// ─── Screen: Map / Find a kiosk ──────────────────────────────────────
function MapScreen({
  onPickKiosk
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      background: '#E8EEF5',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 400 800",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "grid",
    width: "32",
    height: "32",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "32",
    height: "32",
    fill: "#E8EEF5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 0L0 0 0 32",
    fill: "none",
    stroke: "#D3DDE6",
    strokeWidth: "0.5"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "400",
    height: "800",
    fill: "url(#grid)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 200 L420 240",
    stroke: "#fff",
    strokeWidth: "22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 480 L420 420",
    stroke: "#fff",
    strokeWidth: "18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 -20 L80 820",
    stroke: "#fff",
    strokeWidth: "18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M300 -20 L340 820",
    stroke: "#fff",
    strokeWidth: "14"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "150",
    y: "280",
    width: "130",
    height: "120",
    fill: "#D6E7D0",
    rx: "6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "210",
    cy: "330",
    r: "14",
    fill: "#B9D4B0"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "245",
    cy: "370",
    r: "10",
    fill: "#B9D4B0"
  })), [{
    x: 200,
    y: 340,
    active: true,
    n: 3,
    label: 'Roosevelt Lobby'
  }, {
    x: 90,
    y: 220,
    n: 6
  }, {
    x: 310,
    y: 280,
    n: 1
  }, {
    x: 140,
    y: 520,
    n: 8
  }, {
    x: 280,
    y: 600,
    n: 2
  }].map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => p.active && onPickKiosk(),
    style: {
      position: 'absolute',
      left: p.x - 22,
      top: p.y - 22,
      width: 44,
      height: 44,
      borderRadius: 22,
      background: p.active ? CZ.charge : '#fff',
      color: p.active ? '#fff' : CZ.obsidian,
      border: 'none',
      cursor: p.active ? 'pointer' : 'default',
      boxShadow: p.active ? '0 8px 24px rgba(0,158,250,.45)' : '0 4px 12px rgba(0,27,50,.15)',
      fontFamily: CZ.font,
      fontWeight: 700,
      fontSize: 14,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, p.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 60,
      left: 16,
      right: 16,
      background: 'rgba(255,255,255,.95)',
      backdropFilter: 'blur(14px)',
      borderRadius: 16,
      padding: '13px 16px',
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      boxShadow: '0 6px 20px rgba(0,27,50,.08)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18,
    color: CZ.ink50
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: CZ.body,
      fontSize: 15,
      color: CZ.ink50
    }
  }, "Search venues, zip, area"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 15,
      background: CZ.surfaceMuted,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sliders-horizontal",
    size: 14,
    color: CZ.obsidian
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      right: 16,
      bottom: 108,
      background: '#fff',
      borderRadius: 20,
      padding: 16,
      boxShadow: '0 12px 40px rgba(0,27,50,.1)',
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      backgroundColor: CZ.obsidian,
      backgroundImage: "url('../../assets/graphics/cf-03-blue-ripple-dense.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "battery-charging",
    size: 24,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    color: "charge",
    live: true
  }, "3 available")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CZ.font,
      fontWeight: 600,
      fontSize: 15,
      color: CZ.obsidian
    }
  }, "Roosevelt Hotel \xB7 Lobby"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CZ.body,
      fontSize: 12,
      color: CZ.ink75
    }
  }, "0.2 mi \xB7 5 min walk")), /*#__PURE__*/React.createElement(Button, {
    variant: "charge",
    onClick: onPickKiosk,
    style: {
      padding: '10px 16px',
      fontSize: 13
    }
  }, "Rent")));
}

// ─── Screen: Kiosk detail / Confirm rent ─────────────────────────────
function KioskScreen({
  onRent,
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      background: '#fff',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 280,
      backgroundColor: CZ.obsidian,
      backgroundImage: "url('../../assets/graphics/cf-01-ripple-blue.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      padding: '64px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: 'absolute',
      top: 62,
      left: 16,
      width: 38,
      height: 38,
      borderRadius: 19,
      border: 'none',
      background: 'rgba(255,255,255,.25)',
      backdropFilter: 'blur(12px)',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 20,
    color: "#fff"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      right: 20,
      bottom: 20,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      opacity: .85,
      marginBottom: 6
    }
  }, "F25 Kiosk \xB7 Venue"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CZ.font,
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: '-.01em'
    }
  }, "Roosevelt Hotel", /*#__PURE__*/React.createElement("br", null), "Lobby")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 140",
    style: {
      position: 'absolute',
      right: 16,
      top: 72,
      width: 110,
      opacity: .9
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "15",
    y: "10",
    width: "90",
    height: "120",
    rx: "14",
    fill: "rgba(255,255,255,.15)",
    stroke: "rgba(255,255,255,.5)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "25",
    y: "20",
    width: "70",
    height: "42",
    rx: "6",
    fill: "rgba(255,255,255,.85)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "32",
    y: "75",
    width: "56",
    height: "8",
    rx: "4",
    fill: "rgba(255,255,255,.6)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "32",
    y: "90",
    width: "56",
    height: "8",
    rx: "4",
    fill: "rgba(255,255,255,.6)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "32",
    y: "105",
    width: "56",
    height: "8",
    rx: "4",
    fill: "rgba(255,255,255,.6)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    color: "charge",
    live: true
  }, "3 of 6 available"), /*#__PURE__*/React.createElement(Pill, {
    color: "success"
  }, "Open 24h")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBottom: 22
    }
  }, [{
    t: '$3.00',
    l: 'First hour'
  }, {
    t: '$1.50',
    l: 'Each add\'l hr'
  }, {
    t: '$15',
    l: 'Max daily'
  }, {
    t: '3 cords',
    l: 'USB‑C · Lightning · Micro'
  }].map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: CZ.surfaceMuted,
      borderRadius: 14,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CZ.font,
      fontSize: 20,
      fontWeight: 600,
      color: CZ.obsidian
    }
  }, m.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CZ.body,
      fontSize: 11,
      color: CZ.ink75
    }
  }, m.l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: CZ.ink50,
      fontFamily: CZ.body,
      marginBottom: 8
    }
  }, "How it works"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 110
    }
  }, [{
    i: 'qr-code',
    t: 'Scan the QR on the kiosk'
  }, {
    i: 'battery-charging',
    t: 'A charger pops out of a slot'
  }, {
    i: 'map-pin',
    t: 'Return it to any FUZE kiosk'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: 'rgba(0,158,250,.1)',
      color: CZ.charge,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.i,
    size: 18,
    color: CZ.charge
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CZ.body,
      fontSize: 14,
      color: CZ.obsidian
    }
  }, s.t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 26,
      padding: 12,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(18px)',
      borderRadius: 24,
      boxShadow: '0 12px 30px rgba(0,27,50,.08)',
      border: '1px solid rgba(255,255,255,.6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "charge",
    onClick: onRent,
    full: true,
    style: {
      padding: '16px 22px',
      fontSize: 16
    }
  }, "Rent a charger \xB7 $3 / hr")));
}

// ─── Screen: Active rental ───────────────────────────────────────────
function RentalScreen({
  onReturn
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      background: '#fff',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(ScreenHeader, {
    eyebrow: "Active rental",
    title: "Charging"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: CZ.obsidian,
      backgroundImage: "url('../../assets/graphics/cf-03-blue-ripple-dense.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 24,
      padding: 24,
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      opacity: .85,
      marginBottom: 8
    }
  }, "Elapsed"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CZ.font,
      fontSize: 52,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '-.01em'
    }
  }, "1:24", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      opacity: .7
    }
  }, ":08")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CZ.body,
      fontSize: 13,
      opacity: .85,
      marginTop: 6
    }
  }, "$4.50 so far \xB7 billing hourly"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 40 80",
    style: {
      position: 'absolute',
      right: 22,
      top: 22,
      width: 48,
      opacity: .9
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "10",
    width: "32",
    height: "64",
    rx: "6",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13",
    y: "4",
    width: "14",
    height: "6",
    rx: "2",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "26",
    width: "22",
    height: "44",
    rx: "3",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 36l-7 12h5l-2 9 7-12h-5l2-9z",
    fill: CZ.charge
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: CZ.surfaceMuted,
      borderRadius: 16,
      padding: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 18,
    color: CZ.charge
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CZ.font,
      fontSize: 14,
      fontWeight: 600,
      color: CZ.obsidian
    }
  }, "Rented at Roosevelt Hotel"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: CZ.body,
      fontSize: 12,
      color: CZ.ink75
    }
  }, "Today \xB7 2:14 PM"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8,
      marginBottom: 20
    }
  }, ['USB‑C', 'Lightning', 'Micro‑USB'].map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      background: CZ.surfaceMuted,
      borderRadius: 12,
      padding: '10px 12px',
      textAlign: 'center',
      fontFamily: CZ.body,
      fontSize: 12,
      color: CZ.ink75
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plug",
    size: 16,
    color: CZ.obsidian
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontWeight: 600,
      color: CZ.obsidian
    }
  }, c)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    onClick: onReturn
  }, "Find a return location"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: CZ.body,
      fontSize: 13,
      color: CZ.ink50,
      width: '100%',
      padding: 16,
      textDecoration: 'underline'
    }
  }, "Having trouble? Contact support")));
}
Object.assign(window, {
  CZ,
  Icon,
  Button,
  Pill,
  ScreenHeader,
  TabBar,
  MapScreen,
  KioskScreen,
  RentalScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/chargefuze-app/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/chargefuze-app/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/chargefuze-app/ios-frame.jsx", error: String((e && e.message) || e) }); }

})();
