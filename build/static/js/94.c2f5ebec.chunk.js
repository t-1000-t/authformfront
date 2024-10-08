/*! For license information please see 94.c2f5ebec.chunk.js.LICENSE.txt */
;(self.webpackChunkauthform = self.webpackChunkauthform || []).push([
  [94],
  {
    4445: (e, t) => {
      'use strict'
      ;(t.byteLength = function (e) {
        var t = a(e),
          n = t[0],
          r = t[1]
        return (3 * (n + r)) / 4 - r
      }),
        (t.toByteArray = function (e) {
          var t,
            n,
            o = a(e),
            s = o[0],
            u = o[1],
            c = new i(
              (function (e, t, n) {
                return (3 * (t + n)) / 4 - n
              })(0, s, u),
            ),
            l = 0,
            h = u > 0 ? s - 4 : s
          for (n = 0; n < h; n += 4)
            (t =
              (r[e.charCodeAt(n)] << 18) |
              (r[e.charCodeAt(n + 1)] << 12) |
              (r[e.charCodeAt(n + 2)] << 6) |
              r[e.charCodeAt(n + 3)]),
              (c[l++] = (t >> 16) & 255),
              (c[l++] = (t >> 8) & 255),
              (c[l++] = 255 & t)
          2 === u && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (c[l++] = 255 & t))
          1 === u &&
            ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)),
            (c[l++] = (t >> 8) & 255),
            (c[l++] = 255 & t))
          return c
        }),
        (t.fromByteArray = function (e) {
          for (var t, r = e.length, i = r % 3, o = [], s = 16383, a = 0, c = r - i; a < c; a += s)
            o.push(u(e, a, a + s > c ? c : a + s))
          1 === i
            ? ((t = e[r - 1]), o.push(n[t >> 2] + n[(t << 4) & 63] + '=='))
            : 2 === i &&
              ((t = (e[r - 2] << 8) + e[r - 1]), o.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '='))
          return o.join('')
        })
      for (
        var n = [],
          r = [],
          i = 'undefined' !== typeof Uint8Array ? Uint8Array : Array,
          o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
          s = 0;
        s < 64;
        ++s
      )
        (n[s] = o[s]), (r[o.charCodeAt(s)] = s)
      function a(e) {
        var t = e.length
        if (t % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4')
        var n = e.indexOf('=')
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)]
      }
      function u(e, t, r) {
        for (var i, o, s = [], a = t; a < r; a += 3)
          (i = ((e[a] << 16) & 16711680) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])),
            s.push(n[((o = i) >> 18) & 63] + n[(o >> 12) & 63] + n[(o >> 6) & 63] + n[63 & o])
        return s.join('')
      }
      ;(r['-'.charCodeAt(0)] = 62), (r['_'.charCodeAt(0)] = 63)
    },
    6382: (e, t, n) => {
      'use strict'
      const r = n(4445),
        i = n(6900),
        o =
          'function' === typeof Symbol && 'function' === typeof Symbol.for
            ? Symbol.for('nodejs.util.inspect.custom')
            : null
      ;(t.Buffer = u),
        (t.SlowBuffer = function (e) {
          ;+e != e && (e = 0)
          return u.alloc(+e)
        }),
        (t.INSPECT_MAX_BYTES = 50)
      const s = 2147483647
      function a(e) {
        if (e > s) throw new RangeError('The value "' + e + '" is invalid for option "size"')
        const t = new Uint8Array(e)
        return Object.setPrototypeOf(t, u.prototype), t
      }
      function u(e, t, n) {
        if ('number' === typeof e) {
          if ('string' === typeof t)
            throw new TypeError('The "string" argument must be of type string. Received type number')
          return h(e)
        }
        return c(e, t, n)
      }
      function c(e, t, n) {
        if ('string' === typeof e)
          return (function (e, t) {
            ;('string' === typeof t && '' !== t) || (t = 'utf8')
            if (!u.isEncoding(t)) throw new TypeError('Unknown encoding: ' + t)
            const n = 0 | g(e, t)
            let r = a(n)
            const i = r.write(e, t)
            i !== n && (r = r.slice(0, i))
            return r
          })(e, t)
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (J(e, Uint8Array)) {
              const t = new Uint8Array(e)
              return d(t.buffer, t.byteOffset, t.byteLength)
            }
            return f(e)
          })(e)
        if (null == e)
          throw new TypeError(
            'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
              typeof e,
          )
        if (J(e, ArrayBuffer) || (e && J(e.buffer, ArrayBuffer))) return d(e, t, n)
        if (
          'undefined' !== typeof SharedArrayBuffer &&
          (J(e, SharedArrayBuffer) || (e && J(e.buffer, SharedArrayBuffer)))
        )
          return d(e, t, n)
        if ('number' === typeof e)
          throw new TypeError('The "value" argument must not be of type number. Received type number')
        const r = e.valueOf && e.valueOf()
        if (null != r && r !== e) return u.from(r, t, n)
        const i = (function (e) {
          if (u.isBuffer(e)) {
            const t = 0 | p(e.length),
              n = a(t)
            return 0 === n.length || e.copy(n, 0, 0, t), n
          }
          if (void 0 !== e.length) return 'number' !== typeof e.length || $(e.length) ? a(0) : f(e)
          if ('Buffer' === e.type && Array.isArray(e.data)) return f(e.data)
        })(e)
        if (i) return i
        if ('undefined' !== typeof Symbol && null != Symbol.toPrimitive && 'function' === typeof e[Symbol.toPrimitive])
          return u.from(e[Symbol.toPrimitive]('string'), t, n)
        throw new TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof e,
        )
      }
      function l(e) {
        if ('number' !== typeof e) throw new TypeError('"size" argument must be of type number')
        if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
      }
      function h(e) {
        return l(e), a(e < 0 ? 0 : 0 | p(e))
      }
      function f(e) {
        const t = e.length < 0 ? 0 : 0 | p(e.length),
          n = a(t)
        for (let r = 0; r < t; r += 1) n[r] = 255 & e[r]
        return n
      }
      function d(e, t, n) {
        if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds')
        if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds')
        let r
        return (
          (r =
            void 0 === t && void 0 === n
              ? new Uint8Array(e)
              : void 0 === n
                ? new Uint8Array(e, t)
                : new Uint8Array(e, t, n)),
          Object.setPrototypeOf(r, u.prototype),
          r
        )
      }
      function p(e) {
        if (e >= s)
          throw new RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + s.toString(16) + ' bytes')
        return 0 | e
      }
      function g(e, t) {
        if (u.isBuffer(e)) return e.length
        if (ArrayBuffer.isView(e) || J(e, ArrayBuffer)) return e.byteLength
        if ('string' !== typeof e)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e,
          )
        const n = e.length,
          r = arguments.length > 2 && !0 === arguments[2]
        if (!r && 0 === n) return 0
        let i = !1
        for (;;)
          switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return n
            case 'utf8':
            case 'utf-8':
              return z(e).length
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * n
            case 'hex':
              return n >>> 1
            case 'base64':
              return G(e).length
            default:
              if (i) return r ? -1 : z(e).length
              ;(t = ('' + t).toLowerCase()), (i = !0)
          }
      }
      function y(e, t, n) {
        let r = !1
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return ''
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0)) return ''
        if ((n >>>= 0) <= (t >>>= 0)) return ''
        for (e || (e = 'utf8'); ; )
          switch (e) {
            case 'hex':
              return I(this, t, n)
            case 'utf8':
            case 'utf-8':
              return T(this, t, n)
            case 'ascii':
              return k(this, t, n)
            case 'latin1':
            case 'binary':
              return O(this, t, n)
            case 'base64':
              return S(this, t, n)
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return N(this, t, n)
            default:
              if (r) throw new TypeError('Unknown encoding: ' + e)
              ;(e = (e + '').toLowerCase()), (r = !0)
          }
      }
      function b(e, t, n) {
        const r = e[t]
        ;(e[t] = e[n]), (e[n] = r)
      }
      function m(e, t, n, r, i) {
        if (0 === e.length) return -1
        if (
          ('string' === typeof n
            ? ((r = n), (n = 0))
            : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
          $((n = +n)) && (n = i ? 0 : e.length - 1),
          n < 0 && (n = e.length + n),
          n >= e.length)
        ) {
          if (i) return -1
          n = e.length - 1
        } else if (n < 0) {
          if (!i) return -1
          n = 0
        }
        if (('string' === typeof t && (t = u.from(t, r)), u.isBuffer(t))) return 0 === t.length ? -1 : _(e, t, n, r, i)
        if ('number' === typeof t)
          return (
            (t &= 255),
            'function' === typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(e, t, n)
                : Uint8Array.prototype.lastIndexOf.call(e, t, n)
              : _(e, [t], n, r, i)
          )
        throw new TypeError('val must be string, number or Buffer')
      }
      function _(e, t, n, r, i) {
        let o,
          s = 1,
          a = e.length,
          u = t.length
        if (
          void 0 !== r &&
          ('ucs2' === (r = String(r).toLowerCase()) || 'ucs-2' === r || 'utf16le' === r || 'utf-16le' === r)
        ) {
          if (e.length < 2 || t.length < 2) return -1
          ;(s = 2), (a /= 2), (u /= 2), (n /= 2)
        }
        function c(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s)
        }
        if (i) {
          let r = -1
          for (o = n; o < a; o++)
            if (c(e, o) === c(t, -1 === r ? 0 : o - r)) {
              if ((-1 === r && (r = o), o - r + 1 === u)) return r * s
            } else -1 !== r && (o -= o - r), (r = -1)
        } else
          for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
            let n = !0
            for (let r = 0; r < u; r++)
              if (c(e, o + r) !== c(t, r)) {
                n = !1
                break
              }
            if (n) return o
          }
        return -1
      }
      function w(e, t, n, r) {
        n = Number(n) || 0
        const i = e.length - n
        r ? (r = Number(r)) > i && (r = i) : (r = i)
        const o = t.length
        let s
        for (r > o / 2 && (r = o / 2), s = 0; s < r; ++s) {
          const r = parseInt(t.substr(2 * s, 2), 16)
          if ($(r)) return s
          e[n + s] = r
        }
        return s
      }
      function v(e, t, n, r) {
        return K(z(t, e.length - n), e, n, r)
      }
      function E(e, t, n, r) {
        return K(
          (function (e) {
            const t = []
            for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n))
            return t
          })(t),
          e,
          n,
          r,
        )
      }
      function C(e, t, n, r) {
        return K(G(t), e, n, r)
      }
      function R(e, t, n, r) {
        return K(
          (function (e, t) {
            let n, r, i
            const o = []
            for (let s = 0; s < e.length && !((t -= 2) < 0); ++s)
              (n = e.charCodeAt(s)), (r = n >> 8), (i = n % 256), o.push(i), o.push(r)
            return o
          })(t, e.length - n),
          e,
          n,
          r,
        )
      }
      function S(e, t, n) {
        return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
      }
      function T(e, t, n) {
        n = Math.min(e.length, n)
        const r = []
        let i = t
        for (; i < n; ) {
          const t = e[i]
          let o = null,
            s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1
          if (i + s <= n) {
            let n, r, a, u
            switch (s) {
              case 1:
                t < 128 && (o = t)
                break
              case 2:
                ;(n = e[i + 1]), 128 === (192 & n) && ((u = ((31 & t) << 6) | (63 & n)), u > 127 && (o = u))
                break
              case 3:
                ;(n = e[i + 1]),
                  (r = e[i + 2]),
                  128 === (192 & n) &&
                    128 === (192 & r) &&
                    ((u = ((15 & t) << 12) | ((63 & n) << 6) | (63 & r)),
                    u > 2047 && (u < 55296 || u > 57343) && (o = u))
                break
              case 4:
                ;(n = e[i + 1]),
                  (r = e[i + 2]),
                  (a = e[i + 3]),
                  128 === (192 & n) &&
                    128 === (192 & r) &&
                    128 === (192 & a) &&
                    ((u = ((15 & t) << 18) | ((63 & n) << 12) | ((63 & r) << 6) | (63 & a)),
                    u > 65535 && u < 1114112 && (o = u))
            }
          }
          null === o
            ? ((o = 65533), (s = 1))
            : o > 65535 && ((o -= 65536), r.push(((o >>> 10) & 1023) | 55296), (o = 56320 | (1023 & o))),
            r.push(o),
            (i += s)
        }
        return (function (e) {
          const t = e.length
          if (t <= A) return String.fromCharCode.apply(String, e)
          let n = '',
            r = 0
          for (; r < t; ) n += String.fromCharCode.apply(String, e.slice(r, (r += A)))
          return n
        })(r)
      }
      ;(t.kMaxLength = s),
        (u.TYPED_ARRAY_SUPPORT = (function () {
          try {
            const e = new Uint8Array(1),
              t = {
                foo: function () {
                  return 42
                },
              }
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
          } catch (e) {
            return !1
          }
        })()),
        u.TYPED_ARRAY_SUPPORT ||
          'undefined' === typeof console ||
          'function' !== typeof console.error ||
          console.error(
            'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.',
          ),
        Object.defineProperty(u.prototype, 'parent', {
          enumerable: !0,
          get: function () {
            if (u.isBuffer(this)) return this.buffer
          },
        }),
        Object.defineProperty(u.prototype, 'offset', {
          enumerable: !0,
          get: function () {
            if (u.isBuffer(this)) return this.byteOffset
          },
        }),
        (u.poolSize = 8192),
        (u.from = function (e, t, n) {
          return c(e, t, n)
        }),
        Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(u, Uint8Array),
        (u.alloc = function (e, t, n) {
          return (function (e, t, n) {
            return l(e), e <= 0 ? a(e) : void 0 !== t ? ('string' === typeof n ? a(e).fill(t, n) : a(e).fill(t)) : a(e)
          })(e, t, n)
        }),
        (u.allocUnsafe = function (e) {
          return h(e)
        }),
        (u.allocUnsafeSlow = function (e) {
          return h(e)
        }),
        (u.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== u.prototype
        }),
        (u.compare = function (e, t) {
          if (
            (J(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
            J(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
            !u.isBuffer(e) || !u.isBuffer(t))
          )
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array')
          if (e === t) return 0
          let n = e.length,
            r = t.length
          for (let i = 0, o = Math.min(n, r); i < o; ++i)
            if (e[i] !== t[i]) {
              ;(n = e[i]), (r = t[i])
              break
            }
          return n < r ? -1 : r < n ? 1 : 0
        }),
        (u.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0
            default:
              return !1
          }
        }),
        (u.concat = function (e, t) {
          if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers')
          if (0 === e.length) return u.alloc(0)
          let n
          if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length
          const r = u.allocUnsafe(t)
          let i = 0
          for (n = 0; n < e.length; ++n) {
            let t = e[n]
            if (J(t, Uint8Array))
              i + t.length > r.length
                ? (u.isBuffer(t) || (t = u.from(t)), t.copy(r, i))
                : Uint8Array.prototype.set.call(r, t, i)
            else {
              if (!u.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers')
              t.copy(r, i)
            }
            i += t.length
          }
          return r
        }),
        (u.byteLength = g),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function () {
          const e = this.length
          if (e % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits')
          for (let t = 0; t < e; t += 2) b(this, t, t + 1)
          return this
        }),
        (u.prototype.swap32 = function () {
          const e = this.length
          if (e % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits')
          for (let t = 0; t < e; t += 4) b(this, t, t + 3), b(this, t + 1, t + 2)
          return this
        }),
        (u.prototype.swap64 = function () {
          const e = this.length
          if (e % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits')
          for (let t = 0; t < e; t += 8)
            b(this, t, t + 7), b(this, t + 1, t + 6), b(this, t + 2, t + 5), b(this, t + 3, t + 4)
          return this
        }),
        (u.prototype.toString = function () {
          const e = this.length
          return 0 === e ? '' : 0 === arguments.length ? T(this, 0, e) : y.apply(this, arguments)
        }),
        (u.prototype.toLocaleString = u.prototype.toString),
        (u.prototype.equals = function (e) {
          if (!u.isBuffer(e)) throw new TypeError('Argument must be a Buffer')
          return this === e || 0 === u.compare(this, e)
        }),
        (u.prototype.inspect = function () {
          let e = ''
          const n = t.INSPECT_MAX_BYTES
          return (
            (e = this.toString('hex', 0, n)
              .replace(/(.{2})/g, '$1 ')
              .trim()),
            this.length > n && (e += ' ... '),
            '<Buffer ' + e + '>'
          )
        }),
        o && (u.prototype[o] = u.prototype.inspect),
        (u.prototype.compare = function (e, t, n, r, i) {
          if ((J(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(e)))
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e,
            )
          if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === r && (r = 0),
            void 0 === i && (i = this.length),
            t < 0 || n > e.length || r < 0 || i > this.length)
          )
            throw new RangeError('out of range index')
          if (r >= i && t >= n) return 0
          if (r >= i) return -1
          if (t >= n) return 1
          if (this === e) return 0
          let o = (i >>>= 0) - (r >>>= 0),
            s = (n >>>= 0) - (t >>>= 0)
          const a = Math.min(o, s),
            c = this.slice(r, i),
            l = e.slice(t, n)
          for (let u = 0; u < a; ++u)
            if (c[u] !== l[u]) {
              ;(o = c[u]), (s = l[u])
              break
            }
          return o < s ? -1 : s < o ? 1 : 0
        }),
        (u.prototype.includes = function (e, t, n) {
          return -1 !== this.indexOf(e, t, n)
        }),
        (u.prototype.indexOf = function (e, t, n) {
          return m(this, e, t, n, !0)
        }),
        (u.prototype.lastIndexOf = function (e, t, n) {
          return m(this, e, t, n, !1)
        }),
        (u.prototype.write = function (e, t, n, r) {
          if (void 0 === t) (r = 'utf8'), (n = this.length), (t = 0)
          else if (void 0 === n && 'string' === typeof t) (r = t), (n = this.length), (t = 0)
          else {
            if (!isFinite(t)) throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported')
            ;(t >>>= 0), isFinite(n) ? ((n >>>= 0), void 0 === r && (r = 'utf8')) : ((r = n), (n = void 0))
          }
          const i = this.length - t
          if (((void 0 === n || n > i) && (n = i), (e.length > 0 && (n < 0 || t < 0)) || t > this.length))
            throw new RangeError('Attempt to write outside buffer bounds')
          r || (r = 'utf8')
          let o = !1
          for (;;)
            switch (r) {
              case 'hex':
                return w(this, e, t, n)
              case 'utf8':
              case 'utf-8':
                return v(this, e, t, n)
              case 'ascii':
              case 'latin1':
              case 'binary':
                return E(this, e, t, n)
              case 'base64':
                return C(this, e, t, n)
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return R(this, e, t, n)
              default:
                if (o) throw new TypeError('Unknown encoding: ' + r)
                ;(r = ('' + r).toLowerCase()), (o = !0)
            }
        }),
        (u.prototype.toJSON = function () {
          return { type: 'Buffer', data: Array.prototype.slice.call(this._arr || this, 0) }
        })
      const A = 4096
      function k(e, t, n) {
        let r = ''
        n = Math.min(e.length, n)
        for (let i = t; i < n; ++i) r += String.fromCharCode(127 & e[i])
        return r
      }
      function O(e, t, n) {
        let r = ''
        n = Math.min(e.length, n)
        for (let i = t; i < n; ++i) r += String.fromCharCode(e[i])
        return r
      }
      function I(e, t, n) {
        const r = e.length
        ;(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r)
        let i = ''
        for (let o = t; o < n; ++o) i += X[e[o]]
        return i
      }
      function N(e, t, n) {
        const r = e.slice(t, n)
        let i = ''
        for (let o = 0; o < r.length - 1; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1])
        return i
      }
      function L(e, t, n) {
        if (e % 1 !== 0 || e < 0) throw new RangeError('offset is not uint')
        if (e + t > n) throw new RangeError('Trying to access beyond buffer length')
      }
      function x(e, t, n, r, i, o) {
        if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance')
        if (t > i || t < o) throw new RangeError('"value" argument is out of bounds')
        if (n + r > e.length) throw new RangeError('Index out of range')
      }
      function B(e, t, n, r, i) {
        W(t, r, i, e, n, 7)
        let o = Number(t & BigInt(4294967295))
        ;(e[n++] = o), (o >>= 8), (e[n++] = o), (o >>= 8), (e[n++] = o), (o >>= 8), (e[n++] = o)
        let s = Number((t >> BigInt(32)) & BigInt(4294967295))
        return (e[n++] = s), (s >>= 8), (e[n++] = s), (s >>= 8), (e[n++] = s), (s >>= 8), (e[n++] = s), n
      }
      function M(e, t, n, r, i) {
        W(t, r, i, e, n, 7)
        let o = Number(t & BigInt(4294967295))
        ;(e[n + 7] = o), (o >>= 8), (e[n + 6] = o), (o >>= 8), (e[n + 5] = o), (o >>= 8), (e[n + 4] = o)
        let s = Number((t >> BigInt(32)) & BigInt(4294967295))
        return (e[n + 3] = s), (s >>= 8), (e[n + 2] = s), (s >>= 8), (e[n + 1] = s), (s >>= 8), (e[n] = s), n + 8
      }
      function P(e, t, n, r, i, o) {
        if (n + r > e.length) throw new RangeError('Index out of range')
        if (n < 0) throw new RangeError('Index out of range')
      }
      function D(e, t, n, r, o) {
        return (t = +t), (n >>>= 0), o || P(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
      }
      function F(e, t, n, r, o) {
        return (t = +t), (n >>>= 0), o || P(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
      }
      ;(u.prototype.slice = function (e, t) {
        const n = this.length
        ;(e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
          (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
          t < e && (t = e)
        const r = this.subarray(e, t)
        return Object.setPrototypeOf(r, u.prototype), r
      }),
        (u.prototype.readUintLE = u.prototype.readUIntLE =
          function (e, t, n) {
            ;(e >>>= 0), (t >>>= 0), n || L(e, t, this.length)
            let r = this[e],
              i = 1,
              o = 0
            for (; ++o < t && (i *= 256); ) r += this[e + o] * i
            return r
          }),
        (u.prototype.readUintBE = u.prototype.readUIntBE =
          function (e, t, n) {
            ;(e >>>= 0), (t >>>= 0), n || L(e, t, this.length)
            let r = this[e + --t],
              i = 1
            for (; t > 0 && (i *= 256); ) r += this[e + --t] * i
            return r
          }),
        (u.prototype.readUint8 = u.prototype.readUInt8 =
          function (e, t) {
            return (e >>>= 0), t || L(e, 1, this.length), this[e]
          }),
        (u.prototype.readUint16LE = u.prototype.readUInt16LE =
          function (e, t) {
            return (e >>>= 0), t || L(e, 2, this.length), this[e] | (this[e + 1] << 8)
          }),
        (u.prototype.readUint16BE = u.prototype.readUInt16BE =
          function (e, t) {
            return (e >>>= 0), t || L(e, 2, this.length), (this[e] << 8) | this[e + 1]
          }),
        (u.prototype.readUint32LE = u.prototype.readUInt32LE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || L(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3]
            )
          }),
        (u.prototype.readUint32BE = u.prototype.readUInt32BE =
          function (e, t) {
            return (
              (e >>>= 0),
              t || L(e, 4, this.length),
              16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            )
          }),
        (u.prototype.readBigUInt64LE = Z(function (e) {
          H((e >>>= 0), 'offset')
          const t = this[e],
            n = this[e + 7]
          ;(void 0 !== t && void 0 !== n) || V(e, this.length - 8)
          const r = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
            i = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 2 ** 24
          return BigInt(r) + (BigInt(i) << BigInt(32))
        })),
        (u.prototype.readBigUInt64BE = Z(function (e) {
          H((e >>>= 0), 'offset')
          const t = this[e],
            n = this[e + 7]
          ;(void 0 !== t && void 0 !== n) || V(e, this.length - 8)
          const r = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
            i = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n
          return (BigInt(r) << BigInt(32)) + BigInt(i)
        })),
        (u.prototype.readIntLE = function (e, t, n) {
          ;(e >>>= 0), (t >>>= 0), n || L(e, t, this.length)
          let r = this[e],
            i = 1,
            o = 0
          for (; ++o < t && (i *= 256); ) r += this[e + o] * i
          return (i *= 128), r >= i && (r -= Math.pow(2, 8 * t)), r
        }),
        (u.prototype.readIntBE = function (e, t, n) {
          ;(e >>>= 0), (t >>>= 0), n || L(e, t, this.length)
          let r = t,
            i = 1,
            o = this[e + --r]
          for (; r > 0 && (i *= 256); ) o += this[e + --r] * i
          return (i *= 128), o >= i && (o -= Math.pow(2, 8 * t)), o
        }),
        (u.prototype.readInt8 = function (e, t) {
          return (e >>>= 0), t || L(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }),
        (u.prototype.readInt16LE = function (e, t) {
          ;(e >>>= 0), t || L(e, 2, this.length)
          const n = this[e] | (this[e + 1] << 8)
          return 32768 & n ? 4294901760 | n : n
        }),
        (u.prototype.readInt16BE = function (e, t) {
          ;(e >>>= 0), t || L(e, 2, this.length)
          const n = this[e + 1] | (this[e] << 8)
          return 32768 & n ? 4294901760 | n : n
        }),
        (u.prototype.readInt32LE = function (e, t) {
          return (
            (e >>>= 0),
            t || L(e, 4, this.length),
            this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24)
          )
        }),
        (u.prototype.readInt32BE = function (e, t) {
          return (
            (e >>>= 0),
            t || L(e, 4, this.length),
            (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]
          )
        }),
        (u.prototype.readBigInt64LE = Z(function (e) {
          H((e >>>= 0), 'offset')
          const t = this[e],
            n = this[e + 7]
          ;(void 0 !== t && void 0 !== n) || V(e, this.length - 8)
          const r = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24)
          return (BigInt(r) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24)
        })),
        (u.prototype.readBigInt64BE = Z(function (e) {
          H((e >>>= 0), 'offset')
          const t = this[e],
            n = this[e + 7]
          ;(void 0 !== t && void 0 !== n) || V(e, this.length - 8)
          const r = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]
          return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n)
        })),
        (u.prototype.readFloatLE = function (e, t) {
          return (e >>>= 0), t || L(e, 4, this.length), i.read(this, e, !0, 23, 4)
        }),
        (u.prototype.readFloatBE = function (e, t) {
          return (e >>>= 0), t || L(e, 4, this.length), i.read(this, e, !1, 23, 4)
        }),
        (u.prototype.readDoubleLE = function (e, t) {
          return (e >>>= 0), t || L(e, 8, this.length), i.read(this, e, !0, 52, 8)
        }),
        (u.prototype.readDoubleBE = function (e, t) {
          return (e >>>= 0), t || L(e, 8, this.length), i.read(this, e, !1, 52, 8)
        }),
        (u.prototype.writeUintLE = u.prototype.writeUIntLE =
          function (e, t, n, r) {
            if (((e = +e), (t >>>= 0), (n >>>= 0), !r)) {
              x(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
            }
            let i = 1,
              o = 0
            for (this[t] = 255 & e; ++o < n && (i *= 256); ) this[t + o] = (e / i) & 255
            return t + n
          }),
        (u.prototype.writeUintBE = u.prototype.writeUIntBE =
          function (e, t, n, r) {
            if (((e = +e), (t >>>= 0), (n >>>= 0), !r)) {
              x(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
            }
            let i = n - 1,
              o = 1
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); ) this[t + i] = (e / o) & 255
            return t + n
          }),
        (u.prototype.writeUint8 = u.prototype.writeUInt8 =
          function (e, t, n) {
            return (e = +e), (t >>>= 0), n || x(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1
          }),
        (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
          function (e, t, n) {
            return (
              (e = +e), (t >>>= 0), n || x(this, e, t, 2, 65535, 0), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2
            )
          }),
        (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
          function (e, t, n) {
            return (
              (e = +e), (t >>>= 0), n || x(this, e, t, 2, 65535, 0), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2
            )
          }),
        (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
          function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || x(this, e, t, 4, 4294967295, 0),
              (this[t + 3] = e >>> 24),
              (this[t + 2] = e >>> 16),
              (this[t + 1] = e >>> 8),
              (this[t] = 255 & e),
              t + 4
            )
          }),
        (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
          function (e, t, n) {
            return (
              (e = +e),
              (t >>>= 0),
              n || x(this, e, t, 4, 4294967295, 0),
              (this[t] = e >>> 24),
              (this[t + 1] = e >>> 16),
              (this[t + 2] = e >>> 8),
              (this[t + 3] = 255 & e),
              t + 4
            )
          }),
        (u.prototype.writeBigUInt64LE = Z(function (e) {
          return B(
            this,
            e,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            BigInt(0),
            BigInt('0xffffffffffffffff'),
          )
        })),
        (u.prototype.writeBigUInt64BE = Z(function (e) {
          return M(
            this,
            e,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            BigInt(0),
            BigInt('0xffffffffffffffff'),
          )
        })),
        (u.prototype.writeIntLE = function (e, t, n, r) {
          if (((e = +e), (t >>>= 0), !r)) {
            const r = Math.pow(2, 8 * n - 1)
            x(this, e, t, n, r - 1, -r)
          }
          let i = 0,
            o = 1,
            s = 0
          for (this[t] = 255 & e; ++i < n && (o *= 256); )
            e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), (this[t + i] = (((e / o) | 0) - s) & 255)
          return t + n
        }),
        (u.prototype.writeIntBE = function (e, t, n, r) {
          if (((e = +e), (t >>>= 0), !r)) {
            const r = Math.pow(2, 8 * n - 1)
            x(this, e, t, n, r - 1, -r)
          }
          let i = n - 1,
            o = 1,
            s = 0
          for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
            e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), (this[t + i] = (((e / o) | 0) - s) & 255)
          return t + n
        }),
        (u.prototype.writeInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || x(this, e, t, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          )
        }),
        (u.prototype.writeInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || x(this, e, t, 2, 32767, -32768),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          )
        }),
        (u.prototype.writeInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || x(this, e, t, 2, 32767, -32768),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          )
        }),
        (u.prototype.writeInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || x(this, e, t, 4, 2147483647, -2147483648),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            (this[t + 2] = e >>> 16),
            (this[t + 3] = e >>> 24),
            t + 4
          )
        }),
        (u.prototype.writeInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || x(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          )
        }),
        (u.prototype.writeBigInt64LE = Z(function (e) {
          return B(
            this,
            e,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            -BigInt('0x8000000000000000'),
            BigInt('0x7fffffffffffffff'),
          )
        })),
        (u.prototype.writeBigInt64BE = Z(function (e) {
          return M(
            this,
            e,
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            -BigInt('0x8000000000000000'),
            BigInt('0x7fffffffffffffff'),
          )
        })),
        (u.prototype.writeFloatLE = function (e, t, n) {
          return D(this, e, t, !0, n)
        }),
        (u.prototype.writeFloatBE = function (e, t, n) {
          return D(this, e, t, !1, n)
        }),
        (u.prototype.writeDoubleLE = function (e, t, n) {
          return F(this, e, t, !0, n)
        }),
        (u.prototype.writeDoubleBE = function (e, t, n) {
          return F(this, e, t, !1, n)
        }),
        (u.prototype.copy = function (e, t, n, r) {
          if (!u.isBuffer(e)) throw new TypeError('argument should be a Buffer')
          if (
            (n || (n = 0),
            r || 0 === r || (r = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            r > 0 && r < n && (r = n),
            r === n)
          )
            return 0
          if (0 === e.length || 0 === this.length) return 0
          if (t < 0) throw new RangeError('targetStart out of bounds')
          if (n < 0 || n >= this.length) throw new RangeError('Index out of range')
          if (r < 0) throw new RangeError('sourceEnd out of bounds')
          r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n)
          const i = r - n
          return (
            this === e && 'function' === typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(t, n, r)
              : Uint8Array.prototype.set.call(e, this.subarray(n, r), t),
            i
          )
        }),
        (u.prototype.fill = function (e, t, n, r) {
          if ('string' === typeof e) {
            if (
              ('string' === typeof t
                ? ((r = t), (t = 0), (n = this.length))
                : 'string' === typeof n && ((r = n), (n = this.length)),
              void 0 !== r && 'string' !== typeof r)
            )
              throw new TypeError('encoding must be a string')
            if ('string' === typeof r && !u.isEncoding(r)) throw new TypeError('Unknown encoding: ' + r)
            if (1 === e.length) {
              const t = e.charCodeAt(0)
              ;(('utf8' === r && t < 128) || 'latin1' === r) && (e = t)
            }
          } else 'number' === typeof e ? (e &= 255) : 'boolean' === typeof e && (e = Number(e))
          if (t < 0 || this.length < t || this.length < n) throw new RangeError('Out of range index')
          if (n <= t) return this
          let i
          if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), e || (e = 0), 'number' === typeof e))
            for (i = t; i < n; ++i) this[i] = e
          else {
            const o = u.isBuffer(e) ? e : u.from(e, r),
              s = o.length
            if (0 === s) throw new TypeError('The value "' + e + '" is invalid for argument "value"')
            for (i = 0; i < n - t; ++i) this[i + t] = o[i % s]
          }
          return this
        })
      const U = {}
      function j(e, t, n) {
        U[e] = class extends n {
          constructor() {
            super(),
              Object.defineProperty(this, 'message', {
                value: t.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = ''.concat(this.name, ' [').concat(e, ']')),
              this.stack,
              delete this.name
          }
          get code() {
            return e
          }
          set code(e) {
            Object.defineProperty(this, 'code', { configurable: !0, enumerable: !0, value: e, writable: !0 })
          }
          toString() {
            return ''.concat(this.name, ' [').concat(e, ']: ').concat(this.message)
          }
        }
      }
      function q(e) {
        let t = '',
          n = e.length
        const r = '-' === e[0] ? 1 : 0
        for (; n >= r + 4; n -= 3) t = '_'.concat(e.slice(n - 3, n)).concat(t)
        return ''.concat(e.slice(0, n)).concat(t)
      }
      function W(e, t, n, r, i, o) {
        if (e > n || e < t) {
          const r = 'bigint' === typeof t ? 'n' : ''
          let i
          throw (
            ((i =
              o > 3
                ? 0 === t || t === BigInt(0)
                  ? '>= 0'
                      .concat(r, ' and < 2')
                      .concat(r, ' ** ')
                      .concat(8 * (o + 1))
                      .concat(r)
                  : '>= -(2'
                      .concat(r, ' ** ')
                      .concat(8 * (o + 1) - 1)
                      .concat(r, ') and < 2 ** ') + ''.concat(8 * (o + 1) - 1).concat(r)
                : '>= '.concat(t).concat(r, ' and <= ').concat(n).concat(r)),
            new U.ERR_OUT_OF_RANGE('value', i, e))
          )
        }
        !(function (e, t, n) {
          H(t, 'offset'), (void 0 !== e[t] && void 0 !== e[t + n]) || V(t, e.length - (n + 1))
        })(r, i, o)
      }
      function H(e, t) {
        if ('number' !== typeof e) throw new U.ERR_INVALID_ARG_TYPE(t, 'number', e)
      }
      function V(e, t, n) {
        if (Math.floor(e) !== e) throw (H(e, n), new U.ERR_OUT_OF_RANGE(n || 'offset', 'an integer', e))
        if (t < 0) throw new U.ERR_BUFFER_OUT_OF_BOUNDS()
        throw new U.ERR_OUT_OF_RANGE(n || 'offset', '>= '.concat(n ? 1 : 0, ' and <= ').concat(t), e)
      }
      j(
        'ERR_BUFFER_OUT_OF_BOUNDS',
        function (e) {
          return e ? ''.concat(e, ' is outside of buffer bounds') : 'Attempt to access memory outside buffer bounds'
        },
        RangeError,
      ),
        j(
          'ERR_INVALID_ARG_TYPE',
          function (e, t) {
            return 'The "'.concat(e, '" argument must be of type number. Received type ').concat(typeof t)
          },
          TypeError,
        ),
        j(
          'ERR_OUT_OF_RANGE',
          function (e, t, n) {
            let r = 'The value of "'.concat(e, '" is out of range.'),
              i = n
            return (
              Number.isInteger(n) && Math.abs(n) > 2 ** 32
                ? (i = q(String(n)))
                : 'bigint' === typeof n &&
                  ((i = String(n)),
                  (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = q(i)),
                  (i += 'n')),
              (r += ' It must be '.concat(t, '. Received ').concat(i)),
              r
            )
          },
          RangeError,
        )
      const Y = /[^+/0-9A-Za-z-_]/g
      function z(e, t) {
        let n
        t = t || 1 / 0
        const r = e.length
        let i = null
        const o = []
        for (let s = 0; s < r; ++s) {
          if (((n = e.charCodeAt(s)), n > 55295 && n < 57344)) {
            if (!i) {
              if (n > 56319) {
                ;(t -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              if (s + 1 === r) {
                ;(t -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              i = n
              continue
            }
            if (n < 56320) {
              ;(t -= 3) > -1 && o.push(239, 191, 189), (i = n)
              continue
            }
            n = 65536 + (((i - 55296) << 10) | (n - 56320))
          } else i && (t -= 3) > -1 && o.push(239, 191, 189)
          if (((i = null), n < 128)) {
            if ((t -= 1) < 0) break
            o.push(n)
          } else if (n < 2048) {
            if ((t -= 2) < 0) break
            o.push((n >> 6) | 192, (63 & n) | 128)
          } else if (n < 65536) {
            if ((t -= 3) < 0) break
            o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128)
          } else {
            if (!(n < 1114112)) throw new Error('Invalid code point')
            if ((t -= 4) < 0) break
            o.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128)
          }
        }
        return o
      }
      function G(e) {
        return r.toByteArray(
          (function (e) {
            if ((e = (e = e.split('=')[0]).trim().replace(Y, '')).length < 2) return ''
            for (; e.length % 4 !== 0; ) e += '='
            return e
          })(e),
        )
      }
      function K(e, t, n, r) {
        let i
        for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i]
        return i
      }
      function J(e, t) {
        return (
          e instanceof t ||
          (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name)
        )
      }
      function $(e) {
        return e !== e
      }
      const X = (function () {
        const e = '0123456789abcdef',
          t = new Array(256)
        for (let n = 0; n < 16; ++n) {
          const r = 16 * n
          for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i]
        }
        return t
      })()
      function Z(e) {
        return 'undefined' === typeof BigInt ? Q : e
      }
      function Q() {
        throw new Error('BigInt not supported')
      }
    },
    5270: (e, t, n) => {
      'use strict'
      var r = n(139),
        i = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' }
      e.exports = function (e, t) {
        var n,
          o,
          s,
          a,
          u,
          c,
          l = !1
        t || (t = {}), (n = t.debug || !1)
        try {
          if (
            ((s = r()),
            (a = document.createRange()),
            (u = document.getSelection()),
            ((c = document.createElement('span')).textContent = e),
            (c.ariaHidden = 'true'),
            (c.style.all = 'unset'),
            (c.style.position = 'fixed'),
            (c.style.top = 0),
            (c.style.clip = 'rect(0, 0, 0, 0)'),
            (c.style.whiteSpace = 'pre'),
            (c.style.webkitUserSelect = 'text'),
            (c.style.MozUserSelect = 'text'),
            (c.style.msUserSelect = 'text'),
            (c.style.userSelect = 'text'),
            c.addEventListener('copy', function (r) {
              if ((r.stopPropagation(), t.format))
                if ((r.preventDefault(), 'undefined' === typeof r.clipboardData)) {
                  n && console.warn('unable to use e.clipboardData'),
                    n && console.warn('trying IE specific stuff'),
                    window.clipboardData.clearData()
                  var o = i[t.format] || i.default
                  window.clipboardData.setData(o, e)
                } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e)
              t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData))
            }),
            document.body.appendChild(c),
            a.selectNodeContents(c),
            u.addRange(a),
            !document.execCommand('copy'))
          )
            throw new Error('copy command was unsuccessful')
          l = !0
        } catch (h) {
          n && console.error('unable to copy using execCommand: ', h), n && console.warn('trying IE specific stuff')
          try {
            window.clipboardData.setData(t.format || 'text', e), t.onCopy && t.onCopy(window.clipboardData), (l = !0)
          } catch (h) {
            n && console.error('unable to copy using clipboardData: ', h),
              n && console.error('falling back to prompt'),
              (o = (function (e) {
                var t = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C'
                return e.replace(/#{\s*key\s*}/g, t)
              })('message' in t ? t.message : 'Copy to clipboard: #{key}, Enter')),
              window.prompt(o, e)
          }
        } finally {
          u && ('function' == typeof u.removeRange ? u.removeRange(a) : u.removeAllRanges()),
            c && document.body.removeChild(c),
            s()
        }
        return l
      }
    },
    3415: (e) => {
      var t = 1e3,
        n = 60 * t,
        r = 60 * n,
        i = 24 * r,
        o = 7 * i,
        s = 365.25 * i
      function a(e, t, n, r) {
        var i = t >= 1.5 * n
        return Math.round(e / n) + ' ' + r + (i ? 's' : '')
      }
      e.exports = function (e, u) {
        u = u || {}
        var c = typeof e
        if ('string' === c && e.length > 0)
          return (function (e) {
            if ((e = String(e)).length > 100) return
            var a =
              /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                e,
              )
            if (!a) return
            var u = parseFloat(a[1])
            switch ((a[2] || 'ms').toLowerCase()) {
              case 'years':
              case 'year':
              case 'yrs':
              case 'yr':
              case 'y':
                return u * s
              case 'weeks':
              case 'week':
              case 'w':
                return u * o
              case 'days':
              case 'day':
              case 'd':
                return u * i
              case 'hours':
              case 'hour':
              case 'hrs':
              case 'hr':
              case 'h':
                return u * r
              case 'minutes':
              case 'minute':
              case 'mins':
              case 'min':
              case 'm':
                return u * n
              case 'seconds':
              case 'second':
              case 'secs':
              case 'sec':
              case 's':
                return u * t
              case 'milliseconds':
              case 'millisecond':
              case 'msecs':
              case 'msec':
              case 'ms':
                return u
              default:
                return
            }
          })(e)
        if ('number' === c && isFinite(e))
          return u.long
            ? (function (e) {
                var o = Math.abs(e)
                if (o >= i) return a(e, o, i, 'day')
                if (o >= r) return a(e, o, r, 'hour')
                if (o >= n) return a(e, o, n, 'minute')
                if (o >= t) return a(e, o, t, 'second')
                return e + ' ms'
              })(e)
            : (function (e) {
                var o = Math.abs(e)
                if (o >= i) return Math.round(e / i) + 'd'
                if (o >= r) return Math.round(e / r) + 'h'
                if (o >= n) return Math.round(e / n) + 'm'
                if (o >= t) return Math.round(e / t) + 's'
                return e + 'ms'
              })(e)
        throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(e))
      }
    },
    6522: (e, t, n) => {
      ;(t.formatArgs = function (t) {
        if (
          ((t[0] =
            (this.useColors ? '%c' : '') +
            this.namespace +
            (this.useColors ? ' %c' : ' ') +
            t[0] +
            (this.useColors ? '%c ' : ' ') +
            '+' +
            e.exports.humanize(this.diff)),
          !this.useColors)
        )
          return
        const n = 'color: ' + this.color
        t.splice(1, 0, n, 'color: inherit')
        let r = 0,
          i = 0
        t[0].replace(/%[a-zA-Z%]/g, (e) => {
          '%%' !== e && (r++, '%c' === e && (i = r))
        }),
          t.splice(i, 0, n)
      }),
        (t.save = function (e) {
          try {
            e ? t.storage.setItem('debug', e) : t.storage.removeItem('debug')
          } catch (n) {}
        }),
        (t.load = function () {
          let e
          try {
            e = t.storage.getItem('debug')
          } catch (n) {}
          !e &&
            'undefined' !== typeof process &&
            'env' in process &&
            (e = {
              NODE_ENV: 'production',
              PUBLIC_URL: '',
              WDS_SOCKET_HOST: void 0,
              WDS_SOCKET_PATH: void 0,
              WDS_SOCKET_PORT: void 0,
              FAST_REFRESH: !0,
              REACT_APP_API: 'http://localhost:2011',
              REACT_APP_SERVER_API: 'https://authform-3ba6678a7fd8.herokuapp.com',
              REACT_APP_SOCKET_CONNECTION: 'localhost:5000',
            }.DEBUG)
          return e
        }),
        (t.useColors = function () {
          if (
            'undefined' !== typeof window &&
            window.process &&
            ('renderer' === window.process.type || window.process.__nwjs)
          )
            return !0
          if (
            'undefined' !== typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1
          return (
            ('undefined' !== typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ('undefined' !== typeof window &&
              window.console &&
              (window.console.firebug || (window.console.exception && window.console.table))) ||
            ('undefined' !== typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ('undefined' !== typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          )
        }),
        (t.storage = (function () {
          try {
            return localStorage
          } catch (e) {}
        })()),
        (t.destroy = (() => {
          let e = !1
          return () => {
            e ||
              ((e = !0),
              console.warn(
                'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
              ))
          }
        })()),
        (t.colors = [
          '#0000CC',
          '#0000FF',
          '#0033CC',
          '#0033FF',
          '#0066CC',
          '#0066FF',
          '#0099CC',
          '#0099FF',
          '#00CC00',
          '#00CC33',
          '#00CC66',
          '#00CC99',
          '#00CCCC',
          '#00CCFF',
          '#3300CC',
          '#3300FF',
          '#3333CC',
          '#3333FF',
          '#3366CC',
          '#3366FF',
          '#3399CC',
          '#3399FF',
          '#33CC00',
          '#33CC33',
          '#33CC66',
          '#33CC99',
          '#33CCCC',
          '#33CCFF',
          '#6600CC',
          '#6600FF',
          '#6633CC',
          '#6633FF',
          '#66CC00',
          '#66CC33',
          '#9900CC',
          '#9900FF',
          '#9933CC',
          '#9933FF',
          '#99CC00',
          '#99CC33',
          '#CC0000',
          '#CC0033',
          '#CC0066',
          '#CC0099',
          '#CC00CC',
          '#CC00FF',
          '#CC3300',
          '#CC3333',
          '#CC3366',
          '#CC3399',
          '#CC33CC',
          '#CC33FF',
          '#CC6600',
          '#CC6633',
          '#CC9900',
          '#CC9933',
          '#CCCC00',
          '#CCCC33',
          '#FF0000',
          '#FF0033',
          '#FF0066',
          '#FF0099',
          '#FF00CC',
          '#FF00FF',
          '#FF3300',
          '#FF3333',
          '#FF3366',
          '#FF3399',
          '#FF33CC',
          '#FF33FF',
          '#FF6600',
          '#FF6633',
          '#FF9900',
          '#FF9933',
          '#FFCC00',
          '#FFCC33',
        ]),
        (t.log = console.debug || console.log || (() => {})),
        (e.exports = n(5237)(t))
      const { formatters: r } = e.exports
      r.j = function (e) {
        try {
          return JSON.stringify(e)
        } catch (t) {
          return '[UnexpectedJSONParseError]: ' + t.message
        }
      }
    },
    5237: (e, t, n) => {
      e.exports = function (e) {
        function t(e) {
          let n,
            i,
            o,
            s = null
          function a() {
            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i]
            if (!a.enabled) return
            const o = a,
              s = Number(new Date()),
              u = s - (n || s)
            ;(o.diff = u),
              (o.prev = n),
              (o.curr = s),
              (n = s),
              (r[0] = t.coerce(r[0])),
              'string' !== typeof r[0] && r.unshift('%O')
            let c = 0
            ;(r[0] = r[0].replace(/%([a-zA-Z%])/g, (e, n) => {
              if ('%%' === e) return '%'
              c++
              const i = t.formatters[n]
              if ('function' === typeof i) {
                const t = r[c]
                ;(e = i.call(o, t)), r.splice(c, 1), c--
              }
              return e
            })),
              t.formatArgs.call(o, r)
            ;(o.log || t.log).apply(o, r)
          }
          return (
            (a.namespace = e),
            (a.useColors = t.useColors()),
            (a.color = t.selectColor(e)),
            (a.extend = r),
            (a.destroy = t.destroy),
            Object.defineProperty(a, 'enabled', {
              enumerable: !0,
              configurable: !1,
              get: () => (null !== s ? s : (i !== t.namespaces && ((i = t.namespaces), (o = t.enabled(e))), o)),
              set: (e) => {
                s = e
              },
            }),
            'function' === typeof t.init && t.init(a),
            a
          )
        }
        function r(e, n) {
          const r = t(this.namespace + ('undefined' === typeof n ? ':' : n) + e)
          return (r.log = this.log), r
        }
        function i(e) {
          return e
            .toString()
            .substring(2, e.toString().length - 2)
            .replace(/\.\*\?$/, '*')
        }
        return (
          (t.debug = t),
          (t.default = t),
          (t.coerce = function (e) {
            if (e instanceof Error) return e.stack || e.message
            return e
          }),
          (t.disable = function () {
            const e = [...t.names.map(i), ...t.skips.map(i).map((e) => '-' + e)].join(',')
            return t.enable(''), e
          }),
          (t.enable = function (e) {
            let n
            t.save(e), (t.namespaces = e), (t.names = []), (t.skips = [])
            const r = ('string' === typeof e ? e : '').split(/[\s,]+/),
              i = r.length
            for (n = 0; n < i; n++)
              r[n] &&
                ('-' === (e = r[n].replace(/\*/g, '.*?'))[0]
                  ? t.skips.push(new RegExp('^' + e.slice(1) + '$'))
                  : t.names.push(new RegExp('^' + e + '$')))
          }),
          (t.enabled = function (e) {
            if ('*' === e[e.length - 1]) return !0
            let n, r
            for (n = 0, r = t.skips.length; n < r; n++) if (t.skips[n].test(e)) return !1
            for (n = 0, r = t.names.length; n < r; n++) if (t.names[n].test(e)) return !0
            return !1
          }),
          (t.humanize = n(3415)),
          (t.destroy = function () {
            console.warn(
              'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.',
            )
          }),
          Object.keys(e).forEach((n) => {
            t[n] = e[n]
          }),
          (t.names = []),
          (t.skips = []),
          (t.formatters = {}),
          (t.selectColor = function (e) {
            let n = 0
            for (let t = 0; t < e.length; t++) (n = (n << 5) - n + e.charCodeAt(t)), (n |= 0)
            return t.colors[Math.abs(n) % t.colors.length]
          }),
          t.enable(t.load()),
          t
        )
      }
    },
    4823: (e) => {
      'use strict'
      function t(e, t) {
        for (const n in t) Object.defineProperty(e, n, { value: t[n], enumerable: !0, configurable: !0 })
        return e
      }
      e.exports = function (e, n, r) {
        if (!e || 'string' === typeof e) throw new TypeError('Please pass an Error to err-code')
        r || (r = {}), 'object' === typeof n && ((r = n), (n = '')), n && (r.code = n)
        try {
          return t(e, r)
        } catch (i) {
          ;(r.message = e.message), (r.stack = e.stack)
          const n = function () {}
          n.prototype = Object.create(Object.getPrototypeOf(e))
          return t(new n(), r)
        }
      }
    },
    7284: (e) => {
      'use strict'
      var t,
        n = 'object' === typeof Reflect ? Reflect : null,
        r =
          n && 'function' === typeof n.apply
            ? n.apply
            : function (e, t, n) {
                return Function.prototype.apply.call(e, t, n)
              }
      t =
        n && 'function' === typeof n.ownKeys
          ? n.ownKeys
          : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
              }
            : function (e) {
                return Object.getOwnPropertyNames(e)
              }
      var i =
        Number.isNaN ||
        function (e) {
          return e !== e
        }
      function o() {
        o.init.call(this)
      }
      ;(e.exports = o),
        (e.exports.once = function (e, t) {
          return new Promise(function (n, r) {
            function i(n) {
              e.removeListener(t, o), r(n)
            }
            function o() {
              'function' === typeof e.removeListener && e.removeListener('error', i), n([].slice.call(arguments))
            }
            g(e, t, o, { once: !0 }),
              'error' !== t &&
                (function (e, t, n) {
                  'function' === typeof e.on && g(e, 'error', t, n)
                })(e, i, { once: !0 })
          })
        }),
        (o.EventEmitter = o),
        (o.prototype._events = void 0),
        (o.prototype._eventsCount = 0),
        (o.prototype._maxListeners = void 0)
      var s = 10
      function a(e) {
        if ('function' !== typeof e)
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
      }
      function u(e) {
        return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners
      }
      function c(e, t, n, r) {
        var i, o, s, c
        if (
          (a(n),
          void 0 === (o = e._events)
            ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== o.newListener && (e.emit('newListener', t, n.listener ? n.listener : n), (o = e._events)),
              (s = o[t])),
          void 0 === s)
        )
          (s = o[t] = n), ++e._eventsCount
        else if (
          ('function' === typeof s ? (s = o[t] = r ? [n, s] : [s, n]) : r ? s.unshift(n) : s.push(n),
          (i = u(e)) > 0 && s.length > i && !s.warned)
        ) {
          s.warned = !0
          var l = new Error(
            'Possible EventEmitter memory leak detected. ' +
              s.length +
              ' ' +
              String(t) +
              ' listeners added. Use emitter.setMaxListeners() to increase limit',
          )
          ;(l.name = 'MaxListenersExceededWarning'),
            (l.emitter = e),
            (l.type = t),
            (l.count = s.length),
            (c = l),
            console && console.warn && console.warn(c)
        }
        return e
      }
      function l() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
          )
      }
      function h(e, t, n) {
        var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
          i = l.bind(r)
        return (i.listener = n), (r.wrapFn = i), i
      }
      function f(e, t, n) {
        var r = e._events
        if (void 0 === r) return []
        var i = r[t]
        return void 0 === i
          ? []
          : 'function' === typeof i
            ? n
              ? [i.listener || i]
              : [i]
            : n
              ? (function (e) {
                  for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n]
                  return t
                })(i)
              : p(i, i.length)
      }
      function d(e) {
        var t = this._events
        if (void 0 !== t) {
          var n = t[e]
          if ('function' === typeof n) return 1
          if (void 0 !== n) return n.length
        }
        return 0
      }
      function p(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r]
        return n
      }
      function g(e, t, n, r) {
        if ('function' === typeof e.on) r.once ? e.once(t, n) : e.on(t, n)
        else {
          if ('function' !== typeof e.addEventListener)
            throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
          e.addEventListener(t, function i(o) {
            r.once && e.removeEventListener(t, i), n(o)
          })
        }
      }
      Object.defineProperty(o, 'defaultMaxListeners', {
        enumerable: !0,
        get: function () {
          return s
        },
        set: function (e) {
          if ('number' !== typeof e || e < 0 || i(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                '.',
            )
          s = e
        },
      }),
        (o.init = function () {
          ;(void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0)
        }),
        (o.prototype.setMaxListeners = function (e) {
          if ('number' !== typeof e || e < 0 || i(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' + e + '.',
            )
          return (this._maxListeners = e), this
        }),
        (o.prototype.getMaxListeners = function () {
          return u(this)
        }),
        (o.prototype.emit = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n])
          var i = 'error' === e,
            o = this._events
          if (void 0 !== o) i = i && void 0 === o.error
          else if (!i) return !1
          if (i) {
            var s
            if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s
            var a = new Error('Unhandled error.' + (s ? ' (' + s.message + ')' : ''))
            throw ((a.context = s), a)
          }
          var u = o[e]
          if (void 0 === u) return !1
          if ('function' === typeof u) r(u, this, t)
          else {
            var c = u.length,
              l = p(u, c)
            for (n = 0; n < c; ++n) r(l[n], this, t)
          }
          return !0
        }),
        (o.prototype.addListener = function (e, t) {
          return c(this, e, t, !1)
        }),
        (o.prototype.on = o.prototype.addListener),
        (o.prototype.prependListener = function (e, t) {
          return c(this, e, t, !0)
        }),
        (o.prototype.once = function (e, t) {
          return a(t), this.on(e, h(this, e, t)), this
        }),
        (o.prototype.prependOnceListener = function (e, t) {
          return a(t), this.prependListener(e, h(this, e, t)), this
        }),
        (o.prototype.removeListener = function (e, t) {
          var n, r, i, o, s
          if ((a(t), void 0 === (r = this._events))) return this
          if (void 0 === (n = r[e])) return this
          if (n === t || n.listener === t)
            0 === --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete r[e], r.removeListener && this.emit('removeListener', e, n.listener || t))
          else if ('function' !== typeof n) {
            for (i = -1, o = n.length - 1; o >= 0; o--)
              if (n[o] === t || n[o].listener === t) {
                ;(s = n[o].listener), (i = o)
                break
              }
            if (i < 0) return this
            0 === i
              ? n.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1]
                  e.pop()
                })(n, i),
              1 === n.length && (r[e] = n[0]),
              void 0 !== r.removeListener && this.emit('removeListener', e, s || t)
          }
          return this
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.removeAllListeners = function (e) {
          var t, n, r
          if (void 0 === (n = this._events)) return this
          if (void 0 === n.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                : void 0 !== n[e] && (0 === --this._eventsCount ? (this._events = Object.create(null)) : delete n[e]),
              this
            )
          if (0 === arguments.length) {
            var i,
              o = Object.keys(n)
            for (r = 0; r < o.length; ++r) 'removeListener' !== (i = o[r]) && this.removeAllListeners(i)
            return (
              this.removeAllListeners('removeListener'),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            )
          }
          if ('function' === typeof (t = n[e])) this.removeListener(e, t)
          else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r])
          return this
        }),
        (o.prototype.listeners = function (e) {
          return f(this, e, !0)
        }),
        (o.prototype.rawListeners = function (e) {
          return f(this, e, !1)
        }),
        (o.listenerCount = function (e, t) {
          return 'function' === typeof e.listenerCount ? e.listenerCount(t) : d.call(e, t)
        }),
        (o.prototype.listenerCount = d),
        (o.prototype.eventNames = function () {
          return this._eventsCount > 0 ? t(this._events) : []
        })
    },
    7919: (e) => {
      e.exports = function () {
        if ('undefined' === typeof globalThis) return null
        var e = {
          RTCPeerConnection:
            globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,
          RTCSessionDescription:
            globalThis.RTCSessionDescription ||
            globalThis.mozRTCSessionDescription ||
            globalThis.webkitRTCSessionDescription,
          RTCIceCandidate:
            globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate,
        }
        return e.RTCPeerConnection ? e : null
      }
    },
    6900: (e, t) => {
      ;(t.read = function (e, t, n, r, i) {
        var o,
          s,
          a = 8 * i - r - 1,
          u = (1 << a) - 1,
          c = u >> 1,
          l = -7,
          h = n ? i - 1 : 0,
          f = n ? -1 : 1,
          d = e[t + h]
        for (h += f, o = d & ((1 << -l) - 1), d >>= -l, l += a; l > 0; o = 256 * o + e[t + h], h += f, l -= 8);
        for (s = o & ((1 << -l) - 1), o >>= -l, l += r; l > 0; s = 256 * s + e[t + h], h += f, l -= 8);
        if (0 === o) o = 1 - c
        else {
          if (o === u) return s ? NaN : (1 / 0) * (d ? -1 : 1)
          ;(s += Math.pow(2, r)), (o -= c)
        }
        return (d ? -1 : 1) * s * Math.pow(2, o - r)
      }),
        (t.write = function (e, t, n, r, i, o) {
          var s,
            a,
            u,
            c = 8 * o - i - 1,
            l = (1 << c) - 1,
            h = l >> 1,
            f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = r ? 0 : o - 1,
            p = r ? 1 : -1,
            g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
          for (
            t = Math.abs(t),
              isNaN(t) || t === 1 / 0
                ? ((a = isNaN(t) ? 1 : 0), (s = l))
                : ((s = Math.floor(Math.log(t) / Math.LN2)),
                  t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                  (t += s + h >= 1 ? f / u : f * Math.pow(2, 1 - h)) * u >= 2 && (s++, (u /= 2)),
                  s + h >= l
                    ? ((a = 0), (s = l))
                    : s + h >= 1
                      ? ((a = (t * u - 1) * Math.pow(2, i)), (s += h))
                      : ((a = t * Math.pow(2, h - 1) * Math.pow(2, i)), (s = 0)));
            i >= 8;
            e[n + d] = 255 & a, d += p, a /= 256, i -= 8
          );
          for (s = (s << i) | a, c += i; c > 0; e[n + d] = 255 & s, d += p, s /= 256, c -= 8);
          e[n + d - p] |= 128 * g
        })
    },
    6329: (e) => {
      'function' === typeof Object.create
        ? (e.exports = function (e, t) {
            t &&
              ((e.super_ = t),
              (e.prototype = Object.create(t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
              })))
          })
        : (e.exports = function (e, t) {
            if (t) {
              e.super_ = t
              var n = function () {}
              ;(n.prototype = t.prototype), (e.prototype = new n()), (e.prototype.constructor = e)
            }
          })
    },
    4275: (e, t, n) => {
      let r
      e.exports =
        'function' === typeof queueMicrotask
          ? queueMicrotask.bind('undefined' !== typeof window ? window : n.g)
          : (e) =>
              (r || (r = Promise.resolve())).then(e).catch((e) =>
                setTimeout(() => {
                  throw e
                }, 0),
              )
    },
    5838: (e, t, n) => {
      'use strict'
      var r = 65536,
        i = 4294967295
      var o = n(9966).Buffer,
        s = n.g.crypto || n.g.msCrypto
      s && s.getRandomValues
        ? (e.exports = function (e, t) {
            if (e > i) throw new RangeError('requested too many random bytes')
            var n = o.allocUnsafe(e)
            if (e > 0)
              if (e > r) for (var a = 0; a < e; a += r) s.getRandomValues(n.slice(a, a + r))
              else s.getRandomValues(n)
            if ('function' === typeof t)
              return process.nextTick(function () {
                t(null, n)
              })
            return n
          })
        : (e.exports = function () {
            throw new Error(
              'Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11',
            )
          })
    },
    6545: (e) => {
      'use strict'
      var t = {}
      function n(e, n, r) {
        r || (r = Error)
        var i = (function (e) {
          var t, r
          function i(t, r, i) {
            return (
              e.call(
                this,
                (function (e, t, r) {
                  return 'string' === typeof n ? n : n(e, t, r)
                })(t, r, i),
              ) || this
            )
          }
          return (
            (r = e),
            ((t = i).prototype = Object.create(r.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = r),
            i
          )
        })(r)
        ;(i.prototype.name = r.name), (i.prototype.code = e), (t[e] = i)
      }
      function r(e, t) {
        if (Array.isArray(e)) {
          var n = e.length
          return (
            (e = e.map(function (e) {
              return String(e)
            })),
            n > 2
              ? 'one of '.concat(t, ' ').concat(e.slice(0, n - 1).join(', '), ', or ') + e[n - 1]
              : 2 === n
                ? 'one of '.concat(t, ' ').concat(e[0], ' or ').concat(e[1])
                : 'of '.concat(t, ' ').concat(e[0])
          )
        }
        return 'of '.concat(t, ' ').concat(String(e))
      }
      n(
        'ERR_INVALID_OPT_VALUE',
        function (e, t) {
          return 'The value "' + t + '" is invalid for option "' + e + '"'
        },
        TypeError,
      ),
        n(
          'ERR_INVALID_ARG_TYPE',
          function (e, t, n) {
            var i, o, s, a
            if (
              ('string' === typeof t && ((o = 'not '), t.substr(!s || s < 0 ? 0 : +s, o.length) === o)
                ? ((i = 'must not be'), (t = t.replace(/^not /, '')))
                : (i = 'must be'),
              (function (e, t, n) {
                return (void 0 === n || n > e.length) && (n = e.length), e.substring(n - t.length, n) === t
              })(e, ' argument'))
            )
              a = 'The '.concat(e, ' ').concat(i, ' ').concat(r(t, 'type'))
            else {
              var u = (function (e, t, n) {
                return 'number' !== typeof n && (n = 0), !(n + t.length > e.length) && -1 !== e.indexOf(t, n)
              })(e, '.')
                ? 'property'
                : 'argument'
              a = 'The "'.concat(e, '" ').concat(u, ' ').concat(i, ' ').concat(r(t, 'type'))
            }
            return (a += '. Received type '.concat(typeof n))
          },
          TypeError,
        ),
        n('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF'),
        n('ERR_METHOD_NOT_IMPLEMENTED', function (e) {
          return 'The ' + e + ' method is not implemented'
        }),
        n('ERR_STREAM_PREMATURE_CLOSE', 'Premature close'),
        n('ERR_STREAM_DESTROYED', function (e) {
          return 'Cannot call ' + e + ' after a stream was destroyed'
        }),
        n('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times'),
        n('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable'),
        n('ERR_STREAM_WRITE_AFTER_END', 'write after end'),
        n('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError),
        n(
          'ERR_UNKNOWN_ENCODING',
          function (e) {
            return 'Unknown encoding: ' + e
          },
          TypeError,
        ),
        n('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event'),
        (e.exports.F = t)
    },
    6779: (e, t, n) => {
      'use strict'
      var r =
        Object.keys ||
        function (e) {
          var t = []
          for (var n in e) t.push(n)
          return t
        }
      e.exports = c
      var i = n(6153),
        o = n(9001)
      n(6329)(c, i)
      for (var s = r(o.prototype), a = 0; a < s.length; a++) {
        var u = s[a]
        c.prototype[u] || (c.prototype[u] = o.prototype[u])
      }
      function c(e) {
        if (!(this instanceof c)) return new c(e)
        i.call(this, e),
          o.call(this, e),
          (this.allowHalfOpen = !0),
          e &&
            (!1 === e.readable && (this.readable = !1),
            !1 === e.writable && (this.writable = !1),
            !1 === e.allowHalfOpen && ((this.allowHalfOpen = !1), this.once('end', l)))
      }
      function l() {
        this._writableState.ended || process.nextTick(h, this)
      }
      function h(e) {
        e.end()
      }
      Object.defineProperty(c.prototype, 'writableHighWaterMark', {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark
        },
      }),
        Object.defineProperty(c.prototype, 'writableBuffer', {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer()
          },
        }),
        Object.defineProperty(c.prototype, 'writableLength', {
          enumerable: !1,
          get: function () {
            return this._writableState.length
          },
        }),
        Object.defineProperty(c.prototype, 'destroyed', {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            )
          },
          set: function (e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e), (this._writableState.destroyed = e))
          },
        })
    },
    5559: (e, t, n) => {
      'use strict'
      e.exports = i
      var r = n(2013)
      function i(e) {
        if (!(this instanceof i)) return new i(e)
        r.call(this, e)
      }
      n(6329)(i, r),
        (i.prototype._transform = function (e, t, n) {
          n(null, e)
        })
    },
    6153: (e, t, n) => {
      'use strict'
      var r
      ;(e.exports = R), (R.ReadableState = C)
      n(7284).EventEmitter
      var i = function (e, t) {
          return e.listeners(t).length
        },
        o = n(2902),
        s = n(6382).Buffer,
        a =
          ('undefined' !== typeof n.g
            ? n.g
            : 'undefined' !== typeof window
              ? window
              : 'undefined' !== typeof self
                ? self
                : {}
          ).Uint8Array || function () {}
      var u,
        c = n(7457)
      u = c && c.debuglog ? c.debuglog('stream') : function () {}
      var l,
        h,
        f,
        d = n(7044),
        p = n(6725),
        g = n(8550).getHighWaterMark,
        y = n(6545).F,
        b = y.ERR_INVALID_ARG_TYPE,
        m = y.ERR_STREAM_PUSH_AFTER_EOF,
        _ = y.ERR_METHOD_NOT_IMPLEMENTED,
        w = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT
      n(6329)(R, o)
      var v = p.errorOrDestroy,
        E = ['error', 'close', 'destroy', 'pause', 'resume']
      function C(e, t, i) {
        ;(r = r || n(6779)),
          (e = e || {}),
          'boolean' !== typeof i && (i = t instanceof r),
          (this.objectMode = !!e.objectMode),
          i && (this.objectMode = this.objectMode || !!e.readableObjectMode),
          (this.highWaterMark = g(this, e, 'readableHighWaterMark', i)),
          (this.buffer = new d()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || 'utf8'),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding && (l || (l = n(8694).I), (this.decoder = new l(e.encoding)), (this.encoding = e.encoding))
      }
      function R(e) {
        if (((r = r || n(6779)), !(this instanceof R))) return new R(e)
        var t = this instanceof r
        ;(this._readableState = new C(e, this, t)),
          (this.readable = !0),
          e &&
            ('function' === typeof e.read && (this._read = e.read),
            'function' === typeof e.destroy && (this._destroy = e.destroy)),
          o.call(this)
      }
      function S(e, t, n, r, i) {
        u('readableAddChunk', t)
        var o,
          c = e._readableState
        if (null === t)
          (c.reading = !1),
            (function (e, t) {
              if ((u('onEofChunk'), t.ended)) return
              if (t.decoder) {
                var n = t.decoder.end()
                n && n.length && (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length))
              }
              ;(t.ended = !0),
                t.sync ? O(e) : ((t.needReadable = !1), t.emittedReadable || ((t.emittedReadable = !0), I(e)))
            })(e, c)
        else if (
          (i ||
            (o = (function (e, t) {
              var n
              ;(r = t),
                s.isBuffer(r) ||
                  r instanceof a ||
                  'string' === typeof t ||
                  void 0 === t ||
                  e.objectMode ||
                  (n = new b('chunk', ['string', 'Buffer', 'Uint8Array'], t))
              var r
              return n
            })(c, t)),
          o)
        )
          v(e, o)
        else if (c.objectMode || (t && t.length > 0))
          if (
            ('string' === typeof t ||
              c.objectMode ||
              Object.getPrototypeOf(t) === s.prototype ||
              (t = (function (e) {
                return s.from(e)
              })(t)),
            r)
          )
            c.endEmitted ? v(e, new w()) : T(e, c, t, !0)
          else if (c.ended) v(e, new m())
          else {
            if (c.destroyed) return !1
            ;(c.reading = !1),
              c.decoder && !n
                ? ((t = c.decoder.write(t)), c.objectMode || 0 !== t.length ? T(e, c, t, !1) : N(e, c))
                : T(e, c, t, !1)
          }
        else r || ((c.reading = !1), N(e, c))
        return !c.ended && (c.length < c.highWaterMark || 0 === c.length)
      }
      function T(e, t, n, r) {
        t.flowing && 0 === t.length && !t.sync
          ? ((t.awaitDrain = 0), e.emit('data', n))
          : ((t.length += t.objectMode ? 1 : n.length),
            r ? t.buffer.unshift(n) : t.buffer.push(n),
            t.needReadable && O(e)),
          N(e, t)
      }
      Object.defineProperty(R.prototype, 'destroyed', {
        enumerable: !1,
        get: function () {
          return void 0 !== this._readableState && this._readableState.destroyed
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e)
        },
      }),
        (R.prototype.destroy = p.destroy),
        (R.prototype._undestroy = p.undestroy),
        (R.prototype._destroy = function (e, t) {
          t(e)
        }),
        (R.prototype.push = function (e, t) {
          var n,
            r = this._readableState
          return (
            r.objectMode
              ? (n = !0)
              : 'string' === typeof e &&
                ((t = t || r.defaultEncoding) !== r.encoding && ((e = s.from(e, t)), (t = '')), (n = !0)),
            S(this, e, t, !1, n)
          )
        }),
        (R.prototype.unshift = function (e) {
          return S(this, e, null, !0, !1)
        }),
        (R.prototype.isPaused = function () {
          return !1 === this._readableState.flowing
        }),
        (R.prototype.setEncoding = function (e) {
          l || (l = n(8694).I)
          var t = new l(e)
          ;(this._readableState.decoder = t), (this._readableState.encoding = this._readableState.decoder.encoding)
          for (var r = this._readableState.buffer.head, i = ''; null !== r; ) (i += t.write(r.data)), (r = r.next)
          return (
            this._readableState.buffer.clear(),
            '' !== i && this._readableState.buffer.push(i),
            (this._readableState.length = i.length),
            this
          )
        })
      var A = 1073741824
      function k(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
            ? 1
            : e !== e
              ? t.flowing && t.length
                ? t.buffer.head.data.length
                : t.length
              : (e > t.highWaterMark &&
                  (t.highWaterMark = (function (e) {
                    return (
                      e >= A
                        ? (e = A)
                        : (e--, (e |= e >>> 1), (e |= e >>> 2), (e |= e >>> 4), (e |= e >>> 8), (e |= e >>> 16), e++),
                      e
                    )
                  })(e)),
                e <= t.length ? e : t.ended ? t.length : ((t.needReadable = !0), 0))
      }
      function O(e) {
        var t = e._readableState
        u('emitReadable', t.needReadable, t.emittedReadable),
          (t.needReadable = !1),
          t.emittedReadable || (u('emitReadable', t.flowing), (t.emittedReadable = !0), process.nextTick(I, e))
      }
      function I(e) {
        var t = e._readableState
        u('emitReadable_', t.destroyed, t.length, t.ended),
          t.destroyed || (!t.length && !t.ended) || (e.emit('readable'), (t.emittedReadable = !1)),
          (t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark),
          P(e)
      }
      function N(e, t) {
        t.readingMore || ((t.readingMore = !0), process.nextTick(L, e, t))
      }
      function L(e, t) {
        for (; !t.reading && !t.ended && (t.length < t.highWaterMark || (t.flowing && 0 === t.length)); ) {
          var n = t.length
          if ((u('maybeReadMore read 0'), e.read(0), n === t.length)) break
        }
        t.readingMore = !1
      }
      function x(e) {
        var t = e._readableState
        ;(t.readableListening = e.listenerCount('readable') > 0),
          t.resumeScheduled && !t.paused ? (t.flowing = !0) : e.listenerCount('data') > 0 && e.resume()
      }
      function B(e) {
        u('readable nexttick read 0'), e.read(0)
      }
      function M(e, t) {
        u('resume', t.reading),
          t.reading || e.read(0),
          (t.resumeScheduled = !1),
          e.emit('resume'),
          P(e),
          t.flowing && !t.reading && e.read(0)
      }
      function P(e) {
        var t = e._readableState
        for (u('flow', t.flowing); t.flowing && null !== e.read(); );
      }
      function D(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (n = t.buffer.shift())
              : !e || e >= t.length
                ? ((n = t.decoder
                    ? t.buffer.join('')
                    : 1 === t.buffer.length
                      ? t.buffer.first()
                      : t.buffer.concat(t.length)),
                  t.buffer.clear())
                : (n = t.buffer.consume(e, t.decoder)),
            n)
        var n
      }
      function F(e) {
        var t = e._readableState
        u('endReadable', t.endEmitted), t.endEmitted || ((t.ended = !0), process.nextTick(U, t, e))
      }
      function U(e, t) {
        if (
          (u('endReadableNT', e.endEmitted, e.length),
          !e.endEmitted && 0 === e.length && ((e.endEmitted = !0), (t.readable = !1), t.emit('end'), e.autoDestroy))
        ) {
          var n = t._writableState
          ;(!n || (n.autoDestroy && n.finished)) && t.destroy()
        }
      }
      function j(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n
        return -1
      }
      ;(R.prototype.read = function (e) {
        u('read', e), (e = parseInt(e, 10))
        var t = this._readableState,
          n = e
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e &&
            t.needReadable &&
            ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended))
        )
          return u('read: emitReadable', t.length, t.ended), 0 === t.length && t.ended ? F(this) : O(this), null
        if (0 === (e = k(e, t)) && t.ended) return 0 === t.length && F(this), null
        var r,
          i = t.needReadable
        return (
          u('need readable', i),
          (0 === t.length || t.length - e < t.highWaterMark) && u('length less than watermark', (i = !0)),
          t.ended || t.reading
            ? u('reading or ended', (i = !1))
            : i &&
              (u('do read'),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = k(n, t))),
          null === (r = e > 0 ? D(e, t) : null)
            ? ((t.needReadable = t.length <= t.highWaterMark), (e = 0))
            : ((t.length -= e), (t.awaitDrain = 0)),
          0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && F(this)),
          null !== r && this.emit('data', r),
          r
        )
      }),
        (R.prototype._read = function (e) {
          v(this, new _('_read()'))
        }),
        (R.prototype.pipe = function (e, t) {
          var n = this,
            r = this._readableState
          switch (r.pipesCount) {
            case 0:
              r.pipes = e
              break
            case 1:
              r.pipes = [r.pipes, e]
              break
            default:
              r.pipes.push(e)
          }
          ;(r.pipesCount += 1), u('pipe count=%d opts=%j', r.pipesCount, t)
          var o = (!t || !1 !== t.end) && e !== process.stdout && e !== process.stderr ? a : g
          function s(t, i) {
            u('onunpipe'),
              t === n &&
                i &&
                !1 === i.hasUnpiped &&
                ((i.hasUnpiped = !0),
                u('cleanup'),
                e.removeListener('close', d),
                e.removeListener('finish', p),
                e.removeListener('drain', c),
                e.removeListener('error', f),
                e.removeListener('unpipe', s),
                n.removeListener('end', a),
                n.removeListener('end', g),
                n.removeListener('data', h),
                (l = !0),
                !r.awaitDrain || (e._writableState && !e._writableState.needDrain) || c())
          }
          function a() {
            u('onend'), e.end()
          }
          r.endEmitted ? process.nextTick(o) : n.once('end', o), e.on('unpipe', s)
          var c = (function (e) {
            return function () {
              var t = e._readableState
              u('pipeOnDrain', t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && i(e, 'data') && ((t.flowing = !0), P(e))
            }
          })(n)
          e.on('drain', c)
          var l = !1
          function h(t) {
            u('ondata')
            var i = e.write(t)
            u('dest.write', i),
              !1 === i &&
                (((1 === r.pipesCount && r.pipes === e) || (r.pipesCount > 1 && -1 !== j(r.pipes, e))) &&
                  !l &&
                  (u('false write response, pause', r.awaitDrain), r.awaitDrain++),
                n.pause())
          }
          function f(t) {
            u('onerror', t), g(), e.removeListener('error', f), 0 === i(e, 'error') && v(e, t)
          }
          function d() {
            e.removeListener('finish', p), g()
          }
          function p() {
            u('onfinish'), e.removeListener('close', d), g()
          }
          function g() {
            u('unpipe'), n.unpipe(e)
          }
          return (
            n.on('data', h),
            (function (e, t, n) {
              if ('function' === typeof e.prependListener) return e.prependListener(t, n)
              e._events && e._events[t]
                ? Array.isArray(e._events[t])
                  ? e._events[t].unshift(n)
                  : (e._events[t] = [n, e._events[t]])
                : e.on(t, n)
            })(e, 'error', f),
            e.once('close', d),
            e.once('finish', p),
            e.emit('pipe', n),
            r.flowing || (u('pipe resume'), n.resume()),
            e
          )
        }),
        (R.prototype.unpipe = function (e) {
          var t = this._readableState,
            n = { hasUnpiped: !1 }
          if (0 === t.pipesCount) return this
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit('unpipe', this, n)),
              this
            )
          if (!e) {
            var r = t.pipes,
              i = t.pipesCount
            ;(t.pipes = null), (t.pipesCount = 0), (t.flowing = !1)
            for (var o = 0; o < i; o++) r[o].emit('unpipe', this, { hasUnpiped: !1 })
            return this
          }
          var s = j(t.pipes, e)
          return (
            -1 === s ||
              (t.pipes.splice(s, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit('unpipe', this, n)),
            this
          )
        }),
        (R.prototype.on = function (e, t) {
          var n = o.prototype.on.call(this, e, t),
            r = this._readableState
          return (
            'data' === e
              ? ((r.readableListening = this.listenerCount('readable') > 0), !1 !== r.flowing && this.resume())
              : 'readable' === e &&
                (r.endEmitted ||
                  r.readableListening ||
                  ((r.readableListening = r.needReadable = !0),
                  (r.flowing = !1),
                  (r.emittedReadable = !1),
                  u('on readable', r.length, r.reading),
                  r.length ? O(this) : r.reading || process.nextTick(B, this))),
            n
          )
        }),
        (R.prototype.addListener = R.prototype.on),
        (R.prototype.removeListener = function (e, t) {
          var n = o.prototype.removeListener.call(this, e, t)
          return 'readable' === e && process.nextTick(x, this), n
        }),
        (R.prototype.removeAllListeners = function (e) {
          var t = o.prototype.removeAllListeners.apply(this, arguments)
          return ('readable' !== e && void 0 !== e) || process.nextTick(x, this), t
        }),
        (R.prototype.resume = function () {
          var e = this._readableState
          return (
            e.flowing ||
              (u('resume'),
              (e.flowing = !e.readableListening),
              (function (e, t) {
                t.resumeScheduled || ((t.resumeScheduled = !0), process.nextTick(M, e, t))
              })(this, e)),
            (e.paused = !1),
            this
          )
        }),
        (R.prototype.pause = function () {
          return (
            u('call pause flowing=%j', this._readableState.flowing),
            !1 !== this._readableState.flowing && (u('pause'), (this._readableState.flowing = !1), this.emit('pause')),
            (this._readableState.paused = !0),
            this
          )
        }),
        (R.prototype.wrap = function (e) {
          var t = this,
            n = this._readableState,
            r = !1
          for (var i in (e.on('end', function () {
            if ((u('wrapped end'), n.decoder && !n.ended)) {
              var e = n.decoder.end()
              e && e.length && t.push(e)
            }
            t.push(null)
          }),
          e.on('data', function (i) {
            ;(u('wrapped data'),
            n.decoder && (i = n.decoder.write(i)),
            !n.objectMode || (null !== i && void 0 !== i)) &&
              (n.objectMode || (i && i.length)) &&
              (t.push(i) || ((r = !0), e.pause()))
          }),
          e))
            void 0 === this[i] &&
              'function' === typeof e[i] &&
              (this[i] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments)
                }
              })(i))
          for (var o = 0; o < E.length; o++) e.on(E[o], this.emit.bind(this, E[o]))
          return (
            (this._read = function (t) {
              u('wrapped _read', t), r && ((r = !1), e.resume())
            }),
            this
          )
        }),
        'function' === typeof Symbol &&
          (R.prototype[Symbol.asyncIterator] = function () {
            return void 0 === h && (h = n(7312)), h(this)
          }),
        Object.defineProperty(R.prototype, 'readableHighWaterMark', {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark
          },
        }),
        Object.defineProperty(R.prototype, 'readableBuffer', {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer
          },
        }),
        Object.defineProperty(R.prototype, 'readableFlowing', {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing
          },
          set: function (e) {
            this._readableState && (this._readableState.flowing = e)
          },
        }),
        (R._fromList = D),
        Object.defineProperty(R.prototype, 'readableLength', {
          enumerable: !1,
          get: function () {
            return this._readableState.length
          },
        }),
        'function' === typeof Symbol &&
          (R.from = function (e, t) {
            return void 0 === f && (f = n(7462)), f(R, e, t)
          })
    },
    2013: (e, t, n) => {
      'use strict'
      e.exports = l
      var r = n(6545).F,
        i = r.ERR_METHOD_NOT_IMPLEMENTED,
        o = r.ERR_MULTIPLE_CALLBACK,
        s = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        a = r.ERR_TRANSFORM_WITH_LENGTH_0,
        u = n(6779)
      function c(e, t) {
        var n = this._transformState
        n.transforming = !1
        var r = n.writecb
        if (null === r) return this.emit('error', new o())
        ;(n.writechunk = null), (n.writecb = null), null != t && this.push(t), r(e)
        var i = this._readableState
        ;(i.reading = !1), (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
      }
      function l(e) {
        if (!(this instanceof l)) return new l(e)
        u.call(this, e),
          (this._transformState = {
            afterTransform: c.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          e &&
            ('function' === typeof e.transform && (this._transform = e.transform),
            'function' === typeof e.flush && (this._flush = e.flush)),
          this.on('prefinish', h)
      }
      function h() {
        var e = this
        'function' !== typeof this._flush || this._readableState.destroyed
          ? f(this, null, null)
          : this._flush(function (t, n) {
              f(e, t, n)
            })
      }
      function f(e, t, n) {
        if (t) return e.emit('error', t)
        if ((null != n && e.push(n), e._writableState.length)) throw new a()
        if (e._transformState.transforming) throw new s()
        return e.push(null)
      }
      n(6329)(l, u),
        (l.prototype.push = function (e, t) {
          return (this._transformState.needTransform = !1), u.prototype.push.call(this, e, t)
        }),
        (l.prototype._transform = function (e, t, n) {
          n(new i('_transform()'))
        }),
        (l.prototype._write = function (e, t, n) {
          var r = this._transformState
          if (((r.writecb = n), (r.writechunk = e), (r.writeencoding = t), !r.transforming)) {
            var i = this._readableState
            ;(r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
          }
        }),
        (l.prototype._read = function (e) {
          var t = this._transformState
          null === t.writechunk || t.transforming
            ? (t.needTransform = !0)
            : ((t.transforming = !0), this._transform(t.writechunk, t.writeencoding, t.afterTransform))
        }),
        (l.prototype._destroy = function (e, t) {
          u.prototype._destroy.call(this, e, function (e) {
            t(e)
          })
        })
    },
    9001: (e, t, n) => {
      'use strict'
      function r(e) {
        var t = this
        ;(this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, n) {
              var r = e.entry
              e.entry = null
              for (; r; ) {
                var i = r.callback
                t.pendingcb--, i(n), (r = r.next)
              }
              t.corkedRequestsFree.next = e
            })(t, e)
          })
      }
      var i
      ;(e.exports = R), (R.WritableState = C)
      var o = { deprecate: n(2390) },
        s = n(2902),
        a = n(6382).Buffer,
        u =
          ('undefined' !== typeof n.g
            ? n.g
            : 'undefined' !== typeof window
              ? window
              : 'undefined' !== typeof self
                ? self
                : {}
          ).Uint8Array || function () {}
      var c,
        l = n(6725),
        h = n(8550).getHighWaterMark,
        f = n(6545).F,
        d = f.ERR_INVALID_ARG_TYPE,
        p = f.ERR_METHOD_NOT_IMPLEMENTED,
        g = f.ERR_MULTIPLE_CALLBACK,
        y = f.ERR_STREAM_CANNOT_PIPE,
        b = f.ERR_STREAM_DESTROYED,
        m = f.ERR_STREAM_NULL_VALUES,
        _ = f.ERR_STREAM_WRITE_AFTER_END,
        w = f.ERR_UNKNOWN_ENCODING,
        v = l.errorOrDestroy
      function E() {}
      function C(e, t, o) {
        ;(i = i || n(6779)),
          (e = e || {}),
          'boolean' !== typeof o && (o = t instanceof i),
          (this.objectMode = !!e.objectMode),
          o && (this.objectMode = this.objectMode || !!e.writableObjectMode),
          (this.highWaterMark = h(this, e, 'writableHighWaterMark', o)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1)
        var s = !1 === e.decodeStrings
        ;(this.decodeStrings = !s),
          (this.defaultEncoding = e.defaultEncoding || 'utf8'),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var n = e._writableState,
                r = n.sync,
                i = n.writecb
              if ('function' !== typeof i) throw new g()
              if (
                ((function (e) {
                  ;(e.writing = !1), (e.writecb = null), (e.length -= e.writelen), (e.writelen = 0)
                })(n),
                t)
              )
                !(function (e, t, n, r, i) {
                  --t.pendingcb,
                    n
                      ? (process.nextTick(i, r),
                        process.nextTick(I, e, t),
                        (e._writableState.errorEmitted = !0),
                        v(e, r))
                      : (i(r), (e._writableState.errorEmitted = !0), v(e, r), I(e, t))
                })(e, n, r, t, i)
              else {
                var o = k(n) || e.destroyed
                o || n.corked || n.bufferProcessing || !n.bufferedRequest || A(e, n),
                  r ? process.nextTick(T, e, n, o, i) : T(e, n, o, i)
              }
            })(t, e)
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new r(this))
      }
      function R(e) {
        var t = this instanceof (i = i || n(6779))
        if (!t && !c.call(R, this)) return new R(e)
        ;(this._writableState = new C(e, this, t)),
          (this.writable = !0),
          e &&
            ('function' === typeof e.write && (this._write = e.write),
            'function' === typeof e.writev && (this._writev = e.writev),
            'function' === typeof e.destroy && (this._destroy = e.destroy),
            'function' === typeof e.final && (this._final = e.final)),
          s.call(this)
      }
      function S(e, t, n, r, i, o, s) {
        ;(t.writelen = r),
          (t.writecb = s),
          (t.writing = !0),
          (t.sync = !0),
          t.destroyed ? t.onwrite(new b('write')) : n ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
          (t.sync = !1)
      }
      function T(e, t, n, r) {
        n ||
          (function (e, t) {
            0 === t.length && t.needDrain && ((t.needDrain = !1), e.emit('drain'))
          })(e, t),
          t.pendingcb--,
          r(),
          I(e, t)
      }
      function A(e, t) {
        t.bufferProcessing = !0
        var n = t.bufferedRequest
        if (e._writev && n && n.next) {
          var i = t.bufferedRequestCount,
            o = new Array(i),
            s = t.corkedRequestsFree
          s.entry = n
          for (var a = 0, u = !0; n; ) (o[a] = n), n.isBuf || (u = !1), (n = n.next), (a += 1)
          ;(o.allBuffers = u),
            S(e, t, !0, t.length, o, '', s.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            s.next ? ((t.corkedRequestsFree = s.next), (s.next = null)) : (t.corkedRequestsFree = new r(t)),
            (t.bufferedRequestCount = 0)
        } else {
          for (; n; ) {
            var c = n.chunk,
              l = n.encoding,
              h = n.callback
            if ((S(e, t, !1, t.objectMode ? 1 : c.length, c, l, h), (n = n.next), t.bufferedRequestCount--, t.writing))
              break
          }
          null === n && (t.lastBufferedRequest = null)
        }
        ;(t.bufferedRequest = n), (t.bufferProcessing = !1)
      }
      function k(e) {
        return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
      }
      function O(e, t) {
        e._final(function (n) {
          t.pendingcb--, n && v(e, n), (t.prefinished = !0), e.emit('prefinish'), I(e, t)
        })
      }
      function I(e, t) {
        var n = k(t)
        if (
          n &&
          ((function (e, t) {
            t.prefinished ||
              t.finalCalled ||
              ('function' !== typeof e._final || t.destroyed
                ? ((t.prefinished = !0), e.emit('prefinish'))
                : (t.pendingcb++, (t.finalCalled = !0), process.nextTick(O, e, t)))
          })(e, t),
          0 === t.pendingcb && ((t.finished = !0), e.emit('finish'), t.autoDestroy))
        ) {
          var r = e._readableState
          ;(!r || (r.autoDestroy && r.endEmitted)) && e.destroy()
        }
        return n
      }
      n(6329)(R, s),
        (C.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; ) t.push(e), (e = e.next)
          return t
        }),
        (function () {
          try {
            Object.defineProperty(C.prototype, 'buffer', {
              get: o.deprecate(
                function () {
                  return this.getBuffer()
                },
                '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                'DEP0003',
              ),
            })
          } catch (e) {}
        })(),
        'function' === typeof Symbol &&
        Symbol.hasInstance &&
        'function' === typeof Function.prototype[Symbol.hasInstance]
          ? ((c = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(R, Symbol.hasInstance, {
              value: function (e) {
                return !!c.call(this, e) || (this === R && e && e._writableState instanceof C)
              },
            }))
          : (c = function (e) {
              return e instanceof this
            }),
        (R.prototype.pipe = function () {
          v(this, new y())
        }),
        (R.prototype.write = function (e, t, n) {
          var r,
            i = this._writableState,
            o = !1,
            s = !i.objectMode && ((r = e), a.isBuffer(r) || r instanceof u)
          return (
            s &&
              !a.isBuffer(e) &&
              (e = (function (e) {
                return a.from(e)
              })(e)),
            'function' === typeof t && ((n = t), (t = null)),
            s ? (t = 'buffer') : t || (t = i.defaultEncoding),
            'function' !== typeof n && (n = E),
            i.ending
              ? (function (e, t) {
                  var n = new _()
                  v(e, n), process.nextTick(t, n)
                })(this, n)
              : (s ||
                  (function (e, t, n, r) {
                    var i
                    return (
                      null === n
                        ? (i = new m())
                        : 'string' === typeof n || t.objectMode || (i = new d('chunk', ['string', 'Buffer'], n)),
                      !i || (v(e, i), process.nextTick(r, i), !1)
                    )
                  })(this, i, e, n)) &&
                (i.pendingcb++,
                (o = (function (e, t, n, r, i, o) {
                  if (!n) {
                    var s = (function (e, t, n) {
                      e.objectMode || !1 === e.decodeStrings || 'string' !== typeof t || (t = a.from(t, n))
                      return t
                    })(t, r, i)
                    r !== s && ((n = !0), (i = 'buffer'), (r = s))
                  }
                  var u = t.objectMode ? 1 : r.length
                  t.length += u
                  var c = t.length < t.highWaterMark
                  c || (t.needDrain = !0)
                  if (t.writing || t.corked) {
                    var l = t.lastBufferedRequest
                    ;(t.lastBufferedRequest = { chunk: r, encoding: i, isBuf: n, callback: o, next: null }),
                      l ? (l.next = t.lastBufferedRequest) : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1)
                  } else S(e, t, !1, u, r, i, o)
                  return c
                })(this, i, s, e, t, n))),
            o
          )
        }),
        (R.prototype.cork = function () {
          this._writableState.corked++
        }),
        (R.prototype.uncork = function () {
          var e = this._writableState
          e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || A(this, e))
        }),
        (R.prototype.setDefaultEncoding = function (e) {
          if (
            ('string' === typeof e && (e = e.toLowerCase()),
            !(
              [
                'hex',
                'utf8',
                'utf-8',
                'ascii',
                'binary',
                'base64',
                'ucs2',
                'ucs-2',
                'utf16le',
                'utf-16le',
                'raw',
              ].indexOf((e + '').toLowerCase()) > -1
            ))
          )
            throw new w(e)
          return (this._writableState.defaultEncoding = e), this
        }),
        Object.defineProperty(R.prototype, 'writableBuffer', {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer()
          },
        }),
        Object.defineProperty(R.prototype, 'writableHighWaterMark', {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark
          },
        }),
        (R.prototype._write = function (e, t, n) {
          n(new p('_write()'))
        }),
        (R.prototype._writev = null),
        (R.prototype.end = function (e, t, n) {
          var r = this._writableState
          return (
            'function' === typeof e
              ? ((n = e), (e = null), (t = null))
              : 'function' === typeof t && ((n = t), (t = null)),
            null !== e && void 0 !== e && this.write(e, t),
            r.corked && ((r.corked = 1), this.uncork()),
            r.ending ||
              (function (e, t, n) {
                ;(t.ending = !0), I(e, t), n && (t.finished ? process.nextTick(n) : e.once('finish', n))
                ;(t.ended = !0), (e.writable = !1)
              })(this, r, n),
            this
          )
        }),
        Object.defineProperty(R.prototype, 'writableLength', {
          enumerable: !1,
          get: function () {
            return this._writableState.length
          },
        }),
        Object.defineProperty(R.prototype, 'destroyed', {
          enumerable: !1,
          get: function () {
            return void 0 !== this._writableState && this._writableState.destroyed
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e)
          },
        }),
        (R.prototype.destroy = l.destroy),
        (R.prototype._undestroy = l.undestroy),
        (R.prototype._destroy = function (e, t) {
          t(e)
        })
    },
    7312: (e, t, n) => {
      'use strict'
      var r
      function i(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ('object' !== typeof e || null === e) return e
              var n = e[Symbol.toPrimitive]
              if (void 0 !== n) {
                var r = n.call(e, t || 'default')
                if ('object' !== typeof r) return r
                throw new TypeError('@@toPrimitive must return a primitive value.')
              }
              return ('string' === t ? String : Number)(e)
            })(e, 'string')
            return 'symbol' === typeof t ? t : String(t)
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      var o = n(227),
        s = Symbol('lastResolve'),
        a = Symbol('lastReject'),
        u = Symbol('error'),
        c = Symbol('ended'),
        l = Symbol('lastPromise'),
        h = Symbol('handlePromise'),
        f = Symbol('stream')
      function d(e, t) {
        return { value: e, done: t }
      }
      function p(e) {
        var t = e[s]
        if (null !== t) {
          var n = e[f].read()
          null !== n && ((e[l] = null), (e[s] = null), (e[a] = null), t(d(n, !1)))
        }
      }
      function g(e) {
        process.nextTick(p, e)
      }
      var y = Object.getPrototypeOf(function () {}),
        b = Object.setPrototypeOf(
          (i(
            (r = {
              get stream() {
                return this[f]
              },
              next: function () {
                var e = this,
                  t = this[u]
                if (null !== t) return Promise.reject(t)
                if (this[c]) return Promise.resolve(d(void 0, !0))
                if (this[f].destroyed)
                  return new Promise(function (t, n) {
                    process.nextTick(function () {
                      e[u] ? n(e[u]) : t(d(void 0, !0))
                    })
                  })
                var n,
                  r = this[l]
                if (r)
                  n = new Promise(
                    (function (e, t) {
                      return function (n, r) {
                        e.then(function () {
                          t[c] ? n(d(void 0, !0)) : t[h](n, r)
                        }, r)
                      }
                    })(r, this),
                  )
                else {
                  var i = this[f].read()
                  if (null !== i) return Promise.resolve(d(i, !1))
                  n = new Promise(this[h])
                }
                return (this[l] = n), n
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this
            },
          ),
          i(r, 'return', function () {
            var e = this
            return new Promise(function (t, n) {
              e[f].destroy(null, function (e) {
                e ? n(e) : t(d(void 0, !0))
              })
            })
          }),
          r),
          y,
        )
      e.exports = function (e) {
        var t,
          n = Object.create(
            b,
            (i((t = {}), f, { value: e, writable: !0 }),
            i(t, s, { value: null, writable: !0 }),
            i(t, a, { value: null, writable: !0 }),
            i(t, u, { value: null, writable: !0 }),
            i(t, c, { value: e._readableState.endEmitted, writable: !0 }),
            i(t, h, {
              value: function (e, t) {
                var r = n[f].read()
                r ? ((n[l] = null), (n[s] = null), (n[a] = null), e(d(r, !1))) : ((n[s] = e), (n[a] = t))
              },
              writable: !0,
            }),
            t),
          )
        return (
          (n[l] = null),
          o(e, function (e) {
            if (e && 'ERR_STREAM_PREMATURE_CLOSE' !== e.code) {
              var t = n[a]
              return null !== t && ((n[l] = null), (n[s] = null), (n[a] = null), t(e)), void (n[u] = e)
            }
            var r = n[s]
            null !== r && ((n[l] = null), (n[s] = null), (n[a] = null), r(d(void 0, !0))), (n[c] = !0)
          }),
          e.on('readable', g.bind(null, n)),
          n
        )
      }
    },
    7044: (e, t, n) => {
      'use strict'
      function r(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                o(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
        }
        return e
      }
      function o(e, t, n) {
        return (
          (t = a(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, a(r.key), r)
        }
      }
      function a(e) {
        var t = (function (e, t) {
          if ('object' !== typeof e || null === e) return e
          var n = e[Symbol.toPrimitive]
          if (void 0 !== n) {
            var r = n.call(e, t || 'default')
            if ('object' !== typeof r) return r
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return ('string' === t ? String : Number)(e)
        })(e, 'string')
        return 'symbol' === typeof t ? t : String(t)
      }
      var u = n(6382).Buffer,
        c = n(5340).inspect,
        l = (c && c.custom) || 'inspect'
      e.exports = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, e),
            (this.head = null),
            (this.tail = null),
            (this.length = 0)
        }
        var t, n, r
        return (
          (t = e),
          (n = [
            {
              key: 'push',
              value: function (e) {
                var t = { data: e, next: null }
                this.length > 0 ? (this.tail.next = t) : (this.head = t), (this.tail = t), ++this.length
              },
            },
            {
              key: 'unshift',
              value: function (e) {
                var t = { data: e, next: this.head }
                0 === this.length && (this.tail = t), (this.head = t), ++this.length
              },
            },
            {
              key: 'shift',
              value: function () {
                if (0 !== this.length) {
                  var e = this.head.data
                  return (
                    1 === this.length ? (this.head = this.tail = null) : (this.head = this.head.next), --this.length, e
                  )
                }
              },
            },
            {
              key: 'clear',
              value: function () {
                ;(this.head = this.tail = null), (this.length = 0)
              },
            },
            {
              key: 'join',
              value: function (e) {
                if (0 === this.length) return ''
                for (var t = this.head, n = '' + t.data; (t = t.next); ) n += e + t.data
                return n
              },
            },
            {
              key: 'concat',
              value: function (e) {
                if (0 === this.length) return u.alloc(0)
                for (var t, n, r, i = u.allocUnsafe(e >>> 0), o = this.head, s = 0; o; )
                  (t = o.data), (n = i), (r = s), u.prototype.copy.call(t, n, r), (s += o.data.length), (o = o.next)
                return i
              },
            },
            {
              key: 'consume',
              value: function (e, t) {
                var n
                return (
                  e < this.head.data.length
                    ? ((n = this.head.data.slice(0, e)), (this.head.data = this.head.data.slice(e)))
                    : (n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e)),
                  n
                )
              },
            },
            {
              key: 'first',
              value: function () {
                return this.head.data
              },
            },
            {
              key: '_getString',
              value: function (e) {
                var t = this.head,
                  n = 1,
                  r = t.data
                for (e -= r.length; (t = t.next); ) {
                  var i = t.data,
                    o = e > i.length ? i.length : e
                  if ((o === i.length ? (r += i) : (r += i.slice(0, e)), 0 === (e -= o))) {
                    o === i.length
                      ? (++n, t.next ? (this.head = t.next) : (this.head = this.tail = null))
                      : ((this.head = t), (t.data = i.slice(o)))
                    break
                  }
                  ++n
                }
                return (this.length -= n), r
              },
            },
            {
              key: '_getBuffer',
              value: function (e) {
                var t = u.allocUnsafe(e),
                  n = this.head,
                  r = 1
                for (n.data.copy(t), e -= n.data.length; (n = n.next); ) {
                  var i = n.data,
                    o = e > i.length ? i.length : e
                  if ((i.copy(t, t.length - e, 0, o), 0 === (e -= o))) {
                    o === i.length
                      ? (++r, n.next ? (this.head = n.next) : (this.head = this.tail = null))
                      : ((this.head = n), (n.data = i.slice(o)))
                    break
                  }
                  ++r
                }
                return (this.length -= r), t
              },
            },
            {
              key: l,
              value: function (e, t) {
                return c(this, i(i({}, t), {}, { depth: 0, customInspect: !1 }))
              },
            },
          ]) && s(t.prototype, n),
          r && s(t, r),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          e
        )
      })()
    },
    6725: (e) => {
      'use strict'
      function t(e, t) {
        r(e, t), n(e)
      }
      function n(e) {
        ;(e._writableState && !e._writableState.emitClose) ||
          (e._readableState && !e._readableState.emitClose) ||
          e.emit('close')
      }
      function r(e, t) {
        e.emit('error', t)
      }
      e.exports = {
        destroy: function (e, i) {
          var o = this,
            s = this._readableState && this._readableState.destroyed,
            a = this._writableState && this._writableState.destroyed
          return s || a
            ? (i
                ? i(e)
                : e &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0), process.nextTick(r, this, e))
                    : process.nextTick(r, this, e)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function (e) {
                !i && e
                  ? o._writableState
                    ? o._writableState.errorEmitted
                      ? process.nextTick(n, o)
                      : ((o._writableState.errorEmitted = !0), process.nextTick(t, o, e))
                    : process.nextTick(t, o, e)
                  : i
                    ? (process.nextTick(n, o), i(e))
                    : process.nextTick(n, o)
              }),
              this)
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1))
        },
        errorOrDestroy: function (e, t) {
          var n = e._readableState,
            r = e._writableState
          ;(n && n.autoDestroy) || (r && r.autoDestroy) ? e.destroy(t) : e.emit('error', t)
        },
      }
    },
    227: (e, t, n) => {
      'use strict'
      var r = n(6545).F.ERR_STREAM_PREMATURE_CLOSE
      function i() {}
      e.exports = function e(t, n, o) {
        if ('function' === typeof n) return e(t, null, n)
        n || (n = {}),
          (o = (function (e) {
            var t = !1
            return function () {
              if (!t) {
                t = !0
                for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]
                e.apply(this, r)
              }
            }
          })(o || i))
        var s = n.readable || (!1 !== n.readable && t.readable),
          a = n.writable || (!1 !== n.writable && t.writable),
          u = function () {
            t.writable || l()
          },
          c = t._writableState && t._writableState.finished,
          l = function () {
            ;(a = !1), (c = !0), s || o.call(t)
          },
          h = t._readableState && t._readableState.endEmitted,
          f = function () {
            ;(s = !1), (h = !0), a || o.call(t)
          },
          d = function (e) {
            o.call(t, e)
          },
          p = function () {
            var e
            return s && !h
              ? ((t._readableState && t._readableState.ended) || (e = new r()), o.call(t, e))
              : a && !c
                ? ((t._writableState && t._writableState.ended) || (e = new r()), o.call(t, e))
                : void 0
          },
          g = function () {
            t.req.on('finish', l)
          }
        return (
          !(function (e) {
            return e.setHeader && 'function' === typeof e.abort
          })(t)
            ? a && !t._writableState && (t.on('end', u), t.on('close', u))
            : (t.on('complete', l), t.on('abort', p), t.req ? g() : t.on('request', g)),
          t.on('end', f),
          t.on('finish', l),
          !1 !== n.error && t.on('error', d),
          t.on('close', p),
          function () {
            t.removeListener('complete', l),
              t.removeListener('abort', p),
              t.removeListener('request', g),
              t.req && t.req.removeListener('finish', l),
              t.removeListener('end', u),
              t.removeListener('close', u),
              t.removeListener('finish', l),
              t.removeListener('end', f),
              t.removeListener('error', d),
              t.removeListener('close', p)
          }
        )
      }
    },
    7462: (e) => {
      e.exports = function () {
        throw new Error('Readable.from is not available in the browser')
      }
    },
    537: (e, t, n) => {
      'use strict'
      var r
      var i = n(6545).F,
        o = i.ERR_MISSING_ARGS,
        s = i.ERR_STREAM_DESTROYED
      function a(e) {
        if (e) throw e
      }
      function u(e) {
        e()
      }
      function c(e, t) {
        return e.pipe(t)
      }
      e.exports = function () {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i]
        var l,
          h = (function (e) {
            return e.length ? ('function' !== typeof e[e.length - 1] ? a : e.pop()) : a
          })(t)
        if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2)) throw new o('streams')
        var f = t.map(function (e, i) {
          var o = i < t.length - 1
          return (function (e, t, i, o) {
            o = (function (e) {
              var t = !1
              return function () {
                t || ((t = !0), e.apply(void 0, arguments))
              }
            })(o)
            var a = !1
            e.on('close', function () {
              a = !0
            }),
              void 0 === r && (r = n(227)),
              r(e, { readable: t, writable: i }, function (e) {
                if (e) return o(e)
                ;(a = !0), o()
              })
            var u = !1
            return function (t) {
              if (!a && !u)
                return (
                  (u = !0),
                  (function (e) {
                    return e.setHeader && 'function' === typeof e.abort
                  })(e)
                    ? e.abort()
                    : 'function' === typeof e.destroy
                      ? e.destroy()
                      : void o(t || new s('pipe'))
                )
            }
          })(e, o, i > 0, function (e) {
            l || (l = e), e && f.forEach(u), o || (f.forEach(u), h(l))
          })
        })
        return t.reduce(c)
      }
    },
    8550: (e, t, n) => {
      'use strict'
      var r = n(6545).F.ERR_INVALID_OPT_VALUE
      e.exports = {
        getHighWaterMark: function (e, t, n, i) {
          var o = (function (e, t, n) {
            return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null
          })(t, i, n)
          if (null != o) {
            if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new r(i ? n : 'highWaterMark', o)
            return Math.floor(o)
          }
          return e.objectMode ? 16 : 16384
        },
      }
    },
    2902: (e, t, n) => {
      e.exports = n(7284).EventEmitter
    },
    3350: (e, t, n) => {
      ;((t = e.exports = n(6153)).Stream = t),
        (t.Readable = t),
        (t.Writable = n(9001)),
        (t.Duplex = n(6779)),
        (t.Transform = n(2013)),
        (t.PassThrough = n(5559)),
        (t.finished = n(227)),
        (t.pipeline = n(537))
    },
    9966: (e, t, n) => {
      var r = n(6382),
        i = r.Buffer
      function o(e, t) {
        for (var n in e) t[n] = e[n]
      }
      function s(e, t, n) {
        return i(e, t, n)
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? (e.exports = r) : (o(r, t), (t.Buffer = s)),
        (s.prototype = Object.create(i.prototype)),
        o(i, s),
        (s.from = function (e, t, n) {
          if ('number' === typeof e) throw new TypeError('Argument must not be a number')
          return i(e, t, n)
        }),
        (s.alloc = function (e, t, n) {
          if ('number' !== typeof e) throw new TypeError('Argument must be a number')
          var r = i(e)
          return void 0 !== t ? ('string' === typeof n ? r.fill(t, n) : r.fill(t)) : r.fill(0), r
        }),
        (s.allocUnsafe = function (e) {
          if ('number' !== typeof e) throw new TypeError('Argument must be a number')
          return i(e)
        }),
        (s.allocUnsafeSlow = function (e) {
          if ('number' !== typeof e) throw new TypeError('Argument must be a number')
          return r.SlowBuffer(e)
        })
    },
    6593: (e, t, n) => {
      const r = n(6522)('simple-peer'),
        i = n(7919),
        o = n(5838),
        s = n(3350),
        a = n(4275),
        u = n(4823),
        { Buffer: c } = n(6382),
        l = 65536
      function h(e) {
        return e.replace(/a=ice-options:trickle\s\n/g, '')
      }
      class f extends s.Duplex {
        constructor(e) {
          if (
            (super((e = Object.assign({ allowHalfOpen: !1 }, e))),
            (this._id = o(4).toString('hex').slice(0, 7)),
            this._debug('new peer %o', e),
            (this.channelName = e.initiator ? e.channelName || o(20).toString('hex') : null),
            (this.initiator = e.initiator || !1),
            (this.channelConfig = e.channelConfig || f.channelConfig),
            (this.channelNegotiated = this.channelConfig.negotiated),
            (this.config = Object.assign({}, f.config, e.config)),
            (this.offerOptions = e.offerOptions || {}),
            (this.answerOptions = e.answerOptions || {}),
            (this.sdpTransform = e.sdpTransform || ((e) => e)),
            (this.streams = e.streams || (e.stream ? [e.stream] : [])),
            (this.trickle = void 0 === e.trickle || e.trickle),
            (this.allowHalfTrickle = void 0 !== e.allowHalfTrickle && e.allowHalfTrickle),
            (this.iceCompleteTimeout = e.iceCompleteTimeout || 5e3),
            (this.destroyed = !1),
            (this.destroying = !1),
            (this._connected = !1),
            (this.remoteAddress = void 0),
            (this.remoteFamily = void 0),
            (this.remotePort = void 0),
            (this.localAddress = void 0),
            (this.localFamily = void 0),
            (this.localPort = void 0),
            (this._wrtc = e.wrtc && 'object' === typeof e.wrtc ? e.wrtc : i()),
            !this._wrtc)
          )
            throw 'undefined' === typeof window
              ? u(new Error('No WebRTC support: Specify `opts.wrtc` option in this environment'), 'ERR_WEBRTC_SUPPORT')
              : u(new Error('No WebRTC support: Not a supported browser'), 'ERR_WEBRTC_SUPPORT')
          ;(this._pcReady = !1),
            (this._channelReady = !1),
            (this._iceComplete = !1),
            (this._iceCompleteTimer = null),
            (this._channel = null),
            (this._pendingCandidates = []),
            (this._isNegotiating = !1),
            (this._firstNegotiation = !0),
            (this._batchedNegotiation = !1),
            (this._queuedNegotiation = !1),
            (this._sendersAwaitingStable = []),
            (this._senderMap = new Map()),
            (this._closingInterval = null),
            (this._remoteTracks = []),
            (this._remoteStreams = []),
            (this._chunk = null),
            (this._cb = null),
            (this._interval = null)
          try {
            this._pc = new this._wrtc.RTCPeerConnection(this.config)
          } catch (t) {
            return void this.destroy(u(t, 'ERR_PC_CONSTRUCTOR'))
          }
          ;(this._isReactNativeWebrtc = 'number' === typeof this._pc._peerConnectionId),
            (this._pc.oniceconnectionstatechange = () => {
              this._onIceStateChange()
            }),
            (this._pc.onicegatheringstatechange = () => {
              this._onIceStateChange()
            }),
            (this._pc.onconnectionstatechange = () => {
              this._onConnectionStateChange()
            }),
            (this._pc.onsignalingstatechange = () => {
              this._onSignalingStateChange()
            }),
            (this._pc.onicecandidate = (e) => {
              this._onIceCandidate(e)
            }),
            'object' === typeof this._pc.peerIdentity &&
              this._pc.peerIdentity.catch((e) => {
                this.destroy(u(e, 'ERR_PC_PEER_IDENTITY'))
              }),
            this.initiator || this.channelNegotiated
              ? this._setupData({ channel: this._pc.createDataChannel(this.channelName, this.channelConfig) })
              : (this._pc.ondatachannel = (e) => {
                  this._setupData(e)
                }),
            this.streams &&
              this.streams.forEach((e) => {
                this.addStream(e)
              }),
            (this._pc.ontrack = (e) => {
              this._onTrack(e)
            }),
            this._debug('initial negotiation'),
            this._needsNegotiation(),
            (this._onFinishBound = () => {
              this._onFinish()
            }),
            this.once('finish', this._onFinishBound)
        }
        get bufferSize() {
          return (this._channel && this._channel.bufferedAmount) || 0
        }
        get connected() {
          return this._connected && 'open' === this._channel.readyState
        }
        address() {
          return { port: this.localPort, family: this.localFamily, address: this.localAddress }
        }
        signal(e) {
          if (!this.destroying) {
            if (this.destroyed) throw u(new Error('cannot signal after peer is destroyed'), 'ERR_DESTROYED')
            if ('string' === typeof e)
              try {
                e = JSON.parse(e)
              } catch (t) {
                e = {}
              }
            this._debug('signal()'),
              e.renegotiate && this.initiator && (this._debug('got request to renegotiate'), this._needsNegotiation()),
              e.transceiverRequest &&
                this.initiator &&
                (this._debug('got request for transceiver'),
                this.addTransceiver(e.transceiverRequest.kind, e.transceiverRequest.init)),
              e.candidate &&
                (this._pc.remoteDescription && this._pc.remoteDescription.type
                  ? this._addIceCandidate(e.candidate)
                  : this._pendingCandidates.push(e.candidate)),
              e.sdp &&
                this._pc
                  .setRemoteDescription(new this._wrtc.RTCSessionDescription(e))
                  .then(() => {
                    this.destroyed ||
                      (this._pendingCandidates.forEach((e) => {
                        this._addIceCandidate(e)
                      }),
                      (this._pendingCandidates = []),
                      'offer' === this._pc.remoteDescription.type && this._createAnswer())
                  })
                  .catch((e) => {
                    this.destroy(u(e, 'ERR_SET_REMOTE_DESCRIPTION'))
                  }),
              e.sdp ||
                e.candidate ||
                e.renegotiate ||
                e.transceiverRequest ||
                this.destroy(u(new Error('signal() called with invalid signal data'), 'ERR_SIGNALING'))
          }
        }
        _addIceCandidate(e) {
          const t = new this._wrtc.RTCIceCandidate(e)
          this._pc.addIceCandidate(t).catch((e) => {
            var n
            !t.address || t.address.endsWith('.local')
              ? ((n = 'Ignoring unsupported ICE candidate.'), console.warn(n))
              : this.destroy(u(e, 'ERR_ADD_ICE_CANDIDATE'))
          })
        }
        send(e) {
          if (!this.destroying) {
            if (this.destroyed) throw u(new Error('cannot send after peer is destroyed'), 'ERR_DESTROYED')
            this._channel.send(e)
          }
        }
        addTransceiver(e, t) {
          if (!this.destroying) {
            if (this.destroyed) throw u(new Error('cannot addTransceiver after peer is destroyed'), 'ERR_DESTROYED')
            if ((this._debug('addTransceiver()'), this.initiator))
              try {
                this._pc.addTransceiver(e, t), this._needsNegotiation()
              } catch (n) {
                this.destroy(u(n, 'ERR_ADD_TRANSCEIVER'))
              }
            else this.emit('signal', { type: 'transceiverRequest', transceiverRequest: { kind: e, init: t } })
          }
        }
        addStream(e) {
          if (!this.destroying) {
            if (this.destroyed) throw u(new Error('cannot addStream after peer is destroyed'), 'ERR_DESTROYED')
            this._debug('addStream()'),
              e.getTracks().forEach((t) => {
                this.addTrack(t, e)
              })
          }
        }
        addTrack(e, t) {
          if (this.destroying) return
          if (this.destroyed) throw u(new Error('cannot addTrack after peer is destroyed'), 'ERR_DESTROYED')
          this._debug('addTrack()')
          const n = this._senderMap.get(e) || new Map()
          let r = n.get(t)
          if (r)
            throw r.removed
              ? u(
                  new Error('Track has been removed. You should enable/disable tracks that you want to re-add.'),
                  'ERR_SENDER_REMOVED',
                )
              : u(new Error('Track has already been added to that stream.'), 'ERR_SENDER_ALREADY_ADDED')
          ;(r = this._pc.addTrack(e, t)), n.set(t, r), this._senderMap.set(e, n), this._needsNegotiation()
        }
        replaceTrack(e, t, n) {
          if (this.destroying) return
          if (this.destroyed) throw u(new Error('cannot replaceTrack after peer is destroyed'), 'ERR_DESTROYED')
          this._debug('replaceTrack()')
          const r = this._senderMap.get(e),
            i = r ? r.get(n) : null
          if (!i) throw u(new Error('Cannot replace track that was never added.'), 'ERR_TRACK_NOT_ADDED')
          t && this._senderMap.set(t, r),
            null != i.replaceTrack
              ? i.replaceTrack(t)
              : this.destroy(
                  u(new Error('replaceTrack is not supported in this browser'), 'ERR_UNSUPPORTED_REPLACETRACK'),
                )
        }
        removeTrack(e, t) {
          if (this.destroying) return
          if (this.destroyed) throw u(new Error('cannot removeTrack after peer is destroyed'), 'ERR_DESTROYED')
          this._debug('removeSender()')
          const n = this._senderMap.get(e),
            r = n ? n.get(t) : null
          if (!r) throw u(new Error('Cannot remove track that was never added.'), 'ERR_TRACK_NOT_ADDED')
          try {
            ;(r.removed = !0), this._pc.removeTrack(r)
          } catch (i) {
            'NS_ERROR_UNEXPECTED' === i.name
              ? this._sendersAwaitingStable.push(r)
              : this.destroy(u(i, 'ERR_REMOVE_TRACK'))
          }
          this._needsNegotiation()
        }
        removeStream(e) {
          if (!this.destroying) {
            if (this.destroyed) throw u(new Error('cannot removeStream after peer is destroyed'), 'ERR_DESTROYED')
            this._debug('removeSenders()'),
              e.getTracks().forEach((t) => {
                this.removeTrack(t, e)
              })
          }
        }
        _needsNegotiation() {
          this._debug('_needsNegotiation'),
            this._batchedNegotiation ||
              ((this._batchedNegotiation = !0),
              a(() => {
                ;(this._batchedNegotiation = !1),
                  this.initiator || !this._firstNegotiation
                    ? (this._debug('starting batched negotiation'), this.negotiate())
                    : this._debug('non-initiator initial negotiation request discarded'),
                  (this._firstNegotiation = !1)
              }))
        }
        negotiate() {
          if (!this.destroying) {
            if (this.destroyed) throw u(new Error('cannot negotiate after peer is destroyed'), 'ERR_DESTROYED')
            this.initiator
              ? this._isNegotiating
                ? ((this._queuedNegotiation = !0), this._debug('already negotiating, queueing'))
                : (this._debug('start negotiation'),
                  setTimeout(() => {
                    this._createOffer()
                  }, 0))
              : this._isNegotiating
                ? ((this._queuedNegotiation = !0), this._debug('already negotiating, queueing'))
                : (this._debug('requesting negotiation from initiator'),
                  this.emit('signal', { type: 'renegotiate', renegotiate: !0 })),
              (this._isNegotiating = !0)
          }
        }
        destroy(e) {
          this._destroy(e, () => {})
        }
        _destroy(e, t) {
          this.destroyed ||
            this.destroying ||
            ((this.destroying = !0),
            this._debug('destroying (error: %s)', e && (e.message || e)),
            a(() => {
              if (
                ((this.destroyed = !0),
                (this.destroying = !1),
                this._debug('destroy (error: %s)', e && (e.message || e)),
                (this.readable = this.writable = !1),
                this._readableState.ended || this.push(null),
                this._writableState.finished || this.end(),
                (this._connected = !1),
                (this._pcReady = !1),
                (this._channelReady = !1),
                (this._remoteTracks = null),
                (this._remoteStreams = null),
                (this._senderMap = null),
                clearInterval(this._closingInterval),
                (this._closingInterval = null),
                clearInterval(this._interval),
                (this._interval = null),
                (this._chunk = null),
                (this._cb = null),
                this._onFinishBound && this.removeListener('finish', this._onFinishBound),
                (this._onFinishBound = null),
                this._channel)
              ) {
                try {
                  this._channel.close()
                } catch (e) {}
                ;(this._channel.onmessage = null),
                  (this._channel.onopen = null),
                  (this._channel.onclose = null),
                  (this._channel.onerror = null)
              }
              if (this._pc) {
                try {
                  this._pc.close()
                } catch (e) {}
                ;(this._pc.oniceconnectionstatechange = null),
                  (this._pc.onicegatheringstatechange = null),
                  (this._pc.onsignalingstatechange = null),
                  (this._pc.onicecandidate = null),
                  (this._pc.ontrack = null),
                  (this._pc.ondatachannel = null)
              }
              ;(this._pc = null), (this._channel = null), e && this.emit('error', e), this.emit('close'), t()
            }))
        }
        _setupData(e) {
          if (!e.channel)
            return this.destroy(u(new Error('Data channel event is missing `channel` property'), 'ERR_DATA_CHANNEL'))
          ;(this._channel = e.channel),
            (this._channel.binaryType = 'arraybuffer'),
            'number' === typeof this._channel.bufferedAmountLowThreshold &&
              (this._channel.bufferedAmountLowThreshold = l),
            (this.channelName = this._channel.label),
            (this._channel.onmessage = (e) => {
              this._onChannelMessage(e)
            }),
            (this._channel.onbufferedamountlow = () => {
              this._onChannelBufferedAmountLow()
            }),
            (this._channel.onopen = () => {
              this._onChannelOpen()
            }),
            (this._channel.onclose = () => {
              this._onChannelClose()
            }),
            (this._channel.onerror = (e) => {
              const t =
                e.error instanceof Error
                  ? e.error
                  : new Error(
                      'Datachannel error: '
                        .concat(e.message, ' ')
                        .concat(e.filename, ':')
                        .concat(e.lineno, ':')
                        .concat(e.colno),
                    )
              this.destroy(u(t, 'ERR_DATA_CHANNEL'))
            })
          let t = !1
          this._closingInterval = setInterval(() => {
            this._channel && 'closing' === this._channel.readyState ? (t && this._onChannelClose(), (t = !0)) : (t = !1)
          }, 5e3)
        }
        _read() {}
        _write(e, t, n) {
          if (this.destroyed) return n(u(new Error('cannot write after peer is destroyed'), 'ERR_DATA_CHANNEL'))
          if (this._connected) {
            try {
              this.send(e)
            } catch (r) {
              return this.destroy(u(r, 'ERR_DATA_CHANNEL'))
            }
            this._channel.bufferedAmount > l
              ? (this._debug('start backpressure: bufferedAmount %d', this._channel.bufferedAmount), (this._cb = n))
              : n(null)
          } else this._debug('write before connect'), (this._chunk = e), (this._cb = n)
        }
        _onFinish() {
          if (this.destroyed) return
          const e = () => {
            setTimeout(() => this.destroy(), 1e3)
          }
          this._connected ? e() : this.once('connect', e)
        }
        _startIceCompleteTimeout() {
          this.destroyed ||
            this._iceCompleteTimer ||
            (this._debug('started iceComplete timeout'),
            (this._iceCompleteTimer = setTimeout(() => {
              this._iceComplete ||
                ((this._iceComplete = !0),
                this._debug('iceComplete timeout completed'),
                this.emit('iceTimeout'),
                this.emit('_iceComplete'))
            }, this.iceCompleteTimeout)))
        }
        _createOffer() {
          this.destroyed ||
            this._pc
              .createOffer(this.offerOptions)
              .then((e) => {
                if (this.destroyed) return
                this.trickle || this.allowHalfTrickle || (e.sdp = h(e.sdp)), (e.sdp = this.sdpTransform(e.sdp))
                const t = () => {
                  if (this.destroyed) return
                  const t = this._pc.localDescription || e
                  this._debug('signal'), this.emit('signal', { type: t.type, sdp: t.sdp })
                }
                this._pc
                  .setLocalDescription(e)
                  .then(() => {
                    this._debug('createOffer success'),
                      this.destroyed || (this.trickle || this._iceComplete ? t() : this.once('_iceComplete', t))
                  })
                  .catch((e) => {
                    this.destroy(u(e, 'ERR_SET_LOCAL_DESCRIPTION'))
                  })
              })
              .catch((e) => {
                this.destroy(u(e, 'ERR_CREATE_OFFER'))
              })
        }
        _requestMissingTransceivers() {
          this._pc.getTransceivers &&
            this._pc.getTransceivers().forEach((e) => {
              e.mid || !e.sender.track || e.requested || ((e.requested = !0), this.addTransceiver(e.sender.track.kind))
            })
        }
        _createAnswer() {
          this.destroyed ||
            this._pc
              .createAnswer(this.answerOptions)
              .then((e) => {
                if (this.destroyed) return
                this.trickle || this.allowHalfTrickle || (e.sdp = h(e.sdp)), (e.sdp = this.sdpTransform(e.sdp))
                const t = () => {
                  if (this.destroyed) return
                  const t = this._pc.localDescription || e
                  this._debug('signal'),
                    this.emit('signal', { type: t.type, sdp: t.sdp }),
                    this.initiator || this._requestMissingTransceivers()
                }
                this._pc
                  .setLocalDescription(e)
                  .then(() => {
                    this.destroyed || (this.trickle || this._iceComplete ? t() : this.once('_iceComplete', t))
                  })
                  .catch((e) => {
                    this.destroy(u(e, 'ERR_SET_LOCAL_DESCRIPTION'))
                  })
              })
              .catch((e) => {
                this.destroy(u(e, 'ERR_CREATE_ANSWER'))
              })
        }
        _onConnectionStateChange() {
          this.destroyed ||
            ('failed' === this._pc.connectionState &&
              this.destroy(u(new Error('Connection failed.'), 'ERR_CONNECTION_FAILURE')))
        }
        _onIceStateChange() {
          if (this.destroyed) return
          const e = this._pc.iceConnectionState,
            t = this._pc.iceGatheringState
          this._debug('iceStateChange (connection: %s) (gathering: %s)', e, t),
            this.emit('iceStateChange', e, t),
            ('connected' !== e && 'completed' !== e) || ((this._pcReady = !0), this._maybeReady()),
            'failed' === e && this.destroy(u(new Error('Ice connection failed.'), 'ERR_ICE_CONNECTION_FAILURE')),
            'closed' === e && this.destroy(u(new Error('Ice connection closed.'), 'ERR_ICE_CONNECTION_CLOSED'))
        }
        getStats(e) {
          const t = (e) => (
            '[object Array]' === Object.prototype.toString.call(e.values) &&
              e.values.forEach((t) => {
                Object.assign(e, t)
              }),
            e
          )
          0 === this._pc.getStats.length || this._isReactNativeWebrtc
            ? this._pc.getStats().then(
                (n) => {
                  const r = []
                  n.forEach((e) => {
                    r.push(t(e))
                  }),
                    e(null, r)
                },
                (t) => e(t),
              )
            : this._pc.getStats.length > 0
              ? this._pc.getStats(
                  (n) => {
                    if (this.destroyed) return
                    const r = []
                    n.result().forEach((e) => {
                      const n = {}
                      e.names().forEach((t) => {
                        n[t] = e.stat(t)
                      }),
                        (n.id = e.id),
                        (n.type = e.type),
                        (n.timestamp = e.timestamp),
                        r.push(t(n))
                    }),
                      e(null, r)
                  },
                  (t) => e(t),
                )
              : e(null, [])
        }
        _maybeReady() {
          if (
            (this._debug('maybeReady pc %s channel %s', this._pcReady, this._channelReady),
            this._connected || this._connecting || !this._pcReady || !this._channelReady)
          )
            return
          this._connecting = !0
          const e = () => {
            this.destroyed ||
              this.getStats((t, n) => {
                if (this.destroyed) return
                t && (n = [])
                const r = {},
                  i = {},
                  o = {}
                let s = !1
                n.forEach((e) => {
                  ;('remotecandidate' !== e.type && 'remote-candidate' !== e.type) || (r[e.id] = e),
                    ('localcandidate' !== e.type && 'local-candidate' !== e.type) || (i[e.id] = e),
                    ('candidatepair' !== e.type && 'candidate-pair' !== e.type) || (o[e.id] = e)
                })
                const a = (e) => {
                  s = !0
                  let t = i[e.localCandidateId]
                  t && (t.ip || t.address)
                    ? ((this.localAddress = t.ip || t.address), (this.localPort = Number(t.port)))
                    : t && t.ipAddress
                      ? ((this.localAddress = t.ipAddress), (this.localPort = Number(t.portNumber)))
                      : 'string' === typeof e.googLocalAddress &&
                        ((t = e.googLocalAddress.split(':')),
                        (this.localAddress = t[0]),
                        (this.localPort = Number(t[1]))),
                    this.localAddress && (this.localFamily = this.localAddress.includes(':') ? 'IPv6' : 'IPv4')
                  let n = r[e.remoteCandidateId]
                  n && (n.ip || n.address)
                    ? ((this.remoteAddress = n.ip || n.address), (this.remotePort = Number(n.port)))
                    : n && n.ipAddress
                      ? ((this.remoteAddress = n.ipAddress), (this.remotePort = Number(n.portNumber)))
                      : 'string' === typeof e.googRemoteAddress &&
                        ((n = e.googRemoteAddress.split(':')),
                        (this.remoteAddress = n[0]),
                        (this.remotePort = Number(n[1]))),
                    this.remoteAddress && (this.remoteFamily = this.remoteAddress.includes(':') ? 'IPv6' : 'IPv4'),
                    this._debug(
                      'connect local: %s:%s remote: %s:%s',
                      this.localAddress,
                      this.localPort,
                      this.remoteAddress,
                      this.remotePort,
                    )
                }
                if (
                  (n.forEach((e) => {
                    'transport' === e.type && e.selectedCandidatePairId && a(o[e.selectedCandidatePairId]),
                      (('googCandidatePair' === e.type && 'true' === e.googActiveConnection) ||
                        (('candidatepair' === e.type || 'candidate-pair' === e.type) && e.selected)) &&
                        a(e)
                  }),
                  s || (Object.keys(o).length && !Object.keys(i).length))
                ) {
                  if (((this._connecting = !1), (this._connected = !0), this._chunk)) {
                    try {
                      this.send(this._chunk)
                    } catch (t) {
                      return this.destroy(u(t, 'ERR_DATA_CHANNEL'))
                    }
                    ;(this._chunk = null), this._debug('sent chunk from "write before connect"')
                    const e = this._cb
                    ;(this._cb = null), e(null)
                  }
                  'number' !== typeof this._channel.bufferedAmountLowThreshold &&
                    ((this._interval = setInterval(() => this._onInterval(), 150)),
                    this._interval.unref && this._interval.unref()),
                    this._debug('connect'),
                    this.emit('connect')
                } else setTimeout(e, 100)
              })
          }
          e()
        }
        _onInterval() {
          !this._cb || !this._channel || this._channel.bufferedAmount > l || this._onChannelBufferedAmountLow()
        }
        _onSignalingStateChange() {
          this.destroyed ||
            ('stable' === this._pc.signalingState &&
              ((this._isNegotiating = !1),
              this._debug('flushing sender queue', this._sendersAwaitingStable),
              this._sendersAwaitingStable.forEach((e) => {
                this._pc.removeTrack(e), (this._queuedNegotiation = !0)
              }),
              (this._sendersAwaitingStable = []),
              this._queuedNegotiation
                ? (this._debug('flushing negotiation queue'), (this._queuedNegotiation = !1), this._needsNegotiation())
                : (this._debug('negotiated'), this.emit('negotiated'))),
            this._debug('signalingStateChange %s', this._pc.signalingState),
            this.emit('signalingStateChange', this._pc.signalingState))
        }
        _onIceCandidate(e) {
          this.destroyed ||
            (e.candidate && this.trickle
              ? this.emit('signal', {
                  type: 'candidate',
                  candidate: {
                    candidate: e.candidate.candidate,
                    sdpMLineIndex: e.candidate.sdpMLineIndex,
                    sdpMid: e.candidate.sdpMid,
                  },
                })
              : e.candidate || this._iceComplete || ((this._iceComplete = !0), this.emit('_iceComplete')),
            e.candidate && this._startIceCompleteTimeout())
        }
        _onChannelMessage(e) {
          if (this.destroyed) return
          let t = e.data
          t instanceof ArrayBuffer && (t = c.from(t)), this.push(t)
        }
        _onChannelBufferedAmountLow() {
          if (this.destroyed || !this._cb) return
          this._debug('ending backpressure: bufferedAmount %d', this._channel.bufferedAmount)
          const e = this._cb
          ;(this._cb = null), e(null)
        }
        _onChannelOpen() {
          this._connected ||
            this.destroyed ||
            (this._debug('on channel open'), (this._channelReady = !0), this._maybeReady())
        }
        _onChannelClose() {
          this.destroyed || (this._debug('on channel close'), this.destroy())
        }
        _onTrack(e) {
          this.destroyed ||
            e.streams.forEach((t) => {
              this._debug('on track'),
                this.emit('track', e.track, t),
                this._remoteTracks.push({ track: e.track, stream: t }),
                this._remoteStreams.some((e) => e.id === t.id) ||
                  (this._remoteStreams.push(t),
                  a(() => {
                    this._debug('on stream'), this.emit('stream', t)
                  }))
            })
        }
        _debug() {
          const e = [].slice.call(arguments)
          ;(e[0] = '[' + this._id + '] ' + e[0]), r.apply(null, e)
        }
      }
      ;(f.WEBRTC_SUPPORT = !!i()),
        (f.config = {
          iceServers: [{ urls: ['stun:stun.l.google.com:19302', 'stun:global.stun.twilio.com:3478'] }],
          sdpSemantics: 'unified-plan',
        }),
        (f.channelConfig = {}),
        (e.exports = f)
    },
    8694: (e, t, n) => {
      'use strict'
      var r = n(9966).Buffer,
        i =
          r.isEncoding ||
          function (e) {
            switch ((e = '' + e) && e.toLowerCase()) {
              case 'hex':
              case 'utf8':
              case 'utf-8':
              case 'ascii':
              case 'binary':
              case 'base64':
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
              case 'raw':
                return !0
              default:
                return !1
            }
          }
      function o(e) {
        var t
        switch (
          ((this.encoding = (function (e) {
            var t = (function (e) {
              if (!e) return 'utf8'
              for (var t; ; )
                switch (e) {
                  case 'utf8':
                  case 'utf-8':
                    return 'utf8'
                  case 'ucs2':
                  case 'ucs-2':
                  case 'utf16le':
                  case 'utf-16le':
                    return 'utf16le'
                  case 'latin1':
                  case 'binary':
                    return 'latin1'
                  case 'base64':
                  case 'ascii':
                  case 'hex':
                    return e
                  default:
                    if (t) return
                    ;(e = ('' + e).toLowerCase()), (t = !0)
                }
            })(e)
            if ('string' !== typeof t && (r.isEncoding === i || !i(e))) throw new Error('Unknown encoding: ' + e)
            return t || e
          })(e)),
          this.encoding)
        ) {
          case 'utf16le':
            ;(this.text = u), (this.end = c), (t = 4)
            break
          case 'utf8':
            ;(this.fillLast = a), (t = 4)
            break
          case 'base64':
            ;(this.text = l), (this.end = h), (t = 3)
            break
          default:
            return (this.write = f), void (this.end = d)
        }
        ;(this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = r.allocUnsafe(t))
      }
      function s(e) {
        return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2
      }
      function a(e) {
        var t = this.lastTotal - this.lastNeed,
          n = (function (e, t, n) {
            if (128 !== (192 & t[0])) return (e.lastNeed = 0), '\ufffd'
            if (e.lastNeed > 1 && t.length > 1) {
              if (128 !== (192 & t[1])) return (e.lastNeed = 1), '\ufffd'
              if (e.lastNeed > 2 && t.length > 2 && 128 !== (192 & t[2])) return (e.lastNeed = 2), '\ufffd'
            }
          })(this, e)
        return void 0 !== n
          ? n
          : this.lastNeed <= e.length
            ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal))
            : (e.copy(this.lastChar, t, 0, e.length), void (this.lastNeed -= e.length))
      }
      function u(e, t) {
        if ((e.length - t) % 2 === 0) {
          var n = e.toString('utf16le', t)
          if (n) {
            var r = n.charCodeAt(n.length - 1)
            if (r >= 55296 && r <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = e[e.length - 2]),
                (this.lastChar[1] = e[e.length - 1]),
                n.slice(0, -1)
              )
          }
          return n
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = e[e.length - 1]),
          e.toString('utf16le', t, e.length - 1)
        )
      }
      function c(e) {
        var t = e && e.length ? this.write(e) : ''
        if (this.lastNeed) {
          var n = this.lastTotal - this.lastNeed
          return t + this.lastChar.toString('utf16le', 0, n)
        }
        return t
      }
      function l(e, t) {
        var n = (e.length - t) % 3
        return 0 === n
          ? e.toString('base64', t)
          : ((this.lastNeed = 3 - n),
            (this.lastTotal = 3),
            1 === n
              ? (this.lastChar[0] = e[e.length - 1])
              : ((this.lastChar[0] = e[e.length - 2]), (this.lastChar[1] = e[e.length - 1])),
            e.toString('base64', t, e.length - n))
      }
      function h(e) {
        var t = e && e.length ? this.write(e) : ''
        return this.lastNeed ? t + this.lastChar.toString('base64', 0, 3 - this.lastNeed) : t
      }
      function f(e) {
        return e.toString(this.encoding)
      }
      function d(e) {
        return e && e.length ? this.write(e) : ''
      }
      ;(t.I = o),
        (o.prototype.write = function (e) {
          if (0 === e.length) return ''
          var t, n
          if (this.lastNeed) {
            if (void 0 === (t = this.fillLast(e))) return ''
            ;(n = this.lastNeed), (this.lastNeed = 0)
          } else n = 0
          return n < e.length ? (t ? t + this.text(e, n) : this.text(e, n)) : t || ''
        }),
        (o.prototype.end = function (e) {
          var t = e && e.length ? this.write(e) : ''
          return this.lastNeed ? t + '\ufffd' : t
        }),
        (o.prototype.text = function (e, t) {
          var n = (function (e, t, n) {
            var r = t.length - 1
            if (r < n) return 0
            var i = s(t[r])
            if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i
            if (--r < n || -2 === i) return 0
            if (((i = s(t[r])), i >= 0)) return i > 0 && (e.lastNeed = i - 2), i
            if (--r < n || -2 === i) return 0
            if (((i = s(t[r])), i >= 0)) return i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i
            return 0
          })(this, e, t)
          if (!this.lastNeed) return e.toString('utf8', t)
          this.lastTotal = n
          var r = e.length - (n - this.lastNeed)
          return e.copy(this.lastChar, 0, r), e.toString('utf8', t, r)
        }),
        (o.prototype.fillLast = function (e) {
          if (this.lastNeed <= e.length)
            return (
              e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            )
          e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), (this.lastNeed -= e.length)
        })
    },
    139: (e) => {
      e.exports = function () {
        var e = document.getSelection()
        if (!e.rangeCount) return function () {}
        for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r))
        switch (t.tagName.toUpperCase()) {
          case 'INPUT':
          case 'TEXTAREA':
            t.blur()
            break
          default:
            t = null
        }
        return (
          e.removeAllRanges(),
          function () {
            'Caret' === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t)
                }),
              t && t.focus()
          }
        )
      }
    },
    2390: (e, t, n) => {
      function r(e) {
        try {
          if (!n.g.localStorage) return !1
        } catch (r) {
          return !1
        }
        var t = n.g.localStorage[e]
        return null != t && 'true' === String(t).toLowerCase()
      }
      e.exports = function (e, t) {
        if (r('noDeprecation')) return e
        var n = !1
        return function () {
          if (!n) {
            if (r('throwDeprecation')) throw new Error(t)
            r('traceDeprecation') ? console.trace(t) : console.warn(t), (n = !0)
          }
          return e.apply(this, arguments)
        }
      }
    },
    9627: (e, t, n) => {
      'use strict'
      n.d(t, { K: () => a })
      var r = n(8028),
        i = n(3226),
        o = n(5043),
        s = n(579),
        a = (0, i.R)((e, t) => {
          const { icon: n, children: i, isRound: a, 'aria-label': u, ...c } = e,
            l = n || i,
            h = (0, o.isValidElement)(l) ? (0, o.cloneElement)(l, { 'aria-hidden': !0, focusable: !1 }) : null
          return (0, s.jsx)(r.$, {
            padding: '0',
            borderRadius: a ? 'full' : void 0,
            ref: t,
            'aria-label': u,
            ...c,
            children: h,
          })
        })
      a.displayName = 'IconButton'
    },
    4617: (e, t, n) => {
      'use strict'
      n.d(t, { t: () => o, v: () => s })
      var r = n(3461),
        i = n(9254)
      function o(e) {
        const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...a } = s(e)
        return {
          ...a,
          disabled: t,
          readOnly: r,
          required: o,
          'aria-invalid': (0, i.rq)(n),
          'aria-required': (0, i.rq)(o),
          'aria-readonly': (0, i.rq)(r),
        }
      }
      function s(e) {
        var t, n, o
        const s = (0, r.Uc)(),
          {
            id: a,
            disabled: u,
            readOnly: c,
            required: l,
            isRequired: h,
            isInvalid: f,
            isReadOnly: d,
            isDisabled: p,
            onFocus: g,
            onBlur: y,
            ...b
          } = e,
          m = e['aria-describedby'] ? [e['aria-describedby']] : []
        return (
          (null == s ? void 0 : s.hasFeedbackText) && (null == s ? void 0 : s.isInvalid) && m.push(s.feedbackId),
          (null == s ? void 0 : s.hasHelpText) && m.push(s.helpTextId),
          {
            ...b,
            'aria-describedby': m.join(' ') || void 0,
            id: null != a ? a : null == s ? void 0 : s.id,
            isDisabled: null != (t = null != u ? u : p) ? t : null == s ? void 0 : s.isDisabled,
            isReadOnly: null != (n = null != c ? c : d) ? n : null == s ? void 0 : s.isReadOnly,
            isRequired: null != (o = null != l ? l : h) ? o : null == s ? void 0 : s.isRequired,
            isInvalid: null != f ? f : null == s ? void 0 : s.isInvalid,
            onFocus: (0, i.Hj)(null == s ? void 0 : s.onFocus, g),
            onBlur: (0, i.Hj)(null == s ? void 0 : s.onBlur, y),
          }
        )
      }
    },
    3461: (e, t, n) => {
      'use strict'
      n.d(t, { MJ: () => y, TP: () => d, Uc: () => g, eK: () => b })
      var r = n(7852),
        i = n(4554),
        o = n(3226),
        s = n(3761),
        a = n(6254),
        u = n(4550),
        c = n(9254),
        l = n(5043),
        h = n(579),
        [f, d] = (0, r.q)({
          name: 'FormControlStylesContext',
          errorMessage:
            'useFormControlStyles returned is \'undefined\'. Seems you forgot to wrap the components in "<FormControl />" ',
        }),
        [p, g] = (0, r.q)({ strict: !1, name: 'FormControlContext' })
      var y = (0, o.R)(function (e, t) {
        const n = (0, s.o5)('Form', e),
          r = (0, a.MN)(e),
          {
            getRootProps: o,
            htmlProps: d,
            ...g
          } = (function (e) {
            const { id: t, isRequired: n, isInvalid: r, isDisabled: o, isReadOnly: s, ...a } = e,
              u = (0, l.useId)(),
              h = t || 'field-'.concat(u),
              f = ''.concat(h, '-label'),
              d = ''.concat(h, '-feedback'),
              p = ''.concat(h, '-helptext'),
              [g, y] = (0, l.useState)(!1),
              [b, m] = (0, l.useState)(!1),
              [_, w] = (0, l.useState)(!1),
              v = (0, l.useCallback)(
                function () {
                  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  return {
                    id: p,
                    ...(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                    ref: (0, i.Px)(e, (e) => {
                      e && m(!0)
                    }),
                  }
                },
                [p],
              ),
              E = (0, l.useCallback)(
                function () {
                  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  return {
                    ...e,
                    ref: t,
                    'data-focus': (0, c.sE)(_),
                    'data-disabled': (0, c.sE)(o),
                    'data-invalid': (0, c.sE)(r),
                    'data-readonly': (0, c.sE)(s),
                    id: void 0 !== e.id ? e.id : f,
                    htmlFor: void 0 !== e.htmlFor ? e.htmlFor : h,
                  }
                },
                [h, o, _, r, s, f],
              ),
              C = (0, l.useCallback)(
                function () {
                  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  return {
                    id: d,
                    ...(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                    ref: (0, i.Px)(e, (e) => {
                      e && y(!0)
                    }),
                    'aria-live': 'polite',
                  }
                },
                [d],
              ),
              R = (0, l.useCallback)(
                function () {
                  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  return {
                    ...(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                    ...a,
                    ref: e,
                    role: 'group',
                    'data-focus': (0, c.sE)(_),
                    'data-disabled': (0, c.sE)(o),
                    'data-invalid': (0, c.sE)(r),
                    'data-readonly': (0, c.sE)(s),
                  }
                },
                [a, o, _, r, s],
              ),
              S = (0, l.useCallback)(function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                return { ...e, ref: t, role: 'presentation', 'aria-hidden': !0, children: e.children || '*' }
              }, [])
            return {
              isRequired: !!n,
              isInvalid: !!r,
              isReadOnly: !!s,
              isDisabled: !!o,
              isFocused: !!_,
              onFocus: () => w(!0),
              onBlur: () => w(!1),
              hasFeedbackText: g,
              setHasFeedbackText: y,
              hasHelpText: b,
              setHasHelpText: m,
              id: h,
              labelId: f,
              feedbackId: d,
              helpTextId: p,
              htmlProps: a,
              getHelpTextProps: v,
              getErrorMessageProps: C,
              getRootProps: R,
              getLabelProps: E,
              getRequiredIndicatorProps: S,
            }
          })(r),
          y = (0, c.cx)('chakra-form-control', e.className)
        return (0, h.jsx)(p, {
          value: g,
          children: (0, h.jsx)(f, {
            value: n,
            children: (0, h.jsx)(u.B.div, { ...o({}, t), className: y, __css: n.container }),
          }),
        })
      })
      y.displayName = 'FormControl'
      var b = (0, o.R)(function (e, t) {
        const n = g(),
          r = d(),
          i = (0, c.cx)('chakra-form__helper-text', e.className)
        return (0, h.jsx)(u.B.div, {
          ...(null == n ? void 0 : n.getHelpTextProps(e, t)),
          __css: r.helperText,
          className: i,
        })
      })
      b.displayName = 'FormHelperText'
    },
    1838: (e, t, n) => {
      'use strict'
      n.d(t, { i: () => o })
      var r = n(5043),
        i = n(5270)
      function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        const [n, o] = (0, r.useState)(!1),
          [s, a] = (0, r.useState)(e)
        ;(0, r.useEffect)(() => a(e), [e])
        const { timeout: u = 1500, ...c } = 'number' === typeof t ? { timeout: t } : t,
          l = (0, r.useCallback)(() => {
            const e = i(s, c)
            o(e)
          }, [s, c])
        return (
          (0, r.useEffect)(() => {
            let e = null
            return (
              n &&
                (e = window.setTimeout(() => {
                  o(!1)
                }, u)),
              () => {
                e && window.clearTimeout(e)
              }
            )
          }, [u, n]),
          { value: s, setValue: a, onCopy: l, hasCopied: n }
        )
      }
    },
    6740: (e, t, n) => {
      'use strict'
      n.d(t, { w: () => a })
      var r = n(3768),
        i = n(3226),
        o = n(5043),
        s = n(579)
      function a(e) {
        const { viewBox: t = '0 0 24 24', d: n, displayName: a, defaultProps: u = {} } = e,
          c = o.Children.toArray(e.path),
          l = (0, i.R)((e, i) =>
            (0, s.jsx)(r.I, {
              ref: i,
              viewBox: t,
              ...u,
              ...e,
              children: c.length ? c : (0, s.jsx)('path', { fill: 'currentColor', d: n }),
            }),
          )
        return (l.displayName = a), l
      }
    },
    3734: (e, t, n) => {
      'use strict'
      n.d(t, { X: () => r })
      var r = (0, n(6740).w)({
        displayName: 'BellIcon',
        d: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z',
      })
    },
    160: (e, t, n) => {
      'use strict'
      n.d(t, { U: () => r })
      var r = (0, n(6740).w)({
        displayName: 'CloseIcon',
        d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z',
      })
    },
    9058: (e, t, n) => {
      'use strict'
      n.d(t, { E: () => r })
      var r = (0, n(6740).w)({
        d: 'M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z',
        displayName: 'PhoneIcon',
        viewBox: '0 0 14 14',
      })
    },
    6214: (e, t, n) => {
      'use strict'
      n.d(t, { T: () => r })
      var r = (0, n(6740).w)({
        d: 'M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z',
        displayName: 'CopyIcon',
      })
    },
    7921: (e, t, n) => {
      'use strict'
      n.d(t, { p: () => l })
      var r = n(4617),
        i = n(3226),
        o = n(3761),
        s = n(6254),
        a = n(4550),
        u = n(9254),
        c = n(579),
        l = (0, i.R)(function (e, t) {
          const { htmlSize: n, ...i } = e,
            l = (0, o.o5)('Input', i),
            h = (0, s.MN)(i),
            f = (0, r.t)(h),
            d = (0, u.cx)('chakra-input', e.className)
          return (0, c.jsx)(a.B.input, { size: n, ...f, __css: l.field, ref: t, className: d })
        })
      ;(l.displayName = 'Input'), (l.id = 'Input')
    },
    834: (e, t, n) => {
      'use strict'
      n.d(t, { T: () => s })
      var r = n(1821),
        i = n(3226),
        o = n(579),
        s = (0, i.R)((e, t) => (0, o.jsx)(r.B, { align: 'center', ...e, direction: 'column', ref: t }))
      s.displayName = 'VStack'
    },
    3748: (e, t, n) => {
      'use strict'
      n.d(t, { d: () => a })
      var r = n(7904),
        i = n(3881),
        o = n(2193),
        s = n(5043)
      function a(e) {
        const { theme: t } = (0, o.UQ)(),
          n = (0, r.NU)()
        return (0, s.useMemo)(() => (0, i.UP)(t.direction, { ...n, ...e }), [e, t.direction, n])
      }
    },
  },
])
//# sourceMappingURL=94.c2f5ebec.chunk.js.map
