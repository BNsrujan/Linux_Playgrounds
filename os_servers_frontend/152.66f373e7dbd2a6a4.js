'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [152],
  {
    9152: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return nP
          }
        })
      var o = t(5893),
        r = t(6955),
        i = t(5495),
        a = t(587),
        l = t(8715),
        s = t(5029),
        c = t(7294),
        u = t(9477),
        m = t(317),
        f = t(7430),
        d = t(1802),
        v = t(1575),
        g = t(3606),
        p = t(2113),
        h = t(4219)
      let x = (e) => {
        d.LM.getState().skin
        let n = setTimeout(() => {})
        setTimeout(() => {})
        let t = (0, c.useMemo)(() => {
          let n = null
          return e && (n = r.Fm.find((n) => e === n.playerId)), n
        }, [e])
        ;(0, l.A)(() => {
          let {
              deltaPositionBetweenRaf: o,
              isSliding: i,
              onGround: a,
              canJump: l,
              velocity: s,
              isFlyingBack: c,
              isJumping: u,
              isFlying: m,
              isTeleporting: d,
              isFalling: g,
              hitWall: x
            } = (0, v.XV)().ref,
            { isIdle: y, isAfk: b, controls: w, outOfBoundCount: _, isCustomising: C } = (0, r.y0)(),
            F = (0, h.VB)().testExperience
          if (r.QF.gameplay.value < 0.01 && !F) {
            t.fly = !1
            return
          }
          if (F && e && !d && t) {
            if (
              (c ||
                !u ||
                t.activAnimations.jump ||
                t.activAnimations.jump_mirror ||
                ((0, f.Kn)('anim_'.concat(e), {
                  name: 'jump' + (0.5 > Math.random() ? '_mirror' : ''),
                  blendDuration: 0.1,
                  reset: !0,
                  timeScale: p.MQ.jump
                }),
                (0, f.Kn)('anim_pet_'.concat(e), {
                  name: 'Flying',
                  blendDuration: 0.1,
                  timeScale: 1,
                  startAt: 0.5
                })),
              c ||
                !m ||
                t.activAnimations.glide ||
                t.activAnimations.glide_mirror ||
                ((0, f.Kn)('anim_'.concat(e), {
                  name: 'glide' + (0.5 > Math.random() ? '_mirror' : ''),
                  blendDuration: 0.25,
                  timeScale: p.MQ.glide
                }),
                (0, f.Kn)('anim_pet_'.concat(e), {
                  name: 'Idle_5',
                  blendDuration: 0
                })),
              c ||
                !i ||
                t.activAnimations.slide ||
                t.activAnimations.slide_mirror ||
                ((0, f.Kn)('anim_'.concat(e), {
                  name: 'slide' + (0.5 > Math.random() ? '_mirror' : ''),
                  blendDuration: 0.3,
                  timeScale: p.MQ.slide
                }),
                (0, f.Kn)('anim_pet_'.concat(e), {
                  name: 'Sliding'
                })),
              !c ||
                t.activAnimations.glide ||
                t.activAnimations.glide_mirror ||
                ((0, f.Kn)('anim_'.concat(e), {
                  name: 'glide' + (0.5 > Math.random() ? '_mirror' : ''),
                  blendDuration: 0.3,
                  reset: !0,
                  timeScale: p.MQ.glide
                }),
                (0, f.Kn)('anim_pet_'.concat(e), {
                  name: 'Idle_5',
                  blendDuration: 0
                })),
              l)
            ) {
              if (!i && !u && !g && !m) {
                let D = s.length()
                Math.abs(D) > 4
                  ? D <= 22 / 1.5
                    ? ((0, f.Kn)('anim_'.concat(e), {
                        name: 'walk',
                        reset: !t.activAnimations.walk,
                        blendDuration: 0.1,
                        timeScale: (p.MQ.walk / (22 / D) / (0.75 * t.height)) * Math.sign(s.z)
                      }),
                      (0, f.Kn)('anim_pet_'.concat(e), {
                        name: 'Idle_1'
                      }))
                    : ((0, f.Kn)('anim_'.concat(e), {
                        name: 'run',
                        reset: !t.activAnimations.run,
                        blendDuration: 0.1,
                        timeScale: (p.MQ.run / (22 / D) / (0.75 * t.height)) * Math.sign(s.z)
                      }),
                      (0, f.Kn)('anim_pet_'.concat(e), {
                        name: 'Idle_1'
                      }))
                  : (t.activAnimations.run
                      ? (0, f.Kn)('anim_'.concat(e), {
                          name: 'run',
                          play: !1,
                          blendDuration: 0.2
                        })
                      : t.activAnimations.walk &&
                        (0, f.Kn)('anim_'.concat(e), {
                          name: 'walk',
                          play: !1,
                          blendDuration: 0.2
                        }),
                    t.playingEmote ||
                      (!y &&
                        !b &&
                        !C &&
                        (w.right || w.left) &&
                        (w.right || w.left) &&
                        (w.right &&
                          !t.activAnimations.turnright &&
                          (0, f.Kn)('anim_'.concat(e), {
                            name: 'turnright',
                            blendDuration: 0.25,
                            timeScale: p.MQ.turnright
                          }),
                        w.left &&
                          !t.activAdditiveAnimations.turnright_mirror &&
                          (0, f.Kn)('anim_'.concat(e), {
                            name: 'turnright_mirror',
                            blendDuration: 0.25,
                            timeScale: p.MQ.turnright
                          })),
                      b || y
                        ? b &&
                          !t.activAnimations.kneelidle &&
                          (0, f.Kn)('anim_'.concat(e), {
                            name: 'kneelidle',
                            play: !0,
                            blendDuration: 1,
                            timeScale: p.MQ.kneelidle
                          })
                        : (t.activAnimations.default ||
                            t.playingEmote ||
                            C ||
                            (0, f.Kn)('anim_'.concat(e), {
                              name: 'default',
                              blendDuration: 0.2,
                              timeScale: p.MQ.default
                            }),
                          clearTimeout(n),
                          (0, r.IW)({
                            isIdle: !0
                          }),
                          (n = window.setTimeout(() => {
                            !(0, r.y0)().isIdle ||
                              t.playingEmote ||
                              t.activAnimations.idle ||
                              t.activAnimations.idle_mirror ||
                              (0, r.y0)().isCustomising ||
                              ((0, f.Kn)('anim_'.concat(e), {
                                name: 'idle' + (0.5 > Math.random() ? '_mirror' : ''),
                                play: !0,
                                blendDuration: 1,
                                timeScale: p.MQ.idle
                              }),
                              (0, f.Kn)('idleCamera', {}))
                          }, 2500)))))
              }
            } else if (
              (t.activAnimations.run &&
                (0, f.Kn)('anim_'.concat(e), {
                  name: 'run',
                  play: !1,
                  blendDuration: 0.2
                }),
              t.activAnimations.walk &&
                (0, f.Kn)('anim_'.concat(e), {
                  name: 'walk',
                  play: !1,
                  blendDuration: 0.2
                }),
              !g && !m && !d && !c && !t.activAnimations.jump && !t.activAnimations.jump_mirror)
            ) {
              let S = (0, r.y0)().playerApi
              ;(S.isFalling = !0),
                (0, f.Kn)('anim_'.concat(e), {
                  name: 'jump' + (0.5 > Math.random() ? '_mirror' : ''),
                  blendDuration: 0.1,
                  timeScale: p.MQ.jump
                })
            }
            s.z > 0
              ? t.activAdditiveAnimations.leanFoward ||
                (0, f.Kn)('anim_'.concat(e), {
                  name: 'leanFoward',
                  blendDuration: 1
                })
              : t.activAdditiveAnimations.leanFoward &&
                (0, f.Kn)('anim_'.concat(e), {
                  name: 'leanFoward',
                  blendDuration: 1,
                  play: !1
                }),
              s.z < 0
                ? t.activAdditiveAnimations.leanback ||
                  (0, f.Kn)('anim_'.concat(e), {
                    name: 'leanback',
                    blendDuration: 1
                  })
                : t.activAdditiveAnimations.leanback &&
                  (0, f.Kn)('anim_'.concat(e), {
                    name: 'leanback',
                    blendDuration: 1,
                    play: !1
                  }),
              w.right &&
                !t.activAdditiveAnimations.leanright &&
                (0, f.Kn)('anim_'.concat(e), {
                  name: 'leanright',
                  blendDuration: 1
                }),
              !w.right &&
                t.activAdditiveAnimations.leanright &&
                (0, f.Kn)('anim_'.concat(e), {
                  name: 'leanright',
                  play: !1,
                  blendDuration: 1
                }),
              w.left &&
                !t.activAdditiveAnimations.leanright_mirror &&
                (0, f.Kn)('anim_'.concat(e), {
                  name: 'leanright_mirror',
                  blendDuration: 1
                }),
              !w.left &&
                t.activAdditiveAnimations.leanright_mirror &&
                (0, f.Kn)('anim_'.concat(e), {
                  name: 'leanright_mirror',
                  play: !1,
                  blendDuration: 1
                }),
              (t.fly = m || c)
          }
        })
      }
      var y = t(8891),
        b = t(4661)
      let w = (e) => {
        let n = (0, y.Z)(() => {
          let e = (0, r.y0)().playerApi
          ;(e.isJumping = !1), (e.isFalling = !0)
        }, 400)
        ;(0, f.zX)('ctrl_jump', () => {
          let { jumpVelocity: t } = (0, v.XV)(),
            o = (0, r.y0)().playerApi,
            { isFlying: i, isJumping: a, canJump: l, canFly: s, velocity: c, isFalling: u } = o
          !l ||
            a ||
            i ||
            ((o.isJumping = !0),
            (o.isSliding = !1),
            (0, f.Kn)('sound_'.concat(e), {
              name: 'jump'
            }),
            (c.y = t),
            n()),
            (a || u) && !i && s
              ? (n.cancel(), (c.y = 0), (o.isJumping = !1), (o.isFalling = !1), (o.isFlying = !0))
              : i && ((c.y = 0), (o.canFly = !1), (o.isFalling = !0), (o.isFlying = !1))
        }),
          (0, f.zX)('interact', () => {
            let e = (0, r.y0)().canInteractWith
            e && e.trigger()
          }),
          (0, f.zX)('ctrl_stopJump', () => {
            let e = (0, r.y0)().playerApi
            n.cancel(), (e.isJumping = !1), (e.isFalling = !0)
          }),
          (0, f.zX)('ctrl_meditateyoyo', () => {
            ;(0, f.Kn)('anim_'.concat(e), {
              name: 'meditateyoyo',
              blendDuration: 0.1,
              reset: !0,
              timeScale: p.MQ.meditateyoyo
            }),
              (0, f.Kn)('userAction')
          }),
          (0, f.zX)('ctrl_thankYou', () => {
            ;(0, f.Kn)('anim_'.concat(e), {
              name: 'thankYou',
              blendDuration: 0.1,
              reset: !0,
              timeScale: p.MQ.thankYou
            }),
              (0, f.Kn)('userAction')
          }),
          (0, f.zX)('ctrl_dance', () => {
            ;(0, f.Kn)('anim_'.concat(e), {
              name: 'dance',
              blendDuration: 0.1,
              reset: !0,
              timeScale: p.MQ.dance
            }),
              (0, f.Kn)('userAction')
          }),
          (0, f.zX)('ctrl_bow', () => {
            ;(0, f.Kn)('anim_'.concat(e), {
              name: 'bow',
              blendDuration: 0.1,
              reset: !0,
              timeScale: p.MQ.bow
            }),
              (0, f.Kn)('userAction')
          })
      }
      var _ = t(1799),
        C = t(1345),
        F = t(5429)
      let D = (e) => {
        setTimeout(() => {})
        let n = !1
        ;(0, c.useMemo)(() => new u.Vector3(), []), (0, c.useMemo)(() => new u.Object3D(), [])
        let t = (0, c.useMemo)(() => new u.Quaternion(), []),
          o = (0, c.useMemo)(() => new u.Euler(), [])
        return (
          (e.onBeforePhysicRaf = (e, n) => {
            let { api: i, entity: a, physic: l } = e,
              { isFlying: s, isSliding: c, isJumping: m, isFlyingBack: f, isTeleporting: d, onGround: g } = i
            if (!(0, h.VB)().testExperience) return
            let { outOfBoundCount: p, isCustomising: x } = (0, r.y0)(),
              { move: y, forceFactor: w, turnFactor: _, yAxisCtrl: C, xAxisCtrl: F } = (0, v.XV)(),
              { absoluteDelta: D, yFlyBackTrigger: S, lockRotation: M, dialogMode: A } = (0, b.A8)(),
              P = 0
            ;(i.mass = 20),
              M || (P = Math.atan2(-F, C)),
              y
                ? (M ? l.transformer.rotateY(_) : (o.set(0, u.MathUtils.degToRad(D.x) + P, 0), l.transformer.quaternion.damp(t.setFromEuler(o), 6, n)),
                  0 != w
                    ? ((i.isMoving = !0),
                      (i.force.z = 0 != w ? (c ? (i.deltaPositionBetweenRaf.y > 0 ? 250 * i.deltaPositionBetweenRaf.y : 0) : s ? 80 : 40) : -(s ? 80 : 40)),
                      0 != w && (i.force.z *= 1.3 * w))
                    : c || (i.force.z = 0))
                : ((i.isMoving = !1), i.force.set(0, 0, 0)),
              (i.force.y = s ? -10 : m ? 1 : g ? (c ? -25 : 0) : -30)
          }),
          (e.onAfterPhysicRaf = (e, t) => {
            let { api: o, entity: r, physic: i } = e
            if (o.onGround || o.isSliding) {
              ;(o.isFalling = !1), (o.isJumping = !1), (o.isFlying = !1)
              let a = Math.abs(o.velocity.length()),
                l = Math.abs(o.velocity.x) + Math.abs(o.velocity.z),
                s = n || (a > 30 && l > 18 && o.collider && o.collider.api.slide)
              !o.isSliding &&
                s &&
                (setTimeout(() => {
                  n = !1
                }, 1e3),
                (n = !0)),
                (o.isSliding = s)
            }
            ;(o.friction = o.isSliding ? o.slidingFriction : o.defaultFriction),
              r.position.y < -100 && (r.position.set(0, 0, 0), o.force.set(0, 0, 0), o.velocity.set(0, 0, 0), i.position.set(0, 0, 0))
          }),
          null
        )
      }
      var S = t(5062),
        M = t(9796),
        A = t(5110),
        P = t(6038)
      let I = () => {
          ;(0, f.zX)('flybackcamera', () => {
            let {
              targetOffset: e,
              cameraOffset: n,
              defaultCameraOffset: t,
              playingAnimation: o,
              firstPersonCameraOffset: r,
              firstPersonTargetOffset: i,
              firstPerson: a
            } = (0, b.A8)()
            if (o) return
            let l = (0, v.XV)().ref
            P.ZP.to(n, {
              y: t.y + (l.yFlyBackCameraOffset - t.y),
              overwrite: !0
            }),
              P.ZP.to(n, {
                x: a ? r.x : t.x,
                z: a ? r.z : t.z - 20,
                duration: 2,
                ease: 'expo.out',
                overwrite: !0
              }),
              P.ZP.to(e, {
                x: a ? i.x : t.x,
                y: a ? i.y : t.y,
                z: a ? i.z : t.z,
                duration: 2,
                ease: 'expo.out',
                overwrite: !0
              })
          })
        },
        z = () => {
          ;(0, f.zX)('resetOffsetCamera', () => {
            let {
                targetOffset: e,
                cameraOffset: n,
                defaultTargetOffset: t,
                defaultCameraOffset: o,
                playingAnimation: i,
                firstPersonCameraOffset: a,
                firstPersonTargetOffset: l,
                firstPerson: s,
                refCamera: c,
                cinematicMode: u,
                dialogMode: m
              } = (0, b.A8)(),
              f = (0, r.y0)().isCustomising
            i ||
              f ||
              u ||
              m ||
              (P.ZP.to(n, {
                x: s ? a.x : o.x,
                y: s ? a.y : o.y,
                z: s ? a.z : o.z,
                duration: 2,
                ease: 'power2.out',
                overwrite: !0
              }),
              P.ZP.to(e, {
                x: s ? l.x : t.x,
                y: s ? l.y : t.y,
                z: s ? l.z : t.z,
                duration: 2,
                ease: 'power2.out',
                overwrite: !0
              }),
              (0, b.Th)({
                cameraRotationAroundTarget: 0
              }))
          })
        },
        L = (e) => {
          ;(0, f.zX)('animateEntrance', (n) => {
            let { newCameraOffset: t = e } = n,
              {
                targetOffset: o,
                cameraOffset: r,
                defaultCameraOffset: i,
                defaultTargetOffset: a,
                firstPersonCameraOffset: l,
                firstPersonTargetOffset: s,
                firstPerson: c
              } = (0, b.A8)()
            ;(0, b.Th)({
              playingAnimation: !0
            }),
              t.copy(c ? l : i),
              t.multiplyScalar(3),
              (t.x = 2 * Math.abs(t.z)),
              (t.y = Math.abs(t.z)),
              P.ZP.fromTo(
                r,
                {
                  y: t.y,
                  z: t.z
                },
                {
                  y: c ? s.y : i.y,
                  z: c ? s.z : i.z,
                  duration: 3,
                  ease: 'expo.out',
                  overwrite: !0,
                  onComplete: function () {
                    ;(0, b.Th)({
                      playingAnimation: !1
                    })
                  }
                }
              ),
              P.ZP.fromTo(
                r,
                {
                  x: t.x
                },
                {
                  x: c ? l.x : i.x,
                  duration: 3,
                  ease: 'expo.out'
                }
              ),
              P.ZP.to(o, {
                ...(c ? l : a),
                duration: 3,
                overwrite: !0,
                ease: 'expo.out'
              })
          })
        },
        E = () => {
          ;(0, c.useEffect)(() => {
            let e = v.WL.subscribe(
              (e) => e.moveAlongZ,
              function (e, n) {
                if (!n && e) {
                  let { lockRotation: t } = (0, b.A8)()
                  t &&
                    (0, b.Th)({
                      isDragging: !1,
                      resetCamera: !0
                    })
                }
              }
            )
            return () => {
              e()
            }
          }, [])
        },
        B = (e, n) => {
          ;(0, f.zX)('teleportCamera', (t) => {
            let { cameraPosition: o, lookAt: r, disableCameraLerp: i = !1 } = t,
              { cameraOffset: a, targetOffset: l, defaultTargetOffset: s, defaultCameraOffset: c, firstPerson: u } = (0, b.A8)()
            a.copy(c),
              l.copy(s),
              e.copy(o),
              n.copy(r),
              u ||
                ((0, b.Th)({
                  disableCameraPositionLerp: i,
                  disableCameraRotationLerp: i
                }),
                setTimeout(() => {
                  ;(0, b.Th)({
                    disableCameraPositionLerp: !1,
                    disableCameraRotationLerp: !1
                  })
                }))
          })
        },
        T = () => {
          ;(0, f.zX)('enterCameraArea', (e) => {
            let { cameraOffset: n, targetOffset: t, attached: o, ref: r } = e
            ;(0, b.Th)({
              attached: o
            }),
              o
                ? n &&
                  (0, b.Th)({
                    cameraOffset: n
                  })
                : (0, b.Th)({
                    cameraOffset: new u.Vector3().setFromMatrixPosition(r.current.matrixWorld).add(n)
                  }),
              t &&
                (0, b.Th)({
                  targetOffset: t
                })
          })
        }
      var R = t(1660)
      let V = () => {
          let [e, n, t, o, r, i, a] = (0, b.K5)((e) => [e.attached, e.inverseAxis, e.lockRotation, e.dragAmplitude, e.dragDamp, e.targetOffset, e.cameraOffset])
          return (
            (0, R.M4)(() => ({
              camera: (0, R.so)({
                attached: {
                  value: e,
                  onChange: (e) =>
                    (0, b.Th)({
                      attached: e
                    })
                },
                lockRotation: {
                  value: t,
                  onChange: (e) =>
                    (0, b.Th)({
                      lockRotation: e
                    })
                },
                inverseAxis: {
                  value: n,
                  onChange: (e) =>
                    (0, b.Th)({
                      inverseAxis: e
                    })
                },
                dragAmplitude: {
                  value: o,
                  x: {
                    min: 0,
                    max: 5,
                    step: 0.01
                  },
                  y: {
                    min: 0,
                    max: 5,
                    step: 0.01
                  },
                  onChange: (e) =>
                    (0, b.Th)({
                      dragAmplitude: new u.Vector2(e.x, e.y)
                    })
                },
                dragDamp: {
                  value: r,
                  min: 0,
                  max: 20,
                  step: 0.01,
                  onChange: (e) =>
                    (0, b.Th)({
                      dragDamp: e
                    })
                },
                targetOffset: {
                  value: i,
                  x: {
                    min: -100,
                    max: 100,
                    step: 0.5
                  },
                  y: {
                    min: -75,
                    max: 75,
                    step: 0.5
                  },
                  z: {
                    min: -35,
                    max: 35,
                    step: 0.5
                  },
                  onChange: (e) =>
                    (0, b.Th)({
                      targetOffset: new u.Vector3(e.x, e.y, e.z)
                    })
                },
                cameraOffset: {
                  value: a,
                  x: {
                    min: -100,
                    max: 100,
                    step: 0.5
                  },
                  y: {
                    min: -75,
                    max: 75,
                    step: 0.5
                  },
                  z: {
                    min: -35,
                    max: 35,
                    step: 0.5
                  },
                  onChange: (e) =>
                    (0, b.Th)({
                      cameraOffset: new u.Vector3(e.x, e.y, e.z)
                    })
                }
              })
            })),
            null
          )
        },
        U = (e, n) => {
          ;(0, f.zX)('customisationCamera', (n) => {
            let { callback: t = () => {} } = n,
              { cameraOffset: o, playingAnimation: r } = (0, b.A8)()
            r ||
              ((0, f.Kn)('resetOffsetCamera'),
              e.set(0, 5.5, -6),
              (0, b.Th)({
                cameraRotationAroundTarget: 180
              }),
              P.ZP.to(o, {
                ...e,
                duration: 1,
                ease: 'power2.inOut',
                overwrite: !0,
                onComplete: function () {
                  t()
                }
              }))
          })
        },
        k = () => {
          ;(0, f.Kn)('cinematicEvent', {
            open: !1
          }),
            (0, f.Kn)('cinematicText', {
              open: !1
            }),
            (0, f.Kn)('cinematic', !1)
          let { refCamera: e, defaultFov: n } = (0, b.A8)()
          e.current && ((e.current.fov = n), e.current.updateProjectionMatrix()),
            (0, b.A8)(),
            (0, b.Th)({
              cinematicMode: !1
            })
        }
      var N = t(318),
        j = t.t(N, 2)
      let O = function () {},
        K = setTimeout(() => {}),
        { damp: Q } = u.MathUtils,
        Z = (e) =>
          new Promise((n, t) => {
            ;(K = setTimeout(function () {
              ;(O = function () {}), n()
            }, e)),
              (O = function () {
                clearTimeout(K), t()
              })
          }),
        W = () => {
          let [e, n] = (0, c.useState)(() => function () {})
          ;(0, f.zX)('escapeCtrl', () => {
            ;(0, b.Th)({
              interruptCinematic: !0
            }),
              O && 'function' == typeof O && O()
          }),
            (0, f.zX)('skip', () => {
              O && 'function' == typeof O && O()
            }),
            (0, f.zX)('cinematicCamera', (e) => {
              let { sequences: t, onCinematicEnd: o = function () {} } = e
              n(
                () =>
                  function () {
                    o()
                  }
              ),
                (0, b.Th)({
                  interruptCinematic: !1
                })
              let r = async () => {
                for (let e = 0; e < t.length; e++) {
                  var n, r, i, a, l, s
                  let c = t[e],
                    { cinematicPositionTo: u, cinematicQuaternionTo: m, cinematicFov: d, refCamera: v, interruptCinematic: g } = (0, b.A8)()
                  if (g) {
                    ;(0, b.Th)({
                      interruptCinematic: !1
                    })
                    break
                  }
                  ;(c.fovFrom = null !== (n = c.fovFrom) && void 0 !== n ? n : 50),
                    v.current.position.fromArray(c.posFrom),
                    v.current.quaternion.fromArray(c.quatFrom),
                    (v.current.fov = c.fovFrom),
                    v.current.updateProjectionMatrix(),
                    c.cinematicText &&
                      (0, f.Kn)('cinematicText', {
                        name: null !== (r = c.name) && void 0 !== r ? r : '',
                        message: j[c.cinematicText]
                      }),
                    (0, f.Kn)('cinematicEvent', {}),
                    (0, f.Kn)('cinematic', !0),
                    (0, b.Th)({
                      cinematicMode: !0,
                      cinematicPositionTo: u.fromArray(null !== (i = c.posTo) && void 0 !== i ? i : c.posFrom),
                      cinematicQuaternionTo: m.fromArray(null !== (a = c.quatTo) && void 0 !== a ? a : c.quatFrom),
                      cinematicFov: null !== (l = c.fovTo) && void 0 !== l ? l : d,
                      cinematicDamp: null !== (s = c.dampSpeed) && void 0 !== s ? s : 1
                    }),
                    await Z(1e3 * c.duration).catch((e) => {})
                }
                k(), o()
              }
              r()
            })
        },
        G = (e, n) => {
          let { cinematicPositionTo: t, cinematicQuaternionTo: o, cinematicFov: r, cinematicDamp: i } = (0, b.A8)()
          e.current.position.damp(t, i, n), e.current.quaternion.damp(o, i, n), (e.current.fov = Q(e.current.fov, r, i, n)), e.current.updateProjectionMatrix()
        }
      var X = t(2964)
      let q = new u.Quaternion(0, 1, 0, 0),
        H = new u.Quaternion(),
        Y = (e, n, t, o, i) => {
          let a = (0, r.oC)((0, d.PR)().id)
          e.current.position.copy(n.position),
            (e.current.position.y = n.position.y + a),
            H.copy(n.quaternion),
            H.multiply(q),
            H.multiply(o.setFromEuler(t)),
            e.current.quaternion.damp(H, 8, i)
        },
        J = new u.Vector3(),
        $ = new u.Vector3(),
        ee = (e, n, t, o, i, a) => {
          let { canInteractWith: l } = (0, r.y0)()
          if (l && l.playerId && e.current) {
            let s
            J.copy(a.position), (J.y += (0, r.oC)((0, d.PR)().id, !0))
            let c = r.Fm.find((e) => l.playerId === e.playerId)
            $.copy(c.position), ($.y += (0, r.oC)(l.playerId, !0))
            let u = J.distanceTo($)
            u < 4
              ? ((s = 0.5),
                n.position.lerpVectors($, J, s),
                n.lookAt($),
                t.quaternion.identity(),
                t.position.set(-4, 0, 0),
                (0, X.SG)(t, o),
                e.current.position.copy(o),
                e.current.lookAt(n.position))
              : ((s = 4 / u),
                i.lerpVectors($, J, s),
                e.current.position.copy(i),
                e.current.lookAt($),
                n.position.copy(i),
                n.lookAt($),
                t.quaternion.identity(),
                t.position.set(-1, 0, 0),
                (0, X.SG)(t, o),
                e.current.position.copy(o))
          }
        }
      var en = t(5183)
      let et = new u.Vector3(),
        eo = new u.Raycaster(),
        er = new u.Vector3(),
        ei = (e, n, t, o) => {
          et.copy(n).sub(e).normalize(), er.copy(et).negate(), eo.set(n, er)
          let r = o.current.static,
            i = t
          if (!r) return
          let a = (0, en.Z)(r, (e) => e.api.enabled),
            l = eo.intersectObjects(Object.values(a))
          l && l.length && (i = Math.min(i, l[0].distance - 0.5)), (t += i - t)
          let s = e.distanceTo(n) - t
          e.addScaledVector(et, s)
        }
      var ea = t(4504)
      let el = 0,
        es = 0,
        { damp: ec, degToRad: eu, lerp: em } = u.MathUtils,
        ef = new u.Vector3(),
        ed = new u.Vector3(),
        ev = new u.Euler(),
        eg = new u.Quaternion(),
        ep = new u.Quaternion(),
        eh = new u.Quaternion(),
        ex = new u.Vector3(),
        ey = 0,
        eb = 0,
        ew = (e) => {
          let { target: n } = e,
            t = (0, c.useMemo)(() => new u.Vector3(), []),
            a = (0, c.useMemo)(() => new u.Vector3(), [])
          ;(0, c.useMemo)(() => new u.Vector3(), []), (0, c.useMemo)(() => new u.Vector3(), [])
          let s = (0, c.useMemo)(() => new u.Vector3(), []),
            m = (0, c.useMemo)(() => new u.Vector3(), []),
            f = (0, c.useMemo)(() => new u.Vector3(), []),
            g = (0, c.useMemo)(() => new u.Vector3(), []),
            p = (0, c.useMemo)(() => new u.Vector3(), []),
            x = (0, c.useMemo)(() => new u.Vector3(), []),
            y = (0, c.useMemo)(() => new u.Vector3(), []),
            w = (0, r.oR)((e) => e.camera),
            _ = (0, c.useRef)(null),
            C = (0, r.oR)((e) => e.control),
            { skin: F } = (0, d.PR)(),
            { bodies: D } = (0, c.useContext)(M.h),
            P = (0, c.useRef)(null),
            R = (0, c.useRef)(null),
            k = (0, c.useRef)(null),
            N = (0, c.useRef)(null),
            j = (0, c.useRef)(null)
          ;(0, S.H)(_, w ? u.CameraHelper : null),
            (0, c.useEffect)(() => {
              ;(0, b.Th)({
                refCamera: _
              })
            }, []),
            T(),
            B(a, s),
            L(g),
            U(g, p),
            W(),
            I(),
            z(),
            E(),
            (0, ea.U2)((e) => e.active)
          let O = (0, b.K5)((e) => e.defaultFov)
          ;(0, c.useRef)(0)
          let K = (0, c.useRef)(1)
          return (
            (0, l.A)((e, o) => {
              let i = k.current,
                l = N.current,
                c = j.current,
                u = R.current,
                d = P.current
              if (!n) return
              let {
                  inverseAxis: g,
                  lockRotation: p,
                  isDragging: w,
                  attached: S,
                  absoluteDelta: M,
                  resetCamera: I,
                  dragDamp: z,
                  dragAmplitude: L,
                  dragDelta: E,
                  targetOffset: B,
                  cameraOffset: T,
                  preventDrag: V,
                  disableCameraPositionLerp: U,
                  disableCameraRotationLerp: O,
                  cameraRotationAroundTarget: Q,
                  yCameraLowerLimit: Z,
                  dialogMode: W,
                  firstPerson: q,
                  cinematicMode: H
                } = (0, b.A8)(),
                { isCustomising: J, canInteractWith: $ } = (0, r.y0)(),
                en = (0, v.XV)().ref
              if ((x.copy(T), y.copy(B), (K.current = ec(K.current, F.height, 2, o)), x.multiplyScalar(K.current), y.multiplyScalar(K.current), H)) {
                G(_, o)
                return
              }
              if (W) {
                ee(_, u, d, ex, a, n)
                return
              }
              if (
                (C.current ||
                  ((E.x *= L.x),
                  (E.y *= L.y),
                  g && ((E.x *= -1), (E.y *= -1)),
                  m.set(E.x, E.y, 0),
                  f.y + E.y < -40 ? (f.y = -40) : f.y + E.y > 45 ? (f.y = 45) : (f.y += E.y),
                  (f.y += E.y),
                  (m.y = 0),
                  f.add(m),
                  M.lerp(f, 0.24),
                  I && ((f.x > 360 || f.x < 0) && (f.x = ((f.x % 360) + 360) % 360), (f.x = ec(f.x, 0, 1.35, o)), (f.y = ec(f.y, 0, 1.35, o))),
                  ev.set(0, eu(M.x), 0)),
                p || J
                  ? (eg.copy(n.quaternion),
                    eh.setFromEuler(ev),
                    (!w || V) && (ev.set(0, eu(Q), 0), eh.setFromEuler(ev)),
                    ep.damp(eh, z, o),
                    eg.multiply(ep),
                    i.quaternion.damp(eg, 2 * z, o))
                  : i.quaternion.damp(eg.setFromEuler(ev), 2 * z, o),
                ev.set(eu(M.y), 0, 0),
                q)
              ) {
                Y(_, n, ev, eg, o)
                return
              }
              l.quaternion.damp(eg.setFromEuler(ev), z, o),
                (ey = ec(I ? ey : 0, I ? 1 : 0, 1.5, 0.01 * o)) > 0.05 &&
                  (0, b.Th)({
                    resetCamera: !1
                  })
              let et = t.distanceTo(a)
              u.position.copy(n.position),
                u.quaternion.copy(n.quaternion),
                (es = ec(es, Math.abs(en.velocity.z) > 0 ? 0 : -2, (en.velocity.z, 1), o)),
                (y.x += es / 2),
                d.position.copy(y),
                (0, X.SG)(d, ex),
                (el = ec(el, 1.5 * (2 * (0, A.Z)(en.velocity.y, -10, 10) - 1), en.velocity.y > 0 ? 2 : 0.5, o)),
                (u.position.y += el)
              let { testExperience: eo, startedMoved: er } = (0, h.VB)()
              U ? a.copy(ex) : a.damp(ex, eo ? (er ? (w || et < x.lengthSq() ? 20 : 10) : 1) : 1e4, o), eo || a.set(-5.79, 2.65, -3.12)
              let ea = _.current
              S
                ? (O ? i.position.copy(n.position) : i.position.damp(n.position, w || et < x.lengthSq() ? 10 : 1.5, o),
                  (x.x += es),
                  ed.copy(x),
                  (eb = ec(eb, 5 * (0, A.Z)(f.y, -10, 45), 1.35, o)),
                  (ed.z -= eb),
                  c.position.copy(ed, 1))
                : (i.position.copy(x), c.position.set(0, 0, 0)),
                (0, X.SG)(c, t),
                ef.set(0, 0.075 * Math.sin(e.clock.elapsedTime / 2), 0),
                t.add(ef),
                s.copy(t),
                eo && ei(s, a, -x.z, D),
                eo &&
                  (o > 1 ? ea.position.copy(s) : ea.position.damp(s, er ? 15 : 0.5, o),
                  (ea.position.y = ea.position.y < Z ? Z : ea.position.y),
                  ea.lookAt(a),
                  C.current && (C.current.target = a))
            }),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)('object3D', {
                  ref: R,
                  children: (0, o.jsx)('object3D', {
                    ref: P
                  })
                }),
                (0, o.jsx)('object3D', {
                  ref: k,
                  children: (0, o.jsx)('object3D', {
                    ref: N,
                    children: (0, o.jsx)('object3D', {
                      ref: j
                    })
                  })
                }),
                (0, r.oR)((e) => e.editor) && (0, o.jsx)(V, {}),
                (0, o.jsx)(i.c, {
                  directionVector: new u.Vector3(0, 0, -1),
                  makeDefault: !w,
                  ref: _,
                  fov: O,
                  far: 3500,
                  rotation: [0, 0, 0]
                })
              ]
            })
          )
        },
        e_ = (e) => {
          let { grp: n } = e,
            t = (0, d.LM)((e) => e.id)
          return (
            (0, c.useEffect)(() => {
              ;(0, f.Kn)('anim_holo_tp_'.concat(t), {
                teleportingOut: !1,
                reset: !0
              })
            }, []),
            (0, o.jsx)(o.Fragment, {
              children: (0, o.jsx)(ew, {
                target: n.current
              })
            })
          )
        }
      var eC = t(9637),
        eF = t(2473),
        eD = t(5403)
      let eS = (e) => {
        let { playerId: n, grpRef: t, isNpc: i } = e,
          a = (0, r.oR)((e) => e.showPlayerName),
          s = (0, c.useRef)(),
          u = (0, c.useRef)(null),
          m = (0, d.LM)((e) => {
            var n
            return null === (n = e.settings.privacy) || void 0 === n ? void 0 : n.showNames
          })
        ;(0, f.zX)('hide_name_'.concat(n), (e) => {
          let { hide: n } = e
          u.current && (u.current.visible = !n)
        })
        let v = (0, r.y0)().font
        ;(0, f.zX)('update_name_'.concat(n), (e) => {
          s.current && ((s.current.text = e), r.CI.test(e) && (0, r.y0)().updateFont('JP'), s.current.sync())
        })
        let g = (0, c.useRef)(1)
        return (
          (0, f.zX)('update_skin_height_'.concat(n), (e) => {
            g.current = e
          }),
          (0, f.zX)('update_skin_color_'.concat(n), (e) => {
            s.current && ((s.current.color = eD.OV[e[2]]), s.current.sync())
          }),
          (0, f.zX)('updateFont', (e) => {
            let { font: n } = e
            s.current && ((s.current.font = n), s.current.sync())
          }),
          (0, l.A)(() => {
            var e, n, o, i
            a &&
              (null === (e = u.current) ||
                void 0 === e ||
                e.position.set(
                  null === (n = t.current) || void 0 === n ? void 0 : n.position.x,
                  (null === (o = t.current) || void 0 === o ? void 0 : o.position.y) + r.a9 * g.current + 0.2,
                  null === (i = t.current) || void 0 === i ? void 0 : i.position.z
                ))
          }),
          a
            ? (0, o.jsx)(eC.V, {
                position: [0, -100, 0],
                follow: !0,
                ref: u,
                visible: m || !0 === i,
                children: (0, o.jsx)(eF.x, {
                  ref: s,
                  color: i ? '#FFD700' : '#FFF',
                  fontSize: 0.4,
                  maxWidth: 200,
                  lineHeight: 1,
                  letterSpacing: 0.02,
                  textAlign: 'center',
                  font: v,
                  anchorX: 'center',
                  anchorY: 'bottom',
                  outlineWidth: 0.03,
                  outlineColor: '#000'
                })
              })
            : null
        )
      }
      var eM = t(9521)
      let eA = () => {
        let e = (0, l.z)((e) => e.gl),
          n = (0, l.z)((e) => e.scene),
          t = (0, r.oR)((e) => e.debugShadows),
          i = (0, c.useRef)(),
          a = (0, eM.S)((e) => e.loaded)
        ;(0, c.useEffect)(() => {
          if (
            ((i.current.autoUpdate = !1),
            (i.current.needsUpdate = !0),
            (i.current.shadow.autoUpdate = !1),
            (i.current.shadow.needsUpdate = !0),
            !i.current || !t)
          )
            return
          let o = new u.CameraHelper(i.current.shadow.camera),
            r = new u.DirectionalLightHelper(i.current)
          return (
            n.add(o),
            n.add(r),
            () => {
              n.remove(o), n.remove(r), (e.shadowMap.autoUpdate = e.shadowMap.needsUpdate = !0)
            }
          )
        }, [i, t, e, n, a])
        let s = (0, r.oR)((e) => e.gpuTier),
          m = [1024, 2048, 2048, 4096][s],
          f = (0, c.useMemo)(() => new u.Color(16777215), []),
          d = (0, c.useMemo)(() => new u.Color(11911926), [])
        return (
          (0, l.A)(() => {
            i.current.color.lerpColors(f, d, r.QF.gameplay.smooth)
          }),
          (0, o.jsx)(o.Fragment, {
            children: (0, o.jsx)('directionalLight', {
              castShadow: !0,
              ref: i,
              color: 16777215,
              position: [-140, 225, 225],
              intensity: 0.4,
              'shadow-bias': -0.0007,
              'shadow-mapSize': [m, m],
              'shadow-camera-left': -120,
              'shadow-camera-right': 100,
              'shadow-camera-far': 2e3,
              'shadow-camera-top': 100,
              'shadow-camera-bottom': -100
            })
          })
        )
      }
      var eP = t(8626),
        eI = t(7597),
        ez = t.n(eI)
      let eL =
          '\n  in float instanceID;\n  uniform float ditherDistance;\n\n  float Bayer2(vec2 a) {\n    a = floor(a);\n    return fract(a.x / 2. + a.y * a.y * .75);\n  }\n\n  #define Bayer4(a)   (Bayer2 (.5 *(a)) * .25 + Bayer2(a))\n  #define Bayer8(a)   (Bayer4 (.5 *(a)) * .25 + Bayer2(a))\n  #define Bayer16(a)  (Bayer8 (.5 *(a)) * .25 + Bayer2(a))\n\n',
        eE = '\n  out float instanceID;\n'
      class eB extends u.MeshPhongMaterial {
        onBeforeCompile(e) {
          ;(e.uniforms.time = this._time),
            (e.uniforms.bw = this._bw),
            (e.uniforms.shininess = {
              value: 10
            }),
            (e.uniforms.roughness = {
              value: 1
            }),
            (e.uniforms.specular = {
              value: new u.Color(16711680)
            }),
            (e.uniforms.uCol = this._uCol),
            (e.uniforms.ditherDistance = this._ditherDistance),
            (e.vertexShader =
              '\n      // precision highp int;\n    \n      #if NUM_CLIPPING_PLANES > 0\n        varying vec3 vClipPosition;\n      #endif\n\n      uniform float time;\n      out vec2 vUv;\n      in float holo;\n      '
                .concat(eE, '\n    ')
                .concat(e.vertexShader, '\n    \n    ')),
            (e.vertexShader = e.vertexShader.replace('#include <project_vertex>', '\n      #include <project_vertex>\n      ')),
            (e.fragmentShader =
              '\n\n     in vec2 vUv;\n     uniform float time;\n     uniform vec3 uCol;\n     uniform float bw;\n     layout(location = 1) out vec4 gGlow;\n\n     '
                .concat(
                  eD.ZP,
                  '\n\n     float circ(float d, float x, float y){		\n        return d + sqrt( x*x*x*x*x*x + y*y*y*y*y*y );\n     }\n     vec3 mod289(vec3 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;} vec2 mod289(vec2 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;} vec3 permute(vec3 x) {return mod289(((x*34.0)+1.0)*x);} float snoise(vec2 v){const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439); vec2 i  = floor(v + dot(v, C.yy) ); vec2 x0 = v -   i + dot(i, C.xx); vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0); vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i); vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 )); vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0); m = m*m ; m = m*m ; vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h ); vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw; return 130.0 * dot(m, g);}\n      \n     vec4 roundVec(vec4 x){\n        vec4 a = vec4(1.);\n        a.x = round(x.x * 100.)/ 100.;\n        a.y = round(x.y * 100.)/ 100.;\n        a.z = round(x.z * 100.)/ 100.;\n        a.w = round(x.w * 100.)/ 100.;\n        return a;\n      }\n\n      vec3 roundVec(vec3 x){\n        vec3 a = vec3(1.);\n        a.x = round(x.x * 100.)/ 100.;\n        a.y = round(x.y * 100.)/ 100.;\n        a.z = round(x.z * 100.)/ 100.;\n        return a;\n      }\n\n      //fix for some GPU\n     int roundInt(float x){\n        return int(round(x * 100.)/ 100.);\n      }\n     ivec3 roundVecInt(vec3 x){\n        ivec3 a = ivec3(1);\n        a.x = roundInt(x.x);\n        a.y = roundInt(x.y);\n        a.z = roundInt(x.z);\n        return a;\n      }\n\n    '
                )
                .concat(eL, '\n    ')
                .concat(e.fragmentShader, '\n\n     ')),
            (e.fragmentShader = e.fragmentShader.replace(
              '#include <lights_phong_pars_fragment>',
              '\n\n\n      float F_ScalarSchlick(float product, float f0, float fd90) {\n        return f0 + (fd90-f0) * pow(1.0 - product, 5.0);\n      }\n\n      vec3 DisneyDiffuse(vec3 color, float dotNL, float dotNV, float dotNH, float dotLH, float dotLV, float roughness, float a) {\n        float fd90 = 0.5 + 2.0 * dotLH * dotLH * a;\n        float nl = F_ScalarSchlick(dotNL, 1.0, fd90);\n        float nv = F_ScalarSchlick(dotNV, 1.0, fd90);\n        return color * (nl*nv*RECIPROCAL_PI);\n      }\n\n      varying vec3 vViewPosition;\n      uniform float roughness;\n      struct BlinnPhongMaterial {\n        vec3 diffuseColor;\n        vec3 specularColor;\n        float specularShininess;\n        float specularStrength;\n      };\n\n      #ifdef USE_GRADIENTMAP\n        uniform sampler2D gradientMap;\n      #endif\n      vec3 getGradientIrradiance( float dotNL ) {\n        vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n        #ifdef USE_GRADIENTMAP\n          return vec3( texture2D( gradientMap, coord ).r );\n        #else\n          return mix(( coord.x < 0.7 ) ? mix(vec3( 0.65 ), vec3( 0.7 ), smoothstep(0.65, 0.7, coord.x)) : vec3( 1.0 ), vec3( 1.0 ), bw);\n        #endif\n      }\n\n      void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n        vec3 N = geometry.normal;\n        vec3 V = geometry.viewDir;\n        vec3 L = directLight.direction;\n\n        float dotNL = saturate(dot(N,L));\n        float dotNV = saturate(dot(N,V));\n        vec3 H = normalize(L+V);\n        float dotNH = saturate(dot(N,H));\n        float dotVH = saturate(dot(V,H));\n        float dotLH = saturate(dot(L,H));\n        float dotLV = saturate(dot(L,V));\n\n        float roughnessScale = 1.;\n        vec4 base = vec4(1.);\n        base.rgb *= roundVec(vColor);\n\n\n        // not specular on the cloth fabric\n        if (base.rgb == vec3(1.)) {\n          roughnessScale = 0.1;\n        }\n        float a = roughnessScale * roughnessScale;\n\n        // float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n        // vec3 irradiance = dotNL * directLight.color;\n        vec3 irradiance = getGradientIrradiance( dotNL ) * directLight.color;\n\n        // reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n        reflectedLight.directDiffuse += irradiance * DisneyDiffuse( material.diffuseColor, dotNL, dotNV, dotLH, dotVH, dotLV, roughnessScale, a );\n\n        reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength * roughnessScale;\n\n      }\n      void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n        reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n      }\n      #define RE_Direct				RE_Direct_BlinnPhong\n      #define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n      #define Material_LightProbeLOD( material )	(0)\n      '
            )),
            (e.fragmentShader = e.fragmentShader.replace(
              '#include <color_fragment>',
              '\n      vec4 diffuseBloom = vec4(vec3(0.), 1.);\n      vec4 base = vec4(1.);\n      base.rgb *= roundVec(vColor);\n      ivec3 vCol = roundVecInt(uCol);\n\n\n      // TODO Diffuse map custom here\n      // Pet\n      if (base.rgb == vec3(1.)) {\n        diffuseColor.rgb = getPrimary(vCol[0]);\n      }\n\n\n      // secondary\n      if (base.rgb == vec3(1.,0.0,0.)) {\n        // diffuseColor.rgb = getSecondary(vCol[1]);\n      }\n\n      // helmet\n      if (base.rgb == vec3(0.)) {\n        diffuseColor.rgb = vec3(0.,0.,0.);\n      }\n\n      totalEmissiveRadiance = vec3(0.);\n      \n      // orange\n      if (base.r == 1. && base.b == 0. && base.g > 0.) {\n        diffuseColor.rgb = getEmissive(vCol[2]);\n        diffuseBloom.rgb = diffuseColor.rgb;\n      }\n\n      float minn = 0.2;\n      float maxx = 0.22;\n      bool hr = base.r > minn && base.r < maxx;\n      bool hg = base.g > minn && base.g < maxx;\n      bool hb = base.b > minn && base.b < maxx;\n\n      bool r = base.r > 0.01;\n      bool g = base.g > 0.01;\n      bool b = base.b > 0.01;\n\n      if (hr && hg && hb) {\n        diffuseColor.rgb = vec3(1.);\n      }\n\n      // TODO vCol[2]\n      vec3 emissiveVColor = getEmissive(vCol[2]);\n\n      // emissive\n      if (r && g && !b) {\n        diffuseColor.rgb = emissiveVColor;\n        totalEmissiveRadiance += emissiveVColor;\n        diffuseBloom.rgb = diffuseColor.rgb;\n      }\n\n      // vec4 diffuseSkin = diffuseColor;\n      // diffuseSkin.rgb = mix(diffuseColor.rgb, diffuseColor.rgb, smoothstep(1., 2.0, diffuseColor.r + diffuseColor.g + diffuseColor.b));\n      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.8), bw);\n\n      '
            )),
            (e.fragmentShader = e.fragmentShader.replace(
              '#include <emissivemap_fragment>',
              '\n        vec3 col = vec3(1.);\n        if (ditherDistance > 10.) {\n          if (instanceID > 0.) {\n            totalEmissiveRadiance = mix(totalEmissiveRadiance, vec3(0.), bw);\n            // diffuseColor.rgb = mix(diffuseColor.rgb,col, bw);\n          }\n        } else {\n          totalEmissiveRadiance = mix(totalEmissiveRadiance, vec3(0.), bw);\n          // diffuseColor.rgb = mix(diffuseColor.rgb,col, bw);\n        }\n      '
            )),
            (e.fragmentShader = e.fragmentShader.replace(
              '#include <fog_fragment>',
              '\n      #ifdef USE_FOG\n        #ifdef FOG_EXP2\n          float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n        #else\n          float fogFactor = smoothstep( fogNear, fogFar, vFogDepth * bw );\n        #endif\n        gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n      #endif\n\n\n      \n      // inner glow (esper)\n      float glowOffset = 0.;\n      glowOffset += instanceID * 100.;\n      vec2 s = vUv * 2. - 1.;\n      s += snoise(s + glowOffset + time * .75) * .15;\n      vec2 d = 1. - abs(1.-vUv) * .2 * 1.;\n      vec3 c = getEmissive(vCol[2]);\n      vec3 color = vec3(circ(c.x, s.x, s.y), circ(c.y, s.x, s.y),  circ(c.z, s.x, s.y) + 0.45 ); // color circles			\n      color = clamp(color, 0.53, 0.99);\n      float vFly = 0.;\n      gl_FragColor = mix(gl_FragColor, vec4(color * .8, d), vFly);	\n      diffuseBloom.rgb += gl_FragColor.rgb * vFly;\n  \n      gGlow.rgb = mix(diffuseBloom.rgb, vec3(0.), bw);\n      gGlow.a = 1.;\n      gl_FragColor.rgb = mix(gl_FragColor.rgb * 1.1, gl_FragColor.rgb * .9, normal.b);\n      '
            ))
        }
        get time() {
          return this._time.value
        }
        set time(e) {
          this._time.value = e
        }
        get uCol() {
          return this._uCol.value
        }
        set uCol(e) {
          this._uCol.value = e
        }
        get bw() {
          return this._bw.value
        }
        set bw(e) {
          this._bw.value = e
        }
        get ditherDistance() {
          return this._ditherDistance.value
        }
        set ditherDistance(e) {
          this._ditherDistance.value = e
        }
        constructor(e = {}) {
          super(e),
            this.setValues(e),
            (this._time = {
              value: 0
            }),
            (this._bw = {
              value: 0
            }),
            (this._uCol = {
              value: new u.Vector3()
            }),
            (this._ditherDistance = {
              value: 10
            })
        }
      }
      ;(eB.key = ez().generate()),
        (0, l.e)({
          PetShaderImpl: eB
        })
      let eT = (e, n, t, o) => {
          let r = (0, c.useRef)({}),
            [i] = (0, c.useState)(() => new u.AnimationMixer(e)),
            a = (0, c.useMemo)(() => {
              let t = {}
              return (
                n.forEach((n) =>
                  Object.defineProperty(t, n.name, {
                    enumerable: !0,
                    get() {
                      if (e)
                        return (
                          (r.current[n.name] && r.current[n.name].rootUuid === e.uuid) ||
                            ((r.current[n.name] = i.clipAction(n, e)), (r.current[n.name].rootUuid = e.uuid)),
                          r.current[n.name]
                        )
                    }
                  })
                ),
                {
                  ref: e,
                  clips: n,
                  actions: t,
                  names: n.map((e) => e.name),
                  mixer: i
                }
              )
            }, [e])
          return (
            (0, f.zX)('anim_pet_'.concat(t), (n) => {
              let { name: t, play: r = !0, reset: i = !1, blendDuration: l = 0.2, timeScale: s = 1, startAt: c, loop: m = u.LoopRepeat, force: f = !1 } = n
              if (!e) return null
              if (!o || (a.stopListen && !f)) return
              let { actions: d } = a,
                v = d[t]
              if ((t.replace('_mirror', ''), v)) {
                if (r) {
                  if (
                    (c && (v.time = c),
                    (v.loop = m),
                    v.fadingOut && v._scheduleFading(l, v.getEffectiveWeight(), 1),
                    (v.fadingOut = !1),
                    v.setEffectiveTimeScale(s),
                    i ? v.reset().fadeIn(l).play() : 0 !== v.weight && v.isRunning() ? v.play() : ((v.paused = !1), (v.enabled = !0), v.fadeIn(l).play()),
                    !o.activPetAnimations.hasOwnProperty(t))
                  ) {
                    for (let g in o.activPetAnimations) (d[g].fadingOut = !0), d[g].fadeOut(0.5), delete o.activPetAnimations[g]
                    o.activPetAnimations[t] = !0
                  }
                } else if (!r && !1 === v.fadingOut)
                  for (let p in ((v.fadingOut = !0), v._scheduleFading(l, v.getEffectiveWeight(), 0), o.activPetAnimations))
                    p === t && delete o.activPetAnimations[p]
              }
            }),
            (0, c.useEffect)(
              () => () => {
                ;(r.current = {}),
                  Object.values(a.actions).forEach((n) => {
                    e && i.uncacheAction(n, e)
                  })
              },
              []
            ),
            [a]
          )
        },
        eR = (e, n, t, o) => {
          let r = []
          return (
            e.forEach((t, o, i) => {
              n.includes(t.name) && ((r[o] = e[o].clone()), (r[o].name += '_mirror'))
            }),
            r.map(
              (e) => (
                e.tracks.forEach((n, r, i) => {
                  n.name.includes(t) ? (e.tracks[r].name = n.name.replace(t, o)) : n.name.includes(o) && (e.tracks[r].name = n.name.replace(o, t)),
                    n.name.includes('quaternion') && (e.tracks[r].values = n.values.map((e, n, t) => ((n - 1) % 4 == 0 || (n - 2) % 4 == 0 ? -1 * e : e))),
                    n.name.includes('position') && (e.tracks[r].values = n.values.map((e, n, t) => (n % 3 == 0 ? -1 * e : e)))
                }),
                e
              )
            ),
            e.concat(r.concat([]))
          )
        }
      var eV = t(9497),
        eU = t(619)
      new u.Vector3(), new u.Vector3(), new u.Vector3(-1, 4.3, -2), new u.Vector3(-1.25, -0.5, 0)
      let { damp: ek } = u.MathUtils,
        eN = ['Sliding'],
        ej = (e) => {
          Object.keys(e.activPetAnimations)[0] &&
            !e.activAnimations.thankyou &&
            (0, f.Kn)('anim_pet_'.concat(e.playerId), {
              name: Object.keys(e.activPetAnimations)[0],
              play: !1,
              blendDuration: 0.3
            })
        }

      function eO(e) {
        let { grp: n, playerId: t, player: i } = e,
          a = (0, c.useRef)(),
          { animations: s, scene: m } = (0, eP.L)('/pet.glb'),
          d = (0, c.useMemo)(() => new u.Vector3(), []),
          g = (0, c.useMemo)(() => new u.Vector3(), []),
          p = (0, c.useMemo)(() => new u.Vector3(), []),
          x = (0, c.useMemo)(() => new u.Vector3(), []),
          y = (0, c.useMemo)(() => new u.Object3D(), []),
          b = (0, c.useMemo)(() => new u.Vector3(1, 2, 1), []),
          { bodies: w } = (0, c.useContext)(M.h),
          _ = !0,
          [C, F] = (0, c.useState)(!1),
          D = (0, c.useMemo)(() => {
            let e = new u.Cylindrical(2, 0, 2)
            return (e.rotateDir = 1), e
          }, []),
          { testExperience: S } = (0, h.VB)(),
          A = eR(s, eN, '_Left', '_Right'),
          [I] = eT(a.current, A, t, i),
          z = r.Fk.find((e) => 'cursorTracker' === e.playerId),
          L = (0, c.useMemo)(() => {
            let e = (0, r.EA)('robot', {
              isCharacterInstance: !1
            })
            return (
              m.traverse((n) => {
                n.material &&
                  ((n.hasColor = !0),
                  (n.receiveShadow = !0),
                  (n.material = new eB({
                    vertexColors: 2,
                    side: u.DoubleSide
                  })),
                  i && n.material.uCol.copy(i.color)),
                  (e.eyePosition = e.position),
                  (e.dontLookAtMe = !0)
              }),
              e
            )
          }, []),
          E = (0, r.oR)((e) => e.canInteractWith),
          B = E ? E.player : E,
          [T] = (0, eU.Z)(['/sounds/pet/cat-voice-miou-2.opus', '/sounds/pet/cat-voice-miou-2.mp3'], {
            html5: !0
          }),
          [R] = (0, eU.Z)(['/sounds/pet/cat-voice-miou-7.opus', '/sounds/pet/cat-voice-miou-7.mp3'], {
            html5: !0
          }),
          [V] = (0, eU.Z)(['/sounds/pet/cat-voice-miou-5.opus', '/sounds/pet/cat-voice-miou-5.mp3'], {
            html5: !0
          }),
          [U] = (0, eU.Z)(['/sounds/pet/cat-voice-miou-4.opus', '/sounds/pet/cat-voice-miou-4.mp3'], {
            html5: !0
          }),
          k = [R, V, U, T],
          N = [R, V]
        return (
          (0, c.useEffect)(() => {
            void 0 !== E && (E ? k[u.MathUtils.randInt(0, 2)]() : N[u.MathUtils.randInt(0, 1)]())
          }, [E]),
          (0, l.A)((e, o) => {
            let { clock: l, camera: s, viewport: c } = e
            if (!I.mixer || !n.current) return
            I.mixer.update(o)
            let { ref: u } = (0, v.XV)(),
              { deltaPositionBetweenRaf: h, isSliding: w, isFlyingBack: F, isJumping: M, isFlying: A } = u
            E && B ? g.copy(B.position) : g.copy(n.current.position), l.elapsedTime % 5 > 2.5 && B ? d.copy(B.eyePosition) : d.copy(i.eyePosition)
            let P = _ || !S || h.manhattanLength() > 0.02 || l.elapsedTime % 16 > (E ? 8 : 16 / 3)
            if ((P || (D.theta += 3 * o * D.rotateDir), _)) {
              let T = D.theta % (2 * Math.PI) < Math.PI
              D.theta = 2 * Math.PI + (T ? Math.PI / 2 : -Math.PI / 2)
            }
            if ((b.setFromCylindrical(D), (b.y = 2 + Math.cos(l.elapsedTime)), B && !_)) {
              if (P) {
                let R
                x.subVectors(n.current.position, B.position).normalize()
                let V = x.angleTo(B.dirVector),
                  U = D.theta % (2 * Math.PI) > Math.PI,
                  k = x.distanceToSign(B.dirVector)
                ;(R = U ? (k > 0 ? Math.PI / 2 + V : Math.PI / 2 - V) : k > 0 ? -Math.PI / 2 + V : -Math.PI / 2 - V),
                  (D.theta = R),
                  p.setFromCylindricalCoords(2, R, b.y),
                  p.applyQuaternion(B.quaternion),
                  g.add(p),
                  (0, f.Kn)('anim_pet_'.concat(t), {
                    name: 'Sliding'.concat(U ? '' : '_mirror'),
                    timeScale: 0.3
                  })
              } else
                r.QF.gameplay.value,
                  (0, f.Kn)('anim_pet_'.concat(t), {
                    name: 'Idle_4',
                    timeScale: 1
                  }),
                  b.applyQuaternion(B ? B.quaternion : i.quaternion),
                  g.add(b)
            } else
              A ||
                F ||
                w ||
                M ||
                i.playingEmote ||
                !(r.QF.gameplay.value > 0) ||
                (0, f.Kn)('anim_pet_'.concat(t), {
                  name: 'Idle_1',
                  timeScale: 1
                }),
                b.applyQuaternion(B ? B.quaternion : i.quaternion),
                g.add(b)
            r.QF.blue.value <= 0
              ? ((0, f.Kn)('anim_pet_'.concat(i.playerId), {
                  name: 'Idle_4',
                  timeScale: 1,
                  blendDuration: 0.5
                }),
                (0, f.Kn)('petEmote', {
                  emote: C ? 'Love' : 'PuppyEyes',
                  to: 1,
                  duration: 0.2
                }),
                g.copy(n.current.position),
                (g.z -= 2),
                (g.y += 1.2),
                a.current.position.damp(g, 10, o))
              : a.current.position.damp(g, 4, o),
              z && y.lookAt(z.position),
              y.position.copy(a.current.position),
              r.QF.blue.value > 0.5 && (E && P ? y.lookAt(n.current.position) : _ ? y.quaternion.copy(i.quaternion) : y.lookAt(d)),
              a.current.quaternion.damp(y.quaternion, 8, o),
              L.position.copy(a.current.position),
              (L.height = 0),
              m.traverse((e) => {
                e.material && (e.material.bw = ek(e.material.bw, 1 - r.QF.head.smooth + r.QF.team.smooth, 3, o))
              })
          }, 99),
          (0, f.zX)('update_skin_color_'.concat(t), (e) => {
            i && i.color.fromArray(e),
              m.traverse((e) => {
                e.material &&
                  (e.hasColor ||
                    ((e.hasColor = !0),
                    (e.material = new eB({
                      vertexColors: 2,
                      side: u.DoubleSide
                    }))),
                  i && e.material.uCol.copy(i.color))
              })
          }),
          (0, f.zX)('petEmote', (e) => {
            let { emote: n, to: t = 1, duration: o = 0.3, setDirect: r = !1 } = e
            if (I.stopListen) return
            let i = m.getObjectByName('petFace'),
              a = i.morphTargetDictionary[n]
            for (let l = 0; l < i.morphTargetInfluences.length; l++) l !== a ? (i.morphTargetInfluences[l] = 0) : r && (i.morphTargetInfluences[l] = t)
            if (r) return
            let s = {
              influence: i.morphTargetInfluences[a]
            }
            P.ZP.to(s, {
              influence: t,
              duration: o,
              onUpdate: () => {
                i.morphTargetInfluences[i.morphTargetDictionary[n]] = s.influence
              }
            })
          }),
          (0, f.zX)('anim_'.concat(t), (e) => {
            let { name: n, play: o = !0 } = e
            o
              ? ('meditateyoyo' === n
                  ? (ej(i),
                    (0, f.Kn)('petEmote', {
                      emote: 'Sleep',
                      to: 1
                    }),
                    (L.dontLookAtMe = !0))
                  : ((L.dontLookAtMe = !1),
                    'thankyou' === n
                      ? (console.log(D.rotateDir),
                        (0, f.Kn)('anim_pet_'.concat(t), {
                          name: 'Idle_3',
                          startAt: -0.4 * D.rotateDir,
                          timeScale: -1 * D.rotateDir,
                          loop: u.LoopRepeat
                        }),
                        (0, f.Kn)('petEmote', {
                          emote: 'Love',
                          to: 1,
                          duration: 0.2
                        }))
                      : 'dance' === n
                        ? (ej(i),
                          (0, f.Kn)('petEmote', {
                            emote: 'Love',
                            to: 1
                          }))
                        : 'bow' === n &&
                          (P.ZP.to(a.current.children[0].rotation, {
                            x: Math.PI / 3,
                            overwrite: !0,
                            duration: 1.5,
                            onComplete: function () {
                              P.ZP.to(a.current.children[0].rotation, {
                                x: 0
                              })
                            }
                          }),
                          ej(i),
                          (0, f.Kn)('petEmote', {
                            emote: 'Confident',
                            to: 1,
                            duration: 0.2
                          }))),
                (_ = 'bow' === n || 'thankyou' === n))
              : ((L.dontLookAtMe = !1), (_ = !1))
          }),
          (0, l.A)((e, n) => {
            let { gl: t, camera: o } = e
          }, 2),
          (0, o.jsxs)('group', {
            ref: a,
            name: 'souko',
            children: [
              (0, o.jsx)('group', {
                children: (0, o.jsx)('primitive', {
                  object: m
                })
              }),
              (0, o.jsxs)('mesh', {
                position: [0, 0.4, 0],
                onClick: () => {
                  console.log('click'),
                    (0, h.VB)().testExperience ||
                      (F(!0),
                      (0, f.Kn)('anim_pet_'.concat(t), {
                        name: 'Idle_3',
                        startAt: -0.6,
                        timeScale: -1.5,
                        reset: !0,
                        loop: u.LoopRepeat
                      }),
                      (I.stopListen = !0),
                      window.setTimeout(() => {
                        I.stopListen = !1
                      }, 2200))
                },
                visible: !1,
                children: [
                  (0, o.jsx)('sphereGeometry', {
                    args: [0.33, 10, 10]
                  }),
                  (0, o.jsx)(eV.Z, {
                    color: 'red'
                  })
                ]
              })
            ]
          })
        )
      }
      u.Vector3.prototype.distanceToSign = function (e) {
        return this.x - e.x + this.y - e.y + this.z - e.z
      }
      var eK = t(6924),
        eQ = t(6086),
        eZ = t(5572)
      let eW = () => {
        let e = (0, h.N1)((e) => e.testExperience),
          n = (0, c.useRef)(null),
          t = (0, c.useRef)({
            x: 0,
            y: 0
          }),
          [i, a] = (0, c.useState)(null),
          s = (0, c.useMemo)(() => new u.Vector3(0, 0, 0), []),
          m = (0, c.useMemo)(() => new u.Vector3(0, 0, 0), [])
        return (
          (0, c.useEffect)(() => {
            e ||
              (0, f.Kn)('anim_tempId', {
                name: 'idle',
                blendDuration: 0.4,
                timeScale: p.MQ.idle
              })
          }, [e]),
          (0, c.useEffect)(() => {
            if (!n.current || e) return

            function o(e) {
              ;(t.current.x = (e.clientX / window.innerWidth) * 2 - 1), (t.current.y = -(2 * (e.clientY / window.innerHeight)) + 1)
            }
            let i = (0, r.EA)('cursorTracker', {
              isCharacterInstance: !1
            })
            return (
              a(i),
              window.addEventListener('mousemove', o),
              () => {
                window.removeEventListener('mousemove', o),
                  a(null),
                  (0, eZ.Z)(r.Fk, function (e) {
                    return 'cursorTracker' === e.playerId
                  })
              }
            )
          }, [n, e]),
          (0, l.A)((o, a) => {
            let { camera: l, viewport: c } = o
            if (!n.current || e || !i) return
            ;(i.position = n.current.position), (i.eyePosition = n.current.position), (i.height = 0.01)
            let u = Math.max(l.position.z - r.Fk[0].position.z, 2.2)
            s.set(t.current.x, t.current.y, 0.5),
              s.unproject(l),
              s.sub(l.position).normalize(),
              m.copy(l.position).add(s.multiplyScalar(u / 2)),
              r.Fk[0].position.z,
              n.current.position.copy(m)
          }),
          e
            ? null
            : (0, o.jsx)('object3D', {
                ref: n,
                keyPlayerId: 'cursorTracker',
                name: 'mixamorigHead',
                position: [0, 0, 0]
              })
        )
      }

      function eG(e) {
        let { playerId: n } = e,
          [t] = (0, eU.Z)(['/sounds/main-foley-footstep-1.opus', '/sounds/main-foley-footstep-1.mp3'], {
            html5: !0
          }),
          [o] = (0, eU.Z)(['/sounds/main-foley-footstep-2.opus', '/sounds/main-foley-footstep-2.mp3'], {
            html5: !0
          }),
          [r] = (0, eU.Z)(['/sounds/main-foley-footstep-3.opus', '/sounds/main-foley-footstep-3.mp3'], {
            html5: !0
          }),
          [i] = (0, eU.Z)(['/sounds/main-foley-footstep-4.opus', '/sounds/main-foley-footstep-4.mp3'], {
            html5: !0
          }),
          [a] = (0, eU.Z)(['/sounds/main-foley-footstep-5.opus', '/sounds/main-foley-footstep-5.mp3'], {
            html5: !0
          }),
          [l] = (0, eU.Z)(['/sounds/main-foley-footstep-6.opus', '/sounds/main-foley-footstep-6.mp3'], {
            html5: !0
          }),
          [s] = (0, eU.Z)(['/sounds/main-foley-footstep-7.opus', '/sounds/main-foley-footstep-7.mp3'], {
            html5: !0
          }),
          [c] = (0, eU.Z)(['/sounds/main-foley-jump.opus', '/sounds/main-foley-jump.mp3'], {
            html5: !0
          }),
          m = [t, o, r, i, a, l, s],
          d = {
            leftFoot: () => {
              m[u.MathUtils.randInt(0, 6)]()
            },
            rightFoot: () => {
              m[u.MathUtils.randInt(0, 6)]()
            },
            jump: () => {
              c()
            }
          }
        return (
          (0, f.zX)('sound_'.concat(n), (e) => {
            let { name: n } = e
            d[n]()
          }),
          null
        )
      }

      function eX(e) {
        let { player: n } = e,
          t = (0, c.useMemo)(() => new u.Vector3(0, 0, 59), []),
          [o, r] = (0, h.N1)((e) => [e.testExperience, e.startedMoved]),
          [i, a] = (0, eU.Z)(['/sounds/music-teaser-party-loop.opus', '/sounds/music-teaser-party-loop.mp3'], {
            volume: 1,
            loop: !0,
            html5: !0
          }),
          [s, m] = (0, eU.Z)(['/sounds/env-wind-grass-loop.opus', '/sounds/env-wind-grass-loop.mp3'], {
            volume: 1,
            loop: !0,
            html5: !0
          }),
          [f, d] = (0, eU.Z)(['/sounds/music-exploration-unloop.opus', '/sounds/music-exploration-unloop.mp3'], {
            volume: 1,
            loop: !0,
            html5: !0
          })
        return (
          (0, c.useEffect)(
            () => () => {
              a && a.stop(), a.sound && a.sound.stop(), m && m.stop(), m.sound && m.sound.stop(), d && d.stop(), d.sound && d.sound.stop()
            },
            [o, r]
          ),
          (0, l.A)(() => {
            if (o && r && a.sound) {
              let e = n.position.distanceTo(t)
              46 > n.position.distanceTo(t) ? a.sound.volume(1) : a.sound.volume(Math.max((100 - (e - 46)) / 100, 0.1)),
                a &&
                  a.sound &&
                  (a.sound.playing()
                    ? !a.sound.isFadingOut &&
                      e > 110 &&
                      ((a.sound.isFadingIn = !1),
                      a.sound.fade(a.sound.volume(), 0, 3e3),
                      (a.sound.isFadingOut = !0),
                      setTimeout(() => {
                        a.sound.isFadingOut && (a.sound.pause(), (a.sound.isFadingOut = !1))
                      }, 3e3))
                    : !a.sound.isFadingIn &&
                      e <= 110 &&
                      ((a.sound.isFadingOut = !1),
                      a.sound.fade(a.sound.volume(), 0.1, 3e3),
                      (a.id = a.sound.play(a.id)),
                      (a.sound.isFadingIn = !0),
                      setTimeout(() => {
                        a.sound.isFadingIn && (a.sound.isFadingIn = !1)
                      }, 3e3))),
                d &&
                  d.sound &&
                  (d.sound.playing()
                    ? !d.sound.isFadingOut &&
                      e < 100 &&
                      ((d.sound.isFadingIn = !1),
                      d.sound.fade(d.sound.volume(), 0, 3e3),
                      (d.sound.isFadingOut = !0),
                      setTimeout(() => {
                        d.sound.isFadingOut && (d.sound.pause(), (d.sound.isFadingOut = !1))
                      }, 3e3))
                    : !d.sound.isFadingIn &&
                      e > 100 &&
                      ((d.sound.isFadingOut = !1),
                      d.sound.fade(d.sound.volume(), 1, 3e3),
                      (d.id = d.sound.play(d.id)),
                      (d.sound.isFadingIn = !0),
                      setTimeout(() => {
                        d.sound.isFadingIn && (d.sound.isFadingIn = !1)
                      }, 3e3)))
            } else !o && (a && a.stop(), a.sound && a.sound.stop(), m && m.stop(), m.sound && m.sound.stop(), d && d.stop(), d.sound && d.sound.stop())
          }),
          null
        )
      }
      let { damp: eq } = u.MathUtils,
        eH = {}
      Object.keys(p.l0).forEach((e) => {
        eH[p.l0[e]] = e
      })
      let eY = () => {
        let e = (0, c.useMemo)(() => new u.Vector3(), []),
          n = (0, d.LM)((e) => e.id),
          t = (0, c.useMemo)(() => new u.Object3D(), []),
          i = (0, c.useMemo)(() => new u.Vector3(0.5, 2.5, 0), []),
          [a, s] = (0, c.useState)(null),
          p = (0, F.W)(null, () => s({})),
          [y, b] = (0, c.useState)(!1),
          S = (0, c.useMemo)(() => {
            let e = (0, r.EA)(n, {
              isCharacterInstance: !0,
              initAnim: 3
            })
            return (
              (0, d.av)({
                instance: e
              }),
              e
            )
          }, [n])
        ;(0, eK.Z)(S, n),
          x(n),
          w(n),
          (0, c.useEffect)(() => {
            let e = p.current
            e && S && ((S.position = e.position), (S.quaternion = e.quaternion))
          }, [n, p.current, S])
        let [M] = (0, m.r)(p, {
          type: 'dynamic',
          sleep: !1,
          hitbox: 'sphere'
        })
        ;(0, c.useEffect)(() => {
          ;(0, v.EA)({
            ref: M
          }),
            b(!0)
        }, []),
          (0, f.zX)('physicready', () => {
            M.sleep = !1
          }),
          (0, C.X9)(),
          D(M)
        let A = (0, c.useMemo)(() => new u.Vector3(-4, -2.27, -8), []),
          P = 0
        return (
          (0, c.useRef)(0),
          (0, l.A)((n, t) => {
            if (!p.current || S.playingEmote) return
            if (15 == ++P)
              (0, ea.N1)({
                active: !1,
                firstLoad: !1
              }),
                setTimeout(() => {
                  ;(0, r.IW)({
                    colorCharacter: !0
                  })
                }, 700),
                (0, r.IW)({
                  colorCharacter2: !0
                })
            else if (P <= 15) return
            if (!(0, h.VB)().testExperience) {
              e.copy(M.entity.position),
                e.lerpVectors(i, A, r.QF.fullhead.smooth),
                M.entity.position.damp(e, r.QF.fullhead.smooth <= 0.01 ? 2 + 40 * r.QF.fullhead.value : 12, t),
                M.entity.physic.position.copy(M.entity.position),
                (M.entity.physic.position.y += 2),
                M.entity.physic.quaternion.identity(),
                M.entity.quaternion.identity()
              return
            }
            let { testExperience: o } = (0, h.VB)()
            o || M.entity.quaternion.identity(),
              (M.sleep = !o),
              (0, eQ.jF)({
                paused: !o
              })
          }),
          (0, f.zX)('physicRafThrottled', () => {
            if (!M.entity || M.sleep || !p.current) return
            let e = null
            for (let n in S.activAnimations) e = eH[n]
            ;(0, d.av)({
              position: p.current.position.toArray(),
              quaternion: p.current.quaternion.toArray(),
              animation: e
            })
          }),
          (0, f.zX)('showPlayerName', (e) => {
            let { show: n } = e
            ;(0, r.IW)({
              showPlayerName: n
            })
          }),
          (0, c.useEffect)(() => {
            ;(0, r.IW)({
              playerApi: M
            })
          }, [M]),
          (0, l.A)((n, o) => {
            let { testExperience: r } = (0, h.VB)()
            if (M.sleep || !r) return
            let { physic: i } = M.entity
            t.copy(i),
              t.translateY(-M.capsuleInfo.radius),
              t.translateY(M.capsuleInfo.segment.end.y),
              e.copy(M.entity.position),
              M.entity.position.damp(t.position, 10, o),
              M.deltaPositionBetweenRaf.subVectors(e, M.entity.position),
              M.entity.quaternion.damp(i.quaternion, 10, o)
          }),
          (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsxs)('group', {
                ref: p,
                position: (0, d.PR)().position,
                children: [
                  (0, o.jsx)('mesh', {
                    scale: 2,
                    'position-y': 4,
                    visible: !1,
                    children: (0, o.jsx)('boxGeometry', {
                      ags: [4, 7, 4]
                    })
                  }),
                  y &&
                    (0, o.jsx)(g.Z, {
                      grpRef: p,
                      playerId: n,
                      player: S,
                      dynamic: !0
                    })
                ]
              }),
              (0, o.jsx)(eO, {
                grp: p,
                playerId: n,
                player: S
              }),
              p.current &&
                (0, o.jsx)(e_, {
                  grp: p
                }),
              p.current &&
                (0, o.jsx)(_.Z, {
                  playerId: n,
                  grpRef: p,
                  player: _.Z
                }),
              p.current &&
                (0, o.jsx)(eS, {
                  playerId: n,
                  grpRef: p
                }),
              (0, o.jsx)(eA, {}),
              (0, o.jsx)(eW, {}),
              (0, o.jsx)(eG, {
                playerId: n
              }),
              (0, o.jsx)(eX, {
                player: S
              })
            ]
          })
        )
      }
      P.ZP.ticker.remove(P.ZP.updateRoot)
      let eJ = () => {
        let e = c.useRef(0)
        return (
          (0, l.A)((n, t) => {
            ;(e.current += t), P.ZP.updateRoot(e.current)
          }),
          null
        )
      }
      var e$ = t(3865)
      new u.MeshBasicMaterial({
        color: 2174322
      }),
        (u.MeshBasicMaterial.prototype.onBeforeCompile = function (e) {
          ;(e.fragmentShader = '\n    layout(location = 1) out vec4 gBloom;\n    '.concat(e.fragmentShader, '\n  ')),
            (e.fragmentShader = e.fragmentShader.replace('#include <fog_fragment>', '\n    #include <fog_fragment>\n    gBloom.rgb = vec3(0.);\n    '))
        }),
        (u.LineBasicMaterial.prototype.onBeforeCompile = function (e) {
          ;(e.fragmentShader = '\n    layout(location = 1) out vec4 gBloom;\n    '.concat(e.fragmentShader, '\n  ')),
            (e.fragmentShader = e.fragmentShader.replace('#include <fog_fragment>', '\n    #include <fog_fragment>\n    gBloom.rgb = vec3(0.);\n    '))
        })
      let e0 = (e, n, t) => (n - t == 0 ? 1 : (e - t) / (n - t)),
        e1 = (e, n, t) => Math.min(Math.max(e, n), t),
        { damp: e2 } = u.MathUtils,
        e3 = () =>
          (0, l.A)((e, n) => {
            Object.keys(r.QF.sections).forEach((e) => {
              let t = r.QF.sections[e]
              if ((0, h.VB)().testExperience) {
                'gameplay' === e ||
                  ('blue' === e || 'fullhead' === e || 'head' === e ? ((r.QF[e].value = 1), (r.QF[e].smooth = 1)) : ((r.QF[e].value = 0), (r.QF[e].smooth = 0)))
                return
              }
              if (t.ref) {
                let { offsetTop: o, offsetHeight: i } = t.ref,
                  a = ((0, r.y0)().posY || 0) + t.offsetvw * i,
                  l = e0(a, o + i * t.threshold, o)
                r.QF[e] && ((r.QF[e].value = e1(l, 0, 1)), (r.QF[e].smooth = e2(r.QF[e].smooth, e1(l, 0, 1) || 0, 4, n)))
              }
            })
          })

      function e5(e) {
        return (0, o.jsx)(M.Z, { ...e })
      }
      class e4 extends u.ShaderMaterial {
        constructor(e) {
          super({
            glslVersion: u.GLSL3,
            defines: {
              KERNEL_RADIUS: e,
              SIGMA: e
            },
            uniforms: {
              tMap: new u.Uniform(null),
              tDof: new u.Uniform(null),
              tDepth: new u.Uniform(null),
              motionFactor: new u.Uniform(0),
              dof: new u.Uniform(0),
              uDirection: new u.Uniform(new u.Vector2(0.5, 0.5)),
              uResolution: new u.Uniform(new u.Vector2()),
              mBlur: new u.Uniform(new u.Vector2())
            },
            vertexShader: '#define GLSLIFY 1\nout vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  gl_Position = vec4(position, 1.0);\n}\n',
            fragmentShader:
              'precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nlayout(location = 0) out vec4 gBloom;\nlayout(location = 1) out vec4 gDof;\n\nuniform sampler2D tMap;\nuniform sampler2D tDof;\nuniform sampler2D tDepth;\nuniform vec2 uDirection;\nuniform vec2 mBlur;\nuniform float dof;\nuniform float motionFactor;\nuniform vec2 uResolution;\n\n#include <packing>\n\nin vec2 vUv;\n\nfloat gaussianPdf(float x, float sigma) {\n  return 0.39894 * exp(-0.5 * x * x / (sigma * sigma)) / sigma;\n}\nvec4 blur(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {\n  vec2 invSize = 1.0 / resolution;\n  float fSigma = float(SIGMA);\n  float weightSum = gaussianPdf(0.0, fSigma);\n  vec3 diffuseSum = texture(image, uv).rgb * weightSum;\n  for(int i = 1; i < KERNEL_RADIUS; i++) {\n    float x = float(i);\n    float w = gaussianPdf(x, fSigma);\n    vec2 uvOffset = direction * invSize * x;\n    vec3 sample1 = texture(image, uv + uvOffset).rgb;\n    vec3 sample2 = texture(image, uv - uvOffset).rgb;\n    diffuseSum += (sample1 + sample2) * w;\n    weightSum += 2.0 * w;\n  }\n  return vec4(diffuseSum / weightSum, 1.0);\n}\n\nconst float highlite = 0.0002;\n\nfloat readDepthFrag( float fragCoordZ, float cameraNear, float cameraFar) {\n  float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );\n  return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );\n}\n\nfloat parabola( float x){\n    return  pow(sin(3.14159 * x * 1.0), 3.);\n}\n\nvoid main() {\n  ivec2 fCoord = ivec2(gl_FragCoord.xy);\n\n  float d = smoothstep(0.8, 1., readDepthFrag(texture(tDepth, vUv).x, 10., 3500.));\n\n  gBloom = blur(tMap, vUv, uResolution, uDirection);\n  // gDof = blur(tDof, vUv, uResolution, uDirection);\n  // float pBlur = mBlur.y;\n  // vec2 motionBlur = vec2(pBlur / 3., 0.) * d;\n  // float mBlurFactor = smoothstep(0.005, 0.02, abs(mBlur.y * d));\n  if (dof > 0.) {\n    // gDof = blur(tDof, vUv, uResolution, uDirection);\n    float pBlur = mBlur.y;\n    vec2 motionBlur = vec2(pBlur / 3., 0.) * d;\n    float mBlurFactor = smoothstep(0.005, 0.02, abs(mBlur.y * d));\n    gDof = blur(tDof, vUv, uResolution, mix(uDirection * (1. - mBlurFactor), motionBlur, mBlurFactor));\n  } else {\n    gDof = vec4(vec3(1.), 1.);\n  }\n  // gDof = mix(blur(tDof, vUv, uResolution, uDirection), texture(tDof, motionBlur), smoothstep(0., 0.005, (mBlur.x + mBlur.y)));\n}\n',
            blending: u.NoBlending
          })
        }
      }
      class e9 extends u.RawShaderMaterial {
        constructor(e) {
          super({
            glslVersion: u.GLSL3,
            defines: {
              NUM_MIPS: e
            },
            uniforms: {
              tDepth: new u.Uniform(null),
              tBlur1: new u.Uniform(null),
              tBlur2: new u.Uniform(null),
              tBlur3: new u.Uniform(null),
              tBlur4: new u.Uniform(null),
              tBlur5: new u.Uniform(null),
              tDof1: new u.Uniform(null),
              tDof2: new u.Uniform(null),
              tDof3: new u.Uniform(null),
              tDof4: new u.Uniform(null),
              tDof5: new u.Uniform(null),
              uBloomFactors: new u.Uniform(null)
            },
            vertexShader:
              '#define GLSLIFY 1\nin vec3 position;\nin vec2 uv;\n\nout vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  gl_Position = vec4(position, 1.0);\n}\n',
            fragmentShader:
              'precision highp float;\n#define GLSLIFY 1\n\nlayout(location = 0) out vec3 gBloom;\nlayout(location = 1) out vec3 gDof;\nuniform sampler2D tBlur1;\nuniform sampler2D tBlur2;\nuniform sampler2D tBlur3;\nuniform sampler2D tBlur4;\nuniform sampler2D tBlur5;\n\nuniform sampler2D tDof1;\nuniform sampler2D tDof2;\nuniform sampler2D tDof3;\nuniform sampler2D tDof4;\nuniform sampler2D tDof5;\nuniform float uBloomFactors[NUM_MIPS];\n\nin vec2 vUv;\n\nvoid main() {\n    gBloom = (uBloomFactors[0] * texture(tBlur1, vUv) +\n                uBloomFactors[1] * texture(tBlur2, vUv) +\n                uBloomFactors[2] * texture(tBlur3, vUv) +\n                uBloomFactors[3] * texture(tBlur4, vUv) +\n                uBloomFactors[4] * texture(tBlur5, vUv)).rgb;\n    gDof = (.2 * texture(tDof1, vUv) +\n                .2 * texture(tDof2, vUv) +\n                .2 * texture(tDof3, vUv) +\n                .2 * texture(tDof4, vUv) +\n                .2 * texture(tDof5, vUv)).rgb;\n\n    // gBloom = vec3(0.,1.,0.);\n    // gDof = vec3(1.,1.,1.);\n    // FragColor.rgb = dither(FragColor.rgb);\n}\n',
            blending: u.NoBlending,
            depthWrite: !1,
            depthTest: !1
          })
        }
      }
      let e8 = new u.ShaderMaterial({
        uniforms: {
          time: {
            value: null
          },
          cinematic: {
            value: 0
          },
          dazzle: {
            value: 0
          },
          section1: {
            value: 0
          },
          section2: {
            value: 0
          },
          section3: {
            value: 0
          },
          section4: {
            value: 0
          },
          section5: {
            value: 0
          },
          section6: {
            value: 0
          },
          dof: {
            value: 0
          },
          mBlur: {
            value: new u.Vector2()
          },
          lightPos: {
            value: null
          },
          tDiffuse: {
            value: null
          },
          tBright: {
            value: null
          },
          tDof: {
            value: null
          },
          tDepth: {
            value: null
          },
          tPosition: {
            value: null
          },
          tNormal: {
            value: null
          },
          uBloomFactors: new u.Uniform(null)
        },
        fragmentShader:
          "precision highp float;\nprecision highp int;\n#define GLSLIFY 1\n\nout highp vec4 pc_fragColor;\n\n#include <common>\n#include <packing>\n\nconst float weight[5] = float[] (0.227027, 0.1945946, 0.1216216, 0.054054, 0.016216);\nvec4 blur(sampler2D image,vec2 uv, vec2 direction){\n  vec2 tex_offset = 1.0 / vec2( textureSize(image, 0) );		// gets size of single texel\n    vec3 result = texture(image, uv).rgb * weight[0];	// current fragment's contribution\n\n    vec2 tex;\n    for(int i = 1; i < 5; ++i){\n      tex = direction * tex_offset * float(i);\n      result += texture(image, uv + tex).rgb * weight[i];\n      result += texture(image, uv - tex).rgb * weight[i];\n    }\n\n    return vec4(result, 1.0);\n}\n\nfloat depthSampleToWorld(float depth, float cameraNear, float cameraFar) {\n	// return cameraNear * cameraFar / (cameraFar - depth * (cameraFar - cameraNear));\n  float viewZ = perspectiveDepthToViewZ( depth, cameraNear, cameraFar );\n  return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );\n\n}\n\nfloat sobelDepth(sampler2D tex, ivec2 xy, float camNear, float camFar) {\n  float\n    x00 = depthSampleToWorld(texelFetch(tex, xy + ivec2(-1, -1), 0).x, camNear, camFar),\n    x01 = depthSampleToWorld(texelFetch(tex, xy + ivec2(-1,  0), 0).x, camNear, camFar),\n    x02 = depthSampleToWorld(texelFetch(tex, xy + ivec2(-1,  1), 0).x, camNear, camFar),\n    x10 = depthSampleToWorld(texelFetch(tex, xy + ivec2( 0, -1), 0).x, camNear, camFar),\n    x11 = depthSampleToWorld(texelFetch(tex, xy + ivec2( 0,  0), 0).x, camNear, camFar),\n    x12 = depthSampleToWorld(texelFetch(tex, xy + ivec2( 0,  1), 0).x, camNear, camFar),\n    x20 = depthSampleToWorld(texelFetch(tex, xy + ivec2( 1, -1), 0).x, camNear, camFar),\n    x21 = depthSampleToWorld(texelFetch(tex, xy + ivec2( 1,  0), 0).x, camNear, camFar),\n    x22 = depthSampleToWorld(texelFetch(tex, xy + ivec2( 1,  1), 0).x, camNear, camFar);\n  float\n    x = x00 + 2.0f * x10 + x20 - (x02 + 2.0f * x12 + x22),\n    y = x00 + 2.0f * x01 + x02 - (x20 + 2.0f * x21 + x22);\n  return sqrt(x * x + y * y);\n}\n\nvec3 toon(\n  vec3 colorIn, uint steps,\n  ivec2 fCoord, sampler2D depthTex,\n  float camNear, float camFar,\n  float normalWeight, float depthWeight,\n  float edgeThresholdMin, float edgeThresholdMax, vec3 color, float scale\n) {\n  // colorIn = floor(colorIn * (float(steps) - 0.1f)) / float(steps);\n  float depth = depthWeight * sobelDepth(depthTex, fCoord, camNear, camFar);\n  float diff =  depth;\n\n  colorIn = mix(colorIn, color, smoothstep(edgeThresholdMin, edgeThresholdMax, diff * scale));\n  return colorIn;\n}\n\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tBright;\nuniform sampler2D tDof;\nuniform sampler2D tDepth;\n\nuniform float time;\nuniform float section1;\nuniform float section2;\nuniform float section3;\nuniform float section4;\nuniform float section5;\nuniform float section6;\nuniform float dof;\nuniform float cinematic;\nuniform float dazzle;\nuniform vec3 lightPos;\nuniform vec2 mBlur;\n\nfloat cameraNear = 10.;\nfloat cameraFar = 3500.;\nconst float highlite = 0.0002;\n\nfloat readDepthFrag( float fragCoordZ, float cameraNear, float cameraFar) {\n  float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );\n  return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );\n}\n\n vec3 A( vec3 color ) { \n  \n 	color *= 1.7; \n 	return saturate(( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 )); \n  \n } \n\nvec3 blendDifference(vec3 base, vec3 blend) {\n	return abs(base-blend);\n}\n\nvec3 blendExclusion(vec3 base, vec3 blend) {\n	return base+blend-2.0*base*blend;\n}\nvec3 blendMultiply(vec3 base, vec3 blend) {\n	return base*blend;\n}\n\nvec3 blendAdd(vec3 base, vec3 blend) {\n	return min(base+blend,vec3(1.0));\n}\n\nin vec2 vUv;\nvoid main() {\n\n  vec2 uv2 = vUv;\n\n  uvec2 fragCoord = uvec2(gl_FragCoord.xy);\n  ivec2 fCoord = ivec2(gl_FragCoord.xy);\n\n  vec4 color = vec4(1.);\n  // vec4 diffuse = texture(tDiffuse, uv2);\n  if ((uv2.y < section2 && uv2.y > section3) || ((uv2.y < section4 || uv2.y < section5) && section6 < uv2.y)) {\n  // if ((uv2.y < section2 && uv2.y > section3) || ((uv2.y < section4 || uv2.y < section5) && section6 < uv2.y)) {\n    // fCoord.y -= int(.25 * section2 * gl_FragCoord.y);\n  }\n  vec4 diffuse = texture(tDiffuse, uv2);\n  float d = readDepthFrag(texture(tDepth, uv2).x, 10., 3500.);\n  vec3 bright = texture(tBright, uv2).xyz;\n  //vec3(0.141,0.141,0.141)\n\n  vec4 colorBlend = vec4(1.);\n  color.rgb *= diffuse.rgb;\n  color.rgb = blendAdd(color.rgb, mix(vec3(0.), bright * 1.5, 1.));\n  pc_fragColor.rgb = color.rgb;\n\n  if (section4 > 0. && section5 <= 0.) {\n    color.rgb = vec3(1.);\n  }\n\n  if ((vUv.y >= section3) ||  ((vUv.y < section4 || vUv.y < section5) && section6 < vUv.y)) {\n  // if ((vUv.y < section2 && vUv.y > section3) || ((vUv.y < section4 || vUv.y < section5) && section6 < vUv.y)) {\n    vec3 bg = vec3(1.);\n    vec3 outline = vec3(1.);\n    // vec3 outline = vec3(0.586,0.922,0.922) ;\n\n   if (section4 > 0. && section5 <= .0) {\n      bg = vec3(0.141);\n      outline = vec3(0.21);\n    }\n\n    if (section5 > uv2.y) {\n      bg = mix(bg, vec3(1.), 1.);\n      outline =  vec3(0.9);\n    }\n    \n     \n    vec3 diffuseToon = toon(\n      bg, 1u, fCoord, tDepth,\n      cameraNear, cameraFar,\n      0.2f + .5f * (section2 - section5), 1.0f + 4.3f * (section2 - section5),\n      .1f, .8f - (.1f * section2 - section5),\n      outline, \n      15. * (1. - smoothstep(0.6, 1., vUv.x))\n    );\n\n    color.rgb = diffuseToon.rgb;\n     color.rgb = mix(color.rgb, bg, ((smoothstep(0.1, 1., vUv.x) - smoothstep(0.5, 1., section5)) * .6));\n     color.rgb = mix(color.rgb, bg, (smoothstep(0.6, 1., vUv.y) - smoothstep(0.5, 1., section5))* .8);\n\n    // pc_fragColor.rgb = color.rgb;\n  } else {\n  }\n  pc_fragColor.a = 1.;\n\n  colorBlend.rgb = color.rgb;\n\n  // pc_fragColor.rgb = vec3(1.) * pow( ( color.rgb + vec3(.0) ), vec3(1.0) );\n\n  // pc_fragColor.rgb = colorBlend.rgb;\n  pc_fragColor.rgb = mix(pc_fragColor.rgb, colorBlend.rgb, smoothstep(0., .8, section3));\n\n  float brighterFactor = smoothstep(0.2, 1., d);\n  pc_fragColor.rgb = vec3(1.) * pow( ( pc_fragColor.rgb + vec3(.3 * dazzle * brighterFactor) ), vec3(1.0) );\n  \n  if (dof > 0.) {\n    vec3 bokeh = texture(tDof, uv2).rgb;\n    vec2 q = vec2(uv2 - 0.5);\n\n    q /= .7;\n    q -= vec2(0., .05);\n    float dst = length(q);\n    dst = pow(smoothstep(0.4, 1., dst), 1.);\n\n    float factor = dst;\n\n    bokeh = vec3(1.) * pow( ( bokeh.rgb + vec3(.3 * dazzle * brighterFactor) ), vec3(1.0) );\n    if (d > .6) {\n      factor = smoothstep(0.8, 1., d);\n      pc_fragColor.rgb = mix(pc_fragColor.rgb, bokeh.rgb, smoothstep(0.001, 0.02, abs(mBlur.y) * factor));\n    } else {\n      // pc_fragColor.rgb = vec3(factor);\n      pc_fragColor.rgb = mix(pc_fragColor.rgb, bokeh.rgb * 1., factor * (1. - smoothstep(0.001, 0.02, abs(mBlur.y))));\n    }\n  }\n\n  if (uv2.y < 0.15 * cinematic) {\n    pc_fragColor.rgb = vec3(0.);\n  }\n  if (uv2.y > 1. - .15 * cinematic) {\n    pc_fragColor.rgb = vec3(0.);\n  }\n  pc_fragColor.a = color.a;\n}\n",
        vertexShader:
          '#define GLSLIFY 1\n#include <logdepthbuf_pars_vertex>\nout vec2 vUv;\nvoid main() {\n  vUv = uv;\n	#include <logdepthbuf_vertex>\n  gl_Position = vec4(position, 1.0);\n}\n',
        glslVersion: u.GLSL3
      })
      var e6 = e8,
        e7 = t(2248)
      let ne = new u.Vector2(1, 0),
        nn = new u.Vector2(0, 1),
        { damp: nt } = u.MathUtils
      var no = t(2975),
        nr = t(5878)
      class ni extends u.MeshPhongMaterial {
        onBeforeCompile(e) {
          ;(e.uniforms.time = this._time),
            (e.uniforms.bw = this._bw),
            (e.uniforms.fw = this._fw),
            (e.uniforms.shininess = {
              value: 10
            }),
            (e.uniforms.roughness = {
              value: 1
            }),
            (e.uniforms.specular = {
              value: new u.Color(16711680)
            }),
            (e.uniforms.bw = this._bw),
            (e.uniforms.ditherDistance = this._ditherDistance),
            (e.vertexShader =
              '\n    // precision highp int;\n    \n    #if NUM_CLIPPING_PLANES > 0\n        varying vec3 vClipPosition;\n      #endif\n\n      uniform float time;\n      out float yPos;\n      out float vHolo;\n      out float vFly;\n      out vec2 vUv;\n      out vec3 vInstanceColor;\n      in vec3 instanceVColor;\n      in float height;\n      in float holo;\n      in float fly;\n\n      '
                .concat(
                  eE,
                  '\n\n      // snoise\n      vec3 mod289(vec3 x) {\n        return x - floor(x * (1.0 / 289.0)) * 289.0;\n      }\n      vec2 mod289(vec2 x) {\n        return x - floor(x * (1.0 / 289.0)) * 289.0;\n      }\n      vec3 permute(vec3 x) {\n        return mod289(((x * 34.0) + 1.0) * x);\n      }\n      float snoise(vec2 v) {\n        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);\n        vec2 i = floor(v + dot(v, C.yy));\n        vec2 x0 = v - i + dot(i, C.xx);\n        vec2 i1;\n        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n        vec4 x12 = x0.xyxy + C.xxzz;\n        x12.xy -= i1;\n        i = mod289(i);\n        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));\n        vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);\n        m = m * m;\n        m = m * m;\n        vec3 x = 2.0 * fract(p * C.www) - 1.0;\n        vec3 h = abs(x) - 0.5;\n        vec3 ox = floor(x + 0.5);\n        vec3 a0 = x - ox;\n        m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);\n        vec3 g;\n        g.x = a0.x * x0.x + h.x * x0.y;\n        g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n        return 130.0 * dot(m, g);\n      }\n\n\n      mat4 scale(float x, float y, float z) {\n        return mat4(vec4(x, 0.0, 0.0, 0.0), vec4(0.0, y, 0.0, 0.0), vec4(0.0, 0.0, z, 0.0), vec4(0.0, 0.0, 0.0, 1.0));\n      }\n    '
                )
                .concat(e.vertexShader, '\n    \n    ')),
            (e.vertexShader = e.vertexShader.replace(
              '#include <skinning_vertex>',
              '\n      \n      vUv = uv;\n      vFly = fly;\n      #ifdef USE_SKINNING\n        vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n        vec4 skinned = vec4( 0.0 );\n        skinned += boneMatX * skinVertex * skinWeight.x;\n        skinned += boneMatY * skinVertex * skinWeight.y;\n        skinned += boneMatZ * skinVertex * skinWeight.z;\n        skinned += boneMatW * skinVertex * skinWeight.w;\n        vec3 temp = ( bindMatrixInverse * skinned ).xyz;\n\n        float noise = 1.0 - (snoise(vec2((time / 4. - transformed.x / 2.0) * 1. + 2. * holo, (time / 1. - transformed.y / 2.0) * 1. + 2. * holo)));\n        if (transformed.y > .0) {\n          skinned.x += noise / 1. / min(1., 1.) * (1. - smoothstep(-2. * 1., 2.2 * 1., transformed.y)) * smoothstep(.3, 3., transformed.y);\n          skinned.z -= noise / 1. / min(1., 1.) * (1. - smoothstep(-2. * 1., 2.2 * 1., transformed.y)) * smoothstep(.3, 3., transformed.y);\n        }\n        skinned.y +=  2. * holo;\n        transformed = ( bindMatrixInverse * skinned ).xyz;\n\n      #endif\n\n      '.concat(
                '\n  instanceID = float(gl_InstanceID);\n',
                '\n      '
              )
            )),
            (e.vertexShader = e.vertexShader.replace(
              '#include <project_vertex>',
              '\n      float holoSmooth = smoothstep(0.5, 1., holo);\n      vHolo = holo;\n      vInstanceColor = instanceVColor;\n      vec4 mvPosition = vec4(transformed, 1.0);\n\n      // #ifdef USE_INSTANCE\n        mvPosition = instanceMatrix * mvPosition;\n        instanceID = float(gl_InstanceID);\n      // #endif\n\n      #ifdef USE_SKINNING\n\n      #else\n      float noise = 0.0;\n      noise = 1.0 - (snoise(vec2((time / 4. - transformed.x / 2.0) * 1. + 2. * holo, (time / 1. - transformed.y / 2.0) * 1. + 2. * holo)));\n      if (mvPosition.y > .4) {\n        mvPosition.x += noise / 2.5 / min(1., height) * (1. - smoothstep(-2. * height, 3.2 * height, mvPosition.y)) * smoothstep(.3, 3., mvPosition.y);\n        mvPosition.z -= noise / 2.5 / min(1., height) * (1. - smoothstep(-2. * height, 3.2 * height, mvPosition.y)) * smoothstep(.3, 3., mvPosition.y);\n      }\n  \n      #endif\n\n      vec4 mPosition = modelMatrix * mvPosition;\n\n      yPos = length(transformed.xyz);\n      mPosition.y += holoSmooth * .2;\n    \n      // mPosition = scale(1. - holoSmooth * 1., 1. + holoSmooth * .5, 1. - holoSmooth * 1.) * mPosition;\n      mPosition = scale(1., 1. + holoSmooth * .5, 1.) * mPosition;\n    \n      mvPosition = viewMatrix * mPosition;\n      gl_Position = projectionMatrix * mvPosition;\n\n      '
            )),
            (e.fragmentShader =
              '\n\n     in float yPos;\n     in float vHolo;\n     in float vFly;\n     in vec2 vUv;\n     in vec3 vInstanceColor;\n     uniform float time;\n     uniform float bw;\n     uniform float fw;\n     layout(location = 1) out vec4 gGlow;\n\n     '
                .concat(
                  eD.ZP,
                  '\n\n     float circ(float d, float x, float y){		\n        return d + sqrt( x*x*x*x*x*x + y*y*y*y*y*y );\n     }\n     vec3 mod289(vec3 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;} vec2 mod289(vec2 x) {return x - floor(x * (1.0 / 289.0)) * 289.0;} vec3 permute(vec3 x) {return mod289(((x*34.0)+1.0)*x);} float snoise(vec2 v){const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439); vec2 i  = floor(v + dot(v, C.yy) ); vec2 x0 = v -   i + dot(i, C.xx); vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0); vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i); vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 )); vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0); m = m*m ; m = m*m ; vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h ); vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw; return 130.0 * dot(m, g);}\n      \n     vec4 roundVec(vec4 x){\n        vec4 a = vec4(1.);\n        a.x = round(x.x * 100.)/ 100.;\n        a.y = round(x.y * 100.)/ 100.;\n        a.z = round(x.z * 100.)/ 100.;\n        a.w = round(x.w * 100.)/ 100.;\n        return a;\n      }\n\n      vec3 roundVec(vec3 x){\n        vec3 a = vec3(1.);\n        a.x = round(x.x * 100.)/ 100.;\n        a.y = round(x.y * 100.)/ 100.;\n        a.z = round(x.z * 100.)/ 100.;\n        return a;\n      }\n\n      //fix for some GPU\n     int roundInt(float x){\n        return int(round(x * 100.)/ 100.);\n      }\n     ivec3 roundVecInt(vec3 x){\n        ivec3 a = ivec3(1);\n        a.x = roundInt(x.x);\n        a.y = roundInt(x.y);\n        a.z = roundInt(x.z);\n        return a;\n      }\n\n    '
                )
                .concat(eL, '\n    ')
                .concat(e.fragmentShader, '\n\n     ')),
            (e.fragmentShader = e.fragmentShader.replace(
              '#include <lights_phong_pars_fragment>',
              '\n\n\n      float F_ScalarSchlick(float product, float f0, float fd90) {\n        return f0 + (fd90-f0) * pow(1.0 - product, 5.0);\n      }\n\n      vec3 DisneyDiffuse(vec3 color, float dotNL, float dotNV, float dotNH, float dotLH, float dotLV, float roughness, float a) {\n        float fd90 = 0.5 + 2.0 * dotLH * dotLH * a;\n        float nl = F_ScalarSchlick(dotNL, 1.0, fd90);\n        float nv = F_ScalarSchlick(dotNV, 1.0, fd90);\n        return color * (nl*nv*RECIPROCAL_PI);\n      }\n\n      varying vec3 vViewPosition;\n      uniform float roughness;\n      struct BlinnPhongMaterial {\n        vec3 diffuseColor;\n        vec3 specularColor;\n        float specularShininess;\n        float specularStrength;\n      };\n\n      #ifdef USE_GRADIENTMAP\n        uniform sampler2D gradientMap;\n      #endif\n      vec3 getGradientIrradiance( float dotNL ) {\n        vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n        #ifdef USE_GRADIENTMAP\n          return vec3( texture2D( gradientMap, coord ).r );\n        #else\n          return mix(( coord.x < 0.7 ) ? mix(vec3( 0.65 ), vec3( 0.7 ), smoothstep(0.65, 0.7, coord.x)) : vec3( 1.0 ), vec3( 1.0 ), bw);\n        #endif\n      }\n\n      void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n        vec3 N = geometry.normal;\n        vec3 V = geometry.viewDir;\n        vec3 L = directLight.direction;\n\n        float dotNL = saturate(dot(N,L));\n        float dotNV = saturate(dot(N,V));\n        vec3 H = normalize(L+V);\n        float dotNH = saturate(dot(N,H));\n        float dotVH = saturate(dot(V,H));\n        float dotLH = saturate(dot(L,H));\n        float dotLV = saturate(dot(L,V));\n\n        float roughnessScale = 1.;\n        vec4 base = vec4(1.);\n        base.rgb *= roundVec(vColor);\n\n\n        // not specular on the cloth fabric\n        if (base.rgb == vec3(1.)) {\n          roughnessScale = 0.1;\n        }\n        float a = roughnessScale * roughnessScale;\n\n        // float dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n        // vec3 irradiance = dotNL * directLight.color;\n        vec3 irradiance = getGradientIrradiance( dotNL ) * directLight.color;\n\n        reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n        // reflectedLight.directDiffuse += irradiance * DisneyDiffuse( material.diffuseColor, dotNL, dotNV, dotLH, dotVH, dotLV, roughnessScale, a );\n\n        reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength * roughnessScale;\n\n      }\n      void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n        reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n      }\n      #define RE_Direct				RE_Direct_BlinnPhong\n      #define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong\n      #define Material_LightProbeLOD( material )	(0)\n      '
            )),
            (e.fragmentShader = e.fragmentShader.replace(
              '#include <color_fragment>',
              '\n      vec4 diffuseBloom = vec4(vec3(0.), 1.);\n      vec4 base = vec4(1.);\n      base.rgb *= roundVec(vColor);\n      ivec3 vCol = roundVecInt(vInstanceColor);\n\n\n      // TODO Diffuse map custom here\n      // primary\n      if (base.rgb == vec3(1.)) {\n        // TODO DISABLE SPECULAR ICI\n        diffuseColor.rgb = getPrimary(vCol[0]);\n        // todo variation NFT vUv.y *200 / * 10 / * 1\n        // float noise = (snoise(vec2((time/20.-vUv.x*.1), (time/ 10.-vUv.y * .5)))); \n        // float bigfracline = (1. - yPos) * noise * .2;// big gradient line\n        // vec3 mid = getEmissive(vCol[2]);\n        // diffuseColor.rgb = mix(diffuseColor.rgb, mid, bigfracline);// end result color \n      }\n\n\n      // secondary\n      if (base.rgb == vec3(1.,0.0,0.)) {\n        diffuseColor.rgb = getSecondary(vCol[1]);\n      }\n\n      // helmet\n      if (base.rgb == vec3(0.)) {\n        diffuseColor.rgb = vec3(0.,0.,0.);\n      }\n\n      totalEmissiveRadiance = vec3(0.);\n      \n      // orange\n      if (base.r == 1. && base.b == 0. && base.g > .318 && base.g < .32) {\n        diffuseColor.rgb = getEmissive(vCol[2]);\n        diffuseBloom.rgb = diffuseColor.rgb;\n      }\n\n      float minn = 0.2;\n      float maxx = 0.22;\n      bool hr = base.r > minn && base.r < maxx;\n      bool hg = base.g > minn && base.g < maxx;\n      bool hb = base.b > minn && base.b < maxx;\n\n      bool r = base.r > 0.01;\n      bool g = base.g > 0.01;\n      bool b = base.b > 0.01;\n\n      if (hr && hg && hb) {\n        diffuseColor.rgb = vec3(1.);\n      }\n\n      vec3 emissiveVColor = getEmissive(vCol[2]);\n\n      // emissive\n      if (r && g && !b) {\n        diffuseColor.rgb = emissiveVColor;\n        totalEmissiveRadiance += mix(emissiveVColor, vec3(0.), bw);\n        diffuseBloom.rgb = diffuseColor.rgb;\n      }\n\n      vec4 diffuseSkin = diffuseColor;\n      diffuseSkin.rgb = mix(diffuseColor.rgb, diffuseColor.rgb, smoothstep(1., 2.0, diffuseColor.r + diffuseColor.g + diffuseColor.b));\n\n      vec3 holoOutLight = vec3(1.);\n      float holoOpacity = 0.;\n      // small scanlines down\n      if (vHolo > 0.0) {\n        float fraclines = fract((yPos * 10.) + time * 4.);//small lines \n        float scanlines = step(fraclines, 0.2);// cut off based on 0.5\n        // big scanline up\n        float bigfracline = fract((yPos * 2.) + time * 3.);// big gradient line\n        float bigfracline2 = fract((yPos * 1.) - time * 3.);// big gradient line\n    \n        holoOutLight = diffuseSkin.rgb + (bigfracline * 0.8 * vec3(1., 1., 0.));// end result color \n        holoOutLight = holoOutLight + (bigfracline2 * 0.8 * vec3(0.,1.,1.));// end result color \n        holoOutLight = holoOutLight + (scanlines * 0.4 * vec3(1., 1., 0.));// end result color \n    \n        holoOpacity = vHolo * 1. * (scanlines + bigfracline * .5);// alpha based on scanlines and rim\n      }\n\n\n      diffuseColor = vec4( mix(diffuseSkin.rgb, holoOutLight, vHolo), diffuseColor.a - holoOpacity * 1. - vHolo);\n      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.8), bw);\n      '
            )),
            (e.fragmentShader = e.fragmentShader.replace(
              '#include <emissivemap_fragment>',
              '\n        vec3 col = vec3(1.);\n        if (ditherDistance > 10.) {\n          if (instanceID > 0.) {\n            totalEmissiveRadiance = mix(totalEmissiveRadiance, vec3(0.), bw);\n            diffuseColor.rgb = mix(diffuseColor.rgb,col, bw);\n          }\n        } else {\n          totalEmissiveRadiance = mix(totalEmissiveRadiance, vec3(0.), bw);\n          diffuseColor.rgb = mix(diffuseColor.rgb,col, bw);\n        }\n      '
            )),
            (e.fragmentShader = e.fragmentShader.replace(
              '#include <fog_fragment>',
              '\n      \n      // inner glow (esper)\n      float glowOffset = 0.;\n      glowOffset += instanceID * 100.;\n      vec2 s = vUv * 2. - 1.;\n      s += snoise(s + glowOffset + time * .75) * .15;\n      vec2 d = 1. - abs(1.-vUv) * .2 * 1.;\n      vec3 c = getEmissive(vCol[2]);\n      vec3 color = vec3(circ(c.x, s.x, s.y), circ(c.y, s.x, s.y),  circ(c.z, s.x, s.y) + 0.45 ); // color circles			\n      color = clamp(color, 0.53, 0.99); 		\n      gl_FragColor = mix(gl_FragColor, vec4(color * .8, d), vFly);	\n      diffuseBloom.rgb += gl_FragColor.rgb * vFly;\n  \n      gl_FragColor.rgb = mix(gl_FragColor.rgb, gl_FragColor.rgb * .9, normal.b);\n      '.concat(
                '\n  float ditherFactor = smoothstep( 2., ditherDistance, vFogDepth );\n  float dith = (Bayer8(gl_FragCoord.xy * 0.45) * 1.0 - .5);\n\n  // #ifdef USE_INSTANCING\n  if (instanceID > 0.) {\n    if (ditherFactor < 1.) {\n      ditherFactor -= dith * ditherFactor;\n    }\n    if (ditherFactor < 0.1) discard;\n  }\n  // #endif\n',
                '\n      gGlow.rgb = mix(diffuseBloom.rgb, vec3(0.), bw);\n      gGlow.a = 1.;\n      \n      #ifdef USE_FOG\n        #ifdef FOG_EXP2\n          float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n        #else\n          float fogFactor = smoothstep( fogNear, fogFar, vFogDepth * bw );\n        #endif\n        gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n      #endif\n\n\n      gl_FragColor.rgb =  mix(vec3(1.), gl_FragColor.rgb, 1. - fw);\n      gl_FragColor.rgb = mix(gl_FragColor.rgb * 1.1, gl_FragColor.rgb * .9, normal.b);\n\n      // gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.), 1. - smoothstep(0., 1., yPos * 0.05));\n\n      '
              )
            ))
        }
        get time() {
          return this._time.value
        }
        set time(e) {
          this._time.value = e
        }
        get bw() {
          return this._bw.value
        }
        set bw(e) {
          this._bw.value = e
        }
        get fw() {
          return this._fw.value
        }
        set fw(e) {
          this._fw.value = e
        }
        get ditherDistance() {
          return this._ditherDistance.value
        }
        set ditherDistance(e) {
          this._ditherDistance.value = e
        }
        constructor(e = {}) {
          super(e),
            this.setValues(e),
            (this._time = {
              value: 0
            }),
            (this._bw = {
              value: 1
            }),
            (this._fw = {
              value: 1
            }),
            (this._ditherDistance = {
              value: 10
            })
        }
      }
      ;(ni.key = u.MathUtils.generateUUID()),
        (0, l.e)({
          PrimaryShaderImpl: ni
        })
      let na = c.forwardRef((e, n) => {
          let { speed: t = 1, ...r } = e,
            i = c.useRef(null)
          return (
            (0, l.A)((e) => i.current && (i.current.time = e.clock.getElapsedTime() * t)),
            (0, o.jsx)(
              'primaryShaderImpl',
              {
                ref: (0, nr.Z)([i, n]),
                ...r,
                vertexColors: 2,
                attach: 'material'
              },
              ni.key
            )
          )
        }),
        nl = (e, n) => {
          e.instanceMatrix.setUsage(u.DynamicDrawUsage)
          let t = new Float32Array(n).fill(1),
            o = new u.InstancedBufferAttribute(t, 1, !1)
          o.setUsage(u.DynamicDrawUsage), e.geometry.setAttribute('height', o)
          let r = new Float32Array(n).fill(0),
            i = new u.InstancedBufferAttribute(r, 1, !1)
          i.setUsage(u.DynamicDrawUsage), e.geometry.setAttribute('fly', i)
          let a = new Uint8Array(3 * n).fill(0),
            l = new u.InstancedBufferAttribute(a, 3, !1)
          l.setUsage(u.DynamicDrawUsage), e.geometry.setAttribute('instanceVColor', l)
          let s = new Float32Array(n).fill(0),
            c = new u.InstancedBufferAttribute(s, 1, !1)
          c.setUsage(u.DynamicDrawUsage),
            e.geometry.setAttribute('holo', c),
            (e.geometry.attributes.holo.needsUpdate = !0),
            (e.geometry.attributes.fly.needsUpdate = !0),
            (e.geometry.attributes.instanceVColor.needsUpdate = !0),
            (e.geometry.attributes.height.needsUpdate = !0),
            (e.instanceMatrix.needsUpdate = !0)
        },
        ns = (e, n) => {
          for (let t = 0; t < e.length; t++)
            n.includes(e[t].name) && (u.AnimationUtils.makeClipAdditive(e[t]), (e[t] = u.AnimationUtils.subclip(e[t], e[t].name, 1, 2, 30)))
          return e
        },
        nc = (e, n) => {
          let t = []
          return (
            e.forEach((o, r, i) => {
              n.forEach((n, i) => {
                if (i === o.name) {
                  let a = e[r].clone()
                  ;(a.name = n), t.push(a)
                }
              })
            }),
            t
          )
        }
      var nu = t(5518)
      ;(0, l.e)({
        InstancedSkinnedMesh: u.InstancedSkinnedMesh
      })
      let nm = ['jump', 'glide', 'slide', 'thankYou', 'turnright', 'leanright', 'idle', 'dance'],
        nf = [
          {
            default: 'inSettings'
          }
        ],
        { damp: nd } = u.MathUtils

      function nv() {
        let { animations: e, scene: n } = (0, eP.L)('/character_body.gltf'),
          t = (0, r.oR)((e) => e.gpuTier),
          i = [26, 40, 52, 74][t] + 2,
          a = ns(e, ['leanright', 'leanFoward', 'leanback']),
          s = nc(a, nf),
          m = eR(a.concat(s), nm, 'L', 'R'),
          f = (0, c.useRef)(),
          d = n.getObjectByName('character_mesh_low'),
          g = (0, v.WL)((e) => e.instance)
        return (
          (0, c.useEffect)(() => {
            if (
              ((0, v.EA)({
                refInstance: f,
                instanceReady: !0,
                dummy: n
              }),
              (0, v.XV)().instance)
            )
              return
          }, [f]),
          (0, c.useEffect)(() => {
            if ((0, v.XV)().instance) return
            ;(0, v.EA)({
              instance: new u.InstancedSkinnedMesh(d.geometry, null, i)
            })
            let { instance: e } = (0, v.XV)()
            e.setBonesAt(0, d.skeleton), nl(e, i)
          }, []),
          (0, c.useEffect)(() => {
            ;(0, v.XV)().animations ||
              (0, v.EA)({
                animations: m
              })
          }, [m]),
          (0, l.A)((e, n) => {
            let t = f.current
            if (!t) return
            let o = nu.vU || nu.G6 ? i : r.Fm.length,
              a = (0, h.VB)().testExperience
            ;(t.count = o),
              (t.instanceMatrix.needsUpdate = !0),
              (t.instanceMatrix.updateRange.count = 16 * o),
              t.geometry.attributes.height && ((t.geometry.attributes.height.updateRange.count = o), (t.geometry.attributes.height.needsUpdate = !0)),
              t.geometry.attributes.holo && ((t.geometry.attributes.holo.updateRange.count = o), (t.geometry.attributes.holo.needsUpdate = !0)),
              t.geometry.attributes.fly && ((t.geometry.attributes.fly.updateRange.count = o), (t.geometry.attributes.fly.needsUpdate = !0)),
              t.geometry.attributes.instanceVColor &&
                ((t.geometry.attributes.instanceVColor.updateRange.count = 3 * o), (t.geometry.attributes.instanceVColor.needsUpdate = !0)),
              t.skeleton && t.skeleton.boneTexture && (t.skeleton.boneTexture.needsUpdate = !0),
              (t.material.ditherDistance = nd(t.material.ditherDistance, a ? 10 : 2, 3, n)),
              (t.material.side = a ? u.FrontSide : u.DoubleSide),
              (t.material.bw = (window.innerWidth < 768 ? 1 - r.QF.head.smooth : 0) + r.QF.team.smooth),
              (t.material.fw = nd(t.material.fw, (0, r.y0)().colorCharacter2 ? 0 : 1, 1.2, n))
          }, 10),
          g
            ? (0, o.jsx)('primitive', {
                renderOrder: 2,
                ref: f,
                object: g,
                skeleton: d.skeleton,
                dispose: null,
                count: i,
                frustumCulled: !1,
                isInstancedMesh: !0,
                castShadow: !1,
                receiveShadow: !0,
                children: (0, o.jsx)(na, {
                  depthTest: !0,
                  transparent: !1,
                  vertexColors: 2,
                  holo: 0,
                  deform: 1,
                  fbHeight: 1,
                  specularStrength: 0.1,
                  aoMap: d.material.aoMap,
                  aoMapIntensity: 0.3,
                  roughness: 1,
                  metalness: 0,
                  opacity: 1,
                  side: u.FrontSide
                })
              })
            : null
        )
      }
      eP.L.preload('/character_body.gltf')
      var ng = t(9137),
        np = t(5769),
        nh = t(4105)
      let nx = (e) => e === Object(e) && !Array.isArray(e) && 'function' != typeof e

      function ny(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '/basis/',
          t = (0, l.z)((e) => e.gl),
          o = (0, l.D)(nh.a, nx(e) ? Object.values(e) : e, (e) => {
            e.detectSupport(t), e.setTranscoderPath(n)
          })
        if (
          ((0, c.useEffect)(() => {
            let e = Array.isArray(o) ? o : [o]
            e.forEach(t.initTexture)
          }, [t, o]),
          !nx(e))
        )
          return o
        {
          let r = Object.keys(e),
            i = {}
          return (
            r.forEach((e) =>
              Object.assign(i, {
                [e]: o[r.indexOf(e)]
              })
            ),
            i
          )
        }
      }
      ;(ny.preload = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ''.concat('https://cdn.jsdelivr.net/gh/pmndrs/drei-assets@master', '/basis/')
        return l.D.preload(nh.a, e, (e) => {
          e.setTranscoderPath(n)
        })
      }),
        (ny.clear = (e) => l.D.clear(nh.a, e))
      let { damp: nb } = u.MathUtils,
        nw = (0, ng.g)(
          {
            time: 0,
            nightmod: 0,
            map: null,
            noise: null,
            uResolution: new u.Vector2(512, 512),
            bw: 0,
            color: new u.Color(0.05, 0, 0.025),
            turbidity: 2,
            rayleigh: 1,
            mieCoefficient: 0.005,
            mieDirectionalG: 0.8,
            sunPosition: r.eR
          },
          '#define GLSLIFY 1\nout vec2 vUv;\nout vec3 vWorldPosition;\nout vec3 vSunDirection;\nout vec3 vBetaR;\nout vec3 vBetaM;\nout vec3 vPos;\nout float vSunE;\nout float vWPosY;\n\nuniform vec3 sunPosition;\nuniform float rayleigh;\nuniform float turbidity;\nuniform float mieCoefficient;\nuniform float time;\n\n// constants for atmospheric scattering\nconst float e = 2.71828182845904523536028747135266249775724709369995957;\nconst float pi = 3.141592653589793238462643383279502884197169;\n\n// wavelength of used primaries, according to preetham\nconst vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );\n// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:\n// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))\nconst vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );\n\n// mie stuff\n// K coefficient for the primaries\nconst float v = 4.0;\nconst vec3 K = vec3( 0.686, 0.678, 0.666 );\n// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K\nconst vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );\n\n// earth shadow hack\n// cutoffAngle = pi / 1.95;\nconst float cutoffAngle = 1.6110731556870734;\nconst float steepness = 1.5;\nconst float EE = 1000.0;\n\nfloat sunIntensity( float zenithAngleCos ) {\n  zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );\n  return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );\n}\n\nvec3 totalMie( float T ) {\n  float c = ( 0.2 * T ) * 10E-18;\n  return 0.434 * c * MieConst;\n}\n\nvoid main() {\n  vUv = uv;\n\n	vec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n  vWorldPosition = worldPosition.xyz;\n  vPos = position.xyz;\n  vWPosY = vWorldPosition.y;\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  gl_Position.z = gl_Position.w; // set z to camera.far\n\n  vSunDirection = normalize( sunPosition );\n\n  vSunE = sunIntensity( dot( vSunDirection, vec3(0., 1., 0.) ) );\n\n  float vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );\n\n  float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );\n\n  // extinction (absorbtion + out scattering)\n  // rayleigh coefficients\n  vBetaR = totalRayleigh * rayleighCoefficient;\n\n  // mie coefficients\n  vBetaM = totalMie( turbidity ) * mieCoefficient;\n\n}\n',
          '#define GLSLIFY 1\n  layout(location = 1) out vec4 gBloom;\n  uniform float time;\n  uniform float bw;\n  uniform float nightmod;\n  uniform vec3 color;\n  uniform vec2 uResolution;\n  uniform float mieDirectionalG;\n\n  uniform sampler2D map;\n  uniform sampler2D noise;\n  in vec2 vUv;\n  in vec3 vWorldPosition;\n  in vec3 vSunDirection;\n  in vec3 vBetaR;\n  in vec3 vBetaM;\n  in vec3 vPos;\n  in float vSunE;\n  in float vWPosY;\n\n  float random(vec2 co) {\n      float a = 12.9898;\n      float b = 78.233;\n      float c = 43758.5453;\n      float dt = dot(co.xy, vec2(a, b));\n      float sn = mod(dt, 3.14);\n      return fract(sin(sn) * c);\n  }\n\n  float dist(vec2 p0, vec2 pf){return sqrt((pf.x-p0.x)*(pf.x-p0.x)+(pf.y-p0.y)*(pf.y-p0.y));}\n\n  const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );\n\n  // constants for atmospheric scattering\n  const float pi = 3.141592653589793238462643383279502884197169;\n\n  const float n = 1.0003; // refractive index of air\n  const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)\n\n  // optical length at zenith for molecules\n  const float rayleighZenithLength = 8.4E3;\n  const float mieZenithLength = 1.25E3;\n  // 66 arc seconds -> degrees, and the cosine of that\n  const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;\n\n  // 3.0 / ( 16.0 * pi )\n  const float THREE_OVER_SIXTEENPI = 0.05968310365946075;\n  // 1.0 / ( 4.0 * pi )\n  const float ONE_OVER_FOURPI = 0.07957747154594767;\n\n  float rayleighPhase( float cosTheta ) {\n    return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );\n  }\n\n  float hgPhase( float cosTheta, float g ) {\n    float g2 = pow( g, 2.0 );\n    float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );\n    return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );\n  }\n\n  void main() {\n    vec2 uv = vUv;\n    vec2 uv2 = vUv;\n    vec2 uv3 = vUv;\n    float speed = time * .035;\n    float scaler = .1;\n    float offset = mod(speed, 1.) * scaler;\n    float offset2 = mod(speed + .5, 1.) * scaler;\n\n    float mixer = mod(speed, 1.) * 2.;\n    float mixerNegativ = 2. - mixer;\n    float mixerr = min(mixer, mixerNegativ);\n\n    float radialg = 1. - smoothstep(0.1, .99, pow(distance(uv.xy, vPos.xz), 1.48) * 0.0035);\n    \n\n    uv += offset * radialg;\n    uv3 +=  time / 600.;\n\n    uv2 += offset2 * radialg;\n\n    // uv *= vec2(1., .5);\n    // background color\n    vec4 diffuse = texture(map, uv);\n    vec4 diffuse2 = texture(map, uv2);\n\n    float a = pow(texture(noise, vUv * 5.).g, 4.);\n    vec4 stars = texture(noise, uv * 5.);\n    vec4 stars2 = texture(noise, uv3 * 10. + pow(stars.r, 5.));\n    vec4 stars3 = texture(noise, uv3 * 100.);\n    vec4 result = vec4(1.);\n\n    // if (diffuse.a > 0.) {\n	    result = mix(diffuse2, diffuse, mixerr);\n    // }\n\n    float sun = 0.;\n\n    vec3 direction = normalize( vWorldPosition - cameraPos );\n    // optical length\n    // cutoff angle at 90 to avoid singularity in next formula.\n    float zenithAngle = acos( max( 0.0, dot( vec3(0., 1., 0.), direction ) ) );\n    float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );\n    float sR = rayleighZenithLength * inverse;\n    float sM = mieZenithLength * inverse;\n\n    // combined extinction factor\n    vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );\n    // in scattering\n    float cosTheta = dot( direction, vSunDirection );\n\n    vec3 L0 = result.rgb;\n    // vec3 L0 = vec3(0.);\n\n    float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 1300., cosTheta * 1.2 );\n    float sundiskCenter = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 1., cosTheta * 1.001 );\n    // sun circle\n    L0 += ( vSunE * 19000.0 * Fex ) * sundisk * (1. - nightmod);\n    L0 += ( vSunE * 19000.0 * Fex ) * sundiskCenter * (1. - nightmod);\n\n    result = vec4(L0, .1);\n    float gray = 0.3 * result.r + 0.3 * result.g + 0.4 * result.b;\n    // anim night\n    result.rgb = mix(result.rgb, vec3(gray), nightmod);\n    result.rgb = mix(result.rgb, vec3(0.,0.,.6), .4 * nightmod);\n    result.rgb -= .3 * nightmod;\n\n    result.rgb = mix(mix(result.rgb, vec3(1.), 1. - smoothstep(-300.5, 800.5, vWPosY)), mix(result.rgb, vec3(0.933,0.51,0.933), 1. - smoothstep(-300.5, 500.5, vWPosY)), nightmod);\n    result.rgb = mix(mix(result.rgb, vec3(1.), 1. - smoothstep(-150.5, -100.5, vWPosY)), mix(result.rgb, vec3(1), 1. - smoothstep(-700.5, 100.5, vWPosY)), nightmod);\n    result.rgb = mix(result.rgb, vec3(0.933,0.51,0.933), (1. - smoothstep(-1000.5, -500.5, vWPosY)) * nightmod);\n    gBloom = vec4(0.);\n\n    result.rgb += mix(mix(vec3(0.), vec3(1.), pow(stars2.r - (1.  - smoothstep(-300.5, 700.5, vWPosY)), 3.) - result.r * .7), vec3(0.), 1. - smoothstep(100.5, 400.5, vWPosY)) * nightmod;\n    pc_fragColor = result;\n\n    float gray2 = 0.21 * pc_fragColor.r + 0.71 * pc_fragColor.g + 0.07 * pc_fragColor.b;\n    pc_fragColor.rgb = mix(pc_fragColor.rgb, vec3(gray2), bw);\n\n    #include <encodings_fragment>\n  }\n'
        )
      ;(nw.key = ez().generate()),
        (0, l.e)({
          SkyDomeMaterial: nw
        })
      let n_ = (e) => {
          let n = (0, c.useRef)(null),
            t = (0, c.useRef)(null),
            { nodes: i, materials: a } = (0, eP.L)('/skydome.glb'),
            s = (0, np.m)('/img/blue_noise.png'),
            m = ny('/sky.ktx2', '/basis/')
          ;(m.wrapT = m.wrapS = u.RepeatWrapping),
            (m.flipY = !0),
            (m.needsUpdate = !0),
            (s.wrapT = s.wrapS = u.RepeatWrapping),
            (s.needsUpdate = !0),
            (0, l.A)((e, o) => {
              n.current.material && (n.current.material.bw = nb(n.current.material.bw, 1 - r.QF.head.smooth + r.QF.team.smooth, 3, o)),
                n.current.material &&
                  ((n.current.material.uniforms.nightmod.value = r.QF.gameplay.smooth - r.QF.team.smooth),
                  (t.current.material.uniforms.nightmod.value = r.QF.gameplay.smooth - r.QF.team.smooth),
                  (n.current.material.uniforms.time.value -= o),
                  (t.current.material.uniforms.time.value -= o))
            })
          let { width: f, height: d } = (0, l.z)((e) => e.size)
          return (0, o.jsxs)('group', {
            dispose: null,
            children: [
              (0, o.jsx)('mesh', {
                ref: n,
                geometry: i.Sphere.geometry,
                scale: [50, 25, 50],
                'rotation-z': 0,
                ...e,
                'position-y': -400.5,
                'rotation-y': -Math.PI / 2.5,
                children: (0, o.jsx)(
                  'skyDomeMaterial',
                  {
                    time: 3,
                    map: m,
                    noise: s,
                    uResolution: new u.Vector2(f, d),
                    side: u.BackSide,
                    fog: !1
                  },
                  nw.key
                )
              }),
              (0, o.jsx)('mesh', {
                ref: t,
                geometry: i.Sphere.geometry,
                scale: [50, -25, 50],
                'rotation-y': -Math.PI / 2,
                ...e,
                'position-y': -400,
                children: (0, o.jsx)(
                  'skyDomeMaterial',
                  {
                    fog: !1,
                    time: 3,
                    map: null,
                    noise: null,
                    side: u.BackSide
                  },
                  nw.key
                )
              })
            ]
          })
        },
        { damp: nC } = u.MathUtils,
        nF = (e) => {
          let { assets: n } = e
          return (
            !(function (e) {
              let n = (0, l.z)((e) => e.camera),
                t = (0, l.z)((e) => e.gl),
                { dpr: o } = (0, l.z)((e) => e.viewport),
                { width: i, height: a } = (0, l.z)((e) => e.size),
                s = (0, c.useMemo)(() => new u.Vector2(), []),
                m = (0, c.useMemo)(() => new u.Vector2(), []),
                { bloomStrength: d, bloomRadius: g } =
                  ((0, c.useMemo)(() => new u.Vector2(), []),
                  {
                    bloomStrength: 0.25,
                    bloomRadius: 0.2
                  }),
                [p, x, y, b, w, _, C, F, D, S, M] = (0, c.useMemo)(() => {
                  let o = new u.Scene(),
                    r = new u.OrthographicCamera(-1, 1, 1, -1, 0, 1),
                    i = new u.Mesh(
                      (function () {
                        let e = new u.BufferGeometry(),
                          n = new Float32Array([-1, -1, 3, -1, -1, 3]),
                          t = new Float32Array([0, 0, 2, 0, 0, 2])
                        return e.setAttribute('position', new u.BufferAttribute(n, 2)), e.setAttribute('uv', new u.BufferAttribute(t, 2)), e
                      })()
                    )
                  ;(i.frustumCulled = !1), o.add(i)
                  let a = new u.WebGLMultipleRenderTargets(512, 512, 2),
                    l = new u.WebGLMultipleRenderTargets(512, 512, 2)
                  ;(l.depthBuffer = !1),
                    (l.stencilBuffer = !1),
                    (l.texture[0].minFilter = u.NearestFilter),
                    (l.texture[0].magFilter = u.NearestFilter),
                    (l.texture[0].generateMipmaps = !1),
                    (l.texture[0].type = u.FloatType),
                    (l.texture[1].minFilter = u.NearestFilter),
                    (l.texture[1].magFilter = u.NearestFilter),
                    (l.texture[1].generateMipmaps = !1),
                    (l.texture[1].type = u.FloatType)
                  let s = new u.WebGLRenderTarget(512, 512, {
                    type: u.FloatType,
                    depthBuffer: !1,
                    generateMipmaps: !1,
                    minFilter: u.NearestFilter,
                    magFilter: u.NearestFilter,
                    stencilBuffer: !1
                  })
                  ;(a.depthTexture = new u.DepthTexture(512, 512)),
                    (a.depthTexture.format = u.DepthFormat),
                    (a.depthTexture.type = u.FloatType),
                    (a.depthTexture.name = 'texture_depth'),
                    (a.texture[0].minFilter = u.NearestFilter),
                    (a.texture[0].magFilter = u.NearestFilter),
                    (a.texture[0].generateMipmaps = !1),
                    (a.texture[0].type = u.FloatType),
                    (a.texture[0].name = 'texture_diffuse'),
                    (a.texture[1].minFilter = u.NearestFilter),
                    (a.texture[1].magFilter = u.NearestFilter),
                    (a.texture[1].generateMipmaps = !1),
                    (a.texture[1].type = u.FloatType),
                    (a.texture[1].name = 'texture_bloomblur')
                  let c = [],
                    m = []
                  for (let f = 0; f < 5; f++) c.push(l.clone()), m.push(l.clone())
                  ;(e6.uniforms.tDiffuse.value = a.texture[0]),
                    (e6.uniforms.tBright.value = a.texture[1]),
                    (e6.uniforms.tDof.value = a.texture[0]),
                    (e6.uniforms.cinematic.value = 0)
                  let v = [],
                    p = [3, 5, 7, 9, 11]
                  for (let h = 0; h < 5; h++) v.push(new e4(p[h])), (v[h].uniforms.uResolution.value = new u.Vector2())
                  let x = [1, 0.8, 0.6, 0.4, 0.2],
                    y = new e9(5)
                  for (let b = 0; b < 5; b++) {
                    let w = x[b]
                    ;(x[b] = d * (0, A.C)(w, 1 - w, g)),
                      (y.uniforms['tBlur'.concat(b + 1)].value = m[b].texture[0]),
                      (y.uniforms['tDof'.concat(b + 1)].value = m[b].texture[1])
                  }
                  let _ = new e7.fY(e.get('smaa-search'), e.get('smaa-area'), e7.F9.HIGH)
                  _.edgeDetectionMaterial.setEdgeDetectionThreshold(0.01)
                  let C = new e7.H5(n, _),
                    F = new e7.xC(t, {
                      alpha: !0,
                      depthBuffer: !1
                    })
                  C.encodeOutput = !1
                  let D = new e7.CD(o, r)
                  return F.addPass(D), F.addPass(C), (y.uniforms.uBloomFactors.value = x), [i, o, r, a, l, s, c, m, v, y, F]
                }, [e, d, g])
              ;(0, c.useEffect)(() => {
                let { w: e, h: n } = {
                  w: i * o,
                  h: a * o
                }
                b.setSize(e, n), w.setSize(e, n), M.setSize(i, a)
                let t = e / 2,
                  r = n / 2
                _.setSize(t, r)
                for (let l = 0; l < 5; l++) C[l].setSize(t, r), F[l].setSize(t, r), D[l].uniforms.uResolution.value.set(t, r)
              }, [o, i, a, M, D, b, w, _, C, F]),
                (0, f.zX)('cinematic', (e) => {
                  ;(0, r.IW)({
                    cinematic: e ? 1 : 0
                  })
                }),
                (0, l.A)((e, n) => {
                  let { gl: t, scene: o, camera: i } = e,
                    { aa: a, bloom: l } = r.wC[(0, e$.om)().videoQuality],
                    { theatre: c, editor: u } = (0, r.y0)(),
                    { hitWall: f } = (0, v.XV)().ref
                  if ((t.setRenderTarget(b), t.render(o, i), (e6.uniforms.tDiffuse.value = b.texture[0]), l)) {
                    let d = b.texture[1]
                    b.texture[0]
                    for (let g = 0; g < 5; g++)
                      (t.autoClear = !1),
                        (p.material = D[g]),
                        (D[g].uniforms.tMap.value = d),
                        (D[g].uniforms.dof.value = 0),
                        (D[g].uniforms.tDof.value = null),
                        (D[g].uniforms.uDirection.value = ne),
                        t.setRenderTarget(C[g]),
                        t.render(x, y),
                        (D[g].uniforms.tMap.value = C[g].texture[0]),
                        (D[g].uniforms.tDof.value = C[g].texture[1]),
                        (D[g].uniforms.uDirection.value = nn),
                        (t.autoClear = !0),
                        t.setRenderTarget(F[g]),
                        t.render(x, y),
                        (d = F[g].texture[0]),
                        F[g].texture[1]
                    ;(p.material = S), (t.autoClear = !1)
                  }
                  l
                    ? (t.setRenderTarget(w), t.render(x, y), (e6.uniforms.tBright.value = w.texture[0]), (e6.uniforms.tDof.value = w.texture[1]))
                    : (e6.uniforms.tBright.value && (e6.uniforms.tBright.value.dispose(), (e6.uniforms.tBright.value = null)),
                      e6.uniforms.tDof.value && (e6.uniforms.tDof.value.dispose(), (e6.uniforms.tDof.value = null))),
                    (e6.uniforms.dof.value = 0),
                    (e6.uniforms.section1.value = r.QF.head.value),
                    (e6.uniforms.section2.value = r.QF.blue.value),
                    (e6.uniforms.section3.value = (0, h.VB)().testExperience ? 1 : r.QF.gameplay.value),
                    (e6.uniforms.section4.value = r.QF.roadmap.value),
                    (e6.uniforms.section5.value = r.QF.team.value),
                    (e6.uniforms.section6.value = r.QF.footer.value),
                    (e6.uniforms.tDepth.value = b.depthTexture),
                    e6.uniforms.mBlur.value.lerp(m, 1),
                    (e6.uniforms.dazzle.value = nt(e6.uniforms.dazzle.value, f ? 1 : 0, 0.8, n)),
                    (e6.uniforms.cinematic.value = nt(e6.uniforms.cinematic.value, (0, r.y0)().cinematic, 2, n)),
                    (p.material = e6),
                    a ? M.render(n) : (t.setRenderTarget(null), t.render(x, y)),
                    s.set(i.rotation.x, i.rotation.y)
                })
            })(n),
            null
          )
        },
        nD = () => {
          let [e, n] = (0, c.useState)(!1)
          return (
            (0, c.useEffect)(() => {
              let e = !0
              return (
                t(),
                () => {
                  e = !1
                }
              )
              async function t() {
                n(void 0)
                let t = new Map(),
                  o = new u.LoadingManager(),
                  r = new e7.hB(o)
                return new Promise((i, a) => {
                  ;(o.onError = a),
                    (o.onLoad = () => i(t)),
                    r.load((o) => {
                      let [r, i] = o
                      t.set('smaa-search', r), t.set('smaa-area', i), e && n(t)
                    })
                })
              }
            }, []),
            e
              ? (0, o.jsx)(nF, {
                  assets: e
                })
              : null
          )
        },
        nS = () => {
          let e = (0, c.useRef)(null)
          return (
            (0, c.useRef)(null),
            (0, l.A)((n, t) => {
              e.current.intensity = u.MathUtils.damp(e.current.intensity, 1 - 0.2 * r.QF.head.smooth - 0.4 * r.QF.gameplay.smooth, 4, t)
            }),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)('ambientLight', {
                  ref: e,
                  intensity: 0.6
                }),
                (0, o.jsx)('fogExp2', {
                  attach: 'fog',
                  args: [0, 0.0012]
                }),
                (0, o.jsx)(nD, {})
              ]
            })
          )
        },
        nM = () => {
          let e = (0, l.z)((e) => e.events)
          return (
            (0, f.zX)(
              'dom_ready',
              (n) => {
                e.connect(n.current),
                  (0, r.IW)({
                    dom: n
                  })
              },
              [e]
            ),
            null
          )
        },
        nA = (e) => {
          let { children: n, serverLocation: t } = e,
            [l, u, m] = (0, r.oR)((e) => [e.camera, e.throttled, e.theatre]),
            [d, v, g, p, h, x] = (0, eQ.c1)((e) => [e.gravity, e.bvh, e.physic, e.simulationSpeed, e.paused, e.infos])
          ;(0, r.oR)((e) => e.aa), (0, r.oR)((e) => e.editor)
          let y = (0, c.useRef)(r.wC[(0, e$.om)().videoQuality]),
            { dpr: b } = y.current
          ;(0, f.zX)('update_graphism_quality', (e) => {
            ;(0, r.IW)(r.wC[e])
          })
          let w = (0, c.useRef)(null)
          return (0, o.jsxs)(s.Xz, {
            ref: w,
            dpr: b,
            shadows: !0,
            mode: 'concurrent',
            gl: {
              alpha: !0,
              logarithmicDepthBuffer: !1,
              antialias: !1,
              stencil: !1,
              depth: !1
            },
            flat: !0,
            style: {
              position: 'fixed',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0
            },
            onCreated: (e) => {
              e.gl.capabilities.isWebGL2 || (window.location = '/support')
              let n = async () => {
                let n = await (0, no.M)({
                  glContext: e.glContext,
                  failIfMajorPerformanceCaveat: !0,
                  mobileTiers: [0, 15, 30, 60],
                  desktopTiers: [0, 15, 30, 60]
                })
                console.log(n),
                  (0, r.IW)({
                    gpuTier: n.isMobile ? 0 : n.tier,
                    isMobile: n.isMobile,
                    gpuTierAdded: !0
                  })
              }
              ;(0, r.y0)().gpuTierAdded || n(), (0, f.Kn)('canvas_ready', e.events)
            },
            children: [
              (0, o.jsx)(eJ, {}),
              (0, o.jsx)(nM, {}),
              (0, o.jsx)(i.c, {
                makeDefault: l,
                fov: 75,
                far: 1e4,
                rotation: [0, 0, 0],
                position: [0, 10, -20]
              }),
              (0, o.jsxs)(c.Suspense, {
                fallback: null,
                children: [
                  (0, o.jsx)(e3, {}),
                  (0, o.jsx)(a.q, {
                    all: !0
                  }),
                  (0, o.jsxs)(e5, {
                    throttled: u,
                    debug: {
                      physic: g,
                      bvh: v,
                      infos: x
                    },
                    paused: h,
                    simulationSpeed: p,
                    gravity: [0, d, 0],
                    children: [(0, o.jsx)(nv, {}), (0, o.jsx)(eY, {}), n, (0, o.jsx)(n_, {}), (0, o.jsx)(nS, {})]
                  }),
                  (0, o.jsx)('color', {
                    args: [0],
                    attach: 'background'
                  })
                ]
              })
            ]
          })
        }
      var nP = nA
    }
  }
])
