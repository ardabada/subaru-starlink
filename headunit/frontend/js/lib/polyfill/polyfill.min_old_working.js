/* Polyfill service v3.111.0
 * For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
 * 
 * Features requested: CustomEvent,Element,Event,Map,MutationObserver,Object.assign,Promise,ResizeObserver,Set,String.prototype.includes,String.prototype.startsWith
 * 
 * - Date.now, License: CC0 (required by "ResizeObserver", "requestAnimationFrame")
 * - MutationObserver, License: WTFPL (required by "ResizeObserver")
 * - Object.defineProperty, License: CC0 (required by "Set", "Symbol", "Object.create", "Object.defineProperties")
 * - Window, License: CC0 (required by "CustomEvent", "Event")
 * - _ESAbstract.ArrayCreate, License: CC0 (required by "Set", "Symbol", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate")
 * - _ESAbstract.Call, License: CC0 (required by "Set", "Symbol", "Object.getOwnPropertyDescriptor", "_ESAbstract.ToPropertyKey", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive")
 * - _ESAbstract.CreateDataProperty, License: CC0 (required by "Set", "Symbol", "Array.prototype.map", "_ESAbstract.CreateDataPropertyOrThrow")
 * - _ESAbstract.CreateDataPropertyOrThrow, License: CC0 (required by "Set", "Symbol", "Array.prototype.map")
 * - _ESAbstract.CreateMethodProperty, License: CC0 (required by "Set", "Symbol", "Object.getOwnPropertyDescriptor", "Function.prototype.bind")
 * - Object.freeze, License: CC0 (required by "Set", "Symbol")
 * - Object.getPrototypeOf, License: CC0 (required by "Set", "_ESAbstract.OrdinaryCreateFromConstructor")
 * - Object.keys, License: MIT (required by "Set", "Symbol", "Object.create", "Object.defineProperties")
 * - _ESAbstract.Get, License: CC0 (required by "Set", "Symbol", "Object.getOwnPropertyDescriptor", "_ESAbstract.ToPropertyKey", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive")
 * - _ESAbstract.HasOwnProperty, License: CC0 (required by "Set", "Symbol", "Object.getOwnPropertyDescriptor")
 * - _ESAbstract.HasProperty, License: CC0 (required by "Set", "Symbol", "Array.prototype.map")
 * - _ESAbstract.IsArray, License: CC0 (required by "Set", "Symbol", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate")
 * - Array.isArray, License: CC0 (required by "ResizeObserver", "WeakMap")
 * - _ESAbstract.IsCallable, License: CC0 (required by "Set", "Symbol", "Object.getOwnPropertyDescriptor", "_ESAbstract.ToPropertyKey", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive")
 * - Function.prototype.bind, License: MIT (required by "Set", "Symbol", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct")
 * - _ESAbstract.RequireObjectCoercible, License: CC0 (required by "String.prototype.startsWith")
 * - _ESAbstract.SameValueNonNumber, License: CC0 (required by "ResizeObserver", "WeakMap", "_ESAbstract.SameValue")
 * - _ESAbstract.ToBoolean, License: CC0 (required by "Set", "Symbol", "Array.prototype.filter")
 * - _ESAbstract.ToObject, License: CC0 (required by "Set", "Symbol", "Object.create", "Object.defineProperties")
 * - _ESAbstract.GetV, License: CC0 (required by "Set", "_ESAbstract.GetIterator")
 * - _ESAbstract.GetMethod, License: CC0 (required by "Set", "Symbol", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.IsConstructor")
 * - _ESAbstract.Type, License: CC0 (required by "Set", "Symbol", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.IsConstructor")
 * - Object.isExtensible, License: CC0 (required by "Map")
 * - _ESAbstract.CreateIterResultObject, License: CC0 (required by "Set")
 * - _ESAbstract.GetPrototypeFromConstructor, License: CC0 (required by "Set", "_ESAbstract.OrdinaryCreateFromConstructor")
 * - _ESAbstract.IsConstructor, License: CC0 (required by "Set", "Symbol", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct")
 * - _ESAbstract.IsRegExp, License: CC0 (required by "String.prototype.startsWith")
 * - _ESAbstract.IteratorClose, License: CC0 (required by "ResizeObserver", "WeakMap")
 * - _ESAbstract.IteratorComplete, License: CC0 (required by "Set", "_ESAbstract.IteratorStep")
 * - _ESAbstract.IteratorNext, License: CC0 (required by "Set", "_ESAbstract.IteratorStep")
 * - _ESAbstract.IteratorStep, License: CC0 (required by "ResizeObserver", "WeakMap")
 * - _ESAbstract.IteratorValue, License: CC0 (required by "ResizeObserver", "WeakMap")
 * - _ESAbstract.OrdinaryToPrimitive, License: CC0 (required by "Set", "Symbol", "Object.getOwnPropertyDescriptor", "_ESAbstract.ToPropertyKey", "_ESAbstract.ToPrimitive")
 * - _ESAbstract.SameValue, License: CC0 (required by "ResizeObserver", "WeakMap")
 * - _ESAbstract.SameValueZero, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes")
 * - _ESAbstract.ToInteger, License: CC0 (required by "CustomEvent", "Event", "Array.prototype.includes", "_ESAbstract.ToLength")
 * - _ESAbstract.ToLength, License: CC0 (required by "Set", "Symbol", "Array.prototype.map")
 * - _ESAbstract.ToPrimitive, License: CC0 (required by "Set", "Symbol", "Object.getOwnPropertyDescriptor", "_ESAbstract.ToPropertyKey")
 * - _ESAbstract.ToString, License: CC0 (required by "Set", "Symbol", "Object.getOwnPropertyDescriptor", "_ESAbstract.ToPropertyKey")
 * - Array.prototype.forEach, License: CC0 (required by "Set", "Symbol")
 * - Array.prototype.includes, License: MIT (required by "Set", "Symbol", "Object.getOwnPropertyNames")
 * - Array.prototype.indexOf, License: CC0 (required by "Set", "Symbol", "Object.getOwnPropertyNames")
 * - Object.getOwnPropertyNames, License: CC0 (required by "Set", "Symbol")
 * - String.prototype.includes, License: CC0
 * - String.prototype.startsWith, License: CC0
 * - _ESAbstract.ToPropertyKey, License: CC0 (required by "Set", "Symbol", "Object.getOwnPropertyDescriptor")
 * - Object.getOwnPropertyDescriptor, License: CC0 (required by "Set", "Symbol", "Object.create", "Object.defineProperties")
 * - Object.assign, License: CC0
 * - Object.defineProperties, License: CC0 (required by "Set", "Symbol", "Object.create")
 * - Object.create, License: CC0 (required by "Set", "Symbol")
 * - _ESAbstract.OrdinaryCreateFromConstructor, License: CC0 (required by "Set", "Symbol", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate", "_ESAbstract.Construct")
 * - _ESAbstract.Construct, License: CC0 (required by "Set", "Symbol", "Array.prototype.map", "_ESAbstract.ArraySpeciesCreate")
 * - _ESAbstract.ArraySpeciesCreate, License: CC0 (required by "Set", "Symbol", "Array.prototype.map")
 * - Array.prototype.filter, License: CC0 (required by "Set", "Symbol")
 * - Array.prototype.map, License: CC0 (required by "Set", "Symbol")
 * - Symbol, License: MIT (required by "ResizeObserver", "WeakMap")
 * - Symbol.iterator, License: MIT (required by "Set", "_ESAbstract.GetIterator")
 * - _ESAbstract.GetIterator, License: CC0 (required by "ResizeObserver", "WeakMap")
 * - Symbol.species, License: MIT (required by "Set")
 * - Map, License: CC0
 * - Set, License: CC0
 * - Symbol.toStringTag, License: MIT (required by "ResizeObserver", "WeakMap")
 * - Promise, License: MIT
 * - WeakMap, License: MIT (required by "ResizeObserver")
 * - devicePixelRatio, License: CC0 (required by "ResizeObserver")
 * - document, License: CC0 (required by "CustomEvent", "Event")
 * - Element, License: CC0 (required by "CustomEvent", "Event")
 * - Event, License: CC0 (required by "CustomEvent")
 * - CustomEvent, License: CC0
 * - requestAnimationFrame, License: MIT (required by "ResizeObserver")
 * - ResizeObserver, License: Apache-2.0 */

