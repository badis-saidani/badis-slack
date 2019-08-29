//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

/* Package-scope variables */
var BUZZ;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/brentjanderson_buzz/lib/buzz/dist/buzz.js                                                           //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
 // ----------------------------------------------------------------------------                                // 1
 // Buzz, a Javascript HTML5 Audio library                                                                      // 2
 // v1.1.10 - Built 2015-04-20 13:05                                                                            // 3
 // Licensed under the MIT license.                                                                             // 4
 // http://buzz.jaysalvat.com/                                                                                  // 5
 // ----------------------------------------------------------------------------                                // 6
 // Copyright (C) 2010-2015 Jay Salvat                                                                          // 7
 // http://jaysalvat.com/                                                                                       // 8
 // ----------------------------------------------------------------------------                                // 9
                                                                                                                // 10
(function(context, factory) {                                                                                   // 11
    "use strict";                                                                                               // 12
    if (typeof module !== "undefined" && module.exports) {                                                      // 13
        module.exports = factory();                                                                             // 14
    } else if (typeof define === "function" && define.amd) {                                                    // 15
        define([], factory);                                                                                    // 16
    } else {                                                                                                    // 17
        context.buzz = factory();                                                                               // 18
    }                                                                                                           // 19
})(this, function() {                                                                                           // 20
    "use strict";                                                                                               // 21
    var AudioContext = window.AudioContext || window.webkitAudioContext;                                        // 22
    var buzz = {                                                                                                // 23
        defaults: {                                                                                             // 24
            autoplay: false,                                                                                    // 25
            duration: 5e3,                                                                                      // 26
            formats: [],                                                                                        // 27
            loop: false,                                                                                        // 28
            placeholder: "--",                                                                                  // 29
            preload: "metadata",                                                                                // 30
            volume: 80,                                                                                         // 31
            webAudioApi: false,                                                                                 // 32
            document: window.document                                                                           // 33
        },                                                                                                      // 34
        types: {                                                                                                // 35
            mp3: "audio/mpeg",                                                                                  // 36
            ogg: "audio/ogg",                                                                                   // 37
            wav: "audio/wav",                                                                                   // 38
            aac: "audio/aac",                                                                                   // 39
            m4a: "audio/x-m4a"                                                                                  // 40
        },                                                                                                      // 41
        sounds: [],                                                                                             // 42
        el: document.createElement("audio"),                                                                    // 43
        getAudioContext: function() {                                                                           // 44
            if (this.audioCtx === undefined) {                                                                  // 45
                try {                                                                                           // 46
                    this.audioCtx = AudioContext ? new AudioContext() : null;                                   // 47
                } catch (e) {                                                                                   // 48
                    this.audioCtx = null;                                                                       // 49
                }                                                                                               // 50
            }                                                                                                   // 51
            return this.audioCtx;                                                                               // 52
        },                                                                                                      // 53
        sound: function(src, options) {                                                                         // 54
            options = options || {};                                                                            // 55
            var doc = options.document || buzz.defaults.document;                                               // 56
            var pid = 0, events = [], eventsOnce = {}, supported = buzz.isSupported();                          // 57
            this.load = function() {                                                                            // 58
                if (!supported) {                                                                               // 59
                    return this;                                                                                // 60
                }                                                                                               // 61
                this.sound.load();                                                                              // 62
                return this;                                                                                    // 63
            };                                                                                                  // 64
            this.play = function() {                                                                            // 65
                if (!supported) {                                                                               // 66
                    return this;                                                                                // 67
                }                                                                                               // 68
                this.sound.play();                                                                              // 69
                return this;                                                                                    // 70
            };                                                                                                  // 71
            this.togglePlay = function() {                                                                      // 72
                if (!supported) {                                                                               // 73
                    return this;                                                                                // 74
                }                                                                                               // 75
                if (this.sound.paused) {                                                                        // 76
                    this.sound.play();                                                                          // 77
                } else {                                                                                        // 78
                    this.sound.pause();                                                                         // 79
                }                                                                                               // 80
                return this;                                                                                    // 81
            };                                                                                                  // 82
            this.pause = function() {                                                                           // 83
                if (!supported) {                                                                               // 84
                    return this;                                                                                // 85
                }                                                                                               // 86
                this.sound.pause();                                                                             // 87
                return this;                                                                                    // 88
            };                                                                                                  // 89
            this.isPaused = function() {                                                                        // 90
                if (!supported) {                                                                               // 91
                    return null;                                                                                // 92
                }                                                                                               // 93
                return this.sound.paused;                                                                       // 94
            };                                                                                                  // 95
            this.stop = function() {                                                                            // 96
                if (!supported) {                                                                               // 97
                    return this;                                                                                // 98
                }                                                                                               // 99
                this.setTime(0);                                                                                // 100
                this.sound.pause();                                                                             // 101
                return this;                                                                                    // 102
            };                                                                                                  // 103
            this.isEnded = function() {                                                                         // 104
                if (!supported) {                                                                               // 105
                    return null;                                                                                // 106
                }                                                                                               // 107
                return this.sound.ended;                                                                        // 108
            };                                                                                                  // 109
            this.loop = function() {                                                                            // 110
                if (!supported) {                                                                               // 111
                    return this;                                                                                // 112
                }                                                                                               // 113
                this.sound.loop = "loop";                                                                       // 114
                this.bind("ended.buzzloop", function() {                                                        // 115
                    this.currentTime = 0;                                                                       // 116
                    this.play();                                                                                // 117
                });                                                                                             // 118
                return this;                                                                                    // 119
            };                                                                                                  // 120
            this.unloop = function() {                                                                          // 121
                if (!supported) {                                                                               // 122
                    return this;                                                                                // 123
                }                                                                                               // 124
                this.sound.removeAttribute("loop");                                                             // 125
                this.unbind("ended.buzzloop");                                                                  // 126
                return this;                                                                                    // 127
            };                                                                                                  // 128
            this.mute = function() {                                                                            // 129
                if (!supported) {                                                                               // 130
                    return this;                                                                                // 131
                }                                                                                               // 132
                this.sound.muted = true;                                                                        // 133
                return this;                                                                                    // 134
            };                                                                                                  // 135
            this.unmute = function() {                                                                          // 136
                if (!supported) {                                                                               // 137
                    return this;                                                                                // 138
                }                                                                                               // 139
                this.sound.muted = false;                                                                       // 140
                return this;                                                                                    // 141
            };                                                                                                  // 142
            this.toggleMute = function() {                                                                      // 143
                if (!supported) {                                                                               // 144
                    return this;                                                                                // 145
                }                                                                                               // 146
                this.sound.muted = !this.sound.muted;                                                           // 147
                return this;                                                                                    // 148
            };                                                                                                  // 149
            this.isMuted = function() {                                                                         // 150
                if (!supported) {                                                                               // 151
                    return null;                                                                                // 152
                }                                                                                               // 153
                return this.sound.muted;                                                                        // 154
            };                                                                                                  // 155
            this.setVolume = function(volume) {                                                                 // 156
                if (!supported) {                                                                               // 157
                    return this;                                                                                // 158
                }                                                                                               // 159
                if (volume < 0) {                                                                               // 160
                    volume = 0;                                                                                 // 161
                }                                                                                               // 162
                if (volume > 100) {                                                                             // 163
                    volume = 100;                                                                               // 164
                }                                                                                               // 165
                this.volume = volume;                                                                           // 166
                this.sound.volume = volume / 100;                                                               // 167
                return this;                                                                                    // 168
            };                                                                                                  // 169
            this.getVolume = function() {                                                                       // 170
                if (!supported) {                                                                               // 171
                    return this;                                                                                // 172
                }                                                                                               // 173
                return this.volume;                                                                             // 174
            };                                                                                                  // 175
            this.increaseVolume = function(value) {                                                             // 176
                return this.setVolume(this.volume + (value || 1));                                              // 177
            };                                                                                                  // 178
            this.decreaseVolume = function(value) {                                                             // 179
                return this.setVolume(this.volume - (value || 1));                                              // 180
            };                                                                                                  // 181
            this.setTime = function(time) {                                                                     // 182
                if (!supported) {                                                                               // 183
                    return this;                                                                                // 184
                }                                                                                               // 185
                var set = true;                                                                                 // 186
                this.whenReady(function() {                                                                     // 187
                    if (set === true) {                                                                         // 188
                        set = false;                                                                            // 189
                        this.sound.currentTime = time;                                                          // 190
                    }                                                                                           // 191
                });                                                                                             // 192
                return this;                                                                                    // 193
            };                                                                                                  // 194
            this.getTime = function() {                                                                         // 195
                if (!supported) {                                                                               // 196
                    return null;                                                                                // 197
                }                                                                                               // 198
                var time = Math.round(this.sound.currentTime * 100) / 100;                                      // 199
                return isNaN(time) ? buzz.defaults.placeholder : time;                                          // 200
            };                                                                                                  // 201
            this.setPercent = function(percent) {                                                               // 202
                if (!supported) {                                                                               // 203
                    return this;                                                                                // 204
                }                                                                                               // 205
                return this.setTime(buzz.fromPercent(percent, this.sound.duration));                            // 206
            };                                                                                                  // 207
            this.getPercent = function() {                                                                      // 208
                if (!supported) {                                                                               // 209
                    return null;                                                                                // 210
                }                                                                                               // 211
                var percent = Math.round(buzz.toPercent(this.sound.currentTime, this.sound.duration));          // 212
                return isNaN(percent) ? buzz.defaults.placeholder : percent;                                    // 213
            };                                                                                                  // 214
            this.setSpeed = function(duration) {                                                                // 215
                if (!supported) {                                                                               // 216
                    return this;                                                                                // 217
                }                                                                                               // 218
                this.sound.playbackRate = duration;                                                             // 219
                return this;                                                                                    // 220
            };                                                                                                  // 221
            this.getSpeed = function() {                                                                        // 222
                if (!supported) {                                                                               // 223
                    return null;                                                                                // 224
                }                                                                                               // 225
                return this.sound.playbackRate;                                                                 // 226
            };                                                                                                  // 227
            this.getDuration = function() {                                                                     // 228
                if (!supported) {                                                                               // 229
                    return null;                                                                                // 230
                }                                                                                               // 231
                var duration = Math.round(this.sound.duration * 100) / 100;                                     // 232
                return isNaN(duration) ? buzz.defaults.placeholder : duration;                                  // 233
            };                                                                                                  // 234
            this.getPlayed = function() {                                                                       // 235
                if (!supported) {                                                                               // 236
                    return null;                                                                                // 237
                }                                                                                               // 238
                return timerangeToArray(this.sound.played);                                                     // 239
            };                                                                                                  // 240
            this.getBuffered = function() {                                                                     // 241
                if (!supported) {                                                                               // 242
                    return null;                                                                                // 243
                }                                                                                               // 244
                return timerangeToArray(this.sound.buffered);                                                   // 245
            };                                                                                                  // 246
            this.getSeekable = function() {                                                                     // 247
                if (!supported) {                                                                               // 248
                    return null;                                                                                // 249
                }                                                                                               // 250
                return timerangeToArray(this.sound.seekable);                                                   // 251
            };                                                                                                  // 252
            this.getErrorCode = function() {                                                                    // 253
                if (supported && this.sound.error) {                                                            // 254
                    return this.sound.error.code;                                                               // 255
                }                                                                                               // 256
                return 0;                                                                                       // 257
            };                                                                                                  // 258
            this.getErrorMessage = function() {                                                                 // 259
                if (!supported) {                                                                               // 260
                    return null;                                                                                // 261
                }                                                                                               // 262
                switch (this.getErrorCode()) {                                                                  // 263
                  case 1:                                                                                       // 264
                    return "MEDIA_ERR_ABORTED";                                                                 // 265
                                                                                                                // 266
                  case 2:                                                                                       // 267
                    return "MEDIA_ERR_NETWORK";                                                                 // 268
                                                                                                                // 269
                  case 3:                                                                                       // 270
                    return "MEDIA_ERR_DECODE";                                                                  // 271
                                                                                                                // 272
                  case 4:                                                                                       // 273
                    return "MEDIA_ERR_SRC_NOT_SUPPORTED";                                                       // 274
                                                                                                                // 275
                  default:                                                                                      // 276
                    return null;                                                                                // 277
                }                                                                                               // 278
            };                                                                                                  // 279
            this.getStateCode = function() {                                                                    // 280
                if (!supported) {                                                                               // 281
                    return null;                                                                                // 282
                }                                                                                               // 283
                return this.sound.readyState;                                                                   // 284
            };                                                                                                  // 285
            this.getStateMessage = function() {                                                                 // 286
                if (!supported) {                                                                               // 287
                    return null;                                                                                // 288
                }                                                                                               // 289
                switch (this.getStateCode()) {                                                                  // 290
                  case 0:                                                                                       // 291
                    return "HAVE_NOTHING";                                                                      // 292
                                                                                                                // 293
                  case 1:                                                                                       // 294
                    return "HAVE_METADATA";                                                                     // 295
                                                                                                                // 296
                  case 2:                                                                                       // 297
                    return "HAVE_CURRENT_DATA";                                                                 // 298
                                                                                                                // 299
                  case 3:                                                                                       // 300
                    return "HAVE_FUTURE_DATA";                                                                  // 301
                                                                                                                // 302
                  case 4:                                                                                       // 303
                    return "HAVE_ENOUGH_DATA";                                                                  // 304
                                                                                                                // 305
                  default:                                                                                      // 306
                    return null;                                                                                // 307
                }                                                                                               // 308
            };                                                                                                  // 309
            this.getNetworkStateCode = function() {                                                             // 310
                if (!supported) {                                                                               // 311
                    return null;                                                                                // 312
                }                                                                                               // 313
                return this.sound.networkState;                                                                 // 314
            };                                                                                                  // 315
            this.getNetworkStateMessage = function() {                                                          // 316
                if (!supported) {                                                                               // 317
                    return null;                                                                                // 318
                }                                                                                               // 319
                switch (this.getNetworkStateCode()) {                                                           // 320
                  case 0:                                                                                       // 321
                    return "NETWORK_EMPTY";                                                                     // 322
                                                                                                                // 323
                  case 1:                                                                                       // 324
                    return "NETWORK_IDLE";                                                                      // 325
                                                                                                                // 326
                  case 2:                                                                                       // 327
                    return "NETWORK_LOADING";                                                                   // 328
                                                                                                                // 329
                  case 3:                                                                                       // 330
                    return "NETWORK_NO_SOURCE";                                                                 // 331
                                                                                                                // 332
                  default:                                                                                      // 333
                    return null;                                                                                // 334
                }                                                                                               // 335
            };                                                                                                  // 336
            this.set = function(key, value) {                                                                   // 337
                if (!supported) {                                                                               // 338
                    return this;                                                                                // 339
                }                                                                                               // 340
                this.sound[key] = value;                                                                        // 341
                return this;                                                                                    // 342
            };                                                                                                  // 343
            this.get = function(key) {                                                                          // 344
                if (!supported) {                                                                               // 345
                    return null;                                                                                // 346
                }                                                                                               // 347
                return key ? this.sound[key] : this.sound;                                                      // 348
            };                                                                                                  // 349
            this.bind = function(types, func) {                                                                 // 350
                if (!supported) {                                                                               // 351
                    return this;                                                                                // 352
                }                                                                                               // 353
                types = types.split(" ");                                                                       // 354
                var self = this, efunc = function(e) {                                                          // 355
                    func.call(self, e);                                                                         // 356
                };                                                                                              // 357
                for (var t = 0; t < types.length; t++) {                                                        // 358
                    var type = types[t], idx = type;                                                            // 359
                    type = idx.split(".")[0];                                                                   // 360
                    events.push({                                                                               // 361
                        idx: idx,                                                                               // 362
                        func: efunc                                                                             // 363
                    });                                                                                         // 364
                    this.sound.addEventListener(type, efunc, true);                                             // 365
                }                                                                                               // 366
                return this;                                                                                    // 367
            };                                                                                                  // 368
            this.unbind = function(types) {                                                                     // 369
                if (!supported) {                                                                               // 370
                    return this;                                                                                // 371
                }                                                                                               // 372
                types = types.split(" ");                                                                       // 373
                for (var t = 0; t < types.length; t++) {                                                        // 374
                    var idx = types[t], type = idx.split(".")[0];                                               // 375
                    for (var i = 0; i < events.length; i++) {                                                   // 376
                        var namespace = events[i].idx.split(".");                                               // 377
                        if (events[i].idx === idx || namespace[1] && namespace[1] === idx.replace(".", "")) {   // 378
                            this.sound.removeEventListener(type, events[i].func, true);                         // 379
                            events.splice(i, 1);                                                                // 380
                        }                                                                                       // 381
                    }                                                                                           // 382
                }                                                                                               // 383
                return this;                                                                                    // 384
            };                                                                                                  // 385
            this.bindOnce = function(type, func) {                                                              // 386
                if (!supported) {                                                                               // 387
                    return this;                                                                                // 388
                }                                                                                               // 389
                var self = this;                                                                                // 390
                eventsOnce[pid++] = false;                                                                      // 391
                this.bind(type + "." + pid, function() {                                                        // 392
                    if (!eventsOnce[pid]) {                                                                     // 393
                        eventsOnce[pid] = true;                                                                 // 394
                        func.call(self);                                                                        // 395
                    }                                                                                           // 396
                    self.unbind(type + "." + pid);                                                              // 397
                });                                                                                             // 398
                return this;                                                                                    // 399
            };                                                                                                  // 400
            this.trigger = function(types, detail) {                                                            // 401
                if (!supported) {                                                                               // 402
                    return this;                                                                                // 403
                }                                                                                               // 404
                types = types.split(" ");                                                                       // 405
                for (var t = 0; t < types.length; t++) {                                                        // 406
                    var idx = types[t];                                                                         // 407
                    for (var i = 0; i < events.length; i++) {                                                   // 408
                        var eventType = events[i].idx.split(".");                                               // 409
                        if (events[i].idx === idx || eventType[0] && eventType[0] === idx.replace(".", "")) {   // 410
                            var evt = doc.createEvent("HTMLEvents");                                            // 411
                            evt.initEvent(eventType[0], false, true);                                           // 412
                            evt.originalEvent = detail;                                                         // 413
                            this.sound.dispatchEvent(evt);                                                      // 414
                        }                                                                                       // 415
                    }                                                                                           // 416
                }                                                                                               // 417
                return this;                                                                                    // 418
            };                                                                                                  // 419
            this.fadeTo = function(to, duration, callback) {                                                    // 420
                if (!supported) {                                                                               // 421
                    return this;                                                                                // 422
                }                                                                                               // 423
                if (duration instanceof Function) {                                                             // 424
                    callback = duration;                                                                        // 425
                    duration = buzz.defaults.duration;                                                          // 426
                } else {                                                                                        // 427
                    duration = duration || buzz.defaults.duration;                                              // 428
                }                                                                                               // 429
                var from = this.volume, delay = duration / Math.abs(from - to), self = this;                    // 430
                this.play();                                                                                    // 431
                function doFade() {                                                                             // 432
                    setTimeout(function() {                                                                     // 433
                        if (from < to && self.volume < to) {                                                    // 434
                            self.setVolume(self.volume += 1);                                                   // 435
                            doFade();                                                                           // 436
                        } else if (from > to && self.volume > to) {                                             // 437
                            self.setVolume(self.volume -= 1);                                                   // 438
                            doFade();                                                                           // 439
                        } else if (callback instanceof Function) {                                              // 440
                            callback.apply(self);                                                               // 441
                        }                                                                                       // 442
                    }, delay);                                                                                  // 443
                }                                                                                               // 444
                this.whenReady(function() {                                                                     // 445
                    doFade();                                                                                   // 446
                });                                                                                             // 447
                return this;                                                                                    // 448
            };                                                                                                  // 449
            this.fadeIn = function(duration, callback) {                                                        // 450
                if (!supported) {                                                                               // 451
                    return this;                                                                                // 452
                }                                                                                               // 453
                return this.setVolume(0).fadeTo(100, duration, callback);                                       // 454
            };                                                                                                  // 455
            this.fadeOut = function(duration, callback) {                                                       // 456
                if (!supported) {                                                                               // 457
                    return this;                                                                                // 458
                }                                                                                               // 459
                return this.fadeTo(0, duration, callback);                                                      // 460
            };                                                                                                  // 461
            this.fadeWith = function(sound, duration) {                                                         // 462
                if (!supported) {                                                                               // 463
                    return this;                                                                                // 464
                }                                                                                               // 465
                this.fadeOut(duration, function() {                                                             // 466
                    this.stop();                                                                                // 467
                });                                                                                             // 468
                sound.play().fadeIn(duration);                                                                  // 469
                return this;                                                                                    // 470
            };                                                                                                  // 471
            this.whenReady = function(func) {                                                                   // 472
                if (!supported) {                                                                               // 473
                    return null;                                                                                // 474
                }                                                                                               // 475
                var self = this;                                                                                // 476
                if (this.sound.readyState === 0) {                                                              // 477
                    this.bind("canplay.buzzwhenready", function() {                                             // 478
                        func.call(self);                                                                        // 479
                    });                                                                                         // 480
                } else {                                                                                        // 481
                    func.call(self);                                                                            // 482
                }                                                                                               // 483
            };                                                                                                  // 484
            this.addSource = function(src) {                                                                    // 485
                var self = this, source = doc.createElement("source");                                          // 486
                source.src = src;                                                                               // 487
                if (buzz.types[getExt(src)]) {                                                                  // 488
                    source.type = buzz.types[getExt(src)];                                                      // 489
                }                                                                                               // 490
                this.sound.appendChild(source);                                                                 // 491
                source.addEventListener("error", function(e) {                                                  // 492
                    self.trigger("sourceerror", e);                                                             // 493
                });                                                                                             // 494
                return source;                                                                                  // 495
            };                                                                                                  // 496
            function timerangeToArray(timeRange) {                                                              // 497
                var array = [], length = timeRange.length - 1;                                                  // 498
                for (var i = 0; i <= length; i++) {                                                             // 499
                    array.push({                                                                                // 500
                        start: timeRange.start(i),                                                              // 501
                        end: timeRange.end(i)                                                                   // 502
                    });                                                                                         // 503
                }                                                                                               // 504
                return array;                                                                                   // 505
            }                                                                                                   // 506
            function getExt(filename) {                                                                         // 507
                return filename.split(".").pop();                                                               // 508
            }                                                                                                   // 509
            if (supported && src) {                                                                             // 510
                for (var i in buzz.defaults) {                                                                  // 511
                    if (buzz.defaults.hasOwnProperty(i)) {                                                      // 512
                        if (options[i] === undefined) {                                                         // 513
                            options[i] = buzz.defaults[i];                                                      // 514
                        }                                                                                       // 515
                    }                                                                                           // 516
                }                                                                                               // 517
                this.sound = doc.createElement("audio");                                                        // 518
                if (options.webAudioApi) {                                                                      // 519
                    var audioCtx = buzz.getAudioContext();                                                      // 520
                    if (audioCtx) {                                                                             // 521
                        this.source = audioCtx.createMediaElementSource(this.sound);                            // 522
                        this.source.connect(audioCtx.destination);                                              // 523
                    }                                                                                           // 524
                }                                                                                               // 525
                if (src instanceof Array) {                                                                     // 526
                    for (var j in src) {                                                                        // 527
                        if (src.hasOwnProperty(j)) {                                                            // 528
                            this.addSource(src[j]);                                                             // 529
                        }                                                                                       // 530
                    }                                                                                           // 531
                } else if (options.formats.length) {                                                            // 532
                    for (var k in options.formats) {                                                            // 533
                        if (options.formats.hasOwnProperty(k)) {                                                // 534
                            this.addSource(src + "." + options.formats[k]);                                     // 535
                        }                                                                                       // 536
                    }                                                                                           // 537
                } else {                                                                                        // 538
                    this.addSource(src);                                                                        // 539
                }                                                                                               // 540
                if (options.loop) {                                                                             // 541
                    this.loop();                                                                                // 542
                }                                                                                               // 543
                if (options.autoplay) {                                                                         // 544
                    this.sound.autoplay = "autoplay";                                                           // 545
                }                                                                                               // 546
                if (options.preload === true) {                                                                 // 547
                    this.sound.preload = "auto";                                                                // 548
                } else if (options.preload === false) {                                                         // 549
                    this.sound.preload = "none";                                                                // 550
                } else {                                                                                        // 551
                    this.sound.preload = options.preload;                                                       // 552
                }                                                                                               // 553
                this.setVolume(options.volume);                                                                 // 554
                buzz.sounds.push(this);                                                                         // 555
            }                                                                                                   // 556
        },                                                                                                      // 557
        group: function(sounds) {                                                                               // 558
            sounds = argsToArray(sounds, arguments);                                                            // 559
            this.getSounds = function() {                                                                       // 560
                return sounds;                                                                                  // 561
            };                                                                                                  // 562
            this.add = function(soundArray) {                                                                   // 563
                soundArray = argsToArray(soundArray, arguments);                                                // 564
                for (var a = 0; a < soundArray.length; a++) {                                                   // 565
                    sounds.push(soundArray[a]);                                                                 // 566
                }                                                                                               // 567
            };                                                                                                  // 568
            this.remove = function(soundArray) {                                                                // 569
                soundArray = argsToArray(soundArray, arguments);                                                // 570
                for (var a = 0; a < soundArray.length; a++) {                                                   // 571
                    for (var i = 0; i < sounds.length; i++) {                                                   // 572
                        if (sounds[i] === soundArray[a]) {                                                      // 573
                            sounds.splice(i, 1);                                                                // 574
                            break;                                                                              // 575
                        }                                                                                       // 576
                    }                                                                                           // 577
                }                                                                                               // 578
            };                                                                                                  // 579
            this.load = function() {                                                                            // 580
                fn("load");                                                                                     // 581
                return this;                                                                                    // 582
            };                                                                                                  // 583
            this.play = function() {                                                                            // 584
                fn("play");                                                                                     // 585
                return this;                                                                                    // 586
            };                                                                                                  // 587
            this.togglePlay = function() {                                                                      // 588
                fn("togglePlay");                                                                               // 589
                return this;                                                                                    // 590
            };                                                                                                  // 591
            this.pause = function(time) {                                                                       // 592
                fn("pause", time);                                                                              // 593
                return this;                                                                                    // 594
            };                                                                                                  // 595
            this.stop = function() {                                                                            // 596
                fn("stop");                                                                                     // 597
                return this;                                                                                    // 598
            };                                                                                                  // 599
            this.mute = function() {                                                                            // 600
                fn("mute");                                                                                     // 601
                return this;                                                                                    // 602
            };                                                                                                  // 603
            this.unmute = function() {                                                                          // 604
                fn("unmute");                                                                                   // 605
                return this;                                                                                    // 606
            };                                                                                                  // 607
            this.toggleMute = function() {                                                                      // 608
                fn("toggleMute");                                                                               // 609
                return this;                                                                                    // 610
            };                                                                                                  // 611
            this.setVolume = function(volume) {                                                                 // 612
                fn("setVolume", volume);                                                                        // 613
                return this;                                                                                    // 614
            };                                                                                                  // 615
            this.increaseVolume = function(value) {                                                             // 616
                fn("increaseVolume", value);                                                                    // 617
                return this;                                                                                    // 618
            };                                                                                                  // 619
            this.decreaseVolume = function(value) {                                                             // 620
                fn("decreaseVolume", value);                                                                    // 621
                return this;                                                                                    // 622
            };                                                                                                  // 623
            this.loop = function() {                                                                            // 624
                fn("loop");                                                                                     // 625
                return this;                                                                                    // 626
            };                                                                                                  // 627
            this.unloop = function() {                                                                          // 628
                fn("unloop");                                                                                   // 629
                return this;                                                                                    // 630
            };                                                                                                  // 631
            this.setSpeed = function(speed) {                                                                   // 632
                fn("setSpeed", speed);                                                                          // 633
                return this;                                                                                    // 634
            };                                                                                                  // 635
            this.setTime = function(time) {                                                                     // 636
                fn("setTime", time);                                                                            // 637
                return this;                                                                                    // 638
            };                                                                                                  // 639
            this.set = function(key, value) {                                                                   // 640
                fn("set", key, value);                                                                          // 641
                return this;                                                                                    // 642
            };                                                                                                  // 643
            this.bind = function(type, func) {                                                                  // 644
                fn("bind", type, func);                                                                         // 645
                return this;                                                                                    // 646
            };                                                                                                  // 647
            this.unbind = function(type) {                                                                      // 648
                fn("unbind", type);                                                                             // 649
                return this;                                                                                    // 650
            };                                                                                                  // 651
            this.bindOnce = function(type, func) {                                                              // 652
                fn("bindOnce", type, func);                                                                     // 653
                return this;                                                                                    // 654
            };                                                                                                  // 655
            this.trigger = function(type) {                                                                     // 656
                fn("trigger", type);                                                                            // 657
                return this;                                                                                    // 658
            };                                                                                                  // 659
            this.fade = function(from, to, duration, callback) {                                                // 660
                fn("fade", from, to, duration, callback);                                                       // 661
                return this;                                                                                    // 662
            };                                                                                                  // 663
            this.fadeIn = function(duration, callback) {                                                        // 664
                fn("fadeIn", duration, callback);                                                               // 665
                return this;                                                                                    // 666
            };                                                                                                  // 667
            this.fadeOut = function(duration, callback) {                                                       // 668
                fn("fadeOut", duration, callback);                                                              // 669
                return this;                                                                                    // 670
            };                                                                                                  // 671
            function fn() {                                                                                     // 672
                var args = argsToArray(null, arguments), func = args.shift();                                   // 673
                for (var i = 0; i < sounds.length; i++) {                                                       // 674
                    sounds[i][func].apply(sounds[i], args);                                                     // 675
                }                                                                                               // 676
            }                                                                                                   // 677
            function argsToArray(array, args) {                                                                 // 678
                return array instanceof Array ? array : Array.prototype.slice.call(args);                       // 679
            }                                                                                                   // 680
        },                                                                                                      // 681
        all: function() {                                                                                       // 682
            return new buzz.group(buzz.sounds);                                                                 // 683
        },                                                                                                      // 684
        isSupported: function() {                                                                               // 685
            return !!buzz.el.canPlayType;                                                                       // 686
        },                                                                                                      // 687
        isOGGSupported: function() {                                                                            // 688
            return !!buzz.el.canPlayType && buzz.el.canPlayType('audio/ogg; codecs="vorbis"');                  // 689
        },                                                                                                      // 690
        isWAVSupported: function() {                                                                            // 691
            return !!buzz.el.canPlayType && buzz.el.canPlayType('audio/wav; codecs="1"');                       // 692
        },                                                                                                      // 693
        isMP3Supported: function() {                                                                            // 694
            return !!buzz.el.canPlayType && buzz.el.canPlayType("audio/mpeg;");                                 // 695
        },                                                                                                      // 696
        isAACSupported: function() {                                                                            // 697
            return !!buzz.el.canPlayType && (buzz.el.canPlayType("audio/x-m4a;") || buzz.el.canPlayType("audio/aac;"));
        },                                                                                                      // 699
        toTimer: function(time, withHours) {                                                                    // 700
            var h, m, s;                                                                                        // 701
            h = Math.floor(time / 3600);                                                                        // 702
            h = isNaN(h) ? "--" : h >= 10 ? h : "0" + h;                                                        // 703
            m = withHours ? Math.floor(time / 60 % 60) : Math.floor(time / 60);                                 // 704
            m = isNaN(m) ? "--" : m >= 10 ? m : "0" + m;                                                        // 705
            s = Math.floor(time % 60);                                                                          // 706
            s = isNaN(s) ? "--" : s >= 10 ? s : "0" + s;                                                        // 707
            return withHours ? h + ":" + m + ":" + s : m + ":" + s;                                             // 708
        },                                                                                                      // 709
        fromTimer: function(time) {                                                                             // 710
            var splits = time.toString().split(":");                                                            // 711
            if (splits && splits.length === 3) {                                                                // 712
                time = parseInt(splits[0], 10) * 3600 + parseInt(splits[1], 10) * 60 + parseInt(splits[2], 10);
            }                                                                                                   // 714
            if (splits && splits.length === 2) {                                                                // 715
                time = parseInt(splits[0], 10) * 60 + parseInt(splits[1], 10);                                  // 716
            }                                                                                                   // 717
            return time;                                                                                        // 718
        },                                                                                                      // 719
        toPercent: function(value, total, decimal) {                                                            // 720
            var r = Math.pow(10, decimal || 0);                                                                 // 721
            return Math.round(value * 100 / total * r) / r;                                                     // 722
        },                                                                                                      // 723
        fromPercent: function(percent, total, decimal) {                                                        // 724
            var r = Math.pow(10, decimal || 0);                                                                 // 725
            return Math.round(total / 100 * percent * r) / r;                                                   // 726
        }                                                                                                       // 727
    };                                                                                                          // 728
    return buzz;                                                                                                // 729
});                                                                                                             // 730
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['brentjanderson:buzz'] = {}, {
  BUZZ: BUZZ
});

})();
