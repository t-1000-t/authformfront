;(self.webpackChunkauthform = self.webpackChunkauthform || []).push([
  [665],
  {
    6307: (e, r, t) => {
      'use strict'
      t.r(r), t.d(r, { default: () => D })
      var n = t(5522),
        s = t(9838),
        l = t(5043),
        c = t(6593),
        o = t.n(c),
        i = t(8606),
        a = t(1838),
        u = t(3748),
        d = t(4377),
        h = t(3637),
        f = t(1918),
        x = t(834),
        m = t(8028),
        j = t(3952),
        p = t(7921),
        b = t(9627),
        g = t(6214),
        v = t(160),
        k = t(9058),
        w = t(3734),
        C = t(2285),
        S = t.n(C),
        y = t(579)
      function E() {
        const e = (0, i.Y)(),
          [r, t] = (0, l.useState)(''),
          [s, c] = (0, l.useState)(null),
          [C, S] = (0, l.useState)(!1),
          [E, D] = (0, l.useState)(''),
          [I, z] = (0, l.useState)(null),
          [A, R] = (0, l.useState)(!1),
          [T, U] = (0, l.useState)(''),
          [O, P] = (0, l.useState)(!1),
          [$] = (0, l.useState)('VLAD'),
          F = (0, l.useRef)(null),
          W = (0, l.useRef)(null),
          Y = (0, l.useRef)(null),
          { onCopy: H } = (0, a.i)(r),
          K = (0, u.d)()
        ;(0, l.useEffect)(
          () => (
            navigator.mediaDevices
              .getUserMedia({ video: !0, audio: !0 })
              .then((e) => {
                c(e), F.current && (F.current.srcObject = e)
              })
              .catch((e) => console.error('Error accessing media devices.', e)),
            e.on('me', (e) => {
              t(e)
            }),
            e.on('callUser', (e) => {
              S(!0), D(e.from), z(e.signal)
            }),
            () => {
              e.off('me'), e.off('callUser')
            }
          ),
          [e],
        ),
          (0, l.useEffect)(() => {
            s && F.current && (F.current.srcObject = s), t(e.id)
          }, [s, e.id, e])
        return (
          (0, l.useEffect)(
            () => () => {
              Y.current && Y.current.destroy(), s && s.getTracks().forEach((e) => e.stop())
            },
            [s],
          ),
          (0, y.jsxs)(n.az, {
            bg: '#282c34',
            color: '#fff',
            minH: '100vh',
            py: 10,
            children: [
              (0, y.jsx)(d.D, { textAlign: 'center', mb: 10, children: 'Zoomish' }),
              (0, y.jsxs)(h.m, {
                centerContent: !0,
                children: [
                  (0, y.jsxs)(f.s, {
                    mb: 8,
                    justify: 'center',
                    children: [
                      A &&
                        !O &&
                        (0, y.jsx)(n.az, {
                          h: '136px',
                          w: '136px',
                          rounded: 'full',
                          position: 'relative',
                          flexShrink: 0,
                          overflow: 'hidden',
                          bg: 'black',
                          mx: 2,
                          children: (0, y.jsx)('video', {
                            playsInline: !0,
                            ref: W,
                            autoPlay: !0,
                            style: {
                              maxWidth: '100%',
                              objectFit: 'cover',
                              borderRadius: '50%',
                              transform: 'translate3d(0, 0, 0)',
                              width: '136px',
                              height: '136px',
                            },
                          }),
                        }),
                      s &&
                        (0, y.jsx)(n.az, {
                          h: '136px',
                          w: '136px',
                          rounded: 'full',
                          position: 'relative',
                          flexShrink: 0,
                          overflow: 'hidden',
                          bg: 'black',
                          mx: 2,
                          children: (0, y.jsx)('video', {
                            playsInline: !0,
                            muted: !0,
                            ref: F,
                            autoPlay: !0,
                            style: {
                              maxWidth: '100%',
                              objectFit: 'cover',
                              borderRadius: '50%',
                              transform: 'translate3d(0, 0, 0)',
                              width: '136px',
                              height: '136px',
                            },
                          }),
                        }),
                    ],
                  }),
                  (0, y.jsxs)(x.T, {
                    spacing: 4,
                    mb: 8,
                    children: [
                      (0, y.jsx)(m.$, {
                        leftIcon: (0, y.jsx)(g.T, {}),
                        colorScheme: 'blue',
                        onClick: () => {
                          H(),
                            K({
                              title: 'Copied',
                              description: 'Your ID has been copied.',
                              status: 'success',
                              duration: 2e3,
                              isClosable: !0,
                            })
                        },
                        children: 'Copy ID',
                      }),
                      (0, y.jsx)(j.E, { children: r }),
                      (0, y.jsx)(p.p, {
                        width: '20rem',
                        variant: 'filled',
                        placeholder: 'ID to call',
                        value: T,
                        onChange: (e) => U(e.target.value),
                      }),
                      A && !O
                        ? (0, y.jsx)(m.$, {
                            colorScheme: 'red',
                            leftIcon: (0, y.jsx)(v.U, {}),
                            onClick: () => {
                              P(!0),
                                Y.current && Y.current.destroy(),
                                s && s.getTracks().forEach((e) => e.stop()),
                                S(!1),
                                D(''),
                                z(null),
                                R(!1)
                            },
                            children: 'End Call',
                          })
                        : (0, y.jsx)(b.K, {
                            colorScheme: 'blue',
                            'aria-label': 'call',
                            icon: (0, y.jsx)(k.E, {}),
                            onClick: () =>
                              ((t) => {
                                const n = new (o())({ initiator: !0, trickle: !1, stream: s })
                                n.on('signal', (n) => {
                                  e.emit('callUser', { userToCall: t, signalData: n, from: r, name: $ })
                                }),
                                  n.on('stream', (e) => {
                                    W.current && (W.current.srcObject = e)
                                  }),
                                  n.on('error', (e) => console.error('Peer error:', e)),
                                  e.on('callAccepted', (e) => {
                                    R(!0), n.signal(e)
                                  }),
                                  (Y.current = n)
                              })(T),
                          }),
                    ],
                  }),
                  C &&
                    !A &&
                    (0, y.jsxs)(n.az, {
                      textAlign: 'center',
                      children: [
                        (0, y.jsxs)(d.D, { size: 'md', mb: 4, children: [$, ' is calling...'] }),
                        (0, y.jsx)(m.$, {
                          colorScheme: 'green',
                          leftIcon: (0, y.jsx)(w.X, {}),
                          onClick: () => {
                            R(!0)
                            const r = new (o())({ initiator: !1, trickle: !1, stream: s })
                            r.on('signal', (r) => {
                              e.emit('answerCall', { signal: r, to: E })
                            }),
                              r.on('stream', (e) => {
                                W.current && (W.current.srcObject = e)
                              }),
                              r.on('error', (e) => console.error('Peer error:', e)),
                              r.signal(I),
                              (Y.current = r)
                          },
                          children: 'Answer',
                        }),
                      ],
                    }),
                ],
              }),
            ],
          })
        )
      }
      function D() {
        return (0, y.jsx)(s.A, { children: (0, y.jsx)(n.az, { bg: 'white', children: (0, y.jsx)(E, {}) }) })
      }
      window.process = S()
    },
    5340: () => {},
    7457: () => {},
  },
])
//# sourceMappingURL=665.62a7c9ff.chunk.js.map
