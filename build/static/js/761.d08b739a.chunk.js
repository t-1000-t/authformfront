'use strict'
;(self.webpackChunkauthform = self.webpackChunkauthform || []).push([
  [761],
  {
    761: (e, s, l) => {
      ;(l.r(s), l.d(s, { default: () => N }))
      var n = l(5043),
        t = l(5475),
        r = l(4093),
        a = l(2107),
        o = l(9904),
        i = l(7024),
        c = l(8846),
        d = l(9081),
        h = l(3225),
        x = l(6668),
        j = l(525),
        p = l(5371),
        u = l(423),
        g = l(6446),
        m = l(3216),
        f = l(9301),
        w = l(7971),
        v = l(5973),
        y = l(9244),
        S = l(5699),
        b = l(8787),
        k = l(5871),
        B = l(5707),
        C = l(184),
        M = l(9186),
        _ = l(579)
      const A = (0, g.P)(f.$),
        E = (0, w.B)(C.K9B),
        J = (0, w.B)(C.JhU),
        W = () => {
          const e = (0, M.A)((e) => e.login),
            s = (0, M.A)((e) => e.accessToken),
            l = (0, M.A)((e) => e.setToken),
            [r, i] = (0, n.useState)(''),
            [c, d] = (0, n.useState)(''),
            [x, j] = (0, n.useState)(!1),
            [p, u] = (0, n.useState)(!1),
            [g, w] = (0, n.useState)(!1),
            [C, W] = (0, n.useState)(!1),
            N = (0, m.Zp)()
          return (
            (0, n.useEffect)(() => {
              s && w(!0)
            }, [s]),
            g && N('/'),
            (0, _.jsx)(a.a, {
              as: 'form',
              rounded: 'lg',
              shadow: '2xl',
              p: 8,
              w: { base: 'full', md: 'md' },
              onSubmit: (s) =>
                (async function (s) {
                  ;(s.preventDefault(), j(!0), u(!1))
                  try {
                    await e(r, c.trim())
                  } catch (a) {
                    var n, t
                    const e =
                      (null === (n = a.response) || void 0 === n || null === (t = n.data) || void 0 === t
                        ? void 0
                        : t.message) || a.message
                    ;(!1 !== e && l(null), u(e))
                  } finally {
                    j(!1)
                  }
                })(s),
              children: (0, _.jsx)(o.B, {
                spacing: 4,
                children: (0, _.jsxs)(o.B, {
                  spacing: 10,
                  children: [
                    (0, _.jsx)(h.MJ, {
                      children: (0, _.jsxs)(v.M, {
                        children: [
                          (0, _.jsx)(y.W, { pointerEvents: 'none', children: (0, _.jsx)(E, { color: 'gray.300' }) }),
                          (0, _.jsx)(S.p, {
                            type: 'email',
                            placeholder: 'email address',
                            onChange: (e) => i(e.target.value),
                          }),
                        ],
                      }),
                    }),
                    (0, _.jsxs)(h.MJ, {
                      children: [
                        (0, _.jsxs)(v.M, {
                          children: [
                            (0, _.jsx)(y.W, {
                              pointerEvents: 'none',
                              color: 'gray.300',
                              children: (0, _.jsx)(J, { color: 'gray.300' }),
                            }),
                            (0, _.jsx)(S.p, {
                              type: C ? 'text' : 'password',
                              placeholder: 'Password',
                              onChange: (e) => d(e.target.value),
                              required: !0,
                            }),
                            (0, _.jsx)(y.t, {
                              width: '4.5rem',
                              children: (0, _.jsx)(f.$, {
                                h: '1.75rem',
                                size: 'sm',
                                onClick: () => W(!C),
                                children: C ? 'Hide' : 'Show',
                              }),
                            }),
                          ],
                        }),
                        (0, _.jsx)(h.eK, {
                          textAlign: 'right',
                          children: (0, _.jsx)(t.N_, { to: '/reset-password', children: 'Forgot password?' }),
                        }),
                      ],
                    }),
                    (0, _.jsxs)(o.B, {
                      spacing: 10,
                      children: [
                        (0, _.jsx)(A, {
                          colorScheme: 'teal',
                          isLoading: x,
                          type: 'submit',
                          whileHover: { scale: 1.05 },
                          whileTap: { scale: 0.95 },
                          children: 'Sign in',
                        }),
                        p &&
                          (0, _.jsxs)(b.F, {
                            status: 'error',
                            mt: 4,
                            color: 'teal.700',
                            fontWeight: 'semibold',
                            children: [
                              (0, _.jsx)(k._, {}),
                              (0, _.jsx)(B.J, { position: 'absolute', right: '8px', top: '8px', onClick: () => u(!1) }),
                              p,
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          )
        },
        N = () => {
          const { toggleColorMode: e } = (0, r.G6)()
          return (0, _.jsx)(a.a, {
            minH: '100vh',
            children: (0, _.jsxs)(o.B, {
              spacing: 8,
              maxW: 'lg',
              w: 'full',
              py: 12,
              px: { md: 6 },
              mx: 'auto',
              position: 'relative',
              children: [
                (0, _.jsxs)(o.B, {
                  align: 'center',
                  children: [
                    (0, _.jsx)(i.e, { bg: 'teal.500' }),
                    (0, _.jsx)(c.D, { color: 'teal.400', children: 'Welcome' }),
                    (0, _.jsxs)(d.E, {
                      textAlign: 'center',
                      children: [
                        'New to us?',
                        ' ',
                        (0, _.jsx)(t.N_, {
                          color: 'teal.500',
                          to: '/signup',
                          children: (0, _.jsx)(a.a, {
                            as: 'span',
                            bg: 'teal',
                            px: 2,
                            py: 1,
                            rounded: 'md',
                            children: 'Sign Up',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsx)(W, {}),
                (0, _.jsxs)(h.MJ, {
                  display: 'flex',
                  alignItems: 'center',
                  children: [
                    (0, _.jsx)(x.l, { htmlFor: 'dark_mode', mb: '0', children: 'Enable Dark Mode?' }),
                    (0, _.jsx)(j.d, { id: 'dark_mode', colorScheme: 'teal', size: 'lg', onChange: e }),
                    (0, _.jsxs)(p.s, {
                      color: 'gray.600',
                      align: 'center',
                      as: 'button',
                      mx: 'auto',
                      children: [
                        (0, _.jsx)(u.eh5, {}),
                        (0, _.jsx)(t.N_, { to: '/', fontSize: 'xs', children: 'Back' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        }
    },
  },
])
//# sourceMappingURL=761.d08b739a.chunk.js.map
