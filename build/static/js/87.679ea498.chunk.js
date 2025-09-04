/*! For license information please see 87.679ea498.chunk.js.LICENSE.txt */
'use strict'
;(self.webpackChunkauthform = self.webpackChunkauthform || []).push([
  [87],
  {
    202: (e, t, n) => {
      n.d(t, { T: () => a })
      var r = n(9379),
        o = n(579),
        i = n(9904)
      const a = (0, n(5003).R)((e, t) =>
        (0, o.jsx)(i.B, (0, r.A)((0, r.A)({ align: 'center' }, e), {}, { direction: 'column', ref: t })),
      )
      a.displayName = 'VStack'
    },
    502: (e, t, n) => {
      n.d(t, { d: () => d })
      var r = n(9379),
        o = n(5043),
        i = n(610),
        a = n(8938)
      function s(e, t) {
        var n
        const r = null !== e && void 0 !== e ? e : 'bottom',
          o = {
            'top-start': { ltr: 'top-left', rtl: 'top-right' },
            'top-end': { ltr: 'top-right', rtl: 'top-left' },
            'bottom-start': { ltr: 'bottom-left', rtl: 'bottom-right' },
            'bottom-end': { ltr: 'bottom-right', rtl: 'bottom-left' },
          }[r]
        return null !== (n = null === o || void 0 === o ? void 0 : o[t]) && void 0 !== n ? n : r
      }
      var l = n(482)
      var c = n(2325),
        u = n(6448)
      function d(e) {
        const { theme: t } = (0, u.UQ)(),
          n = (0, c.NU)()
        return (0, o.useMemo)(
          () =>
            (function (e, t) {
              const n = (n) => {
                  var o
                  return (0, r.A)(
                    (0, r.A)((0, r.A)({}, t), n),
                    {},
                    {
                      position: s(
                        null !== (o = null === n || void 0 === n ? void 0 : n.position) && void 0 !== o
                          ? o
                          : null === t || void 0 === t
                            ? void 0
                            : t.position,
                        e,
                      ),
                    },
                  )
                },
                o = (e) => {
                  const t = n(e),
                    r = (0, a.q)(t)
                  return l.Z.notify(r, t)
                }
              return (
                (o.update = (e, t) => {
                  l.Z.update(e, n(t))
                }),
                (o.promise = (e, t) => {
                  const n = o((0, r.A)((0, r.A)({}, t.loading), {}, { status: 'loading', duration: null }))
                  e.then((e) =>
                    o.update(n, (0, r.A)({ status: 'success', duration: 5e3 }, (0, i.J)(t.success, e))),
                  ).catch((e) => o.update(n, (0, r.A)({ status: 'error', duration: 5e3 }, (0, i.J)(t.error, e))))
                }),
                (o.closeAll = l.Z.closeAll),
                (o.close = l.Z.close),
                (o.isActive = l.Z.isActive),
                o
              )
            })(t.direction, (0, r.A)((0, r.A)({}, n), e)),
          [e, t.direction, n],
        )
      }
    },
    1024: (e, t, n) => {
      n.d(t, {
        $$: () => p,
        Es: () => g,
        KG: () => m,
        Ks: () => M,
        Ll: () => l,
        Re: () => D,
        Sw: () => a,
        TW: () => h,
        WQ: () => C,
        YG: () => A,
        YN: () => b,
        ZC: () => w,
        _q: () => v,
        ag: () => k,
        e_: () => S,
        jn: () => i,
        kx: () => E,
        l6: () => s,
        lk: () => y,
        sb: () => d,
        wz: () => u,
        xZ: () => f,
        zk: () => c,
      })
      var r = n(9379),
        o = n(5043)
      function i() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        return (0, o.useMemo)(
          () => (e) => {
            t.forEach((t) => t(e))
          },
          t,
        )
      }
      const a =
        'undefined' !== typeof window &&
        'undefined' !== typeof window.document &&
        'undefined' !== typeof window.document.createElement
      function s(e) {
        const t = Object.prototype.toString.call(e)
        return '[object Window]' === t || '[object global]' === t
      }
      function l(e) {
        return 'nodeType' in e
      }
      function c(e) {
        var t, n
        return e
          ? s(e)
            ? e
            : l(e) && null != (t = null == (n = e.ownerDocument) ? void 0 : n.defaultView)
              ? t
              : window
          : window
      }
      function u(e) {
        const { Document: t } = c(e)
        return e instanceof t
      }
      function d(e) {
        return !s(e) && e instanceof c(e).HTMLElement
      }
      function f(e) {
        return e instanceof c(e).SVGElement
      }
      function h(e) {
        return e
          ? s(e)
            ? e.document
            : l(e)
              ? u(e)
                ? e
                : d(e) || f(e)
                  ? e.ownerDocument
                  : document
              : document
          : document
      }
      const g = a ? o.useLayoutEffect : o.useEffect
      function v(e) {
        const t = (0, o.useRef)(e)
        return (
          g(() => {
            t.current = e
          }),
          (0, o.useCallback)(function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r]
            return null == t.current ? void 0 : t.current(...n)
          }, [])
        )
      }
      function p() {
        const e = (0, o.useRef)(null)
        return [
          (0, o.useCallback)((t, n) => {
            e.current = setInterval(t, n)
          }, []),
          (0, o.useCallback)(() => {
            null !== e.current && (clearInterval(e.current), (e.current = null))
          }, []),
        ]
      }
      function b(e, t) {
        void 0 === t && (t = [e])
        const n = (0, o.useRef)(e)
        return (
          g(() => {
            n.current !== e && (n.current = e)
          }, t),
          n
        )
      }
      function m(e, t) {
        const n = (0, o.useRef)()
        return (0, o.useMemo)(() => {
          const t = e(n.current)
          return ((n.current = t), t)
        }, [...t])
      }
      function y(e) {
        const t = v(e),
          n = (0, o.useRef)(null),
          r = (0, o.useCallback)((e) => {
            ;(e !== n.current && (null == t || t(e, n.current)), (n.current = e))
          }, [])
        return [n, r]
      }
      function w(e) {
        const t = (0, o.useRef)()
        return (
          (0, o.useEffect)(() => {
            t.current = e
          }, [e]),
          t.current
        )
      }
      let x = {}
      function A(e, t) {
        return (0, o.useMemo)(() => {
          if (t) return t
          const n = null == x[e] ? 0 : x[e] + 1
          return ((x[e] = n), e + '-' + n)
        }, [e, t])
      }
      function R(e) {
        return function (t) {
          for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i]
          return o.reduce(
            (t, n) => {
              const r = Object.entries(n)
              for (const [o, i] of r) {
                const n = t[o]
                null != n && (t[o] = n + e * i)
              }
              return t
            },
            (0, r.A)({}, t),
          )
        }
      }
      const C = R(1),
        D = R(-1)
      function E(e) {
        if (!e) return !1
        const { KeyboardEvent: t } = c(e.target)
        return t && e instanceof t
      }
      function S(e) {
        if (
          (function (e) {
            if (!e) return !1
            const { TouchEvent: t } = c(e.target)
            return t && e instanceof t
          })(e)
        ) {
          if (e.touches && e.touches.length) {
            const { clientX: t, clientY: n } = e.touches[0]
            return { x: t, y: n }
          }
          if (e.changedTouches && e.changedTouches.length) {
            const { clientX: t, clientY: n } = e.changedTouches[0]
            return { x: t, y: n }
          }
        }
        return (function (e) {
          return 'clientX' in e && 'clientY' in e
        })(e)
          ? { x: e.clientX, y: e.clientY }
          : null
      }
      const M = Object.freeze({
          Translate: {
            toString(e) {
              if (!e) return
              const { x: t, y: n } = e
              return 'translate3d(' + (t ? Math.round(t) : 0) + 'px, ' + (n ? Math.round(n) : 0) + 'px, 0)'
            },
          },
          Scale: {
            toString(e) {
              if (!e) return
              const { scaleX: t, scaleY: n } = e
              return 'scaleX(' + t + ') scaleY(' + n + ')'
            },
          },
          Transform: {
            toString(e) {
              if (e) return [M.Translate.toString(e), M.Scale.toString(e)].join(' ')
            },
          },
          Transition: {
            toString(e) {
              let { property: t, duration: n, easing: r } = e
              return t + ' ' + n + 'ms ' + r
            },
          },
        }),
        N =
          'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]'
      function k(e) {
        return e.matches(N) ? e : e.querySelector(N)
      }
    },
    1648: (e, t, n) => {
      n.d(t, { _G: () => f, be: () => s, gB: () => v, gl: () => A })
      var r = n(9379),
        o = n(5043),
        i = n(3585),
        a = n(1024)
      function s(e, t, n) {
        const r = e.slice()
        return (r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r)
      }
      function l(e, t) {
        return e.reduce((e, n, r) => {
          const o = t.get(n)
          return (o && (e[r] = o), e)
        }, Array(e.length))
      }
      function c(e) {
        return null !== e && e >= 0
      }
      const u = (e) => {
          let { rects: t, activeIndex: n, overIndex: r, index: o } = e
          const i = s(t, r, n),
            a = t[o],
            l = i[o]
          return l && a
            ? { x: l.left - a.left, y: l.top - a.top, scaleX: l.width / a.width, scaleY: l.height / a.height }
            : null
        },
        d = { scaleX: 1, scaleY: 1 },
        f = (e) => {
          var t
          let { activeIndex: n, activeNodeRect: o, index: i, rects: a, overIndex: s } = e
          const l = null != (t = a[n]) ? t : o
          if (!l) return null
          if (i === n) {
            const e = a[s]
            return e ? (0, r.A)({ x: 0, y: n < s ? e.top + e.height - (l.top + l.height) : e.top - l.top }, d) : null
          }
          const c = (function (e, t, n) {
            const r = e[t],
              o = e[t - 1],
              i = e[t + 1]
            if (!r) return 0
            if (n < t) return o ? r.top - (o.top + o.height) : i ? i.top - (r.top + r.height) : 0
            return i ? i.top - (r.top + r.height) : o ? r.top - (o.top + o.height) : 0
          })(a, i, n)
          return i > n && i <= s
            ? (0, r.A)({ x: 0, y: -l.height - c }, d)
            : i < n && i >= s
              ? (0, r.A)({ x: 0, y: l.height + c }, d)
              : (0, r.A)({ x: 0, y: 0 }, d)
        }
      const h = 'Sortable',
        g = o.createContext({
          activeIndex: -1,
          containerId: h,
          disableTransforms: !1,
          items: [],
          overIndex: -1,
          useDragOverlay: !1,
          sortedRects: [],
          strategy: u,
          disabled: { draggable: !1, droppable: !1 },
        })
      function v(e) {
        let { children: t, id: n, items: r, strategy: s = u, disabled: c = !1 } = e
        const { active: d, dragOverlay: f, droppableRects: v, over: p, measureDroppableContainers: b } = (0, i.fF)(),
          m = (0, a.YG)(h, n),
          y = Boolean(null !== f.rect),
          w = (0, o.useMemo)(() => r.map((e) => ('object' === typeof e && 'id' in e ? e.id : e)), [r]),
          x = null != d,
          A = d ? w.indexOf(d.id) : -1,
          R = p ? w.indexOf(p.id) : -1,
          C = (0, o.useRef)(w),
          D = !(function (e, t) {
            if (e === t) return !0
            if (e.length !== t.length) return !1
            for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
            return !0
          })(w, C.current),
          E = (-1 !== R && -1 === A) || D,
          S = (function (e) {
            return 'boolean' === typeof e ? { draggable: e, droppable: e } : e
          })(c)
        ;((0, a.Es)(() => {
          D && x && b(w)
        }, [D, w, x, b]),
          (0, o.useEffect)(() => {
            C.current = w
          }, [w]))
        const M = (0, o.useMemo)(
          () => ({
            activeIndex: A,
            containerId: m,
            disabled: S,
            disableTransforms: E,
            items: w,
            overIndex: R,
            useDragOverlay: y,
            sortedRects: l(w, v),
            strategy: s,
          }),
          [A, m, S.draggable, S.droppable, E, w, R, v, y, s],
        )
        return o.createElement(g.Provider, { value: M }, t)
      }
      const p = (e) => {
          let { id: t, items: n, activeIndex: r, overIndex: o } = e
          return s(n, r, o).indexOf(t)
        },
        b = (e) => {
          let {
            containerId: t,
            isSorting: n,
            wasDragging: r,
            index: o,
            items: i,
            newIndex: a,
            previousItems: s,
            previousContainerId: l,
            transition: c,
          } = e
          return !(!c || !r) && (s === i || o !== a) && (!!n || (a !== o && t === l))
        },
        m = { duration: 200, easing: 'ease' },
        y = 'transform',
        w = a.Ks.Transition.toString({ property: y, duration: 0, easing: 'linear' }),
        x = { roleDescription: 'sortable' }
      function A(e) {
        let {
          animateLayoutChanges: t = b,
          attributes: n,
          disabled: s,
          data: l,
          getNewIndex: u = p,
          id: d,
          strategy: f,
          resizeObserverConfig: h,
          transition: v = m,
        } = e
        const {
            items: A,
            containerId: R,
            activeIndex: C,
            disabled: D,
            disableTransforms: E,
            sortedRects: S,
            overIndex: M,
            useDragOverlay: N,
            strategy: k,
          } = (0, o.useContext)(g),
          T = (function (e, t) {
            var n, r
            if ('boolean' === typeof e) return { draggable: e, droppable: !1 }
            return {
              draggable: null != (n = null == e ? void 0 : e.draggable) ? n : t.draggable,
              droppable: null != (r = null == e ? void 0 : e.droppable) ? r : t.droppable,
            }
          })(s, D),
          I = A.indexOf(d),
          L = (0, o.useMemo)(() => (0, r.A)({ sortable: { containerId: R, index: I, items: A } }, l), [R, l, I, A]),
          O = (0, o.useMemo)(() => A.slice(A.indexOf(d)), [A, d]),
          {
            rect: B,
            node: z,
            isOver: j,
            setNodeRef: P,
          } = (0, i.zM)({
            id: d,
            data: L,
            disabled: T.droppable,
            resizeObserverConfig: (0, r.A)({ updateMeasurementsFor: O }, h),
          }),
          {
            active: Y,
            activatorEvent: W,
            activeNodeRect: F,
            attributes: K,
            setNodeRef: _,
            listeners: U,
            isDragging: X,
            over: G,
            setActivatorNodeRef: q,
            transform: H,
          } = (0, i.PM)({ id: d, data: L, attributes: (0, r.A)((0, r.A)({}, x), n), disabled: T.draggable }),
          Z = (0, a.jn)(P, _),
          J = Boolean(Y),
          V = J && !E && c(C) && c(M),
          Q = !N && X,
          $ = Q && V ? H : null,
          ee = V
            ? null != $
              ? $
              : (null != f ? f : k)({ rects: S, activeNodeRect: F, activeIndex: C, overIndex: M, index: I })
            : null,
          te = c(C) && c(M) ? u({ id: d, items: A, activeIndex: C, overIndex: M }) : I,
          ne = null == Y ? void 0 : Y.id,
          re = (0, o.useRef)({ activeId: ne, items: A, newIndex: te, containerId: R }),
          oe = A !== re.current.items,
          ie = t({
            active: Y,
            containerId: R,
            isDragging: X,
            isSorting: J,
            id: d,
            index: I,
            items: A,
            newIndex: re.current.newIndex,
            previousItems: re.current.items,
            previousContainerId: re.current.containerId,
            transition: v,
            wasDragging: null != re.current.activeId,
          }),
          ae = (function (e) {
            let { disabled: t, index: n, node: r, rect: s } = e
            const [l, c] = (0, o.useState)(null),
              u = (0, o.useRef)(n)
            return (
              (0, a.Es)(() => {
                if (!t && n !== u.current && r.current) {
                  const e = s.current
                  if (e) {
                    const t = (0, i.Sj)(r.current, { ignoreTransform: !0 }),
                      n = {
                        x: e.left - t.left,
                        y: e.top - t.top,
                        scaleX: e.width / t.width,
                        scaleY: e.height / t.height,
                      }
                    ;(n.x || n.y) && c(n)
                  }
                }
                n !== u.current && (u.current = n)
              }, [t, n, r, s]),
              (0, o.useEffect)(() => {
                l && c(null)
              }, [l]),
              l
            )
          })({ disabled: !ie, index: I, node: z, rect: B })
        return (
          (0, o.useEffect)(() => {
            ;(J && re.current.newIndex !== te && (re.current.newIndex = te),
              R !== re.current.containerId && (re.current.containerId = R),
              A !== re.current.items && (re.current.items = A))
          }, [J, te, R, A]),
          (0, o.useEffect)(() => {
            if (ne === re.current.activeId) return
            if (null != ne && null == re.current.activeId) return void (re.current.activeId = ne)
            const e = setTimeout(() => {
              re.current.activeId = ne
            }, 50)
            return () => clearTimeout(e)
          }, [ne]),
          {
            active: Y,
            activeIndex: C,
            attributes: K,
            data: L,
            rect: B,
            index: I,
            newIndex: te,
            items: A,
            isOver: j,
            isSorting: J,
            isDragging: X,
            listeners: U,
            node: z,
            overIndex: M,
            over: G,
            setNodeRef: Z,
            setActivatorNodeRef: q,
            setDroppableNodeRef: P,
            setDraggableNodeRef: _,
            transform: null != ae ? ae : ee,
            transition: (function () {
              if (ae || (oe && re.current.newIndex === I)) return w
              if ((Q && !(0, a.kx)(W)) || !v) return
              if (J || ie) return a.Ks.Transition.toString((0, r.A)((0, r.A)({}, v), {}, { property: y }))
              return
            })(),
          }
        )
      }
      ;(i.vL.Down, i.vL.Right, i.vL.Up, i.vL.Left)
    },
    3585: (e, t, n) => {
      n.d(t, {
        Mp: () => Xe,
        vL: () => te,
        uN: () => ae,
        AN: () => de,
        fp: () => E,
        Sj: () => O,
        fF: () => Je,
        PM: () => Ze,
        zM: () => $e,
        MS: () => y,
        FR: () => w,
      })
      var r = n(45),
        o = n(9379),
        i = n(5043),
        a = n(7950),
        s = n(1024)
      const l = { display: 'none' }
      function c(e) {
        let { id: t, value: n } = e
        return i.createElement('div', { id: t, style: l }, n)
      }
      function u(e) {
        let { id: t, announcement: n, ariaLiveType: r = 'assertive' } = e
        return i.createElement(
          'div',
          {
            id: t,
            style: {
              position: 'fixed',
              top: 0,
              left: 0,
              width: 1,
              height: 1,
              margin: -1,
              border: 0,
              padding: 0,
              overflow: 'hidden',
              clip: 'rect(0 0 0 0)',
              clipPath: 'inset(100%)',
              whiteSpace: 'nowrap',
            },
            role: 'status',
            'aria-live': r,
            'aria-atomic': !0,
          },
          n,
        )
      }
      const d = ['transform'],
        f = [
          'id',
          'accessibility',
          'autoScroll',
          'children',
          'sensors',
          'collisionDetection',
          'measuring',
          'modifiers',
        ],
        h = (0, i.createContext)(null)
      const g = {
          draggable:
            '\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  ',
        },
        v = {
          onDragStart(e) {
            let { active: t } = e
            return 'Picked up draggable item ' + t.id + '.'
          },
          onDragOver(e) {
            let { active: t, over: n } = e
            return n
              ? 'Draggable item ' + t.id + ' was moved over droppable area ' + n.id + '.'
              : 'Draggable item ' + t.id + ' is no longer over a droppable area.'
          },
          onDragEnd(e) {
            let { active: t, over: n } = e
            return n
              ? 'Draggable item ' + t.id + ' was dropped over droppable area ' + n.id
              : 'Draggable item ' + t.id + ' was dropped.'
          },
          onDragCancel(e) {
            let { active: t } = e
            return 'Dragging was cancelled. Draggable item ' + t.id + ' was dropped.'
          },
        }
      function p(e) {
        let { announcements: t = v, container: n, hiddenTextDescribedById: r, screenReaderInstructions: o = g } = e
        const { announce: l, announcement: d } = (function () {
            const [e, t] = (0, i.useState)('')
            return {
              announce: (0, i.useCallback)((e) => {
                null != e && t(e)
              }, []),
              announcement: e,
            }
          })(),
          f = (0, s.YG)('DndLiveRegion'),
          [p, b] = (0, i.useState)(!1)
        if (
          ((0, i.useEffect)(() => {
            b(!0)
          }, []),
          (function (e) {
            const t = (0, i.useContext)(h)
            ;(0, i.useEffect)(() => {
              if (!t) throw new Error('useDndMonitor must be used within a children of <DndContext>')
              return t(e)
            }, [e, t])
          })(
            (0, i.useMemo)(
              () => ({
                onDragStart(e) {
                  let { active: n } = e
                  l(t.onDragStart({ active: n }))
                },
                onDragMove(e) {
                  let { active: n, over: r } = e
                  t.onDragMove && l(t.onDragMove({ active: n, over: r }))
                },
                onDragOver(e) {
                  let { active: n, over: r } = e
                  l(t.onDragOver({ active: n, over: r }))
                },
                onDragEnd(e) {
                  let { active: n, over: r } = e
                  l(t.onDragEnd({ active: n, over: r }))
                },
                onDragCancel(e) {
                  let { active: n, over: r } = e
                  l(t.onDragCancel({ active: n, over: r }))
                },
              }),
              [l, t],
            ),
          ),
          !p)
        )
          return null
        const m = i.createElement(
          i.Fragment,
          null,
          i.createElement(c, { id: r, value: o.draggable }),
          i.createElement(u, { id: f, announcement: d }),
        )
        return n ? (0, a.createPortal)(m, n) : m
      }
      var b
      function m() {}
      function y(e, t) {
        return (0, i.useMemo)(() => ({ sensor: e, options: null != t ? t : {} }), [e, t])
      }
      function w() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        return (0, i.useMemo)(() => [...t].filter((e) => null != e), [...t])
      }
      !(function (e) {
        ;((e.DragStart = 'dragStart'),
          (e.DragMove = 'dragMove'),
          (e.DragEnd = 'dragEnd'),
          (e.DragCancel = 'dragCancel'),
          (e.DragOver = 'dragOver'),
          (e.RegisterDroppable = 'registerDroppable'),
          (e.SetDroppableDisabled = 'setDroppableDisabled'),
          (e.UnregisterDroppable = 'unregisterDroppable'))
      })(b || (b = {}))
      const x = Object.freeze({ x: 0, y: 0 })
      function A(e, t) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
      }
      function R(e, t) {
        let {
            data: { value: n },
          } = e,
          {
            data: { value: r },
          } = t
        return n - r
      }
      function C(e, t) {
        let {
            data: { value: n },
          } = e,
          {
            data: { value: r },
          } = t
        return r - n
      }
      function D(e, t, n) {
        return (
          void 0 === t && (t = e.left),
          void 0 === n && (n = e.top),
          { x: t + 0.5 * e.width, y: n + 0.5 * e.height }
        )
      }
      const E = (e) => {
        let { collisionRect: t, droppableRects: n, droppableContainers: r } = e
        const o = D(t, t.left, t.top),
          i = []
        for (const a of r) {
          const { id: e } = a,
            t = n.get(e)
          if (t) {
            const n = A(D(t), o)
            i.push({ id: e, data: { droppableContainer: a, value: n } })
          }
        }
        return i.sort(R)
      }
      function S(e, t) {
        const n = Math.max(t.top, e.top),
          r = Math.max(t.left, e.left),
          o = Math.min(t.left + t.width, e.left + e.width),
          i = Math.min(t.top + t.height, e.top + e.height),
          a = o - r,
          s = i - n
        if (r < o && n < i) {
          const n = t.width * t.height,
            r = e.width * e.height,
            o = a * s
          return Number((o / (n + r - o)).toFixed(4))
        }
        return 0
      }
      const M = (e) => {
        let { collisionRect: t, droppableRects: n, droppableContainers: r } = e
        const o = []
        for (const i of r) {
          const { id: e } = i,
            r = n.get(e)
          if (r) {
            const n = S(r, t)
            n > 0 && o.push({ id: e, data: { droppableContainer: i, value: n } })
          }
        }
        return o.sort(C)
      }
      function N(e, t) {
        return e && t ? { x: e.left - t.left, y: e.top - t.top } : x
      }
      function k(e) {
        return function (t) {
          for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i]
          return r.reduce(
            (t, n) =>
              (0, o.A)(
                (0, o.A)({}, t),
                {},
                { top: t.top + e * n.y, bottom: t.bottom + e * n.y, left: t.left + e * n.x, right: t.right + e * n.x },
              ),
            (0, o.A)({}, t),
          )
        }
      }
      const T = k(1)
      function I(e) {
        if (e.startsWith('matrix3d(')) {
          const t = e.slice(9, -1).split(/, /)
          return { x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5] }
        }
        if (e.startsWith('matrix(')) {
          const t = e.slice(7, -1).split(/, /)
          return { x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3] }
        }
        return null
      }
      const L = { ignoreTransform: !1 }
      function O(e, t) {
        void 0 === t && (t = L)
        let n = e.getBoundingClientRect()
        if (t.ignoreTransform) {
          const { transform: t, transformOrigin: r } = (0, s.zk)(e).getComputedStyle(e)
          t &&
            (n = (function (e, t, n) {
              const r = I(t)
              if (!r) return e
              const { scaleX: o, scaleY: i, x: a, y: s } = r,
                l = e.left - a - (1 - o) * parseFloat(n),
                c = e.top - s - (1 - i) * parseFloat(n.slice(n.indexOf(' ') + 1)),
                u = o ? e.width / o : e.width,
                d = i ? e.height / i : e.height
              return { width: u, height: d, top: c, right: l + u, bottom: c + d, left: l }
            })(n, t, r))
        }
        const { top: r, left: o, width: i, height: a, bottom: l, right: c } = n
        return { top: r, left: o, width: i, height: a, bottom: l, right: c }
      }
      function B(e) {
        return O(e, { ignoreTransform: !0 })
      }
      function z(e, t) {
        const n = []
        return e
          ? (function r(o) {
              if (null != t && n.length >= t) return n
              if (!o) return n
              if ((0, s.wz)(o) && null != o.scrollingElement && !n.includes(o.scrollingElement))
                return (n.push(o.scrollingElement), n)
              if (!(0, s.sb)(o) || (0, s.xZ)(o)) return n
              if (n.includes(o)) return n
              const i = (0, s.zk)(e).getComputedStyle(o)
              return (
                o !== e &&
                  (function (e, t) {
                    void 0 === t && (t = (0, s.zk)(e).getComputedStyle(e))
                    const n = /(auto|scroll|overlay)/
                    return ['overflow', 'overflowX', 'overflowY'].some((e) => {
                      const r = t[e]
                      return 'string' === typeof r && n.test(r)
                    })
                  })(o, i) &&
                  n.push(o),
                (function (e, t) {
                  return (void 0 === t && (t = (0, s.zk)(e).getComputedStyle(e)), 'fixed' === t.position)
                })(o, i)
                  ? n
                  : r(o.parentNode)
              )
            })(e)
          : n
      }
      function j(e) {
        const [t] = z(e, 1)
        return null != t ? t : null
      }
      function P(e) {
        return s.Sw && e
          ? (0, s.l6)(e)
            ? e
            : (0, s.Ll)(e)
              ? (0, s.wz)(e) || e === (0, s.TW)(e).scrollingElement
                ? window
                : (0, s.sb)(e)
                  ? e
                  : null
              : null
          : null
      }
      function Y(e) {
        return (0, s.l6)(e) ? e.scrollX : e.scrollLeft
      }
      function W(e) {
        return (0, s.l6)(e) ? e.scrollY : e.scrollTop
      }
      function F(e) {
        return { x: Y(e), y: W(e) }
      }
      var K
      function _(e) {
        return !(!s.Sw || !e) && e === document.scrollingElement
      }
      function U(e) {
        const t = { x: 0, y: 0 },
          n = _(e)
            ? { height: window.innerHeight, width: window.innerWidth }
            : { height: e.clientHeight, width: e.clientWidth },
          r = { x: e.scrollWidth - n.width, y: e.scrollHeight - n.height }
        return {
          isTop: e.scrollTop <= t.y,
          isLeft: e.scrollLeft <= t.x,
          isBottom: e.scrollTop >= r.y,
          isRight: e.scrollLeft >= r.x,
          maxScroll: r,
          minScroll: t,
        }
      }
      !(function (e) {
        ;((e[(e.Forward = 1)] = 'Forward'), (e[(e.Backward = -1)] = 'Backward'))
      })(K || (K = {}))
      const X = { x: 0.2, y: 0.2 }
      function G(e, t, n, r, o) {
        let { top: i, left: a, right: s, bottom: l } = n
        ;(void 0 === r && (r = 10), void 0 === o && (o = X))
        const { isTop: c, isBottom: u, isLeft: d, isRight: f } = U(e),
          h = { x: 0, y: 0 },
          g = { x: 0, y: 0 },
          v = t.height * o.y,
          p = t.width * o.x
        return (
          !c && i <= t.top + v
            ? ((h.y = K.Backward), (g.y = r * Math.abs((t.top + v - i) / v)))
            : !u && l >= t.bottom - v && ((h.y = K.Forward), (g.y = r * Math.abs((t.bottom - v - l) / v))),
          !f && s >= t.right - p
            ? ((h.x = K.Forward), (g.x = r * Math.abs((t.right - p - s) / p)))
            : !d && a <= t.left + p && ((h.x = K.Backward), (g.x = r * Math.abs((t.left + p - a) / p))),
          { direction: h, speed: g }
        )
      }
      function q(e) {
        if (e === document.scrollingElement) {
          const { innerWidth: e, innerHeight: t } = window
          return { top: 0, left: 0, right: e, bottom: t, width: e, height: t }
        }
        const { top: t, left: n, right: r, bottom: o } = e.getBoundingClientRect()
        return { top: t, left: n, right: r, bottom: o, width: e.clientWidth, height: e.clientHeight }
      }
      function H(e) {
        return e.reduce((e, t) => (0, s.WQ)(e, F(t)), x)
      }
      function Z(e, t) {
        if ((void 0 === t && (t = O), !e)) return
        const { top: n, left: r, bottom: o, right: i } = t(e)
        j(e) &&
          (o <= 0 || i <= 0 || n >= window.innerHeight || r >= window.innerWidth) &&
          e.scrollIntoView({ block: 'center', inline: 'center' })
      }
      const J = [
        [
          'x',
          ['left', 'right'],
          function (e) {
            return e.reduce((e, t) => e + Y(t), 0)
          },
        ],
        [
          'y',
          ['top', 'bottom'],
          function (e) {
            return e.reduce((e, t) => e + W(t), 0)
          },
        ],
      ]
      class V {
        constructor(e, t) {
          ;((this.rect = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.right = void 0),
            (this.left = void 0))
          const n = z(t),
            r = H(n)
          ;((this.rect = (0, o.A)({}, e)), (this.width = e.width), (this.height = e.height))
          for (const [o, i, a] of J)
            for (const e of i)
              Object.defineProperty(this, e, {
                get: () => {
                  const t = a(n),
                    i = r[o] - t
                  return this.rect[e] + i
                },
                enumerable: !0,
              })
          Object.defineProperty(this, 'rect', { enumerable: !1 })
        }
      }
      class Q {
        constructor(e) {
          ;((this.target = void 0),
            (this.listeners = []),
            (this.removeAll = () => {
              this.listeners.forEach((e) => {
                var t
                return null == (t = this.target) ? void 0 : t.removeEventListener(...e)
              })
            }),
            (this.target = e))
        }
        add(e, t, n) {
          var r
          ;(null == (r = this.target) || r.addEventListener(e, t, n), this.listeners.push([e, t, n]))
        }
      }
      function $(e, t) {
        const n = Math.abs(e.x),
          r = Math.abs(e.y)
        return 'number' === typeof t
          ? Math.sqrt(n ** 2 + r ** 2) > t
          : 'x' in t && 'y' in t
            ? n > t.x && r > t.y
            : 'x' in t
              ? n > t.x
              : 'y' in t && r > t.y
      }
      var ee, te
      function ne(e) {
        e.preventDefault()
      }
      function re(e) {
        e.stopPropagation()
      }
      ;(!(function (e) {
        ;((e.Click = 'click'),
          (e.DragStart = 'dragstart'),
          (e.Keydown = 'keydown'),
          (e.ContextMenu = 'contextmenu'),
          (e.Resize = 'resize'),
          (e.SelectionChange = 'selectionchange'),
          (e.VisibilityChange = 'visibilitychange'))
      })(ee || (ee = {})),
        (function (e) {
          ;((e.Space = 'Space'),
            (e.Down = 'ArrowDown'),
            (e.Right = 'ArrowRight'),
            (e.Left = 'ArrowLeft'),
            (e.Up = 'ArrowUp'),
            (e.Esc = 'Escape'),
            (e.Enter = 'Enter'),
            (e.Tab = 'Tab'))
        })(te || (te = {})))
      const oe = { start: [te.Space, te.Enter], cancel: [te.Esc], end: [te.Space, te.Enter, te.Tab] },
        ie = (e, t) => {
          let { currentCoordinates: n } = t
          switch (e.code) {
            case te.Right:
              return (0, o.A)((0, o.A)({}, n), {}, { x: n.x + 25 })
            case te.Left:
              return (0, o.A)((0, o.A)({}, n), {}, { x: n.x - 25 })
            case te.Down:
              return (0, o.A)((0, o.A)({}, n), {}, { y: n.y + 25 })
            case te.Up:
              return (0, o.A)((0, o.A)({}, n), {}, { y: n.y - 25 })
          }
        }
      class ae {
        constructor(e) {
          ;((this.props = void 0),
            (this.autoScrollEnabled = !1),
            (this.referenceCoordinates = void 0),
            (this.listeners = void 0),
            (this.windowListeners = void 0),
            (this.props = e))
          const {
            event: { target: t },
          } = e
          ;((this.props = e),
            (this.listeners = new Q((0, s.TW)(t))),
            (this.windowListeners = new Q((0, s.zk)(t))),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this)),
            this.attach())
        }
        attach() {
          ;(this.handleStart(),
            this.windowListeners.add(ee.Resize, this.handleCancel),
            this.windowListeners.add(ee.VisibilityChange, this.handleCancel),
            setTimeout(() => this.listeners.add(ee.Keydown, this.handleKeyDown)))
        }
        handleStart() {
          const { activeNode: e, onStart: t } = this.props,
            n = e.node.current
          ;(n && Z(n), t(x))
        }
        handleKeyDown(e) {
          if ((0, s.kx)(e)) {
            const { active: t, context: n, options: r } = this.props,
              { keyboardCodes: o = oe, coordinateGetter: i = ie, scrollBehavior: a = 'smooth' } = r,
              { code: l } = e
            if (o.end.includes(l)) return void this.handleEnd(e)
            if (o.cancel.includes(l)) return void this.handleCancel(e)
            const { collisionRect: c } = n.current,
              u = c ? { x: c.left, y: c.top } : x
            this.referenceCoordinates || (this.referenceCoordinates = u)
            const d = i(e, { active: t, context: n.current, currentCoordinates: u })
            if (d) {
              const t = (0, s.Re)(d, u),
                r = { x: 0, y: 0 },
                { scrollableAncestors: o } = n.current
              for (const n of o) {
                const o = e.code,
                  { isTop: i, isRight: s, isLeft: l, isBottom: c, maxScroll: u, minScroll: f } = U(n),
                  h = q(n),
                  g = {
                    x: Math.min(
                      o === te.Right ? h.right - h.width / 2 : h.right,
                      Math.max(o === te.Right ? h.left : h.left + h.width / 2, d.x),
                    ),
                    y: Math.min(
                      o === te.Down ? h.bottom - h.height / 2 : h.bottom,
                      Math.max(o === te.Down ? h.top : h.top + h.height / 2, d.y),
                    ),
                  },
                  v = (o === te.Right && !s) || (o === te.Left && !l),
                  p = (o === te.Down && !c) || (o === te.Up && !i)
                if (v && g.x !== d.x) {
                  const e = n.scrollLeft + t.x,
                    i = (o === te.Right && e <= u.x) || (o === te.Left && e >= f.x)
                  if (i && !t.y) return void n.scrollTo({ left: e, behavior: a })
                  ;((r.x = i ? n.scrollLeft - e : o === te.Right ? n.scrollLeft - u.x : n.scrollLeft - f.x),
                    r.x && n.scrollBy({ left: -r.x, behavior: a }))
                  break
                }
                if (p && g.y !== d.y) {
                  const e = n.scrollTop + t.y,
                    i = (o === te.Down && e <= u.y) || (o === te.Up && e >= f.y)
                  if (i && !t.x) return void n.scrollTo({ top: e, behavior: a })
                  ;((r.y = i ? n.scrollTop - e : o === te.Down ? n.scrollTop - u.y : n.scrollTop - f.y),
                    r.y && n.scrollBy({ top: -r.y, behavior: a }))
                  break
                }
              }
              this.handleMove(e, (0, s.WQ)((0, s.Re)(d, this.referenceCoordinates), r))
            }
          }
        }
        handleMove(e, t) {
          const { onMove: n } = this.props
          ;(e.preventDefault(), n(t))
        }
        handleEnd(e) {
          const { onEnd: t } = this.props
          ;(e.preventDefault(), this.detach(), t())
        }
        handleCancel(e) {
          const { onCancel: t } = this.props
          ;(e.preventDefault(), this.detach(), t())
        }
        detach() {
          ;(this.listeners.removeAll(), this.windowListeners.removeAll())
        }
      }
      function se(e) {
        return Boolean(e && 'distance' in e)
      }
      function le(e) {
        return Boolean(e && 'delay' in e)
      }
      ae.activators = [
        {
          eventName: 'onKeyDown',
          handler: (e, t, n) => {
            let { keyboardCodes: r = oe, onActivation: o } = t,
              { active: i } = n
            const { code: a } = e.nativeEvent
            if (r.start.includes(a)) {
              const t = i.activatorNode.current
              return (!t || e.target === t) && (e.preventDefault(), null == o || o({ event: e.nativeEvent }), !0)
            }
            return !1
          },
        },
      ]
      class ce {
        constructor(e, t, n) {
          var r
          ;(void 0 === n &&
            (n = (function (e) {
              const { EventTarget: t } = (0, s.zk)(e)
              return e instanceof t ? e : (0, s.TW)(e)
            })(e.event.target)),
            (this.props = void 0),
            (this.events = void 0),
            (this.autoScrollEnabled = !0),
            (this.document = void 0),
            (this.activated = !1),
            (this.initialCoordinates = void 0),
            (this.timeoutId = null),
            (this.listeners = void 0),
            (this.documentListeners = void 0),
            (this.windowListeners = void 0),
            (this.props = e),
            (this.events = t))
          const { event: o } = e,
            { target: i } = o
          ;((this.props = e),
            (this.events = t),
            (this.document = (0, s.TW)(i)),
            (this.documentListeners = new Q(this.document)),
            (this.listeners = new Q(n)),
            (this.windowListeners = new Q((0, s.zk)(i))),
            (this.initialCoordinates = null != (r = (0, s.e_)(o)) ? r : x),
            (this.handleStart = this.handleStart.bind(this)),
            (this.handleMove = this.handleMove.bind(this)),
            (this.handleEnd = this.handleEnd.bind(this)),
            (this.handleCancel = this.handleCancel.bind(this)),
            (this.handleKeydown = this.handleKeydown.bind(this)),
            (this.removeTextSelection = this.removeTextSelection.bind(this)),
            this.attach())
        }
        attach() {
          const {
            events: e,
            props: {
              options: { activationConstraint: t, bypassActivationConstraint: n },
            },
          } = this
          if (
            (this.listeners.add(e.move.name, this.handleMove, { passive: !1 }),
            this.listeners.add(e.end.name, this.handleEnd),
            e.cancel && this.listeners.add(e.cancel.name, this.handleCancel),
            this.windowListeners.add(ee.Resize, this.handleCancel),
            this.windowListeners.add(ee.DragStart, ne),
            this.windowListeners.add(ee.VisibilityChange, this.handleCancel),
            this.windowListeners.add(ee.ContextMenu, ne),
            this.documentListeners.add(ee.Keydown, this.handleKeydown),
            t)
          ) {
            if (
              null != n &&
              n({ event: this.props.event, activeNode: this.props.activeNode, options: this.props.options })
            )
              return this.handleStart()
            if (le(t)) return ((this.timeoutId = setTimeout(this.handleStart, t.delay)), void this.handlePending(t))
            if (se(t)) return void this.handlePending(t)
          }
          this.handleStart()
        }
        detach() {
          ;(this.listeners.removeAll(),
            this.windowListeners.removeAll(),
            setTimeout(this.documentListeners.removeAll, 50),
            null !== this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = null)))
        }
        handlePending(e, t) {
          const { active: n, onPending: r } = this.props
          r(n, e, this.initialCoordinates, t)
        }
        handleStart() {
          const { initialCoordinates: e } = this,
            { onStart: t } = this.props
          e &&
            ((this.activated = !0),
            this.documentListeners.add(ee.Click, re, { capture: !0 }),
            this.removeTextSelection(),
            this.documentListeners.add(ee.SelectionChange, this.removeTextSelection),
            t(e))
        }
        handleMove(e) {
          var t
          const { activated: n, initialCoordinates: r, props: o } = this,
            {
              onMove: i,
              options: { activationConstraint: a },
            } = o
          if (!r) return
          const l = null != (t = (0, s.e_)(e)) ? t : x,
            c = (0, s.Re)(r, l)
          if (!n && a) {
            if (se(a)) {
              if (null != a.tolerance && $(c, a.tolerance)) return this.handleCancel()
              if ($(c, a.distance)) return this.handleStart()
            }
            return le(a) && $(c, a.tolerance) ? this.handleCancel() : void this.handlePending(a, c)
          }
          ;(e.cancelable && e.preventDefault(), i(l))
        }
        handleEnd() {
          const { onAbort: e, onEnd: t } = this.props
          ;(this.detach(), this.activated || e(this.props.active), t())
        }
        handleCancel() {
          const { onAbort: e, onCancel: t } = this.props
          ;(this.detach(), this.activated || e(this.props.active), t())
        }
        handleKeydown(e) {
          e.code === te.Esc && this.handleCancel()
        }
        removeTextSelection() {
          var e
          null == (e = this.document.getSelection()) || e.removeAllRanges()
        }
      }
      const ue = { cancel: { name: 'pointercancel' }, move: { name: 'pointermove' }, end: { name: 'pointerup' } }
      class de extends ce {
        constructor(e) {
          const { event: t } = e,
            n = (0, s.TW)(t.target)
          super(e, ue, n)
        }
      }
      de.activators = [
        {
          eventName: 'onPointerDown',
          handler: (e, t) => {
            let { nativeEvent: n } = e,
              { onActivation: r } = t
            return !(!n.isPrimary || 0 !== n.button) && (null == r || r({ event: n }), !0)
          },
        },
      ]
      const fe = { move: { name: 'mousemove' }, end: { name: 'mouseup' } }
      var he
      !(function (e) {
        e[(e.RightClick = 2)] = 'RightClick'
      })(he || (he = {}))
      ;(class extends ce {
        constructor(e) {
          super(e, fe, (0, s.TW)(e.event.target))
        }
      }).activators = [
        {
          eventName: 'onMouseDown',
          handler: (e, t) => {
            let { nativeEvent: n } = e,
              { onActivation: r } = t
            return n.button !== he.RightClick && (null == r || r({ event: n }), !0)
          },
        },
      ]
      const ge = { cancel: { name: 'touchcancel' }, move: { name: 'touchmove' }, end: { name: 'touchend' } }
      var ve, pe
      function be(e) {
        let {
          acceleration: t,
          activator: n = ve.Pointer,
          canScroll: r,
          draggingRect: o,
          enabled: a,
          interval: l = 5,
          order: c = pe.TreeOrder,
          pointerCoordinates: u,
          scrollableAncestors: d,
          scrollableAncestorRects: f,
          delta: h,
          threshold: g,
        } = e
        const v = (function (e) {
            let { delta: t, disabled: n } = e
            const r = (0, s.ZC)(t)
            return (0, s.KG)(
              (e) => {
                if (n || !r || !e) return me
                const o = { x: Math.sign(t.x - r.x), y: Math.sign(t.y - r.y) }
                return {
                  x: { [K.Backward]: e.x[K.Backward] || -1 === o.x, [K.Forward]: e.x[K.Forward] || 1 === o.x },
                  y: { [K.Backward]: e.y[K.Backward] || -1 === o.y, [K.Forward]: e.y[K.Forward] || 1 === o.y },
                }
              },
              [n, t, r],
            )
          })({ delta: h, disabled: !a }),
          [p, b] = (0, s.$$)(),
          m = (0, i.useRef)({ x: 0, y: 0 }),
          y = (0, i.useRef)({ x: 0, y: 0 }),
          w = (0, i.useMemo)(() => {
            switch (n) {
              case ve.Pointer:
                return u ? { top: u.y, bottom: u.y, left: u.x, right: u.x } : null
              case ve.DraggableRect:
                return o
            }
          }, [n, o, u]),
          x = (0, i.useRef)(null),
          A = (0, i.useCallback)(() => {
            const e = x.current
            if (!e) return
            const t = m.current.x * y.current.x,
              n = m.current.y * y.current.y
            e.scrollBy(t, n)
          }, []),
          R = (0, i.useMemo)(() => (c === pe.TreeOrder ? [...d].reverse() : d), [c, d])
        ;(0, i.useEffect)(() => {
          if (a && d.length && w) {
            for (const e of R) {
              if (!1 === (null == r ? void 0 : r(e))) continue
              const n = d.indexOf(e),
                o = f[n]
              if (!o) continue
              const { direction: i, speed: a } = G(e, o, w, t, g)
              for (const e of ['x', 'y']) v[e][i[e]] || ((a[e] = 0), (i[e] = 0))
              if (a.x > 0 || a.y > 0) return (b(), (x.current = e), p(A, l), (m.current = a), void (y.current = i))
            }
            ;((m.current = { x: 0, y: 0 }), (y.current = { x: 0, y: 0 }), b())
          } else b()
        }, [t, A, r, b, a, l, JSON.stringify(w), JSON.stringify(v), p, d, R, f, JSON.stringify(g)])
      }
      ;(((class extends ce {
        constructor(e) {
          super(e, ge)
        }
        static setup() {
          return (
            window.addEventListener(ge.move.name, e, { capture: !1, passive: !1 }),
            function () {
              window.removeEventListener(ge.move.name, e)
            }
          )
          function e() {}
        }
      }).activators = [
        {
          eventName: 'onTouchStart',
          handler: (e, t) => {
            let { nativeEvent: n } = e,
              { onActivation: r } = t
            const { touches: o } = n
            return !(o.length > 1) && (null == r || r({ event: n }), !0)
          },
        },
      ]),
        (function (e) {
          ;((e[(e.Pointer = 0)] = 'Pointer'), (e[(e.DraggableRect = 1)] = 'DraggableRect'))
        })(ve || (ve = {})),
        (function (e) {
          ;((e[(e.TreeOrder = 0)] = 'TreeOrder'), (e[(e.ReversedTreeOrder = 1)] = 'ReversedTreeOrder'))
        })(pe || (pe = {})))
      const me = { x: { [K.Backward]: !1, [K.Forward]: !1 }, y: { [K.Backward]: !1, [K.Forward]: !1 } }
      var ye, we
      ;(!(function (e) {
        ;((e[(e.Always = 0)] = 'Always'),
          (e[(e.BeforeDragging = 1)] = 'BeforeDragging'),
          (e[(e.WhileDragging = 2)] = 'WhileDragging'))
      })(ye || (ye = {})),
        (function (e) {
          e.Optimized = 'optimized'
        })(we || (we = {})))
      const xe = new Map()
      function Ae(e, t) {
        return (0, s.KG)((n) => (e ? n || ('function' === typeof t ? t(e) : e) : null), [t, e])
      }
      function Re(e) {
        let { callback: t, disabled: n } = e
        const r = (0, s._q)(t),
          o = (0, i.useMemo)(() => {
            if (n || 'undefined' === typeof window || 'undefined' === typeof window.ResizeObserver) return
            const { ResizeObserver: e } = window
            return new e(r)
          }, [n])
        return ((0, i.useEffect)(() => () => (null == o ? void 0 : o.disconnect()), [o]), o)
      }
      function Ce(e) {
        return new V(O(e), e)
      }
      function De(e, t, n) {
        void 0 === t && (t = Ce)
        const [r, o] = (0, i.useState)(null)
        function a() {
          o((r) => {
            if (!e) return null
            var o
            if (!1 === e.isConnected) return null != (o = null != r ? r : n) ? o : null
            const i = t(e)
            return JSON.stringify(r) === JSON.stringify(i) ? r : i
          })
        }
        const l = (function (e) {
            let { callback: t, disabled: n } = e
            const r = (0, s._q)(t),
              o = (0, i.useMemo)(() => {
                if (n || 'undefined' === typeof window || 'undefined' === typeof window.MutationObserver) return
                const { MutationObserver: e } = window
                return new e(r)
              }, [r, n])
            return ((0, i.useEffect)(() => () => (null == o ? void 0 : o.disconnect()), [o]), o)
          })({
            callback(t) {
              if (e)
                for (const n of t) {
                  const { type: t, target: r } = n
                  if ('childList' === t && r instanceof HTMLElement && r.contains(e)) {
                    a()
                    break
                  }
                }
            },
          }),
          c = Re({ callback: a })
        return (
          (0, s.Es)(() => {
            ;(a(),
              e
                ? (null == c || c.observe(e), null == l || l.observe(document.body, { childList: !0, subtree: !0 }))
                : (null == c || c.disconnect(), null == l || l.disconnect()))
          }, [e]),
          r
        )
      }
      const Ee = []
      function Se(e, t) {
        void 0 === t && (t = [])
        const n = (0, i.useRef)(null)
        return (
          (0, i.useEffect)(() => {
            n.current = null
          }, t),
          (0, i.useEffect)(() => {
            const t = e !== x
            ;(t && !n.current && (n.current = e), !t && n.current && (n.current = null))
          }, [e]),
          n.current ? (0, s.Re)(e, n.current) : x
        )
      }
      function Me(e) {
        return (0, i.useMemo)(
          () =>
            e
              ? (function (e) {
                  const t = e.innerWidth,
                    n = e.innerHeight
                  return { top: 0, left: 0, right: t, bottom: n, width: t, height: n }
                })(e)
              : null,
          [e],
        )
      }
      const Ne = []
      function ke(e) {
        if (!e) return null
        if (e.children.length > 1) return e
        const t = e.children[0]
        return (0, s.sb)(t) ? t : e
      }
      const Te = [
          { sensor: de, options: {} },
          { sensor: ae, options: {} },
        ],
        Ie = { current: {} },
        Le = {
          draggable: { measure: B },
          droppable: { measure: B, strategy: ye.WhileDragging, frequency: we.Optimized },
          dragOverlay: { measure: O },
        }
      class Oe extends Map {
        get(e) {
          var t
          return null != e && null != (t = super.get(e)) ? t : void 0
        }
        toArray() {
          return Array.from(this.values())
        }
        getEnabled() {
          return this.toArray().filter((e) => {
            let { disabled: t } = e
            return !t
          })
        }
        getNodeFor(e) {
          var t, n
          return null != (t = null == (n = this.get(e)) ? void 0 : n.node.current) ? t : void 0
        }
      }
      const Be = {
          activatorEvent: null,
          active: null,
          activeNode: null,
          activeNodeRect: null,
          collisions: null,
          containerNodeRect: null,
          draggableNodes: new Map(),
          droppableRects: new Map(),
          droppableContainers: new Oe(),
          over: null,
          dragOverlay: { nodeRef: { current: null }, rect: null, setRef: m },
          scrollableAncestors: [],
          scrollableAncestorRects: [],
          measuringConfiguration: Le,
          measureDroppableContainers: m,
          windowRect: null,
          measuringScheduled: !1,
        },
        ze = {
          activatorEvent: null,
          activators: [],
          active: null,
          activeNodeRect: null,
          ariaDescribedById: { draggable: '' },
          dispatch: m,
          draggableNodes: new Map(),
          over: null,
          measureDroppableContainers: m,
        },
        je = (0, i.createContext)(ze),
        Pe = (0, i.createContext)(Be)
      function Ye() {
        return {
          draggable: { active: null, initialCoordinates: { x: 0, y: 0 }, nodes: new Map(), translate: { x: 0, y: 0 } },
          droppable: { containers: new Oe() },
        }
      }
      function We(e, t) {
        switch (t.type) {
          case b.DragStart:
            return (0, o.A)(
              (0, o.A)({}, e),
              {},
              {
                draggable: (0, o.A)(
                  (0, o.A)({}, e.draggable),
                  {},
                  { initialCoordinates: t.initialCoordinates, active: t.active },
                ),
              },
            )
          case b.DragMove:
            return null == e.draggable.active
              ? e
              : (0, o.A)(
                  (0, o.A)({}, e),
                  {},
                  {
                    draggable: (0, o.A)(
                      (0, o.A)({}, e.draggable),
                      {},
                      {
                        translate: {
                          x: t.coordinates.x - e.draggable.initialCoordinates.x,
                          y: t.coordinates.y - e.draggable.initialCoordinates.y,
                        },
                      },
                    ),
                  },
                )
          case b.DragEnd:
          case b.DragCancel:
            return (0, o.A)(
              (0, o.A)({}, e),
              {},
              {
                draggable: (0, o.A)(
                  (0, o.A)({}, e.draggable),
                  {},
                  { active: null, initialCoordinates: { x: 0, y: 0 }, translate: { x: 0, y: 0 } },
                ),
              },
            )
          case b.RegisterDroppable: {
            const { element: n } = t,
              { id: r } = n,
              i = new Oe(e.droppable.containers)
            return (
              i.set(r, n),
              (0, o.A)((0, o.A)({}, e), {}, { droppable: (0, o.A)((0, o.A)({}, e.droppable), {}, { containers: i }) })
            )
          }
          case b.SetDroppableDisabled: {
            const { id: n, key: r, disabled: i } = t,
              a = e.droppable.containers.get(n)
            if (!a || r !== a.key) return e
            const s = new Oe(e.droppable.containers)
            return (
              s.set(n, (0, o.A)((0, o.A)({}, a), {}, { disabled: i })),
              (0, o.A)((0, o.A)({}, e), {}, { droppable: (0, o.A)((0, o.A)({}, e.droppable), {}, { containers: s }) })
            )
          }
          case b.UnregisterDroppable: {
            const { id: n, key: r } = t,
              i = e.droppable.containers.get(n)
            if (!i || r !== i.key) return e
            const a = new Oe(e.droppable.containers)
            return (
              a.delete(n),
              (0, o.A)((0, o.A)({}, e), {}, { droppable: (0, o.A)((0, o.A)({}, e.droppable), {}, { containers: a }) })
            )
          }
          default:
            return e
        }
      }
      function Fe(e) {
        let { disabled: t } = e
        const { active: n, activatorEvent: r, draggableNodes: o } = (0, i.useContext)(je),
          a = (0, s.ZC)(r),
          l = (0, s.ZC)(null == n ? void 0 : n.id)
        return (
          (0, i.useEffect)(() => {
            if (!t && !r && a && null != l) {
              if (!(0, s.kx)(a)) return
              if (document.activeElement === a.target) return
              const e = o.get(l)
              if (!e) return
              const { activatorNode: t, node: n } = e
              if (!t.current && !n.current) return
              requestAnimationFrame(() => {
                for (const e of [t.current, n.current]) {
                  if (!e) continue
                  const t = (0, s.ag)(e)
                  if (t) {
                    t.focus()
                    break
                  }
                }
              })
            }
          }, [r, t, o, l, a]),
          null
        )
      }
      function Ke(e, t) {
        let { transform: n } = t,
          i = (0, r.A)(t, d)
        return null != e && e.length ? e.reduce((e, t) => t((0, o.A)({ transform: e }, i)), n) : n
      }
      const _e = (0, i.createContext)((0, o.A)((0, o.A)({}, x), {}, { scaleX: 1, scaleY: 1 }))
      var Ue
      !(function (e) {
        ;((e[(e.Uninitialized = 0)] = 'Uninitialized'),
          (e[(e.Initializing = 1)] = 'Initializing'),
          (e[(e.Initialized = 2)] = 'Initialized'))
      })(Ue || (Ue = {}))
      const Xe = (0, i.memo)(function (e) {
          var t, n, l, c
          let {
              id: u,
              accessibility: d,
              autoScroll: g = !0,
              children: v,
              sensors: m = Te,
              collisionDetection: y = M,
              measuring: w,
              modifiers: A,
            } = e,
            R = (0, r.A)(e, f)
          const C = (0, i.useReducer)(We, void 0, Ye),
            [D, E] = C,
            [S, k] = (function () {
              const [e] = (0, i.useState)(() => new Set()),
                t = (0, i.useCallback)((t) => (e.add(t), () => e.delete(t)), [e])
              return [
                (0, i.useCallback)(
                  (t) => {
                    let { type: n, event: r } = t
                    e.forEach((e) => {
                      var t
                      return null == (t = e[n]) ? void 0 : t.call(e, r)
                    })
                  },
                  [e],
                ),
                t,
              ]
            })(),
            [I, L] = (0, i.useState)(Ue.Uninitialized),
            B = I === Ue.Initialized,
            {
              draggable: { active: Y, nodes: W, translate: K },
              droppable: { containers: U },
            } = D,
            X = null != Y ? W.get(Y) : null,
            G = (0, i.useRef)({ initial: null, translated: null }),
            q = (0, i.useMemo)(() => {
              var e
              return null != Y ? { id: Y, data: null != (e = null == X ? void 0 : X.data) ? e : Ie, rect: G } : null
            }, [Y, X]),
            Z = (0, i.useRef)(null),
            [J, Q] = (0, i.useState)(null),
            [$, ee] = (0, i.useState)(null),
            te = (0, s.YN)(R, Object.values(R)),
            ne = (0, s.YG)('DndDescribedBy', u),
            re = (0, i.useMemo)(() => U.getEnabled(), [U]),
            oe =
              ((ie = w),
              (0, i.useMemo)(
                () => ({
                  draggable: (0, o.A)((0, o.A)({}, Le.draggable), null == ie ? void 0 : ie.draggable),
                  droppable: (0, o.A)((0, o.A)({}, Le.droppable), null == ie ? void 0 : ie.droppable),
                  dragOverlay: (0, o.A)((0, o.A)({}, Le.dragOverlay), null == ie ? void 0 : ie.dragOverlay),
                }),
                [
                  null == ie ? void 0 : ie.draggable,
                  null == ie ? void 0 : ie.droppable,
                  null == ie ? void 0 : ie.dragOverlay,
                ],
              ))
          var ie
          const {
              droppableRects: ae,
              measureDroppableContainers: se,
              measuringScheduled: le,
            } = (function (e, t) {
              let { dragging: n, dependencies: r, config: o } = t
              const [a, l] = (0, i.useState)(null),
                { frequency: c, measure: u, strategy: d } = o,
                f = (0, i.useRef)(e),
                h = (function () {
                  switch (d) {
                    case ye.Always:
                      return !1
                    case ye.BeforeDragging:
                      return n
                    default:
                      return !n
                  }
                })(),
                g = (0, s.YN)(h),
                v = (0, i.useCallback)(
                  function (e) {
                    ;(void 0 === e && (e = []),
                      g.current || l((t) => (null === t ? e : t.concat(e.filter((e) => !t.includes(e))))))
                  },
                  [g],
                ),
                p = (0, i.useRef)(null),
                b = (0, s.KG)(
                  (t) => {
                    if (h && !n) return xe
                    if (!t || t === xe || f.current !== e || null != a) {
                      const t = new Map()
                      for (let n of e) {
                        if (!n) continue
                        if (a && a.length > 0 && !a.includes(n.id) && n.rect.current) {
                          t.set(n.id, n.rect.current)
                          continue
                        }
                        const e = n.node.current,
                          r = e ? new V(u(e), e) : null
                        ;((n.rect.current = r), r && t.set(n.id, r))
                      }
                      return t
                    }
                    return t
                  },
                  [e, a, n, h, u],
                )
              return (
                (0, i.useEffect)(() => {
                  f.current = e
                }, [e]),
                (0, i.useEffect)(() => {
                  h || v()
                }, [n, h]),
                (0, i.useEffect)(() => {
                  a && a.length > 0 && l(null)
                }, [JSON.stringify(a)]),
                (0, i.useEffect)(() => {
                  h ||
                    'number' !== typeof c ||
                    null !== p.current ||
                    (p.current = setTimeout(() => {
                      ;(v(), (p.current = null))
                    }, c))
                }, [c, h, v, ...r]),
                { droppableRects: b, measureDroppableContainers: v, measuringScheduled: null != a }
              )
            })(re, { dragging: B, dependencies: [K.x, K.y], config: oe.droppable }),
            ce = (function (e, t) {
              const n = null != t ? e.get(t) : void 0,
                r = n ? n.node.current : null
              return (0, s.KG)(
                (e) => {
                  var n
                  return null == t ? null : null != (n = null != r ? r : e) ? n : null
                },
                [r, t],
              )
            })(W, Y),
            ue = (0, i.useMemo)(() => ($ ? (0, s.e_)($) : null), [$]),
            de = (function () {
              const e = !1 === (null == J ? void 0 : J.autoScrollEnabled),
                t = 'object' === typeof g ? !1 === g.enabled : !1 === g,
                n = B && !e && !t
              if ('object' === typeof g) return (0, o.A)((0, o.A)({}, g), {}, { enabled: n })
              return { enabled: n }
            })(),
            fe = (function (e, t) {
              return Ae(e, t)
            })(ce, oe.draggable.measure)
          !(function (e) {
            let { activeNode: t, measure: n, initialRect: r, config: o = !0 } = e
            const a = (0, i.useRef)(!1),
              { x: l, y: c } = 'boolean' === typeof o ? { x: o, y: o } : o
            ;(0, s.Es)(() => {
              if ((!l && !c) || !t) return void (a.current = !1)
              if (a.current || !r) return
              const e = null == t ? void 0 : t.node.current
              if (!e || !1 === e.isConnected) return
              const o = N(n(e), r)
              if ((l || (o.x = 0), c || (o.y = 0), (a.current = !0), Math.abs(o.x) > 0 || Math.abs(o.y) > 0)) {
                const t = j(e)
                t && t.scrollBy({ top: o.y, left: o.x })
              }
            }, [t, l, c, r, n])
          })({
            activeNode: null != Y ? W.get(Y) : null,
            config: de.layoutShiftCompensation,
            initialRect: fe,
            measure: oe.draggable.measure,
          })
          const he = De(ce, oe.draggable.measure, fe),
            ge = De(ce ? ce.parentElement : null),
            ve = (0, i.useRef)({
              activatorEvent: null,
              active: null,
              activeNode: ce,
              collisionRect: null,
              collisions: null,
              droppableRects: ae,
              draggableNodes: W,
              draggingNode: null,
              draggingNodeRect: null,
              droppableContainers: U,
              over: null,
              scrollableAncestors: [],
              scrollAdjustedTranslate: null,
            }),
            pe = U.getNodeFor(null == (t = ve.current.over) ? void 0 : t.id),
            me = (function (e) {
              let { measure: t } = e
              const [n, r] = (0, i.useState)(null),
                a = Re({
                  callback: (0, i.useCallback)(
                    (e) => {
                      for (const { target: n } of e)
                        if ((0, s.sb)(n)) {
                          r((e) => {
                            const r = t(n)
                            return e ? (0, o.A)((0, o.A)({}, e), {}, { width: r.width, height: r.height }) : r
                          })
                          break
                        }
                    },
                    [t],
                  ),
                }),
                l = (0, i.useCallback)(
                  (e) => {
                    const n = ke(e)
                    ;(null == a || a.disconnect(), n && (null == a || a.observe(n)), r(n ? t(n) : null))
                  },
                  [t, a],
                ),
                [c, u] = (0, s.lk)(l)
              return (0, i.useMemo)(() => ({ nodeRef: c, rect: n, setRef: u }), [n, c, u])
            })({ measure: oe.dragOverlay.measure }),
            we = null != (n = me.nodeRef.current) ? n : ce,
            Ce = B ? (null != (l = me.rect) ? l : he) : null,
            Oe = Boolean(me.nodeRef.current && me.rect),
            Be = N((ze = Oe ? null : he), Ae(ze))
          var ze
          const Xe = Me(we ? (0, s.zk)(we) : null),
            Ge = (function (e) {
              const t = (0, i.useRef)(e),
                n = (0, s.KG)(
                  (n) =>
                    e ? (n && n !== Ee && e && t.current && e.parentNode === t.current.parentNode ? n : z(e)) : Ee,
                  [e],
                )
              return (
                (0, i.useEffect)(() => {
                  t.current = e
                }, [e]),
                n
              )
            })(B ? (null != pe ? pe : ce) : null),
            qe = (function (e, t) {
              void 0 === t && (t = O)
              const [n] = e,
                r = Me(n ? (0, s.zk)(n) : null),
                [o, a] = (0, i.useState)(Ne)
              function l() {
                a(() => (e.length ? e.map((e) => (_(e) ? r : new V(t(e), e))) : Ne))
              }
              const c = Re({ callback: l })
              return (
                (0, s.Es)(() => {
                  ;(null == c || c.disconnect(), l(), e.forEach((e) => (null == c ? void 0 : c.observe(e))))
                }, [e]),
                o
              )
            })(Ge),
            He = Ke(A, {
              transform: { x: K.x - Be.x, y: K.y - Be.y, scaleX: 1, scaleY: 1 },
              activatorEvent: $,
              active: q,
              activeNodeRect: he,
              containerNodeRect: ge,
              draggingNodeRect: Ce,
              over: ve.current.over,
              overlayNodeRect: me.rect,
              scrollableAncestors: Ge,
              scrollableAncestorRects: qe,
              windowRect: Xe,
            }),
            Ze = ue ? (0, s.WQ)(ue, K) : null,
            Je = (function (e) {
              const [t, n] = (0, i.useState)(null),
                r = (0, i.useRef)(e),
                o = (0, i.useCallback)((e) => {
                  const t = P(e.target)
                  t && n((e) => (e ? (e.set(t, F(t)), new Map(e)) : null))
                }, [])
              return (
                (0, i.useEffect)(() => {
                  const t = r.current
                  if (e !== t) {
                    i(t)
                    const a = e
                      .map((e) => {
                        const t = P(e)
                        return t ? (t.addEventListener('scroll', o, { passive: !0 }), [t, F(t)]) : null
                      })
                      .filter((e) => null != e)
                    ;(n(a.length ? new Map(a) : null), (r.current = e))
                  }
                  return () => {
                    ;(i(e), i(t))
                  }
                  function i(e) {
                    e.forEach((e) => {
                      const t = P(e)
                      null == t || t.removeEventListener('scroll', o)
                    })
                  }
                }, [o, e]),
                (0, i.useMemo)(
                  () => (e.length ? (t ? Array.from(t.values()).reduce((e, t) => (0, s.WQ)(e, t), x) : H(e)) : x),
                  [e, t],
                )
              )
            })(Ge),
            Ve = Se(Je),
            Qe = Se(Je, [he]),
            $e = (0, s.WQ)(He, Ve),
            et = Ce ? T(Ce, He) : null,
            tt =
              q && et
                ? y({
                    active: q,
                    collisionRect: et,
                    droppableRects: ae,
                    droppableContainers: re,
                    pointerCoordinates: Ze,
                  })
                : null,
            nt = (function (e, t) {
              if (!e || 0 === e.length) return null
              const [n] = e
              return t ? n[t] : n
            })(tt, 'id'),
            [rt, ot] = (0, i.useState)(null),
            it = (function (e, t, n) {
              return (0, o.A)(
                (0, o.A)({}, e),
                {},
                { scaleX: t && n ? t.width / n.width : 1, scaleY: t && n ? t.height / n.height : 1 },
              )
            })(Oe ? He : (0, s.WQ)(He, Qe), null != (c = null == rt ? void 0 : rt.rect) ? c : null, he),
            at = (0, i.useRef)(null),
            st = (0, i.useCallback)(
              (e, t) => {
                let { sensor: n, options: r } = t
                if (null == Z.current) return
                const o = W.get(Z.current)
                if (!o) return
                const i = e.nativeEvent,
                  s = new n({
                    active: Z.current,
                    activeNode: o,
                    event: i,
                    options: r,
                    context: ve,
                    onAbort(e) {
                      if (!W.get(e)) return
                      const { onDragAbort: t } = te.current,
                        n = { id: e }
                      ;(null == t || t(n), S({ type: 'onDragAbort', event: n }))
                    },
                    onPending(e, t, n, r) {
                      if (!W.get(e)) return
                      const { onDragPending: o } = te.current,
                        i = { id: e, constraint: t, initialCoordinates: n, offset: r }
                      ;(null == o || o(i), S({ type: 'onDragPending', event: i }))
                    },
                    onStart(e) {
                      const t = Z.current
                      if (null == t) return
                      const n = W.get(t)
                      if (!n) return
                      const { onDragStart: r } = te.current,
                        o = { activatorEvent: i, active: { id: t, data: n.data, rect: G } }
                      ;(0, a.unstable_batchedUpdates)(() => {
                        ;(null == r || r(o),
                          L(Ue.Initializing),
                          E({ type: b.DragStart, initialCoordinates: e, active: t }),
                          S({ type: 'onDragStart', event: o }),
                          Q(at.current),
                          ee(i))
                      })
                    },
                    onMove(e) {
                      E({ type: b.DragMove, coordinates: e })
                    },
                    onEnd: l(b.DragEnd),
                    onCancel: l(b.DragCancel),
                  })
                function l(e) {
                  return async function () {
                    const { active: t, collisions: n, over: r, scrollAdjustedTranslate: o } = ve.current
                    let s = null
                    if (t && o) {
                      const { cancelDrop: a } = te.current
                      if (
                        ((s = { activatorEvent: i, active: t, collisions: n, delta: o, over: r }),
                        e === b.DragEnd && 'function' === typeof a)
                      ) {
                        ;(await Promise.resolve(a(s))) && (e = b.DragCancel)
                      }
                    }
                    ;((Z.current = null),
                      (0, a.unstable_batchedUpdates)(() => {
                        ;(E({ type: e }), L(Ue.Uninitialized), ot(null), Q(null), ee(null), (at.current = null))
                        const t = e === b.DragEnd ? 'onDragEnd' : 'onDragCancel'
                        if (s) {
                          const e = te.current[t]
                          ;(null == e || e(s), S({ type: t, event: s }))
                        }
                      }))
                  }
                }
                at.current = s
              },
              [W],
            ),
            lt = (0, i.useCallback)(
              (e, t) => (n, r) => {
                const o = n.nativeEvent,
                  i = W.get(r)
                if (null !== Z.current || !i || o.dndKit || o.defaultPrevented) return
                const a = { active: i }
                !0 === e(n, t.options, a) && ((o.dndKit = { capturedBy: t.sensor }), (Z.current = r), st(n, t))
              },
              [W, st],
            ),
            ct = (function (e, t) {
              return (0, i.useMemo)(
                () =>
                  e.reduce((e, n) => {
                    const { sensor: r } = n
                    return [...e, ...r.activators.map((e) => ({ eventName: e.eventName, handler: t(e.handler, n) }))]
                  }, []),
                [e, t],
              )
            })(m, lt)
          ;(!(function (e) {
            ;(0, i.useEffect)(
              () => {
                if (!s.Sw) return
                const t = e.map((e) => {
                  let { sensor: t } = e
                  return null == t.setup ? void 0 : t.setup()
                })
                return () => {
                  for (const e of t) null == e || e()
                }
              },
              e.map((e) => {
                let { sensor: t } = e
                return t
              }),
            )
          })(m),
            (0, s.Es)(() => {
              he && I === Ue.Initializing && L(Ue.Initialized)
            }, [he, I]),
            (0, i.useEffect)(() => {
              const { onDragMove: e } = te.current,
                { active: t, activatorEvent: n, collisions: r, over: o } = ve.current
              if (!t || !n) return
              const i = { active: t, activatorEvent: n, collisions: r, delta: { x: $e.x, y: $e.y }, over: o }
              ;(0, a.unstable_batchedUpdates)(() => {
                ;(null == e || e(i), S({ type: 'onDragMove', event: i }))
              })
            }, [$e.x, $e.y]),
            (0, i.useEffect)(() => {
              const {
                active: e,
                activatorEvent: t,
                collisions: n,
                droppableContainers: r,
                scrollAdjustedTranslate: o,
              } = ve.current
              if (!e || null == Z.current || !t || !o) return
              const { onDragOver: i } = te.current,
                s = r.get(nt),
                l = s && s.rect.current ? { id: s.id, rect: s.rect.current, data: s.data, disabled: s.disabled } : null,
                c = { active: e, activatorEvent: t, collisions: n, delta: { x: o.x, y: o.y }, over: l }
              ;(0, a.unstable_batchedUpdates)(() => {
                ;(ot(l), null == i || i(c), S({ type: 'onDragOver', event: c }))
              })
            }, [nt]),
            (0, s.Es)(() => {
              ;((ve.current = {
                activatorEvent: $,
                active: q,
                activeNode: ce,
                collisionRect: et,
                collisions: tt,
                droppableRects: ae,
                draggableNodes: W,
                draggingNode: we,
                draggingNodeRect: Ce,
                droppableContainers: U,
                over: rt,
                scrollableAncestors: Ge,
                scrollAdjustedTranslate: $e,
              }),
                (G.current = { initial: Ce, translated: et }))
            }, [q, ce, tt, et, W, we, Ce, ae, U, rt, Ge, $e]),
            be(
              (0, o.A)(
                (0, o.A)({}, de),
                {},
                {
                  delta: K,
                  draggingRect: et,
                  pointerCoordinates: Ze,
                  scrollableAncestors: Ge,
                  scrollableAncestorRects: qe,
                },
              ),
            ))
          const ut = (0, i.useMemo)(
              () => ({
                active: q,
                activeNode: ce,
                activeNodeRect: he,
                activatorEvent: $,
                collisions: tt,
                containerNodeRect: ge,
                dragOverlay: me,
                draggableNodes: W,
                droppableContainers: U,
                droppableRects: ae,
                over: rt,
                measureDroppableContainers: se,
                scrollableAncestors: Ge,
                scrollableAncestorRects: qe,
                measuringConfiguration: oe,
                measuringScheduled: le,
                windowRect: Xe,
              }),
              [q, ce, he, $, tt, ge, me, W, U, ae, rt, se, Ge, qe, oe, le, Xe],
            ),
            dt = (0, i.useMemo)(
              () => ({
                activatorEvent: $,
                activators: ct,
                active: q,
                activeNodeRect: he,
                ariaDescribedById: { draggable: ne },
                dispatch: E,
                draggableNodes: W,
                over: rt,
                measureDroppableContainers: se,
              }),
              [$, ct, q, he, E, ne, W, rt, se],
            )
          return i.createElement(
            h.Provider,
            { value: k },
            i.createElement(
              je.Provider,
              { value: dt },
              i.createElement(Pe.Provider, { value: ut }, i.createElement(_e.Provider, { value: it }, v)),
              i.createElement(Fe, { disabled: !1 === (null == d ? void 0 : d.restoreFocus) }),
            ),
            i.createElement(p, (0, o.A)((0, o.A)({}, d), {}, { hiddenTextDescribedById: ne })),
          )
        }),
        Ge = (0, i.createContext)(null),
        qe = 'button',
        He = 'Draggable'
      function Ze(e) {
        let { id: t, data: n, disabled: r = !1, attributes: o } = e
        const a = (0, s.YG)(He),
          {
            activators: l,
            activatorEvent: c,
            active: u,
            activeNodeRect: d,
            ariaDescribedById: f,
            draggableNodes: h,
            over: g,
          } = (0, i.useContext)(je),
          { role: v = qe, roleDescription: p = 'draggable', tabIndex: b = 0 } = null != o ? o : {},
          m = (null == u ? void 0 : u.id) === t,
          y = (0, i.useContext)(m ? _e : Ge),
          [w, x] = (0, s.lk)(),
          [A, R] = (0, s.lk)(),
          C = (function (e, t) {
            return (0, i.useMemo)(
              () =>
                e.reduce((e, n) => {
                  let { eventName: r, handler: o } = n
                  return (
                    (e[r] = (e) => {
                      o(e, t)
                    }),
                    e
                  )
                }, {}),
              [e, t],
            )
          })(l, t),
          D = (0, s.YN)(n)
        ;(0, s.Es)(
          () => (
            h.set(t, { id: t, key: a, node: w, activatorNode: A, data: D }),
            () => {
              const e = h.get(t)
              e && e.key === a && h.delete(t)
            }
          ),
          [h, t],
        )
        return {
          active: u,
          activatorEvent: c,
          activeNodeRect: d,
          attributes: (0, i.useMemo)(
            () => ({
              role: v,
              tabIndex: b,
              'aria-disabled': r,
              'aria-pressed': !(!m || v !== qe) || void 0,
              'aria-roledescription': p,
              'aria-describedby': f.draggable,
            }),
            [r, v, b, m, p, f.draggable],
          ),
          isDragging: m,
          listeners: r ? void 0 : C,
          node: w,
          over: g,
          setNodeRef: x,
          setActivatorNodeRef: R,
          transform: y,
        }
      }
      function Je() {
        return (0, i.useContext)(Pe)
      }
      const Ve = 'Droppable',
        Qe = { timeout: 25 }
      function $e(e) {
        let { data: t, disabled: n = !1, id: r, resizeObserverConfig: a } = e
        const l = (0, s.YG)(Ve),
          { active: c, dispatch: u, over: d, measureDroppableContainers: f } = (0, i.useContext)(je),
          h = (0, i.useRef)({ disabled: n }),
          g = (0, i.useRef)(!1),
          v = (0, i.useRef)(null),
          p = (0, i.useRef)(null),
          { disabled: m, updateMeasurementsFor: y, timeout: w } = (0, o.A)((0, o.A)({}, Qe), a),
          x = (0, s.YN)(null != y ? y : r),
          A = Re({
            callback: (0, i.useCallback)(() => {
              g.current
                ? (null != p.current && clearTimeout(p.current),
                  (p.current = setTimeout(() => {
                    ;(f(Array.isArray(x.current) ? x.current : [x.current]), (p.current = null))
                  }, w)))
                : (g.current = !0)
            }, [w]),
            disabled: m || !c,
          }),
          R = (0, i.useCallback)(
            (e, t) => {
              A && (t && (A.unobserve(t), (g.current = !1)), e && A.observe(e))
            },
            [A],
          ),
          [C, D] = (0, s.lk)(R),
          E = (0, s.YN)(t)
        return (
          (0, i.useEffect)(() => {
            A && C.current && (A.disconnect(), (g.current = !1), A.observe(C.current))
          }, [C, A]),
          (0, i.useEffect)(
            () => (
              u({ type: b.RegisterDroppable, element: { id: r, key: l, disabled: n, node: C, rect: v, data: E } }),
              () => u({ type: b.UnregisterDroppable, key: l, id: r })
            ),
            [r],
          ),
          (0, i.useEffect)(() => {
            n !== h.current.disabled &&
              (u({ type: b.SetDroppableDisabled, id: r, key: l, disabled: n }), (h.current.disabled = n))
          }, [r, l, n, u]),
          { active: c, rect: v, isOver: (null == d ? void 0 : d.id) === r, node: C, over: d, setNodeRef: D }
        )
      }
    },
    3669: (e, t, n) => {
      n.d(t, { h: () => r })
      const r = (0, n(7971).B)('div', { baseStyle: { flex: 1, justifySelf: 'stretch', alignSelf: 'stretch' } })
      r.displayName = 'Spacer'
    },
    4259: (e, t, n) => {
      n.d(t, { A: () => r })
      const r = (0, n(7784).A)('grip-vertical', [
        ['circle', { cx: '9', cy: '12', r: '1', key: '1vctgf' }],
        ['circle', { cx: '9', cy: '5', r: '1', key: 'hp0tcf' }],
        ['circle', { cx: '9', cy: '19', r: '1', key: 'fkjjf6' }],
        ['circle', { cx: '15', cy: '12', r: '1', key: '1tmaij' }],
        ['circle', { cx: '15', cy: '5', r: '1', key: '19l28e' }],
        ['circle', { cx: '15', cy: '19', r: '1', key: 'f4zoj3' }],
      ])
    },
    6800: (e, t, n) => {
      n.d(t, { FN: () => a, gj: () => i })
      var r = n(9379)
      n(1024)
      function o(e, t, n) {
        const o = (0, r.A)({}, e)
        return (
          t.top + e.y <= n.top
            ? (o.y = n.top - t.top)
            : t.bottom + e.y >= n.top + n.height && (o.y = n.top + n.height - t.bottom),
          t.left + e.x <= n.left
            ? (o.x = n.left - t.left)
            : t.right + e.x >= n.left + n.width && (o.x = n.left + n.width - t.right),
          o
        )
      }
      const i = (e) => {
          let { containerNodeRect: t, draggingNodeRect: n, transform: r } = e
          return n && t ? o(r, n, t) : r
        },
        a = (e) => {
          let { transform: t } = e
          return (0, r.A)((0, r.A)({}, t), {}, { x: 0 })
        }
    },
    7139: (e, t, n) => {
      n.d(t, { E: () => f })
      var r = n(9379),
        o = n(45),
        i = n(579),
        a = n(3033),
        s = n(4765),
        l = n(5003),
        c = n(5158),
        u = n(7971)
      const d = ['className'],
        f = (0, l.R)(function (e, t) {
          const n = (0, c.V)('Badge', e),
            l = (0, a.M)(e),
            { className: f } = l,
            h = (0, o.A)(l, d)
          return (0, i.jsx)(
            u.B.span,
            (0, r.A)(
              (0, r.A)({ ref: t, className: (0, s.cx)('chakra-badge', e.className) }, h),
              {},
              { __css: (0, r.A)({ display: 'inline-block', whiteSpace: 'nowrap', verticalAlign: 'middle' }, n) },
            ),
          )
        })
      f.displayName = 'Badge'
    },
    7781: (e, t, n) => {
      n.d(t, { B8: () => m, _J: () => y, ck: () => w, kp: () => x })
      var r = n(9379),
        o = n(45),
        i = n(579),
        a = n(3033),
        s = n(4881),
        l = n(6417),
        c = n(5011),
        u = n(5003),
        d = n(5158),
        f = n(7971)
      const h = ['children', 'styleType', 'stylePosition', 'spacing'],
        g = ['as'],
        v = ['as'],
        [p, b] = (0, l.q)({
          name: 'ListStylesContext',
          errorMessage:
            'useListStyles returned is \'undefined\'. Seems you forgot to wrap the components in "<List />" ',
        }),
        m = (0, u.R)(function (e, t) {
          const n = (0, d.o)('List', e),
            l = (0, a.M)(e),
            { children: c, styleType: u = 'none', stylePosition: g, spacing: v } = l,
            b = (0, o.A)(l, h),
            m = (0, s.a)(c),
            y = '& > *:not(style) ~ *:not(style)',
            w = v ? { [y]: { mt: v } } : {}
          return (0, i.jsx)(p, {
            value: n,
            children: (0, i.jsx)(
              f.B.ul,
              (0, r.A)(
                (0, r.A)(
                  {
                    ref: t,
                    listStyleType: u,
                    listStylePosition: g,
                    role: 'list',
                    __css: (0, r.A)((0, r.A)({}, n.container), w),
                  },
                  b,
                ),
                {},
                { children: m },
              ),
            ),
          })
        })
      m.displayName = 'List'
      const y = (0, u.R)((e, t) => {
        const { as: n } = e,
          a = (0, o.A)(e, g)
        return (0, i.jsx)(m, (0, r.A)({ ref: t, as: 'ol', styleType: 'decimal', marginStart: '1em' }, a))
      })
      y.displayName = 'OrderedList'
      ;(0, u.R)(function (e, t) {
        const { as: n } = e,
          a = (0, o.A)(e, v)
        return (0, i.jsx)(m, (0, r.A)({ ref: t, as: 'ul', styleType: 'initial', marginStart: '1em' }, a))
      }).displayName = 'UnorderedList'
      const w = (0, u.R)(function (e, t) {
        const n = b()
        return (0, i.jsx)(f.B.li, (0, r.A)((0, r.A)({ ref: t }, e), {}, { __css: n.item }))
      })
      w.displayName = 'ListItem'
      const x = (0, u.R)(function (e, t) {
        const n = b()
        return (0, i.jsx)(c.I, (0, r.A)((0, r.A)({ ref: t, role: 'presentation' }, e), {}, { __css: n.icon }))
      })
      x.displayName = 'ListIcon'
    },
    9077: (e, t, n) => {
      n.d(t, { T: () => v })
      var r = n(9379),
        o = n(45),
        i = n(579),
        a = n(3033),
        s = n(4765),
        l = n(4079),
        c = n(3635),
        u = n(5003),
        d = n(5158),
        f = n(7971)
      const h = ['className', 'rows'],
        g = ['h', 'minH', 'height', 'minHeight'],
        v = (0, u.R)((e, t) => {
          const n = (0, d.V)('Textarea', e),
            u = (0, a.M)(e),
            { className: v, rows: p } = u,
            b = (0, o.A)(u, h),
            m = (0, c.t)(b),
            y = p ? (0, l.c)(n, g) : n
          return (0, i.jsx)(
            f.B.textarea,
            (0, r.A)((0, r.A)({ ref: t, rows: p }, m), {}, { className: (0, s.cx)('chakra-textarea', v), __css: y }),
          )
        })
      v.displayName = 'Textarea'
    },
  },
])
//# sourceMappingURL=87.679ea498.chunk.js.map
