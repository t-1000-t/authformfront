'use strict'
;(self.webpackChunkauthform = self.webpackChunkauthform || []).push([
  [641],
  {
    202: (e, t, n) => {
      n.d(t, { T: () => l })
      var a = n(9379),
        s = n(579),
        i = n(9904)
      const l = (0, n(5003).R)((e, t) =>
        (0, s.jsx)(i.B, (0, a.A)((0, a.A)({ align: 'center' }, e), {}, { direction: 'column', ref: t })),
      )
      l.displayName = 'VStack'
    },
    5699: (e, t, n) => {
      n.d(t, { p: () => p })
      var a = n(9379),
        s = n(45),
        i = n(579),
        l = n(3033),
        r = n(4765),
        o = n(3635),
        c = n(5003),
        d = n(5158),
        u = n(7971)
      const m = ['htmlSize'],
        p = (0, c.R)(function (e, t) {
          const { htmlSize: n } = e,
            c = (0, s.A)(e, m),
            p = (0, d.o)('Input', c),
            h = (0, l.M)(c),
            x = (0, o.t)(h),
            f = (0, r.cx)('chakra-input', e.className)
          return (0, i.jsx)(u.B.input, (0, a.A)((0, a.A)({ size: n }, x), {}, { __css: p.field, ref: t, className: f }))
        })
      ;((p.displayName = 'Input'), (p.id = 'Input'))
    },
    5973: (e, t, n) => {
      n.d(t, { M: () => v, Z: () => g })
      var a = n(9379),
        s = n(45),
        i = n(579),
        l = n(3033),
        r = n(4881),
        o = n(3019),
        c = n(6417),
        d = n(4765),
        u = n(5043),
        m = n(5003),
        p = n(5158),
        h = n(7971)
      const x = ['children', 'className'],
        [f, g] = (0, c.q)({
          name: 'InputGroupStylesContext',
          errorMessage:
            'useInputGroupStyles returned is \'undefined\'. Seems you forgot to wrap the components in "<InputGroup />" ',
        }),
        v = (0, m.R)(function (e, t) {
          const n = (0, p.o)('Input', e),
            c = (0, l.M)(e),
            { children: m, className: g } = c,
            v = (0, s.A)(c, x),
            j = (0, d.cx)('chakra-input__group', g),
            y = {},
            A = (0, r.a)(m),
            b = n.field
          A.forEach((e) => {
            if (n) {
              var t, a
              if (b && 'InputLeftElement' === e.type.id)
                y.paddingStart = null !== (t = b.height) && void 0 !== t ? t : b.h
              if (b && 'InputRightElement' === e.type.id)
                y.paddingEnd = null !== (a = b.height) && void 0 !== a ? a : b.h
              ;('InputRightAddon' === e.type.id && (y.borderEndRadius = 0),
                'InputLeftAddon' === e.type.id && (y.borderStartRadius = 0))
            }
          })
          const I = A.map((t) => {
            var n, a
            const s = (0, o.o)({
              size: (null === (n = t.props) || void 0 === n ? void 0 : n.size) || e.size,
              variant: (null === (a = t.props) || void 0 === a ? void 0 : a.variant) || e.variant,
            })
            return 'Input' !== t.type.id
              ? (0, u.cloneElement)(t, s)
              : (0, u.cloneElement)(t, Object.assign(s, y, t.props))
          })
          return (0, i.jsx)(
            h.B.div,
            (0, a.A)(
              (0, a.A)(
                {
                  className: j,
                  ref: t,
                  __css: (0, a.A)(
                    { width: '100%', display: 'flex', position: 'relative', isolation: 'isolate' },
                    n.group,
                  ),
                  'data-group': !0,
                },
                v,
              ),
              {},
              { children: (0, i.jsx)(f, { value: n, children: I }) },
            ),
          )
        })
      v.displayName = 'InputGroup'
    },
    9077: (e, t, n) => {
      n.d(t, { T: () => x })
      var a = n(9379),
        s = n(45),
        i = n(579),
        l = n(3033),
        r = n(4765),
        o = n(4079),
        c = n(3635),
        d = n(5003),
        u = n(5158),
        m = n(7971)
      const p = ['className', 'rows'],
        h = ['h', 'minH', 'height', 'minHeight'],
        x = (0, d.R)((e, t) => {
          const n = (0, u.V)('Textarea', e),
            d = (0, l.M)(e),
            { className: x, rows: f } = d,
            g = (0, s.A)(d, p),
            v = (0, c.t)(g),
            j = f ? (0, o.c)(n, h) : n
          return (0, i.jsx)(
            m.B.textarea,
            (0, a.A)((0, a.A)({ ref: t, rows: f }, v), {}, { className: (0, r.cx)('chakra-textarea', x), __css: j }),
          )
        })
      x.displayName = 'Textarea'
    },
    9244: (e, t, n) => {
      n.d(t, { W: () => x, t: () => f })
      var a = n(9379),
        s = n(45),
        i = n(579),
        l = n(4765),
        r = n(5973),
        o = n(7971),
        c = n(5003)
      const d = ['placement'],
        u = ['className'],
        m = ['className'],
        p = (0, o.B)('div', {
          baseStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '0',
            zIndex: 2,
          },
        }),
        h = (0, c.R)(function (e, t) {
          var n, l
          const { placement: o = 'left' } = e,
            c = (0, s.A)(e, d),
            u = (0, r.Z)(),
            m = u.field,
            h = 'left' === o ? 'insetStart' : 'insetEnd',
            x = (0, a.A)(
              {
                [h]: '0',
                width:
                  null !== (n = null === m || void 0 === m ? void 0 : m.height) && void 0 !== n
                    ? n
                    : null === m || void 0 === m
                      ? void 0
                      : m.h,
                height:
                  null !== (l = null === m || void 0 === m ? void 0 : m.height) && void 0 !== l
                    ? l
                    : null === m || void 0 === m
                      ? void 0
                      : m.h,
                fontSize: null === m || void 0 === m ? void 0 : m.fontSize,
              },
              u.element,
            )
          return (0, i.jsx)(p, (0, a.A)({ ref: t, __css: x }, c))
        })
      ;((h.id = 'InputElement'), (h.displayName = 'InputElement'))
      const x = (0, c.R)(function (e, t) {
        const { className: n } = e,
          r = (0, s.A)(e, u),
          o = (0, l.cx)('chakra-input__left-element', n)
        return (0, i.jsx)(h, (0, a.A)({ ref: t, placement: 'left', className: o }, r))
      })
      ;((x.id = 'InputLeftElement'), (x.displayName = 'InputLeftElement'))
      const f = (0, c.R)(function (e, t) {
        const { className: n } = e,
          r = (0, s.A)(e, m),
          o = (0, l.cx)('chakra-input__right-element', n)
        return (0, i.jsx)(h, (0, a.A)({ ref: t, placement: 'right', className: o }, r))
      })
      ;((f.id = 'InputRightElement'), (f.displayName = 'InputRightElement'))
    },
    9641: (e, t, n) => {
      ;(n.r(t), n.d(t, { default: () => S }))
      var a = n(5043),
        s = n(2107),
        i = n(9081),
        l = n(9838),
        r = n(8846),
        o = n(6773),
        c = n(6221),
        d = n(579)
      const u = () =>
        (0, d.jsx)(c.A, {
          children: (0, d.jsx)(r.D, {
            fontSize: { base: '3xl', md: '4xl', lg: '6xl' },
            textAlign: 'center',
            children: (0, d.jsx)(i.E, {
              as: 'span',
              position: 'relative',
              _after: {
                content: "''",
                width: 'full',
                height: (0, o.A)({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              },
              children: 'Contact Me',
            }),
          }),
        })
      var m = n(3216),
        p = n(7971),
        h = n(202),
        x = n(3225),
        f = n(5973),
        g = n(9244),
        v = n(5699),
        j = n(9077),
        y = n(9301),
        A = n(184),
        b = n(6720),
        I = n(7208)
      const N = () => {
          const e = (0, m.Zp)(),
            [t, n] = (0, a.useState)(''),
            [i, l] = (0, a.useState)(''),
            [r, o] = (0, a.useState)(''),
            c = (0, p.B)(A.K9B),
            u = (0, p.B)(b.mm2)
          return (0, d.jsx)(s.a, {
            w: { base: 'full', md: 'auto' },
            pb: 4,
            px: 4,
            children: (0, d.jsxs)('form', {
              name: 'contact',
              method: 'POST',
              'data-netlify': 'true',
              onSubmit: (n) => {
                var a
                ;(n.preventDefault(),
                  fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body:
                      ((a = { 'form-name': n.target.getAttribute('name'), name: t, email: i, message: r }),
                      Object.keys(a)
                        .map((e) => ''.concat(encodeURIComponent(e), '=').concat(encodeURIComponent(a[e])))
                        .join('&')),
                  })
                    .then(() => e.push('/success'))
                    .catch((e) => (0, I.l7)(e)))
              },
              children: [
                (0, d.jsx)('input', { type: 'hidden', name: 'form-name', value: 'contact' }),
                (0, d.jsxs)(h.T, {
                  spacing: 6,
                  maxW: 'lg',
                  w: { md: 'md' },
                  mx: 'auto',
                  children: [
                    (0, d.jsx)(x.MJ, {
                      id: 'lastName',
                      children: (0, d.jsxs)(f.M, {
                        children: [
                          (0, d.jsx)(g.W, { pointerEvents: 'none', children: (0, d.jsx)(c, { color: 'gray.300' }) }),
                          (0, d.jsx)(v.p, {
                            color: 'gray.700',
                            value: t,
                            placeholder: 'name',
                            onChange: (e) => n(e.target.value),
                            onBlur: (e) => n(e.target.value.trim()),
                            required: !0,
                          }),
                        ],
                      }),
                    }),
                    (0, d.jsx)(x.MJ, {
                      id: 'email',
                      children: (0, d.jsxs)(f.M, {
                        children: [
                          (0, d.jsx)(g.W, { pointerEvents: 'none', children: (0, d.jsx)(u, { color: 'gray.300' }) }),
                          (0, d.jsx)(v.p, {
                            value: i,
                            type: 'email',
                            placeholder: 'email address',
                            onChange: (e) => l(e.target.value),
                            onBlur: (e) => l(e.target.value.trim()),
                            required: !0,
                          }),
                        ],
                      }),
                    }),
                    (0, d.jsx)(x.MJ, {
                      id: 'message',
                      children: (0, d.jsx)(j.T, {
                        name: 'message',
                        placeholder: 'Message',
                        mt: 1,
                        rows: 2,
                        shadow: 'sm',
                        focusBorderColor: 'brand.400',
                        fontSize: { sm: 'sm' },
                        value: r,
                        onChange: (e) => o(e.target.value),
                        required: !0,
                      }),
                    }),
                    (0, d.jsx)(y.$, { type: 'submit', size: 'lg', colorScheme: 'blue', children: 'Send Message' }),
                  ],
                }),
              ],
            }),
          })
        },
        S = () =>
          (0, d.jsx)(l.A, {
            children: (0, d.jsxs)(s.a, {
              bg: 'white',
              children: [
                (0, d.jsx)(u, {}),
                (0, d.jsx)(N, {}),
                (0, d.jsxs)(i.E, {
                  textAlign: 'center',
                  pb: 6,
                  color: 'gray.600',
                  children: [
                    'or email me at',
                    ' ',
                    (0, d.jsx)(s.a, {
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
    },
  },
])
//# sourceMappingURL=641.cd4a97d6.chunk.js.map
