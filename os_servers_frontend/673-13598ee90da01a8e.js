'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [673],
  {
    3606: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S
        }
      })
      var r = n(5893),
        o = n(9477),
        i = n(7294),
        a = n(2113),
        c = n(1575),
        l = n(8715),
        s = n(6955),
        u = n(7430),
        p = n(1345),
        d = n(1802)
      n(9497)
      let { clamp: y, lerp: h } = o.MathUtils,
        m = (e, t) => e.find((e) => e.name === t),
        f = (e) => {
          let { height: t, model: n, bodyRef: r, headRef: a, playerId: l, api: s, grpRef: u, player: h } = e,
            [f, g] = (0, i.useState)(!1),
            x = (0, i.useRef)(),
            v = (0, i.useRef)(),
            w = (0, i.useRef)(null),
            b = (0, i.useRef)(null)
          return (
            (0, i.useEffect)(() => {
              let e = m(n.skeleton.bones, 'spine001'),
                i = m(n.skeleton.bones, 'spine002'),
                s = m(n.skeleton.bones, 'neck'),
                p = m(n.skeleton.bones, 'head')
              p.keyPlayerId = l
              let h = new o.Object3D(),
                f = new o.Object3D(),
                M = new o.Object3D(),
                V = new o.Object3D()
              e.add(i),
                i.add(s),
                s.add(f),
                f.add(M),
                M.add(V),
                f.add(p),
                h.add(e),
                (p.memoQuaternion = new o.Quaternion()),
                p.memoQuaternion.copy(p.quaternion),
                (i.memoQuaternion = new o.Quaternion()),
                i.memoQuaternion.copy(i.quaternion),
                (p.memoTargetQuaternion = new o.Quaternion()),
                (i.memoTargetQuaternion = new o.Quaternion()),
                (p.memoTargetQuaternion.needUpdateTarget = !0),
                (i.memoTargetQuaternion.needUpdateTarget = !0),
                (p.memoTargetQuaternion.rotateWithoutUpdateCnt = 0),
                (i.memoTargetQuaternion.rotateWithoutUpdateCnt = 0),
                h.scale.set(y(t, 0, 1), t, y(t, 0, 1)),
                f.scale.set(y(1 / t, 1, 1.6), y(1 / t, 1, 1.6), y(1 / t, 1, 1.6))
              let S = new o.Object3D()
              return (
                (r.current = h),
                (a.current = f),
                (b.current = p),
                (w.current = i),
                (x.current = M),
                (v.current = V),
                e.add(S),
                (u.current.objectY = S),
                (u.current.memoTargetPlayerId = null),
                (u.current.needUpdateTarget = !0),
                (u.current.withoutUpdateCnt = 0),
                u.current.add(h),
                l === (0, d.PR)().id &&
                  (0, c.EA)({
                    localModel: n
                  }),
                g(!0),
                () => {
                  u.current && (u.current.remove(S), u.current.remove(h))
                }
              )
            }, [n]),
            (0, p.iD)(u.current, l, x, v, w, b, h),
            null
          )
        }
      var g = n(2359),
        x = n(6038),
        v = n(6086),
        w = n(4219)
      let { damp: b, clamp: M } = o.MathUtils

      function V(e) {
        let { grpRef: t, playerId: n, player: o } = e,
          [p, y, h] = (0, c.WL)((e) => [e.instance, e.animations, e.dummy]),
          m = (0, i.useRef)(),
          V = (0, i.useRef)(),
          S = (0, i.useMemo)(() => {
            let e = g.b.clone(h).getObjectByName('character_mesh_low')
            return e
          }, [n])
        o.skeleton = S
        let [j] = (0, a.dN)(S, y, n, o)
        return (
          (0, l.A)((e, r) => {
            let i = p
            if (!i || !S || !o) return
            j.mixer.update(r)
            let a = s.Fm.indexOf(o)
            if (n === (0, d.PR)().id) {
              let { testExperience: c } = (0, w.VB)()
              c && t.current.updateMatrixWorld()
            }
            if (m.current && o) {
              o.heightLerp = b(o.heightLerp, parseFloat(o.height), 5, r)
              let { heightLerp: l } = o
              m.current.scale.set(M(l, 0, 1), l, M(l, 0, 1)), V.current.scale.setScalar(M(1 / l, 1, 1.6)), s.AJ.resetToDefault()
            }
            o.dirVector.copy(s.AJ).applyQuaternion(t.current.quaternion),
              s.Wv.resetToDefault(),
              o.upVector.copy(s.Wv).applyQuaternion(t.current.quaternion),
              o.eyePosition
                .copy(o.upVector)
                .multiplyScalar((0, s.oC)(n, !0, o))
                .add(t.current.position),
              i.setMatrixAt(a, S.matrixWorld),
              (i.geometry.attributes.height.array[a] = o.heightLerp),
              (o.flyLerp = b(o.flyLerp, o.fly ? 1 : 0, 6, r))
            let { flyLerp: y } = o
            ;(i.geometry.attributes.fly.array[a] = y),
              o.color.toArray(i.geometry.attributes.instanceVColor.array, 3 * a),
              (i.geometry.attributes.holo.array[a] = o.holo),
              i.setBonesAt(a, S.skeleton),
              (0, u.Kn)('postAnimRaf_'.concat(n), r)
          }),
          (0, i.useEffect)(() => {
            n === (0, d.PR)().id &&
              (0, c.EA)({
                characterModel: j
              })
          }, [j]),
          (0, u.zX)('anim_holo_tp_'.concat(n), (e) => {
            let { teleportingOut: t = !1, reset: r = !1, callBack: i = () => {} } = e
            if (!n) return
            if (n === (0, d.PR)().id && (0, d.PR)().skin) {
              let { color: a, height: l } = (0, d.PR)().skin
              ;(0, u.Kn)('update_skin_height_'.concat(n), l), (0, u.Kn)('update_skin_color_'.concat(n), a)
            }
            let { ref: p, instance: y } = (0, c.XV)()
            n === (0, d.PR)().id && p && (p.sleep = !0)
            let h = {
              val: r ? (t ? 0 : 1) : o.holo
            }
            x.ZP.to(h, {
              val: t ? 1 : 0,
              duration: 1,
              ease: 'none',
              onUpdate: () => {
                o.holo = h.val
              },
              onStart: function (e) {
                let t = s.Fm.indexOf(o)
                ;(S.position.y = 0), S.updateMatrixWorld(), y.setMatrixAt(t, S.matrixWorld)
              },
              onComplete: function () {
                let e = s.Fm.indexOf(o)
                ;(S.position.y = 0),
                  S.updateMatrixWorld(),
                  y.setMatrixAt(e, S.matrixWorld),
                  n === (0, d.PR)().id && (0, v.Q2)().physicReady && (p.sleep = !1),
                  i()
              }
            })
          }),
          (0, i.useEffect)(() => {
            if (n === (0, d.PR)().id) {
              let { ref: e, instance: t } = (0, c.XV)(),
                r = s.Fm.indexOf(o)
              ;(o.holo = 0),
                (t.geometry.attributes.holo.array[r] = o.holo),
                (t.geometry.attributes.holo.needsUpdate = !0),
                (S.position.y = 0),
                S.updateMatrixWorld(),
                t.setMatrixAt(r, S.matrixWorld)
            }
          }, [n, o]),
          S && n
            ? (0, r.jsx)(f, {
                model: S,
                height: o ? o.height : 1,
                bodyRef: m,
                headRef: V,
                playerId: n,
                player: o,
                grpRef: t
              })
            : null
        )
      }

      function S(e) {
        let { grpRef: t, playerId: n, player: o } = e,
          [i] = (0, c.WL)((e) => [e.instanceReady])
        return i
          ? (0, r.jsx)(V, {
              grpRef: t,
              playerId: n,
              player: o
            })
          : null
      }
    },
    6924: function (e, t, n) {
      var r = n(7430)
      let o = (e, t) => {
        ;(0, r.zX)('update_skin_height_'.concat(t), (t) => {
          e.height = t
        }),
          (0, r.zX)('update_skin_color_'.concat(t), (t) => {
            e.color.set(t[0], t[1], t[2])
          })
      }
      t.Z = o
    },
    1799: function (e, t, n) {
      let r, o
      n.d(t, {
        Z: function () {
          return b
        }
      })
      var i = n(5893),
        a = n(1802),
        c = n(7430),
        l = n(7294),
        s = n(9477),
        u = n(8715),
        p = n(2473)
      n(5449)
      var d = n(9497)
      let y = (e) => {
        let { borderShape: t, backShape: n, borderColor: r, backgroundColor: o = 3421236, ...a } = e
        return (0, i.jsxs)('mesh', {
          position: [0, 0, 0],
          ...a,
          children: [
            (0, i.jsx)('shapeGeometry', {
              args: [t]
            }),
            (0, i.jsx)(d.Z, {
              color: r
            }),
            (0, i.jsxs)('mesh', {
              position: [0, 0, 0.01],
              children: [
                (0, i.jsx)('shapeGeometry', {
                  args: [n]
                }),
                (0, i.jsx)(d.Z, {
                  color: o
                })
              ]
            })
          ]
        })
      }
      var h = n(6955)
      let m = (e) => {
        let { fontSize: t, text: n, borderColor: a, pseudo: u, pseudoColor: m, ...f } = e,
          g = (0, l.useMemo)(
            () => ({
              widthPeudo: 0,
              widthText: 0,
              maxWidth: 0,
              heightText: 0
            }),
            []
          ),
          x = (0, l.useRef)(null),
          [v, w] = (0, l.useState)({
            borderShape: new s.Shape(),
            backShape: new s.Shape()
          }),
          b = (0, h.y0)().font,
          M = (e) => {
            x.current &&
              x.current.children[e] &&
              x.current.children[e].sync((t) => {
                if (!x.current || !x.current.children[e]) return
                let n = x.current.children[e].geometry._blockBounds
                0 === e
                  ? ((g.widthText = Math.abs(n[0]) + Math.abs(n[2])), (g.heightText = Math.abs(n[1]) + Math.abs(n[3])))
                  : (g.widthPeudo = Math.abs(n[0]) + Math.abs(n[2])),
                  (g.mawWidth = Math.max(g.widthText, g.widthPeudo)),
                  V(),
                  S()
              })
          }
        ;(0, c.zX)('updateFont', (e) => {
          let { font: t } = e
          ;(x.current.children[0].font = t), x.current.children[2] && (x.current.children[2].font = t), M(0), M(2)
        })
        let V = () => {
            ;(x.current.children[0].position.y = g.heightText / 2),
              (x.current.children[0].position.x = -g.mawWidth / 2),
              (x.current.children[1].position.x = 0),
              (x.current.children[1].position.y = 0),
              u && ((x.current.children[2].position.x = -g.mawWidth / 2), (x.current.children[2].position.y = g.heightText / 2))
          },
          S = () => {
            ;(r = new s.Shape()),
              (function (e, t, n, r, o, i) {
                let a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0.75,
                  c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0.6,
                  l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0.2
                ;(r += a),
                  (o += c),
                  (t -= r / 2),
                  (n -= o / 2),
                  e.moveTo(t, n + i),
                  e.lineTo(t, n + o - i),
                  e.quadraticCurveTo(t, n + o, t + i, n + o),
                  e.lineTo(t + r - i, n + o),
                  e.quadraticCurveTo(t + r, n + o, t + r, n + o - i),
                  e.lineTo(t + r, n + l),
                  e.lineTo(t + r - l, n),
                  e.lineTo(t + i, n),
                  e.quadraticCurveTo(t, n, t, n + i)
              })((o = new s.Shape()), 0, 0, g.mawWidth, g.heightText, 0.15),
              (function (e, t, n, r, o, i) {
                let a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0.75,
                  c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0.6,
                  l = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0.15
                ;(r += a), (o += c), (t -= r / 2), (n -= o / 2), e.moveTo(t + r, n + l), e.lineTo(t + r, n), e.lineTo(t + r - l, n), e.lineTo(t + r, n + l)
              })(r, 0, 0, g.mawWidth, g.heightText, 0.15),
              w({
                backShape: o,
                borderShape: r
              })
          }
        return (
          (0, l.useEffect)(() => {
            x.current && ((x.current.children[0]._needsSync = !0), M(0))
          }, [x, n]),
          (0, l.useEffect)(() => {
            x.current && x.current.children[2] && ((x.current.children[2]._needsSync = !0), M(2))
          }, [x, u]),
          (0, i.jsxs)('group', {
            ref: x,
            position: [0, 0, 0.1],
            ...f,
            children: [
              (0, i.jsx)(p.x, {
                position: [0, 0, 0.04],
                color: '#080808',
                textAlign: 'left',
                font: b,
                fontSize: t,
                anchorX: 'left',
                anchorY: 'top',
                text: n,
                children: (0, i.jsx)(d.Z, {
                  color: 526344
                })
              }),
              (0, i.jsx)(y, {
                borderColor: a,
                borderShape: v.borderShape,
                backShape: v.backShape,
                backgroundColor: 16777215
              }),
              u
                ? (0, i.jsx)(p.x, {
                    position: [0, 0, 0.1],
                    color: m,
                    textAlign: 'left',
                    font: b,
                    fontSize: t,
                    anchorX: 'left',
                    anchorY: 'top',
                    text: u,
                    children: (0, i.jsx)(d.Z, {
                      color: m
                    })
                  })
                : null
            ]
          })
        )
      }
      var f = n(5403),
        g = n(4219),
        x = n(619)
      let v = (e) => {
          let { playerId: t, fromNpc: n, player: r } = e,
            o = (0, l.useMemo)(
              () => ({
                w: 0,
                h: 0,
                wn: 0,
                bgw: 0,
                t: 0
              }),
              []
            ),
            [p, d] = (0, l.useState)(new s.Color(16777215)),
            [y, v] = (0, l.useState)(t === (0, a.PR)().id ? (0, a.PR)().name : ''),
            [w, b] = (0, l.useState)(''),
            [M] = (0, x.Z)(['/sounds/npc/pnj-voice-chat-1.opus', '/sounds/npc/pnj-voice-chat-1.mp3'], {
              html5: !0
            }),
            [V] = (0, x.Z)(['/sounds/npc/pnj-voice-chat-2.opus', '/sounds/npc/pnj-voice-chat-2.mp3'], {
              html5: !0
            }),
            [S] = (0, x.Z)(['/sounds/npc/pnj-voice-chat-3.opus', '/sounds/npc/pnj-voice-chat-3.mp3'], {
              html5: !0
            }),
            [j] = (0, x.Z)(['/sounds/npc/pnj-voice-chat-4.opus', '/sounds/npc/pnj-voice-chat-4.mp3'], {
              html5: !0
            }),
            [T] = (0, x.Z)(['/sounds/npc/pnj-voice-chat-5.opus', '/sounds/npc/pnj-voice-chat-5.mp3'], {
              html5: !0
            }),
            B = [M, V, S, j, T],
            [R, C] = (0, l.useState)(!1)
          ;(0, c.zX)('hideMessages_'.concat(t), () => {
            C(!0)
          }),
            (0, c.zX)('message_'.concat(t), (e) => {
              let { messages: i } = e
              n && (0, h.y0)().addToGeneralChat(i[0].message, t)
              let a = '\n'
              o.t = window.performance.now()
              for (let l = 2; l >= 0; l--)
                i[l] && i[l].message && (n || i[l].time + 5e3 > window.performance.now()) && (a += ('\n' !== a ? '\n' : '') + i[l].message)
              B[s.MathUtils.randInt(0, 4)](),
                C(!1),
                (r.hasMessage = !0),
                b(a),
                (0, c.Kn)('hide_name_'.concat(t), {
                  hide: !0
                })
            }),
            (0, c.zX)('update_name_'.concat(t), (e) => {
              v(e)
            }),
            (0, c.zX)('update_skin_color_'.concat(t), (e) => {
              d(n ? p.set('#16EBEB') : f.OV[e[2]])
            }),
            (0, l.useEffect)(() => {
              R &&
                ((r.hasMessage = !1),
                b(''),
                (0, c.Kn)('hide_name_'.concat(t), {
                  hide: !1
                }))
            }, [t, R]),
            (0, u.A)(() => {
              !n && !R && o.t && o.t + 5e3 < window.performance.now() && C(!0)
            })
          let P = (0, g.N1)((e) => e.testExperience)
          return (0, i.jsx)(i.Fragment, {
            children:
              w && P
                ? (0, i.jsx)(m, {
                    'position-y': 1,
                    text: w,
                    fontSize: 0.25,
                    borderColor: n ? '#16EBEB' : p,
                    pseudo: y.toUpperCase(),
                    pseudoColor: n ? '#1b5a5a' : p
                  })
                : null
          })
        },
        w = (e) => {
          let { playerId: t, player: n, grpRef: r, fromNpc: o = !1 } = e,
            c = (0, l.useRef)(null),
            s = (0, a.LM)((e) => e.id),
            p = (0, l.useMemo)(() => h.Fm.find((e) => s === e.playerId), [s])
          return (
            (0, u.A)((e) => {
              let { camera: o } = e
              c.current &&
                r.current &&
                n.hasMessage &&
                (c.current.position.set(0, 0, 0),
                h.Wv.resetToDefault(),
                c.current.position.add(h.Wv.multiplyScalar((0, h.oC)(t) + 0.2).applyQuaternion(r.current.quaternion)),
                n.upVector.angleTo(p.upVector) < Math.PI / 6
                  ? (c.current.children[0].children[0].up.copy(n.upVector),
                    c.current.children[0].children[0].lookAt(o.position),
                    (c.current.children[0].rotation.y = 0))
                  : (c.current.quaternion.copy(r.current.quaternion),
                    o.directionVector &&
                      (o.directionVector.set(0, 0, -1),
                      o.directionVector.applyQuaternion(o.quaternion),
                      o.directionVector.subVectors(o.position, r.current.position),
                      o.directionVector.angleTo(n.dirVector) > Math.PI / 2
                        ? (c.current.children[0].rotation.y = -Math.PI)
                        : (c.current.children[0].rotation.y = 0)),
                    c.current.children[0].children[0].rotation.set(0, 0, 0)))
            }),
            (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)('group', {
                ref: c,
                children: (0, i.jsx)('group', {
                  children: (0, i.jsx)('group', {
                    children: (0, i.jsx)(v, {
                      playerId: t,
                      player: n,
                      fromNpc: o
                    })
                  })
                })
              })
            })
          )
        }
      var b = w
    },
    5110: function (e, t, n) {
      n.d(t, {
        C: function () {
          return a
        }
      })
      var r = n(9477)
      let { clamp: o } = r.MathUtils,
        i = (e, t, n) => (n - t == 0 ? 1 : o((e - t) / (n - t), 0, 1))

      function a(e, t, n) {
        return e * (1 - n) + t * n
      }
      t.Z = i
    },
    5403: function (e, t, n) {
      n.d(t, {
        OV: function () {
          return r
        },
        TD: function () {
          return o
        }
      }),
        (t.ZP =
          '\n\nconst vec3 palettePrimary[10] = vec3[10](\n  vec3(1.),\n  vec3(1.,0.149,0.149),\n  vec3(1.,0.63,0.39),\n  vec3(0.227,0.91,0.627),\n  vec3(0.106,0.914,0.914),\n  vec3(0.067,0.702,0.929),\n  vec3(0.227,0.329,0.439),\n  vec3(0.675,0.318,0.91),\n  vec3(0.89,0.169,0.604),\n  vec3(0.141,0.141,0.141)\n);\n\nconst vec3 paletteSecondary[10] = vec3[10](\n  vec3(0.945,0.945,0.945),\n  vec3(0.996,0.,0.),\n  vec3(0.078,0.651,1.),\n  vec3(0.435,0.647,0.49),\n  vec3(0.,0.322,0.129),\n  vec3(1.,0.369,0.),\n  vec3(0.961,0.882,0.498),\n  vec3(0.812,0.812,0.812),\n  vec3(0.702,0.702,0.702),\n  vec3(0.071,0.071,0.071)\n);\n\nconst vec3 paletteEmissive[10] = vec3[10](\n  vec3(0.922,0.463,0.424),\n  vec3(0.996,0.,0.),\n  vec3(1.,1.,0.1),\n  vec3(0.,0.996,0.035),\n  vec3(0.09,0.91,0.914),\n  vec3(0.,0.122,0.812),\n  vec3(1.,0.,0.557),\n  vec3(0.89,0.169,0.604),\n  vec3(0.141,0.141,0.141),\n  vec3(0.3,0.3,0.3)\n);\n\nconst vec3 paletteNpcPrimary[1] = vec3[1](\n  vec3(0.812,0.341,0.098)\n);\n\nconst vec3 paletteNpcSecondary[1] = vec3[1](\n  vec3(0.,0.,0.)\n);\n\nconst vec3 paletteNpcEmissive[1] = vec3[1](\n  vec3(0.973,1.,0.)\n);\n\nvec3 getPrimary(int num) {\n  return num > 9 ? paletteNpcPrimary[num-10] : palettePrimary[num];\n}\n\nvec3 getSecondary(int num) {\n  return num > 9 ? paletteNpcSecondary[num-10] : paletteSecondary[num];\n}\n\nvec3 getEmissive(int num) {\n  return num > 9 ? paletteNpcEmissive[num-10] : paletteEmissive[num];\n}\n')
      let r = ['#fff', '#fd0000', '#ffff19', '#01ff18', '#1be9e9', '#0154ff', '#ff008e', '#ff6dff', '#606060', '#c5c5c5'],
        o = [
          [0.922, 0.463, 0.424],
          [0.996, 0, 0],
          [1, 1, 0.1],
          [0, 0.996, 0.035],
          [0.09, 0.91, 0.914],
          [0, 0.122, 0.812],
          [1, 0, 0.557],
          [0.89, 0.169, 0.604],
          [0.141, 0.141, 0.141],
          [0.3, 0.3, 0.3]
        ]
    },
    3865: function (e, t, n) {
      n.d(t, {
        Bf: function () {
          return c
        },
        om: function () {
          return l
        }
      })
      var r = n(4671),
        o = n(374),
        i = n(8597)
      let a = (0, r.Z)(
          (0, i.tJ)(
            (e, t) => ({
              videoQuality: 1,
              isUserChoice: !1
            }),
            {
              name: 'sougen-video',
              getStorage: () => localStorage
            }
          )
        ),
        c = (e) => a(e, o.Z)
      Object.assign(c, a)
      let { getState: l, setState: s } = a
    },
    2964: function (e, t, n) {
      n.d(t, {
        SG: function () {
          return a
        }
      })
      var r = n(9477)
      new r.Vector3()
      let o = new r.Vector3(),
        i = new r.Quaternion()

      function a(e, t) {
        return e.matrixWorld.decompose(t, i, o), t
      }
    },
    9796: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w
        },
        h: function () {
          return v
        }
      })
      var r = n(5893),
        o = n(9477),
        i = n(8715),
        a = n(7430),
        c = n(7294),
        l = n(111),
        s = n(9637),
        u = n(2473)
      n(6955)
      var p = n(1802),
        d = n(9497)
      let y = (e, t) => ''.concat((Math.round(e * Math.pow(10, t || 2)) / Math.pow(10, t || 2)).toFixed(t || 2)),
        h = (e) => {
          let { entity: t } = e,
            n = (0, c.useRef)(null),
            a = (0, c.useRef)(null),
            l = (0, c.useMemo)(() => new o.Vector3(), [])
          return (
            (0, i.A)((e) => {
              let { camera: r } = e,
                o = n.current,
                i = a.current
              if (t.geometry && !t.geometry.boundingBox) return
              let c = t.radius || Math.abs(t.geometry.boundingBox.min.y - t.geometry.boundingBox.max.y) / 2
              t.userData.ref.getWorldPosition(l), (l.y += c), o.position.copy(l)
              let s = [l.x, l.y - c, l.z],
                u = t.position.toArray()
              if (!t.api) return
              let {
                  castVelocity: d,
                  velocity: h,
                  force: m,
                  onGround: f,
                  mass: g,
                  restitution: x,
                  friction: v,
                  isColliding: w,
                  isJumping: b,
                  canJump: M,
                  hitWall: V,
                  isFlying: S,
                  isFalling: j,
                  isFlyingBack: T,
                  isSliding: B,
                  deltaPosition: R,
                  collider: C,
                  deltaPositionBetweenRaf: P
                } = t.api,
                z = h.toArray(),
                W = R.toArray(),
                _ = P.toArray(),
                k = m.toArray(),
                Z = t.userData.ref,
                A = 'Type: '.concat(t.type, ' - ')
              t.parent &&
                Z.entityGroupRef &&
                (A +=
                  'Parent: '.concat(Z.entityGroupRef.name !== t.parent.name ? t.parent.name : 'scene') +
                  '\n      Mass: '
                    .concat(g, ' | Restitution: ')
                    .concat(x, ' | Fric: ')
                    .concat(Math.round(1e4 * v) / 1e4, '\n    ')),
                u && (A += 'Position BVH:'.concat(y(u[0]), ',').concat(y(u[1]), ',').concat(y(u[2]))),
                s && (A += '\n      Position:'.concat(y(s[0]), ',').concat(y(s[1]), ',').concat(y(s[2]))),
                d && (A += 'Cast Velocity:'.concat(y(d[0]), ',').concat(y(d[1]), ',').concat(y(d[2]))),
                z && (A += '\n      Velocity:'.concat(y(z[0]), ',').concat(y(z[1]), ',').concat(y(z[2]))),
                W && (A += '\n      deltaPosition:'.concat(y(W[0], 3), ',').concat(y(W[1], 3), ',').concat(y(W[2], 3))),
                _ && (A += '\n      deltaPositionBetweenRaf:'.concat(y(_[0], 3), ',').concat(y(_[1], 3), ',').concat(y(_[2], 3))),
                k && (A += '\n      Force:'.concat(y(k[0]), ',').concat(y(k[1]), ',').concat(y(k[2]))),
                (A +=
                  '\n    '.concat(w ? 'collide' : '', ' - ') +
                  ''.concat(f ? 'ground' : '', ' - ') +
                  ''.concat(M ? 'canJump' : '', ' - ') +
                  ''.concat(V ? 'hitWall' : '', ' - ') +
                  ''.concat(b ? 'jumping' : '', ' - ') +
                  ''.concat(S ? 'flying' : '', ' - ') +
                  ''.concat(j ? 'falling' : '', ' - ') +
                  ''.concat(T ? 'flyingback' : '', ' - ') +
                  ''.concat(B ? 'sliding' : '') +
                  ''.concat(t.api.sleep ? 'sleep' : '')),
                C && (A += ''.concat(C.api.slide ? 'slide' : '')),
                t && t.api.zones && (A += '\n      '.concat(Object.keys(t.api.zones))),
                (A += '\n    anim: '.concat(Object.keys((0, p.PR)().instance.activAnimations).join())),
                (i.text = A)
            }),
            (0, r.jsx)(s.V, {
              ref: n,
              renderOrder: 999,
              children: (0, r.jsx)(u.x, {
                ref: a,
                color: 0,
                textAlign: 'left',
                anchorX: 'center',
                anchorY: 'bottom',
                fontSize: 0.3,
                'position-y': 2,
                lineHeight: 1.4,
                maxWidth: 8,
                outlineColor: 39168,
                outlineWidth: '15%',
                children: (0, r.jsx)(d.Z, {
                  depthTest: !1,
                  depthWrite: !1,
                  attach: 'material',
                  side: o.DoubleSide
                })
              })
            })
          )
        },
        m = (e) => {
          let { bodies: t, params: n, debugMaterial: o, debug: i } = (0, c.useContext)(v)
          return (0, r.jsx)('group', {
            renderOrder: 9999,
            children: t.current.dynamic.map((e) =>
              (0, r.jsx)(
                h,
                {
                  entity: e
                },
                e.uuid
              )
            )
          })
        }
      var f = n(3693),
        g = n(3320),
        x = n(4219)
      let v = (0, c.createContext)({})

      function w(e) {
        let {
            children: t,
            steps: n = 5,
            gravity: o = [0, -9.806, 0],
            tolerance: s = 0.001,
            iterations: u = 5,
            throttled: p = 100,
            paused: y = !1,
            autoPauseOnPageInactive: h = !0,
            simulationSpeed: g = 1,
            debug: w = {
              physic: !1,
              bvh: !1,
              infos: !1
            }
          } = e,
          b = (0, c.useRef)({
            static: [],
            dynamic: [],
            zone: []
          }),
          M = (0, c.useRef)(y),
          V = (0, c.useMemo)(
            () => ({
              bodies: b,
              params: {
                steps: n,
                gravity: o,
                simulationSpeed: g,
                tolerance: s,
                iterations: u
              },
              debug: w,
              debugMaterial: new d.w({
                wireframe: !0,
                color: 255,
                opacity: 0.5,
                transparent: !0
              })
            }),
            [b, n, o, g, w, s, u]
          ),
          S = (0, c.useCallback)(
            (0, l.Z)((e) => {
              ;(0, a.Kn)('physicRafThrottled')
            }, p),
            [p]
          ),
          j = (0, f.Z)()
        ;(0, c.useEffect)(() => {
          h && (M.current = !j)
        }, [j, h, M]),
          (0, i.A)(S)
        let T = (0, i.z)((e) => e.clock),
          B = 0,
          R = (0, c.useCallback)(
            (0, l.Z)((e) => {
              let { testExperience: t } = (0, x.VB)()
              if (!y && !M.current && t) {
                let r = T.getElapsedTime() - B,
                  o = Math.floor(Math.min(n * (r / 0.016666666666666666) * 1, 60)),
                  i = Math.min(r, 1)
                for (let c = 1; c <= o; c++)
                  (0, a.Kn)('physicUpdateRaf', {
                    delta: i / o
                  }),
                    (0, a.Kn)('physicCollideRaf', {
                      delta: i / o
                    }),
                    (0, a.Kn)('physicResolveRaf', {
                      delta: i / o
                    }),
                    (0, a.Kn)('physicDebugInfosRaf', {
                      delta: i / o
                    })
              }
              B = T.getElapsedTime()
            }, 16.666666666666668),
            [y, M.current]
          )
        return (
          (0, i.A)(R, -1),
          (0, r.jsxs)(v.Provider, {
            value: V,
            children: [t, w.infos && (0, r.jsx)(m, {})]
          })
        )
      }
      ;(o.BufferGeometry.prototype.computeBoundsTree = g.Xy), (o.BufferGeometry.prototype.disposeBoundsTree = g.sn), (o.Mesh.prototype.raycast = g.uL)
    },
    2746: function (e, t, n) {
      var r = n(9477),
        o = n(7294),
        i = n(788),
        a = n(9796),
        c = n(7430),
        l = n(8715)
      let s = (e, t) => {
        let n = (0, l.z)((e) => e.scene),
          { debug: s } = (0, o.useContext)(a.h),
          u = (0, o.useRef)(null)
        return (
          (0, o.useEffect)(() => {
            if (!e) return
            let o = e.physic
            if (o)
              return (
                (o.visible = s.physic),
                s.bvh &&
                  ((u.current = new i.y(o, 10)),
                  (u.current.displayParents = !1),
                  (u.current.edgeMaterial.color = new r.Color(t || 16711680)),
                  n.add(u.current)),
                () => {
                  u.current && (u.current.dispose(), n.remove(u.current))
                }
              )
          }, [e, s.physic, s.bvh]),
          (0, c.zX)('physicDebugInfosRaf', () => {
            s.bvh && u.current && u.current.update()
          }),
          null
        )
      }
      t.Z = s
    },
    317: function (e, t, n) {
      n.d(t, {
        r: function () {
          return b
        }
      })
      var r = n(9477),
        o = n(7294),
        i = n(9796),
        a = n(8715),
        c = n(1304),
        l = n(8667),
        s = n(7430)
      let u = new r.Vector3(0, 1, 0),
        p = (e, t, n) => [t.x * e, t.y * e, t.z * e],
        d = new r.Vector3(),
        y = new r.Vector3(),
        h = new r.Vector3(),
        m = new r.Vector3(),
        f = new r.Quaternion()
      var g = n(2746)
      new r.Vector3(), new r.Quaternion()
      let x = new r.Matrix4()
      var v = n(2964)
      new r.Quaternion()
      var w = n(1575)
      let b = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {
                    type: 'static',
                    name: null,
                    entity: null,
                    friction: 0.08,
                    sleep: !1,
                    enabled: !1,
                    zoneIds: [0],
                    hitbox: null,
                    matrixUpdate: !1,
                    castVelocity: null
                  },
            n = (0, a.z)((e) => e.scene),
            b = {
              type: 'static',
              mass: 'static' === t.type ? 0 : 1,
              restitution: 1,
              slide: !1,
              zones: {},
              onBeforePhysicRaf: null,
              onAfterPhysicRaf: null,
              entity: null,
              position: null,
              friction: 0.008,
              defaultFriction: 0.008,
              slidingFriction: 8e-4,
              sleep: !1,
              capsuleInfo: {
                radius: 1,
                segment: new r.Line3(new r.Vector3(0, 0, 0), new r.Vector3(0, -1, 0))
              },
              ...t
            },
            { bodies: S, debugMaterial: j, debug: T } = (0, o.useContext)(i.h),
            B = (0, o.useMemo)(() => new r.Vector3(), []),
            R = (0, o.useMemo)(() => new r.Vector3(), []),
            C = (0, o.useMemo)(() => new r.Vector3(), []),
            P = (0, o.useMemo)(() => new r.Vector3(), []),
            z = (0, o.useMemo)(() => new r.Vector3(), []),
            W = (0, o.useMemo)(() => new r.Vector3(), []),
            _ = (0, o.useMemo)(() => new r.Group(), []),
            k = (0, o.useRef)({
              tempVector: C,
              tempVector2: P,
              onGround: !1,
              canJump: !1,
              canFly: !1,
              hitWall: !1,
              slide: !1,
              isJumping: !1,
              isFalling: !1,
              isMoving: !1,
              isFlying: !1,
              isFlyingBack: !1,
              isTeleporting: !1,
              isSliding: !1,
              deltaPosition: z,
              deltaPositionBetweenRaf: W,
              force: B,
              velocity: R,
              acceleration: [0, 0, 0],
              isColliding: !1,
              collider: null,
              castVelocity: null,
              ...b
            })
          return (
            (0, o.useEffect)(() => {
              let t = e.current,
                o = S.current,
                i = k.current
              if (!t) return
              let { characterModel: a } = (0, w.XV)()
              if (((_.name = i.name || 'entity_'.concat(a ? a.ref.uuid : 'character')), i.hitbox)) {
                let s = new r.Box3().setFromObject(t),
                  u = new r.Vector3()
                s.getCenter(u)
                let p = s.getBoundingSphere(new r.Sphere(u)),
                  d = new r.SphereGeometry(p.radius / 4, 8, 8)
                d.scale(1, 2, 1),
                  (d.boundsTree = new c.r(d, {
                    lazyGeneration: !1
                  })),
                  (t.physic = new r.Mesh(d, j))
              } else if (t instanceof r.Group) {
                let y = []
                if (
                  (t.updateMatrixWorld(),
                  t.traverse((e) => {
                    if (e.geometry) {
                      let t = e.geometry.clone()
                      for (let n in (t.applyMatrix4(e.matrixWorld), t.attributes)) 'position' !== n && t.deleteAttribute(n)
                      y.push(t)
                    }
                  }),
                  0 === y.length)
                )
                  return
                let h = (0, l.qf)(y, !1)
                ;(h.boundsTree = new c.r(h, {
                  lazyGeneration: !1
                })),
                  (t.physic = new r.Mesh(h, j))
              } else if (t instanceof r.Mesh) {
                t.updateMatrixWorld()
                let m = t.geometry.clone()
                m.applyMatrix4(t.matrixWorld),
                  (m.boundsTree = new c.r(m, {
                    lazyGeneration: !1
                  })),
                  (t.physic = new r.Mesh(m, j))
              }
              return (
                'dynamic' === i.type &&
                  (M(t.physic, j),
                  V(t.physic, j),
                  i.position && (i.position[1] += 2),
                  t.physic.position.copy(t.position),
                  (t.physic.transformer = new r.Object3D()),
                  (t.physic.quaternionGravity = new r.Quaternion()),
                  (t.physic.positionGravity = new r.Vector3()),
                  t.quaternion.length() > 0 && t.physic.quaternion.copy(t.quaternion),
                  (t.physic.position.y += 2),
                  (window.player = t)),
                (t.physic.visible = T.physic),
                (t.physic.type = i.type),
                (t.physic.api = k.current),
                (t.physic.api.entity = t),
                (t.physic.userData.ref = t),
                o[i.type].push(t.physic),
                n.add(t.physic),
                () => {
                  t.physic.wallBox && t.physic.remove(t.physic.wallBox),
                    t.physic.jumpBox && t.physic.remove(t.physic.jumpBox),
                    n.remove(t.physic),
                    (o[i.type] = o[i.type].filter(function (e) {
                      return e.uuid !== t.physic.uuid
                    }))
                }
              )
            }, [e.current]),
            (0, o.useEffect)(() => {
              let t = e.current
              t && t.physic && (t.physic.visible = T.physic)
            }, [T.physic]),
            !(function (e, t) {
              let { params: n } = (0, o.useContext)(i.h)
              ;(0, s.zX)('physicUpdateRaf', (r) => {
                let { delta: o } = r
                if (!e) return
                let { friction: i, mass: a, sleep: c, velocity: l, force: s, type: g, onBeforePhysicRaf: x } = e,
                  { acceleration: v, gravityAcceleration: w } = e
                if (!t || !t.physic) return
                let { physic: b } = t
                'dynamic' !== g ||
                  c ||
                  (b.orbital ? (d.copy(b.position), d.sub(b.orbital), d.normalize()) : b.attractor ? d.copy(b.attractor) : d.copy(u),
                  h.copy(d),
                  y.copy(u),
                  f.setFromUnitVectors(y, h),
                  m.copy(h),
                  m.multiplyScalar(-a),
                  m.toArray(n.gravity),
                  f.multiply(b.transformer.quaternion),
                  b.quaternionGravity.slerpQuaternions(b.quaternionGravity, f, 10 * o),
                  h.applyQuaternion(b.quaternionGravity),
                  b.positionGravity.add(h),
                  b.quaternion.copy(b.quaternionGravity)),
                  x &&
                    x(
                      {
                        entity: t,
                        physic: b,
                        api: e
                      },
                      o
                    ),
                  'dynamic' !== g ||
                    c ||
                    ((v = p(a, s, n.gravity)),
                    (l.x = l.x - l.x * i),
                    (l.z = l.z - l.z * i),
                    (l.y = l.y - l.y * i),
                    (l.x += (o * v[0]) / a),
                    (l.y += (o * v[1]) / a),
                    (l.z += (o * v[2]) / a),
                    e.deltaPosition.copy(l),
                    b.translateX(l.x * o),
                    b.translateY(l.y * o),
                    b.translateZ(l.z * o),
                    b.updateMatrixWorld())
              })
            })(k.current, e.current),
            !(function (e, t) {
              let { debug: n, bodies: a } = (0, o.useContext)(i.h),
                c = (0, o.useMemo)(() => new r.Box3(), []),
                l = (0, o.useMemo)(() => new r.Line3(), []),
                u = (0, o.useMemo)(() => new r.Matrix4(), []),
                p = (0, o.useMemo)(() => new r.Matrix4(), []),
                d = (0, o.useMemo)(() => new r.Matrix4(), []),
                y = (0, o.useMemo)(() => new r.Vector3(), [])
              ;(0, s.zX)('physicCollideRaf', (n) => {
                let { delta: o } = n,
                  { velocity: i, capsuleInfo: s, type: h, tempVector: m, tempVector2: f, sleep: g } = e
                if (((e.isColliding = !1), 'static' === h || g || !t || !t.physic)) return
                let { physic: v } = t
                if (!v) return
                c.makeEmpty(), e.collider && u.copy(e.collider.matrixWorld).invert()
                let w = !1,
                  b = !1,
                  M = a.current
                if (M) {
                  l.copy(s.segment),
                    l.start.applyMatrix4(v.matrixWorld),
                    l.end.applyMatrix4(v.matrixWorld),
                    c.expandByPoint(l.start),
                    c.expandByPoint(l.end),
                    c.min.addScalar(-s.radius),
                    c.max.addScalar(s.radius)
                  for (let V = 0; V < M.static.length; V++) {
                    let S = M.static[V]
                    if (!S.api.enabled) continue
                    let j = l.clone(),
                      T = c.clone()
                    if (
                      (S.api.matrixUpdate &&
                        (d.copy(S.matrix).invert(), j.start.applyMatrix4(d), j.end.applyMatrix4(d), T.min.applyMatrix4(d), T.max.applyMatrix4(d)),
                      S && !S.api.sleep && S.geometry.boundsTree)
                    ) {
                      if (v.jumpBox.geometry) {
                        let B = v.jumpBox.geometry.boundingBox.clone()
                        S.api.matrixUpdate && B.applyMatrix4(d)
                        let R = S.geometry.boundsTree.intersectsBox(B, v.matrixWorld)
                        R && (w = !0)
                      }
                      if (v.wallBox.geometry) {
                        let C = v.wallBox.geometry.boundingBox.clone()
                        S.api.matrixUpdate && C.applyMatrix4(d)
                        let P = S.geometry.boundsTree.intersectsBox(C, v.matrixWorld)
                        P && (b = !0)
                      }
                      let z = new r.Vector3()
                      v.geometry.boundingBox.getCenter(z),
                        S.geometry.boundsTree.shapecast({
                          intersectsBounds: (e) => e.intersectsBox(T),
                          intersectsTriangle: (t, n, r, o) => {
                            let i = t.closestPointToSegment(j, m, f)
                            if (i < s.radius) {
                              let a = s.radius - i,
                                c = f.sub(m)
                              S.api.isSticky ? (e.entity.physic.attractor = c.normalize()) : (e.entity.physic.attractor = null),
                                l.start.addScaledVector(c, a),
                                l.end.addScaledVector(c, a),
                                (e.isColliding = !0),
                                (e.isFlying = !1),
                                (e.collider = S),
                                (S.api.isColliding = !0)
                            }
                          }
                        })
                    }
                  }
                  if (((e.canJump = w), (e.canFly = e.canFly ? e.canFly : e.canJump), (e.hitWall = b), e.isColliding || (e.collider = null), e.collider)) {
                    let { matrixUpdate: W, castVelocity: _ } = e.collider.api
                    W && (p.copy(e.collider.matrixWorld).invert(), l.start.applyMatrix4(p)),
                      _ && e.isColliding && (y.set(0, 0, 0), i.add(y.set(_[0], _[1], _[2])), (e.isColliding = !1), (e.collider = null))
                  }
                  ;(function (e, t, n) {
                    for (let o = 0; o < e.zone.length; o++) {
                      let i = e.zone[o]
                      if (!i.api.enabled) continue
                      let a = t.clone()
                      if (
                        (i.api.matrixUpdate && (x.copy(i.matrixWorld).invert(), a.min.applyMatrix4(x), a.max.applyMatrix4(x)),
                        i && i.geometry.boundsTree && i.geometry.boundsTree.geometry)
                      ) {
                        let c = !1
                        if (i.geometry instanceof r.BoxGeometry) {
                          let l = i.geometry.boundsTree.geometry.boundingBox
                          l && (c = l.containsBox(a))
                        } else
                          i.geometry.boundsTree.shapecast({
                            intersectsBounds: (e) => (c || (c = e.intersectsBox(a)), c)
                          })
                        c
                          ? !n.zones[i.name] &&
                            i.api &&
                            i.api.onEnterZone &&
                            (i.api.onEnterZone({
                              collider: i
                            }),
                            (n.zones[i.name] = i))
                          : n.zones[i.name] &&
                            i.api &&
                            i.api.onLeaveZone &&
                            (i.api.onLeaveZone({
                              collider: i
                            }),
                            delete n.zones[i.name])
                      }
                    }
                  })(M, c, e),
                    m.copy(l.start)
                }
              })
            })(k.current, e.current),
            !(function (e, t) {
              let { params: n } = (0, o.useContext)(i.h),
                a = (0, o.useMemo)(() => new r.Vector3(), []),
                c = (0, o.useMemo)(() => new r.Vector3(), []),
                l = (0, o.useMemo)(() => new r.Vector3(), [])
              ;(0, o.useMemo)(() => new r.Vector3(), []),
                (0, o.useMemo)(() => new r.Object3D(), []),
                (0, s.zX)('physicCollideRaf', (n) => {
                  let { delta: r } = n,
                    { isMoving: o, type: i, initPosition: s, tempVector: u, collider: p, sleep: d, tempVector2: y, onAfterPhysicRaf: h } = e
                  if (!t || !t.physic) return
                  let { physic: m } = t
                  if ((a.set(0, 0, 0), 'dynamic' === i && !d)) {
                    p && u.applyMatrix4(p.matrixWorld),
                      s ? ((0, v.SG)(m, l), y.subVectors(u, l)) : (y.set(0, 0, 0), (e.initPosition = !0)),
                      (e.onGround = y.y > Math.abs(r * e.velocity.y * 0.05))
                    let f = Math.max(0, y.length() - 1e-5)
                    y.normalize().multiplyScalar(f)
                    let g = c.copy(y).multiplyScalar(2 * e.velocity.dot(y))
                    e.velocity.sub(g), m.position.add(y), y.normalize(), y.dot(e.velocity), o || e.isFlying || e.isSliding || !e.onGround || e.velocity.copy(a)
                  }
                  h &&
                    h(
                      {
                        entity: t,
                        physic: m,
                        api: e,
                        deltaVector: y
                      },
                      r
                    )
                })
            })(k.current, e.current),
            (0, g.Z)(e.current),
            [k.current]
          )
        },
        M = (e, t) => {
          let n = e.geometry.boundingBox.clone()
          n.translate(new r.Vector3(0, -2, 0))
          let o = new r.Vector3().subVectors(n.max, n.min),
            i = new r.BoxGeometry(o.x, o.y, o.z)
          i.scale(0.5, 1, 0.5)
          let a = new r.Matrix4().setPosition(o.addVectors(n.min, n.max).multiplyScalar(0.5))
          i.applyMatrix4(a), (i.boundsTree = new c.r(i)), (e.jumpBox = new r.Mesh(i, t)), e.add(e.jumpBox), (e.jumpBox.visible = !0)
        },
        V = (e, t) => {
          let n = e.geometry.boundingBox.clone()
          n.translate(new r.Vector3(0, -4.5, 3))
          let o = new r.Vector3().subVectors(n.max, n.min),
            i = new r.ConeGeometry(2.5, 10, 10),
            a = new r.Matrix4().setPosition(o.addVectors(n.min, n.max).multiplyScalar(0.5))
          i.applyMatrix4(a),
            i.rotateX(-Math.PI / 2),
            i.scale(1, 0.25, 0.35),
            (i.boundsTree = new c.r(i)),
            (e.wallBox = new r.Mesh(i, t)),
            e.add(e.wallBox),
            (e.wallBox.visible = !0)
        }
    },
    6086: function (e, t, n) {
      n.d(t, {
        Q2: function () {
          return c
        },
        c1: function () {
          return a
        },
        jF: function () {
          return l
        }
      })
      var r = n(4671),
        o = n(374)
      let i = (0, r.Z)((e, t) => ({
          gravity: [0, -9.806, 0],
          bvh: !1,
          physic: !1,
          infos: !1,
          paused: !0,
          simulationSpeed: 1,
          physicReady: !1
        })),
        a = (e) => i(e, o.Z)
      Object.assign(a, i)
      let { getState: c, setState: l } = i
    },
    9497: function (e, t, n) {
      n.d(t, {
        w: function () {
          return u
        }
      })
      var r = n(5893),
        o = n(9477),
        i = n(7597),
        a = n.n(i),
        c = n(7294),
        l = n(8715),
        s = n(5878)
      class u extends o.MeshBasicMaterial {
        onBeforeCompile(e) {
          ;(e.fragmentShader = '\n      layout(location = 1) out vec4 gBloom;\n     '.concat(e.fragmentShader, '\n    ')),
            (e.fragmentShader = e.fragmentShader.replace('#include <fog_fragment>', '\n      #include <fog_fragment>\n      gBloom.rgb = vec3(0.);\n      '))
        }
        constructor(e = {}) {
          super(e), this.setValues(e)
        }
      }
      ;(u.key = a().generate()),
        (0, l.e)({
          UtsuboBasicImpl: u
        })
      let p = c.forwardRef((e, t) => {
        let { children: n, ...i } = e,
          a = c.useRef(null)
        return (0, r.jsx)(
          'utsuboBasicImpl',
          {
            ref: (0, s.Z)([a, t]),
            glsl: o.GLSL3,
            side: o.FrontSide,
            ...i,
            attach: 'material',
            children: n
          },
          u.key
        )
      })
      t.Z = p
    },
    318: function (e) {
      e.exports = JSON.parse('{"msg_1_0":"Crossing this gate might affect the microverse."}')
    }
  }
])
