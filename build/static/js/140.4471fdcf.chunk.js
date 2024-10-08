'use strict'
;(self.webpackChunkauthform = self.webpackChunkauthform || []).push([
  [140],
  {
    140: (e, t, s) => {
      s.r(t), s.d(t, { default: () => A })
      var n = s(9838),
        a = s(5522),
        r = s(5043),
        l = s(8028),
        i = s(3637),
        o = s(4377),
        c = s(3461),
        d = s(5695),
        u = s(1821),
        m = s(3768),
        x = s(7852),
        h = s(8964),
        f = s(3226),
        p = s(3761),
        v = s(6254),
        y = s(4550),
        j = s(579),
        [g, S] = (0, x.q)({
          name: 'ListStylesContext',
          errorMessage:
            'useListStyles returned is \'undefined\'. Seems you forgot to wrap the components in "<List />" ',
        }),
        b = (0, f.R)(function (e, t) {
          const s = (0, p.o5)('List', e),
            { children: n, styleType: a = 'none', stylePosition: r, spacing: l, ...i } = (0, v.MN)(e),
            o = (0, h.a)(n),
            c = '& > *:not(style) ~ *:not(style)',
            d = l ? { [c]: { mt: l } } : {}
          return (0, j.jsx)(g, {
            value: s,
            children: (0, j.jsx)(y.B.ul, {
              ref: t,
              listStyleType: a,
              listStylePosition: r,
              role: 'list',
              __css: { ...s.container, ...d },
              ...i,
              children: o,
            }),
          })
        })
      ;(b.displayName = 'List'),
        ((0, f.R)((e, t) => {
          const { as: s, ...n } = e
          return (0, j.jsx)(b, { ref: t, as: 'ol', styleType: 'decimal', marginStart: '1em', ...n })
        }).displayName = 'OrderedList'),
        ((0, f.R)(function (e, t) {
          const { as: s, ...n } = e
          return (0, j.jsx)(b, { ref: t, as: 'ul', styleType: 'initial', marginStart: '1em', ...n })
        }).displayName = 'UnorderedList')
      var N = (0, f.R)(function (e, t) {
        const s = S()
        return (0, j.jsx)(y.B.li, { ref: t, ...e, __css: s.item })
      })
      N.displayName = 'ListItem'
      var T = (0, f.R)(function (e, t) {
        const s = S()
        return (0, j.jsx)(m.I, { ref: t, role: 'presentation', ...e, __css: s.icon })
      })
      T.displayName = 'ListIcon'
      var w = s(1918),
        L = (0, y.B)('div', { baseStyle: { flex: 1, justifySelf: 'stretch', alignSelf: 'stretch' } })
      L.displayName = 'Spacer'
      var k = s(3846),
        _ = s(2724),
        D = s(6720),
        C = s(1673)
      const R = (0, _.P)(l.$)
      function z() {
        var e, t
        const { noteText: s, deleteNote: n, accessToken: m, user: x, list: h, setNoteList: f } = (0, k.A)(),
          [p, v] = (0, r.useState)(''),
          y = (0, r.useCallback)(async () => {
            try {
              var e
              const t = await C.Ay.get('/api/auth/notes', {
                params: {
                  email: null === x || void 0 === x || null === (e = x.userData) || void 0 === e ? void 0 : e.email,
                },
              })
              f(t.data.notes)
            } catch (t) {
              console.error('Error fetching notes:', t)
            }
          }, [null === x || void 0 === x || null === (e = x.userData) || void 0 === e ? void 0 : e.email, f])
        return (
          (0, r.useEffect)(() => {
            var e
            null !== x && void 0 !== x && null !== (e = x.userData) && void 0 !== e && e.email && y().then()
          }, [null === x || void 0 === x || null === (t = x.userData) || void 0 === t ? void 0 : t.email, y]),
          (0, j.jsxs)(i.m, {
            maxW: '6xl',
            py: 24,
            px: { base: 6, md: 12 },
            children: [
              (0, j.jsx)('form', {
                onSubmit: async function (e) {
                  if ((e.preventDefault(), m))
                    try {
                      await s({ text: p, email: x.userData.email }), console.log('Note sent successfully'), v('')
                    } catch (t) {
                      console.error('Error sending note:', t)
                    }
                  else console.log('Access token not available')
                },
                children: (0, j.jsxs)(a.az, {
                  position: 'relative',
                  maxW: '850px',
                  mx: 'auto',
                  mb: { base: 4, md: 16 },
                  children: [
                    (0, j.jsx)(o.D, {
                      fontSize: { base: '3xl', md: '4xl', lg: '6xl' },
                      textAlign: 'center',
                      color: '#204E78',
                      children: 'LIST of MY NOTES',
                    }),
                    (0, j.jsx)(c.MJ, {
                      children: (0, j.jsx)(d.T, {
                        value: p,
                        placeholder: 'Please, write some note',
                        onChange: (e) => v(e.target.value),
                        size: 'sm',
                      }),
                    }),
                    (0, j.jsx)(u.B, {
                      spacing: 10,
                      children: (0, j.jsx)(R, {
                        colorScheme: 'teal',
                        type: 'submit',
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: 'Submit',
                      }),
                    }),
                  ],
                }),
              }),
              (0, j.jsx)(b, {
                spacing: 3,
                children:
                  null === h || void 0 === h
                    ? void 0
                    : h.toReversed().map((e) =>
                        (0, j.jsx)(N, {
                          children: (0, j.jsxs)(w.s, {
                            children: [
                              (0, j.jsxs)(a.az, {
                                children: [(0, j.jsx)(T, { as: D.mU9, color: 'green.500' }), e.text],
                              }),
                              (0, j.jsx)(L, {}),
                              (0, j.jsx)(l.$, {
                                size: 'sm',
                                height: '28px',
                                width: '100px',
                                border: '1px',
                                borderColor: 'red.500',
                                onClick: () =>
                                  (async function (e) {
                                    if (m)
                                      try {
                                        const t = await n(e)
                                        200 === t.status && 'OK' === t.statusText && y()
                                      } catch (t) {
                                        console.error('Error sending note:', t)
                                      }
                                    else console.log('Access token not available')
                                  })(e._id),
                                children: 'Delete',
                              }),
                            ],
                          }),
                        }),
                      ),
              }),
            ],
          })
        )
      }
      function A() {
        return (0, j.jsx)(n.A, { children: (0, j.jsx)(a.az, { bg: 'white', children: (0, j.jsx)(z, {}) }) })
      }
    },
    5695: (e, t, s) => {
      s.d(t, { T: () => u })
      var n = s(4617),
        a = s(3226),
        r = s(3761),
        l = s(6254),
        i = s(4550),
        o = s(9254),
        c = s(579)
      var d = ['h', 'minH', 'height', 'minHeight'],
        u = (0, a.R)((e, t) => {
          const s = (0, r.Vl)('Textarea', e),
            { className: a, rows: u, ...m } = (0, l.MN)(e),
            x = (0, n.t)(m),
            h = u
              ? (function (e) {
                  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
                  const s = Object.assign({}, e)
                  for (const n of t) n in s && delete s[n]
                  return s
                })(s, d)
              : s
          return (0, c.jsx)(i.B.textarea, {
            ref: t,
            rows: u,
            ...x,
            className: (0, o.cx)('chakra-textarea', a),
            __css: h,
          })
        })
      u.displayName = 'Textarea'
    },
  },
])
//# sourceMappingURL=140.4471fdcf.chunk.js.map