(function(self, undefined) {
    if (!("Date"in self&&"now"in self.Date&&"getTime"in self.Date.prototype
    )) {
    
    // Date.now
    Date.now = function now() {
        return new Date().getTime();
    };
    
    }
    
    if (!("MutationObserver"in self
    )) {
    
    // MutationObserver
    /*!
     * Shim for MutationObserver interface
     * Author: Graeme Yeates (github.com/megawac)
     * Repository: https://github.com/megawac/MutationObserver.js
     * License: WTFPL V2, 2004 (wtfpl.net).
     * Though credit and staring the repo will make me feel pretty, you can modify and redistribute as you please.
     * Attempts to follow spec (https://www.w3.org/TR/dom/#mutation-observers) as closely as possible for native javascript
     * See https://github.com/WebKit/webkit/blob/master/Source/WebCore/dom/MutationObserver.cpp for current webkit source c++ implementation
     */
    
    /**
     * prefix bugs:
        - https://bugs.webkit.org/show_bug.cgi?id=85161
        - https://bugzilla.mozilla.org/show_bug.cgi?id=749920
     * Don't use WebKitMutationObserver as Safari (6.0.5-6.1) use a buggy implementation
    */
    if (!window.MutationObserver) {
        window.MutationObserver = (function (undefined) {
            "use strict";
            /**
             * @param {function(Array.<MutationRecord>, MutationObserver)} listener
             * @constructor
             */
            function MutationObserver(listener) {
                /**
                 * @type {Array.<Object>}
                 * @private
                 */
                this._watched = [];
                /** @private */
                this._listener = listener;
            }
    
            /**
             * Start a recursive timeout function to check all items being observed for mutations
             * @type {MutationObserver} observer
             * @private
             */
            function startMutationChecker(observer) {
                (function check() {
                    var mutations = observer.takeRecords();
    
                    if (mutations.length) { // fire away
                        // calling the listener with context is not spec but currently consistent with FF and WebKit
                        observer._listener(mutations, observer);
                    }
                    /** @private */
                    observer._timeout = setTimeout(check, MutationObserver._period);
                })();
            }
    
            /**
             * Period to check for mutations (~32 times/sec)
             * @type {number}
             * @expose
             */
            MutationObserver._period = 30 /*ms+runtime*/;
    
            /**
             * Exposed API
             * @expose
             * @final
             */
            MutationObserver.prototype = {
                /**
                 * see https://dom.spec.whatwg.org/#dom-mutationobserver-observe
                 * not going to throw here but going to follow the current spec config sets
                 * @param {Node|null} $target
                 * @param {Object|null} config : MutationObserverInit configuration dictionary
                 * @expose
                 * @return undefined
                 */
                observe: function ($target, config) {
                    /**
                     * Using slightly different names so closure can go ham
                     * @type {!Object} : A custom mutation config
                     */
                    var settings = {
                        attr: !!(config.attributes || config.attributeFilter || config.attributeOldValue),
    
                        // some browsers enforce that subtree must be set with childList, attributes or characterData.
                        // We don't care as spec doesn't specify this rule.
                        kids: !!config.childList,
                        descendents: !!config.subtree,
                        charData: !!(config.characterData || config.characterDataOldValue)
                    };
    
                    var watched = this._watched;
    
                    // remove already observed target element from pool
                    for (var i = 0; i < watched.length; i++) {
                        if (watched[i].tar === $target) watched.splice(i, 1);
                    }
    
                    if (config.attributeFilter) {
                        /**
                         * converts to a {key: true} dict for faster lookup
                         * @type {Object.<String,Boolean>}
                         */
                        settings.afilter = reduce(config.attributeFilter, function (a, b) {
                            a[b] = true;
                            return a;
                        }, {});
                    }
    
                    watched.push({
                        tar: $target,
                        fn: createMutationSearcher($target, settings)
                    });
    
                    // reconnect if not connected
                    if (!this._timeout) {
                        startMutationChecker(this);
                    }
                },
    
                /**
                 * Finds mutations since last check and empties the "record queue" i.e. mutations will only be found once
                 * @expose
                 * @return {Array.<MutationRecord>}
                 */
                takeRecords: function () {
                    var mutations = [];
                    var watched = this._watched;
    
                    for (var i = 0; i < watched.length; i++) {
                        watched[i].fn(mutations);
                    }
    
                    return mutations;
                },
    
                /**
                 * @expose
                 * @return undefined
                 */
                disconnect: function () {
                    this._watched = []; // clear the stuff being observed
                    clearTimeout(this._timeout); // ready for garbage collection
                    /** @private */
                    this._timeout = null;
                }
            };
    
            /**
             * Simple MutationRecord pseudoclass. No longer exposing as its not fully compliant
             * @param {Object} data
             * @return {Object} a MutationRecord
             */
            function MutationRecord(data) {
                var settings = { // technically these should be on proto so hasOwnProperty will return false for non explicitly props
                    type: null,
                    target: null,
                    addedNodes: [],
                    removedNodes: [],
                    previousSibling: null,
                    nextSibling: null,
                    attributeName: null,
                    attributeNamespace: null,
                    oldValue: null
                };
                for (var prop in data) {
                    if (has(settings, prop) && data[prop] !== undefined) settings[prop] = data[prop];
                }
                return settings;
            }
    
            /**
             * Creates a func to find all the mutations
             *
             * @param {Node} $target
             * @param {!Object} config : A custom mutation config
             */
            function createMutationSearcher($target, config) {
                /** type {Elestuct} */
                var $oldstate = clone($target, config); // create the cloned datastructure
    
                /**
                 * consumes array of mutations we can push to
                 *
                 * @param {Array.<MutationRecord>} mutations
                 */
                return function (mutations) {
                    var olen = mutations.length, dirty;
    
                    if (config.charData && $target.nodeType === 3 && $target.nodeValue !== $oldstate.charData) {
                        mutations.push(new MutationRecord({
                            type: "characterData",
                            target: $target,
                            oldValue: $oldstate.charData
                        }));
                    }
    
                    // Alright we check base level changes in attributes... easy
                    if (config.attr && $oldstate.attr) {
                        findAttributeMutations(mutations, $target, $oldstate.attr, config.afilter);
                    }
    
                    // check childlist or subtree for mutations
                    if (config.kids || config.descendents) {
                        dirty = searchSubtree(mutations, $target, $oldstate, config);
                    }
    
                    // reclone data structure if theres changes
                    if (dirty || mutations.length !== olen) {
                        /** type {Elestuct} */
                        $oldstate = clone($target, config);
                    }
                };
            }
    
            /* attributes + attributeFilter helpers */
    
            // Check if the environment has the attribute bug (#4) which cause
            // element.attributes.style to always be null.
            var hasAttributeBug = document.createElement("i");
            hasAttributeBug.style.top = 0;
            hasAttributeBug = hasAttributeBug.attributes.style.value != "null";
    
            /**
             * Gets an attribute value in an environment without attribute bug
             *
             * @param {Node} el
             * @param {Attr} attr
             * @return {String} an attribute value
             */
            function getAttributeSimple(el, attr) {
                // There is a potential for a warning to occur here if the attribute is a
                // custom attribute in IE<9 with a custom .toString() method. This is
                // just a warning and doesn't affect execution (see #21)
                return attr.value;
            }
    
            /**
             * Gets an attribute value with special hack for style attribute (see #4)
             *
             * @param {Node} el
             * @param {Attr} attr
             * @return {String} an attribute value
             */
            function getAttributeWithStyleHack(el, attr) {
                // As with getAttributeSimple there is a potential warning for custom attribtues in IE7.
                return attr.name !== "style" ? attr.value : el.style.cssText;
            }
    
            var getAttributeValue = hasAttributeBug ? getAttributeSimple : getAttributeWithStyleHack;
    
            /**
             * fast helper to check to see if attributes object of an element has changed
             * doesnt handle the textnode case
             *
             * @param {Array.<MutationRecord>} mutations
             * @param {Node} $target
             * @param {Object.<string, string>} $oldstate : Custom attribute clone data structure from clone
             * @param {Object} filter
             */
            function findAttributeMutations(mutations, $target, $oldstate, filter) {
                var checked = {};
                var attributes = $target.attributes;
                var attr;
                var name;
                var i = attributes.length;
                while (i--) {
                    attr = attributes[i];
                    name = attr.name;
                    if (!filter || has(filter, name)) {
                        if (getAttributeValue($target, attr) !== $oldstate[name]) {
                            // The pushing is redundant but gzips very nicely
                            mutations.push(MutationRecord({
                                type: "attributes",
                                target: $target,
                                attributeName: name,
                                oldValue: $oldstate[name],
                                attributeNamespace: attr.namespaceURI // in ie<8 it incorrectly will return undefined
                            }));
                        }
                        checked[name] = true;
                    }
                }
                for (name in $oldstate) {
                    if (!(checked[name])) {
                        mutations.push(MutationRecord({
                            target: $target,
                            type: "attributes",
                            attributeName: name,
                            oldValue: $oldstate[name]
                        }));
                    }
                }
            }
    
            /**
             * searchSubtree: array of mutations so far, element, element clone, bool
             * synchronous dfs comparision of two nodes
             * This function is applied to any observed element with childList or subtree specified
             * Sorry this is kind of confusing as shit, tried to comment it a bit...
             * codereview.stackexchange.com/questions/38351 discussion of an earlier version of this func
             *
             * @param {Array} mutations
             * @param {Node} $target
             * @param {!Object} $oldstate : A custom cloned node from clone()
             * @param {!Object} config : A custom mutation config
             */
            function searchSubtree(mutations, $target, $oldstate, config) {
                // Track if the tree is dirty and has to be recomputed (#14).
                var dirty;
                /*
                 * Helper to identify node rearrangment and stuff...
                 * There is no gaurentee that the same node will be identified for both added and removed nodes
                 * if the positions have been shuffled.
                 * conflicts array will be emptied by end of operation
                 */
                function resolveConflicts(conflicts, node, $kids, $oldkids, numAddedNodes) {
                    // the distance between the first conflicting node and the last
                    var distance = conflicts.length - 1;
                    // prevents same conflict being resolved twice consider when two nodes switch places.
                    // only one should be given a mutation event (note -~ is used as a math.ceil shorthand)
                    var counter = -~((distance - numAddedNodes) / 2);
                    var $cur;
                    var oldstruct;
                    var conflict;
                    while ((conflict = conflicts.pop())) {
                        $cur = $kids[conflict.i];
                        oldstruct = $oldkids[conflict.j];
    
                        // attempt to determine if there was node rearrangement... won't gaurentee all matches
                        // also handles case where added/removed nodes cause nodes to be identified as conflicts
                        if (config.kids && counter && Math.abs(conflict.i - conflict.j) >= distance) {
                            mutations.push(MutationRecord({
                                type: "childList",
                                target: node,
                                addedNodes: [$cur],
                                removedNodes: [$cur],
                                // haha don't rely on this please
                                nextSibling: $cur.nextSibling,
                                previousSibling: $cur.previousSibling
                            }));
                            counter--; // found conflict
                        }
    
                        // Alright we found the resorted nodes now check for other types of mutations
                        if (config.attr && oldstruct.attr) findAttributeMutations(mutations, $cur, oldstruct.attr, config.afilter);
                        if (config.charData && $cur.nodeType === 3 && $cur.nodeValue !== oldstruct.charData) {
                            mutations.push(MutationRecord({
                                type: "characterData",
                                target: $cur,
                                oldValue: oldstruct.charData
                            }));
                        }
                        // now look @ subtree
                        if (config.descendents) findMutations($cur, oldstruct);
                    }
                }
    
                /**
                 * Main worker. Finds and adds mutations if there are any
                 * @param {Node} node
                 * @param {!Object} old : A cloned data structure using internal clone
                 */
                function findMutations(node, old) {
                    var $kids = node.childNodes;
                    var $oldkids = old.kids;
                    var klen = $kids.length;
                    // $oldkids will be undefined for text and comment nodes
                    var olen = $oldkids ? $oldkids.length : 0;
                    // if (!olen && !klen) return; // both empty; clearly no changes
    
                    // we delay the intialization of these for marginal performance in the expected case (actually quite signficant on large subtrees when these would be otherwise unused)
                    // map of checked element of ids to prevent registering the same conflict twice
                    var map;
                    // array of potential conflicts (ie nodes that may have been re arranged)
                    var conflicts;
                    var id; // element id from getElementId helper
                    var idx; // index of a moved or inserted element
    
                    var oldstruct;
                    // current and old nodes
                    var $cur;
                    var $old;
                    // track the number of added nodes so we can resolve conflicts more accurately
                    var numAddedNodes = 0;
    
                    // iterate over both old and current child nodes at the same time
                    var i = 0, j = 0;
                    // while there is still anything left in $kids or $oldkids (same as i < $kids.length || j < $oldkids.length;)
                    while (i < klen || j < olen) {
                        // current and old nodes at the indexs
                        $cur = $kids[i];
                        oldstruct = $oldkids[j];
                        $old = oldstruct && oldstruct.node;
    
                        if ($cur === $old) { // expected case - optimized for this case
                            // check attributes as specified by config
                            if (config.attr && oldstruct.attr) /* oldstruct.attr instead of textnode check */findAttributeMutations(mutations, $cur, oldstruct.attr, config.afilter);
                            // check character data if node is a comment or textNode and it's being observed
                            if (config.charData && oldstruct.charData !== undefined && $cur.nodeValue !== oldstruct.charData) {
                                mutations.push(MutationRecord({
                                    type: "characterData",
                                    target: $cur,
                                    oldValue: oldstruct.charData
                                }));
                            }
    
                            // resolve conflicts; it will be undefined if there are no conflicts - otherwise an array
                            if (conflicts) resolveConflicts(conflicts, node, $kids, $oldkids, numAddedNodes);
    
                            // recurse on next level of children. Avoids the recursive call when there are no children left to iterate
                            if (config.descendents && ($cur.childNodes.length || oldstruct.kids && oldstruct.kids.length)) findMutations($cur, oldstruct);
    
                            i++;
                            j++;
                        } else { // (uncommon case) lookahead until they are the same again or the end of children
                            dirty = true;
                            if (!map) { // delayed initalization (big perf benefit)
                                map = {};
                                conflicts = [];
                            }
                            if ($cur) {
                                // check id is in the location map otherwise do a indexOf search
                                if (!(map[id = getElementId($cur)])) { // to prevent double checking
                                    // mark id as found
                                    map[id] = true;
                                    // custom indexOf using comparitor checking oldkids[i].node === $cur
                                    if ((idx = indexOfCustomNode($oldkids, $cur, j)) === -1) {
                                        if (config.kids) {
                                            mutations.push(MutationRecord({
                                                type: "childList",
                                                target: node,
                                                addedNodes: [$cur], // $cur is a new node
                                                nextSibling: $cur.nextSibling,
                                                previousSibling: $cur.previousSibling
                                            }));
                                            numAddedNodes++;
                                        }
                                    } else {
                                        conflicts.push({ // add conflict
                                            i: i,
                                            j: idx
                                        });
                                    }
                                }
                                i++;
                            }
    
                            if ($old &&
                                // special case: the changes may have been resolved: i and j appear congurent so we can continue using the expected case
                                $old !== $kids[i]
                            ) {
                                if (!(map[id = getElementId($old)])) {
                                    map[id] = true;
                                    if ((idx = indexOf($kids, $old, i)) === -1) {
                                        if (config.kids) {
                                            mutations.push(MutationRecord({
                                                type: "childList",
                                                target: old.node,
                                                removedNodes: [$old],
                                                nextSibling: $oldkids[j + 1], // praise no indexoutofbounds exception
                                                previousSibling: $oldkids[j - 1]
                                            }));
                                            numAddedNodes--;
                                        }
                                    } else {
                                        conflicts.push({
                                            i: idx,
                                            j: j
                                        });
                                    }
                                }
                                j++;
                            }
                        }// end uncommon case
                    }// end loop
    
                    // resolve any remaining conflicts
                    if (conflicts) resolveConflicts(conflicts, node, $kids, $oldkids, numAddedNodes);
                }
                findMutations($target, $oldstate);
                return dirty;
            }
    
            /**
             * Utility
             * Cones a element into a custom data structure designed for comparision. https://gist.github.com/megawac/8201012
             *
             * @param {Node} $target
             * @param {!Object} config : A custom mutation config
             * @return {!Object} : Cloned data structure
             */
            function clone($target, config) {
                var recurse = true; // set true so childList we'll always check the first level
                return (function copy($target) {
                    var elestruct = {
                        /** @type {Node} */
                        node: $target
                    };
    
                    // Store current character data of target text or comment node if the config requests
                    // those properties to be observed.
                    if (config.charData && ($target.nodeType === 3 || $target.nodeType === 8)) {
                        elestruct.charData = $target.nodeValue;
                    }
                    // its either a element, comment, doc frag or document node
                    else {
                        // Add attr only if subtree is specified or top level and avoid if
                        // attributes is a document object (#13).
                        if (config.attr && recurse && $target.nodeType === 1) {
                            /**
                             * clone live attribute list to an object structure {name: val}
                             * @type {Object.<string, string>}
                             */
                            elestruct.attr = reduce($target.attributes, function (memo, attr) {
                                if (!config.afilter || config.afilter[attr.name]) {
                                    memo[attr.name] = getAttributeValue($target, attr);
                                }
                                return memo;
                            }, {});
                        }
    
                        // whether we should iterate the children of $target node
                        if (recurse && ((config.kids || config.charData) || (config.attr && config.descendents))) {
                            /** @type {Array.<!Object>} : Array of custom clone */
                            elestruct.kids = map($target.childNodes, copy);
                        }
    
                        recurse = config.descendents;
                    }
                    return elestruct;
                })($target);
            }
    
            /**
             * indexOf an element in a collection of custom nodes
             *
             * @param {NodeList} set
             * @param {!Object} $node : A custom cloned node
             * @param {number} idx : index to start the loop
             * @return {number}
             */
            function indexOfCustomNode(set, $node, idx) {
                return indexOf(set, $node, idx, JSCompiler_renameProperty("node"));
            }
    
            // using a non id (eg outerHTML or nodeValue) is extremely naive and will run into issues with nodes that may appear the same like <li></li>
            var counter = 1; // don't use 0 as id (falsy)
            /** @const */
            var expando = "mo_id";
    
            /**
             * Attempt to uniquely id an element for hashing. We could optimize this for legacy browsers but it hopefully wont be called enough to be a concern
             *
             * @param {Node} $ele
             * @return {(string|number)}
             */
            function getElementId($ele) {
                try {
                    return $ele.id || ($ele[expando] = $ele[expando] || counter++);
                } catch (o_O) { // ie <8 will throw if you set an unknown property on a text node
                    try {
                        return $ele.nodeValue; // naive
                    } catch (shitie) { // when text node is removed: https://gist.github.com/megawac/8355978 :(
                        return counter++;
                    }
                }
            }
    
            /**
             * **map** Apply a mapping function to each item of a set
             * @param {Array|NodeList} set
             * @param {Function} iterator
             */
            function map(set, iterator) {
                var results = [];
                for (var index = 0; index < set.length; index++) {
                    results[index] = iterator(set[index], index, set);
                }
                return results;
            }
    
            /**
             * **Reduce** builds up a single result from a list of values
             * @param {Array|NodeList|NamedNodeMap} set
             * @param {Function} iterator
             * @param {*} [memo] Initial value of the memo.
             */
            function reduce(set, iterator, memo) {
                for (var index = 0; index < set.length; index++) {
                    memo = iterator(memo, set[index], index, set);
                }
                return memo;
            }
    
            /**
             * **indexOf** find index of item in collection.
             * @param {Array|NodeList} set
             * @param {Object} item
             * @param {number} idx
             * @param {string} [prop] Property on set item to compare to item
             */
            function indexOf(set, item, idx, prop) {
                for (/*idx = ~~idx*/; idx < set.length; idx++) {// start idx is always given as this is internal
                    if ((prop ? set[idx][prop] : set[idx]) === item) return idx;
                }
                return -1;
            }
    
            /**
             * @param {Object} obj
             * @param {(string|number)} prop
             * @return {boolean}
             */
            function has(obj, prop) {
                return obj[prop] !== undefined; // will be nicely inlined by gcc
            }
    
            // GCC hack see https://stackoverflow.com/a/23202438/1517919
            function JSCompiler_renameProperty(a) {
                return a;
            }
    
            return MutationObserver;
        })(void 0);
    }
    
    }
    
    if (!("defineProperty"in Object&&function(){try{var e={}
    return Object.defineProperty(e,"test",{value:42}),!0}catch(t){return!1}}()
    )) {
    
    // Object.defineProperty
    (function (nativeDefineProperty) {
    
        var supportsAccessors = Object.prototype.hasOwnProperty.call(Object.prototype, '__defineGetter__');
        var ERR_ACCESSORS_NOT_SUPPORTED = 'Getters & setters cannot be defined on this javascript engine';
        var ERR_VALUE_ACCESSORS = 'A property cannot both have accessors and be writable or have a value';
    
        // Polyfill.io - This does not use CreateMethodProperty because our CreateMethodProperty function uses Object.defineProperty.
        Object.defineProperty = function defineProperty(object, property, descriptor) {
    
            // Where native support exists, assume it
            if (nativeDefineProperty && (object === window || object === document || object === Element.prototype || object instanceof Element)) {
                return nativeDefineProperty(object, property, descriptor);
            }
    
            if (object === null || !(object instanceof Object || typeof object === 'object')) {
                throw new TypeError('Object.defineProperty called on non-object');
            }
    
            if (!(descriptor instanceof Object)) {
                throw new TypeError('Property description must be an object');
            }
    
            var propertyString = String(property);
            var hasValueOrWritable = 'value' in descriptor || 'writable' in descriptor;
            var getterType = 'get' in descriptor && typeof descriptor.get;
            var setterType = 'set' in descriptor && typeof descriptor.set;
    
            // handle descriptor.get
            if (getterType) {
                if (getterType === undefined) {
                    return object;
                }
                if (getterType !== 'function') {
                    throw new TypeError('Getter must be a function');
                }
                if (!supportsAccessors) {
                    throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
                }
                if (hasValueOrWritable) {
                    throw new TypeError(ERR_VALUE_ACCESSORS);
                }
                Object.__defineGetter__.call(object, propertyString, descriptor.get);
            } else {
                object[propertyString] = descriptor.value;
            }
    
            // handle descriptor.set
            if (setterType) {
                if (setterType === undefined) {
                    return object;
                }
                if (setterType !== 'function') {
                    throw new TypeError('Setter must be a function');
                }
                if (!supportsAccessors) {
                    throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
                }
                if (hasValueOrWritable) {
                    throw new TypeError(ERR_VALUE_ACCESSORS);
                }
                Object.__defineSetter__.call(object, propertyString, descriptor.set);
            }
    
            // OK to define value unconditionally - if a getter has been specified as well, an error would be thrown above
            if ('value' in descriptor) {
                object[propertyString] = descriptor.value;
            }
    
            return object;
        };
    }(Object.defineProperty));
    
    }
    
    if (!("Window"in self
    )) {
    
    // Window
    if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {
        (function (global) {
            if (global.constructor) {
                global.Window = global.constructor;
            } else {
                (global.Window = global.constructor = new Function('return function Window() {}')()).prototype = self;
            }
        }(self));
    }
    
    }
    
    
    // _ESAbstract.ArrayCreate
    // 9.4.2.2. ArrayCreate ( length [ , proto ] )
    function ArrayCreate(length /* [, proto] */) { // eslint-disable-line no-unused-vars
        // 1. Assert: length is an integer Number ≥ 0.
        // 2. If length is -0, set length to +0.
        if (1 / length === -Infinity) {
            length = 0;
        }
        // 3. If length>2^32-1, throw a RangeError exception.
        if (length > (Math.pow(2, 32) - 1)) {
            throw new RangeError('Invalid array length');
        }
        // 4. If proto is not present, set proto to the intrinsic object %ArrayPrototype%.
        // 5. Let A be a newly created Array exotic object.
        var A = [];
        // 6. Set A's essential internal methods except for [[DefineOwnProperty]] to the default ordinary object definitions specified in 9.1.
        // 7. Set A.[[DefineOwnProperty]] as specified in 9.4.2.1.
        // 8. Set A.[[Prototype]] to proto.
        // 9. Set A.[[Extensible]] to true.
        // 10. Perform ! OrdinaryDefineOwnProperty(A, "length", PropertyDescriptor{[[Value]]: length, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: false}).
        A.length = length;
        // 11. Return A.
        return A;
    }
    
    // _ESAbstract.Call
    /* global IsCallable */
    // 7.3.12. Call ( F, V [ , argumentsList ] )
    function Call(F, V /* [, argumentsList] */) { // eslint-disable-line no-unused-vars
        // 1. If argumentsList is not present, set argumentsList to a new empty List.
        var argumentsList = arguments.length > 2 ? arguments[2] : [];
        // 2. If IsCallable(F) is false, throw a TypeError exception.
        if (IsCallable(F) === false) {
            throw new TypeError(Object.prototype.toString.call(F) + 'is not a function.');
        }
        // 3. Return ? F.[[Call]](V, argumentsList).
        return F.apply(V, argumentsList);
    }
    
    // _ESAbstract.CreateDataProperty
    // 7.3.4. CreateDataProperty ( O, P, V )
    // NOTE
    // This abstract operation creates a property whose attributes are set to the same defaults used for properties created by the ECMAScript language assignment operator.
    // Normally, the property will not already exist. If it does exist and is not configurable or if O is not extensible, [[DefineOwnProperty]] will return false.
    function CreateDataProperty(O, P, V) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(O) is Object.
        // 2. Assert: IsPropertyKey(P) is true.
        // 3. Let newDesc be the PropertyDescriptor{ [[Value]]: V, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: true }.
        var newDesc = {
            value: V,
            writable: true,
            enumerable: true,
            configurable: true
        };
        // 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
        try {
            Object.defineProperty(O, P, newDesc);
            return true;
        } catch (e) {
            return false;
        }
    }
    
    // _ESAbstract.CreateDataPropertyOrThrow
    /* global CreateDataProperty */
    // 7.3.6. CreateDataPropertyOrThrow ( O, P, V )
    function CreateDataPropertyOrThrow(O, P, V) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(O) is Object.
        // 2. Assert: IsPropertyKey(P) is true.
        // 3. Let success be ? CreateDataProperty(O, P, V).
        var success = CreateDataProperty(O, P, V);
        // 4. If success is false, throw a TypeError exception.
        if (!success) {
            throw new TypeError('Cannot assign value `' + Object.prototype.toString.call(V) + '` to property `' + Object.prototype.toString.call(P) + '` on object `' + Object.prototype.toString.call(O) + '`');
        }
        // 5. Return success.
        return success;
    }
    
    // _ESAbstract.CreateMethodProperty
    // 7.3.5. CreateMethodProperty ( O, P, V )
    function CreateMethodProperty(O, P, V) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(O) is Object.
        // 2. Assert: IsPropertyKey(P) is true.
        // 3. Let newDesc be the PropertyDescriptor{[[Value]]: V, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true}.
        var newDesc = {
            value: V,
            writable: true,
            enumerable: false,
            configurable: true
        };
        // 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
        Object.defineProperty(O, P, newDesc);
    }
    if (!("freeze"in Object
    )) {
    
    // Object.freeze
    /* global CreateMethodProperty */
    // 19.1.2.6. Object.freeze ( O )
    CreateMethodProperty(Object, 'freeze', function freeze(O) {
        // This feature cannot be implemented fully as a polyfill.
        // We choose to silently fail which allows "securable" code
        // to "gracefully" degrade to working but insecure code.
        return O;
    });
    
    }
    
    if (!("getPrototypeOf"in Object
    )) {
    
    // Object.getPrototypeOf
    /* global CreateMethodProperty */
    // Based on: https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
    
    // https://github.com/es-shims/es5-shim/issues#issue/2
    // http://ejohn.org/blog/objectgetprototypeof/
    // recommended by fschaefer on github
    //
    // sure, and webreflection says ^_^
    // ... this will nerever possibly return null
    // ... Opera Mini breaks here with infinite loops
    CreateMethodProperty(Object, 'getPrototypeOf', function getPrototypeOf(object) {
        if (object !== Object(object)) {
            throw new TypeError('Object.getPrototypeOf called on non-object');
        }
        var proto = object.__proto__;
        if (proto || proto === null) {
            return proto;
        } else if (typeof object.constructor == 'function' && object instanceof object.constructor) {
            return object.constructor.prototype;
        } else if (object instanceof Object) {
            return Object.prototype;
        } else {
            // Correctly return null for Objects created with `Object.create(null)`
            // (shammed or native) or `{ __proto__: null}`.  Also returns null for
            // cross-realm objects on browsers that lack `__proto__` support (like
            // IE <11), but that's the best we can do.
            return null;
        }
    });
    
    }
    
    if (!("keys"in Object&&function(){return 2===Object.keys(arguments).length}(1,2)&&function(){try{return Object.keys(""),!0}catch(t){return!1}}()
    )) {
    
    // Object.keys
    /* global CreateMethodProperty */
    CreateMethodProperty(Object, "keys", (function() {
        'use strict';
    
        // modified from https://github.com/es-shims/object-keys
    
        var has = Object.prototype.hasOwnProperty;
        var toStr = Object.prototype.toString;
        var isEnumerable = Object.prototype.propertyIsEnumerable;
        var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
        var hasPrototypeEnumBug = isEnumerable.call(function () { }, 'prototype');
        function hasProtoEnumBug() {
            // Object.create polyfill creates an enumerable __proto__
            var createdObj;
            try {
                createdObj = Object.create({});
            } catch (e) {
                // If this fails the polyfil isn't loaded yet, but will be.
                // Can't add it to depedencies because of it would create a circular depedency.
                return true;
            }
    
            return isEnumerable.call(createdObj, '__proto__')
        }
    
        var dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ];
        var equalsConstructorPrototype = function (o) {
            var ctor = o.constructor;
            return ctor && ctor.prototype === o;
        };
        var excludedKeys = {
            $console: true,
            $external: true,
            $frame: true,
            $frameElement: true,
            $frames: true,
            $innerHeight: true,
            $innerWidth: true,
            $outerHeight: true,
            $outerWidth: true,
            $pageXOffset: true,
            $pageYOffset: true,
            $parent: true,
            $scrollLeft: true,
            $scrollTop: true,
            $scrollX: true,
            $scrollY: true,
            $self: true,
            $webkitIndexedDB: true,
            $webkitStorageInfo: true,
            $window: true
        };
        var hasAutomationEqualityBug = (function () {
            if (typeof window === 'undefined') { return false; }
            for (var k in window) {
                try {
                    if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
                        try {
                            equalsConstructorPrototype(window[k]);
                        } catch (e) {
                            return true;
                        }
                    }
                } catch (e) {
                    return true;
                }
            }
            return false;
        }());
        var equalsConstructorPrototypeIfNotBuggy = function (o) {
            if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
                return equalsConstructorPrototype(o);
            }
            try {
                return equalsConstructorPrototype(o);
            } catch (e) {
                return false;
            }
        };
    
        function isArgumentsObject(value) {
            var str = toStr.call(value);
            var isArgs = str === '[object Arguments]';
            if (!isArgs) {
                isArgs = str !== '[object Array]' &&
                    value !== null &&
                    typeof value === 'object' &&
                    typeof value.length === 'number' &&
                    value.length >= 0 &&
                    toStr.call(value.callee) === '[object Function]';
            }
            return isArgs;
        }
    
        return function keys(object) {
            var isFunction = toStr.call(object) === '[object Function]';
            var isArguments = isArgumentsObject(object);
            var isString = toStr.call(object) === '[object String]';
            var theKeys = [];
    
            if (object === undefined || object === null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }
    
            var skipPrototype = hasPrototypeEnumBug && isFunction;
            if (isString && object.length > 0 && !has.call(object, 0)) {
                for (var i = 0; i < object.length; ++i) {
                    theKeys.push(String(i));
                }
            }
    
            if (isArguments && object.length > 0) {
                for (var j = 0; j < object.length; ++j) {
                    theKeys.push(String(j));
                }
            } else {
                for (var name in object) {
                    if (!(hasProtoEnumBug() && name === '__proto__') && !(skipPrototype && name === 'prototype') && has.call(object, name)) {
                        theKeys.push(String(name));
                    }
                }
            }
    
            if (hasDontEnumBug) {
                var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
    
                for (var k = 0; k < dontEnums.length; ++k) {
                    if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
                        theKeys.push(dontEnums[k]);
                    }
                }
            }
            return theKeys;
        };
    }()));
    
    }
    
    
    // _ESAbstract.Get
    // 7.3.1. Get ( O, P )
    function Get(O, P) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(O) is Object.
        // 2. Assert: IsPropertyKey(P) is true.
        // 3. Return ? O.[[Get]](P, O).
        return O[P];
    }
    
    // _ESAbstract.HasOwnProperty
    // 7.3.11 HasOwnProperty (O, P)
    function HasOwnProperty(o, p) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(O) is Object.
        // 2. Assert: IsPropertyKey(P) is true.
        // 3. Let desc be ? O.[[GetOwnProperty]](P).
        // 4. If desc is undefined, return false.
        // 5. Return true.
        // Polyfill.io - As we expect user agents to support ES3 fully we can skip the above steps and use Object.prototype.hasOwnProperty to do them for us.
        return Object.prototype.hasOwnProperty.call(o, p);
    }
    
    // _ESAbstract.HasProperty
    // 7.3.10. HasProperty ( O, P )
    function HasProperty(O, P) { // eslint-disable-line no-unused-vars
        // Assert: Type(O) is Object.
        // Assert: IsPropertyKey(P) is true.
        // Return ? O.[[HasProperty]](P).
        return P in O;
    }
    
    // _ESAbstract.IsArray
    // 7.2.2. IsArray ( argument )
    function IsArray(argument) { // eslint-disable-line no-unused-vars
        // 1. If Type(argument) is not Object, return false.
        // 2. If argument is an Array exotic object, return true.
        // 3. If argument is a Proxy exotic object, then
            // a. If argument.[[ProxyHandler]] is null, throw a TypeError exception.
            // b. Let target be argument.[[ProxyTarget]].
            // c. Return ? IsArray(target).
        // 4. Return false.
    
        // Polyfill.io - We can skip all the above steps and check the string returned from Object.prototype.toString().
        return Object.prototype.toString.call(argument) === '[object Array]';
    }
    if (!("isArray"in Array
    )) {
    
    // Array.isArray
    /* global CreateMethodProperty, IsArray */
    // 22.1.2.2. Array.isArray ( arg )
    CreateMethodProperty(Array, 'isArray', function isArray(arg) {
        // 1. Return ? IsArray(arg).
        return IsArray(arg);
    });
    
    }
    
    
    // _ESAbstract.IsCallable
    // 7.2.3. IsCallable ( argument )
    function IsCallable(argument) { // eslint-disable-line no-unused-vars
        // 1. If Type(argument) is not Object, return false.
        // 2. If argument has a [[Call]] internal method, return true.
        // 3. Return false.
    
        // Polyfill.io - Only function objects have a [[Call]] internal method. This means we can simplify this function to check that the argument has a type of function.
        return typeof argument === 'function';
    }
    if (!("bind"in Function.prototype
    )) {
    
    // Function.prototype.bind
    /* global CreateMethodProperty, IsCallable */
    // 19.2.3.2. Function.prototype.bind ( thisArg, ...args )
    // https://github.com/es-shims/es5-shim/blob/d6d7ff1b131c7ba14c798cafc598bb6780d37d3b/es5-shim.js#L182
    CreateMethodProperty(Function.prototype, 'bind', function bind(that) { // .length is 1
        // add necessary es5-shim utilities
        var $Array = Array;
        var $Object = Object;
        var ArrayPrototype = $Array.prototype;
        var Empty = function Empty() { };
        var array_slice = ArrayPrototype.slice;
        var array_concat = ArrayPrototype.concat;
        var array_push = ArrayPrototype.push;
        var max = Math.max;
        // /add necessary es5-shim utilities
    
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (!IsCallable(target)) {
            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = array_slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var bound;
        var binder = function () {
    
            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.
    
                var result = target.apply(
                    this,
                    array_concat.call(args, array_slice.call(arguments))
                );
                if ($Object(result) === result) {
                    return result;
                }
                return this;
    
            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.
    
                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    array_concat.call(args, array_slice.call(arguments))
                );
    
            }
    
        };
    
        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.
    
        var boundLength = max(0, target.length - args.length);
    
        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            array_push.call(boundArgs, '$' + i);
        }
    
        // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.
        bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);
    
        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }
    
        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.
    
        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.
    
        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.
    
        // 22. Return F.
        return bound;
    });
    
    }
    
    
    // _ESAbstract.RequireObjectCoercible
    // 7.2.1. RequireObjectCoercible ( argument )
    // The abstract operation ToObject converts argument to a value of type Object according to Table 12:
    // Table 12: ToObject Conversions
    /*
    |----------------------------------------------------------------------------------------------------------------------------------------------------|
    | Argument Type | Result                                                                                                                             |
    |----------------------------------------------------------------------------------------------------------------------------------------------------|
    | Undefined     | Throw a TypeError exception.                                                                                                       |
    | Null          | Throw a TypeError exception.                                                                                                       |
    | Boolean       | Return argument.                                                                                                                   |
    | Number        | Return argument.                                                                                                                   |
    | String        | Return argument.                                                                                                                   |
    | Symbol        | Return argument.                                                                                                                   |
    | Object        | Return argument.                                                                                                                   |
    |----------------------------------------------------------------------------------------------------------------------------------------------------|
    */
    function RequireObjectCoercible(argument) { // eslint-disable-line no-unused-vars
        if (argument === null || argument === undefined) {
            throw TypeError(Object.prototype.toString.call(argument) + ' is not coercible to Object.');
        }
        return argument;
    }
    
    // _ESAbstract.SameValueNonNumber
    // 7.2.12. SameValueNonNumber ( x, y )
    function SameValueNonNumber(x, y) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(x) is not Number.
        // 2. Assert: Type(x) is the same as Type(y).
        // 3. If Type(x) is Undefined, return true.
        // 4. If Type(x) is Null, return true.
        // 5. If Type(x) is String, then
            // a. If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
        // 6. If Type(x) is Boolean, then
            // a. If x and y are both true or both false, return true; otherwise, return false.
        // 7. If Type(x) is Symbol, then
            // a. If x and y are both the same Symbol value, return true; otherwise, return false.
        // 8. If x and y are the same Object value, return true. Otherwise, return false.
    
        // Polyfill.io - We can skip all above steps because the === operator does it all for us.
        return x === y;
    }
    
    // _ESAbstract.ToBoolean
    // 7.1.2. ToBoolean ( argument )
    // The abstract operation ToBoolean converts argument to a value of type Boolean according to Table 9:
    /*
    --------------------------------------------------------------------------------------------------------------
    | Argument Type | Result                                                                                     |
    --------------------------------------------------------------------------------------------------------------
    | Undefined     | Return false.                                                                              |
    | Null          | Return false.                                                                              |
    | Boolean       | Return argument.                                                                           |
    | Number        | If argument is +0, -0, or NaN, return false; otherwise return true.                        |
    | String        | If argument is the empty String (its length is zero), return false; otherwise return true. |
    | Symbol        | Return true.                                                                               |
    | Object        | Return true.                                                                               |
    --------------------------------------------------------------------------------------------------------------
    */
    function ToBoolean(argument) { // eslint-disable-line no-unused-vars
        return Boolean(argument);
    }
    
    // _ESAbstract.ToObject
    // 7.1.13 ToObject ( argument )
    // The abstract operation ToObject converts argument to a value of type Object according to Table 12:
    // Table 12: ToObject Conversions
    /*
    |----------------------------------------------------------------------------------------------------------------------------------------------------|
    | Argument Type | Result                                                                                                                             |
    |----------------------------------------------------------------------------------------------------------------------------------------------------|
    | Undefined     | Throw a TypeError exception.                                                                                                       |
    | Null          | Throw a TypeError exception.                                                                                                       |
    | Boolean       | Return a new Boolean object whose [[BooleanData]] internal slot is set to argument. See 19.3 for a description of Boolean objects. |
    | Number        | Return a new Number object whose [[NumberData]] internal slot is set to argument. See 20.1 for a description of Number objects.    |
    | String        | Return a new String object whose [[StringData]] internal slot is set to argument. See 21.1 for a description of String objects.    |
    | Symbol        | Return a new Symbol object whose [[SymbolData]] internal slot is set to argument. See 19.4 for a description of Symbol objects.    |
    | Object        | Return argument.                                                                                                                   |
    |----------------------------------------------------------------------------------------------------------------------------------------------------|
    */
    function ToObject(argument) { // eslint-disable-line no-unused-vars
        if (argument === null || argument === undefined) {
            throw TypeError();
        }
        return Object(argument);
    }
    
    // _ESAbstract.GetV
    /* global ToObject */
    // 7.3.2 GetV (V, P)
    function GetV(v, p) { // eslint-disable-line no-unused-vars
        // 1. Assert: IsPropertyKey(P) is true.
        // 2. Let O be ? ToObject(V).
        var o = ToObject(v);
        // 3. Return ? O.[[Get]](P, V).
        return o[p];
    }
    
    // _ESAbstract.GetMethod
    /* global GetV, IsCallable */
    // 7.3.9. GetMethod ( V, P )
    function GetMethod(V, P) { // eslint-disable-line no-unused-vars
        // 1. Assert: IsPropertyKey(P) is true.
        // 2. Let func be ? GetV(V, P).
        var func = GetV(V, P);
        // 3. If func is either undefined or null, return undefined.
        if (func === null || func === undefined) {
            return undefined;
        }
        // 4. If IsCallable(func) is false, throw a TypeError exception.
        if (IsCallable(func) === false) {
            throw new TypeError('Method not callable: ' + P);
        }
        // 5. Return func.
        return func;
    }
    
    // _ESAbstract.Type
    // "Type(x)" is used as shorthand for "the type of x"...
    function Type(x) { // eslint-disable-line no-unused-vars
        switch (typeof x) {
            case 'undefined':
                return 'undefined';
            case 'boolean':
                return 'boolean';
            case 'number':
                return 'number';
            case 'string':
                return 'string';
            case 'symbol':
                return 'symbol';
            default:
                // typeof null is 'object'
                if (x === null) return 'null';
                // Polyfill.io - This is here because a Symbol polyfill will have a typeof `object`.
                if ('Symbol' in self && (x instanceof self.Symbol || x.constructor === self.Symbol)) return 'symbol';
    
                return 'object';
        }
    }
    if (!("isExtensible"in Object
    )) {
    
    // Object.isExtensible
    /* global CreateMethodProperty, Type */
    
    (function (nativeIsExtensible) {
        // 19.1.2.13 Object.isExtensible ( O )
        CreateMethodProperty(Object, 'isExtensible', function isExtensible(O) {
            // 1. If Type(O) is not Object, return false.
            if (Type(O) !== "object") {
                return false;
            }
            // 2. Return ? IsExtensible(O).
            return nativeIsExtensible ? nativeIsExtensible(O) : true;
        });
    }(Object.isExtensible));
    
    }
    
    
    // _ESAbstract.CreateIterResultObject
    /* global Type, CreateDataProperty */
    // 7.4.7. CreateIterResultObject ( value, done )
    function CreateIterResultObject(value, done) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(done) is Boolean.
        if (Type(done) !== 'boolean') {
            throw new Error();
        }
        // 2. Let obj be ObjectCreate(%ObjectPrototype%).
        var obj = {};
        // 3. Perform CreateDataProperty(obj, "value", value).
        CreateDataProperty(obj, "value", value);
        // 4. Perform CreateDataProperty(obj, "done", done).
        CreateDataProperty(obj, "done", done);
        // 5. Return obj.
        return obj;
    }
    
    // _ESAbstract.GetPrototypeFromConstructor
    /* global Get, Type */
    // 9.1.14. GetPrototypeFromConstructor ( constructor, intrinsicDefaultProto )
    function GetPrototypeFromConstructor(constructor, intrinsicDefaultProto) { // eslint-disable-line no-unused-vars
        // 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object. The corresponding object must be an intrinsic that is intended to be used as the [[Prototype]] value of an object.
        // 2. Assert: IsCallable(constructor) is true.
        // 3. Let proto be ? Get(constructor, "prototype").
        var proto = Get(constructor, "prototype");
        // 4. If Type(proto) is not Object, then
        if (Type(proto) !== 'object') {
            // a. Let realm be ? GetFunctionRealm(constructor).
            // b. Set proto to realm's intrinsic object named intrinsicDefaultProto.
            proto = intrinsicDefaultProto;
        }
        // 5. Return proto.
        return proto;
    }
    
    // _ESAbstract.IsConstructor
    /* global Type */
    // 7.2.4. IsConstructor ( argument )
    function IsConstructor(argument) { // eslint-disable-line no-unused-vars
        // 1. If Type(argument) is not Object, return false.
        if (Type(argument) !== 'object') {
            return false;
        }
        // 2. If argument has a [[Construct]] internal method, return true.
        // 3. Return false.
    
        // Polyfill.io - `new argument` is the only way  to truly test if a function is a constructor.
        // We choose to not use`new argument` because the argument could have side effects when called.
        // Instead we check to see if the argument is a function and if it has a prototype.
        // Arrow functions do not have a [[Construct]] internal method, nor do they have a prototype.
        return typeof argument === 'function' && !!argument.prototype;
    }
    
    // _ESAbstract.IsRegExp
    /* global Type, Get, ToBoolean */
    // 7.2.8. IsRegExp ( argument )
    function IsRegExp(argument) { // eslint-disable-line no-unused-vars
        // 1. If Type(argument) is not Object, return false.
        if (Type(argument) !== 'object') {
            return false;
        }
        // 2. Let matcher be ? Get(argument, @@match).
        var matcher = 'Symbol' in self && 'match' in self.Symbol ? Get(argument, self.Symbol.match) : undefined;
        // 3. If matcher is not undefined, return ToBoolean(matcher).
        if (matcher !== undefined) {
            return ToBoolean(matcher);
        }
        // 4. If argument has a [[RegExpMatcher]] internal slot, return true.
        try {
            var lastIndex = argument.lastIndex;
            argument.lastIndex = 0;
            RegExp.prototype.exec.call(argument);
            return true;
        // eslint-disable-next-line no-empty
        } catch (e) {} finally {
            argument.lastIndex = lastIndex;
        }
        // 5. Return false.
        return false;
    }
    
    // _ESAbstract.IteratorClose
    /* global GetMethod, Type, Call */
    // 7.4.6. IteratorClose ( iteratorRecord, completion )
    function IteratorClose(iteratorRecord, completion) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(iteratorRecord.[[Iterator]]) is Object.
        if (Type(iteratorRecord['[[Iterator]]']) !== 'object') {
            throw new Error(Object.prototype.toString.call(iteratorRecord['[[Iterator]]']) + 'is not an Object.');
        }
        // 2. Assert: completion is a Completion Record.
        // Polyfill.io - Ignoring this step as there is no way to check if something is a Completion Record in userland JavaScript.
    
        // 3. Let iterator be iteratorRecord.[[Iterator]].
        var iterator = iteratorRecord['[[Iterator]]'];
        // 4. Let return be ? GetMethod(iterator, "return").
        // Polyfill.io - We name it  returnMethod because return is a keyword and can not be used as an identifier (E.G. variable name, function name etc).
        var returnMethod = GetMethod(iterator, "return");
        // 5. If return is undefined, return Completion(completion).
        if (returnMethod === undefined) {
            return completion;
        }
        // 6. Let innerResult be Call(return, iterator, « »).
        try {
            var innerResult = Call(returnMethod, iterator);
        } catch (error) {
            var innerException = error;
        }
        // 7. If completion.[[Type]] is throw, return Completion(completion).
        if (completion) {
            return completion;
        }
        // 8. If innerResult.[[Type]] is throw, return Completion(innerResult).
        if (innerException) {
            throw innerException;
        }
        // 9. If Type(innerResult.[[Value]]) is not Object, throw a TypeError exception.
        if (Type(innerResult) !== 'object') {
            throw new TypeError("Iterator's return method returned a non-object.");
        }
        // 10. Return Completion(completion).
        return completion;
    }
    
    // _ESAbstract.IteratorComplete
    /* global Type, ToBoolean, Get */
    // 7.4.3 IteratorComplete ( iterResult )
    function IteratorComplete(iterResult) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(iterResult) is Object.
        if (Type(iterResult) !== 'object') {
            throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
        }
        // 2. Return ToBoolean(? Get(iterResult, "done")).
        return ToBoolean(Get(iterResult, "done"));
    }
    
    // _ESAbstract.IteratorNext
    /* global Call, Type */
    // 7.4.2. IteratorNext ( iteratorRecord [ , value ] )
    function IteratorNext(iteratorRecord /* [, value] */) { // eslint-disable-line no-unused-vars
        // 1. If value is not present, then
        if (arguments.length < 2) {
            // a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « »).
            var result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]']);
        // 2. Else,
        } else {
            // a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « value »).
            result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]'], [arguments[1]]);
        }
        // 3. If Type(result) is not Object, throw a TypeError exception.
        if (Type(result) !== 'object') {
            throw new TypeError('bad iterator');
        }
        // 4. Return result.
        return result;
    }
    
    // _ESAbstract.IteratorStep
    /* global IteratorNext, IteratorComplete */
    // 7.4.5. IteratorStep ( iteratorRecord )
    function IteratorStep(iteratorRecord) { // eslint-disable-line no-unused-vars
        // 1. Let result be ? IteratorNext(iteratorRecord).
        var result = IteratorNext(iteratorRecord);
        // 2. Let done be ? IteratorComplete(result).
        var done = IteratorComplete(result);
        // 3. If done is true, return false.
        if (done === true) {
            return false;
        }
        // 4. Return result.
        return result;
    }
    
    // _ESAbstract.IteratorValue
    /* global Type, Get */
    // 7.4.4 IteratorValue ( iterResult )
    function IteratorValue(iterResult) { // eslint-disable-line no-unused-vars
        // Assert: Type(iterResult) is Object.
        if (Type(iterResult) !== 'object') {
            throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
        }
        // Return ? Get(iterResult, "value").
        return Get(iterResult, "value");
    }
    
    // _ESAbstract.OrdinaryToPrimitive
    /* global Get, IsCallable, Call, Type */
    // 7.1.1.1. OrdinaryToPrimitive ( O, hint )
    function OrdinaryToPrimitive(O, hint) { // eslint-disable-line no-unused-vars
        // 1. Assert: Type(O) is Object.
        // 2. Assert: Type(hint) is String and its value is either "string" or "number".
        // 3. If hint is "string", then
        if (hint === 'string') {
            // a. Let methodNames be « "toString", "valueOf" ».
            var methodNames = ['toString', 'valueOf'];
            // 4. Else,
        } else {
            // a. Let methodNames be « "valueOf", "toString" ».
            methodNames = ['valueOf', 'toString'];
        }
        // 5. For each name in methodNames in List order, do
        for (var i = 0; i < methodNames.length; ++i) {
            var name = methodNames[i];
            // a. Let method be ? Get(O, name).
            var method = Get(O, name);
            // b. If IsCallable(method) is true, then
            if (IsCallable(method)) {
                // i. Let result be ? Call(method, O).
                var result = Call(method, O);
                // ii. If Type(result) is not Object, return result.
                if (Type(result) !== 'object') {
                    return result;
                }
            }
        }
        // 6. Throw a TypeError exception.
        throw new TypeError('Cannot convert to primitive.');
    }
    
    // _ESAbstract.SameValue
    /* global Type, SameValueNonNumber */
    // 7.2.10. SameValue ( x, y )
    function SameValue(x, y) { // eslint-disable-line no-unused-vars
        // 1. If Type(x) is different from Type(y), return false.
        if (Type(x) !== Type(y)) {
            return false;
        }
        // 2. If Type(x) is Number, then
        if (Type(x) === 'number') {
            // a. If x is NaN and y is NaN, return true.
            if (isNaN(x) && isNaN(y)) {
                return true;
            }
            // Polyfill.io - 0 === -0 is true, but they are not the same value.
            // b. If x is +0 and y is -0, return false.
            // c. If x is -0 and y is +0, return false.
            if (x === 0 && y === 0 && 1/x !== 1/y) {
                return false;
            }
            // d. If x is the same Number value as y, return true.
            if (x === y) {
                return true;
            }
            // e. Return false.
            return false;
        }
        // 3. Return SameValueNonNumber(x, y).
        return SameValueNonNumber(x, y);
    }
    
    // _ESAbstract.SameValueZero
    /* global Type, SameValueNonNumber */
    // 7.2.11. SameValueZero ( x, y )
    function SameValueZero (x, y) { // eslint-disable-line no-unused-vars
        // 1. If Type(x) is different from Type(y), return false.
        if (Type(x) !== Type(y)) {
            return false;
        }
        // 2. If Type(x) is Number, then
        if (Type(x) === 'number') {
            // a. If x is NaN and y is NaN, return true.
            if (isNaN(x) && isNaN(y)) {
                return true;
            }
            // b. If x is +0 and y is -0, return true.
            if (1/x === Infinity && 1/y === -Infinity) {
                return true;
            }
            // c. If x is -0 and y is +0, return true.
            if (1/x === -Infinity && 1/y === Infinity) {
                return true;
            }
            // d. If x is the same Number value as y, return true.
            if (x === y) {
                return true;
            }
            // e. Return false.
            return false;
        }
        // 3. Return SameValueNonNumber(x, y).
        return SameValueNonNumber(x, y);
    }
    
    // _ESAbstract.ToInteger
    /* global Type */
    // 7.1.4. ToInteger ( argument )
    function ToInteger(argument) { // eslint-disable-line no-unused-vars
        if (Type(argument) === 'symbol') {
            throw new TypeError('Cannot convert a Symbol value to a number');
        }
    
        // 1. Let number be ? ToNumber(argument).
        var number = Number(argument);
        // 2. If number is NaN, return +0.
        if (isNaN(number)) {
            return 0;
        }
        // 3. If number is +0, -0, +∞, or -∞, return number.
        if (1/number === Infinity || 1/number === -Infinity || number === Infinity || number === -Infinity) {
            return number;
        }
        // 4. Return the number value that is the same sign as number and whose magnitude is floor(abs(number)).
        return ((number < 0) ? -1 : 1) * Math.floor(Math.abs(number));
    }
    
    // _ESAbstract.ToLength
    /* global ToInteger */
    // 7.1.15. ToLength ( argument )
    function ToLength(argument) { // eslint-disable-line no-unused-vars
        // 1. Let len be ? ToInteger(argument).
        var len = ToInteger(argument);
        // 2. If len ≤ +0, return +0.
        if (len <= 0) {
            return 0;
        }
        // 3. Return min(len, 253-1).
        return Math.min(len, Math.pow(2, 53) -1);
    }
    
    // _ESAbstract.ToPrimitive
    /* global Type, GetMethod, Call, OrdinaryToPrimitive */
    // 7.1.1. ToPrimitive ( input [ , PreferredType ] )
    function ToPrimitive(input /* [, PreferredType] */) { // eslint-disable-line no-unused-vars
        var PreferredType = arguments.length > 1 ? arguments[1] : undefined;
        // 1. Assert: input is an ECMAScript language value.
        // 2. If Type(input) is Object, then
        if (Type(input) === 'object') {
            // a. If PreferredType is not present, let hint be "default".
            if (arguments.length < 2) {
                var hint = 'default';
                // b. Else if PreferredType is hint String, let hint be "string".
            } else if (PreferredType === String) {
                hint = 'string';
                // c. Else PreferredType is hint Number, let hint be "number".
            } else if (PreferredType === Number) {
                hint = 'number';
            }
            // d. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
            var exoticToPrim = typeof self.Symbol === 'function' && typeof self.Symbol.toPrimitive === 'symbol' ? GetMethod(input, self.Symbol.toPrimitive) : undefined;
            // e. If exoticToPrim is not undefined, then
            if (exoticToPrim !== undefined) {
                // i. Let result be ? Call(exoticToPrim, input, « hint »).
                var result = Call(exoticToPrim, input, [hint]);
                // ii. If Type(result) is not Object, return result.
                if (Type(result) !== 'object') {
                    return result;
                }
                // iii. Throw a TypeError exception.
                throw new TypeError('Cannot convert exotic object to primitive.');
            }
            // f. If hint is "default", set hint to "number".
            if (hint === 'default') {
                hint = 'number';
            }
            // g. Return ? OrdinaryToPrimitive(input, hint).
            return OrdinaryToPrimitive(input, hint);
        }
        // 3. Return input
        return input;
    }
    
    // _ESAbstract.ToString
    /* global Type, ToPrimitive */
    // 7.1.12. ToString ( argument )
    // The abstract operation ToString converts argument to a value of type String according to Table 11:
    // Table 11: ToString Conversions
    /*
    |---------------|--------------------------------------------------------|
    | Argument Type | Result                                                 |
    |---------------|--------------------------------------------------------|
    | Undefined     | Return "undefined".                                    |
    |---------------|--------------------------------------------------------|
    | Null	        | Return "null".                                         |
    |---------------|--------------------------------------------------------|
    | Boolean       | If argument is true, return "true".                    |
    |               | If argument is false, return "false".                  |
    |---------------|--------------------------------------------------------|
    | Number        | Return NumberToString(argument).                       |
    |---------------|--------------------------------------------------------|
    | String        | Return argument.                                       |
    |---------------|--------------------------------------------------------|
    | Symbol        | Throw a TypeError exception.                           |
    |---------------|--------------------------------------------------------|
    | Object        | Apply the following steps:                             |
    |               | Let primValue be ? ToPrimitive(argument, hint String). |
    |               | Return ? ToString(primValue).                          |
    |---------------|--------------------------------------------------------|
    */
    function ToString(argument) { // eslint-disable-line no-unused-vars
        switch(Type(argument)) {
            case 'symbol':
                throw new TypeError('Cannot convert a Symbol value to a string');
            case 'object':
                var primValue = ToPrimitive(argument, String);
                return ToString(primValue); // eslint-disable-line no-unused-vars
            default:
                return String(argument);
        }
    }
    if (!("forEach"in Array.prototype
    )) {
    
    // Array.prototype.forEach
    /* global Call, CreateMethodProperty, Get, HasProperty, IsCallable, ToLength, ToObject, ToString */
    // 22.1.3.10. Array.prototype.forEach ( callbackfn [ , thisArg ] )
    CreateMethodProperty(Array.prototype, 'forEach', function forEach(callbackfn /* [ , thisArg ] */) {
        // 1. Let O be ? ToObject(this value).
        var O = ToObject(this);
        // Polyfill.io - If O is a String object, split it into an array in order to iterate correctly.
        // We will use arrayLike in place of O when we are iterating through the list.
        var arraylike = O instanceof String ? O.split('') : O;
        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = ToLength(Get(O, "length"));
        // 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
        if (IsCallable(callbackfn) === false) {
            throw new TypeError(callbackfn + ' is not a function');
        }
        // 4. If thisArg is present, let T be thisArg; else let T be undefined.
        var T = arguments.length > 1 ? arguments[1] : undefined;
        // 5. Let k be 0.
        var k = 0;
        // 6. Repeat, while k < len
        while (k < len) {
            // a. Let Pk be ! ToString(k).
            var Pk = ToString(k);
            // b. Let kPresent be ? HasProperty(O, Pk).
            var kPresent = HasProperty(arraylike, Pk);
            // c. If kPresent is true, then
            if (kPresent) {
                // i. Let kValue be ? Get(O, Pk).
                var kValue = Get(arraylike, Pk);
                // ii. Perform ? Call(callbackfn, T, « kValue, k, O »).
                Call(callbackfn, T, [kValue, k, O]);
            }
            // d. Increase k by 1.
            k = k + 1;
        }
        // 7. Return undefined.
        return undefined;
    });
    
    }
    
    if (!("includes"in Array.prototype
    )) {
    
    // Array.prototype.includes
    /* global CreateMethodProperty, Get, SameValueZero, ToInteger, ToLength, ToObject, ToString */
    // 22.1.3.11. Array.prototype.includes ( searchElement [ , fromIndex ] )
    CreateMethodProperty(Array.prototype, 'includes', function includes(searchElement /* [ , fromIndex ] */) {
        'use strict';
        // 1. Let O be ? ToObject(this value).
        var O = ToObject(this);
        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = ToLength(Get(O, "length"));
        // 3. If len is 0, return false.
        if (len === 0) {
            return false;
        }
        // 4. Let n be ? ToInteger(fromIndex). (If fromIndex is undefined, this step produces the value 0.)
        var n = ToInteger(arguments[1]);
        // 5. If n ≥ 0, then
        if (n >= 0) {
            // a. Let k be n.
            var k = n;
            // 6. Else n < 0,
        } else {
            // a. Let k be len + n.
            k = len + n;
            // b. If k < 0, let k be 0.
            if (k < 0) {
                k = 0;
            }
        }
        // 7. Repeat, while k < len
        while (k < len) {
            // a. Let elementK be the result of ? Get(O, ! ToString(k)).
            var elementK = Get(O, ToString(k));
            // b. If SameValueZero(searchElement, elementK) is true, return true.
            if (SameValueZero(searchElement, elementK)) {
                return true;
            }
            // c. Increase k by 1.
            k = k + 1;
        }
        // 8. Return false.
        return false;
    });
    
    }
    
    if (!("indexOf"in Array.prototype
    )) {
    
    // Array.prototype.indexOf
    /* global CreateMethodProperty, Get, HasProperty, ToInteger, ToLength, ToObject, ToString */
    // 22.1.3.12. Array.prototype.indexOf ( searchElement [ , fromIndex ] )
    CreateMethodProperty(Array.prototype, 'indexOf', function indexOf(searchElement /* [ , fromIndex ] */) {
        // 1. Let O be ? ToObject(this value).
        var O = ToObject(this);
        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = ToLength(Get(O, "length"));
        // 3. If len is 0, return -1.
        if (len === 0) {
            return -1;
        }
        // 4. Let n be ? ToInteger(fromIndex). (If fromIndex is undefined, this step produces the value 0.)
        var n = ToInteger(arguments[1]);
        // 5. If n ≥ len, return -1.
        if (n >= len) {
            return -1;
        }
        // 6. If n ≥ 0, then
        if (n >= 0) {
            // a. If n is -0, let k be +0; else let k be n.
            var k = 1/n === -Infinity ? 0 : n;
            // 7. Else n < 0,
        } else {
            // a. Let k be len + n.
            k = len + n;
            // b. If k < 0, let k be 0.
            if (k < 0) {
                k = 0;
            }
        }
        // 8. Repeat, while k < len
        while (k < len) {
            // a. Let kPresent be ? HasProperty(O, ! ToString(k)).
            var kPresent = HasProperty(O, ToString(k));
            // b. If kPresent is true, then
            if (kPresent) {
                // i. Let elementK be ? Get(O, ! ToString(k)).
                var elementK = Get(O, ToString(k));
                // ii. Let same be the result of performing Strict Equality Comparison searchElement === elementK.
                var same = searchElement === elementK;
                // iii. If same is true, return k.
                if (same) {
                    return k;
                }
            }
            // c. Increase k by 1.
            k = k + 1;
        }
        // 9. Return -1.
        return -1;
    });
    
    }
    
    if (!("getOwnPropertyNames"in Object&&function(){try{return Object.getOwnPropertyNames(1),!0}catch(t){return!1}}()
    )) {
    
    // Object.getOwnPropertyNames
    /* global CreateMethodProperty, ToObject */
    (function() {
        var toString = {}.toString;
        var split = "".split;
        var concat = [].concat;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var nativeGetOwnPropertyNames = Object.getOwnPropertyNames || Object.keys;
        var cachedWindowNames =
            typeof self === "object" ? nativeGetOwnPropertyNames(self) : [];
    
        // 19.1.2.10 Object.getOwnPropertyNames ( O )
        CreateMethodProperty(
            Object,
            "getOwnPropertyNames",
            function getOwnPropertyNames(O) {
                var object = ToObject(O);
    
                if (toString.call(object) === "[object Window]") {
                    try {
                        return nativeGetOwnPropertyNames(object);
                    } catch (e) {
                        // IE bug where layout engine calls userland Object.getOwnPropertyNames for cross-domain `window` objects
                        return concat.call([], cachedWindowNames);
                    }
                }
    
                // Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
                object =
                    toString.call(object) == "[object String]"
                        ? split.call(object, "")
                        : Object(object);
    
                var result = nativeGetOwnPropertyNames(object);
                var extraNonEnumerableKeys = ["length", "prototype"];
                for (var i = 0; i < extraNonEnumerableKeys.length; i++) {
                    var key = extraNonEnumerableKeys[i];
                    if (hasOwnProperty.call(object, key) && !result.includes(key)) {
                        result.push(key);
                    }
                }
    
                if (result.includes("__proto__")) {
                    var index = result.indexOf("__proto__");
                    result.splice(index, 1);
                }
    
                return result;
            }
        );
    })();
    
    }
    
    if (!("includes"in String.prototype
    )) {
    
    // String.prototype.includes
    /* global CreateMethodProperty, IsRegExp, RequireObjectCoercible, ToInteger, ToString */
    // 21.1.3.7. String.prototype.includes ( searchString [ , position ] )
    CreateMethodProperty(String.prototype, 'includes', function includes(searchString /* [ , position ] */) {
        'use strict';
        var position = arguments.length > 1 ? arguments[1] : undefined;
        // 1. Let O be ? RequireObjectCoercible(this value).
        var O = RequireObjectCoercible(this);
        // 2. Let S be ? ToString(O).
        var S = ToString(O);
        // 3. Let isRegExp be ? IsRegExp(searchString).
        var isRegExp = IsRegExp(searchString);
        // 4. If isRegExp is true, throw a TypeError exception.
        if (isRegExp) {
            throw new TypeError('First argument to String.prototype.includes must not be a regular expression');
        }
        // 5. Let searchStr be ? ToString(searchString).
        var searchStr = ToString(searchString);
        // 6. Let pos be ? ToInteger(position). (If position is undefined, this step produces the value 0.)
        var pos = ToInteger(position);
        // 7. Let len be the length of S.
        var len = S.length;
        // 8. Let start be min(max(pos, 0), len).
        var start = Math.min(Math.max(pos, 0), len);
        // 9. Let searchLen be the length of searchStr.
        // var searchLength = searchStr.length;
        // 10. If there exists any integer k not smaller than start such that k + searchLen is not greater than len, and for all nonnegative integers j less than searchLen, the code unit at index k+j within S is the same as the code unit at index j within searchStr, return true; but if there is no such integer k, return false.
        return String.prototype.indexOf.call(S, searchStr, start) !== -1;
    });
    
    }
    
    if (!("startsWith"in String.prototype
    )) {
    
    // String.prototype.startsWith
    /* global CreateMethodProperty, IsRegExp, RequireObjectCoercible, ToInteger, ToString */
    // 21.1.3.20. String.prototype.startsWith ( searchString [ , position ] )
    CreateMethodProperty(String.prototype, 'startsWith', function startsWith(searchString /* [ , position ] */) {
        'use strict';
        var position = arguments.length > 1 ? arguments[1] : undefined;
        // 1. Let O be ? RequireObjectCoercible(this value).
        var O = RequireObjectCoercible(this);
        // 2. Let S be ? ToString(O).
        var S = ToString(O);
        // 3. Let isRegExp be ? IsRegExp(searchString).
        var isRegExp = IsRegExp(searchString);
        // 4. If isRegExp is true, throw a TypeError exception.
        if (isRegExp) {
            throw new TypeError('First argument to String.prototype.startsWith must not be a regular expression');
        }
        // 5. Let searchStr be ? ToString(searchString).
        var searchStr = ToString(searchString);
        // 6. Let pos be ? ToInteger(position). (If position is undefined, this step produces the value 0.)
        var pos = ToInteger(position);
        // 7. Let len be the length of S.
        var len = S.length;
        // 8. Let start be min(max(pos, 0), len).
        var start = Math.min(Math.max(pos, 0), len);
        // 9. Let searchLength be the length of searchStr.
        var searchLength = searchStr.length;
        // 10. If searchLength+start is greater than len, return false.
        if (searchLength + start > len) {
            return false;
        }
        // 11. If the sequence of elements of S starting at start of length searchLength is the same as the full element sequence of searchStr, return true.
        if (S.substr(start).indexOf(searchString) === 0) {
            return true;
        }
        // 12. Otherwise, return false.
        return false;
    });
    
    }
    
    
    // _ESAbstract.ToPropertyKey
    /* globals ToPrimitive, Type, ToString */
    // 7.1.14. ToPropertyKey ( argument )
    function ToPropertyKey(argument) { // eslint-disable-line no-unused-vars
        // 1. Let key be ? ToPrimitive(argument, hint String).
        var key = ToPrimitive(argument, String);
        // 2. If Type(key) is Symbol, then
        if (Type(key) === 'symbol') {
            // a. Return key.
            return key;
        }
        // 3. Return ! ToString(key).
        return ToString(key);
    }
    if (!("getOwnPropertyDescriptor"in Object&&"function"==typeof Object.getOwnPropertyDescriptor&&function(){try{return"3"===Object.getOwnPropertyDescriptor("13.7",1).value}catch(t){return!1}}()
    )) {
    
    // Object.getOwnPropertyDescriptor
    /* global CreateMethodProperty, ToObject, ToPropertyKey, HasOwnProperty, Type */
    (function () {
        var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    
        var supportsDOMDescriptors = (function () {
            try {
                return Object.defineProperty(document.createElement('div'), 'one', {
                    get: function () {
                        return 1;
                    }
                }).one === 1;
            } catch (e) {
                return false;
            }
        });
    
        var toString = ({}).toString;
        var split = ''.split;
    
        // 19.1.2.8 Object.getOwnPropertyDescriptor ( O, P )
        CreateMethodProperty(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(O, P) {
            // 1. Let obj be ? ToObject(O).
            var obj = ToObject(O);
            // Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
            obj = (Type(obj) === 'string' || obj instanceof String) && toString.call(O) == '[object String]' ? split.call(O, '') : Object(O);
    
            // 2. Let key be ? ToPropertyKey(P).
            var key = ToPropertyKey(P);
    
            // 3. Let desc be ? obj.[[GetOwnProperty]](key).
            // 4. Return FromPropertyDescriptor(desc).
            // Polyfill.io Internet Explorer 8 natively supports property descriptors only on DOM objects.
            // We will fallback to the polyfill implementation if the native implementation throws an error.
            if (supportsDOMDescriptors) {
                try {
                    return nativeGetOwnPropertyDescriptor(obj, key);
                // eslint-disable-next-line no-empty
                } catch (error) {}
            }
            if (HasOwnProperty(obj, key)) {
                return {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                    value: obj[key]
                };
            }
        });
    }());
    
    }
    
    if (!("assign"in Object
    )) {
    
    // Object.assign
    /* global CreateMethodProperty, Get, ToObject */
    // 19.1.2.1 Object.assign ( target, ...sources )
    CreateMethodProperty(Object, 'assign', function assign(target, source) { // eslint-disable-line no-unused-vars
        // 1. Let to be ? ToObject(target).
        var to = ToObject(target);
    
        // 2. If only one argument was passed, return to.
        if (arguments.length === 1) {
            return to;
        }
    
        // 3. Let sources be the List of argument values starting with the second argument
        var sources = Array.prototype.slice.call(arguments, 1);
    
        // 4. For each element nextSource of sources, in ascending index order, do
        var index1;
        var index2;
        var keys;
        var from;
        for (index1 = 0; index1 < sources.length; index1++) {
            var nextSource = sources[index1];
            // a. If nextSource is undefined or null, let keys be a new empty List.
            if (nextSource === undefined || nextSource === null) {
                keys = [];
                // b. Else,
            } else {
                // Polyfill.io - In order to get strings in ES3 and old V8 working correctly we need to split them into an array ourselves.
                // i. Let from be ! ToObject(nextSource).
                from = Object.prototype.toString.call(nextSource) === '[object String]' ? String(nextSource).split('') : ToObject(nextSource);
                // ii. Let keys be ? from.[[OwnPropertyKeys]]().
                /*
                    This step in our polyfill is not complying with the specification.
                    [[OwnPropertyKeys]] is meant to return ALL keys, including non-enumerable and symbols.
                    TODO: When we have Reflect.ownKeys, use that instead as it is the userland equivalent of [[OwnPropertyKeys]].
                */
                keys = Object.keys(from);
            }
    
            // c. For each element nextKey of keys in List order, do
            for (index2 = 0; index2 < keys.length; index2++) {
                var nextKey = keys[index2];
                var enumerable;
                try {
                    // i. Let desc be ? from.[[GetOwnProperty]](nextKey).
                    var desc = Object.getOwnPropertyDescriptor(from, nextKey);
                    // ii. If desc is not undefined and desc.[[Enumerable]] is true, then
                    enumerable = desc !== undefined && desc.enumerable === true;
                } catch (e) {
                    // Polyfill.io - We use Object.prototype.propertyIsEnumerable as a fallback
                    // because `Object.getOwnPropertyDescriptor(window.location, 'hash')` causes Internet Explorer 11 to crash.
                    enumerable = Object.prototype.propertyIsEnumerable.call(from, nextKey);
                }
                if (enumerable) {
                    // 1. Let propValue be ? Get(from, nextKey).
                    var propValue = Get(from, nextKey);
                    // 2. Perform ? Set(to, nextKey, propValue, true).
                    to[nextKey] = propValue;
                }
            }
        }
        // 5. Return to.
        return to;
    });
    
    }
    
    if (!("defineProperties"in Object
    )) {
    
    // Object.defineProperties
    /* global CreateMethodProperty, Get, ToObject, Type */
    // 19.1.2.3. Object.defineProperties ( O, Properties )
    CreateMethodProperty(Object, 'defineProperties', function defineProperties(O, Properties) {
        // 1. If Type(O) is not Object, throw a TypeError exception.
        if (Type(O) !== 'object') {
            throw new TypeError('Object.defineProperties called on non-object');
        }
        // 2. Let props be ? ToObject(Properties).
        var props = ToObject(Properties);
        // 3. Let keys be ? props.[[OwnPropertyKeys]]().
        /*
            Polyfill.io - This step in our polyfill is not complying with the specification.
            [[OwnPropertyKeys]] is meant to return ALL keys, including non-enumerable and symbols.
            TODO: When we have Reflect.ownKeys, use that instead as it is the userland equivalent of [[OwnPropertyKeys]].
        */
        var keys = Object.keys(props);
        // 4. Let descriptors be a new empty List.
        var descriptors = [];
        // 5. For each element nextKey of keys in List order, do
        for (var i = 0; i < keys.length; i++) {
            var nextKey = keys[i];
            // a. Let propDesc be ? props.[[GetOwnProperty]](nextKey).
            var propDesc = Object.getOwnPropertyDescriptor(props, nextKey);
            // b. If propDesc is not undefined and propDesc.[[Enumerable]] is true, then
            if (propDesc !== undefined && propDesc.enumerable) {
                // i. Let descObj be ? Get(props, nextKey).
                var descObj = Get(props, nextKey);
                // ii. Let desc be ? ToPropertyDescriptor(descObj).
                // Polyfill.io - We skip this step because Object.defineProperty deals with it.
                // TODO: Implement this step?
                var desc = descObj;
                // iii. Append the pair (a two element List) consisting of nextKey and desc to the end of descriptors.
                descriptors.push([nextKey, desc]);
            }
        }
        // 6. For each pair from descriptors in list order, do
        for (var j = 0; j < descriptors.length; j++){
            // a. Let P be the first element of pair.
            var P = descriptors[j][0];
            // b. Let desc be the second element of pair.
            desc = descriptors[j][1];
            // c. Perform ? DefinePropertyOrThrow(O, P, desc).
            Object.defineProperty(O, P, desc);
        }
        // 7. Return O.
        return O;
    });
    
    }
    
    if (!("create"in Object
    )) {
    
    // Object.create
    /* global CreateMethodProperty, Type */
    (function () {
        var supportsProto = !({ __proto__: null } instanceof Object);
        if (supportsProto) {
            var createEmpty = function () {
                return {
                    __proto__: null
                };
            };
        } else {
            // Taken from https://github.com/es-shims/es5-shim/blob/a265a136d6220146cfbb09026c2de1fa42e220ec/es5-sham.js#L247
            // In old IE __proto__ can't be used to manually set `null`, nor does
            // any other method exist to make an object that inherits from nothing,
            // aside from Object.prototype itself. Instead, create a new global
            // object and *steal* its Object.prototype and strip it bare. This is
            // used as the prototype to create nullary objects.
            createEmpty = function () {
                // Determine which approach to use
                // see https://github.com/es-shims/es5-shim/issues/150
                var iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                var parent = document.body || document.documentElement;
                parent.appendChild(iframe);
                iframe.src = 'javascript:';
                var empty = iframe.contentWindow.Object.prototype;
                parent.removeChild(iframe);
                iframe = null;
                delete empty.constructor;
                delete empty.hasOwnProperty;
                delete empty.propertyIsEnumerable;
                delete empty.isPrototypeOf;
                delete empty.toLocaleString;
                delete empty.toString;
                delete empty.valueOf;
                var Empty = function Empty() {};
                Empty.prototype = empty;
                // short-circuit future calls
                createEmpty = function () {
                    return new Empty();
                };
                return new Empty();
            };
        }
    
        function T() {}
    
        CreateMethodProperty(Object, 'create', function create(O, properties) {
            // 1. If Type(O) is neither Object nor Null, throw a TypeError exception.
            if (Type(O) !== 'object' && Type(O) !== 'null') {
                throw new TypeError('Object prototype may only be an Object or null');
            }
            if (Type(O) === 'null') {
                var obj = createEmpty();
            } else {
                // 2. Let obj be ObjectCreate(O).
                T.prototype = O;
                obj = new T();
                obj.__proto__ = O;
    
    
                obj.constructor.prototype = O;
                obj.__proto__ = O;
            }
    
            // 3. If Properties is not undefined, then
            if (1 in arguments) {
                // a. Return ? ObjectDefineProperties(obj, Properties).
                return Object.defineProperties(obj, properties);
            }
    
            return obj;
        });
    }());
    
    }
    
    
    // _ESAbstract.OrdinaryCreateFromConstructor
    /* global GetPrototypeFromConstructor */
    // 9.1.13. OrdinaryCreateFromConstructor ( constructor, intrinsicDefaultProto [ , internalSlotsList ] )
    function OrdinaryCreateFromConstructor(constructor, intrinsicDefaultProto) { // eslint-disable-line no-unused-vars
        var internalSlotsList = arguments[2] || {};
        // 1. Assert: intrinsicDefaultProto is a String value that is this specification's name of an intrinsic object.
        // The corresponding object must be an intrinsic that is intended to be used as the[[Prototype]] value of an object.
    
        // 2. Let proto be ? GetPrototypeFromConstructor(constructor, intrinsicDefaultProto).
        var proto = GetPrototypeFromConstructor(constructor, intrinsicDefaultProto);
    
        // 3. Return ObjectCreate(proto, internalSlotsList).
        // Polyfill.io - We do not pass internalSlotsList to Object.create because Object.create does not use the default ordinary object definitions specified in 9.1.
        var obj = Object.create(proto);
        for (var name in internalSlotsList) {
            if (Object.prototype.hasOwnProperty.call(internalSlotsList, name)) {
                Object.defineProperty(obj, name, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: internalSlotsList[name]
                });
            }
        }
        return obj;
    }
    
    // _ESAbstract.Construct
    /* global IsConstructor, OrdinaryCreateFromConstructor, Call */
    // 7.3.13. Construct ( F [ , argumentsList [ , newTarget ]] )
    function Construct(F /* [ , argumentsList [ , newTarget ]] */) { // eslint-disable-line no-unused-vars
        // 1. If newTarget is not present, set newTarget to F.
        var newTarget = arguments.length > 2 ? arguments[2] : F;
    
        // 2. If argumentsList is not present, set argumentsList to a new empty List.
        var argumentsList = arguments.length > 1 ? arguments[1] : [];
    
        // 3. Assert: IsConstructor(F) is true.
        if (!IsConstructor(F)) {
            throw new TypeError('F must be a constructor.');
        }
    
        // 4. Assert: IsConstructor(newTarget) is true.
        if (!IsConstructor(newTarget)) {
            throw new TypeError('newTarget must be a constructor.');
        }
    
        // 5. Return ? F.[[Construct]](argumentsList, newTarget).
        // Polyfill.io - If newTarget is the same as F, it is equivalent to new F(...argumentsList).
        if (newTarget === F) {
            return new (Function.prototype.bind.apply(F, [null].concat(argumentsList)))();
        } else {
            // Polyfill.io - This is mimicking section 9.2.2 step 5.a.
            var obj = OrdinaryCreateFromConstructor(newTarget, Object.prototype);
            return Call(F, obj, argumentsList);
        }
    }
    
    // _ESAbstract.ArraySpeciesCreate
    /* global IsArray, ArrayCreate, Get, Type, IsConstructor, Construct */
    // 9.4.2.3. ArraySpeciesCreate ( originalArray, length )
    function ArraySpeciesCreate(originalArray, length) { // eslint-disable-line no-unused-vars
        // 1. Assert: length is an integer Number ≥ 0.
        // 2. If length is -0, set length to +0.
        if (length === 0 && 1/length === -Infinity) {
            length = 0;
        }
    
        // 3. Let isArray be ? IsArray(originalArray).
        var isArray = IsArray(originalArray);
    
        // 4. If isArray is false, return ? ArrayCreate(length).
        if (isArray === false) {
            return ArrayCreate(length);
        }
    
        // 5. Let C be ? Get(originalArray, "constructor").
        var C = Get(originalArray, 'constructor');
    
        // Polyfill.io - We skip this section as not sure how to make a cross-realm normal Array, a same-realm Array.
        // 6. If IsConstructor(C) is true, then
        // if (IsConstructor(C)) {
            // a. Let thisRealm be the current Realm Record.
            // b. Let realmC be ? GetFunctionRealm(C).
            // c. If thisRealm and realmC are not the same Realm Record, then
                // i. If SameValue(C, realmC.[[Intrinsics]].[[%Array%]]) is true, set C to undefined.
        // }
        // 7. If Type(C) is Object, then
        if (Type(C) === 'object') {
            // a. Set C to ? Get(C, @@species).
            C = 'Symbol' in self && 'species' in self.Symbol ? Get(C, self.Symbol.species) : undefined;
            // b. If C is null, set C to undefined.
            if (C === null) {
                C = undefined;
            }
        }
        // 8. If C is undefined, return ? ArrayCreate(length).
        if (C === undefined) {
            return ArrayCreate(length);
        }
        // 9. If IsConstructor(C) is false, throw a TypeError exception.
        if (!IsConstructor(C)) {
            throw new TypeError('C must be a constructor');
        }
        // 10. Return ? Construct(C, « length »).
        return Construct(C, [length]);
    }
    if (!("filter"in Array.prototype
    )) {
    
    // Array.prototype.filter
    /* global CreateMethodProperty, ToObject, ToLength, Get, IsCallable, ArraySpeciesCreate, ToString, HasProperty, ToBoolean, Call, CreateDataPropertyOrThrow */
    // 22.1.3.7. Array.prototype.filter ( callbackfn [ , thisArg ] )
    CreateMethodProperty(Array.prototype, 'filter', function filter(callbackfn /* [ , thisArg ] */) {
        // 1. Let O be ? ToObject(this value).
        var O = ToObject(this);
        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = ToLength(Get(O, "length"));
        // 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
        if (IsCallable(callbackfn) === false) {
            throw new TypeError(callbackfn + ' is not a function');
        }
        // 4. If thisArg is present, let T be thisArg; else let T be undefined.
        var T = arguments.length > 1 ? arguments[1] : undefined;
        // 5. Let A be ? ArraySpeciesCreate(O, 0).
        var A = ArraySpeciesCreate(O, 0);
        // 6. Let k be 0.
        var k = 0;
        // 7. Let to be 0.
        var to = 0;
        // 8. Repeat, while k < len
        while (k < len) {
            // a. Let Pk be ! ToString(k).
            var Pk = ToString(k);
            // b. Let kPresent be ? HasProperty(O, Pk).
            var kPresent = HasProperty(O, Pk);
            // c. If kPresent is true, then
            if (kPresent) {
                // i. Let kValue be ? Get(O, Pk).
                var kValue = Get(O, Pk);
                // ii. Let selected be ToBoolean(? Call(callbackfn, T, « kValue, k, O »)).
                var selected = ToBoolean(Call(callbackfn, T, [kValue, k, O]));
                // iii. If selected is true, then
                if (selected) {
                    // 1. Perform ? CreateDataPropertyOrThrow(A, ! ToString(to), kValue)
                    CreateDataPropertyOrThrow(A, ToString(to), kValue);
                    // 2. Increase to by 1.
                    to = to + 1;
                }
    
            }
            // d. Increase k by 1.
            k = k + 1;
        }
        // 9. Return A.
        return A;
    });
    
    }
    
    if (!("map"in Array.prototype
    )) {
    
    // Array.prototype.map
    /* global ArraySpeciesCreate, Call, CreateDataPropertyOrThrow, CreateMethodProperty, Get, HasProperty, IsCallable, ToLength, ToObject, ToString */
    // 22.1.3.16. Array.prototype.map ( callbackfn [ , thisArg ] )
    CreateMethodProperty(Array.prototype, 'map', function map(callbackfn /* [ , thisArg ] */) {
        // 1. Let O be ? ToObject(this value).
        var O = ToObject(this);
        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = ToLength(Get(O, "length"));
        // 3. If IsCallable(callbackfn) is false, throw a TypeError exception.
        if (IsCallable(callbackfn) === false) {
            throw new TypeError(callbackfn + ' is not a function');
        }
        // 4. If thisArg is present, let T be thisArg; else let T be undefined.
        var T = arguments.length > 1 ? arguments[1] : undefined;
        // 5. Let A be ? ArraySpeciesCreate(O, len).
        var A = ArraySpeciesCreate(O, len);
        // 6. Let k be 0.
        var k = 0;
        // 7. Repeat, while k < len
        while (k < len) {
            // a. Let Pk be ! ToString(k).
            var Pk = ToString(k);
            // b. Let kPresent be ? HasProperty(O, Pk).
            var kPresent = HasProperty(O, Pk);
            // c. If kPresent is true, then
            if (kPresent) {
                // i. Let kValue be ? Get(O, Pk).
                var kValue = Get(O, Pk);
                // ii. Let mappedValue be ? Call(callbackfn, T, « kValue, k, O »).
                var mappedValue = Call(callbackfn, T, [kValue, k, O]);
                // iii. Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
                CreateDataPropertyOrThrow(A, Pk, mappedValue);
            }
            // d. Increase k by 1.
            k = k + 1;
        }
        // 8. Return A.
        return A;
    });
    
    }
    
    if (!("Symbol"in self&&0===self.Symbol.length
    )) {
    
    // Symbol
    // A modification of https://github.com/WebReflection/get-own-property-symbols
    // (C) Andrea Giammarchi - MIT Licensed
    
    /* global Type */
    (function (Object,  GOPS, global) {
        'use strict'; //so that ({}).toString.call(null) returns the correct [object Null] rather than [object Window]
    
        var supportsGetters = (function () {
            // supports getters
            try {
                var a = {};
                Object.defineProperty(a, "t", {
                    configurable: true,
                    enumerable: false,
                    get: function () {
                        return true;
                    },
                    set: undefined
                });
                return !!a.t;
            } catch (e) {
                return false;
            }
        }());
    
        var	setDescriptor;
        var id = 0;
        var random = '' + Math.random();
        var prefix = '__\x01symbol:';
        var prefixLength = prefix.length;
        var internalSymbol = '__\x01symbol@@' + random;
        var emptySymbolLookup = {};
        var DP = 'defineProperty';
        var DPies = 'defineProperties';
        var GOPN = 'getOwnPropertyNames';
        var GOPD = 'getOwnPropertyDescriptor';
        var PIE = 'propertyIsEnumerable';
        var ObjectProto = Object.prototype;
        var hOP = ObjectProto.hasOwnProperty;
        var pIE = ObjectProto[PIE];
        var toString = ObjectProto.toString;
        var concat = Array.prototype.concat;
        var cachedWindowNames = Object.getOwnPropertyNames ? Object.getOwnPropertyNames(self) : [];
        var nGOPN = Object[GOPN];
        var gOPN = function getOwnPropertyNames (obj) {
            if (toString.call(obj) === '[object Window]') {
                try {
                    return nGOPN(obj);
                } catch (e) {
                    // IE bug where layout engine calls userland gOPN for cross-domain `window` objects
                    return concat.call([], cachedWindowNames);
                }
            }
            return nGOPN(obj);
        };
        var gOPD = Object[GOPD];
        var objectCreate = Object.create;
        var objectKeys = Object.keys;
        var freeze = Object.freeze || Object;
        var objectDefineProperty = Object[DP];
        var $defineProperties = Object[DPies];
        var descriptor = gOPD(Object, GOPN);
        var addInternalIfNeeded = function (o, uid, enumerable) {
            if (!hOP.call(o, internalSymbol)) {
                try {
                    objectDefineProperty(o, internalSymbol, {
                        enumerable: false,
                        configurable: false,
                        writable: false,
                        value: {}
                    });
                } catch (e) {
                    o[internalSymbol] = {};
                }
            }
            o[internalSymbol]['@@' + uid] = enumerable;
        };
        var createWithSymbols = function (proto, descriptors) {
            var self = objectCreate(proto);
            gOPN(descriptors).forEach(function (key) {
                if (propertyIsEnumerable.call(descriptors, key)) {
                    $defineProperty(self, key, descriptors[key]);
                }
            });
            return self;
        };
        var copyAsNonEnumerable = function (descriptor) {
            var newDescriptor = objectCreate(descriptor);
            newDescriptor.enumerable = false;
            return newDescriptor;
        };
        var get = function get(){};
        var onlyNonSymbols = function (name) {
            return name != internalSymbol &&
                !hOP.call(source, name);
        };
        var onlySymbols = function (name) {
            return name != internalSymbol &&
                hOP.call(source, name);
        };
        var propertyIsEnumerable = function propertyIsEnumerable(key) {
            var uid = '' + key;
            return onlySymbols(uid) ? (
                hOP.call(this, uid) &&
                this[internalSymbol] && this[internalSymbol]['@@' + uid]
            ) : pIE.call(this, key);
        };
        var setAndGetSymbol = function (uid) {
            var descriptor = {
                enumerable: false,
                configurable: true,
                get: get,
                set: function (value) {
                setDescriptor(this, uid, {
                    enumerable: false,
                    configurable: true,
                    writable: true,
                    value: value
                });
                addInternalIfNeeded(this, uid, true);
                }
            };
            try {
                objectDefineProperty(ObjectProto, uid, descriptor);
            } catch (e) {
                ObjectProto[uid] = descriptor.value;
            }
            source[uid] = objectDefineProperty(
                Object(uid),
                'constructor',
                sourceConstructor
            );
            var description = gOPD(Symbol.prototype, 'description');
            if (description) {
                objectDefineProperty(
                    source[uid],
                    'description',
                    description
                );
            }
            return freeze(source[uid]);
        };
    
        var symbolDescription = function (s) {
            var sym = thisSymbolValue(s);
    
            // 3. Return sym.[[Description]].
            if (supportsInferredNames) {
                var name = getInferredName(sym);
                if (name !== "") {
                    return name.slice(1, -1); // name.slice('['.length, -']'.length);
                }
            }
    
            if (emptySymbolLookup[sym] !== undefined) {
                return emptySymbolLookup[sym];
            }
    
            var string = sym.toString();
            var randomStartIndex = string.lastIndexOf("0.");
            string = string.slice(10, randomStartIndex);
    
            if (string === "") {
                return undefined;
            }
            return string;
        };
    
        var Symbol = function Symbol() {
            var description = arguments[0];
            if (this instanceof Symbol) {
                throw new TypeError('Symbol is not a constructor');
            }
    
            var uid = prefix.concat(description || '', random, ++id);
    
            if (description !== undefined && (description === null || isNaN(description) || String(description) === "")) {
                emptySymbolLookup[uid] = String(description);
            }
    
            var that = setAndGetSymbol(uid);
    
            if (!supportsGetters) {
                Object.defineProperty(that, "description", {
                    configurable: true,
                    enumerable: false,
                    value: symbolDescription(that)
                });
            }
    
            return that;
        };
    
        var source = objectCreate(null);
        var sourceConstructor = {value: Symbol};
        var sourceMap = function (uid) {
            return source[uid];
            };
        var $defineProperty = function defineProperty(o, key, descriptor) {
            try {
                var uid = '' + key;
                if (onlySymbols(uid)) {
                    setDescriptor(o, uid, descriptor.enumerable ?
                        copyAsNonEnumerable(descriptor) : descriptor);
                    addInternalIfNeeded(o, uid, !!descriptor.enumerable);
                } else {
                    objectDefineProperty(o, key, descriptor);
                }
            } catch (e) { }
            return o;
        };
    
        var onlyInternalSymbols = function (obj) {
            return function (name) {
                return hOP.call(obj, internalSymbol) && hOP.call(obj[internalSymbol], '@@' + name);
            };
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
            return gOPN(o).filter(o === ObjectProto ? onlyInternalSymbols(o) : onlySymbols).map(sourceMap);
            }
        ;
    
        descriptor.value = $defineProperty;
        objectDefineProperty(Object, DP, descriptor);
    
        descriptor.value = $getOwnPropertySymbols;
        objectDefineProperty(Object, GOPS, descriptor);
    
        descriptor.value = function getOwnPropertyNames(o) {
            return gOPN(o).filter(onlyNonSymbols);
        };
        objectDefineProperty(Object, GOPN, descriptor);
    
        descriptor.value = function defineProperties(o, descriptors) {
            var symbols = $getOwnPropertySymbols(descriptors);
            if (symbols.length) {
            objectKeys(descriptors).concat(symbols).forEach(function (uid) {
                if (propertyIsEnumerable.call(descriptors, uid)) {
                $defineProperty(o, uid, descriptors[uid]);
                }
            });
            } else {
            $defineProperties(o, descriptors);
            }
            return o;
        };
        objectDefineProperty(Object, DPies, descriptor);
    
        descriptor.value = propertyIsEnumerable;
        objectDefineProperty(ObjectProto, PIE, descriptor);
    
        descriptor.value = Symbol;
        objectDefineProperty(global, 'Symbol', descriptor);
    
        // defining `Symbol.for(key)`
        descriptor.value = function (key) {
            var uid = prefix.concat(prefix, key, random);
            return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
        };
        objectDefineProperty(Symbol, 'for', descriptor);
    
        // defining `Symbol.keyFor(symbol)`
        descriptor.value = function (symbol) {
            if (onlyNonSymbols(symbol))
            throw new TypeError(symbol + ' is not a symbol');
            return hOP.call(source, symbol) ?
            symbol.slice(prefixLength * 2, -random.length) :
            void 0
            ;
        };
        objectDefineProperty(Symbol, 'keyFor', descriptor);
    
        descriptor.value = function getOwnPropertyDescriptor(o, key) {
            var descriptor = gOPD(o, key);
            if (descriptor && onlySymbols(key)) {
            descriptor.enumerable = propertyIsEnumerable.call(o, key);
            }
            return descriptor;
        };
        objectDefineProperty(Object, GOPD, descriptor);
    
        descriptor.value = function create(proto, descriptors) {
            return arguments.length === 1 || typeof descriptors === "undefined" ?
            objectCreate(proto) :
            createWithSymbols(proto, descriptors);
        };
    
        objectDefineProperty(Object, 'create', descriptor);
    
        var strictModeSupported = (function(){ 'use strict'; return this; }).call(null) === null;
        if (strictModeSupported) {
            descriptor.value = function () {
                var str = toString.call(this);
                return (str === '[object String]' && onlySymbols(this)) ? '[object Symbol]' : str;
            };
        } else {
            descriptor.value = function () {
                // https://github.com/Financial-Times/polyfill-library/issues/164#issuecomment-486965300
                // Polyfill.io this code is here for the situation where a browser does not
                // support strict mode and is executing `Object.prototype.toString.call(null)`.
                // This code ensures that we return the correct result in that situation however,
                // this code also introduces a bug where it will return the incorrect result for
                // `Object.prototype.toString.call(window)`. We can't have the correct result for
                // both `window` and `null`, so we have opted for `null` as we believe this is the more
                // common situation.
                if (this === window) {
                    return '[object Null]';
                }
    
                var str = toString.call(this);
                return (str === '[object String]' && onlySymbols(this)) ? '[object Symbol]' : str;
            };
        }
        objectDefineProperty(ObjectProto, 'toString', descriptor);
    
        setDescriptor = function (o, key, descriptor) {
            var protoDescriptor = gOPD(ObjectProto, key);
            delete ObjectProto[key];
            objectDefineProperty(o, key, descriptor);
            if (o !== ObjectProto) {
                objectDefineProperty(ObjectProto, key, protoDescriptor);
            }
        };
    
        // The abstract operation thisSymbolValue(value) performs the following steps:
        function thisSymbolValue(value) {
            // 1. If Type(value) is Symbol, return value.
            if (Type(value) === "symbol") {
                return value;
            }
            // 2. If Type(value) is Object and value has a [[SymbolData]] internal slot, then
            // a. Let s be value.[[SymbolData]].
            // b. Assert: Type(s) is Symbol.
            // c. Return s.
            // 3. Throw a TypeError exception.
            throw TypeError(value + " is not a symbol");
        }
    
        // Symbol.prototype.description
        if (function () {
            // supports getters
            try {
                var a = {};
                Object.defineProperty(a, "t", {
                    configurable: true,
                    enumerable: false,
                    get: function() {
                        return true;
                    },
                    set: undefined
                });
                return !!a.t;
            } catch (e) {
                return false;
            }
        }()) {
            var getInferredName;
            try {
                // eslint-disable-next-line no-new-func
                getInferredName = Function("s", "var v = s.valueOf(); return { [v]() {} }[v].name;");
                // eslint-disable-next-line no-empty
            } catch (e) { }
    
            var inferred = function () { };
            var supportsInferredNames = getInferredName && inferred.name === "inferred" ? getInferredName : null;
    
    
            // 19.4.3.2 get Symbol.prototype.description
            Object.defineProperty(global.Symbol.prototype, "description", {
                configurable: true,
                enumerable: false,
                get: function () {
                    // 1. Let s be the this value.
                    var s = this;
                    return symbolDescription(s);
                }
            });
        }
    
    }(Object, 'getOwnPropertySymbols', self));
    
    }
    
    if (!("Symbol"in self&&"iterator"in self.Symbol
    )) {
    
    // Symbol.iterator
    Object.defineProperty(self.Symbol, 'iterator', { value: self.Symbol('iterator') });
    
    }
    
    
    // _ESAbstract.GetIterator
    /* global GetMethod, Symbol, Call, Type, GetV */
    // 7.4.1. GetIterator ( obj [ , method ] )
    // The abstract operation GetIterator with argument obj and optional argument method performs the following steps:
    function GetIterator(obj /*, method */) { // eslint-disable-line no-unused-vars
        // 1. If method is not present, then
            // a. Set method to ? GetMethod(obj, @@iterator).
        var method = arguments.length > 1 ? arguments[1] : GetMethod(obj, Symbol.iterator);
        // 2. Let iterator be ? Call(method, obj).
        var iterator = Call(method, obj);
        // 3. If Type(iterator) is not Object, throw a TypeError exception.
        if (Type(iterator) !== 'object') {
            throw new TypeError('bad iterator');
        }
        // 4. Let nextMethod be ? GetV(iterator, "next").
        var nextMethod = GetV(iterator, "next");
        // 5. Let iteratorRecord be Record {[[Iterator]]: iterator, [[NextMethod]]: nextMethod, [[Done]]: false}.
        var iteratorRecord = Object.create(null);
        iteratorRecord['[[Iterator]]'] = iterator;
        iteratorRecord['[[NextMethod]]'] = nextMethod;
        iteratorRecord['[[Done]]'] = false;
        // 6. Return iteratorRecord.
        return iteratorRecord;
    }
    if (!("Symbol"in self&&"species"in self.Symbol
    )) {
    
    // Symbol.species
    /* global Symbol */
    Object.defineProperty(Symbol, 'species', { value: Symbol('species') });
    
    }
    
    if (!("Map"in self&&function(t){try{var n=new t.Map([[1,1],[2,2]])
    return 0===t.Map.length&&2===n.size&&"Symbol"in t&&"iterator"in t.Symbol&&"function"==typeof n[t.Symbol.iterator]}catch(e){return!1}}(self)
    )) {
    
    // Map
    /* global CreateIterResultObject, CreateMethodProperty, GetIterator, IsCallable, IteratorClose, IteratorStep, IteratorValue, OrdinaryCreateFromConstructor, SameValueZero, Type, Symbol */
    (function (global) {
        var supportsGetters = (function () {
            try {
                var a = {};
                Object.defineProperty(a, 't', {
                    configurable: true,
                    enumerable: false,
                    get: function () {
                        return true;
                    },
                    set: undefined
                });
                return !!a.t;
            } catch (e) {
                return false;
            }
        }());
    
        // Need an internal counter to assign unique IDs to a key map
        var _uniqueHashId = 0;
        // Create a unique key name for storing meta data on functions and objects to enable lookups in hash table
        var _metaKey = Symbol('meta_' + ((Math.random() * 100000000) + '').replace('.', ''));
    
        /**
         * hashKey()
         * Function that given a key of `any` type, returns a string key value to enable hash map optimization for accessing Map data structure
         * @param {string|integer|function|object} recordKey - Record key to normalize to string accessor for hash map
         * @returns {string|false} - Returns a hashed string value or false if non extensible object key
         */
        var hashKey = function(recordKey) {
            // Check to see if we are dealing with object or function type.
            if (typeof recordKey === 'object' ? recordKey !== null : typeof recordKey === 'function') {
                // Check to see if we are dealing with a non extensible object
                if (!Object.isExtensible(recordKey)) {
                    // Return `false`
                    return false;
                }
                if (!Object.prototype.hasOwnProperty.call(recordKey, _metaKey)) {
                    var uniqueHashKey = typeof(recordKey)+'-'+(++_uniqueHashId);
                    Object.defineProperty(recordKey, _metaKey, {
                        configurable: false,
                        enumerable: false,
                        writable: false,
                        value: uniqueHashKey
                    });
                }
                // Return previously defined hashed key
                return recordKey[_metaKey];
            }
            // If this is just a primitive, we can cast it to a string and return it
            return ''+recordKey;
        };
    
        /**
         * getRecordIndex()
         * Function that given a Map and a key of `any` type, returns an index number that coorelates with a record found in `this._keys[index]` and `this._values[index]`
         * @param {Map} map - Map structure
         * @param {string|number|function|object} recordKey - Record key to normalize to string accessor for hash map
         * @returns {number|false} - Returns either a index to access map._keys and map._values, or false if not found
         */
        var getRecordIndex = function(map, recordKey) {
            var hashedKey = hashKey(recordKey); // Casts key to unique string (unless already string or number)
            if (hashedKey === false) {
                // We have to iterate through our Map structure because `recordKey` is non-primitive and not extensible
                return getRecordIndexSlow(map, recordKey);
            }
            var recordIndex = map._table[hashedKey]; // O(1) access to record
            return recordIndex !== undefined ? recordIndex : false;
        };
    
        /**
         * getRecordIndexSlow()
         * Alternative (and slower) function to `getRecordIndex()`.  Necessary for looking up non-extensible object keys.
         * @param {Map} map - Map structure
         * @param {string|number|function|object} recordKey - Record key to normalize to string accessor for hash map
         * @returns {number|false} - Returns either a index to access map._keys and map._values, or false if not found
         */
        var getRecordIndexSlow = function(map, recordKey) {
            // We have to iterate through our Map structure because `recordKey` is non-primitive and not extensible
            for (var i = 0; i < map._keys.length; i++) {
                var _recordKey = map._keys[i];
                if (_recordKey !== undefMarker && SameValueZero(_recordKey, recordKey)) {
                    return i;
                }
            }
            return false;
        };
    
        /**
         * setHashIndex()
         * Function that given a map, key of `any` type, and a value, creates a new entry in Map hash table
         * @param {Map} map
         * @param {string|number|function|object} recordKey - Key to translate into normalized key for hash map
         * @param {number|bool} recordIndex - new record index for the hashedKey or `false` to delete the record index for the hashedKey
         * @returns {bool} - indicates success of operation
         */
        var setHashIndex = function(map, recordKey, recordIndex) {
            var hashedKey = hashKey(recordKey);
            if (hashedKey === false) {
                // If hashed key is false, the recordKey is an object which is not extensible.
                // That indicates we cannot use the hash map for it, so this operation becomes no-op.
                return false;
            }
            if (recordIndex === false) {
                delete map._table[hashedKey];
            } else {
                map._table[hashedKey] = recordIndex;
            }
            return true;
        };
    
        // Deleted map items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
        var undefMarker = Symbol('undef');
        // 23.1.1.1 Map ( [ iterable ] )
        var Map = function Map(/* iterable */) {
            // 1. If NewTarget is undefined, throw a TypeError exception.
            if (!(this instanceof Map)) {
                throw new TypeError('Constructor Map requires "new"');
            }
            // 2. Let map be ? OrdinaryCreateFromConstructor(NewTarget, "%MapPrototype%", « [[MapData]] »).
            var map = OrdinaryCreateFromConstructor(this, Map.prototype, {
                _table: {}, // O(1) access table for retrieving records
                _keys: [],
                _values: [],
                _size: 0,
                _es6Map: true
            });
    
            // 3. Set map.[[MapData]] to a new empty List.
            // Polyfill.io - This step was done as part of step two.
    
            // Some old engines do not support ES5 getters/setters.  Since Map only requires these for the size property, we can fall back to setting the size property statically each time the size of the map changes.
            if (!supportsGetters) {
                Object.defineProperty(map, 'size', {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: 0
                });
            }
    
            // 4. If iterable is not present, let iterable be undefined.
            var iterable = arguments.length > 0 ? arguments[0] : undefined;
    
            // 5. If iterable is either undefined or null, return map.
            if (iterable === null || iterable === undefined) {
                return map;
            }
    
            // 6. Let adder be ? Get(map, "set").
            var adder = map.set;
    
            // 7. If IsCallable(adder) is false, throw a TypeError exception.
            if (!IsCallable(adder)) {
                throw new TypeError("Map.prototype.set is not a function");
            }
    
            // 8. Let iteratorRecord be ? GetIterator(iterable).
            try {
                var iteratorRecord = GetIterator(iterable);
                // 9. Repeat,
                // eslint-disable-next-line no-constant-condition
                while (true) {
                    // a. Let next be ? IteratorStep(iteratorRecord).
                    var next = IteratorStep(iteratorRecord);
                    // b. If next is false, return map.
                    if (next === false) {
                        return map;
                    }
                    // c. Let nextItem be ? IteratorValue(next).
                    var nextItem = IteratorValue(next);
                    // d. If Type(nextItem) is not Object, then
                    if (Type(nextItem) !== 'object') {
                        // i. Let error be Completion{[[Type]]: throw, [[Value]]: a newly created TypeError object, [[Target]]: empty}.
                        try {
                            throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
                        } catch (error) {
                            // ii. Return ? IteratorClose(iteratorRecord, error).
                            return IteratorClose(iteratorRecord, error);
                        }
                    }
                    try {
                        // Polyfill.io - The try catch accounts for steps: f, h, and j.
    
                        // e. Let k be Get(nextItem, "0").
                        var k = nextItem[0];
                        // f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
                        // g. Let v be Get(nextItem, "1").
                        var v = nextItem[1];
                        // h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
                        // i. Let status be Call(adder, map, « k.[[Value]], v.[[Value]] »).
                        adder.call(map, k, v);
                    } catch (e) {
                        // j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
                        return IteratorClose(iteratorRecord, e);
                    }
                }
            } catch (e) {
                // Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
                if (Array.isArray(iterable) ||
                    Object.prototype.toString.call(iterable) === '[object Arguments]' ||
                    // IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
                    (!!iterable.callee)) {
                    var index;
                    var length = iterable.length;
                    for (index = 0; index < length; index++) {
                        adder.call(map, iterable[index][0], iterable[index][1]);
                    }
                }
            }
            return map;
        };
    
        // 23.1.2.1. Map.prototype
        // The initial value of Map.prototype is the intrinsic object %MapPrototype%.
        // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
        Object.defineProperty(Map, 'prototype', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: {}
        });
    
        // 23.1.2.2 get Map [ @@species ]
        if (supportsGetters) {
            Object.defineProperty(Map, Symbol.species, {
                configurable: true,
                enumerable: false,
                get: function () {
                    // 1. Return the this value.
                    return this;
                },
                set: undefined
            });
        } else {
            CreateMethodProperty(Map, Symbol.species, Map);
        }
    
        // 23.1.3.1 Map.prototype.clear ( )
        CreateMethodProperty(Map.prototype, 'clear', function clear() {
                // 1. Let M be the this value.
                var M = this;
                // 2. If Type(M) is not Object, throw a TypeError exception.
                if (Type(M) !== 'object') {
                    throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
                }
                // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
                if (M._es6Map !== true) {
                    throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
                }
                // 4. Let entries be the List that is M.[[MapData]].
                var entries = M._keys;
                // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
                for (var i = 0; i < entries.length; i++) {
                    // 5.a. Set p.[[Key]] to empty.
                    M._keys[i] = undefMarker;
                    // 5.b. Set p.[[Value]] to empty.
                    M._values[i] = undefMarker;
                }
                this._size = 0;
                if (!supportsGetters) {
                    this.size = this._size;
                }
                // 5a. Clear lookup table
                this._table = {};
                // 6. Return undefined.
                return undefined;
            }
        );
    
        // 23.1.3.2. Map.prototype.constructor
        CreateMethodProperty(Map.prototype, 'constructor', Map);
    
        // 23.1.3.3. Map.prototype.delete ( key )
        CreateMethodProperty(Map.prototype, 'delete', function (key) {
                // 1. Let M be the this value.
                var M = this;
                // 2. If Type(M) is not Object, throw a TypeError exception.
                if (Type(M) !== 'object') {
                    throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
                }
                // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
                if (M._es6Map !== true) {
                    throw new TypeError('Method Map.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
                }
                // 4. Let entries be the List that is M.[[MapData]].
                // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
                    // 5a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, then
                        // i. Set p.[[Key]] to empty.
                        // ii. Set p.[[Value]] to empty.
                        // ii-a. Remove key from lookup table
                        // iii. Return true.
                // 6. Return false.
    
                // Implement steps 4-6 with a more optimal algo
    
                // Steps 4-5: Access record
                var recordIndex = getRecordIndex(M, key); // O(1) access to record index
    
                if (recordIndex !== false) {
                    // Get record's `key` (could be `any` type);
                    var recordKey = M._keys[recordIndex];
                    // 5a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, then
                    if (recordKey !== undefMarker && SameValueZero(recordKey, key)) {
                        // i. Set p.[[Key]] to empty.
                        this._keys[recordIndex] = undefMarker;
                        // ii. Set p.[[Value]] to empty.
                        this._values[recordIndex] = undefMarker;
                        this._size = --this._size;
                        if (!supportsGetters) {
                            this.size = this._size;
                        }
                        // iia. Remove key from lookup table
                        setHashIndex(this, key, false);
                        // iii. Return true.
                        return true;
                    }
                }
    
                // 6. Return false.
                return false;
            }
        );
    
        // 23.1.3.4. Map.prototype.entries ( )
        CreateMethodProperty(Map.prototype, 'entries', function entries () {
                // 1. Let M be the this value.
                var M = this;
                // 2. Return ? CreateMapIterator(M, "key+value").
                return CreateMapIterator(M, 'key+value');
            }
        );
    
        // 23.1.3.5. Map.prototype.forEach ( callbackfn [ , thisArg ] )
        CreateMethodProperty(Map.prototype, 'forEach', function (callbackFn) {
                // 1. Let M be the this value.
                var M = this;
                // 2. If Type(M) is not Object, throw a TypeError exception.
                if (Type(M) !== 'object') {
                    throw new TypeError('Method Map.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(M));
                }
                // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
                if (M._es6Map !== true) {
                    throw new TypeError('Method Map.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(M));
                }
                // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
                if (!IsCallable(callbackFn)) {
                    throw new TypeError(Object.prototype.toString.call(callbackFn) + ' is not a function.');
                }
                // 5. If thisArg is present, let T be thisArg; else let T be undefined.
                if (arguments[1]) {
                    var T = arguments[1];
                }
                // 6. Let entries be the List that is M.[[MapData]].
                var entries = M._keys;
                // 7. For each Record {[[Key]], [[Value]]} e that is an element of entries, in original key insertion order, do
                for (var i = 0; i < entries.length; i++) {
                    // a. If e.[[Key]] is not empty, then
                    if (M._keys[i] !== undefMarker && M._values[i] !== undefMarker ) {
                        // i. Perform ? Call(callbackfn, T, « e.[[Value]], e.[[Key]], M »).
                        callbackFn.call(T, M._values[i], M._keys[i], M);
                    }
                }
                // 8. Return undefined.
                return undefined;
            }
        );
    
        // 23.1.3.6. Map.prototype.get ( key )
        CreateMethodProperty(Map.prototype, 'get', function get(key) {
                // 1. Let M be the this value.
                var M = this;
                // 2. If Type(M) is not Object, throw a TypeError exception.
                if (Type(M) !== 'object') {
                    throw new TypeError('Method Map.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
                }
                // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
                if (M._es6Map !== true) {
                    throw new TypeError('Method Map.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
                }
                // 4. Let entries be the List that is M.[[MapData]].
                // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
                    // a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, return p.[[Value]].
                // 6. Return undefined.
    
                // Implement steps 4-6 with a more optimal algo
                var recordIndex = getRecordIndex(M, key); // O(1) access to record index
                if (recordIndex !== false) {
                    var recordKey = M._keys[recordIndex];
                    if (recordKey !== undefMarker && SameValueZero(recordKey, key)) {
                        return M._values[recordIndex];
                    }
                }
    
                return undefined;
            });
    
        // 23.1.3.7. Map.prototype.has ( key )
        CreateMethodProperty(Map.prototype, 'has', function has (key) {
                // 1. Let M be the this value.
                var M = this;
                // 2. If Type(M) is not Object, throw a TypeError exception.
                if (typeof M !== 'object') {
                    throw new TypeError('Method Map.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
                }
                // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
                if (M._es6Map !== true) {
                    throw new TypeError('Method Map.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
                }
                // 4. Let entries be the List that is M.[[MapData]].
                // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
                    // a. If p.[[Key]] is not empty and SameValueZero(p.[[Key]], key) is true, return true.
                // 6. Return false.
    
                // Implement steps 4-6 with a more optimal algo
                var recordIndex = getRecordIndex(M, key); // O(1) access to record index
                if (recordIndex !== false) {
                    var recordKey = M._keys[recordIndex];
                    if (recordKey !== undefMarker && SameValueZero(recordKey, key)) {
                        return true;
                    }
                }
    
                return false;
            });
    
        // 23.1.3.8. Map.prototype.keys ( )
        CreateMethodProperty(Map.prototype, 'keys', function keys () {
                // 1. Let M be the this value.
                var M = this;
                // 2. Return ? CreateMapIterator(M, "key").
                return CreateMapIterator(M, "key");
            });
    
        // 23.1.3.9. Map.prototype.set ( key, value )
        CreateMethodProperty(Map.prototype, 'set', function set(key, value) {
                // 1. Let M be the this value.
                var M = this;
                // 2. If Type(M) is not Object, throw a TypeError exception.
                if (Type(M) !== 'object') {
                    throw new TypeError('Method Map.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
                }
                // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
                if (M._es6Map !== true) {
                    throw new TypeError('Method Map.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
                }
                // 4. Let entries be the List that is M.[[MapData]].
                // 5. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
                // 6. If key is -0, let key be +0.
                // 7. Let p be the Record {[[Key]]: key, [[Value]]: value}.
                // 8. Append p as the last element of entries.
                // 9. Return M.
    
                // Strictly following the above steps 4-9 will lead to an inefficient algorithm.
                // Step 8 also doesn't seem to be required if an entry already exists
                var recordIndex = getRecordIndex(M, key); // O(1) access to record index
                if (recordIndex !== false) {
                    // update path
                    M._values[recordIndex] = value;
                } else {
                    // eslint-disable-next-line no-compare-neg-zero
                    if (key === -0) {
                        key = 0;
                    }
                    var p = {
                        '[[Key]]': key,
                        '[[Value]]': value
                    };
                    M._keys.push(p['[[Key]]']);
                    M._values.push(p['[[Value]]']);
                    setHashIndex(M, key, M._keys.length - 1); // update lookup table
                    ++M._size;
                    if (!supportsGetters) {
                        M.size = M._size;
                    }
                }
                return M;
            });
    
        // 23.1.3.10. get Map.prototype.size
        if (supportsGetters) {
            Object.defineProperty(Map.prototype, 'size', {
                configurable: true,
                enumerable: false,
                get: function () {
                    // 1. Let M be the this value.
                    var M = this;
                    // 2. If Type(M) is not Object, throw a TypeError exception.
                    if (Type(M) !== 'object') {
                        throw new TypeError('Method Map.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(M));
                    }
                    // 3. If M does not have a [[MapData]] internal slot, throw a TypeError exception.
                    if (M._es6Map !== true) {
                        throw new TypeError('Method Map.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(M));
                    }
                    // 4. Let entries be the List that is M.[[MapData]].
                    // 5. Let count be 0.
                    // 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
                        // 6a. If p.[[Key]] is not empty, set count to count+1.
                    // 7. Return count.
    
                    // Implement 4-7 more efficently by returning pre-computed property
                    return this._size;
                },
                set: undefined
            });
        }
    
        // 23.1.3.11. Map.prototype.values ( )
        CreateMethodProperty(Map.prototype, 'values', function values () {
                // 1. Let M be the this value.
                var M = this;
                // 2. Return ? CreateMapIterator(M, "value").
                return CreateMapIterator(M, 'value');
            }
        );
    
        // 23.1.3.12. Map.prototype [ @@iterator ] ( )
        // The initial value of the @@iterator property is the same function object as the initial value of the entries property.
        CreateMethodProperty(Map.prototype, Symbol.iterator, Map.prototype.entries);
    
        // 23.1.3.13. Map.prototype [ @@toStringTag ]
        // The initial value of the @@toStringTag property is the String value "Map".
        // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
    
        // Polyfill.io - Safari 8 implements Map.name but as a non-configurable property, which means it would throw an error if we try and configure it here.
        if (!('name' in Map)) {
            // 19.2.4.2 name
            Object.defineProperty(Map, 'name', {
                configurable: true,
                enumerable: false,
                writable: false,
                value: 'Map'
            });
        }
    
        // 23.1.5.1. CreateMapIterator ( map, kind )
        function CreateMapIterator(map, kind) {
            // 1. If Type(map) is not Object, throw a TypeError exception.
            if (Type(map) !== 'object') {
                throw new TypeError('createMapIterator called on incompatible receiver ' + Object.prototype.toString.call(map));
            }
            // 2. If map does not have a [[MapData]] internal slot, throw a TypeError exception.
            if (map._es6Map !== true) {
                throw new TypeError('createMapIterator called on incompatible receiver ' + Object.prototype.toString.call(map));
            }
            // 3. Let iterator be ObjectCreate(%MapIteratorPrototype%, « [[Map]], [[MapNextIndex]], [[MapIterationKind]] »).
            var iterator = Object.create(MapIteratorPrototype);
            // 4. Set iterator.[[Map]] to map.
            Object.defineProperty(iterator, '[[Map]]', {
                configurable: true,
                enumerable: false,
                writable: true,
                value: map
            });
            // 5. Set iterator.[[MapNextIndex]] to 0.
            Object.defineProperty(iterator, '[[MapNextIndex]]', {
                configurable: true,
                enumerable: false,
                writable: true,
                value: 0
            });
            // 6. Set iterator.[[MapIterationKind]] to kind.
            Object.defineProperty(iterator, '[[MapIterationKind]]', {
                configurable: true,
                enumerable: false,
                writable: true,
                value: kind
            });
            // 7. Return iterator.
            return iterator;
        }
    
        // 23.1.5.2. The %MapIteratorPrototype% Object
        var MapIteratorPrototype = {};
        // Polyfill.io - We use this as a quick way to check if an object is a Map Iterator instance.
        Object.defineProperty(MapIteratorPrototype, 'isMapIterator', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: true
        });
    
        // 23.1.5.2.1. %MapIteratorPrototype%.next ( )
        CreateMethodProperty(MapIteratorPrototype, 'next', function next() {
                // 1. Let O be the this value.
                var O = this;
                // 2. If Type(O) is not Object, throw a TypeError exception.
                if (Type(O) !== 'object') {
                    throw new TypeError('Method %MapIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
                }
                // 3. If O does not have all of the internal slots of a Map Iterator Instance (23.1.5.3), throw a TypeError exception.
                if (!O.isMapIterator) {
                    throw new TypeError('Method %MapIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
                }
                // 4. Let m be O.[[Map]].
                var m = O['[[Map]]'];
                // 5. Let index be O.[[MapNextIndex]].
                var index = O['[[MapNextIndex]]'];
                // 6. Let itemKind be O.[[MapIterationKind]].
                var itemKind = O['[[MapIterationKind]]'];
                // 7. If m is undefined, return CreateIterResultObject(undefined, true).
                if (m === undefined) {
                    return CreateIterResultObject(undefined, true);
                }
                // 8. Assert: m has a [[MapData]] internal slot.
                if (!m._es6Map) {
                    throw new Error(Object.prototype.toString.call(m) + ' has a [[MapData]] internal slot.');
                }
                // 9. Let entries be the List that is m.[[MapData]].
                var entries = m._keys;
                // 10. Let numEntries be the number of elements of entries.
                var numEntries = entries.length;
                // 11. NOTE: numEntries must be redetermined each time this method is evaluated.
                // 12. Repeat, while index is less than numEntries,
                while (index < numEntries) {
                    // a. Let e be the Record {[[Key]], [[Value]]} that is the value of entries[index].
                    var e = Object.create(null);
                    e['[[Key]]'] = m._keys[index];
                    e['[[Value]]'] = m._values[index];
                    // b. Set index to index+1.
                    index = index + 1;
                    // c. Set O.[[MapNextIndex]] to index.
                    O['[[MapNextIndex]]'] = index;
                    // d. If e.[[Key]] is not empty, then
                    if (e['[[Key]]'] !== undefMarker) {
                        // i. If itemKind is "key", let result be e.[[Key]].
                        if (itemKind === 'key') {
                            var result = e['[[Key]]'];
                            // ii. Else if itemKind is "value", let result be e.[[Value]].
                        } else if (itemKind === 'value') {
                            result = e['[[Value]]'];
                            // iii. Else,
                        } else {
                            // 1. Assert: itemKind is "key+value".
                            if (itemKind !== 'key+value') {
                                throw new Error();
                            }
                            // 2. Let result be CreateArrayFromList(« e.[[Key]], e.[[Value]] »).
                            result = [
                                e['[[Key]]'],
                                e['[[Value]]']
                            ];
                        }
                        // iv. Return CreateIterResultObject(result, false).
                        return CreateIterResultObject(result, false);
                    }
                }
                // 13. Set O.[[Map]] to undefined.
                O['[[Map]]'] = undefined;
                // 14. Return CreateIterResultObject(undefined, true).
                return CreateIterResultObject(undefined, true);
            }
        );
    
        // 23.1.5.2.2 %MapIteratorPrototype% [ @@toStringTag ]
        // The initial value of the @@toStringTag property is the String value "Map Iterator".
        // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
    
        CreateMethodProperty(MapIteratorPrototype, Symbol.iterator, function iterator() {
                return this;
            }
        );
    
        // Export the object
        try {
            CreateMethodProperty(global, 'Map', Map);
        } catch (e) {
            // IE8 throws an error here if we set enumerable to false.
            // More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
            global.Map = Map;
        }
    }(self));
    
    }
    
    if (!("Set"in self&&function(){try{var e=new self.Set([1,2])
    return 0===self.Set.length&&2===e.size&&"Symbol"in self&&"iterator"in self.Symbol&&"function"==typeof e[self.Symbol.iterator]}catch(t){return!1}}()
    )) {
    
    // Set
    /* global CreateIterResultObject, CreateMethodProperty, GetIterator, IsCallable, IteratorClose, IteratorStep, IteratorValue, OrdinaryCreateFromConstructor, SameValueZero, Symbol */
    (function (global) {
        var supportsGetters = (function () {
            try {
                var a = {};
                Object.defineProperty(a, 't', {
                    configurable: true,
                    enumerable: false,
                    get: function () {
                        return true;
                    },
                    set: undefined
                });
                return !!a.t;
            } catch (e) {
                return false;
            }
        }());
    
        // Deleted set items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
        var undefMarker = Symbol('undef');
        // 23.2.1.1. Set ( [ iterable ] )
        var Set = function Set(/* iterable */) {
            // 1. If NewTarget is undefined, throw a TypeError exception.
            if (!(this instanceof Set)) {
                throw new TypeError('Constructor Set requires "new"');
            }
            // 2. Let set be ? OrdinaryCreateFromConstructor(NewTarget, "%SetPrototype%", « [[SetData]] »).
            var set = OrdinaryCreateFromConstructor(this, Set.prototype, {
                _values: [],
                _size: 0,
                _es6Set: true
            });
    
            // 3. Set set.[[SetData]] to a new empty List.
            // Polyfill.io - This step was done as part of step two.
    
            // Some old engines do not support ES5 getters/setters.  Since Set only requires these for the size property, we can fall back to setting the size property statically each time the size of the set changes.
            if (!supportsGetters) {
                Object.defineProperty(set, 'size', {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: 0
                });
            }
    
            // 4. If iterable is not present, let iterable be undefined.
            var iterable = arguments.length > 0 ? arguments[0] : undefined;
    
            // 5. If iterable is either undefined or null, return set.
            if (iterable === null || iterable === undefined) {
                return set;
            }
    
            // 6. Let adder be ? Get(set, "add").
            var adder = set.add;
            // 7. If IsCallable(adder) is false, throw a TypeError exception.
            if (!IsCallable(adder)) {
                throw new TypeError("Set.prototype.add is not a function");
            }
    
            try {
                // 8. Let iteratorRecord be ? GetIterator(iterable).
                var iteratorRecord = GetIterator(iterable);
                // 9. Repeat,
                // eslint-disable-next-line no-constant-condition
                while (true) {
                    // a. Let next be ? IteratorStep(iteratorRecord).
                    var next = IteratorStep(iteratorRecord);
                    // b. If next is false, return set.
                    if (next === false) {
                        return set;
                    }
                    // c. Let nextValue be ? IteratorValue(next).
                    var nextValue = IteratorValue(next);
                    // d. Let status be Call(adder, set, « nextValue.[[Value]] »).
                    try {
                        adder.call(set, nextValue);
                    } catch (e) {
                        // e. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
                        return IteratorClose(iteratorRecord, e);
                    }
                }
            } catch (e) {
                // Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
                if (Array.isArray(iterable) ||
                    Object.prototype.toString.call(iterable) === '[object Arguments]' ||
                    // IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
                    (!!iterable.callee)) {
                    var index;
                    var length = iterable.length;
                    for (index = 0; index < length; index++) {
                        adder.call(set, iterable[index]);
                    }
                } else {
                    throw (e);
                }
            }
            return set;
        };
    
        // 23.2.2.1. Set.prototype
        // The initial value of Set.prototype is the intrinsic %SetPrototype% object.
        // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
        Object.defineProperty(Set, 'prototype', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: {}
        });
    
        // 23.2.2.2 get Set [ @@species ]
        if (supportsGetters) {
            Object.defineProperty(Set, Symbol.species, {
                configurable: true,
                enumerable: false,
                get: function () {
                    // 1. Return the this value.
                    return this;
                },
                set: undefined
            });
        } else {
            CreateMethodProperty(Set, Symbol.species, Set);
        }
    
        // 23.2.3.1. Set.prototype.add ( value )
        CreateMethodProperty(Set.prototype, 'add', function add(value) {
                // 1. Let S be the this value.
                var S = this;
                // 2. If Type(S) is not Object, throw a TypeError exception.
                if (typeof S !== 'object') {
                    throw new TypeError('Method Set.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(S));
                }
                // 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
                if (S._es6Set !== true) {
                    throw new TypeError('Method Set.prototype.add called on incompatible receiver ' + Object.prototype.toString.call(S));
                }
                // 4. Let entries be the List that is S.[[SetData]].
                var entries = S._values;
                // 5. For each e that is an element of entries, do
                for (var i = 0; i < entries.length; i++) {
                    var e = entries[i];
                    // a. If e is not empty and SameValueZero(e, value) is true, then
                    if (e !== undefMarker && SameValueZero(e, value)) {
                        // i. Return S.
                        return S;
                    }
                }
                // 6. If value is -0, let value be +0.
                if (value === 0 && 1/value === -Infinity) {
                    value = 0;
                }
                // 7. Append value as the last element of entries.
                S._values.push(value);
    
                this._size = ++this._size;
                if (!supportsGetters) {
                    this.size = this._size;
                }
                // 8. Return S.
                return S;
            });
    
        // 23.2.3.2. Set.prototype.clear ( )
        CreateMethodProperty(Set.prototype, 'clear', function clear() {
                // 1. Let S be the this value.
                var S = this;
                // 2. If Type(S) is not Object, throw a TypeError exception.
                if (typeof S !== 'object') {
                    throw new TypeError('Method Set.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(S));
                }
                // 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
                if (S._es6Set !== true) {
                    throw new TypeError('Method Set.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(S));
                }
                // 4. Let entries be the List that is S.[[SetData]].
                var entries = S._values;
                // 5. For each e that is an element of entries, do
                for (var i = 0; i < entries.length; i++) {
                    // a. Replace the element of entries whose value is e with an element whose value is empty.
                    entries[i] = undefMarker;
                }
                this._size = 0;
                if (!supportsGetters) {
                    this.size = this._size;
                }
                // 6. Return undefined.
                return undefined;
            });
    
        // 23.2.3.3. Set.prototype.constructor
        CreateMethodProperty(Set.prototype, 'constructor', Set);
    
        // 23.2.3.4. Set.prototype.delete ( value )
        CreateMethodProperty(Set.prototype, 'delete', function (value) {
                // 1. Let S be the this value.
                var S = this;
                // 2. If Type(S) is not Object, throw a TypeError exception.
                if (typeof S !== 'object') {
                    throw new TypeError('Method Set.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(S));
                }
                // 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
                if (S._es6Set !== true) {
                    throw new TypeError('Method Set.prototype.delete called on incompatible receiver ' + Object.prototype.toString.call(S));
                }
                // 4. Let entries be the List that is S.[[SetData]].
                var entries = S._values;
                // 5. For each e that is an element of entries, do
                for (var i = 0; i < entries.length; i++) {
                    var e = entries[i];
                    // a. If e is not empty and SameValueZero(e, value) is true, then
                    if (e !== undefMarker && SameValueZero(e, value)) {
                        // i. Replace the element of entries whose value is e with an element whose value is empty.
                        entries[i] = undefMarker;
    
                        this._size = --this._size;
                        if (!supportsGetters) {
                            this.size = this._size;
                        }
                        // ii. Return true.
                        return true;
                    }
                }
                // 6. Return false.
                return false;
            }
        );
    
        // 23.2.3.5. Set.prototype.entries ( )
        CreateMethodProperty(Set.prototype, 'entries', function entries() {
                // 1. Let S be the this value.
                var S = this;
                // 2. Return ? CreateSetIterator(S, "key+value").
                return CreateSetIterator(S, 'key+value');
            }
        );
    
        // 23.2.3.6. Set.prototype.forEach ( callbackfn [ , thisArg ] )
        CreateMethodProperty(Set.prototype, 'forEach', function forEach(callbackFn /*[ , thisArg ]*/) {
                // 1. Let S be the this value.
                var S = this;
                // 2. If Type(S) is not Object, throw a TypeError exception.
                if (typeof S !== 'object') {
                    throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
                }
                // 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
                if (S._es6Set !== true) {
                    throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
                }
                // 4. If IsCallable(callbackfn) is false, throw a TypeError exception.
                if (!IsCallable(callbackFn)) {
                    throw new TypeError(Object.prototype.toString.call(callbackFn) + ' is not a function.');
                }
                // 5. If thisArg is present, let T be thisArg; else let T be undefined.
                if (arguments[1]) {
                    var T = arguments[1];
                }
                // 6. Let entries be the List that is S.[[SetData]].
                var entries = S._values;
                // 7. For each e that is an element of entries, in original insertion order, do
                for (var i = 0; i < entries.length; i++) {
                    var e = entries[i];
                    // a. If e is not empty, then
                    if (e !== undefMarker) {
                        // i. Perform ? Call(callbackfn, T, « e, e, S »).
                        callbackFn.call(T, e, e, S);
                    }
                }
                // 8. Return undefined.
                return undefined;
            }
        );
    
        // 23.2.3.7. Set.prototype.has ( value )
        CreateMethodProperty(Set.prototype, 'has', function has(value) {
                // 1. Let S be the this value.
                var S = this;
                // 2. If Type(S) is not Object, throw a TypeError exception.
                if (typeof S !== 'object') {
                    throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
                }
                // 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
                if (S._es6Set !== true) {
                    throw new TypeError('Method Set.prototype.forEach called on incompatible receiver ' + Object.prototype.toString.call(S));
                }
                // 4. Let entries be the List that is S.[[SetData]].
                var entries = S._values;
                // 5. For each e that is an element of entries, do
                for (var i = 0; i < entries.length; i++) {
                    var e = entries[i];
                    // a. If e is not empty and SameValueZero(e, value) is true, return true.
                    if (e !== undefMarker && SameValueZero(e, value)) {
                        return true;
                    }
                }
                // 6. Return false.
                return false;
            }
        );
    
        // Polyfill.io - We need to define Set.prototype.values before Set.prototype.keys because keys is a reference to values.
        // 23.2.3.10. Set.prototype.values()
        var values = function values() {
            // 1. Let S be the this value.
            var S = this;
            // 2. Return ? CreateSetIterator(S, "value").
            return CreateSetIterator(S, "value");
        };
        CreateMethodProperty(Set.prototype, 'values', values);
    
        // 23.2.3.8 Set.prototype.keys ( )
        // The initial value of the keys property is the same function object as the initial value of the values property.
        CreateMethodProperty(Set.prototype, 'keys', values);
    
        // 23.2.3.9. get Set.prototype.size
        if (supportsGetters) {
            Object.defineProperty(Set.prototype, 'size', {
                configurable: true,
                enumerable: false,
                get: function () {
                    // 1. Let S be the this value.
                    var S = this;
                    // 2. If Type(S) is not Object, throw a TypeError exception.
                    if (typeof S !== 'object') {
                        throw new TypeError('Method Set.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(S));
                    }
                    // 3. If S does not have a [[SetData]] internal slot, throw a TypeError exception.
                    if (S._es6Set !== true) {
                        throw new TypeError('Method Set.prototype.size called on incompatible receiver ' + Object.prototype.toString.call(S));
                    }
                    // 4. Let entries be the List that is S.[[SetData]].
                    var entries = S._values;
                    // 5. Let count be 0.
                    var count = 0;
                    // 6. For each e that is an element of entries, do
                    for (var i = 0; i < entries.length; i++) {
                        var e = entries[i];
                        // a. If e is not empty, set count to count+1.
                        if (e !== undefMarker) {
                            count = count + 1;
                        }
                    }
                    // 7. Return count.
                    return count;
                },
                set: undefined
            });
        }
    
        // 23.2.3.11. Set.prototype [ @@iterator ] ( )
        // The initial value of the @@iterator property is the same function object as the initial value of the values property.
        CreateMethodProperty(Set.prototype, Symbol.iterator, values);
    
        // 23.2.3.12. Set.prototype [ @@toStringTag ]
        // The initial value of the @@toStringTag property is the String value "Set".
        // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
    
        // Polyfill.io - Safari 8 implements Set.name but as a non-configurable property, which means it would throw an error if we try and configure it here.
        if (!('name' in Set)) {
            // 19.2.4.2 name
            Object.defineProperty(Set, 'name', {
                configurable: true,
                enumerable: false,
                writable: false,
                value: 'Set'
            });
        }
    
        // 23.2.5.1. CreateSetIterator ( set, kind )
        function CreateSetIterator(set, kind) {
            // 1. If Type(set) is not Object, throw a TypeError exception.
            if (typeof set !== 'object') {
                throw new TypeError('createSetIterator called on incompatible receiver ' + Object.prototype.toString.call(set));
            }
            // 2. If set does not have a [[SetData]] internal slot, throw a TypeError exception.
            if (set._es6Set !== true) {
                throw new TypeError('createSetIterator called on incompatible receiver ' + Object.prototype.toString.call(set));
            }
            // 3. Let iterator be ObjectCreate(%SetIteratorPrototype%, « [[IteratedSet]], [[SetNextIndex]], [[SetIterationKind]] »).
            var iterator = Object.create(SetIteratorPrototype);
            // 4. Set iterator.[[IteratedSet]] to set.
            Object.defineProperty(iterator, '[[IteratedSet]]', {
                configurable: true,
                enumerable: false,
                writable: true,
                value: set
            });
            // 5. Set iterator.[[SetNextIndex]] to 0.
            Object.defineProperty(iterator, '[[SetNextIndex]]', {
                configurable: true,
                enumerable: false,
                writable: true,
                value: 0
            });
            // 6. Set iterator.[[SetIterationKind]] to kind.
            Object.defineProperty(iterator, '[[SetIterationKind]]', {
                configurable: true,
                enumerable: false,
                writable: true,
                value: kind
            });
            // 7. Return iterator.
            return iterator;
        }
    
        // 23.2.5.2. The %SetIteratorPrototype% Object
        var SetIteratorPrototype = {};
        //Polyfill.io - We add this property to help us identify what is a set iterator.
        Object.defineProperty(SetIteratorPrototype, 'isSetIterator', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: true
        });
    
        // 23.2.5.2.1. %SetIteratorPrototype%.next ( )
        CreateMethodProperty(SetIteratorPrototype, 'next', function next() {
            // 1. Let O be the this value.
            var O = this;
            // 2. If Type(O) is not Object, throw a TypeError exception.
            if (typeof O !== 'object') {
                throw new TypeError('Method %SetIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
            }
            // 3. If O does not have all of the internal slots of a Set Iterator Instance (23.2.5.3), throw a TypeError exception.
            if (!O.isSetIterator) {
                throw new TypeError('Method %SetIteratorPrototype%.next called on incompatible receiver ' + Object.prototype.toString.call(O));
            }
            // 4. Let s be O.[[IteratedSet]].
            var s = O['[[IteratedSet]]'];
            // 5. Let index be O.[[SetNextIndex]].
            var index = O['[[SetNextIndex]]'];
            // 6. Let itemKind be O.[[SetIterationKind]].
            var itemKind = O['[[SetIterationKind]]'];
            // 7. If s is undefined, return CreateIterResultObject(undefined, true).
            if (s === undefined) {
                return CreateIterResultObject(undefined, true);
            }
            // 8. Assert: s has a [[SetData]] internal slot.
            if (!s._es6Set) {
                throw new Error(Object.prototype.toString.call(s) + ' does not have [[SetData]] internal slot.');
            }
            // 9. Let entries be the List that is s.[[SetData]].
            var entries = s._values;
            // 10. Let numEntries be the number of elements of entries.
            var numEntries = entries.length;
            // 11. NOTE: numEntries must be redetermined each time this method is evaluated.
            // 12. Repeat, while index is less than numEntries,
            while (index < numEntries) {
                // a. Let e be entries[index].
                var e = entries[index];
                // b. Set index to index+1.
                index = index + 1;
                // c. Set O.[[SetNextIndex]] to index.
                O['[[SetNextIndex]]'] = index;
                // d. If e is not empty, then
                if (e !== undefMarker) {
                    // i. If itemKind is "key+value", then
                    if (itemKind === 'key+value') {
                        // 1. Return CreateIterResultObject(CreateArrayFromList(« e, e »), false).
                        return CreateIterResultObject([e, e], false);
                    }
                    // ii. Return CreateIterResultObject(e, false).
                    return CreateIterResultObject(e, false);
                }
            }
            // 13. Set O.[[IteratedSet]] to undefined.
            O['[[IteratedSet]]'] = undefined;
            // 14. Return CreateIterResultObject(undefined, true).
            return CreateIterResultObject(undefined, true);
        });
    
        // 23.2.5.2.2. %SetIteratorPrototype% [ @@toStringTag ]
        // The initial value of the @@toStringTag property is the String value "Set Iterator".
        // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
    
        CreateMethodProperty(SetIteratorPrototype, Symbol.iterator, function iterator() {
                return this;
            }
        );
    
        // Export the object
        try {
            CreateMethodProperty(global, 'Set', Set);
        } catch (e) {
            // IE8 throws an error here if we set enumerable to false.
            // More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
            global.Set = Set;
        }
    
    }(self));
    
    }
    
    if (!("Symbol"in self&&"toStringTag"in self.Symbol
    )) {
    
    // Symbol.toStringTag
    /* global Symbol */
    Object.defineProperty(Symbol, 'toStringTag', {
        value: Symbol('toStringTag')
    });
    
    }
    
    if (!("Promise"in self
    )) {
    
    // Promise
    /*
        Yaku v0.19.3
        (c) 2015 Yad Smood. http://ysmood.org
        License MIT
    */
    /*
        Yaku v0.17.9
        (c) 2015 Yad Smood. http://ysmood.org
        License MIT
    */
    (function () {
        'use strict';
    
        var $undefined
        , $null = null
        , isBrowser = typeof self === 'object'
        , root = self
        , nativePromise = root.Promise
        , process = root.process
        , console = root.console
        , isLongStackTrace = true
        , Arr = Array
        , Err = Error
    
        , $rejected = 1
        , $resolved = 2
        , $pending = 3
    
        , $Symbol = 'Symbol'
        , $iterator = 'iterator'
        , $species = 'species'
        , $speciesKey = $Symbol + '(' + $species + ')'
        , $return = 'return'
    
        , $unhandled = '_uh'
        , $promiseTrace = '_pt'
        , $settlerTrace = '_st'
    
        , $invalidThis = 'Invalid this'
        , $invalidArgument = 'Invalid argument'
        , $fromPrevious = '\nFrom previous '
        , $promiseCircularChain = 'Chaining cycle detected for promise'
        , $unhandledRejectionMsg = 'Uncaught (in promise)'
        , $rejectionHandled = 'rejectionHandled'
        , $unhandledRejection = 'unhandledRejection'
    
        , $tryCatchFn
        , $tryCatchThis
        , $tryErr = { e: $null }
        , $noop = function () {}
        , $cleanStackReg = /^.+\/node_modules\/yaku\/.+\n?/mg
        ;
    
        /**
        * This class follows the [Promises/A+](https://promisesaplus.com) and
        * [ES6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-promise-objects) spec
        * with some extra helpers.
        * @param  {Function} executor Function object with two arguments resolve, reject.
        * The first argument fulfills the promise, the second argument rejects it.
        * We can call these functions, once our operation is completed.
        */
        var Yaku = function (executor) {
        var self = this,
            err;
    
        // "this._s" is the internao state of: pending, resolved or rejected
        // "this._v" is the internal value
    
        if (!isObject(self) || self._s !== $undefined)
            throw genTypeError($invalidThis);
    
        self._s = $pending;
    
        if (isLongStackTrace) self[$promiseTrace] = genTraceInfo();
    
        if (executor !== $noop) {
            if (!isFunction(executor))
                throw genTypeError($invalidArgument);
    
            err = genTryCatcher(executor)(
                genSettler(self, $resolved),
                genSettler(self, $rejected)
            );
    
            if (err === $tryErr)
                settlePromise(self, $rejected, err.e);
        }
        };
    
        Yaku['default'] = Yaku;
    
        extend(Yaku.prototype, {
        /**
            * Appends fulfillment and rejection handlers to the promise,
            * and returns a new promise resolving to the return value of the called handler.
            * @param  {Function} onFulfilled Optional. Called when the Promise is resolved.
            * @param  {Function} onRejected  Optional. Called when the Promise is rejected.
            * @return {Yaku} It will return a new Yaku which will resolve or reject after
            * @example
            * the current Promise.
            * ```js
            * var Promise = require('yaku');
            * var p = Promise.resolve(10);
            *
            * p.then((v) => {
            *     console.log(v);
            * });
            * ```
            */
        then: function (onFulfilled, onRejected) {
            if (this._s === undefined) throw genTypeError();
    
            return addHandler(
                this,
                newCapablePromise(Yaku.speciesConstructor(this, Yaku)),
                onFulfilled,
                onRejected
            );
        },
    
        /**
            * The `catch()` method returns a Promise and deals with rejected cases only.
            * It behaves the same as calling `Promise.prototype.then(undefined, onRejected)`.
            * @param  {Function} onRejected A Function called when the Promise is rejected.
            * This function has one argument, the rejection reason.
            * @return {Yaku} A Promise that deals with rejected cases only.
            * @example
            * ```js
            * var Promise = require('yaku');
            * var p = Promise.reject(new Error("ERR"));
            *
            * p['catch']((v) => {
            *     console.log(v);
            * });
            * ```
            */
        'catch': function (onRejected) {
            return this.then($undefined, onRejected);
        },
    
        /**
            * Register a callback to be invoked when a promise is settled (either fulfilled or rejected).
            * Similar with the try-catch-finally, it's often used for cleanup.
            * @param  {Function} onFinally A Function called when the Promise is settled.
            * It will not receive any argument.
            * @return {Yaku} A Promise that will reject if onFinally throws an error or returns a rejected promise.
            * Else it will resolve previous promise's final state (either fulfilled or rejected).
            * @example
            * ```js
            * var Promise = require('yaku');
            * var p = Math.random() > 0.5 ? Promise.resolve() : Promise.reject();
            * p.finally(() => {
            *     console.log('finally');
            * });
            * ```
            */
        'finally': function (onFinally) {
            return this.then(function (val) {
                return Yaku.resolve(onFinally()).then(function () {
                    return val;
                });
            }, function (err) {
                return Yaku.resolve(onFinally()).then(function () {
                    throw err;
                });
            });
        },
    
        // The number of current promises that attach to this Yaku instance.
        _c: 0,
    
        // The parent Yaku.
        _p: $null
        });
    
        /**
        * The `Promise.resolve(value)` method returns a Promise object that is resolved with the given value.
        * If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable,
        * adopting its eventual state; otherwise the returned promise will be fulfilled with the value.
        * @param  {Any} value Argument to be resolved by this Promise.
        * Can also be a Promise or a thenable to resolve.
        * @return {Yaku}
        * @example
        * ```js
        * var Promise = require('yaku');
        * var p = Promise.resolve(10);
        * ```
        */
        Yaku.resolve = function (val) {
        return isYaku(val) ? val : settleWithX(newCapablePromise(this), val);
        };
    
        /**
        * The `Promise.reject(reason)` method returns a Promise object that is rejected with the given reason.
        * @param  {Any} reason Reason why this Promise rejected.
        * @return {Yaku}
        * @example
        * ```js
        * var Promise = require('yaku');
        * var p = Promise.reject(new Error("ERR"));
        * ```
        */
        Yaku.reject = function (reason) {
        return settlePromise(newCapablePromise(this), $rejected, reason);
        };
    
        /**
        * The `Promise.race(iterable)` method returns a promise that resolves or rejects
        * as soon as one of the promises in the iterable resolves or rejects,
        * with the value or reason from that promise.
        * @param  {iterable} iterable An iterable object, such as an Array.
        * @return {Yaku} The race function returns a Promise that is settled
        * the same way as the first passed promise to settle.
        * It resolves or rejects, whichever happens first.
        * @example
        * ```js
        * var Promise = require('yaku');
        * Promise.race([
        *     123,
        *     Promise.resolve(0)
        * ])
        * .then((value) => {
        *     console.log(value); // => 123
        * });
        * ```
        */
        Yaku.race = function (iterable) {
        var self = this
            , p = newCapablePromise(self)
    
            , resolve = function (val) {
                settlePromise(p, $resolved, val);
            }
    
            , reject = function (val) {
                settlePromise(p, $rejected, val);
            }
    
            , ret = genTryCatcher(each)(iterable, function (v) {
                self.resolve(v).then(resolve, reject);
            });
    
        if (ret === $tryErr) return self.reject(ret.e);
    
        return p;
        };
    
        /**
        * The `Promise.all(iterable)` method returns a promise that resolves when
        * all of the promises in the iterable argument have resolved.
        *
        * The result is passed as an array of values from all the promises.
        * If something passed in the iterable array is not a promise,
        * it's converted to one by Promise.resolve. If any of the passed in promises rejects,
        * the all Promise immediately rejects with the value of the promise that rejected,
        * discarding all the other promises whether or not they have resolved.
        * @param  {iterable} iterable An iterable object, such as an Array.
        * @return {Yaku}
        * @example
        * ```js
        * var Promise = require('yaku');
        * Promise.all([
        *     123,
        *     Promise.resolve(0)
        * ])
        * .then((values) => {
        *     console.log(values); // => [123, 0]
        * });
        * ```
        * @example
        * Use with iterable.
        * ```js
        * var Promise = require('yaku');
        * Promise.all((function * () {
        *     yield 10;
        *     yield new Promise(function (r) { setTimeout(r, 1000, "OK") });
        * })())
        * .then((values) => {
        *     console.log(values); // => [123, 0]
        * });
        * ```
        */
        Yaku.all = function (iterable) {
        var self = this
            , p1 = newCapablePromise(self)
            , res = []
            , ret
        ;
    
        function reject (reason) {
            settlePromise(p1, $rejected, reason);
        }
    
        ret = genTryCatcher(each)(iterable, function (item, i) {
            self.resolve(item).then(function (value) {
                res[i] = value;
                if (!--ret) settlePromise(p1, $resolved, res);
            }, reject);
        });
    
        if (ret === $tryErr) return self.reject(ret.e);
    
        if (!ret) settlePromise(p1, $resolved, []);
    
        return p1;
        };
    
        /**
        * The ES6 Symbol object that Yaku should use, by default it will use the
        * global one.
        * @type {Object}
        * @example
        * ```js
        * var core = require("core-js/library");
        * var Promise = require("yaku");
        * Promise.Symbol = core.Symbol;
        * ```
        */
        Yaku.Symbol = root[$Symbol] || {};
    
        // To support browsers that don't support `Object.defineProperty`.
        genTryCatcher(function () {
        Object.defineProperty(Yaku, getSpecies(), {
            get: function () { return this; }
        });
        })();
    
        /**
        * Use this api to custom the species behavior.
        * https://tc39.github.io/ecma262/#sec-speciesconstructor
        * @param {Any} O The current this object.
        * @param {Function} defaultConstructor
        */
        Yaku.speciesConstructor = function (O, D) {
        var C = O.constructor;
    
        return C ? (C[getSpecies()] || D) : D;
        };
    
        /**
        * Catch all possibly unhandled rejections. If you want to use specific
        * format to display the error stack, overwrite it.
        * If it is set, auto `console.error` unhandled rejection will be disabled.
        * @param {Any} reason The rejection reason.
        * @param {Yaku} p The promise that was rejected.
        * @example
        * ```js
        * var Promise = require('yaku');
        * Promise.unhandledRejection = (reason) => {
        *     console.error(reason);
        * };
        *
        * // The console will log an unhandled rejection error message.
        * Promise.reject('my reason');
        *
        * // The below won't log the unhandled rejection error message.
        * Promise.reject('v')["catch"](() => {});
        * ```
        */
        Yaku.unhandledRejection = function (reason, p) {
            console.log(reason, p);
            console && console.error(
                $unhandledRejectionMsg,
                isLongStackTrace ? p.longStack : genStackInfo(reason, p)
            );
        };
    
        /**
        * Emitted whenever a Promise was rejected and an error handler was
        * attached to it (for example with `["catch"]()`) later than after an event loop turn.
        * @param {Any} reason The rejection reason.
        * @param {Yaku} p The promise that was rejected.
        */
        Yaku.rejectionHandled = $noop;
    
        /**
        * It is used to enable the long stack trace.
        * Once it is enabled, it can't be reverted.
        * While it is very helpful in development and testing environments,
        * it is not recommended to use it in production. It will slow down
        * application and eat up memory.
        * It will add an extra property `longStack` to the Error object.
        * @example
        * ```js
        * var Promise = require('yaku');
        * Promise.enableLongStackTrace();
        * Promise.reject(new Error("err"))["catch"]((err) => {
        *     console.log(err.longStack);
        * });
        * ```
        */
        Yaku.enableLongStackTrace = function () {
        isLongStackTrace = true;
        };
    
        /**
        * Only Node has `process.nextTick` function. For browser there are
        * so many ways to polyfill it. Yaku won't do it for you, instead you
        * can choose what you prefer. For example, this project
        * [next-tick](https://github.com/medikoo/next-tick).
        * By default, Yaku will use `process.nextTick` on Node, `setTimeout` on browser.
        * @type {Function}
        * @example
        * ```js
        * var Promise = require('yaku');
        * Promise.nextTick = require('next-tick');
        * ```
        * @example
        * You can even use sync resolution if you really know what you are doing.
        * ```js
        * var Promise = require('yaku');
        * Promise.nextTick = fn => fn();
        * ```
        */
        Yaku.nextTick = isBrowser ?
        function (fn) {
            nativePromise ?
                new nativePromise(function (resolve) { resolve(); }).then(fn) :
                setTimeout(fn);
        } :
        process.nextTick;
    
        // ********************** Private **********************
    
        Yaku._s = 1;
    
        /**
        * All static variable name will begin with `$`. Such as `$rejected`.
        * @private
        */
    
        // ******************************* Utils ********************************
    
        function getSpecies () {
        return Yaku[$Symbol][$species] || $speciesKey;
        }
    
        function extend (src, target) {
        for (var k in target) {
            src[k] = target[k];
        }
        }
    
        function isObject (obj) {
        return obj && typeof obj === 'object';
        }
    
        function isFunction (obj) {
        return typeof obj === 'function';
        }
    
        function isInstanceOf (a, b) {
        return a instanceof b;
        }
    
        function isError (obj) {
        return isInstanceOf(obj, Err);
        }
    
        function ensureType (obj, fn, msg) {
        if (!fn(obj)) throw genTypeError(msg);
        }
    
        /**
        * Wrap a function into a try-catch.
        * @private
        * @return {Any | $tryErr}
        */
        function tryCatcher () {
        try {
            return $tryCatchFn.apply($tryCatchThis, arguments);
        } catch (e) {
            $tryErr.e = e;
            return $tryErr;
        }
        }
    
        /**
        * Generate a try-catch wrapped function.
        * @private
        * @param  {Function} fn
        * @return {Function}
        */
        function genTryCatcher (fn, self) {
        $tryCatchFn = fn;
        $tryCatchThis = self;
        return tryCatcher;
        }
    
        /**
        * Generate a scheduler.
        * @private
        * @param  {Integer}  initQueueSize
        * @param  {Function} fn `(Yaku, Value) ->` The schedule handler.
        * @return {Function} `(Yaku, Value) ->` The scheduler.
        */
        function genScheduler (initQueueSize, fn) {
        /**
            * All async promise will be scheduled in
            * here, so that they can be execute on the next tick.
            * @private
            */
        var fnQueue = Arr(initQueueSize)
            , fnQueueLen = 0;
    
        /**
            * Run all queued functions.
            * @private
            */
        function flush () {
            var i = 0;
            while (i < fnQueueLen) {
                fn(fnQueue[i], fnQueue[i + 1]);
                fnQueue[i++] = $undefined;
                fnQueue[i++] = $undefined;
            }
    
            fnQueueLen = 0;
            if (fnQueue.length > initQueueSize) fnQueue.length = initQueueSize;
        }
    
        return function (v, arg) {
            fnQueue[fnQueueLen++] = v;
            fnQueue[fnQueueLen++] = arg;
    
            if (fnQueueLen === 2) Yaku.nextTick(flush);
        };
        }
    
        /**
        * Generate a iterator
        * @param  {Any} obj
        * @private
        * @return {Object || TypeError}
        */
        function each (iterable, fn) {
        var len
            , i = 0
            , iter
            , item
            , ret
        ;
    
        if (!iterable) throw genTypeError($invalidArgument);
    
        var gen = iterable[Yaku[$Symbol][$iterator]];
        if (isFunction(gen))
            iter = gen.call(iterable);
        else if (isFunction(iterable.next)) {
            iter = iterable;
        }
        else if (isInstanceOf(iterable, Arr)) {
            len = iterable.length;
            while (i < len) {
                fn(iterable[i], i++);
            }
            return i;
        } else
            throw genTypeError($invalidArgument);
    
        while (!(item = iter.next()).done) {
            ret = genTryCatcher(fn)(item.value, i++);
            if (ret === $tryErr) {
                isFunction(iter[$return]) && iter[$return]();
                throw ret.e;
            }
        }
    
        return i;
        }
    
        /**
        * Generate type error object.
        * @private
        * @param  {String} msg
        * @return {TypeError}
        */
        function genTypeError (msg) {
        return new TypeError(msg);
        }
    
        function genTraceInfo (noTitle) {
        return (noTitle ? '' : $fromPrevious) + new Err().stack;
        }
    
    
        // *************************** Promise Helpers ****************************
    
        /**
        * Resolve the value returned by onFulfilled or onRejected.
        * @private
        * @param {Yaku} p1
        * @param {Yaku} p2
        */
        var scheduleHandler = genScheduler(999, function (p1, p2) {
        var x, handler;
    
        // 2.2.2
        // 2.2.3
        handler = p1._s !== $rejected ? p2._onFulfilled : p2._onRejected;
    
        // 2.2.7.3
        // 2.2.7.4
        if (handler === $undefined) {
            settlePromise(p2, p1._s, p1._v);
            return;
        }
    
        // 2.2.7.1
        x = genTryCatcher(callHanler)(handler, p1._v);
        if (x === $tryErr) {
            // 2.2.7.2
            settlePromise(p2, $rejected, x.e);
            return;
        }
    
        settleWithX(p2, x);
        });
    
        var scheduleUnhandledRejection = genScheduler(9, function (p) {
        if (!hashOnRejected(p)) {
            p[$unhandled] = 1;
            emitEvent($unhandledRejection, p);
        }
        });
    
        function emitEvent (name, p) {
        var browserEventName = 'on' + name.toLowerCase()
            , browserHandler = root[browserEventName];
    
        if (process && process.listeners(name).length)
            name === $unhandledRejection ?
                process.emit(name, p._v, p) : process.emit(name, p);
        else if (browserHandler)
            browserHandler({ reason: p._v, promise: p });
        else
            Yaku[name](p._v, p);
        }
    
        function isYaku (val) { return val && val._s; }
    
        function newCapablePromise (Constructor) {
        if (isYaku(Constructor)) return new Constructor($noop);
    
        var p, r, j;
        p = new Constructor(function (resolve, reject) {
            if (p) throw genTypeError();
    
            r = resolve;
            j = reject;
        });
    
        ensureType(r, isFunction);
        ensureType(j, isFunction);
    
        return p;
        }
    
        /**
        * It will produce a settlePromise function to user.
        * Such as the resolve and reject in this `new Yaku (resolve, reject) ->`.
        * @private
        * @param  {Yaku} self
        * @param  {Integer} state The value is one of `$pending`, `$resolved` or `$rejected`.
        * @return {Function} `(value) -> undefined` A resolve or reject function.
        */
        function genSettler (self, state) {
        var isCalled = false;
        return function (value) {
            if (isCalled) return;
            isCalled = true;
    
            if (isLongStackTrace)
                self[$settlerTrace] = genTraceInfo(true);
    
            if (state === $resolved)
                settleWithX(self, value);
            else
                settlePromise(self, state, value);
        };
        }
    
        /**
        * Link the promise1 to the promise2.
        * @private
        * @param {Yaku} p1
        * @param {Yaku} p2
        * @param {Function} onFulfilled
        * @param {Function} onRejected
        */
        function addHandler (p1, p2, onFulfilled, onRejected) {
        // 2.2.1
        if (isFunction(onFulfilled))
            p2._onFulfilled = onFulfilled;
        if (isFunction(onRejected)) {
            if (p1[$unhandled]) emitEvent($rejectionHandled, p1);
    
            p2._onRejected = onRejected;
        }
    
        if (isLongStackTrace) p2._p = p1;
        p1[p1._c++] = p2;
    
        // 2.2.6
        if (p1._s !== $pending)
            scheduleHandler(p1, p2);
    
        // 2.2.7
        return p2;
        }
    
        // iterate tree
        function hashOnRejected (node) {
        // A node shouldn't be checked twice.
        if (node._umark)
            return true;
        else
            node._umark = true;
    
        var i = 0
            , len = node._c
            , child;
    
        while (i < len) {
            child = node[i++];
            if (child._onRejected || hashOnRejected(child)) return true;
        }
        }
    
        function genStackInfo (reason, p) {
        var stackInfo = [];
    
        function push (trace) {
            return stackInfo.push(trace.replace(/^\s+|\s+$/g, ''));
        }
    
        if (isLongStackTrace) {
            if (p[$settlerTrace])
                push(p[$settlerTrace]);
    
            // Hope you guys could understand how the back trace works.
            // We only have to iterate through the tree from the bottom to root.
            (function iter (node) {
                if (node && $promiseTrace in node) {
                    iter(node._next);
                    push(node[$promiseTrace] + '');
                    iter(node._p);
                }
            })(p);
        }
    
        return (reason && reason.stack ? reason.stack : reason) +
            ('\n' + stackInfo.join('\n')).replace($cleanStackReg, '');
        }
    
        function callHanler (handler, value) {
        // 2.2.5
        return handler(value);
        }
    
        /**
        * Resolve or reject a promise.
        * @private
        * @param  {Yaku} p
        * @param  {Integer} state
        * @param  {Any} value
        */
        function settlePromise (p, state, value) {
        var i = 0
            , len = p._c;
    
        // 2.1.2
        // 2.1.3
        if (p._s === $pending) {
            // 2.1.1.1
            p._s = state;
            p._v = value;
    
            if (state === $rejected) {
                if (isLongStackTrace && isError(value)) {
                    value.longStack = genStackInfo(value, p);
                }
    
                scheduleUnhandledRejection(p);
            }
    
            // 2.2.4
            while (i < len) {
                scheduleHandler(p, p[i++]);
            }
        }
    
        return p;
        }
    
        /**
        * Resolve or reject promise with value x. The x can also be a thenable.
        * @private
        * @param {Yaku} p
        * @param {Any | Thenable} x A normal value or a thenable.
        */
        function settleWithX (p, x) {
        // 2.3.1
        if (x === p && x) {
            settlePromise(p, $rejected, genTypeError($promiseCircularChain));
            return p;
        }
    
        // 2.3.2
        // 2.3.3
        if (x !== $null && (isFunction(x) || isObject(x))) {
            // 2.3.2.1
            var xthen = genTryCatcher(getThen)(x);
    
            if (xthen === $tryErr) {
                // 2.3.3.2
                settlePromise(p, $rejected, xthen.e);
                return p;
            }
    
            if (isFunction(xthen)) {
                if (isLongStackTrace && isYaku(x))
                    p._next = x;
    
                // Fix https://bugs.chromium.org/p/v8/issues/detail?id=4162
                if (isYaku(x))
                    settleXthen(p, x, xthen);
                else
                    Yaku.nextTick(function () {
                        settleXthen(p, x, xthen);
                    });
            } else
                // 2.3.3.4
                settlePromise(p, $resolved, x);
        } else
            // 2.3.4
            settlePromise(p, $resolved, x);
    
        return p;
        }
    
        /**
        * Try to get a promise's then method.
        * @private
        * @param  {Thenable} x
        * @return {Function}
        */
        function getThen (x) { return x.then; }
    
        /**
        * Resolve then with its promise.
        * @private
        * @param  {Yaku} p
        * @param  {Thenable} x
        * @param  {Function} xthen
        */
        function settleXthen (p, x, xthen) {
        // 2.3.3.3
        var err = genTryCatcher(xthen, x)(function (y) {
            // 2.3.3.3.3
            // 2.3.3.3.1
            x && (x = $null, settleWithX(p, y));
        }, function (r) {
            // 2.3.3.3.3
            // 2.3.3.3.2
            x && (x = $null, settlePromise(p, $rejected, r));
        });
    
        // 2.3.3.3.4.1
        if (err === $tryErr && x) {
            // 2.3.3.3.4.2
            settlePromise(p, $rejected, err.e);
            x = $null;
        }
        }
    
        root.Promise = Yaku;
    })();
    
    }
    
    if (!((function(){try{if("WeakMap"in self&&0===self.WeakMap.length){var e={},t=new self.WeakMap([[e,"test"]])
    return"test"===t.get(e)&&!1===t["delete"](0)}return!1}catch(a){return!1}})()
    )) {
    
    // WeakMap
    /* globals Symbol, OrdinaryCreateFromConstructor, IsCallable, GetIterator, IteratorStep, IteratorValue, IteratorClose, Get, Call, CreateMethodProperty, Type, SameValue */
    (function (global) {
        // Deleted map items mess with iterator pointers, so rather than removing them mark them as deleted. Can't use undefined or null since those both valid keys so use a private symbol.
        var undefMarker = Symbol('undef');
        // 23.3.1.1 WeakMap ( [ iterable ] )
        var WeakMap = function WeakMap(/* iterable */) {
            // 1. If NewTarget is undefined, throw a TypeError exception.
            if (!(this instanceof WeakMap)) {
                throw new TypeError('Constructor WeakMap requires "new"');
            }
            // 2. Let map be ? OrdinaryCreateFromConstructor(NewTarget, "%WeakMapPrototype%", « [[WeakMapData]] »).
            var map = OrdinaryCreateFromConstructor(this, WeakMap.prototype, {
                _keys: [],
                _values: [],
                _es6WeakMap: true
            });
    
            // 3. Set map.[[WeakMapData]] to a new empty List.
            // Polyfill.io - This step was done as part of step two.
    
            // 4. If iterable is not present, let iterable be undefined.
            var iterable = arguments.length > 0 ? arguments[0] : undefined;
    
            // 5. If iterable is either undefined or null, return map.
            if (iterable === null || iterable === undefined) {
                return map;
            }
    
            // 6. Let adder be ? Get(map, "set").
            var adder = Get(map, "set");
    
            // 7. If IsCallable(adder) is false, throw a TypeError exception.
            if (!IsCallable(adder)) {
                throw new TypeError("WeakMap.prototype.set is not a function");
            }
    
            // 8. Let iteratorRecord be ? GetIterator(iterable).
            try {
                var iteratorRecord = GetIterator(iterable);
                // 9. Repeat,
                // eslint-disable-next-line no-constant-condition
                while (true) {
                    // a. Let next be ? IteratorStep(iteratorRecord).
                    var next = IteratorStep(iteratorRecord);
                    // b. If next is false, return map.
                    if (next === false) {
                        return map;
                    }
                    // c. Let nextItem be ? IteratorValue(next).
                    var nextItem = IteratorValue(next);
                    // d. If Type(nextItem) is not Object, then
                    if (Type(nextItem) !== 'object') {
                        // i. Let error be Completion{[[Type]]: throw, [[Value]]: a newly created TypeError object, [[Target]]: empty}.
                        try {
                            throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
                        } catch (error) {
                            // ii. Return ? IteratorClose(iteratorRecord, error).
                            return IteratorClose(iteratorRecord, error);
                        }
                    }
                    try {
                        // Polyfill.io - The try catch accounts for steps: f, h, and j.
    
                        // e. Let k be Get(nextItem, "0").
                        var k = Get(nextItem, "0");
                        // f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
                        // g. Let v be Get(nextItem, "1").
                        var v = Get(nextItem, "1");
                        // h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
                        // i. Let status be Call(adder, map, « k.[[Value]], v.[[Value]] »).
                        Call(adder, map, [k, v]);
                    } catch (e) {
                        // j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
                        return IteratorClose(iteratorRecord, e);
                    }
                }
            } catch (e) {
                // Polyfill.io - For user agents which do not have iteration methods on argument objects or arrays, we can special case those.
                if (Array.isArray(iterable) ||
                    Object.prototype.toString.call(iterable) === '[object Arguments]' ||
                    // IE 7 & IE 8 return '[object Object]' for the arguments object, we can detect by checking for the existence of the callee property
                    (!!iterable.callee)) {
                    var index;
                    var length = iterable.length;
                    for (index = 0; index < length; index++) {
                        k = iterable[index][0];
                        v = iterable[index][1];
                        Call(adder, map, [k, v]);
                    }
                }
            }
            return map;
        };
    
        // 23.3.2.1 WeakMap.prototype
        // The initial value of WeakMap.prototype is the intrinsic object %WeakMapPrototype%.
        // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
        Object.defineProperty(WeakMap, 'prototype', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: {}
        });
    
        // 23.3.3.1 WeakMap.prototype.constructor
        CreateMethodProperty(WeakMap.prototype, 'constructor', WeakMap);
    
        // 23.3.3.2 WeakMap.prototype.delete ( key )
        CreateMethodProperty(WeakMap.prototype, 'delete', function (key) {
            // 1. Let M be the this value.
            var M = this;
            // 2. If Type(M) is not Object, throw a TypeError exception.
            if (Type(M) !== 'object') {
                throw new TypeError('Method WeakMap.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
            }
            // 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
            if (M._es6WeakMap !== true) {
                throw new TypeError('Method WeakMap.prototype.clear called on incompatible receiver ' + Object.prototype.toString.call(M));
            }
            // 4. Let entries be the List that is M.[[WeakMapData]].
            var entries = M._keys;
            // 5. If Type(key) is not Object, return false.
            if (Type(key) !== 'object') {
                return false;
            }
            // 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
            for (var i = 0; i < entries.length; i++) {
                // a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, then
                if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
                    // i. Set p.[[Key]] to empty.
                    this._keys[i] = undefMarker;
                    // ii. Set p.[[Value]] to empty.
                    this._values[i] = undefMarker;
                    this._size = --this._size;
                    // iii. Return true.
                    return true;
                }
            }
            // 7. Return false.
            return false;
        });
    
        // 23.3.3.3 WeakMap.prototype.get ( key )
        CreateMethodProperty(WeakMap.prototype, 'get', function get(key) {
            // 1. Let M be the this value.
            var M = this;
            // 2. If Type(M) is not Object, throw a TypeError exception.
            if (Type(M) !== 'object') {
                throw new TypeError('Method WeakMap.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
            }
            // 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
            if (M._es6WeakMap !== true) {
                throw new TypeError('Method WeakMap.prototype.get called on incompatible receiver ' + Object.prototype.toString.call(M));
            }
            // 4. Let entries be the List that is M.[[WeakMapData]].
            var entries = M._keys;
            // 5. If Type(key) is not Object, return undefined.
            if (Type(key) !== 'object') {
                return undefined;
            }
            // 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
            for (var i = 0; i < entries.length; i++) {
                // a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, return p.[[Value]].
                if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
                    return M._values[i];
                }
            }
            // 7. Return undefined.
            return undefined;
        });
    
        // 23.3.3.4 WeakMap.prototype.has ( key )
        CreateMethodProperty(WeakMap.prototype, 'has', function has(key) {
            // 1. Let M be the this value.
            var M = this;
            // 2. If Type(M) is not Object, throw a TypeError exception.
            if (typeof M !== 'object') {
                throw new TypeError('Method WeakMap.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
            }
            // 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
            if (M._es6WeakMap !== true) {
                throw new TypeError('Method WeakMap.prototype.has called on incompatible receiver ' + Object.prototype.toString.call(M));
            }
            // 4. Let entries be the List that is M.[[WeakMapData]].
            var entries = M._keys;
            // 5. If Type(key) is not Object, return false.
            if (Type(key) !== 'object') {
                return false;
            }
            // 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
            for (var i = 0; i < entries.length; i++) {
                // a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, return true.
                if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
                    return true;
                }
            }
            // 7. Return false.
            return false;
        });
    
        // 23.3.3.5 WeakMap.prototype.set ( key, value )
        CreateMethodProperty(WeakMap.prototype, 'set', function set(key, value) {
            // 1. Let M be the this value.
            var M = this;
            // 2. If Type(M) is not Object, throw a TypeError exception.
            if (Type(M) !== 'object') {
                throw new TypeError('Method WeakMap.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
            }
            // 3. If M does not have a [[WeakMapData]] internal slot, throw a TypeError exception.
            if (M._es6WeakMap !== true) {
                throw new TypeError('Method WeakMap.prototype.set called on incompatible receiver ' + Object.prototype.toString.call(M));
            }
            // 4. Let entries be the List that is M.[[WeakMapData]].
            var entries = M._keys;
            // 5. If Type(key) is not Object, throw a TypeError exception.
            if (Type(key) !== 'object') {
                throw new TypeError("Invalid value used as weak map key");
            }
            // 6. For each Record {[[Key]], [[Value]]} p that is an element of entries, do
            for (var i = 0; i < entries.length; i++) {
                // a. If p.[[Key]] is not empty and SameValue(p.[[Key]], key) is true, then
                if (M._keys[i] !== undefMarker && SameValue(M._keys[i], key)) {
                    // i. Set p.[[Value]] to value.
                    M._values[i] = value;
                    // ii. Return M.
                    return M;
                }
            }
            // 7. Let p be the Record {[[Key]]: key, [[Value]]: value}.
            var p = {
                '[[Key]]': key,
                '[[Value]]': value
            };
            // 8. Append p as the last element of entries.
            M._keys.push(p['[[Key]]']);
            M._values.push(p['[[Value]]']);
            // 9. Return M.
            return M;
        });
    
        // 23.3.3.6 WeakMap.prototype [ @@toStringTag ]
        // The initial value of the @@toStringTag property is the String value "WeakMap".
        // This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.
        Object.defineProperty(WeakMap.prototype, Symbol.toStringTag, {
            configurable: true,
            enumerable: false,
            writable: false,
            value: 'WeakMap'
        });
    
        // Polyfill.io - Safari 8 implements WeakMap.name but as a non-writable property, which means it would throw an error if we try and write to it here.
        if (!('name' in WeakMap)) {
            // 19.2.4.2 name
            Object.defineProperty(WeakMap, 'name', {
                configurable: true,
                enumerable: false,
                writable: false,
                value: 'WeakMap'
            });
        }
    
        // Export the object
        try {
            CreateMethodProperty(global, 'WeakMap', WeakMap);
        } catch (e) {
            // IE8 throws an error here if we set enumerable to false.
            // More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
            global.WeakMap = WeakMap;
        }
    }(self));
    
    }
    
    if (!("devicePixelRatio"in self
    )) {
    
    // devicePixelRatio
    // The chances of a device that runs IE < 11 having a DPR of more than 1 are low enough that this is likely to offer the best reliability / performance / accuracy tradeoff
    self.devicePixelRatio = 1;
    
    }
    
    if (!("document"in self&&"Document"in self
    )) {
    
    // document
    if ((typeof WorkerGlobalScope === "undefined") && (typeof importScripts !== "function")) {
    
        if (self.HTMLDocument) { // IE8
    
            // HTMLDocument is an extension of Document.  If the browser has HTMLDocument but not Document, the former will suffice as an alias for the latter.
            self.Document = self.HTMLDocument;
    
        } else {
    
            // Create an empty function to act as the missing constructor for the document object, attach the document object as its prototype.  The function needs to be anonymous else it is hoisted and causes the feature detect to prematurely pass, preventing the assignments below being made.
            self.Document = self.HTMLDocument = document.constructor = (new Function('return function Document() {}')());
            self.Document.prototype = document;
        }
    }
    
    }
    
    if (!("Element"in self&&"HTMLElement"in self
    )) {
    
    // Element
    (function () {
    
        if ('Element' in self && 'HTMLElement' in self) {
            return;
        }
        // IE8
        if (window.Element && !window.HTMLElement) {
            window.HTMLElement = window.Element;
            return;
        }
    
        // create Element constructor
        window.Element = window.HTMLElement = new Function('return function Element() {}')();
    
        // generate sandboxed iframe
        var vbody = document.appendChild(document.createElement('body'));
        var frame = vbody.appendChild(document.createElement('iframe'));
    
        // use sandboxed iframe to replicate Element functionality
        var frameDocument = frame.contentWindow.document;
        var prototype = Element.prototype = frameDocument.appendChild(frameDocument.createElement('*'));
        var cache = {};
    
        // polyfill Element.prototype on an element
        var shiv = function (element, deep) {
            var
            childNodes = element.childNodes || [],
            index = -1,
            key, value, childNode;
    
            if (element.nodeType === 1 && element.constructor !== Element) {
                element.constructor = Element;
    
                for (key in cache) {
                    value = cache[key];
                    element[key] = value;
                }
            }
    
            // eslint-disable-next-line no-cond-assign
            while (childNode = deep && childNodes[++index]) {
                shiv(childNode, deep);
            }
    
            return element;
        };
    
        var elements = document.getElementsByTagName('*');
        var nativeCreateElement = document.createElement;
        var interval;
        var loopLimit = 100;
    
        prototype.attachEvent('onpropertychange', function (event) {
            var
            propertyName = event.propertyName,
            nonValue = !Object.prototype.hasOwnProperty.call(cache, propertyName),
            newValue = prototype[propertyName],
            oldValue = cache[propertyName],
            index = -1,
            element;
    
            // eslint-disable-next-line no-cond-assign
            while (element = elements[++index]) {
                if (element.nodeType === 1) {
                    if (nonValue || element[propertyName] === oldValue) {
                        element[propertyName] = newValue;
                    }
                }
            }
    
            cache[propertyName] = newValue;
        });
    
        prototype.constructor = Element;
    
        if (!prototype.hasAttribute) {
            // <Element>.hasAttribute
            prototype.hasAttribute = function hasAttribute(name) {
                return this.getAttribute(name) !== null;
            };
        }
    
        // Apply Element prototype to the pre-existing DOM as soon as the body element appears.
        function bodyCheck() {
            if (!(loopLimit--)) clearTimeout(interval);
            if (document.body && !document.body.prototype && /(complete|interactive)/.test(document.readyState)) {
                shiv(document, true);
                if (interval && document.body.prototype) clearTimeout(interval);
                return (!!document.body.prototype);
            }
            return false;
        }
        if (!bodyCheck()) {
            document.onreadystatechange = bodyCheck;
            interval = setInterval(bodyCheck, 25);
        }
    
        // Apply to any new elements created after load
        document.createElement = function createElement(nodeName) {
            var element = nativeCreateElement(String(nodeName).toLowerCase());
            return shiv(element);
        };
    
        // remove sandboxed iframe
        document.removeChild(vbody);
    }());
    
    }
    
    if (!((function(n){if(!("Event"in n))return!1
    try{return new Event("click"),!0}catch(t){return!1}})(self)
    )) {
    
    // Event
    (function () {
        var unlistenableWindowEvents = {
            click: 1,
            dblclick: 1,
            keyup: 1,
            keypress: 1,
            keydown: 1,
            mousedown: 1,
            mouseup: 1,
            mousemove: 1,
            mouseover: 1,
            mouseenter: 1,
            mouseleave: 1,
            mouseout: 1,
            storage: 1,
            storagecommit: 1,
            textinput: 1
        };
    
        // This polyfill depends on availability of `document` so will not run in a worker
        // However, we asssume there are no browsers with worker support that lack proper
        // support for `Event` within the worker
        if (typeof document === 'undefined' || typeof window === 'undefined') return;
    
        var existingProto = (window.Event && window.Event.prototype) || null;
        function Event(type, eventInitDict) {
            if (!type) {
                throw new Error('Not enough arguments');
            }
    
            var event;
            // Shortcut if browser supports createEvent
            if ('createEvent' in document) {
                event = document.createEvent('Event');
                var bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
                var cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;
    
                event.initEvent(type, bubbles, cancelable);
    
                return event;
            }
    
            event = document.createEventObject();
    
            event.type = type;
            event.bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false;
            event.cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;
    
            return event;
        }
        Event.NONE = 0;
        Event.CAPTURING_PHASE = 1;
        Event.AT_TARGET = 2;
        Event.BUBBLING_PHASE = 3;
        window.Event = Window.prototype.Event = Event;
        if (existingProto) {
            Object.defineProperty(window.Event, 'prototype', {
                configurable: false,
                enumerable: false,
                writable: true,
                value: existingProto
            });
        }
    
        if (!('createEvent' in document)) {
            window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function addEventListener() {
                var
                element = this,
                type = arguments[0],
                listener = arguments[1];
    
                if (element === window && type in unlistenableWindowEvents) {
                    throw new Error('In IE8 the event: ' + type + ' is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.');
                }
    
                if (!element._events) {
                    element._events = {};
                }
    
                if (!element._events[type]) {
                    element._events[type] = function (event) {
                        var
                        list = element._events[event.type].list,
                        events = list.slice(),
                        index = -1,
                        length = events.length,
                        eventElement;
    
                        event.preventDefault = function preventDefault() {
                            if (event.cancelable !== false) {
                                event.returnValue = false;
                            }
                        };
    
                        event.stopPropagation = function stopPropagation() {
                            event.cancelBubble = true;
                        };
    
                        event.stopImmediatePropagation = function stopImmediatePropagation() {
                            event.cancelBubble = true;
                            event.cancelImmediate = true;
                        };
    
                        event.currentTarget = element;
                        event.relatedTarget = event.fromElement || null;
                        event.target = event.target || event.srcElement || element;
                        event.timeStamp = new Date().getTime();
    
                        if (event.clientX) {
                            event.pageX = event.clientX + document.documentElement.scrollLeft;
                            event.pageY = event.clientY + document.documentElement.scrollTop;
                        }
    
                        while (++index < length && !event.cancelImmediate) {
                            if (index in events) {
                                eventElement = events[index];
    
                                if (list.includes(eventElement) && typeof eventElement === 'function') {
                                    eventElement.call(element, event);
                                }
                            }
                        }
                    };
    
                    element._events[type].list = [];
    
                    if (element.attachEvent) {
                        element.attachEvent('on' + type, element._events[type]);
                    }
                }
    
                element._events[type].list.push(listener);
            };
    
            window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function removeEventListener() {
                var
                element = this,
                type = arguments[0],
                listener = arguments[1],
                index;
    
                if (element._events && element._events[type] && element._events[type].list) {
                    index = element._events[type].list.indexOf(listener);
    
                    if (index !== -1) {
                        element._events[type].list.splice(index, 1);
    
                        if (!element._events[type].list.length) {
                            if (element.detachEvent) {
                                element.detachEvent('on' + type, element._events[type]);
                            }
                            delete element._events[type];
                        }
                    }
                }
            };
    
            window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function dispatchEvent(event) {
                if (!arguments.length) {
                    throw new Error('Not enough arguments');
                }
    
                if (!event || typeof event.type !== 'string') {
                    throw new Error('DOM Events Exception 0');
                }
    
                var element = this, type = event.type;
    
                try {
                    if (!event.bubbles) {
                        event.cancelBubble = true;
    
                        var cancelBubbleEvent = function (event) {
                            event.cancelBubble = true;
    
                            (element || window).detachEvent('on' + type, cancelBubbleEvent);
                        };
    
                        this.attachEvent('on' + type, cancelBubbleEvent);
                    }
    
                    this.fireEvent('on' + type, event);
                } catch (error) {
                    event.target = element;
    
                    do {
                        event.currentTarget = element;
    
                        if ('_events' in element && typeof element._events[type] === 'function') {
                            element._events[type].call(element, event);
                        }
    
                        if (typeof element['on' + type] === 'function') {
                            element['on' + type].call(element, event);
                        }
    
                        element = element.nodeType === 9 ? element.parentWindow : element.parentNode;
                    } while (element && !event.cancelBubble);
                }
    
                return true;
            };
    
            // Add the DOMContentLoaded Event
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState === 'complete') {
                    document.dispatchEvent(new Event('DOMContentLoaded', {
                        bubbles: true
                    }));
                }
            });
        }
    }());
    
    }
    
    if (!("CustomEvent"in self&&("function"==typeof self.CustomEvent||self.CustomEvent.toString().indexOf("CustomEventConstructor")>-1)
    )) {
    
    // CustomEvent
    self.CustomEvent = function CustomEvent(type, eventInitDict) {
        if (!type) {
            throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
        }
    
        var event;
        eventInitDict = eventInitDict || {bubbles: false, cancelable: false, detail: null};
    
        if ('createEvent' in document) {
            try {
                event = document.createEvent('CustomEvent');
                event.initCustomEvent(type, eventInitDict.bubbles, eventInitDict.cancelable, eventInitDict.detail);
            } catch (error) {
                // for browsers which don't support CustomEvent at all, we use a regular event instead
                event = document.createEvent('Event');
                event.initEvent(type, eventInitDict.bubbles, eventInitDict.cancelable);
                event.detail = eventInitDict.detail;
            }
        } else {
    
            // IE8
            event = new Event(type, eventInitDict);
            event.detail = eventInitDict && eventInitDict.detail || null;
        }
        return event;
    };
    
    CustomEvent.prototype = Event.prototype;
    
    }
    
    if (!("requestAnimationFrame"in self
    )) {
    
    // requestAnimationFrame
    (function (global) {
        var rafPrefix;
    
        // do not inject RAF in order to avoid broken performance
        var nowOffset = Date.now();
    
        // use performance api if exist, otherwise use Date.now.
        // Date.now polyfill required.
        var pnow = function () {
            if (global.performance && typeof global.performance.now === 'function') {
                return global.performance.now();
            }
            // fallback
            return Date.now() - nowOffset;
        };
    
        if ('mozRequestAnimationFrame' in global) {
            rafPrefix = 'moz';
    
        } else if ('webkitRequestAnimationFrame' in global) {
            rafPrefix = 'webkit';
    
        }
    
        if (rafPrefix) {
            global.requestAnimationFrame = function (callback) {
                return global[rafPrefix + 'RequestAnimationFrame'](function () {
                    callback(pnow());
                });
            };
            global.cancelAnimationFrame = global[rafPrefix + 'CancelAnimationFrame'];
        } else {
    
            var lastTime = Date.now();
    
            global.requestAnimationFrame = function (callback) {
                if (typeof callback !== 'function') {
                    throw new TypeError(callback + ' is not a function');
                }
    
                var
                currentTime = Date.now(),
                delay = 16 + lastTime - currentTime;
    
                if (delay < 0) {
                    delay = 0;
                }
    
                lastTime = currentTime;
    
                return setTimeout(function () {
                    lastTime = Date.now();
    
                    callback(pnow());
                }, delay);
            };
    
            global.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
        }
    }(self));
    
    }
    
    if (!("ResizeObserver"in self
    )) {
    
    // ResizeObserver
    (function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ResizeObserver = {}));
    }(this, (function (exports) { 'use strict';
    
        var resizeObservers = [];
    
        var hasActiveObservations = function () {
            return resizeObservers.some(function (ro) { return ro.activeTargets.length > 0; });
        };
    
        var hasSkippedObservations = function () {
            return resizeObservers.some(function (ro) { return ro.skippedTargets.length > 0; });
        };
    
        var msg = 'ResizeObserver loop completed with undelivered notifications.';
        var deliverResizeLoopError = function () {
            var event;
            if (typeof ErrorEvent === 'function') {
                event = new ErrorEvent('error', {
                    message: msg
                });
            }
            else {
                event = document.createEvent('Event');
                event.initEvent('error', false, false);
                event.message = msg;
            }
            window.dispatchEvent(event);
        };
    
        var ResizeObserverBoxOptions;
        (function (ResizeObserverBoxOptions) {
            ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
            ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
            ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
        })(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {}));
    
        var freeze = function (obj) { return Object.freeze(obj); };
    
        var ResizeObserverSize = (function () {
            function ResizeObserverSize(inlineSize, blockSize) {
                this.inlineSize = inlineSize;
                this.blockSize = blockSize;
                freeze(this);
            }
            return ResizeObserverSize;
        }());
    
        var DOMRectReadOnly = (function () {
            function DOMRectReadOnly(x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.top = this.y;
                this.left = this.x;
                this.bottom = this.top + this.height;
                this.right = this.left + this.width;
                return freeze(this);
            }
            DOMRectReadOnly.prototype.toJSON = function () {
                var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
                return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
            };
            DOMRectReadOnly.fromRect = function (rectangle) {
                return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
            };
            return DOMRectReadOnly;
        }());
    
        var isSVG = function (target) { return target instanceof SVGElement && 'getBBox' in target; };
        var isHidden = function (target) {
            if (isSVG(target)) {
                var _a = target.getBBox(), width = _a.width, height = _a.height;
                return !width && !height;
            }
            var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
            return !(offsetWidth || offsetHeight || target.getClientRects().length);
        };
        var isElement = function (obj) {
            var _a, _b;
            if (obj instanceof Element) {
                return true;
            }
            var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
            return !!(scope && obj instanceof scope.Element);
        };
        var isReplacedElement = function (target) {
            switch (target.tagName) {
                case 'INPUT':
                    if (target.type !== 'image') {
                        break;
                    }
                case 'VIDEO':
                case 'AUDIO':
                case 'EMBED':
                case 'OBJECT':
                case 'CANVAS':
                case 'IFRAME':
                case 'IMG':
                    return true;
            }
            return false;
        };
    
        var global = typeof window !== 'undefined' ? window : {};
    
        var cache = new WeakMap();
        var scrollRegexp = /auto|scroll/;
        var verticalRegexp = /^tb|vertical/;
        var IE = (/msie|trident/i).test(global.navigator && global.navigator.userAgent);
        var parseDimension = function (pixel) { return parseFloat(pixel || '0'); };
        var size = function (inlineSize, blockSize, switchSizes) {
            if (inlineSize === void 0) { inlineSize = 0; }
            if (blockSize === void 0) { blockSize = 0; }
            if (switchSizes === void 0) { switchSizes = false; }
            return new ResizeObserverSize((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
        };
        var zeroBoxes = freeze({
            devicePixelContentBoxSize: size(),
            borderBoxSize: size(),
            contentBoxSize: size(),
            contentRect: new DOMRectReadOnly(0, 0, 0, 0)
        });
        var calculateBoxSizes = function (target, forceRecalculation) {
            if (forceRecalculation === void 0) { forceRecalculation = false; }
            if (cache.has(target) && !forceRecalculation) {
                return cache.get(target);
            }
            if (isHidden(target)) {
                cache.set(target, zeroBoxes);
                return zeroBoxes;
            }
            var cs = getComputedStyle(target);
            var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
            var removePadding = !IE && cs.boxSizing === 'border-box';
            var switchSizes = verticalRegexp.test(cs.writingMode || '');
            var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || '');
            var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || '');
            var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
            var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
            var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
            var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
            var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
            var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
            var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
            var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
            var horizontalPadding = paddingLeft + paddingRight;
            var verticalPadding = paddingTop + paddingBottom;
            var horizontalBorderArea = borderLeft + borderRight;
            var verticalBorderArea = borderTop + borderBottom;
            var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
            var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
            var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
            var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
            var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
            var contentHeight = svg ? svg.height : parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
            var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
            var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
            var boxes = freeze({
                devicePixelContentBoxSize: size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
                borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
                contentBoxSize: size(contentWidth, contentHeight, switchSizes),
                contentRect: new DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight)
            });
            cache.set(target, boxes);
            return boxes;
        };
        var calculateBoxSize = function (target, observedBox, forceRecalculation) {
            var _a = calculateBoxSizes(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
            switch (observedBox) {
                case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
                    return devicePixelContentBoxSize;
                case ResizeObserverBoxOptions.BORDER_BOX:
                    return borderBoxSize;
                default:
                    return contentBoxSize;
            }
        };
    
        var ResizeObserverEntry = (function () {
            function ResizeObserverEntry(target) {
                var boxes = calculateBoxSizes(target);
                this.target = target;
                this.contentRect = boxes.contentRect;
                this.borderBoxSize = freeze([boxes.borderBoxSize]);
                this.contentBoxSize = freeze([boxes.contentBoxSize]);
                this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
            }
            return ResizeObserverEntry;
        }());
    
        var calculateDepthForNode = function (node) {
            if (isHidden(node)) {
                return Infinity;
            }
            var depth = 0;
            var parent = node.parentNode;
            while (parent) {
                depth += 1;
                parent = parent.parentNode;
            }
            return depth;
        };
    
        var broadcastActiveObservations = function () {
            var shallowestDepth = Infinity;
            var callbacks = [];
            resizeObservers.forEach(function processObserver(ro) {
                if (ro.activeTargets.length === 0) {
                    return;
                }
                var entries = [];
                ro.activeTargets.forEach(function processTarget(ot) {
                    var entry = new ResizeObserverEntry(ot.target);
                    var targetDepth = calculateDepthForNode(ot.target);
                    entries.push(entry);
                    ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
                    if (targetDepth < shallowestDepth) {
                        shallowestDepth = targetDepth;
                    }
                });
                callbacks.push(function resizeObserverCallback() {
                    ro.callback.call(ro.observer, entries, ro.observer);
                });
                ro.activeTargets.splice(0, ro.activeTargets.length);
            });
            for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
                var callback = callbacks_1[_i];
                callback();
            }
            return shallowestDepth;
        };
    
        var gatherActiveObservationsAtDepth = function (depth) {
            resizeObservers.forEach(function processObserver(ro) {
                ro.activeTargets.splice(0, ro.activeTargets.length);
                ro.skippedTargets.splice(0, ro.skippedTargets.length);
                ro.observationTargets.forEach(function processTarget(ot) {
                    if (ot.isActive()) {
                        if (calculateDepthForNode(ot.target) > depth) {
                            ro.activeTargets.push(ot);
                        }
                        else {
                            ro.skippedTargets.push(ot);
                        }
                    }
                });
            });
        };
    
        var process = function () {
            var depth = 0;
            gatherActiveObservationsAtDepth(depth);
            while (hasActiveObservations()) {
                depth = broadcastActiveObservations();
                gatherActiveObservationsAtDepth(depth);
            }
            if (hasSkippedObservations()) {
                deliverResizeLoopError();
            }
            return depth > 0;
        };
    
        var trigger;
        var callbacks = [];
        var notify = function () { return callbacks.splice(0).forEach(function (cb) { return cb(); }); };
        var queueMicroTask = function (callback) {
            if (!trigger) {
                var toggle_1 = 0;
                var el_1 = document.createTextNode('');
                var config = { characterData: true };
                new MutationObserver(function () { return notify(); }).observe(el_1, config);
                trigger = function () { el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++); };
            }
            callbacks.push(callback);
            trigger();
        };
    
        var queueResizeObserver = function (cb) {
            queueMicroTask(function ResizeObserver() {
                requestAnimationFrame(cb);
            });
        };
    
        var watching = 0;
        var isWatching = function () { return !!watching; };
        var CATCH_PERIOD = 250;
        var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
        var events = [
            'resize',
            'load',
            'transitionend',
            'animationend',
            'animationstart',
            'animationiteration',
            'keyup',
            'keydown',
            'mouseup',
            'mousedown',
            'mouseover',
            'mouseout',
            'blur',
            'focus'
        ];
        var time = function (timeout) {
            if (timeout === void 0) { timeout = 0; }
            return Date.now() + timeout;
        };
        var scheduled = false;
        var Scheduler = (function () {
            function Scheduler() {
                var _this = this;
                this.stopped = true;
                this.listener = function () { return _this.schedule(); };
            }
            Scheduler.prototype.run = function (timeout) {
                var _this = this;
                if (timeout === void 0) { timeout = CATCH_PERIOD; }
                if (scheduled) {
                    return;
                }
                scheduled = true;
                var until = time(timeout);
                queueResizeObserver(function () {
                    var elementsHaveResized = false;
                    try {
                        elementsHaveResized = process();
                    }
                    finally {
                        scheduled = false;
                        timeout = until - time();
                        if (!isWatching()) {
                            return;
                        }
                        if (elementsHaveResized) {
                            _this.run(1000);
                        }
                        else if (timeout > 0) {
                            _this.run(timeout);
                        }
                        else {
                            _this.start();
                        }
                    }
                });
            };
            Scheduler.prototype.schedule = function () {
                this.stop();
                this.run();
            };
            Scheduler.prototype.observe = function () {
                var _this = this;
                var cb = function () { return _this.observer && _this.observer.observe(document.body, observerConfig); };
                document.body ? cb() : global.addEventListener('DOMContentLoaded', cb);
            };
            Scheduler.prototype.start = function () {
                var _this = this;
                if (this.stopped) {
                    this.stopped = false;
                    this.observer = new MutationObserver(this.listener);
                    this.observe();
                    events.forEach(function (name) { return global.addEventListener(name, _this.listener, true); });
                }
            };
            Scheduler.prototype.stop = function () {
                var _this = this;
                if (!this.stopped) {
                    this.observer && this.observer.disconnect();
                    events.forEach(function (name) { return global.removeEventListener(name, _this.listener, true); });
                    this.stopped = true;
                }
            };
            return Scheduler;
        }());
        var scheduler = new Scheduler();
        var updateCount = function (n) {
            !watching && n > 0 && scheduler.start();
            watching += n;
            !watching && scheduler.stop();
        };
    
        var skipNotifyOnElement = function (target) {
            return !isSVG(target)
                && !isReplacedElement(target)
                && getComputedStyle(target).display === 'inline';
        };
        var ResizeObservation = (function () {
            function ResizeObservation(target, observedBox) {
                this.target = target;
                this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
                this.lastReportedSize = {
                    inlineSize: 0,
                    blockSize: 0
                };
            }
            ResizeObservation.prototype.isActive = function () {
                var size = calculateBoxSize(this.target, this.observedBox, true);
                if (skipNotifyOnElement(this.target)) {
                    this.lastReportedSize = size;
                }
                if (this.lastReportedSize.inlineSize !== size.inlineSize
                    || this.lastReportedSize.blockSize !== size.blockSize) {
                    return true;
                }
                return false;
            };
            return ResizeObservation;
        }());
    
        var ResizeObserverDetail = (function () {
            function ResizeObserverDetail(resizeObserver, callback) {
                this.activeTargets = [];
                this.skippedTargets = [];
                this.observationTargets = [];
                this.observer = resizeObserver;
                this.callback = callback;
            }
            return ResizeObserverDetail;
        }());
    
        var observerMap = new WeakMap();
        var getObservationIndex = function (observationTargets, target) {
            for (var i = 0; i < observationTargets.length; i += 1) {
                if (observationTargets[i].target === target) {
                    return i;
                }
            }
            return -1;
        };
        var ResizeObserverController = (function () {
            function ResizeObserverController() {
            }
            ResizeObserverController.connect = function (resizeObserver, callback) {
                var detail = new ResizeObserverDetail(resizeObserver, callback);
                observerMap.set(resizeObserver, detail);
            };
            ResizeObserverController.observe = function (resizeObserver, target, options) {
                var detail = observerMap.get(resizeObserver);
                var firstObservation = detail.observationTargets.length === 0;
                if (getObservationIndex(detail.observationTargets, target) < 0) {
                    firstObservation && resizeObservers.push(detail);
                    detail.observationTargets.push(new ResizeObservation(target, options && options.box));
                    updateCount(1);
                    scheduler.schedule();
                }
            };
            ResizeObserverController.unobserve = function (resizeObserver, target) {
                var detail = observerMap.get(resizeObserver);
                var index = getObservationIndex(detail.observationTargets, target);
                var lastObservation = detail.observationTargets.length === 1;
                if (index >= 0) {
                    lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
                    detail.observationTargets.splice(index, 1);
                    updateCount(-1);
                }
            };
            ResizeObserverController.disconnect = function (resizeObserver) {
                var _this = this;
                var detail = observerMap.get(resizeObserver);
                detail.observationTargets.slice().forEach(function (ot) { return _this.unobserve(resizeObserver, ot.target); });
                detail.activeTargets.splice(0, detail.activeTargets.length);
            };
            return ResizeObserverController;
        }());
    
        var ResizeObserver = (function () {
            function ResizeObserver(callback) {
                if (arguments.length === 0) {
                    throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                }
                if (typeof callback !== 'function') {
                    throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                }
                ResizeObserverController.connect(this, callback);
            }
            ResizeObserver.prototype.observe = function (target, options) {
                if (arguments.length === 0) {
                    throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                }
                if (!isElement(target)) {
                    throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                }
                ResizeObserverController.observe(this, target, options);
            };
            ResizeObserver.prototype.unobserve = function (target) {
                if (arguments.length === 0) {
                    throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                }
                if (!isElement(target)) {
                    throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                }
                ResizeObserverController.unobserve(this, target);
            };
            ResizeObserver.prototype.disconnect = function () {
                ResizeObserverController.disconnect(this);
            };
            ResizeObserver.toString = function () {
                return 'function ResizeObserver () { [polyfill code] }';
            };
            return ResizeObserver;
        }());
    
        exports.ResizeObserver = ResizeObserver;
        exports.ResizeObserverEntry = ResizeObserverEntry;
        exports.ResizeObserverSize = ResizeObserverSize;
    
        Object.defineProperty(exports, '__esModule', { value: true });
    
    })));
    ;self.ResizeObserverEntry = ResizeObserver.ResizeObserverEntry;self.ResizeObserver=ResizeObserver.ResizeObserver;
    }
    
    })
    ('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});