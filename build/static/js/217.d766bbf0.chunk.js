'use strict'
;(self.webpackChunkauthform = self.webpackChunkauthform || []).push([
  [217],
  {
    5217: (e, t, a) => {
      a.r(t), a.d(t, { default: () => C })
      var n = a(9838),
        r = a(5522),
        s = a(3952),
        l = a(3637),
        o = a(4377),
        i = a(6846)
      var c = a(5692),
        m = a(5043)
      var d = a(3993),
        u = a(9254)
      function h(e) {
        var t, a
        const n = (0, u.Gv)(e) ? e : { fallback: null != e ? e : 'base' },
          r = (0, d.D)().__breakpoints.details.map((e) => {
            let { minMaxQuery: t, breakpoint: a } = e
            return { breakpoint: a, query: t.replace('@media screen and ', '') }
          }),
          s = r.map((e) => e.breakpoint === n.fallback),
          l = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            const { ssr: a = !0, fallback: n } = t,
              { getWindow: r } = (0, c.O)(),
              s = Array.isArray(e) ? e : [e]
            let l = Array.isArray(n) ? n : [n]
            l = l.filter((e) => null != e)
            const [o, i] = (0, m.useState)(() =>
              s.map((e, t) => ({ media: e, matches: a ? !!l[t] : r().matchMedia(e).matches })),
            )
            return (
              (0, m.useEffect)(() => {
                const e = r()
                i(s.map((t) => ({ media: t, matches: e.matchMedia(t).matches })))
                const t = s.map((t) => e.matchMedia(t)),
                  a = (e) => {
                    i((t) => t.slice().map((t) => (t.media === e.media ? { ...t, matches: e.matches } : t)))
                  }
                return (
                  t.forEach((e) => {
                    'function' === typeof e.addListener ? e.addListener(a) : e.addEventListener('change', a)
                  }),
                  () => {
                    t.forEach((e) => {
                      'function' === typeof e.removeListener ? e.removeListener(a) : e.removeEventListener('change', a)
                    })
                  }
                )
              }, [r]),
              o.map((e) => e.matches)
            )
          })(
            r.map((e) => e.query),
            { fallback: s, ssr: n.ssr },
          )
        return null != (a = null == (t = r[l.findIndex((e) => 1 == e)]) ? void 0 : t.breakpoint) ? a : n.fallback
      }
      function f(e, t) {
        var a
        const n = h((0, u.Gv)(t) ? t : { fallback: null != t ? t : 'base' }),
          r = (0, d.D)()
        if (!n) return
        const s = Array.from((null == (a = r.__breakpoints) ? void 0 : a.keys) || [])
        return (function (e, t) {
          let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.fi,
            n = Object.keys(e).indexOf(t)
          if (-1 !== n) return e[t]
          let r = a.indexOf(t)
          for (; r >= 0; ) {
            const t = a[r]
            if (e.hasOwnProperty(t)) {
              n = r
              break
            }
            r -= 1
          }
          if (-1 !== n) return e[a[n]]
        })(
          Array.isArray(e)
            ? Object.fromEntries(
                Object.entries((0, i.a1)(e, s)).map((e) => {
                  let [t, a] = e
                  return [t, a]
                }),
              )
            : e,
          n,
          s,
        )
      }
      var p = a(579)
      function x() {
        return (0, p.jsxs)(l.m, {
          maxW: '5xl',
          py: 12,
          px: { base: 6, md: 12 },
          children: [
            (0, p.jsx)(o.D, {
              fontSize: { base: '3xl', md: '4xl', lg: '6xl' },
              textAlign: 'center',
              children: (0, p.jsx)(s.E, {
                as: 'span',
                position: 'relative',
                _after: {
                  content: "''",
                  width: 'full',
                  height: f({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                },
                children: 'Contact Me',
              }),
            }),
            (0, p.jsx)(s.E, {
              textAlign: 'center',
              color: 'gray.500',
              fontSize: 'xl',
              p: 2,
              fontWeight: 'semibold',
              children: 'If you have any queries feel free to contact me.',
            }),
          ],
        })
      }
      var g = a(3216),
        b = a(4550),
        v = a(834),
        j = a(3461),
        y = a(3452),
        k = a(3974),
        w = a(7921),
        M = a(5695),
        S = a(8028),
        A = a(184),
        E = a(6720)
      const O = function () {
        const e = (0, g.Zp)(),
          [t, a] = (0, m.useState)(''),
          [n, s] = (0, m.useState)(''),
          [l, o] = (0, m.useState)(''),
          i = (0, b.B)(A.K9B),
          c = (0, b.B)(E.mm2)
        return (0, p.jsx)(r.az, {
          w: { base: 'full', md: 'auto' },
          pb: 4,
          px: 4,
          children: (0, p.jsxs)('form', {
            name: 'contact',
            method: 'POST',
            'data-netlify': 'true',
            onSubmit: (a) => {
              var r
              a.preventDefault(),
                fetch('/', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body:
                    ((r = { 'form-name': a.target.getAttribute('name'), name: t, email: n, message: l }),
                    console.log('data', r),
                    Object.keys(r)
                      .map((e) => encodeURIComponent(e) + '=' + encodeURIComponent(r[e]))
                      .join('&')),
                })
                  .then(() => e.push('/success'))
                  .catch((e) => alert(e))
            },
            children: [
              (0, p.jsx)('input', { type: 'hidden', name: 'form-name', value: 'contact' }),
              (0, p.jsxs)(v.T, {
                spacing: 6,
                maxW: 'lg',
                w: { md: 'md' },
                mx: 'auto',
                children: [
                  (0, p.jsx)(j.MJ, {
                    id: 'lastName',
                    children: (0, p.jsxs)(y.M, {
                      children: [
                        (0, p.jsx)(k.W, { pointerEvents: 'none', children: (0, p.jsx)(i, { color: 'gray.300' }) }),
                        (0, p.jsx)(w.p, {
                          color: 'gray.700',
                          value: t,
                          placeholder: 'name',
                          onChange: (e) => a(e.target.value),
                          onBlur: (e) => a(e.target.value.trim()),
                          required: !0,
                        }),
                      ],
                    }),
                  }),
                  (0, p.jsx)(j.MJ, {
                    id: 'email',
                    children: (0, p.jsxs)(y.M, {
                      children: [
                        (0, p.jsx)(k.W, { pointerEvents: 'none', children: (0, p.jsx)(c, { color: 'gray.300' }) }),
                        (0, p.jsx)(w.p, {
                          value: n,
                          type: 'email',
                          placeholder: 'email address',
                          onChange: (e) => s(e.target.value),
                          onBlur: (e) => s(e.target.value.trim()),
                          required: !0,
                        }),
                      ],
                    }),
                  }),
                  (0, p.jsx)(j.MJ, {
                    id: 'message',
                    children: (0, p.jsx)(M.T, {
                      name: 'message',
                      placeholder: 'Message',
                      mt: 1,
                      rows: 6,
                      shadow: 'sm',
                      focusBorderColor: 'brand.400',
                      fontSize: { sm: 'sm' },
                      value: l,
                      onChange: (e) => o(e.target.value),
                      required: !0,
                    }),
                  }),
                  (0, p.jsx)(S.$, { type: 'submit', size: 'lg', colorScheme: 'blue', children: 'Send Message' }),
                ],
              }),
            ],
          }),
        })
      }
      function C() {
        return (0, p.jsx)(n.A, {
          children: (0, p.jsxs)(r.az, {
            bg: 'white',
            children: [
              (0, p.jsx)(x, {}),
              (0, p.jsx)(O, {}),
              (0, p.jsxs)(s.E, {
                textAlign: 'center',
                pb: 6,
                color: 'gray.600',
                children: [
                  'or email me at',
                  ' ',
                  (0, p.jsx)(r.az, {
                    as: 'a',
                    href: 'mailto:testenet@ukr.net',
                    color: 'blue.500',
                    children: 'testenet@ukr.net',
                  }),
                ],
              }),
            ],
          }),
        })
      }
    },
    834: (e, t, a) => {
      a.d(t, { T: () => l })
      var n = a(1821),
        r = a(3226),
        s = a(579),
        l = (0, r.R)((e, t) => (0, s.jsx)(n.B, { align: 'center', ...e, direction: 'column', ref: t }))
      l.displayName = 'VStack'
    },
    5695: (e, t, a) => {
      a.d(t, { T: () => d })
      var n = a(4617),
        r = a(3226),
        s = a(3761),
        l = a(6254),
        o = a(4550),
        i = a(9254),
        c = a(579)
      var m = ['h', 'minH', 'height', 'minHeight'],
        d = (0, r.R)((e, t) => {
          const a = (0, s.Vl)('Textarea', e),
            { className: r, rows: d, ...u } = (0, l.MN)(e),
            h = (0, n.t)(u),
            f = d
              ? (function (e) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  const a = Object.assign({}, e)
                  for (const n of t) n in a && delete a[n]
                  return a
                })(a, m)
              : a
          return (0, c.jsx)(o.B.textarea, {
            ref: t,
            rows: d,
            ...h,
            className: (0, i.cx)('chakra-textarea', r),
            __css: f,
          })
        })
      d.displayName = 'Textarea'
    },
  },
])
//# sourceMappingURL=217.d766bbf0.chunk.js.map
