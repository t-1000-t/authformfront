'use strict'
;(self.webpackChunkauthform = self.webpackChunkauthform || []).push([
  [405],
  {
    1823: (r, a, e) => {
      e.d(a, { e: () => p })
      var i = e(7852),
        [t, o] = (0, i.q)({ name: 'AvatarStylesContext', hookName: 'useAvatarStyles', providerName: '<Avatar/>' }),
        n = e(4550),
        l = e(579)
      function s(r) {
        var a
        const e = r.split(' '),
          i = null != (a = e[0]) ? a : '',
          t = e.length > 1 ? e[e.length - 1] : ''
        return i && t ? ''.concat(i.charAt(0)).concat(t.charAt(0)) : i.charAt(0)
      }
      function c(r) {
        const { name: a, getInitials: e, ...i } = r,
          t = o()
        return (0, l.jsx)(n.B.div, {
          role: 'img',
          'aria-label': a,
          ...i,
          __css: t.label,
          children: a ? (null == e ? void 0 : e(a)) : null,
        })
      }
      c.displayName = 'AvatarName'
      var d = (r) =>
          (0, l.jsxs)(n.B.svg, {
            viewBox: '0 0 128 128',
            color: '#fff',
            width: '100%',
            height: '100%',
            className: 'chakra-avatar__svg',
            ...r,
            children: [
              (0, l.jsx)('path', {
                fill: 'currentColor',
                d: 'M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z',
              }),
              (0, l.jsx)('path', {
                fill: 'currentColor',
                d: 'M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24',
              }),
            ],
          }),
        h = e(6615),
        g = e(5043)
      function u(r) {
        const {
            src: a,
            srcSet: e,
            onError: i,
            onLoad: t,
            getInitials: o,
            name: s,
            borderRadius: u,
            loading: v,
            iconLabel: m,
            icon: f = (0, l.jsx)(d, {}),
            ignoreFallback: b,
            referrerPolicy: x,
            crossOrigin: p,
          } = r,
          C = (0, h.l)({ src: a, onError: i, crossOrigin: p, ignoreFallback: b })
        return !a || !('loaded' === C)
          ? s
            ? (0, l.jsx)(c, { className: 'chakra-avatar__initials', getInitials: o, name: s })
            : (0, g.cloneElement)(f, { role: 'img', 'aria-label': m })
          : (0, l.jsx)(n.B.img, {
              src: a,
              srcSet: e,
              alt: s,
              onLoad: t,
              referrerPolicy: x,
              crossOrigin: null != p ? p : void 0,
              className: 'chakra-avatar__img',
              loading: v,
              __css: { width: '100%', height: '100%', objectFit: 'cover', borderRadius: u },
            })
      }
      u.displayName = 'AvatarImage'
      var v = e(3226),
        m = e(3761),
        f = e(6254),
        b = e(9254),
        x = {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 'medium',
          position: 'relative',
          flexShrink: 0,
        },
        p = (0, v.R)((r, a) => {
          const e = (0, m.o5)('Avatar', r),
            [i, o] = (0, g.useState)(!1),
            {
              src: c,
              srcSet: h,
              name: v,
              showBorder: p,
              borderRadius: C = 'full',
              onError: k,
              onLoad: j,
              getInitials: N = s,
              icon: _ = (0, l.jsx)(d, {}),
              iconLabel: y = ' avatar',
              loading: A,
              children: L,
              borderColor: S,
              ignoreFallback: w,
              crossOrigin: B,
              referrerPolicy: I,
              ...E
            } = (0, f.MN)(r),
            R = { borderRadius: C, borderWidth: p ? '2px' : void 0, ...x, ...e.container }
          return (
            S && (R.borderColor = S),
            (0, l.jsx)(n.B.span, {
              ref: a,
              ...E,
              className: (0, b.cx)('chakra-avatar', r.className),
              'data-loaded': (0, b.sE)(i),
              __css: R,
              children: (0, l.jsxs)(t, {
                value: e,
                children: [
                  (0, l.jsx)(u, {
                    src: c,
                    srcSet: h,
                    loading: A,
                    onLoad: (0, b.Hj)(j, () => {
                      o(!0)
                    }),
                    onError: k,
                    getInitials: N,
                    name: v,
                    borderRadius: C,
                    icon: _,
                    iconLabel: y,
                    ignoreFallback: w,
                    crossOrigin: B,
                    referrerPolicy: I,
                  }),
                  L,
                ],
              }),
            })
          )
        })
      p.displayName = 'Avatar'
    },
    423: (r, a, e) => {
      e.d(a, { eh5: () => t })
      var i = e(3441)
      function t(r) {
        return (0, i.k5)({
          tag: 'svg',
          attr: { viewBox: '0 0 512 512' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z',
              },
              child: [],
            },
          ],
        })(r)
      }
    },
  },
])
//# sourceMappingURL=405.44b469ec.chunk.js.map
