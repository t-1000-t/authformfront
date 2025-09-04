'use strict'
;(self.webpackChunkauthform = self.webpackChunkauthform || []).push([
  [472],
  {
    3472: (e, t, s) => {
      ;(s.r(t), s.d(t, { default: () => te }))
      var n = s(5043),
        i = s(6773),
        r = s(9904),
        a = s(5371),
        l = s(8846),
        o = s(3225),
        c = s(6668),
        d = s(525),
        h = s(9379),
        u = s(45),
        p = s(579),
        m = s(2470),
        x = s(5003),
        g = s(7971)
      const j = [
          'templateAreas',
          'gap',
          'rowGap',
          'columnGap',
          'column',
          'row',
          'autoFlow',
          'autoRows',
          'templateRows',
          'autoColumns',
          'templateColumns',
        ],
        f = (0, x.R)(function (e, t) {
          const {
              templateAreas: s,
              gap: n,
              rowGap: i,
              columnGap: r,
              column: a,
              row: l,
              autoFlow: o,
              autoRows: c,
              templateRows: d,
              autoColumns: m,
              templateColumns: x,
            } = e,
            f = (0, u.A)(e, j),
            v = {
              display: 'grid',
              gridTemplateAreas: s,
              gridGap: n,
              gridRowGap: i,
              gridColumnGap: r,
              gridAutoColumns: m,
              gridColumn: a,
              gridRow: l,
              gridAutoFlow: o,
              gridAutoRows: c,
              gridTemplateRows: d,
              gridTemplateColumns: x,
            }
          return (0, p.jsx)(g.B.div, (0, h.A)({ ref: t, __css: v }, f))
        })
      f.displayName = 'Grid'
      var v = s(7841),
        b = s(6448)
      const A = ['columns', 'spacingX', 'spacingY', 'spacing', 'minChildWidth'],
        y = (0, x.R)(function (e, t) {
          const { columns: s, spacingX: n, spacingY: i, spacing: r, minChildWidth: a } = e,
            l = (0, u.A)(e, A),
            o = (0, v.D)(),
            c = a
              ? (function (e, t) {
                  return (0, m.bk)(e, (e) => {
                    const s = (0, b.gf)('sizes', e, 'number' === typeof (n = e) ? ''.concat(n, 'px') : n)(t)
                    var n
                    return null === e ? null : 'repeat(auto-fit, minmax('.concat(s, ', 1fr))')
                  })
                })(a, o)
              : ((d = s), (0, m.bk)(d, (e) => (null === e ? null : 'repeat('.concat(e, ', minmax(0, 1fr))'))))
          var d
          return (0, p.jsx)(f, (0, h.A)({ ref: t, gap: r, columnGap: n, rowGap: i, templateColumns: c }, l))
        })
      y.displayName = 'SimpleGrid'
      var S = s(2107),
        w = s(5699),
        C = s(9301),
        _ = s(6659),
        k = s(9081),
        E = s(7781),
        B = s(7189),
        N = s(6221),
        R = s(9186)
      const I = () => {
        const { callFooAgent: e } = (0, R.A)(),
          [t, s] = (0, n.useState)(''),
          [i, a] = (0, n.useState)(!1),
          [o, c] = (0, n.useState)(''),
          [d, h] = (0, n.useState)([])
        return (0, p.jsx)(N.A, {
          children: (0, p.jsxs)(r.B, {
            gap: 4,
            children: [
              (0, p.jsx)(l.D, { size: 'lg', children: 'FOO' }),
              (0, p.jsx)('form', {
                onSubmit: async (s) => {
                  if ((s.preventDefault(), c(''), h([]), t.trim())) {
                    a(!0)
                    try {
                      const s = await e({ q: t, num: 3 }),
                        { data: n } = s
                      if ('ok' === !s.statusText) throw new Error(n.error || 'Request failed')
                      h(n.results || [])
                    } catch (n) {
                      c(n.message || 'Search failed')
                    } finally {
                      a(!1)
                    }
                  }
                },
                children: (0, p.jsxs)(r.B, {
                  direction: { base: 'column', md: 'row' },
                  gap: 3,
                  children: [
                    (0, p.jsx)(w.p, {
                      placeholder: 'Search the web\u2026',
                      value: t,
                      onChange: (e) => s(e.target.value),
                    }),
                    (0, p.jsx)(C.$, {
                      type: 'submit',
                      isDisabled: i,
                      children: i ? (0, p.jsx)(_.y, { size: 'sm' }) : 'Search',
                    }),
                  ],
                }),
              }),
              o && (0, p.jsx)(k.E, { color: 'red.500', children: o }),
              !!d.length &&
                (0, p.jsx)(S.a, {
                  children: (0, p.jsx)(E.B8, {
                    spacing: 3,
                    children: d.map((e) =>
                      (0, p.jsxs)(
                        E.ck,
                        {
                          children: [
                            (0, p.jsxs)(B.N, {
                              href: e.link,
                              isExternal: !0,
                              fontWeight: 'semibold',
                              children: [e.pos, '. ', e.title],
                            }),
                            (0, p.jsx)(k.E, { fontSize: 'sm', opacity: 0.8, children: e.displayLink }),
                            (0, p.jsx)(k.E, { fontSize: 'sm', children: e.snippet }),
                          ],
                        },
                        e.link,
                      ),
                    ),
                  }),
                }),
            ],
          }),
        })
      }
      var D = s(3033),
        z = s(6501)
      var T = s(8813),
        L = s(4765)
      const W = ['children', 'placeholder', 'className'],
        M = (0, x.R)(function (e, t) {
          const { children: s, placeholder: n, className: i } = e,
            r = (0, u.A)(e, W)
          return (0, p.jsxs)(
            g.B.select,
            (0, h.A)(
              (0, h.A)({}, r),
              {},
              {
                ref: t,
                className: (0, L.cx)('chakra-select', i),
                children: [n && (0, p.jsx)('option', { value: '', children: n }), s],
              },
            ),
          )
        })
      M.displayName = 'SelectField'
      var F = s(3635),
        G = s(5158)
      const H = [
          'rootProps',
          'placeholder',
          'icon',
          'color',
          'height',
          'h',
          'minH',
          'minHeight',
          'iconColor',
          'iconSize',
        ],
        q = ['children'],
        J = (0, x.R)((e, t) => {
          var s
          const n = (0, G.o)('Select', e),
            i = (0, D.M)(e),
            {
              rootProps: r,
              placeholder: a,
              icon: l,
              color: o,
              height: c,
              h: d,
              minH: m,
              minHeight: x,
              iconColor: j,
              iconSize: f,
            } = i,
            v = (0, u.A)(i, H),
            [b, A] = (function (e, t) {
              const s = {},
                n = {}
              for (const [i, r] of Object.entries(e)) t.includes(i) ? (s[i] = r) : (n[i] = r)
              return [s, n]
            })(v, z.GF),
            y = (0, F.t)(A),
            S = { width: '100%', height: 'fit-content', position: 'relative', color: o },
            w = (0, h.A)(
              (0, h.A)({ paddingEnd: '2rem' }, n.field),
              {},
              { _focus: (0, h.A)({ zIndex: 'unset' }, null === (s = n.field) || void 0 === s ? void 0 : s._focus) },
            )
          return (0, p.jsxs)(
            g.B.div,
            (0, h.A)(
              (0, h.A)((0, h.A)({ className: 'chakra-select__wrapper', __css: S }, b), r),
              {},
              {
                children: [
                  (0, p.jsx)(
                    M,
                    (0, h.A)(
                      (0, h.A)(
                        {
                          ref: t,
                          height: null !== d && void 0 !== d ? d : c,
                          minH: null !== m && void 0 !== m ? m : x,
                          placeholder: a,
                        },
                        y,
                      ),
                      {},
                      { __css: w, children: e.children },
                    ),
                  ),
                  (0, p.jsx)(
                    $,
                    (0, h.A)(
                      (0, h.A)(
                        (0, h.A)({ 'data-disabled': (0, T.s)(y.disabled) }, (j || o) && { color: j || o }),
                        {},
                        { __css: n.icon },
                        f && { fontSize: f },
                      ),
                      {},
                      { children: l },
                    ),
                  ),
                ],
              },
            ),
          )
        })
      J.displayName = 'Select'
      const P = (e) =>
          (0, p.jsx)(
            'svg',
            (0, h.A)(
              (0, h.A)({ viewBox: '0 0 24 24' }, e),
              {},
              {
                children: (0, p.jsx)('path', {
                  fill: 'currentColor',
                  d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z',
                }),
              },
            ),
          ),
        O = (0, g.B)('div', {
          baseStyle: {
            position: 'absolute',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            top: '50%',
            transform: 'translateY(-50%)',
          },
        }),
        $ = (e) => {
          const { children: t = (0, p.jsx)(P, {}) } = e,
            s = (0, u.A)(e, q),
            i = (0, n.cloneElement)(t, {
              role: 'presentation',
              className: 'chakra-select__icon',
              focusable: !1,
              'aria-hidden': !0,
              style: { width: '1em', height: '1em', color: 'currentColor' },
            })
          return (0, p.jsx)(
            O,
            (0, h.A)(
              (0, h.A)({}, s),
              {},
              { className: 'chakra-select__icon-wrapper', children: (0, n.isValidElement)(t) ? i : null },
            ),
          )
        }
      $.displayName = 'SelectIcon'
      var V = s(9077)
      const Y = [
          'borderLeftWidth',
          'borderBottomWidth',
          'borderTopWidth',
          'borderRightWidth',
          'borderWidth',
          'borderStyle',
          'borderColor',
        ],
        U = ['className', 'orientation', '__css'],
        X = (0, x.R)(function (e, t) {
          const s = (0, G.V)('Divider', e),
            {
              borderLeftWidth: n,
              borderBottomWidth: i,
              borderTopWidth: r,
              borderRightWidth: a,
              borderWidth: l,
              borderStyle: o,
              borderColor: c,
            } = s,
            d = (0, u.A)(s, Y),
            m = (0, D.M)(e),
            { className: x, orientation: j = 'horizontal', __css: f } = m,
            v = (0, u.A)(m, U),
            b = {
              vertical: { borderLeftWidth: n || a || l || '1px', height: '100%' },
              horizontal: { borderBottomWidth: i || r || l || '1px', width: '100%' },
            }
          return (0, p.jsx)(
            g.B.hr,
            (0, h.A)(
              (0, h.A)({ ref: t, 'aria-orientation': j }, v),
              {},
              {
                __css: (0, h.A)(
                  (0, h.A)((0, h.A)({}, d), {}, { border: '0', borderColor: c, borderStyle: o }, b[j]),
                  f,
                ),
                className: (0, L.cx)('chakra-divider', x),
              },
            ),
          )
        })
      X.displayName = 'Divider'
      var Q = s(7139),
        K = s(3604)
      const Z = () => {
          var e
          const { socket: t } = (0, K.Y)(),
            { getRichChat: s, user: i, pushChatBotId: a, botData: o } = (0, R.A)(),
            [c, d] = (0, n.useState)([]),
            [u, m] = (0, n.useState)(0),
            [x, g] = (0, n.useState)('Hello from web!'),
            [j, f] = (0, n.useState)('Markdown'),
            [v, b] = (0, n.useState)(!1),
            [A, y] = (0, n.useState)(''),
            [_, I] = (0, n.useState)(!1),
            D = null === i || void 0 === i || null === (e = i.userData) || void 0 === e ? void 0 : e.email
          ;((0, n.useEffect)(() => {
            if (!t) return () => {}
            const e = (e) => {
                d((t) => [(0, h.A)({ type: 'incoming' }, e), ...t].slice(0, 100))
              },
              s = (e) => {
                d((t) => [(0, h.A)({ type: 'results' }, e), ...t].slice(0, 100))
              }
            return (
              t.on('tg:incoming', e),
              t.on('tg:results', s),
              () => {
                ;(t.off('tg:incoming', e), t.off('tg:results', s))
              }
            )
          }, [t]),
            (0, n.useEffect)(() => {
              var e
              o && m(null === o || void 0 === o || null === (e = o.bot) || void 0 === e ? void 0 : e.chatId)
            }, [o]))
          return (0, p.jsx)(N.A, {
            children: (0, p.jsxs)(r.B, {
              gap: 6,
              children: [
                (0, p.jsx)(l.D, { size: 'md', children: 'Telegram Bot \u2014 Live Feed' }),
                (0, p.jsxs)(k.E, { fontSize: 'sm', opacity: 0.7, children: ['Current CHAT ID in the DB ', u] }),
                (0, p.jsx)(C.$, {
                  onClick: () => {
                    a({ chatBotId: u, email: D }).then()
                  },
                  children: 'Save Chat ID',
                }),
                (0, p.jsx)(w.p, {
                  placeholder: 'chat_id (e.g. 123456789)',
                  value: u,
                  onChange: (e) => m(e.target.value),
                }),
                (0, p.jsxs)(S.a, {
                  p: 4,
                  borderWidth: '1px',
                  borderRadius: 'lg',
                  children: [
                    (0, p.jsx)(l.D, { size: 'sm', mb: 3, children: 'Send message to Telegram' }),
                    (0, p.jsx)('form', {
                      onSubmit: async (e) => {
                        ;(e.preventDefault(), I(!1), y(''))
                        const t = String(u).trim()
                        if (t) {
                          b(!0)
                          try {
                            const e = s({ chatId: /^\d+$/.test(t) ? Number(t) : t, t: x, mode: j }),
                              { data: n } = await e
                            if (!n.ok) throw new Error((null === n || void 0 === n ? void 0 : n.error) || 'Send failed')
                            I(!0)
                          } catch (n) {
                            y(n.message || 'Send failed')
                          } finally {
                            b(!1)
                          }
                        } else y('chat_id is required (numeric Telegram chat id).')
                      },
                      children: (0, p.jsxs)(r.B, {
                        gap: 3,
                        children: [
                          (0, p.jsx)(w.p, {
                            placeholder: 'chat_id (e.g. 123456789)',
                            value: u,
                            onChange: (e) => m(e.target.value),
                          }),
                          (0, p.jsxs)(J, {
                            value: j,
                            onChange: (e) => f(e.target.value),
                            children: [
                              (0, p.jsx)('option', { value: 'Markdown', children: 'Markdown' }),
                              (0, p.jsx)('option', { value: 'HTML', children: 'HTML' }),
                            ],
                          }),
                          (0, p.jsx)(V.T, {
                            placeholder: 'Message text',
                            value: x,
                            onChange: (e) => g(e.target.value),
                            rows: 4,
                          }),
                          (0, p.jsxs)(r.B, {
                            direction: 'row',
                            align: 'center',
                            children: [
                              (0, p.jsx)(C.$, { type: 'submit', isLoading: v, children: 'Send' }),
                              _ && (0, p.jsx)(k.E, { color: 'green.500', children: 'Sent \u2705' }),
                              A && (0, p.jsx)(k.E, { color: 'red.500', children: A }),
                            ],
                          }),
                          (0, p.jsxs)(k.E, {
                            fontSize: 'xs',
                            opacity: 0.7,
                            children: [
                              'Tip: ',
                              (0, p.jsx)('code', { children: 'chat_id' }),
                              ' is the numeric ID you get from ',
                              (0, p.jsx)('code', { children: 'ctx.from.id' }),
                              ' when the user messages your bot.',
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, p.jsx)(X, {}),
                (0, p.jsx)(E.B8, {
                  spacing: 3,
                  children: c.map((e, t) => {
                    var s, n
                    return (0, p.jsx)(
                      E.ck,
                      {
                        p: 3,
                        borderWidth: '1px',
                        borderRadius: 'lg',
                        children: (0, p.jsxs)(r.B, {
                          gap: 2,
                          children: [
                            (0, p.jsxs)(S.a, {
                              children: [
                                (0, p.jsx)(Q.E, { children: 'incoming' === e.type ? 'Incoming' : 'Results' }),
                                (0, p.jsxs)(k.E, {
                                  as: 'span',
                                  ml: 2,
                                  fontWeight: 'semibold',
                                  children: [
                                    '@',
                                    (null === (s = e.from) || void 0 === s ? void 0 : s.username) ||
                                      (null === (n = e.from) || void 0 === n ? void 0 : n.id),
                                  ],
                                }),
                                (0, p.jsx)(k.E, {
                                  as: 'span',
                                  ml: 2,
                                  fontSize: 'sm',
                                  opacity: 0.7,
                                  children: new Date(e.at || Date.now()).toLocaleTimeString(),
                                }),
                              ],
                            }),
                            (0, p.jsxs)(k.E, { children: [(0, p.jsx)('strong', { children: 'Query:' }), ' ', e.q] }),
                            'results' === e.type &&
                              Array.isArray(e.results) &&
                              (0, p.jsx)(r.B, {
                                gap: 2,
                                children: e.results
                                  .slice(0, 3)
                                  .map((e) =>
                                    (0, p.jsxs)(
                                      S.a,
                                      {
                                        children: [
                                          (0, p.jsx)(B.N, {
                                            href: e.link,
                                            isExternal: !0,
                                            fontWeight: 'semibold',
                                            children: e.title,
                                          }),
                                          (0, p.jsx)(k.E, { fontSize: 'sm', opacity: 0.8, children: e.snippet }),
                                        ],
                                      },
                                      e.link,
                                    ),
                                  ),
                              }),
                          ],
                        }),
                      },
                      ''.concat(e.at || t, '-').concat(e.type),
                    )
                  }),
                }),
              ],
            }),
          })
        },
        ee = () => {
          var e, t
          const { pushDataAgentSearch: s, botData: i } = (0, R.A)(),
            [a, h] = (0, n.useState)(!1),
            [u, m] = (0, n.useState)(5),
            [x, g] = (0, n.useState)(''),
            [j, f] = (0, n.useState)(''),
            [v, b] = (0, n.useState)(''),
            [A, y] = (0, n.useState)(''),
            [S, _] = (0, n.useState)(!1),
            [I, D] = (0, n.useState)(''),
            [z, T] = (0, n.useState)(!1),
            [L, W] = (0, n.useState)({}),
            M = null === i || void 0 === i || null === (e = i.bot) || void 0 === e ? void 0 : e.chatId
          ;(0, n.useEffect)(() => {}, [])
          return (0, p.jsxs)(N.A, {
            children: [
              (0, p.jsxs)(r.B, {
                gap: 6,
                mb: 6,
                children: [
                  (0, p.jsx)(l.D, { size: 'sm', mb: 3, children: 'Agent to searching in the Internet' }),
                  (0, p.jsxs)(k.E, {
                    fontSize: 'sm',
                    opacity: 0.7,
                    mb: 4,
                    children: ['Current CHAT_ID from the DB ', M],
                  }),
                  (0, p.jsxs)(o.MJ, {
                    display: 'flex',
                    alignItems: 'center',
                    m: 2,
                    children: [
                      (0, p.jsx)(c.l, { htmlFor: 'email-alerts', mb: '0', children: 'Own URL' }),
                      (0, p.jsx)(d.d, { id: 'url-alerts', onChange: () => h(!a) }),
                    ],
                  }),
                  (0, p.jsx)('form', {
                    onSubmit: async (e) => {
                      ;(e.preventDefault(), T(!1), D(''), _(!0))
                      try {
                        const e = s({
                            url: x,
                            position: j,
                            country: v,
                            town: A,
                            num: u,
                            toTelegram: !0,
                            chat_id: M,
                          }).then(),
                          { data: t } = await e
                        if ((W(t), 'ok' === !e.status)) throw new Error(t.error || 'Request failed')
                        T(!0)
                      } catch (t) {
                        D(t.message || 'Failed to search')
                      } finally {
                        _(!1)
                      }
                    },
                    children: (0, p.jsxs)(r.B, {
                      gap: 3,
                      children: [
                        a
                          ? (0, p.jsx)(w.p, {
                              placeholder: 'Enter your own URL (e.g. https://ie.indeed.com)',
                              value: x,
                              onChange: (e) => g(e.target.value),
                            })
                          : (0, p.jsxs)(J, {
                              value: x,
                              onChange: (e) => g(e.target.value),
                              children: [
                                (0, p.jsx)('option', { value: 'https://ie.indeed.com', children: 'IE.Indeed.com' }),
                                (0, p.jsx)('option', { value: 'https://irishjobs.ie', children: 'IrishJobs.ie' }),
                                (0, p.jsx)('option', { value: 'https://ie.jooble.org', children: 'IE.Jooble.org' }),
                                (0, p.jsx)('option', { value: 'https://jobs.ie', children: 'Jobs.ie' }),
                                (0, p.jsx)('option', { value: 'https://glassdoor.ie', children: 'GlassDoor.ie' }),
                                (0, p.jsx)('option', { value: 'https://publicjobs.ie', children: 'PublicJobs.ie' }),
                                (0, p.jsx)('option', { value: 'https://jobalert.ie', children: 'JobAlert.ie' }),
                                (0, p.jsx)('option', { value: 'https://linkedin.com', children: 'LinkedIn.com' }),
                              ],
                            }),
                        (0, p.jsx)(w.p, {
                          placeholder: 'Enter position (e.g. Frontend Developer)',
                          value: j,
                          onChange: (e) => f(e.target.value),
                        }),
                        (0, p.jsx)(w.p, {
                          placeholder: 'Enter Country (e.g. Ireland)',
                          value: v,
                          onChange: (e) => b(e.target.value),
                        }),
                        (0, p.jsx)(w.p, {
                          placeholder: 'Enter Town (e.g. Dublin)',
                          value: A,
                          onChange: (e) => y(e.target.value),
                        }),
                        (0, p.jsxs)(J, {
                          value: u,
                          onChange: (e) => m(e.target.value),
                          children: [
                            (0, p.jsx)('option', { value: 1, children: '1' }),
                            (0, p.jsx)('option', { value: 2, children: '2' }),
                            (0, p.jsx)('option', { value: 3, children: '3' }),
                            (0, p.jsx)('option', { value: 4, children: '4' }),
                            (0, p.jsx)('option', { value: 5, children: '5' }),
                            (0, p.jsx)('option', { value: 6, children: '6' }),
                            (0, p.jsx)('option', { value: 7, children: '7' }),
                            (0, p.jsx)('option', { value: 8, children: '8' }),
                            (0, p.jsx)('option', { value: 9, children: '9' }),
                            (0, p.jsx)('option', { value: 10, children: '10' }),
                          ],
                        }),
                        (0, p.jsxs)(r.B, {
                          direction: 'row',
                          align: 'center',
                          children: [
                            (0, p.jsx)(C.$, { type: 'submit', isLoading: S, children: 'Send' }),
                            z && (0, p.jsx)(k.E, { color: 'green.500', children: 'Sent \u2705' }),
                            I && (0, p.jsx)(k.E, { color: 'red.500', children: I }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              L && (0, p.jsx)(l.D, { size: 'sm', mb: 3, children: L.query }),
              (null === L || void 0 === L || null === (t = L.results) || void 0 === t ? void 0 : t.length) > 0 &&
                (0, p.jsx)(E._J, {
                  children: L.results.map((e) => {
                    let { pos: t, title: s, link: n } = e
                    return (0, p.jsxs)(
                      E.ck,
                      {
                        children: [
                          (0, p.jsx)(k.E, { as: 'span', mr: 2, children: s }),
                          (0, p.jsx)('br', {}),
                          (0, p.jsx)(B.N, { color: 'teal.500', href: n, isExternal: !0, children: n }),
                        ],
                      },
                      t,
                    )
                  }),
                }),
            ],
          })
        },
        te = () => {
          var e
          const { user: t, getChatBotId: s } = (0, R.A)(),
            [h, u] = (0, n.useState)(!1),
            m = null === t || void 0 === t || null === (e = t.userData) || void 0 === e ? void 0 : e.email
          ;(0, n.useEffect)(() => {
            m && s({ email: m })
          }, [m, s])
          const x = (0, i.A)({ base: 'sm', md: 'md' })
          return (0, p.jsx)(N.A, {
            children: (0, p.jsxs)(r.B, {
              spacing: { base: 4, md: 6 },
              children: [
                (0, p.jsxs)(a.s, {
                  align: 'center',
                  justify: 'space-between',
                  flexWrap: 'wrap',
                  gap: 3,
                  children: [
                    (0, p.jsx)(l.D, { fontSize: { base: 'lg', md: 'xl' }, children: 'Foo Agent' }),
                    (0, p.jsxs)(o.MJ, {
                      display: 'flex',
                      alignItems: 'center',
                      w: 'fit-content',
                      gap: 2,
                      m: 0,
                      children: [
                        (0, p.jsx)(c.l, {
                          htmlFor: 'toggle-agent-view',
                          mb: '0',
                          fontSize: x,
                          children: 'Request Agent view',
                        }),
                        (0, p.jsx)(d.d, {
                          id: 'toggle-agent-view',
                          isChecked: h,
                          onChange: (e) => u(e.target.checked),
                          'aria-label': 'Toggle between Request Agent and Chat views',
                          size: (0, i.A)({ base: 'lg', md: 'lg' }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, p.jsxs)(y, {
                  columns: { base: 1, md: 2 },
                  gap: { base: 4, md: 6 },
                  alignItems: 'start',
                  children: [
                    (0, p.jsx)(S.a, {
                      p: { base: 3, md: 4 },
                      borderWidth: '1px',
                      borderRadius: '2xl',
                      children: (0, p.jsx)(I, {}),
                    }),
                    (0, p.jsx)(S.a, {
                      p: { base: 3, md: 4 },
                      borderWidth: '1px',
                      borderRadius: '2xl',
                      minH: { base: 'auto', md: '60vh' },
                      children: h ? (0, p.jsx)(ee, {}) : (0, p.jsx)(Z, {}),
                    }),
                  ],
                }),
              ],
            }),
          })
        }
    },
    5699: (e, t, s) => {
      s.d(t, { p: () => p })
      var n = s(9379),
        i = s(45),
        r = s(579),
        a = s(3033),
        l = s(4765),
        o = s(3635),
        c = s(5003),
        d = s(5158),
        h = s(7971)
      const u = ['htmlSize'],
        p = (0, c.R)(function (e, t) {
          const { htmlSize: s } = e,
            c = (0, i.A)(e, u),
            p = (0, d.o)('Input', c),
            m = (0, a.M)(c),
            x = (0, o.t)(m),
            g = (0, l.cx)('chakra-input', e.className)
          return (0, r.jsx)(h.B.input, (0, n.A)((0, n.A)({ size: s }, x), {}, { __css: p.field, ref: t, className: g }))
        })
      ;((p.displayName = 'Input'), (p.id = 'Input'))
    },
    7139: (e, t, s) => {
      s.d(t, { E: () => u })
      var n = s(9379),
        i = s(45),
        r = s(579),
        a = s(3033),
        l = s(4765),
        o = s(5003),
        c = s(5158),
        d = s(7971)
      const h = ['className'],
        u = (0, o.R)(function (e, t) {
          const s = (0, c.V)('Badge', e),
            o = (0, a.M)(e),
            { className: u } = o,
            p = (0, i.A)(o, h)
          return (0, r.jsx)(
            d.B.span,
            (0, n.A)(
              (0, n.A)({ ref: t, className: (0, l.cx)('chakra-badge', e.className) }, p),
              {},
              { __css: (0, n.A)({ display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'middle' }, s) },
            ),
          )
        })
      u.displayName = 'Badge'
    },
    7781: (e, t, s) => {
      s.d(t, { B8: () => f, _J: () => v, ck: () => b, kp: () => A })
      var n = s(9379),
        i = s(45),
        r = s(579),
        a = s(3033),
        l = s(4881),
        o = s(6417),
        c = s(5011),
        d = s(5003),
        h = s(5158),
        u = s(7971)
      const p = ['children', 'styleType', 'stylePosition', 'spacing'],
        m = ['as'],
        x = ['as'],
        [g, j] = (0, o.q)({
          name: 'ListStylesContext',
          errorMessage:
            'useListStyles returned is \'undefined\'. Seems you forgot to wrap the components in "<List />" ',
        }),
        f = (0, d.R)(function (e, t) {
          const s = (0, h.o)('List', e),
            o = (0, a.M)(e),
            { children: c, styleType: d = 'none', stylePosition: m, spacing: x } = o,
            j = (0, i.A)(o, p),
            f = (0, l.a)(c),
            v = '& > *:not(style) ~ *:not(style)',
            b = x ? { [v]: { mt: x } } : {}
          return (0, r.jsx)(g, {
            value: s,
            children: (0, r.jsx)(
              u.B.ul,
              (0, n.A)(
                (0, n.A)(
                  {
                    ref: t,
                    listStyleType: d,
                    listStylePosition: m,
                    role: 'list',
                    __css: (0, n.A)((0, n.A)({}, s.container), b),
                  },
                  j,
                ),
                {},
                { children: f },
              ),
            ),
          })
        })
      f.displayName = 'List'
      const v = (0, d.R)((e, t) => {
        const { as: s } = e,
          a = (0, i.A)(e, m)
        return (0, r.jsx)(f, (0, n.A)({ ref: t, as: 'ol', styleType: 'decimal', marginStart: '1em' }, a))
      })
      v.displayName = 'OrderedList'
      ;(0, d.R)(function (e, t) {
        const { as: s } = e,
          a = (0, i.A)(e, x)
        return (0, r.jsx)(f, (0, n.A)({ ref: t, as: 'ul', styleType: 'initial', marginStart: '1em' }, a))
      }).displayName = 'UnorderedList'
      const b = (0, d.R)(function (e, t) {
        const s = j()
        return (0, r.jsx)(u.B.li, (0, n.A)((0, n.A)({ ref: t }, e), {}, { __css: s.item }))
      })
      b.displayName = 'ListItem'
      const A = (0, d.R)(function (e, t) {
        const s = j()
        return (0, r.jsx)(c.I, (0, n.A)((0, n.A)({ ref: t, role: 'presentation' }, e), {}, { __css: s.icon }))
      })
      A.displayName = 'ListIcon'
    },
    9077: (e, t, s) => {
      s.d(t, { T: () => x })
      var n = s(9379),
        i = s(45),
        r = s(579),
        a = s(3033),
        l = s(4765),
        o = s(4079),
        c = s(3635),
        d = s(5003),
        h = s(5158),
        u = s(7971)
      const p = ['className', 'rows'],
        m = ['h', 'minH', 'height', 'minHeight'],
        x = (0, d.R)((e, t) => {
          const s = (0, h.V)('Textarea', e),
            d = (0, a.M)(e),
            { className: x, rows: g } = d,
            j = (0, i.A)(d, p),
            f = (0, c.t)(j),
            v = g ? (0, o.c)(s, m) : s
          return (0, r.jsx)(
            u.B.textarea,
            (0, n.A)((0, n.A)({ ref: t, rows: g }, f), {}, { className: (0, l.cx)('chakra-textarea', x), __css: v }),
          )
        })
      x.displayName = 'Textarea'
    },
  },
])
//# sourceMappingURL=472.b7e8bab3.chunk.js.map
