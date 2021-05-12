(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js":
/*!******************************************************************!*\
  !*** ./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js ***!
  \******************************************************************/
/*! exports provided: AgmBicyclingLayer, AgmCircle, AgmCoreModule, AgmDataLayer, AgmFitBounds, AgmFullscreenControl, AgmGeocoder, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMapTypeControl, AgmMarker, AgmPanControl, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmRotateControl, AgmScaleControl, AgmStreetViewControl, AgmTransitLayer, AgmZoomControl, CircleManager, DataLayerManager, FitBoundsAccessor, GoogleMapsAPIWrapper, GoogleMapsScriptProtocol, InfoWindowManager, KmlLayerManager, LAZY_MAPS_API_CONFIG, LayerManager, LazyMapsAPILoader, MapsAPILoader, MarkerManager, NoOpMapsAPILoader, PolygonManager, PolylineManager, RectangleManager, coreDirectives, ɵa, ɵb, ɵc, ɵd, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmBicyclingLayer", function() { return AgmBicyclingLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return AgmCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return AgmCoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return AgmDataLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return AgmFitBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmFullscreenControl", function() { return AgmFullscreenControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmGeocoder", function() { return AgmGeocoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return AgmInfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return AgmKmlLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMapTypeControl", function() { return AgmMapTypeControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return AgmMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPanControl", function() { return AgmPanControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return AgmPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return AgmPolyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylineIcon", function() { return AgmPolylineIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return AgmPolylinePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return AgmRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmRotateControl", function() { return AgmRotateControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmScaleControl", function() { return AgmScaleControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmStreetViewControl", function() { return AgmStreetViewControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmTransitLayer", function() { return AgmTransitLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmZoomControl", function() { return AgmZoomControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return FitBoundsAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return GoogleMapsScriptProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return LAZY_MAPS_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerManager", function() { return LayerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return LazyMapsAPILoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return NoOpMapsAPILoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return RectangleManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreDirectives", function() { return coreDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FitBoundsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return AgmMapControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return BROWSER_GLOBALS_PROVIDERS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = ["*"];
class MapsAPILoader {
}
MapsAPILoader.ɵfac = function MapsAPILoader_Factory(t) { return new (t || MapsAPILoader)(); };
MapsAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MapsAPILoader, factory: MapsAPILoader.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapsAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();

/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
class GoogleMapsAPIWrapper {
    constructor(_loader, _zone) {
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise((resolve) => { this._mapResolver = resolve; });
    }
    createMap(el, mapOptions) {
        return this._zone.runOutsideAngular(() => {
            return this._loader.load().then(() => {
                const map = new google.maps.Map(el, mapOptions);
                this._mapResolver(map);
                return;
            });
        });
    }
    setMapOptions(options) {
        return this._zone.runOutsideAngular(() => {
            this._map.then((m) => { m.setOptions(options); });
        });
    }
    /**
     * Creates a google map marker with the map context
     */
    createMarker(options = {}, addToMap = true) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                if (addToMap) {
                    options.map = map;
                }
                return new google.maps.Marker(options);
            });
        });
    }
    createInfoWindow(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then(() => new google.maps.InfoWindow(options));
        });
    }
    /**
     * Creates a google.map.Circle for the current map.
     */
    createCircle(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                options.map = map;
                return new google.maps.Circle(options);
            });
        });
    }
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    createRectangle(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                options.map = map;
                return new google.maps.Rectangle(options);
            });
        });
    }
    createPolyline(options) {
        return this._zone.runOutsideAngular(() => {
            return this.getNativeMap().then((map) => {
                const line = new google.maps.Polyline(options);
                line.setMap(map);
                return line;
            });
        });
    }
    createPolygon(options) {
        return this._zone.runOutsideAngular(() => {
            return this.getNativeMap().then((map) => {
                const polygon = new google.maps.Polygon(options);
                polygon.setMap(map);
                return polygon;
            });
        });
    }
    /**
     * Creates a new google.map.Data layer for the current map
     */
    createDataLayer(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then(m => {
                const data = new google.maps.Data(options);
                data.setMap(m);
                return data;
            });
        });
    }
    /**
     * Creates a TransitLayer instance for a map
     * @returns a new transit layer object
     */
    createTransitLayer() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                const newLayer = new google.maps.TransitLayer();
                newLayer.setMap(map);
                return newLayer;
            });
        });
    }
    /**
     * Creates a BicyclingLayer instance for a map
     * @returns a new bicycling layer object
     */
    createBicyclingLayer() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                const newLayer = new google.maps.BicyclingLayer();
                newLayer.setMap(map);
                return newLayer;
            });
        });
    }
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    containsLocation(latLng, polygon) {
        return this._map.then(() => google.maps.geometry.poly.containsLocation(latLng, polygon));
    }
    subscribeToMapEvent(eventName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._map.then(m => m.addListener(eventName, () => this._zone.run(() => observer.next(arguments[0]))));
        });
    }
    clearInstanceListeners() {
        return this._zone.runOutsideAngular(() => {
            this._map.then((map) => {
                google.maps.event.clearInstanceListeners(map);
            });
        });
    }
    setCenter(latLng) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.setCenter(latLng));
        });
    }
    getZoom() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getZoom());
        });
    }
    getBounds() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getBounds());
        });
    }
    getMapTypeId() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getMapTypeId());
        });
    }
    setZoom(zoom) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.setZoom(zoom));
        });
    }
    getCenter() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getCenter());
        });
    }
    panTo(latLng) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.panTo(latLng));
        });
    }
    panBy(x, y) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.panBy(x, y));
        });
    }
    fitBounds(latLng, padding) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.fitBounds(latLng, padding));
        });
    }
    panToBounds(latLng, padding) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.panToBounds(latLng, padding));
        });
    }
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    getNativeMap() { return this._map; }
    /**
     * Triggers the given event name on the map instance.
     */
    triggerMapEvent(eventName) {
        return this._map.then((m) => google.maps.event.trigger(m, eventName));
    }
}
GoogleMapsAPIWrapper.ɵfac = function GoogleMapsAPIWrapper_Factory(t) { return new (t || GoogleMapsAPIWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
GoogleMapsAPIWrapper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GoogleMapsAPIWrapper, factory: GoogleMapsAPIWrapper.ɵfac });
GoogleMapsAPIWrapper.ctorParameters = () => [
    { type: MapsAPILoader },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleMapsAPIWrapper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: MapsAPILoader }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

class CircleManager {
    constructor(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    addCircle(circle) {
        this._apiWrapper.getNativeMap().then(() => this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: google.maps.StrokePosition[circle.strokePosition],
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex,
        })));
    }
    /**
     * Removes the given circle from the map.
     */
    removeCircle(circle) {
        return this._circles.get(circle).then((c) => {
            c.setMap(null);
            this._circles.delete(circle);
        });
    }
    setOptions(circle, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._circles.get(circle).then((c) => {
                const actualParam = options.strokePosition;
                options.strokePosition = google.maps.StrokePosition[actualParam];
                c.setOptions(options);
            });
        });
    }
    getBounds(circle) {
        return this._circles.get(circle).then((c) => c.getBounds());
    }
    getCenter(circle) {
        return this._circles.get(circle).then((c) => c.getCenter());
    }
    getRadius(circle) {
        return this._circles.get(circle).then((c) => c.getRadius());
    }
    setCenter(circle) {
        return this._circles.get(circle).then(c => c.setCenter({ lat: circle.latitude, lng: circle.longitude }));
    }
    setEditable(circle) {
        return this._circles.get(circle).then(c => c.setEditable(circle.editable));
    }
    setDraggable(circle) {
        return this._circles.get(circle).then(c => c.setDraggable(circle.draggable));
    }
    setVisible(circle) {
        return this._circles.get(circle).then(c => c.setVisible(circle.visible));
    }
    setRadius(circle) {
        return this._circles.get(circle).then(c => c.setRadius(circle.radius));
    }
    getNativeCircle(circle) {
        return this._circles.get(circle);
    }
    createEventObservable(eventName, circle) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            let listener = null;
            this._circles.get(circle).then((c) => {
                listener = c.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
            return () => {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    }
}
CircleManager.ɵfac = function CircleManager_Factory(t) { return new (t || CircleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
CircleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CircleManager, factory: CircleManager.ɵfac });
CircleManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CircleManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

/**
 * Manages all Data Layers for a Google Map instance.
 */
class DataLayerManager {
    constructor(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    addDataLayer(layer) {
        const newLayer = this._wrapper.createDataLayer({
            style: layer.style,
        })
            .then(d => {
            if (layer.geoJson) {
                // NOTE: accessing "features" on google.maps.Data is undocumented
                this.getDataFeatures(d, layer.geoJson).then(features => d.features = features);
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    }
    deleteDataLayer(layer) {
        this._layers.get(layer).then(l => {
            l.setMap(null);
            this._layers.delete(layer);
        });
    }
    updateGeoJson(layer, geoJson) {
        this._layers.get(layer).then(l => {
            l.forEach(feature => {
                l.remove(feature);
                // NOTE: accessing "features" on google.maps.Data is undocumented
                const index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            this.getDataFeatures(l, geoJson).then(features => l.features = features);
        });
    }
    setDataOptions(layer, options) {
        this._layers.get(layer).then(l => {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    }
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    createEventObservable(eventName, layer) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._layers.get(layer).then((d) => {
                d.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    getDataFeatures(d, geoJson) {
        return new Promise((resolve, reject) => {
            if (typeof geoJson === 'object') {
                try {
                    const features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject(`Impossible to extract features from geoJson: wrong argument type`);
            }
        });
    }
}
DataLayerManager.ɵfac = function DataLayerManager_Factory(t) { return new (t || DataLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
DataLayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataLayerManager, factory: DataLayerManager.ɵfac });
DataLayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataLayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
class FitBoundsAccessor {
}
/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
class FitBoundsService {
    constructor(loader) {
        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(() => this._includeInBounds$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(time => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, time)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(includeInBounds => this._generateBounds(includeInBounds)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    }
    _generateBounds(includeInBounds) {
        const bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(b => bounds.extend(b));
        return bounds;
    }
    addToBounds(latLng) {
        const id = this._createIdentifier(latLng);
        if (this._includeInBounds$.value.has(id)) {
            return;
        }
        const boundsMap = this._includeInBounds$.value;
        boundsMap.set(id, latLng);
        this._includeInBounds$.next(boundsMap);
    }
    removeFromBounds(latLng) {
        const boundsMap = this._includeInBounds$.value;
        boundsMap.delete(this._createIdentifier(latLng));
        this._includeInBounds$.next(boundsMap);
    }
    changeFitBoundsChangeSampleTime(timeMs) {
        this._boundsChangeSampleTime$.next(timeMs);
    }
    getBounds$() {
        return this.bounds$;
    }
    _createIdentifier(latLng) {
        return `${latLng.lat}+${latLng.lng}`;
    }
}
FitBoundsService.ɵfac = function FitBoundsService_Factory(t) { return new (t || FitBoundsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader)); };
FitBoundsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FitBoundsService, factory: FitBoundsService.ɵfac });
FitBoundsService.ctorParameters = () => [
    { type: MapsAPILoader }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FitBoundsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: MapsAPILoader }]; }, null); })();

class AgmGeocoder {
    constructor(loader) {
        const connectableGeocoder$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            loader.load().then(() => subscriber.next());
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this._createGeocoder()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["multicast"])(new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1)));
        connectableGeocoder$.connect(); // ignore the subscription
        // since we will remain subscribed till application exits
        this.geocoder$ = connectableGeocoder$;
    }
    geocode(request) {
        return this.geocoder$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((geocoder) => this._getGoogleResults(geocoder, request)));
    }
    _getGoogleResults(geocoder, request) {
        const geocodeObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["bindCallback"])(geocoder.geocode);
        return geocodeObservable(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([results, status]) => {
            if (status === google.maps.GeocoderStatus.OK) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(results);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(status);
        }));
    }
    _createGeocoder() {
        return new google.maps.Geocoder();
    }
}
AgmGeocoder.ɵfac = function AgmGeocoder_Factory(t) { return new (t || AgmGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MapsAPILoader)); };
AgmGeocoder.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function AgmGeocoder_Factory() { return new AgmGeocoder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MapsAPILoader)); }, token: AgmGeocoder, providedIn: "root" });
AgmGeocoder.ctorParameters = () => [
    { type: MapsAPILoader }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmGeocoder, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: MapsAPILoader }]; }, null); })();

class WindowRef {
    getNativeWindow() { return window; }
}
class DocumentRef {
    getNativeDocument() { return document; }
}
const BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];

var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
const LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');
class LazyMapsAPILoader extends MapsAPILoader {
    constructor(config = null, w, d, localeId) {
        super();
        this.localeId = localeId;
        this._SCRIPT_ID = 'agmGoogleMapsApiScript';
        this.callbackName = `agmLazyMapsAPILoader`;
        this._config = config || {};
        this._windowRef = w;
        this._documentRef = d;
    }
    load() {
        const window = this._windowRef.getNativeWindow();
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            return Promise.resolve();
        }
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        // this can happen in HMR situations or Stackblitz.io editors.
        const scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
        if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);
            return this._scriptLoadingPromise;
        }
        const script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.id = this._SCRIPT_ID;
        script.src = this._getScriptSrc(this.callbackName);
        this._assignScriptLoadingPromise(script);
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    }
    _assignScriptLoadingPromise(scriptElem) {
        this._scriptLoadingPromise = new Promise((resolve, reject) => {
            this._windowRef.getNativeWindow()[this.callbackName] = () => {
                resolve();
            };
            scriptElem.onerror = (error) => {
                reject(error);
            };
        });
    }
    _getScriptSrc(callbackName) {
        const protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        let protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        const hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        const queryParams = {
            v: this._config.apiVersion || 'quarterly',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language || (this.localeId !== 'en-US' ? this.localeId : null),
        };
        const params = Object.keys(queryParams)
            .filter((k) => queryParams[k] != null)
            .filter((k) => {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map((k) => {
            // join arrays as comma seperated strings
            const i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map((entry) => {
            return `${entry.key}=${entry.value}`;
        })
            .join('&');
        return `${protocol}//${hostAndPath}?${params}`;
    }
}
LazyMapsAPILoader.ɵfac = function LazyMapsAPILoader_Factory(t) { return new (t || LazyMapsAPILoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](LAZY_MAPS_API_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DocumentRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])); };
LazyMapsAPILoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LazyMapsAPILoader, factory: LazyMapsAPILoader.ɵfac });
LazyMapsAPILoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [LAZY_MAPS_API_CONFIG,] }] },
    { type: WindowRef },
    { type: DocumentRef },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LazyMapsAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [LAZY_MAPS_API_CONFIG]
            }] }, { type: WindowRef }, { type: DocumentRef }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }]; }, null); })();

class MarkerManager {
    constructor(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    convertAnimation(uiAnim) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (uiAnim === null) {
                return null;
            }
            else {
                return this._mapsWrapper.getNativeMap().then(() => google.maps.Animation[uiAnim]);
            }
        });
    }
    deleteMarker(markerDirective) {
        const markerPromise = this._markers.get(markerDirective);
        if (markerPromise == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return markerPromise.then((marker) => {
            return this._zone.run(() => {
                marker.setMap(null);
                this._markers.delete(markerDirective);
            });
        });
    }
    updateMarkerPosition(marker) {
        return this._markers.get(marker).then((m) => m.setPosition({ lat: marker.latitude, lng: marker.longitude }));
    }
    updateTitle(marker) {
        return this._markers.get(marker).then((m) => m.setTitle(marker.title));
    }
    updateLabel(marker) {
        return this._markers.get(marker).then((m) => { m.setLabel(marker.label); });
    }
    updateDraggable(marker) {
        return this._markers.get(marker).then((m) => m.setDraggable(marker.draggable));
    }
    updateIcon(marker) {
        return this._markers.get(marker).then((m) => m.setIcon(marker.iconUrl));
    }
    updateOpacity(marker) {
        return this._markers.get(marker).then((m) => m.setOpacity(marker.opacity));
    }
    updateVisible(marker) {
        return this._markers.get(marker).then((m) => m.setVisible(marker.visible));
    }
    updateZIndex(marker) {
        return this._markers.get(marker).then((m) => m.setZIndex(marker.zIndex));
    }
    updateClickable(marker) {
        return this._markers.get(marker).then((m) => m.setClickable(marker.clickable));
    }
    updateAnimation(marker) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const m = yield this._markers.get(marker);
            m.setAnimation(yield this.convertAnimation(marker.animation));
        });
    }
    addMarker(marker) {
        const markerPromise = new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._mapsWrapper.createMarker({
                position: { lat: marker.latitude, lng: marker.longitude },
                label: marker.label,
                draggable: marker.draggable,
                icon: marker.iconUrl,
                opacity: marker.opacity,
                visible: marker.visible,
                zIndex: marker.zIndex,
                title: marker.title,
                clickable: marker.clickable,
                animation: yield this.convertAnimation(marker.animation),
            }).then(resolve);
        }));
        this._markers.set(marker, markerPromise);
    }
    getNativeMarker(marker) {
        return this._markers.get(marker);
    }
    createEventObservable(eventName, marker) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this._markers.get(marker).then(m => m.addListener(eventName, e => this._zone.run(() => observer.next(e))));
        });
    }
}
MarkerManager.ɵfac = function MarkerManager_Factory(t) { return new (t || MarkerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
MarkerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MarkerManager, factory: MarkerManager.ɵfac });
MarkerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MarkerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

class InfoWindowManager {
    constructor(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    deleteInfoWindow(infoWindow) {
        const iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then((i) => {
            return this._zone.run(() => {
                i.close();
                this._infoWindows.delete(infoWindow);
            });
        });
    }
    setPosition(infoWindow) {
        return this._infoWindows.get(infoWindow).then((i) => i.setPosition({
            lat: infoWindow.latitude,
            lng: infoWindow.longitude,
        }));
    }
    setZIndex(infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then((i) => i.setZIndex(infoWindow.zIndex));
    }
    open(infoWindow) {
        return this._infoWindows.get(infoWindow).then((w) => {
            if (infoWindow.hostMarker != null) {
                return this._markerManager.getNativeMarker(infoWindow.hostMarker).then((marker) => {
                    return this._mapsWrapper.getNativeMap().then((map) => w.open(map, marker));
                });
            }
            return this._mapsWrapper.getNativeMap().then((map) => w.open(map));
        });
    }
    close(infoWindow) {
        return this._infoWindows.get(infoWindow).then((w) => w.close());
    }
    setOptions(infoWindow, options) {
        return this._infoWindows.get(infoWindow).then((i) => i.setOptions(options));
    }
    addInfoWindow(infoWindow) {
        const options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan,
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        const infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    }
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    createEventObservable(eventName, infoWindow) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._infoWindows.get(infoWindow).then((i) => {
                i.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
}
InfoWindowManager.ɵfac = function InfoWindowManager_Factory(t) { return new (t || InfoWindowManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MarkerManager)); };
InfoWindowManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InfoWindowManager, factory: InfoWindowManager.ɵfac });
InfoWindowManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: MarkerManager }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InfoWindowManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: MarkerManager }]; }, null); })();

/**
 * Manages all KML Layers for a Google Map instance.
 */
class KmlLayerManager {
    constructor(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    addKmlLayer(layer) {
        const newLayer = this._wrapper.getNativeMap().then(m => {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex,
            });
        });
        this._layers.set(layer, newLayer);
    }
    setOptions(layer, options) {
        this._layers.get(layer).then(l => l.setOptions(options));
    }
    deleteKmlLayer(layer) {
        this._layers.get(layer).then(l => {
            l.setMap(null);
            this._layers.delete(layer);
        });
    }
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    createEventObservable(eventName, layer) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._layers.get(layer).then((m) => {
                m.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
}
KmlLayerManager.ɵfac = function KmlLayerManager_Factory(t) { return new (t || KmlLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
KmlLayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: KmlLayerManager, factory: KmlLayerManager.ɵfac });
KmlLayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KmlLayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

/**
 * This class manages Transit and Bicycling Layers for a Google Map instance.
 */
class LayerManager {
    constructor(_wrapper) {
        this._wrapper = _wrapper;
        this._layers = new Map();
    }
    /**
     * Adds a transit layer to a map instance.
     * @param layer - a TransitLayer object
     * @param _options - TransitLayerOptions options
     * @returns void
     */
    addTransitLayer(layer) {
        const newLayer = this._wrapper.createTransitLayer();
        this._layers.set(layer, newLayer);
    }
    /**
     * Adds a bicycling layer to a map instance.
     * @param layer - a bicycling layer object
     * @param _options - BicyclingLayer options
     * @returns void
     */
    addBicyclingLayer(layer) {
        const newLayer = this._wrapper.createBicyclingLayer();
        this._layers.set(layer, newLayer);
    }
    /**
     * Deletes a map layer
     * @param layer - the layer to delete
     */
    deleteLayer(layer) {
        return this._layers.get(layer).then(currentLayer => {
            currentLayer.setMap(null);
            this._layers.delete(layer);
        });
    }
}
LayerManager.ɵfac = function LayerManager_Factory(t) { return new (t || LayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper)); };
LayerManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LayerManager, factory: LayerManager.ɵfac });
LayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }]; }, null); })();

/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
class NoOpMapsAPILoader {
    load() {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    }
}

function createMVCEventObservable(array) {
    const eventNames = ['insert_at', 'remove_at', 'set_at'];
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(handler => eventNames.map(eventName => array.addListener(eventName, (index, previous) => handler.apply(array, [{ newArr: array.getArray(), eventName, index, previous }]))), (_handler, evListeners) => evListeners.forEach(evListener => evListener.remove()));
}
class MvcArrayMock {
    constructor() {
        this.vals = [];
        this.listeners = {
            remove_at: [],
            insert_at: [],
            set_at: [],
        };
    }
    clear() {
        for (let i = this.vals.length - 1; i >= 0; i--) {
            this.removeAt(i);
        }
    }
    getArray() {
        return [...this.vals];
    }
    getAt(i) {
        return this.vals[i];
    }
    getLength() {
        return this.vals.length;
    }
    insertAt(i, elem) {
        this.vals.splice(i, 0, elem);
        this.listeners.insert_at.forEach(listener => listener(i));
    }
    pop() {
        const deleted = this.vals.pop();
        this.listeners.remove_at.forEach(listener => listener(this.vals.length, deleted));
        return deleted;
    }
    push(elem) {
        this.vals.push(elem);
        this.listeners.insert_at.forEach(listener => listener(this.vals.length - 1));
        return this.vals.length;
    }
    removeAt(i) {
        const deleted = this.vals.splice(i, 1)[0];
        this.listeners.remove_at.forEach(listener => listener(i, deleted));
        return deleted;
    }
    setAt(i, elem) {
        const deleted = this.vals[i];
        this.vals[i] = elem;
        this.listeners.set_at.forEach(listener => listener(i, deleted));
    }
    forEach(callback) {
        this.vals.forEach(callback);
    }
    addListener(eventName, handler) {
        const listenerArr = this.listeners[eventName];
        listenerArr.push(handler);
        return {
            remove: () => {
                listenerArr.splice(listenerArr.indexOf(handler), 1);
            },
        };
    }
    bindTo() { throw new Error('Not implemented'); }
    changed() { throw new Error('Not implemented'); }
    get() { throw new Error('Not implemented'); }
    notify() { throw new Error('Not implemented'); }
    set() { throw new Error('Not implemented'); }
    setValues() { throw new Error('Not implemented'); }
    unbind() { throw new Error('Not implemented'); }
    unbindAll() { throw new Error('Not implemented'); }
}

class PolygonManager {
    constructor(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    addPolygon(path) {
        const polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    }
    updatePolygon(polygon) {
        const m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => this._zone.run(() => { l.setPaths(polygon.paths); }));
    }
    setPolygonOptions(path, options) {
        return this._polygons.get(path).then((l) => { l.setOptions(options); });
    }
    deletePolygon(paths) {
        const m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => {
            return this._zone.run(() => {
                l.setMap(null);
                this._polygons.delete(paths);
            });
        });
    }
    getPath(polygonDirective) {
        return this._polygons.get(polygonDirective)
            .then((polygon) => polygon.getPath().getArray());
    }
    getPaths(polygonDirective) {
        return this._polygons.get(polygonDirective)
            .then((polygon) => polygon.getPaths().getArray().map((p) => p.getArray()));
    }
    createEventObservable(eventName, path) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._polygons.get(path).then((l) => {
                l.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
    createPathEventObservable(agmPolygon) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const polygon = yield this._polygons.get(agmPolygon);
            const paths = polygon.getPaths();
            const pathsChanges$ = createMVCEventObservable(paths);
            return pathsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ newArr: paths.getArray() }), // in order to subscribe to them all
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(parentMVEvent => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(... // rest parameter
            parentMVEvent.newArr.map((chMVC, index) => createMVCEventObservable(chMVC)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(chMVCEvent => ({ parentMVEvent, chMVCEvent, pathIndex: index })))))
                .pipe(// start the merged ob with an event signinifing change to parent
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ parentMVEvent, chMVCEvent: null, pathIndex: null }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), // skip the manually added event
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ parentMVEvent, chMVCEvent, pathIndex }) => {
                let retVal;
                if (!chMVCEvent) {
                    retVal = {
                        newArr: parentMVEvent.newArr.map(subArr => subArr.getArray().map(latLng => latLng.toJSON())),
                        eventName: parentMVEvent.eventName,
                        index: parentMVEvent.index,
                    };
                    if (parentMVEvent.previous) {
                        retVal.previous = parentMVEvent.previous.getArray();
                    }
                }
                else {
                    retVal = {
                        newArr: parentMVEvent.newArr.map(subArr => subArr.getArray().map(latLng => latLng.toJSON())),
                        pathIndex,
                        eventName: chMVCEvent.eventName,
                        index: chMVCEvent.index,
                    };
                    if (chMVCEvent.previous) {
                        retVal.previous = chMVCEvent.previous;
                    }
                }
                return retVal;
            }));
        });
    }
}
PolygonManager.ɵfac = function PolygonManager_Factory(t) { return new (t || PolygonManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
PolygonManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PolygonManager, factory: PolygonManager.ɵfac });
PolygonManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PolygonManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

class PolylineManager {
    constructor(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    static _convertPoints(line) {
        const path = line._getPoints().map((point) => {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    }
    static _convertPath(path) {
        const symbolPath = google.maps.SymbolPath[path];
        if (typeof symbolPath === 'number') {
            return symbolPath;
        }
        else {
            return path;
        }
    }
    static _convertIcons(line) {
        const icons = line._getIcons().map(agmIcon => ({
            fixedRotation: agmIcon.fixedRotation,
            offset: agmIcon.offset,
            repeat: agmIcon.repeat,
            icon: {
                anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
                fillColor: agmIcon.fillColor,
                fillOpacity: agmIcon.fillOpacity,
                path: PolylineManager._convertPath(agmIcon.path),
                rotation: agmIcon.rotation,
                scale: agmIcon.scale,
                strokeColor: agmIcon.strokeColor,
                strokeOpacity: agmIcon.strokeOpacity,
                strokeWeight: agmIcon.strokeWeight,
            },
        }));
        // prune undefineds;
        icons.forEach(icon => {
            Object.entries(icon).forEach(([key, val]) => {
                if (typeof val === 'undefined') {
                    delete icon[key];
                }
            });
            if (typeof icon.icon.anchor.x === 'undefined' ||
                typeof icon.icon.anchor.y === 'undefined') {
                delete icon.icon.anchor;
            }
        });
        return icons;
    }
    addPolyline(line) {
        const polylinePromise = this._mapsWrapper.getNativeMap()
            .then(() => [PolylineManager._convertPoints(line),
            PolylineManager._convertIcons(line)])
            .then(([path, icons]) => this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path,
            icons,
        }));
        this._polylines.set(line, polylinePromise);
    }
    updatePolylinePoints(line) {
        const path = PolylineManager._convertPoints(line);
        const m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => this._zone.run(() => l.setPath(path)));
    }
    updateIconSequences(line) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._mapsWrapper.getNativeMap();
            const icons = PolylineManager._convertIcons(line);
            const m = this._polylines.get(line);
            if (m == null) {
                return;
            }
            return m.then(l => this._zone.run(() => l.setOptions({ icons })));
        });
    }
    setPolylineOptions(line, options) {
        return this._polylines.get(line).then((l) => { l.setOptions(options); });
    }
    deletePolyline(line) {
        const m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => {
            return this._zone.run(() => {
                l.setMap(null);
                this._polylines.delete(line);
            });
        });
    }
    getMVCPath(agmPolyline) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const polyline = yield this._polylines.get(agmPolyline);
            return polyline.getPath();
        });
    }
    getPath(agmPolyline) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.getMVCPath(agmPolyline)).getArray();
        });
    }
    createEventObservable(eventName, line) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._polylines.get(line).then((l) => {
                l.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
    createPathEventObservable(line) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const mvcPath = yield this.getMVCPath(line);
            return createMVCEventObservable(mvcPath);
        });
    }
}
PolylineManager.ɵfac = function PolylineManager_Factory(t) { return new (t || PolylineManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
PolylineManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PolylineManager, factory: PolylineManager.ɵfac });
PolylineManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PolylineManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

class RectangleManager {
    constructor(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    addRectangle(rectangle) {
        this._apiWrapper.getNativeMap().then(() => this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west,
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: google.maps.StrokePosition[rectangle.strokePosition],
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex,
        })));
    }
    /**
     * Removes the given rectangle from the map.
     */
    removeRectangle(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            r.setMap(null);
            this._rectangles.delete(rectangle);
        });
    }
    setOptions(rectangle, options) {
        return this._rectangles.get(rectangle).then((r) => {
            const actualStrokePosition = options.strokePosition;
            options.strokePosition = google.maps.StrokePosition[actualStrokePosition];
            r.setOptions(options);
        });
    }
    getBounds(rectangle) {
        return this._rectangles.get(rectangle).then((r) => r.getBounds());
    }
    setBounds(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west,
            });
        });
    }
    setEditable(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setEditable(rectangle.editable);
        });
    }
    setDraggable(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setDraggable(rectangle.draggable);
        });
    }
    setVisible(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setVisible(rectangle.visible);
        });
    }
    createEventObservable(eventName, rectangle) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((subsrciber) => {
            let listener = null;
            this._rectangles.get(rectangle).then((r) => {
                listener = r.addListener(eventName, (e) => this._zone.run(() => subsrciber.next(e)));
            });
            return () => {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    }
}
RectangleManager.ɵfac = function RectangleManager_Factory(t) { return new (t || RectangleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
RectangleManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RectangleManager, factory: RectangleManager.ɵfac });
RectangleManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RectangleManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: GoogleMapsAPIWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();

let layerId = 0;
/*
 * This directive adds a bicycling layer to a google map instance
 * <agm-bicycling-layer [visible]="true|false"> <agm-bicycling-layer>
 * */
class AgmBicyclingLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        /**
         * Hide/show bicycling layer
         */
        this.visible = true;
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addBicyclingLayer(this);
        this._addedToManager = true;
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmBicyclingLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteLayer(this);
    }
}
AgmBicyclingLayer.ɵfac = function AgmBicyclingLayer_Factory(t) { return new (t || AgmBicyclingLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerManager)); };
AgmBicyclingLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmBicyclingLayer, selectors: [["agm-bicycling-layer"]], inputs: { visible: "visible" } });
AgmBicyclingLayer.ctorParameters = () => [
    { type: LayerManager }
];
AgmBicyclingLayer.propDecorators = {
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmBicyclingLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-bicycling-layer'
            }]
    }], function () { return [{ type: LayerManager }]; }, { visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

class AgmCircle {
    constructor(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        // tslint:disable-next-line: no-output-native
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    ngOnInit() {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        // tslint:disable: no-string-literal
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        // tslint:enable: no-string-literal
        this._updateCircleOptionsChanges(changes);
    }
    _updateCircleOptionsChanges(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmCircle._mapOptions.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _registerEventListeners() {
        const events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragstart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach((eventEmitter, eventName) => {
            this._eventSubscriptions.push(this._manager.createEventObservable(eventName, this).subscribe((value) => {
                switch (eventName) {
                    case 'radius_changed':
                        this._manager.getRadius(this).then((radius) => eventEmitter.emit(radius));
                        break;
                    case 'center_changed':
                        this._manager.getCenter(this).then((center) => eventEmitter.emit({ lat: center.lat(), lng: center.lng() }));
                        break;
                    default:
                        eventEmitter.emit(value);
                }
            }));
        });
    }
    /** @internal */
    ngOnDestroy() {
        this._eventSubscriptions.forEach(s => s.unsubscribe());
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    }
    /**
     * Gets the LatLngBounds of this Circle.
     */
    getBounds() { return this._manager.getBounds(this); }
    getCenter() { return this._manager.getCenter(this); }
}
AgmCircle.ɵfac = function AgmCircle_Factory(t) { return new (t || AgmCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CircleManager)); };
AgmCircle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmCircle, selectors: [["agm-circle"]], inputs: { clickable: "clickable", draggable: ["circleDraggable", "draggable"], editable: "editable", radius: "radius", strokePosition: "strokePosition", strokeWeight: "strokeWeight", visible: "visible", latitude: "latitude", longitude: "longitude", fillColor: "fillColor", fillOpacity: "fillOpacity", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", zIndex: "zIndex" }, outputs: { centerChange: "centerChange", circleClick: "circleClick", circleDblClick: "circleDblClick", drag: "drag", dragEnd: "dragEnd", dragStart: "dragStart", mouseDown: "mouseDown", mouseMove: "mouseMove", mouseOut: "mouseOut", mouseOver: "mouseOver", mouseUp: "mouseUp", radiusChange: "radiusChange", rightClick: "rightClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmCircle._mapOptions = [
    'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
    'visible', 'zIndex', 'clickable',
];
AgmCircle.ctorParameters = () => [
    { type: CircleManager }
];
AgmCircle.propDecorators = {
    latitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    longitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['circleDraggable',] }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    radius: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    centerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    circleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    circleDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    drag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    radiusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    rightClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmCircle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-circle'
            }]
    }], function () { return [{ type: CircleManager }]; }, { clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['circleDraggable']
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], centerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], circleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], circleDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], drag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], radiusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], rightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fillColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fillOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

let layerId$1 = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
class AgmDataLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$1++).toString();
        this._subscriptions = [];
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The geoJson to be displayed
         */
        this.geoJson = null;
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const listeners = [
            { name: 'click', handler: (ev) => this.layerClick.emit(ev) },
        ];
        listeners.forEach((obj) => {
            const os = this._manager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmDataLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(s => s.unsubscribe());
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._addedToManager) {
            return;
        }
        // tslint:disable-next-line: no-string-literal
        const geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        const dataOptions = AgmDataLayer._dataOptionsAttributes.reduce((options, k) => options[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : this[k], {});
        this._manager.setDataOptions(this, dataOptions);
    }
}
AgmDataLayer.ɵfac = function AgmDataLayer_Factory(t) { return new (t || AgmDataLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DataLayerManager)); };
AgmDataLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmDataLayer, selectors: [["agm-data-layer"]], inputs: { geoJson: "geoJson", style: "style" }, outputs: { layerClick: "layerClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmDataLayer._dataOptionsAttributes = ['style'];
AgmDataLayer.ctorParameters = () => [
    { type: DataLayerManager }
];
AgmDataLayer.propDecorators = {
    layerClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    geoJson: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmDataLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-data-layer'
            }]
    }], function () { return [{ type: DataLayerManager }]; }, { layerClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], geoJson: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
class AgmFitBounds {
    constructor(_fitBoundsAccessor, _fitBoundsService) {
        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
         * If the value is true, the element gets added to the bounds of the map.
         * Default: true.
         */
        this.agmFitBounds = true;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._latestFitBoundsDetails = null;
    }
    /**
     * @internal
     */
    ngOnChanges() {
        this._updateBounds();
    }
    /**
     * @internal
     */
    ngOnInit() {
        this._fitBoundsAccessor
            .getFitBoundsDetails$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])((x, y) => x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$))
            .subscribe(details => this._updateBounds(details));
    }
    /*
     Either the location changed, or visible status changed.
     Possible state changes are
     invisible -> visible
     visible -> invisible
     visible -> visible (new location)
    */
    _updateBounds(newFitBoundsDetails) {
        // either visibility will change, or location, so remove the old one anyway
        if (this._latestFitBoundsDetails) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
            // don't set latestFitBoundsDetails to null, because we can toggle visibility from
            // true -> false -> true, in which case we still need old value cached here
        }
        if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
        }
        if (!this._latestFitBoundsDetails) {
            return;
        }
        if (this.agmFitBounds === true) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        }
    }
    /**
     * @internal
     */
    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
        if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    }
}
AgmFitBounds.ɵfac = function AgmFitBounds_Factory(t) { return new (t || AgmFitBounds)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsAccessor, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsService)); };
AgmFitBounds.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmFitBounds, selectors: [["", "agmFitBounds", ""]], inputs: { agmFitBounds: "agmFitBounds" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmFitBounds.ctorParameters = () => [
    { type: FitBoundsAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
    { type: FitBoundsService }
];
AgmFitBounds.propDecorators = {
    agmFitBounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmFitBounds, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[agmFitBounds]'
            }]
    }], function () { return [{ type: FitBoundsAccessor, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }] }, { type: FitBoundsService }]; }, { agmFitBounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

let infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
class AgmInfoWindow {
    constructor(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */
        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */
        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    ngOnInit() {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        // tslint:disable: no-string-literal
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    }
    // tslint:enable: no-string-literal
    _registerEventListeners() {
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(() => {
            this.isOpen = false;
            this.infoWindowClose.emit();
        });
    }
    _updateOpenState() {
        this.isOpen ? this.open() : this.close();
    }
    _setInfoWindowOptions(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmInfoWindow._infoWindowOptionsInputs.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    }
    /**
     * Opens the info window.
     */
    open() { return this._infoWindowManager.open(this); }
    /**
     * Closes the info window.
     */
    close() {
        return this._infoWindowManager.close(this).then(() => { this.infoWindowClose.emit(); });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return 'AgmInfoWindow-' + this._id.toString(); }
    /** @internal */
    ngOnDestroy() { this._infoWindowManager.deleteInfoWindow(this); }
}
AgmInfoWindow.ɵfac = function AgmInfoWindow_Factory(t) { return new (t || AgmInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](InfoWindowManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
AgmInfoWindow.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AgmInfoWindow, selectors: [["agm-info-window"]], inputs: { isOpen: "isOpen", latitude: "latitude", longitude: "longitude", disableAutoPan: "disableAutoPan", zIndex: "zIndex", maxWidth: "maxWidth" }, outputs: { infoWindowClose: "infoWindowClose" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "agm-info-window-content"]], template: function AgmInfoWindow_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
AgmInfoWindow.ctorParameters = () => [
    { type: InfoWindowManager },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AgmInfoWindow.propDecorators = {
    latitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    longitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disableAutoPan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    infoWindowClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmInfoWindow, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'agm-info-window',
                template: `<div class='agm-info-window-content'>
      <ng-content></ng-content>
    </div>
  `
            }]
    }], function () { return [{ type: InfoWindowManager }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], infoWindowClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disableAutoPan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

let layerId$2 = 0;
class AgmKmlLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$2++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */
        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */
        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */
        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */
        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */
        this.url = null;
        /**
         * The z-index of the layer.
         */
        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */
        this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */
        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    }
    ngOnChanges(changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    }
    _updatePolygonOptions(changes) {
        const options = Object.keys(changes)
            .filter(k => AgmKmlLayer._kmlLayerOptions.indexOf(k) !== -1)
            .reduce((obj, k) => {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _addEventListeners() {
        const listeners = [
            { name: 'click', handler: (ev) => this.layerClick.emit(ev) },
            { name: 'defaultviewport_changed', handler: () => this.defaultViewportChange.emit() },
            { name: 'status_changed', handler: () => this.statusChange.emit() },
        ];
        listeners.forEach((obj) => {
            const os = this._manager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmKmlLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(s => s.unsubscribe());
    }
}
AgmKmlLayer.ɵfac = function AgmKmlLayer_Factory(t) { return new (t || AgmKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](KmlLayerManager)); };
AgmKmlLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmKmlLayer, selectors: [["agm-kml-layer"]], inputs: { clickable: "clickable", preserveViewport: "preserveViewport", screenOverlays: "screenOverlays", suppressInfoWindows: "suppressInfoWindows", url: "url", zIndex: "zIndex" }, outputs: { layerClick: "layerClick", defaultViewportChange: "defaultViewportChange", statusChange: "statusChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
AgmKmlLayer.ctorParameters = () => [
    { type: KmlLayerManager }
];
AgmKmlLayer.propDecorators = {
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    preserveViewport: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    screenOverlays: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    suppressInfoWindows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    layerClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    defaultViewportChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    statusChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmKmlLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-kml-layer'
            }]
    }], function () { return [{ type: KmlLayerManager }]; }, { clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], preserveViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], screenOverlays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], suppressInfoWindows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], layerClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], defaultViewportChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], statusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();

class AgmMapControl {
}
AgmMapControl.ɵfac = function AgmMapControl_Factory(t) { return new (t || AgmMapControl)(); };
AgmMapControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmMapControl, inputs: { position: "position" } });
AgmMapControl.propDecorators = {
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMapControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
    }], null, { position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
class AgmFullscreenControl extends AgmMapControl {
    getOptions() {
        return {
            fullscreenControl: true,
            fullscreenControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmFullscreenControl.ɵfac = function AgmFullscreenControl_Factory(t) { return ɵAgmFullscreenControl_BaseFactory(t || AgmFullscreenControl); };
AgmFullscreenControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmFullscreenControl, selectors: [["agm-fullscreen-control"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: AgmMapControl, useExisting: AgmFullscreenControl }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
const ɵAgmFullscreenControl_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmFullscreenControl);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmFullscreenControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-map agm-fullscreen-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmFullscreenControl }]
            }]
    }], null, null); })();
class AgmMapTypeControl extends AgmMapControl {
    getOptions() {
        return {
            mapTypeControl: true,
            mapTypeControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
                style: this.style && google.maps.MapTypeControlStyle[this.style],
                mapTypeIds: this.mapTypeIds && this.mapTypeIds.map(mapTypeId => google.maps.MapTypeId[mapTypeId]),
            },
        };
    }
}
AgmMapTypeControl.ɵfac = function AgmMapTypeControl_Factory(t) { return ɵAgmMapTypeControl_BaseFactory(t || AgmMapTypeControl); };
AgmMapTypeControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmMapTypeControl, selectors: [["agm-map-type-control"]], inputs: { mapTypeIds: "mapTypeIds", style: "style" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: AgmMapControl, useExisting: AgmMapTypeControl }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
AgmMapTypeControl.propDecorators = {
    mapTypeIds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
const ɵAgmMapTypeControl_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmMapTypeControl);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMapTypeControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-map agm-map-type-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmMapTypeControl }]
            }]
    }], null, { mapTypeIds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
class AgmPanControl extends AgmMapControl {
    getOptions() {
        return {
            panControl: true,
            panControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmPanControl.ɵfac = function AgmPanControl_Factory(t) { return ɵAgmPanControl_BaseFactory(t || AgmPanControl); };
AgmPanControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmPanControl, selectors: [["agm-pan-control"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: AgmMapControl, useExisting: AgmPanControl }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
const ɵAgmPanControl_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmPanControl);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPanControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-map agm-pan-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmPanControl }]
            }]
    }], null, null); })();
class AgmRotateControl extends AgmMapControl {
    getOptions() {
        return {
            rotateControl: true,
            rotateControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmRotateControl.ɵfac = function AgmRotateControl_Factory(t) { return ɵAgmRotateControl_BaseFactory(t || AgmRotateControl); };
AgmRotateControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmRotateControl, selectors: [["agm-rotate-control"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: AgmMapControl, useExisting: AgmRotateControl }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
const ɵAgmRotateControl_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmRotateControl);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmRotateControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-map agm-rotate-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmRotateControl }]
            }]
    }], null, null); })();
class AgmScaleControl extends AgmMapControl {
    getOptions() {
        return {
            scaleControl: true,
        };
    }
}
AgmScaleControl.ɵfac = function AgmScaleControl_Factory(t) { return ɵAgmScaleControl_BaseFactory(t || AgmScaleControl); };
AgmScaleControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmScaleControl, selectors: [["agm-scale-control"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: AgmMapControl, useExisting: AgmScaleControl }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
const ɵAgmScaleControl_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmScaleControl);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmScaleControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-map agm-scale-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmScaleControl }]
            }]
    }], null, null); })();
class AgmStreetViewControl extends AgmMapControl {
    getOptions() {
        return {
            streetViewControl: true,
            streetViewControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
            },
        };
    }
}
AgmStreetViewControl.ɵfac = function AgmStreetViewControl_Factory(t) { return ɵAgmStreetViewControl_BaseFactory(t || AgmStreetViewControl); };
AgmStreetViewControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmStreetViewControl, selectors: [["agm-street-view-control"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: AgmMapControl, useExisting: AgmStreetViewControl }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
const ɵAgmStreetViewControl_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmStreetViewControl);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmStreetViewControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-map agm-street-view-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmStreetViewControl }]
            }]
    }], null, null); })();
class AgmZoomControl extends AgmMapControl {
    getOptions() {
        return {
            zoomControl: true,
            zoomControlOptions: {
                position: this.position && google.maps.ControlPosition[this.position],
                style: this.style && google.maps.ZoomControlStyle[this.style],
            },
        };
    }
}
AgmZoomControl.ɵfac = function AgmZoomControl_Factory(t) { return ɵAgmZoomControl_BaseFactory(t || AgmZoomControl); };
AgmZoomControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmZoomControl, selectors: [["agm-zoom-control"]], inputs: { style: "style" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: AgmMapControl, useExisting: AgmZoomControl }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
AgmZoomControl.propDecorators = {
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
const ɵAgmZoomControl_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AgmZoomControl);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmZoomControl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-map agm-zoom-control',
                providers: [{ provide: AgmMapControl, useExisting: AgmZoomControl }]
            }]
    }], null, { style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
class AgmMap {
    constructor(_elem, _mapsWrapper, 
    // tslint:disable-next-line: ban-types
    _platformId, _fitBoundsService, _zone) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._platformId = _platformId;
        this._fitBoundsService = _fitBoundsService;
        this._zone = _zone;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * Sets the viewport to contain the given bounds.
         * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
         */
        this.fitBounds = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */
        this.mapTypeId = 'ROADMAP';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */
        this.clickableIcons = true;
        /**
         * A map icon represents a point of interest, also known as a POI.
         * When map icons are clickable by default, an info window is displayed.
         * When this property is set to false, the info window will not be shown but the click event
         * will still fire
         */
        this.showDefaultInfoWindow = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */
        this.gestureHandling = 'auto';
        /**
         * Controls the automatic switching behavior for the angle of incidence of
         * the map. The only allowed values are 0 and 45. The value 0 causes the map
         * to always use a 0° overhead view regardless of the zoom level and
         * viewport. The value 45 causes the tilt angle to automatically switch to
         * 45 whenever 45° imagery is available for the current zoom level and
         * viewport, and switch back to 0 whenever 45° imagery is not available
         * (this is the default behavior). 45° imagery is only available for
         * satellite and hybrid map types, within some locations, and at some zoom
         * levels. Note: getTilt returns the current tilt angle, not the value
         * specified by this option. Because getTilt and this option refer to
         * different things, do not bind() the tilt property; doing so may yield
         * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
         */
        this.tilt = 0;
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        // tslint:disable-next-line: max-line-length
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the mapTypeId property changes.
         */
        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the visible tiles have finished loading.
         */
        this.tilesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /** @internal */
    ngAfterContentInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(this._platformId)) {
            // The code is running on the server, do nothing
            return;
        }
        // todo: this should be solved with a new component and a viewChild decorator
        const container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    }
    _initMapInstance(el) {
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            controlSize: this.controlSize,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            mapTypeId: this.mapTypeId.toLocaleLowerCase(),
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling,
            tilt: this.tilt,
            restriction: this.restriction,
        })
            .then(() => this._mapsWrapper.getNativeMap())
            .then(map => this.mapReady.emit(map));
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleTilesLoadedEvent();
        this._handleIdleEvent();
        this._handleControlChange();
    }
    /** @internal */
    ngOnDestroy() {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    }
    /* @internal */
    ngOnChanges(changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    }
    _updateMapOptionsChanges(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmMap._mapOptionsAttributes.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    }
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    triggerResize(recenter = true) {
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise((resolve) => {
            setTimeout(() => {
                return this._mapsWrapper.triggerMapEvent('resize').then(() => {
                    if (recenter) {
                        this.fitBounds != null ? this._fitBounds() : this._setCenter();
                    }
                    resolve();
                });
            });
        });
    }
    _updatePosition(changes) {
        // tslint:disable: no-string-literal
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // tslint:enable: no-string-literal
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    }
    _setCenter() {
        const newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    }
    _fitBounds() {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                this._updateBounds(this.fitBounds, this.fitBoundsPadding);
        }
    }
    _subscribeToFitBoundsUpdates() {
        this._zone.runOutsideAngular(() => {
            this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(b => {
                this._zone.run(() => this._updateBounds(b, this.fitBoundsPadding));
            });
        });
    }
    _updateBounds(bounds, padding) {
        if (!bounds) {
            return;
        }
        if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
            const newBounds = new google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds, padding);
            return;
        }
        this._mapsWrapper.fitBounds(bounds, padding);
    }
    _isLatLngBoundsLiteral(bounds) {
        return bounds != null && bounds.extend === undefined;
    }
    _handleMapCenterChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(() => {
            this._mapsWrapper.getCenter().then((center) => {
                this.latitude = center.lat();
                this.longitude = center.lng();
                this.centerChange.emit({ lat: this.latitude, lng: this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    }
    _handleBoundsChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(() => {
            this._mapsWrapper.getBounds().then((bounds) => { this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    }
    _handleMapTypeIdChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(() => {
            this._mapsWrapper.getMapTypeId().then((mapTypeId) => { this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    }
    _handleMapZoomChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(() => {
            this._mapsWrapper.getZoom().then((z) => {
                this.zoom = z;
                this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    }
    _handleIdleEvent() {
        const s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(() => { this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    }
    _handleTilesLoadedEvent() {
        const s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(() => this.tilesLoaded.emit(void 0));
        this._observableSubscriptions.push(s);
    }
    _handleMapMouseEvents() {
        const events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach(e => {
            const s = this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(([event]) => {
                // the placeId will be undefined in case the event was not an IconMouseEvent (google types)
                if (event.placeId && !this.showDefaultInfoWindow) {
                    event.stop();
                }
                e.emitter.emit(event);
            });
            this._observableSubscriptions.push(s);
        });
    }
    _handleControlChange() {
        this._setControls();
        this.mapControls.changes.subscribe(() => this._setControls());
    }
    _setControls() {
        const controlOptions = {
            fullscreenControl: !this.disableDefaultUI,
            mapTypeControl: false,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            streetViewControl: !this.disableDefaultUI,
            zoomControl: !this.disableDefaultUI,
        };
        this._mapsWrapper.getNativeMap().then(() => {
            this.mapControls.forEach(control => Object.assign(controlOptions, control.getOptions()));
            this._mapsWrapper.setMapOptions(controlOptions);
        });
    }
}
AgmMap.ɵfac = function AgmMap_Factory(t) { return new (t || AgmMap)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FitBoundsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
AgmMap.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AgmMap, selectors: [["agm-map"]], contentQueries: function AgmMap_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmMapControl, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapControls = _t);
    } }, inputs: { longitude: "longitude", latitude: "latitude", zoom: "zoom", draggable: ["mapDraggable", "draggable"], disableDoubleClickZoom: "disableDoubleClickZoom", disableDefaultUI: "disableDefaultUI", scrollwheel: "scrollwheel", keyboardShortcuts: "keyboardShortcuts", styles: "styles", usePanning: "usePanning", fitBounds: "fitBounds", mapTypeId: "mapTypeId", clickableIcons: "clickableIcons", showDefaultInfoWindow: "showDefaultInfoWindow", gestureHandling: "gestureHandling", tilt: "tilt", minZoom: "minZoom", maxZoom: "maxZoom", controlSize: "controlSize", backgroundColor: "backgroundColor", draggableCursor: "draggableCursor", draggingCursor: "draggingCursor", fitBoundsPadding: "fitBoundsPadding", restriction: "restriction" }, outputs: { mapClick: "mapClick", mapRightClick: "mapRightClick", mapDblClick: "mapDblClick", centerChange: "centerChange", boundsChange: "boundsChange", mapTypeIdChange: "mapTypeIdChange", idle: "idle", zoomChange: "zoomChange", mapReady: "mapReady", tilesLoaded: "tilesLoaded" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            CircleManager,
            DataLayerManager,
            DataLayerManager,
            FitBoundsService,
            GoogleMapsAPIWrapper,
            InfoWindowManager,
            KmlLayerManager,
            LayerManager,
            MarkerManager,
            PolygonManager,
            PolylineManager,
            RectangleManager,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "agm-map-container-inner", "sebm-google-map-container-inner"], [1, "agm-map-content"]], template: function AgmMap_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"] });
/**
 * Map option attributes that can change over time
 */
AgmMap._mapOptionsAttributes = [
    'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
    'keyboardShortcuts', 'styles', 'zoom', 'minZoom', 'maxZoom', 'mapTypeId', 'clickableIcons',
    'gestureHandling', 'tilt', 'restriction',
];
AgmMap.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: GoogleMapsAPIWrapper },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: FitBoundsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
AgmMap.propDecorators = {
    longitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    latitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    minZoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    maxZoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    controlSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['mapDraggable',] }],
    disableDoubleClickZoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disableDefaultUI: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    scrollwheel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    backgroundColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggableCursor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggingCursor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    keyboardShortcuts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    styles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    usePanning: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fitBounds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fitBoundsPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    mapTypeId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clickableIcons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showDefaultInfoWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    gestureHandling: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tilt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    restriction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    mapClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mapRightClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mapDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    centerChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    boundsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mapTypeIdChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    idle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    zoomChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mapReady: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    tilesLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mapControls: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [AgmMapControl,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMap, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'agm-map',
                providers: [
                    CircleManager,
                    DataLayerManager,
                    DataLayerManager,
                    FitBoundsService,
                    GoogleMapsAPIWrapper,
                    InfoWindowManager,
                    KmlLayerManager,
                    LayerManager,
                    MarkerManager,
                    PolygonManager,
                    PolylineManager,
                    RectangleManager,
                ],
                template: `
              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>
              <div class='agm-map-content'>
                <ng-content></ng-content>
              </div>
  `,
                styles: [`
    .agm-map-container-inner {
      width: inherit;
      height: inherit;
    }
    .agm-map-content {
      display:none;
    }
  `]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: GoogleMapsAPIWrapper }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }] }, { type: FitBoundsService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mapDraggable']
        }], disableDoubleClickZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disableDefaultUI: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scrollwheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], keyboardShortcuts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], styles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], usePanning: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fitBounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mapTypeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], clickableIcons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showDefaultInfoWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], gestureHandling: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tilt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mapClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mapRightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mapDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], centerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], boundsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mapTypeIdChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], idle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], zoomChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mapReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], tilesLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], minZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], controlSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggableCursor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggingCursor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fitBoundsPadding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], restriction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mapControls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [AgmMapControl]
        }] }); })();

let markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
class AgmMarker {
    constructor(_markerManager) {
        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If true, the marker is visible
         */
        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */
        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */
        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */
        this.zIndex = 1;
        /**
         * If true, the marker can be clicked. Default value is true.
         */
        // tslint:disable-next-line:no-input-rename
        this.clickable = true;
        /**
         * This event is fired when the marker's animation property changes.
         */
        this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */
        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks twice on the marker.
         */
        this.markerDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user rightclicks on the marker.
         */
        this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the marker.
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the marker.
         */
        // tslint:disable-next-line: no-output-native
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the marker.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user mouses over the marker.
         */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user mouses outside the marker.
         */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** @internal */
        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this._id = (markerId++).toString();
    }
    /* @internal */
    ngAfterContentInit() {
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(() => this.handleInfoWindowUpdate());
    }
    handleInfoWindowUpdate() {
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(marker => {
            marker.hostMarker = this;
        });
    }
    /** @internal */
    ngOnChanges(changes) {
        if (typeof this.latitude === 'string') {
            this.latitude = Number(this.latitude);
        }
        if (typeof this.longitude === 'string') {
            this.longitude = Number(this.longitude);
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._updateFitBoundsDetails();
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        // tslint:disable: no-string-literal
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
            this._updateFitBoundsDetails();
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
        if (changes['clickable']) {
            this._markerManager.updateClickable(this);
        }
        if (changes['animation']) {
            this._markerManager.updateAnimation(this);
        }
        // tslint:enable: no-string-literal
    }
    /** @internal */
    getFitBoundsDetails$() {
        return this._fitBoundsDetails$.asObservable();
    }
    _updateFitBoundsDetails() {
        this._fitBoundsDetails$.next({ latLng: { lat: this.latitude, lng: this.longitude } });
    }
    _addEventListeners() {
        const cs = this._markerManager.createEventObservable('click', this).subscribe(() => {
            if (this.openInfoWindow) {
                this.infoWindow.forEach(infoWindow => infoWindow.open());
            }
            this.markerClick.emit(this);
        });
        this._observableSubscriptions.push(cs);
        const dcs = this._markerManager.createEventObservable('dblclick', this).subscribe(() => {
            this.markerDblClick.emit(null);
        });
        this._observableSubscriptions.push(dcs);
        const rc = this._markerManager.createEventObservable('rightclick', this).subscribe(() => {
            this.markerRightClick.emit(null);
        });
        this._observableSubscriptions.push(rc);
        const ds = this._markerManager.createEventObservable('dragstart', this)
            .subscribe(e => this.dragStart.emit(e));
        this._observableSubscriptions.push(ds);
        const d = this._markerManager.createEventObservable('drag', this)
            .subscribe(e => this.drag.emit(e));
        this._observableSubscriptions.push(d);
        const de = this._markerManager.createEventObservable('dragend', this)
            .subscribe(e => this.dragEnd.emit(e));
        this._observableSubscriptions.push(de);
        const mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe(e => this.mouseOver.emit(e));
        this._observableSubscriptions.push(mover);
        const mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe(e => this.mouseOut.emit(e));
        this._observableSubscriptions.push(mout);
        const anChng = this._markerManager.createEventObservable('animation_changed', this)
            .subscribe(() => {
            this.animationChange.emit(this.animation);
        });
        this._observableSubscriptions.push(anChng);
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return 'AgmMarker-' + this._id.toString(); }
    /** @internal */
    ngOnDestroy() {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
    }
}
AgmMarker.ɵfac = function AgmMarker_Factory(t) { return new (t || AgmMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MarkerManager)); };
AgmMarker.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmMarker, selectors: [["agm-marker"]], contentQueries: function AgmMarker_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmInfoWindow, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infoWindow = _t);
    } }, inputs: { draggable: ["markerDraggable", "draggable"], visible: "visible", openInfoWindow: "openInfoWindow", opacity: "opacity", zIndex: "zIndex", clickable: ["markerClickable", "clickable"], latitude: "latitude", longitude: "longitude", title: "title", label: "label", iconUrl: "iconUrl", animation: "animation" }, outputs: { animationChange: "animationChange", markerClick: "markerClick", markerDblClick: "markerDblClick", markerRightClick: "markerRightClick", dragStart: "dragStart", drag: "drag", dragEnd: "dragEnd", mouseOver: "mouseOver", mouseOut: "mouseOut" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: FitBoundsAccessor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => AgmMarker) },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmMarker.ctorParameters = () => [
    { type: MarkerManager }
];
AgmMarker.propDecorators = {
    latitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    longitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['markerDraggable',] }],
    iconUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    openInfoWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    opacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['markerClickable',] }],
    animation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    animationChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    markerClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    markerDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    markerRightClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    drag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    infoWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [AgmInfoWindow,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmMarker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-marker',
                providers: [
                    { provide: FitBoundsAccessor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => AgmMarker) },
                ]
            }]
    }], function () { return [{ type: MarkerManager }]; }, { draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['markerDraggable']
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], openInfoWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], opacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['markerClickable']
        }], animationChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], markerClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], markerDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], markerRightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], drag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], infoWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [AgmInfoWindow]
        }], latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], iconUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: LatLngLiteral[] = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: LatLngLiteral[][] = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
class AgmPolygon {
    constructor(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */
        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */
        this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */
        this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */
        this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polygon.
         */
        this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polygon.
         */
        this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */
        this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */
        this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseout.
         */
        this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseover.
         */
        this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */
        this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the Polygon is right-clicked on.
         */
        this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired after Polygon first path changes.
         */
        this.polyPathsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    ngAfterContentInit() {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    }
    ngOnChanges(changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    }
    _init() {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const handlers = [
            { name: 'click', handler: (ev) => this.polyClick.emit(ev) },
            { name: 'dblclick', handler: (ev) => this.polyDblClick.emit(ev) },
            { name: 'drag', handler: (ev) => this.polyDrag.emit(ev) },
            { name: 'dragend', handler: (ev) => this.polyDragEnd.emit(ev) },
            { name: 'dragstart', handler: (ev) => this.polyDragStart.emit(ev) },
            { name: 'mousedown', handler: (ev) => this.polyMouseDown.emit(ev) },
            { name: 'mousemove', handler: (ev) => this.polyMouseMove.emit(ev) },
            { name: 'mouseout', handler: (ev) => this.polyMouseOut.emit(ev) },
            { name: 'mouseover', handler: (ev) => this.polyMouseOver.emit(ev) },
            { name: 'mouseup', handler: (ev) => this.polyMouseUp.emit(ev) },
            { name: 'rightclick', handler: (ev) => this.polyRightClick.emit(ev) },
        ];
        handlers.forEach((obj) => {
            const os = this._polygonManager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
        this._polygonManager.createPathEventObservable(this)
            .then(paths$ => {
            const os = paths$.subscribe(pathEvent => this.polyPathsChange.emit(pathEvent));
            this._subscriptions.push(os);
        });
    }
    _updatePolygonOptions(changes) {
        return Object.keys(changes)
            .filter(k => AgmPolygon._polygonOptionsAttributes.indexOf(k) !== -1)
            .reduce((obj, k) => {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    ngOnDestroy() {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach((s) => s.unsubscribe());
    }
    getPath() {
        return this._polygonManager.getPath(this);
    }
    getPaths() {
        return this._polygonManager.getPaths(this);
    }
}
AgmPolygon.ɵfac = function AgmPolygon_Factory(t) { return new (t || AgmPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PolygonManager)); };
AgmPolygon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmPolygon, selectors: [["agm-polygon"]], inputs: { clickable: "clickable", draggable: ["polyDraggable", "draggable"], editable: "editable", geodesic: "geodesic", paths: "paths", fillColor: "fillColor", fillOpacity: "fillOpacity", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight", visible: "visible", zIndex: "zIndex" }, outputs: { polyClick: "polyClick", polyDblClick: "polyDblClick", polyDrag: "polyDrag", polyDragEnd: "polyDragEnd", polyDragStart: "polyDragStart", polyMouseDown: "polyMouseDown", polyMouseMove: "polyMouseMove", polyMouseOut: "polyMouseOut", polyMouseOver: "polyMouseOver", polyMouseUp: "polyMouseUp", polyRightClick: "polyRightClick", polyPathsChange: "polyPathsChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmPolygon._polygonOptionsAttributes = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
    'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
    'editable', 'visible',
];
AgmPolygon.ctorParameters = () => [
    { type: PolygonManager }
];
AgmPolygon.propDecorators = {
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['polyDraggable',] }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    geodesic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    polyClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyMouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyMouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyMouseUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyRightClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyPathsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolygon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-polygon'
            }]
    }], function () { return [{ type: PolygonManager }]; }, { clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['polyDraggable']
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], geodesic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], paths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], polyClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyMouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyRightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyPathsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], fillColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fillOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
 * or custom icons either along the entire line, or in a specific part of it.
 * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
 *
 * ### Example
 * ```html
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
 *          </agm-icon-sequence>
 *      </agm-polyline>
 *    </agm-map>
 * ```
 */
class AgmPolylineIcon {
    ngOnInit() {
        if (this.path == null) {
            throw new Error('Icon Sequence path is required');
        }
    }
}
AgmPolylineIcon.ɵfac = function AgmPolylineIcon_Factory(t) { return new (t || AgmPolylineIcon)(); };
AgmPolylineIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmPolylineIcon, selectors: [["agm-icon-sequence"]], inputs: { fixedRotation: "fixedRotation", offset: "offset", repeat: "repeat", anchorX: "anchorX", anchorY: "anchorY", fillColor: "fillColor", fillOpacity: "fillOpacity", path: "path", rotation: "rotation", scale: "scale", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight" } });
AgmPolylineIcon.propDecorators = {
    fixedRotation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    repeat: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    anchorX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    anchorY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    path: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    rotation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    scale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolylineIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: 'agm-polyline agm-icon-sequence' }]
    }], null, { fixedRotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], repeat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], anchorX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], anchorY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fillColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fillOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], path: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * AgmPolyline}
 */
class AgmPolylinePoint {
    constructor() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        // tslint:disable: no-string-literal
        if (changes['latitude'] || changes['longitude']) {
            this.positionChanged.emit({
                lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
                lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude,
            });
        }
        // tslint:enable: no-string-literal
    }
    /** @internal */
    getFitBoundsDetails$() {
        return this.positionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ lat: this.latitude, lng: this.longitude }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(position => ({ latLng: position })));
    }
}
AgmPolylinePoint.ɵfac = function AgmPolylinePoint_Factory(t) { return new (t || AgmPolylinePoint)(); };
AgmPolylinePoint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmPolylinePoint, selectors: [["agm-polyline-point"]], inputs: { latitude: "latitude", longitude: "longitude" }, outputs: { positionChanged: "positionChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: FitBoundsAccessor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => AgmPolylinePoint) },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmPolylinePoint.ctorParameters = () => [];
AgmPolylinePoint.propDecorators = {
    latitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    longitude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    positionChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolylinePoint, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-polyline-point',
                providers: [
                    { provide: FitBoundsAccessor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => AgmPolylinePoint) },
                ]
            }]
    }], function () { return []; }, { positionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

let polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
class AgmPolyline {
    constructor(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */
        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */
        this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */
        this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polyline.
         */
        this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polyline.
         */
        this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */
        this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */
        this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseout.
         */
        this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseover.
         */
        this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */
        this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the Polyline is right-clicked on.
         */
        this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired after Polyline's path changes.
         */
        this.polyPathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    ngAfterContentInit() {
        if (this.points.length) {
            this.points.forEach((point) => {
                const s = point.positionChanged.subscribe(() => { this._polylineManager.updatePolylinePoints(this); });
                this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        const pointSub = this.points.changes.subscribe(() => this._polylineManager.updatePolylinePoints(this));
        this._subscriptions.push(pointSub);
        this._polylineManager.updatePolylinePoints(this);
        const iconSub = this.iconSequences.changes.subscribe(() => this._polylineManager.updateIconSequences(this));
        this._subscriptions.push(iconSub);
    }
    ngOnChanges(changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmPolyline._polylineOptionsAttributes.indexOf(k) !== -1);
        optionKeys.forEach(k => options[k] = changes[k].currentValue);
        this._polylineManager.setPolylineOptions(this, options);
    }
    getPath() {
        return this._polylineManager.getPath(this);
    }
    _init() {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const handlers = [
            { name: 'click', handler: (ev) => this.lineClick.emit(ev) },
            { name: 'dblclick', handler: (ev) => this.lineDblClick.emit(ev) },
            { name: 'drag', handler: (ev) => this.lineDrag.emit(ev) },
            { name: 'dragend', handler: (ev) => this.lineDragEnd.emit(ev) },
            { name: 'dragstart', handler: (ev) => this.lineDragStart.emit(ev) },
            { name: 'mousedown', handler: (ev) => this.lineMouseDown.emit(ev) },
            { name: 'mousemove', handler: (ev) => this.lineMouseMove.emit(ev) },
            { name: 'mouseout', handler: (ev) => this.lineMouseOut.emit(ev) },
            { name: 'mouseover', handler: (ev) => this.lineMouseOver.emit(ev) },
            { name: 'mouseup', handler: (ev) => this.lineMouseUp.emit(ev) },
            { name: 'rightclick', handler: (ev) => this.lineRightClick.emit(ev) },
        ];
        handlers.forEach((obj) => {
            const os = this._polylineManager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
        this._polylineManager.createPathEventObservable(this).then((ob$) => {
            const os = ob$.subscribe(pathEvent => this.polyPathChange.emit(pathEvent));
            this._subscriptions.push(os);
        });
    }
    /** @internal */
    _getPoints() {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    }
    _getIcons() {
        if (this.iconSequences) {
            return this.iconSequences.toArray();
        }
        return [];
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    ngOnDestroy() {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach((s) => s.unsubscribe());
    }
}
AgmPolyline.ɵfac = function AgmPolyline_Factory(t) { return new (t || AgmPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PolylineManager)); };
AgmPolyline.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmPolyline, selectors: [["agm-polyline"]], contentQueries: function AgmPolyline_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmPolylinePoint, false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AgmPolylineIcon, false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.points = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.iconSequences = _t);
    } }, inputs: { clickable: "clickable", draggable: ["polylineDraggable", "draggable"], editable: "editable", geodesic: "geodesic", visible: "visible", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", strokeWeight: "strokeWeight", zIndex: "zIndex" }, outputs: { lineClick: "lineClick", lineDblClick: "lineDblClick", lineDrag: "lineDrag", lineDragEnd: "lineDragEnd", lineDragStart: "lineDragStart", lineMouseDown: "lineMouseDown", lineMouseMove: "lineMouseMove", lineMouseOut: "lineMouseOut", lineMouseOver: "lineMouseOver", lineMouseUp: "lineMouseUp", lineRightClick: "lineRightClick", polyPathChange: "polyPathChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmPolyline._polylineOptionsAttributes = [
    'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
    'zIndex',
];
AgmPolyline.ctorParameters = () => [
    { type: PolylineManager }
];
AgmPolyline.propDecorators = {
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['polylineDraggable',] }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    geodesic: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    lineClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineDrag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineDragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineDragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineMouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineMouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineMouseUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    lineRightClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    polyPathChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    points: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [AgmPolylinePoint,] }],
    iconSequences: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [AgmPolylineIcon,] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmPolyline, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-polyline'
            }]
    }], function () { return [{ type: PolylineManager }]; }, { clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['polylineDraggable']
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], geodesic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], lineClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineMouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], lineRightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], polyPathChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], points: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [AgmPolylinePoint]
        }], iconSequences: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [AgmPolylineIcon]
        }] }); })();

class AgmRectangle {
    constructor(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Rectangle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this rectangle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this rectangle by dragging the control points shown at
         * the center and around the circumference of the rectangle. Defaults to false.
         */
        this.editable = false;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this rectangle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the rectangle's is changed.
         */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */
        this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */
        this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the rectangle.
         */
        // tslint:disable-next-line: no-output-native
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the rectangle.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the rectangle.
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the rectangle.
         */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the rectangle.
         */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseout.
         */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseover.
         */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the rectangle.
         */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the rectangle is right-clicked on.
         */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    ngOnInit() {
        this._manager.addRectangle(this);
        this._rectangleAddedToManager = true;
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._rectangleAddedToManager) {
            return;
        }
        // tslint:disable: no-string-literal
        if (changes['north'] ||
            changes['east'] ||
            changes['south'] ||
            changes['west']) {
            this._manager.setBounds(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        // tslint:enable: no-string-literal
        this._updateRectangleOptionsChanges(changes);
    }
    _updateRectangleOptionsChanges(changes) {
        const options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmRectangle._mapOptions.indexOf(k) !== -1);
        optionKeys.forEach(k => {
            options[k] = changes[k].currentValue;
        });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _registerEventListeners() {
        const events = new Map();
        events.set('bounds_changed', this.boundsChange);
        events.set('click', this.rectangleClick);
        events.set('dblclick', this.rectangleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('rightclick', this.rightClick);
        events.forEach((eventEmitter, eventName) => {
            this._eventSubscriptions.push(this._manager
                .createEventObservable(eventName, this)
                .subscribe(value => {
                switch (eventName) {
                    case 'bounds_changed':
                        this._manager.getBounds(this).then(bounds => eventEmitter.emit({
                            north: bounds.getNorthEast().lat(),
                            east: bounds.getNorthEast().lng(),
                            south: bounds.getSouthWest().lat(),
                            west: bounds.getSouthWest().lng(),
                        }));
                        break;
                    default:
                        eventEmitter.emit(value);
                }
            }));
        });
    }
    /** @internal */
    ngOnDestroy() {
        this._eventSubscriptions.forEach(s => s.unsubscribe());
        this._eventSubscriptions = null;
        this._manager.removeRectangle(this);
    }
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    getBounds() {
        return this._manager.getBounds(this);
    }
}
AgmRectangle.ɵfac = function AgmRectangle_Factory(t) { return new (t || AgmRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](RectangleManager)); };
AgmRectangle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmRectangle, selectors: [["agm-rectangle"]], inputs: { clickable: "clickable", draggable: ["rectangleDraggable", "draggable"], editable: "editable", strokePosition: "strokePosition", strokeWeight: "strokeWeight", visible: "visible", north: "north", east: "east", south: "south", west: "west", fillColor: "fillColor", fillOpacity: "fillOpacity", strokeColor: "strokeColor", strokeOpacity: "strokeOpacity", zIndex: "zIndex" }, outputs: { boundsChange: "boundsChange", rectangleClick: "rectangleClick", rectangleDblClick: "rectangleDblClick", drag: "drag", dragEnd: "dragEnd", dragStart: "dragStart", mouseDown: "mouseDown", mouseMove: "mouseMove", mouseOut: "mouseOut", mouseOver: "mouseOver", mouseUp: "mouseUp", rightClick: "rightClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
AgmRectangle._mapOptions = [
    'fillColor',
    'fillOpacity',
    'strokeColor',
    'strokeOpacity',
    'strokePosition',
    'strokeWeight',
    'visible',
    'zIndex',
    'clickable',
];
AgmRectangle.ctorParameters = () => [
    { type: RectangleManager }
];
AgmRectangle.propDecorators = {
    north: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    east: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    south: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    west: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    clickable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['rectangleDraggable',] }],
    editable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fillOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeOpacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokePosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    strokeWeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    zIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    boundsChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    rectangleClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    rectangleDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    drag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseOver: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    mouseUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    rightClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmRectangle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-rectangle'
            }]
    }], function () { return [{ type: RectangleManager }]; }, { clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['rectangleDraggable']
        }], editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], boundsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], rectangleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], rectangleDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], drag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], mouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], rightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], north: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], east: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], south: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], west: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fillColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fillOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

let layerId$3 = 0;
/*
 * This directive adds a transit layer to a google map instance
 * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
 * */
class AgmTransitLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$3++).toString();
        /**
         * Hide/show transit layer
         */
        this.visible = true;
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addTransitLayer(this);
        this._addedToManager = true;
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmTransitLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteLayer(this);
    }
}
AgmTransitLayer.ɵfac = function AgmTransitLayer_Factory(t) { return new (t || AgmTransitLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerManager)); };
AgmTransitLayer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AgmTransitLayer, selectors: [["agm-transit-layer"]], inputs: { visible: "visible" } });
AgmTransitLayer.ctorParameters = () => [
    { type: LayerManager }
];
AgmTransitLayer.propDecorators = {
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmTransitLayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'agm-transit-layer'
            }]
    }], function () { return [{ type: LayerManager }]; }, { visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @internal
 */
function coreDirectives() {
    return [
        AgmBicyclingLayer,
        AgmCircle,
        AgmDataLayer,
        AgmFitBounds,
        AgmFullscreenControl,
        AgmInfoWindow,
        AgmKmlLayer,
        AgmMap,
        AgmMapTypeControl,
        AgmMarker,
        AgmPanControl,
        AgmPolygon,
        AgmPolyline,
        AgmPolylineIcon,
        AgmPolylinePoint,
        AgmRectangle,
        AgmRotateControl,
        AgmScaleControl,
        AgmStreetViewControl,
        AgmTransitLayer,
        AgmZoomControl,
    ];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
class AgmCoreModule {
    /**
     * Please use this method when you register the module at the root level.
     */
    static forRoot(lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule,
            providers: [
                ...BROWSER_GLOBALS_PROVIDERS, { provide: MapsAPILoader, useClass: LazyMapsAPILoader },
                { provide: LAZY_MAPS_API_CONFIG, useValue: lazyMapsAPILoaderConfig },
            ],
        };
    }
}
AgmCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AgmCoreModule });
AgmCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AgmCoreModule_Factory(t) { return new (t || AgmCoreModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AgmCoreModule, { declarations: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmFullscreenControl, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMapTypeControl, AgmMarker, AgmPanControl, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmRotateControl, AgmScaleControl, AgmStreetViewControl, AgmTransitLayer, AgmZoomControl], exports: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmFullscreenControl, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMapTypeControl, AgmMarker, AgmPanControl, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmRotateControl, AgmScaleControl, AgmStreetViewControl, AgmTransitLayer, AgmZoomControl] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AgmCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{ declarations: coreDirectives(), exports: coreDirectives() }]
    }], null, null); })();

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=agm-core.js.map

/***/ }),

/***/ "./src/app/controllers/admin/Surveys/surveys/surveys.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/controllers/admin/Surveys/surveys/surveys.component.ts ***!
  \************************************************************************/
/*! exports provided: SurveysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveysComponent", function() { return SurveysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models */ "./src/app/models/index.ts");
/* harmony import */ var src_app_ui_admin_ui_Survey_assign_agent_assign_agent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ui/admin-ui/Survey/assign-agent/assign-agent.component */ "./src/app/ui/admin-ui/Survey/assign-agent/assign-agent.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_admin_ui_Survey_survey_list_survey_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/admin-ui/Survey/survey-list/survey-list.component */ "./src/app/ui/admin-ui/Survey/survey-list/survey-list.component.ts");








class SurveysComponent {
    constructor(excelService, agentService, ans, matdialog, alert, groupService, projectService, router, route) {
        this.excelService = excelService;
        this.agentService = agentService;
        this.ans = ans;
        this.matdialog = matdialog;
        this.alert = alert;
        this.groupService = groupService;
        this.projectService = projectService;
        this.router = router;
        this.route = route;
        this.finalArr = [];
        this.tempQuestion = [];
        this.tempAnswer = [];
        this.result = {};
    }
    ngOnInit() {
    }
    getAgents(state) {
        this.loading = false;
        this.agentService.getPaginatedSurvey(_models__WEBPACK_IMPORTED_MODULE_1__["Utilities"].formatDatagridState(state, state.page
            ? state.page.from / state.page.size
            : 0)).subscribe((resp) => {
            console.log(resp);
            this.agents = resp.content;
            this.total = resp.totalElements;
            this.loading = false;
            console.log(this.agents);
        }, (err) => {
            console.log(err);
            this.loading = false;
        });
        this.groupService.getPaginatedGroups().subscribe((res) => {
            this.group = res;
        });
        this.projectService.getPaginatedProjects().subscribe((resp) => {
            this.client = resp.content;
        });
    }
    editSurvey(x) {
        this
            .router
            .navigate([`admin/editsurvey/${x.id}`]);
    }
    viewAnswers(x) {
        this
            .router
            .navigate([`admin/survey-answers/${x}`]);
    }
    map(x) {
        this
            .router
            .navigate([`admin/maps/${x}`]);
    }
    assignAgent(x) {
        const dialogRef = this.matdialog.open(src_app_ui_admin_ui_Survey_assign_agent_assign_agent_component__WEBPACK_IMPORTED_MODULE_2__["AssignAgentComponent"], { width: "40%", data: { id: x.id, name: x.name, remove: false } });
    }
    unassignAgent(x) {
        const dialogRef = this.matdialog.open(src_app_ui_admin_ui_Survey_assign_agent_assign_agent_component__WEBPACK_IMPORTED_MODULE_2__["AssignAgentComponent"], { width: "40%", data: { id: x.id, name: x.name, remove: true } });
    }
    del(x) {
        this.agentService.deleteSurvey(x).subscribe((resp => {
            this.alert.success('Project Deleted');
        }), err => {
            this.alert.error(err.error.message);
        });
    }
    deactivate(x) {
        this.agentService.DeactivateSurvey(x).subscribe((yes => {
            this.alert.success('Project Deactivated');
        }), (err) => {
            this.alert.error(err.error.message);
        });
    }
    exportall(x) {
        this.ans.getAllAnswers(x).subscribe((result) => {
            this.answers = result.questionAndAnswer;
            console.log(this.answers);
            var a = [];
            var b = [];
            this.answers.map((z) => {
                a.push(z.question);
                b.push(z.answer);
            });
            console.log(a);
            console.log(b);
            let r = {};
            for (var i = 0; i < a.length; i++) {
                r[a[i]] = b[i];
            }
            console.log(r);
        }, err => {
            console.log(err);
        });
    }
    export() {
        this.excelService.exportAsExcelFile(this.result, '');
    }
}
SurveysComponent.ɵfac = function SurveysComponent_Factory(t) { return new (t || SurveysComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["SuveysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AnswersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
SurveysComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SurveysComponent, selectors: [["app-surveys"]], decls: 1, vars: 2, consts: [[3, "Surveys", "total", "updatedState", "view", "assign", "unassign", "edit", "exportall", "deactivate", "map", "del"]], template: function SurveysComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-survey-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updatedState", function SurveysComponent_Template_app_survey_list_updatedState_0_listener($event) { return ctx.getAgents($event); })("view", function SurveysComponent_Template_app_survey_list_view_0_listener($event) { return ctx.viewAnswers($event); })("assign", function SurveysComponent_Template_app_survey_list_assign_0_listener($event) { return ctx.assignAgent($event); })("unassign", function SurveysComponent_Template_app_survey_list_unassign_0_listener($event) { return ctx.unassignAgent($event); })("edit", function SurveysComponent_Template_app_survey_list_edit_0_listener($event) { return ctx.editSurvey($event); })("exportall", function SurveysComponent_Template_app_survey_list_exportall_0_listener($event) { return ctx.exportall($event); })("deactivate", function SurveysComponent_Template_app_survey_list_deactivate_0_listener($event) { return ctx.deactivate($event); })("map", function SurveysComponent_Template_app_survey_list_map_0_listener($event) { return ctx.map($event); })("del", function SurveysComponent_Template_app_survey_list_del_0_listener($event) { return ctx.del($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("Surveys", ctx.agents)("total", ctx.total);
    } }, directives: [_ui_admin_ui_Survey_survey_list_survey_list_component__WEBPACK_IMPORTED_MODULE_6__["SurveyListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2FkbWluL1N1cnZleXMvc3VydmV5cy9zdXJ2ZXlzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveysComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-surveys',
                templateUrl: './surveys.component.html',
                styleUrls: ['./surveys.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["ExcelService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["SuveysService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["AnswersService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["GroupsService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/admin-route.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/controllers/admin/admin-route.routing.ts ***!
  \**********************************************************/
/*! exports provided: AdminRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoute", function() { return AdminRoute; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_ui_admin_ui_User_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ui/admin-ui/User/edit-user/edit-user.component */ "./src/app/ui/admin-ui/User/edit-user/edit-user.component.ts");
/* harmony import */ var _controllers_admin_user_single_user_single_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../controllers/admin/user/single-user/single-user.component */ "./src/app/controllers/admin/user/single-user/single-user.component.ts");
/* harmony import */ var _project_single_project_single_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/single-project/single-project.component */ "./src/app/controllers/admin/project/single-project/single-project.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/controllers/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _group_authorities_group_authorities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-authorities/group-authorities.component */ "./src/app/controllers/admin/group-authorities/group-authorities.component.ts");
/* harmony import */ var _user_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/users/users.component */ "./src/app/controllers/admin/user/users/users.component.ts");
/* harmony import */ var _user_authorities_user_authorities_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-authorities/user-authorities.component */ "./src/app/controllers/admin/user-authorities/user-authorities.component.ts");
/* harmony import */ var _auth_password_management_password_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth/password-management/password-management.component */ "./src/app/controllers/auth/password-management/password-management.component.ts");
/* harmony import */ var _project_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./project/projects/projects.component */ "./src/app/controllers/admin/project/projects/projects.component.ts");
/* harmony import */ var _agent_agents_agents_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./agent/agents/agents.component */ "./src/app/controllers/admin/agent/agents/agents.component.ts");
/* harmony import */ var _ui_admin_ui_Survey_survey_form_survey_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/admin-ui/Survey/survey-form/survey-form.component */ "./src/app/ui/admin-ui/Survey/survey-form/survey-form.component.ts");
/* harmony import */ var _agent_single_agent_single_agent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./agent/single-agent/single-agent.component */ "./src/app/controllers/admin/agent/single-agent/single-agent.component.ts");
/* harmony import */ var _answers_answers_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./answers/answers.component */ "./src/app/controllers/admin/answers/answers.component.ts");
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./documents/documents.component */ "./src/app/controllers/admin/documents/documents.component.ts");
/* harmony import */ var _ui_admin_ui_Survey_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/admin-ui/Survey/edit-survey/edit-survey.component */ "./src/app/ui/admin-ui/Survey/edit-survey/edit-survey.component.ts");
/* harmony import */ var _client_agent_client_agent_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./client-agent/client-agent.component */ "./src/app/controllers/admin/client-agent/client-agent.component.ts");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/controllers/admin/maps/maps.component.ts");
/* harmony import */ var _Surveys_surveys_surveys_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Surveys/surveys/surveys.component */ "./src/app/controllers/admin/Surveys/surveys/surveys.component.ts");
/* harmony import */ var _answers_details_answers_details_answers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./answers/details-answers/details-answers.component */ "./src/app/controllers/admin/answers/details-answers/details-answers.component.ts");























const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
    }, {
        path: 'users',
        component: _user_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"]
    },
    {
        path: 'agents',
        component: _agent_agents_agents_component__WEBPACK_IMPORTED_MODULE_11__["AgentsComponent"]
    },
    {
        path: 'clientagents',
        component: _client_agent_client_agent_component__WEBPACK_IMPORTED_MODULE_17__["ClientAgentComponent"]
    },
    {
        path: 'surveys',
        component: _ui_admin_ui_Survey_survey_form_survey_form_component__WEBPACK_IMPORTED_MODULE_12__["SurveyFormComponent"]
    },
    {
        path: 'editsurvey/:id',
        component: _ui_admin_ui_Survey_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_16__["EditSurveyComponent"]
    },
    {
        path: 'allsurveys',
        component: _Surveys_surveys_surveys_component__WEBPACK_IMPORTED_MODULE_19__["SurveysComponent"]
    },
    {
        path: 'projects',
        component: _project_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__["ProjectsComponent"]
    },
    {
        path: 'user/:id/view',
        component: _controllers_admin_user_single_user_single_user_component__WEBPACK_IMPORTED_MODULE_3__["SingleUserComponent"]
    },
    {
        path: 'project/:id/view',
        component: _project_single_project_single_project_component__WEBPACK_IMPORTED_MODULE_4__["SingleProjectComponent"]
    },
    {
        path: 'agent/:id/view',
        component: _agent_single_agent_single_agent_component__WEBPACK_IMPORTED_MODULE_13__["SingleAgentComponent"]
    },
    {
        path: 'detail-answer/:id',
        component: _answers_details_answers_details_answers_component__WEBPACK_IMPORTED_MODULE_20__["DetailsAnswersComponent"]
    },
    {
        path: 'user/:id/edit',
        component: src_app_ui_admin_ui_User_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_2__["EditUserComponent"]
    },
    {
        path: 'group-authorities',
        component: _group_authorities_group_authorities_component__WEBPACK_IMPORTED_MODULE_6__["GroupAuthoritiesComponent"]
    },
    {
        path: 'user-authorities/:id',
        component: _user_authorities_user_authorities_component__WEBPACK_IMPORTED_MODULE_8__["UserAuthoritiesComponent"]
    },
    {
        path: 'password-management',
        component: _auth_password_management_password_management_component__WEBPACK_IMPORTED_MODULE_9__["PasswordManagementComponent"]
    },
    {
        path: 'survey-answers/:id',
        component: _answers_answers_component__WEBPACK_IMPORTED_MODULE_14__["AnswersComponent"]
    },
    {
        path: 'documents',
        component: _documents_documents_component__WEBPACK_IMPORTED_MODULE_15__["DocumentsComponent"]
    },
    {
        path: 'maps/:id',
        component: _maps_maps_component__WEBPACK_IMPORTED_MODULE_18__["MapsComponent"]
    }
];
class AdminRoute {
}
AdminRoute.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoute });
AdminRoute.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoute_Factory(t) { return new (t || AdminRoute)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoute, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoute, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/admin.module.ts":
/*!***************************************************!*\
  !*** ./src/app/controllers/admin/admin.module.ts ***!
  \***************************************************/
/*! exports provided: AdminDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardModule", function() { return AdminDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _ui_admin_ui_admin_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/admin-ui/admin.module */ "./src/app/ui/admin-ui/admin.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _admin_route_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-route.routing */ "./src/app/controllers/admin/admin-route.routing.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/controllers/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _user_users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/users/users.component */ "./src/app/controllers/admin/user/users/users.component.ts");
/* harmony import */ var _agent_agents_agents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agent/agents/agents.component */ "./src/app/controllers/admin/agent/agents/agents.component.ts");
/* harmony import */ var _user_single_user_single_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/single-user/single-user.component */ "./src/app/controllers/admin/user/single-user/single-user.component.ts");
/* harmony import */ var _group_authorities_group_authorities_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./group-authorities/group-authorities.component */ "./src/app/controllers/admin/group-authorities/group-authorities.component.ts");
/* harmony import */ var _user_authorities_user_authorities_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-authorities/user-authorities.component */ "./src/app/controllers/admin/user-authorities/user-authorities.component.ts");
/* harmony import */ var _auth_password_management_password_management_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../auth/password-management/password-management.component */ "./src/app/controllers/auth/password-management/password-management.component.ts");
/* harmony import */ var _project_projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project/projects/projects.component */ "./src/app/controllers/admin/project/projects/projects.component.ts");
/* harmony import */ var _project_single_project_single_project_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project/single-project/single-project.component */ "./src/app/controllers/admin/project/single-project/single-project.component.ts");
/* harmony import */ var _agent_single_agent_single_agent_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./agent/single-agent/single-agent.component */ "./src/app/controllers/admin/agent/single-agent/single-agent.component.ts");
/* harmony import */ var _answers_answers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./answers/answers.component */ "./src/app/controllers/admin/answers/answers.component.ts");
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./documents/documents.component */ "./src/app/controllers/admin/documents/documents.component.ts");
/* harmony import */ var _client_agent_client_agent_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./client-agent/client-agent.component */ "./src/app/controllers/admin/client-agent/client-agent.component.ts");
/* harmony import */ var _Surveys_surveys_surveys_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Surveys/surveys/surveys.component */ "./src/app/controllers/admin/Surveys/surveys/surveys.component.ts");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./maps/maps.component */ "./src/app/controllers/admin/maps/maps.component.ts");
/* harmony import */ var _answers_details_answers_details_answers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./answers/details-answers/details-answers.component */ "./src/app/controllers/admin/answers/details-answers/details-answers.component.ts");
























class AdminDashboardModule {
}
AdminDashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminDashboardModule });
AdminDashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminDashboardModule_Factory(t) { return new (t || AdminDashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ui_admin_ui_admin_module__WEBPACK_IMPORTED_MODULE_3__["AdminModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClarityModule"],
            _admin_route_routing__WEBPACK_IMPORTED_MODULE_5__["AdminRoute"],
            _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyD1MWtAHULMcX32FhTwXegpkwxU9OjBoUQ',
                libraries: ['places']
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminDashboardModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _user_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"], _user_single_user_single_user_component__WEBPACK_IMPORTED_MODULE_9__["SingleUserComponent"], _group_authorities_group_authorities_component__WEBPACK_IMPORTED_MODULE_10__["GroupAuthoritiesComponent"],
        _user_authorities_user_authorities_component__WEBPACK_IMPORTED_MODULE_11__["UserAuthoritiesComponent"], _auth_password_management_password_management_component__WEBPACK_IMPORTED_MODULE_12__["PasswordManagementComponent"], _project_projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"],
        _project_single_project_single_project_component__WEBPACK_IMPORTED_MODULE_14__["SingleProjectComponent"], _agent_agents_agents_component__WEBPACK_IMPORTED_MODULE_8__["AgentsComponent"], _agent_single_agent_single_agent_component__WEBPACK_IMPORTED_MODULE_15__["SingleAgentComponent"], _answers_answers_component__WEBPACK_IMPORTED_MODULE_16__["AnswersComponent"], _client_agent_client_agent_component__WEBPACK_IMPORTED_MODULE_18__["ClientAgentComponent"],
        _documents_documents_component__WEBPACK_IMPORTED_MODULE_17__["DocumentsComponent"],
        _project_single_project_single_project_component__WEBPACK_IMPORTED_MODULE_14__["SingleProjectComponent"], _agent_agents_agents_component__WEBPACK_IMPORTED_MODULE_8__["AgentsComponent"], _agent_single_agent_single_agent_component__WEBPACK_IMPORTED_MODULE_15__["SingleAgentComponent"], _answers_answers_component__WEBPACK_IMPORTED_MODULE_16__["AnswersComponent"], _answers_details_answers_details_answers_component__WEBPACK_IMPORTED_MODULE_21__["DetailsAnswersComponent"],
        _documents_documents_component__WEBPACK_IMPORTED_MODULE_17__["DocumentsComponent"], _Surveys_surveys_surveys_component__WEBPACK_IMPORTED_MODULE_19__["SurveysComponent"], _maps_maps_component__WEBPACK_IMPORTED_MODULE_20__["MapsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ui_admin_ui_admin_module__WEBPACK_IMPORTED_MODULE_3__["AdminModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClarityModule"],
        _admin_route_routing__WEBPACK_IMPORTED_MODULE_5__["AdminRoute"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _ui_admin_ui_admin_module__WEBPACK_IMPORTED_MODULE_3__["AdminModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_2__["ClarityModule"],
                    _admin_route_routing__WEBPACK_IMPORTED_MODULE_5__["AdminRoute"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyD1MWtAHULMcX32FhTwXegpkwxU9OjBoUQ',
                        libraries: ['places']
                    })
                ],
                declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _user_users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"], _user_single_user_single_user_component__WEBPACK_IMPORTED_MODULE_9__["SingleUserComponent"], _group_authorities_group_authorities_component__WEBPACK_IMPORTED_MODULE_10__["GroupAuthoritiesComponent"],
                    _user_authorities_user_authorities_component__WEBPACK_IMPORTED_MODULE_11__["UserAuthoritiesComponent"], _auth_password_management_password_management_component__WEBPACK_IMPORTED_MODULE_12__["PasswordManagementComponent"], _project_projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"],
                    _project_single_project_single_project_component__WEBPACK_IMPORTED_MODULE_14__["SingleProjectComponent"], _agent_agents_agents_component__WEBPACK_IMPORTED_MODULE_8__["AgentsComponent"], _agent_single_agent_single_agent_component__WEBPACK_IMPORTED_MODULE_15__["SingleAgentComponent"], _answers_answers_component__WEBPACK_IMPORTED_MODULE_16__["AnswersComponent"], _client_agent_client_agent_component__WEBPACK_IMPORTED_MODULE_18__["ClientAgentComponent"],
                    _documents_documents_component__WEBPACK_IMPORTED_MODULE_17__["DocumentsComponent"],
                    _project_single_project_single_project_component__WEBPACK_IMPORTED_MODULE_14__["SingleProjectComponent"], _agent_agents_agents_component__WEBPACK_IMPORTED_MODULE_8__["AgentsComponent"], _agent_single_agent_single_agent_component__WEBPACK_IMPORTED_MODULE_15__["SingleAgentComponent"], _answers_answers_component__WEBPACK_IMPORTED_MODULE_16__["AnswersComponent"], _answers_details_answers_details_answers_component__WEBPACK_IMPORTED_MODULE_21__["DetailsAnswersComponent"],
                    _documents_documents_component__WEBPACK_IMPORTED_MODULE_17__["DocumentsComponent"], _Surveys_surveys_surveys_component__WEBPACK_IMPORTED_MODULE_19__["SurveysComponent"], _maps_maps_component__WEBPACK_IMPORTED_MODULE_20__["MapsComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/agent/agents/agents.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/controllers/admin/agent/agents/agents.component.ts ***!
  \********************************************************************/
/*! exports provided: AgentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentsComponent", function() { return AgentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models */ "./src/app/models/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _ui_admin_ui_Agent_agent_form_agent_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/admin-ui/Agent/agent-form/agent-form.component */ "./src/app/ui/admin-ui/Agent/agent-form/agent-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_admin_ui_Agent_agent_ui_agent_ui_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/admin-ui/Agent/agent-ui/agent-ui.component */ "./src/app/ui/admin-ui/Agent/agent-ui/agent-ui.component.ts");
/* harmony import */ var _ui_admin_ui_Agent_edit_agent_edit_agent_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ui/admin-ui/Agent/edit-agent/edit-agent.component */ "./src/app/ui/admin-ui/Agent/edit-agent/edit-agent.component.ts");
/* harmony import */ var _ui_admin_ui_Agent_edit_client_agent_edit_client_agent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../ui/admin-ui/Agent/edit-client-agent/edit-client-agent.component */ "./src/app/ui/admin-ui/Agent/edit-client-agent/edit-client-agent.component.ts");












function AgentsComponent_app_edit_agent_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-edit-agent", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childSubmit", function AgentsComponent_app_edit_agent_12_Template_app_edit_agent_childSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.SubmitEdit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", ctx_r0.group)("agent", ctx_r0.agent);
} }
function AgentsComponent_app_edit_client_agent_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-edit-client-agent", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childSubmit", function AgentsComponent_app_edit_client_agent_13_Template_app_edit_client_agent_childSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.SubmitEdit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", ctx_r1.group)("agent", ctx_r1.agent);
} }
class AgentsComponent {
    constructor(agentService, alert, groupService, projectService, router) {
        this.agentService = agentService;
        this.alert = alert;
        this.groupService = groupService;
        this.projectService = projectService;
        this.router = router;
    }
    ngOnInit() {
    }
    getAgents(state) {
        this.loading = false;
        this.agentService.getPaginatedAgents(_models__WEBPACK_IMPORTED_MODULE_1__["Utilities"].formatDatagridState(state, state.page
            ? state.page.from / state.page.size
            : 0)).subscribe((resp) => {
            this.agents = resp.content;
            this.total = resp.totalElements;
            this.loading = false;
            console.log(this.agents);
        }, (err) => {
            console.log(err);
            this.loading = false;
        });
        this.groupService.getPaginatedGroups().subscribe((res) => {
            this.group = res;
        });
        this.projectService.getPaginatedProjects().subscribe((resp) => {
            this.client = resp.content;
        });
    }
    activateUser(x) {
        this
            .agentService
            .changeUserAdminActivationStatus(!x.enabled, `${x.id}`)
            .subscribe(res => {
            console.log(res);
            this.getAgents({});
        }, err => {
            console.log(err);
        });
    }
    Submit(x) {
        console.log('subbing');
        this.submitting = true;
        const newAgent = {
            createUserCommand: {
                dateOfBirth: moment__WEBPACK_IMPORTED_MODULE_2__(x.name.dateOfBirth).format('DD/MM/YYYY'),
                driverLicenseNumber: x.other.driverLicenseNumber,
                email: x.contact.email,
                firstName: x.name.firstName,
                gender: x.name.gender,
                initials: x.name.initials,
                lastName: x.name.lastName,
                nationalIdentificationNumber: x.other.nationalIdentificationNumber,
                nationality: x.other.nationality,
                passportNumber: x.other.passportNumber,
                phoneNumber: x.contact.phoneNumber,
                title: x.name.title,
                username: x.name.username,
                id: 0
            }
        };
        this.agentService.newAgent(newAgent).subscribe((resp) => {
            this.alert.success('New Agent Added');
            this.getAgents({});
            this.submitting = false;
            console.log(resp);
        }, (err) => {
            console.log(newAgent);
            this.alert.error(err.error.message);
            this.submitting = false;
        });
    }
    editAgent(x) {
        this.agent = x;
        this.dialog = true;
    }
    SubmitEdit(x) {
        const updateAgent = {
            updateUserCommand: {
                dateOfBirth: x.name.dateOfBirth || moment__WEBPACK_IMPORTED_MODULE_2__(x.name.dateOfBirth).format('DD/MM/YYYY'),
                driverLicenseNumber: x.other.driverLicenseNumber,
                email: x.contact.email,
                firstName: x.name.firstName,
                gender: x.name.gender,
                initials: x.name.initials,
                lastName: x.name.lastName,
                nationalIdentificationNumber: x.other.nationalIdentificationNumber,
                nationality: x.other.nationality,
                passportNumber: x.other.passportNumber,
                phoneNumber: x.contact.phoneNumber,
                groupId: x.other.groupId,
                title: x.name.title,
                username: x.name.username,
                id: x.name.id
            }
        };
        this.agentService.updateAgent(updateAgent, x.name.id).subscribe((resp) => {
            this.alert.success('Agent Updated');
            this.getAgents({});
        }, (err) => {
            this.alert.error(err.error.message);
            this.dialog = false;
            console.log(updateAgent);
        });
    }
    viewauthority(x) {
        this
            .router
            .navigate([`admin/user-authorities/${x.id}`]);
    }
    viewAgent(x) {
        this
            .router
            .navigate([`admin/agent/${x.id}/view`]);
    }
}
AgentsComponent.ɵfac = function AgentsComponent_Factory(t) { return new (t || AgentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AgentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AgentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgentsComponent, selectors: [["app-agents"]], decls: 15, vars: 6, consts: [[1, "card"], [1, "card-block"], ["shape", "switch", "size", "28"], ["routerLink", "/admin/agents"], ["routerLink", "/admin/clientagents"], [3, "groups", "submitting", "childSubmit"], [3, "groups", "agent", "childSubmit", 4, "ngIf"], [3, "agents", "total", "updatedState", "view", "edit", "authority", "enable"], [3, "groups", "agent", "childSubmit"]], template: function AgentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "clr-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Our Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Clients Agents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-agent-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childSubmit", function AgentsComponent_Template_app_agent_form_childSubmit_11_listener($event) { return ctx.Submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AgentsComponent_app_edit_agent_12_Template, 1, 2, "app-edit-agent", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AgentsComponent_app_edit_client_agent_13_Template, 1, 2, "app-edit-client-agent", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-agent-ui", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updatedState", function AgentsComponent_Template_app_agent_ui_updatedState_14_listener($event) { return ctx.getAgents($event); })("view", function AgentsComponent_Template_app_agent_ui_view_14_listener($event) { return ctx.viewAgent($event); })("edit", function AgentsComponent_Template_app_agent_ui_edit_14_listener($event) { return ctx.editAgent($event); })("authority", function AgentsComponent_Template_app_agent_ui_authority_14_listener($event) { return ctx.viewauthority($event); })("enable", function AgentsComponent_Template_app_agent_ui_enable_14_listener($event) { return ctx.activateUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", ctx.group)("submitting", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("agents", ctx.agents)("total", ctx.total);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ui_admin_ui_Agent_agent_form_agent_form_component__WEBPACK_IMPORTED_MODULE_6__["AgentFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ui_admin_ui_Agent_agent_ui_agent_ui_component__WEBPACK_IMPORTED_MODULE_8__["AgentUiComponent"], _ui_admin_ui_Agent_edit_agent_edit_agent_component__WEBPACK_IMPORTED_MODULE_9__["EditAgentComponent"], _ui_admin_ui_Agent_edit_client_agent_edit_client_agent_component__WEBPACK_IMPORTED_MODULE_10__["EditClientAgentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2FkbWluL2FnZW50L2FnZW50cy9hZ2VudHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agents',
                templateUrl: './agents.component.html',
                styleUrls: ['./agents.component.css']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["AgentsService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["GroupsService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/agent/single-agent/single-agent.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/controllers/admin/agent/single-agent/single-agent.component.ts ***!
  \********************************************************************************/
/*! exports provided: SingleAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleAgentComponent", function() { return SingleAgentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ui_admin_ui_Agent_view_agent_view_agent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui/admin-ui/Agent/view-agent/view-agent.component */ "./src/app/ui/admin-ui/Agent/view-agent/view-agent.component.ts");



class SingleAgentComponent {
    constructor() { }
    ngOnInit() {
    }
}
SingleAgentComponent.ɵfac = function SingleAgentComponent_Factory(t) { return new (t || SingleAgentComponent)(); };
SingleAgentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleAgentComponent, selectors: [["app-single-agent"]], decls: 1, vars: 0, template: function SingleAgentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-agent");
    } }, directives: [_ui_admin_ui_Agent_view_agent_view_agent_component__WEBPACK_IMPORTED_MODULE_1__["ViewAgentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2FkbWluL2FnZW50L3NpbmdsZS1hZ2VudC9zaW5nbGUtYWdlbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleAgentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-agent',
                templateUrl: './single-agent.component.html',
                styleUrls: ['./single-agent.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/answers/answers.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/controllers/admin/answers/answers.component.ts ***!
  \****************************************************************/
/*! exports provided: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersComponent", function() { return AnswersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_admin_ui_Answers_answer_ui_answer_ui_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/admin-ui/Answers/answer-ui/answer-ui.component */ "./src/app/ui/admin-ui/Answers/answer-ui/answer-ui.component.ts");






class AnswersComponent {
    constructor(agentService, excelService, mymans, route, alert, groupService, router) {
        this.agentService = agentService;
        this.excelService = excelService;
        this.mymans = mymans;
        this.route = route;
        this.alert = alert;
        this.groupService = groupService;
        this.router = router;
        this.questions = [];
        this.answers = [];
        this.answerLists = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
    }
    getAnswers(state) {
        this.loading = false;
        this.mymans.getPaginatedAnswers(this.id, _models__WEBPACK_IMPORTED_MODULE_1__["Utilities"].formatDatagridState(state, state.page
            ? state.page.from / state.page.size
            : 0)).subscribe((resp) => {
            console.log(resp);
            this.agents = resp.content;
            this.total = resp.totalElements;
            this.loading = false;
        });
        this.groupService.getPaginatedGroups().subscribe((res) => {
            this.group = res;
        });
    }
    viewDetailAnswer(x) {
        this
            .router
            .navigate([`admin/detail-answer/${x.id}`]);
    }
    viewmap(x) {
        console.log(x);
        this.router.navigate([`admin/maps/${x.id}`]);
    }
}
AnswersComponent.ɵfac = function AnswersComponent_Factory(t) { return new (t || AnswersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AgentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["ExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AnswersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AnswersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnswersComponent, selectors: [["app-answers"]], decls: 1, vars: 2, consts: [[3, "agents", "total", "view", "map", "updatedState"]], template: function AnswersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-answer-ui", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("view", function AnswersComponent_Template_app_answer_ui_view_0_listener($event) { return ctx.viewDetailAnswer($event); })("map", function AnswersComponent_Template_app_answer_ui_map_0_listener($event) { return ctx.viewmap($event); })("updatedState", function AnswersComponent_Template_app_answer_ui_updatedState_0_listener($event) { return ctx.getAnswers($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("agents", ctx.agents)("total", ctx.total);
    } }, directives: [_ui_admin_ui_Answers_answer_ui_answer_ui_component__WEBPACK_IMPORTED_MODULE_4__["AnswerUiComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2FkbWluL2Fuc3dlcnMvYW5zd2Vycy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnswersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-answers',
                templateUrl: './answers.component.html',
                styleUrls: ['./answers.component.css']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["AgentsService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["ExcelService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["AnswersService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["GroupsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/answers/details-answers/details-answers.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/controllers/admin/answers/details-answers/details-answers.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DetailsAnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsAnswersComponent", function() { return DetailsAnswersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_admin_ui_Answers_answer_detail_answer_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/admin-ui/Answers/answer-detail/answer-detail.component */ "./src/app/ui/admin-ui/Answers/answer-detail/answer-detail.component.ts");





class DetailsAnswersComponent {
    constructor(agentService, mymans, excelService, route, alert, groupService, router) {
        this.agentService = agentService;
        this.mymans = mymans;
        this.excelService = excelService;
        this.route = route;
        this.alert = alert;
        this.groupService = groupService;
        this.router = router;
        this.questions = [];
        this.answers = [];
        this.answerLists = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        console.log(this.id);
    }
    getAnswers(state) {
        this.loading = false;
        this
            .mymans
            .OneAnswer(this.id)
            .subscribe((resp) => {
            var _a, _b, _c, _d, _e, _f, _g;
            console.log(resp);
            this.agents = resp.questionAnswers;
            this.total = resp.totalElements;
            this.questions.push({ 'Project Name': (_a = resp === null || resp === void 0 ? void 0 : resp.project) === null || _a === void 0 ? void 0 : _a.name, "Project Description": (_b = resp === null || resp === void 0 ? void 0 : resp.project) === null || _b === void 0 ? void 0 : _b.description, 'Client-Name': (_d = (_c = resp === null || resp === void 0 ? void 0 : resp.project) === null || _c === void 0 ? void 0 : _c.client) === null || _d === void 0 ? void 0 : _d.name, 'projectNumber': (_e = resp === null || resp === void 0 ? void 0 : resp.project) === null || _e === void 0 ? void 0 : _e.projectNumber, "agent": resp.createdBy });
            this.projectNumber = (_g = (_f = resp === null || resp === void 0 ? void 0 : resp.agent) === null || _f === void 0 ? void 0 : _f.user) === null || _g === void 0 ? void 0 : _g.uuid;
            this.loading = false;
        });
        this
            .groupService
            .getPaginatedGroups()
            .subscribe((res) => {
            this.group = res;
        });
        this.exportIT();
    }
    exportIT() {
        this
            .mymans
            .OneAnswer(this.id)
            .subscribe((resp) => {
            console.log(resp.questionAnswers);
            this.agents = resp.questionAnswers;
            this
                .agents
                .map((x) => {
                if (x.stringAnswerValue === '') {
                    x.optionAnswerList
                        .map((z) => {
                        console.log(z.questionOption.text);
                        return this
                            .questions
                            .push({ "question": x.question.questionText, "answer": z.questionOption.text });
                    });
                }
                else {
                    return this
                        .questions
                        .push({ "question": x.question.questionText, "answer": x.stringAnswerValue });
                }
            });
        });
    }
    exportexcel(x) {
        this.excelService.exportAsExcelFile(this.questions, this.projectNumber);
    }
    viewDetailAnswer(x) {
        this
            .router
            .navigate([`admin/detail-answer/${x.id}`]);
    }
}
DetailsAnswersComponent.ɵfac = function DetailsAnswersComponent_Factory(t) { return new (t || DetailsAnswersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AgentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AnswersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["ExcelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DetailsAnswersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsAnswersComponent, selectors: [["app-details-answers"]], decls: 1, vars: 1, consts: [[3, "agents", "exportexcel", "updatedState"]], template: function DetailsAnswersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-answer-detail", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("exportexcel", function DetailsAnswersComponent_Template_app_answer_detail_exportexcel_0_listener($event) { return ctx.exportexcel($event); })("updatedState", function DetailsAnswersComponent_Template_app_answer_detail_updatedState_0_listener($event) { return ctx.getAnswers($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("agents", ctx.agents);
    } }, directives: [_ui_admin_ui_Answers_answer_detail_answer_detail_component__WEBPACK_IMPORTED_MODULE_3__["AnswerDetailComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2FkbWluL2Fuc3dlcnMvZGV0YWlscy1hbnN3ZXJzL2RldGFpbHMtYW5zd2Vycy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsAnswersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'app-details-answers', templateUrl: './details-answers.component.html', styleUrls: ['./details-answers.component.scss'] }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["AgentsService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_1__["AnswersService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_1__["ExcelService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_1__["GroupsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/client-agent/client-agent.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/controllers/admin/client-agent/client-agent.component.ts ***!
  \**************************************************************************/
/*! exports provided: ClientAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAgentComponent", function() { return ClientAgentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _ui_admin_ui_Agent_client_agent_form_client_agent_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/admin-ui/Agent/client-agent-form/client-agent-form.component */ "./src/app/ui/admin-ui/Agent/client-agent-form/client-agent-form.component.ts");
/* harmony import */ var _ui_admin_ui_Agent_client_agent_ui_client_agent_ui_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/admin-ui/Agent/client-agent-ui/client-agent-ui.component */ "./src/app/ui/admin-ui/Agent/client-agent-ui/client-agent-ui.component.ts");









class ClientAgentComponent {
    constructor(agentService, alert, groupService, projectService, router) {
        this.agentService = agentService;
        this.alert = alert;
        this.groupService = groupService;
        this.projectService = projectService;
        this.router = router;
    }
    ngOnInit() {
    }
    getAgents(state) {
        this.loading = false;
        this.agentService.getPaginatedClientAgents(_models__WEBPACK_IMPORTED_MODULE_1__["Utilities"].formatDatagridState(state, state.page
            ? state.page.from / state.page.size
            : 0)).subscribe((resp) => {
            this.agents = resp.content;
            this.total = resp.totalElements;
            this.loading = false;
            console.log(this.agents);
        }, (err) => {
            console.log(err);
            this.loading = false;
        });
        this.projectService.getAllClients().subscribe((resp) => {
            this.group = resp.content;
        });
        this.projectService.getPaginatedProjects().subscribe((resp) => {
            this.client = resp.content;
        });
    }
    activateUser(x) {
        this
            .agentService
            .changeUserAdminActivationStatus(!x.enabled, `${x.id}`)
            .subscribe(res => {
            console.log(res);
            this.getAgents({});
        }, err => {
            console.log(err);
        });
    }
    Submit(x) {
        console.log('subbing');
        this.submitting = true;
        const newAgent = {
            clientId: x.name.clientId,
            createUserCommand: {
                dateOfBirth: moment__WEBPACK_IMPORTED_MODULE_2__(x.name.dateOfBirth).format('DD/MM/YYYY'),
                driverLicenseNumber: x.other.driverLicenseNumber,
                email: x.contact.email,
                firstName: x.name.firstName,
                gender: x.name.gender,
                initials: x.name.initials,
                lastName: x.name.lastName,
                nationalIdentificationNumber: x.other.nationalIdentificationNumber,
                nationality: x.other.nationality,
                passportNumber: x.other.passportNumber,
                phoneNumber: x.contact.phoneNumber,
                title: x.name.title,
                username: x.name.username,
                id: 0
            }
        };
        this.agentService.createAgentForClient(newAgent).subscribe((resp) => {
            this.alert.success('New Agent Added');
            this.getAgents({});
            this.submitting = false;
            console.log(resp);
        }, (err) => {
            console.log(newAgent);
            this.alert.error(err.error.message);
            this.submitting = false;
        });
    }
    editAgent(x) {
        this.agent = x;
        this.dialog = true;
    }
    SubmitEdit(x) {
        const updateAgent = {
            updateUserCommand: {
                dateOfBirth: x.name.dateOfBirth || moment__WEBPACK_IMPORTED_MODULE_2__(x.name.dateOfBirth).format('DD/MM/YYYY'),
                driverLicenseNumber: x.other.driverLicenseNumber,
                email: x.contact.email,
                firstName: x.name.firstName,
                gender: x.name.gender,
                initials: x.name.initials,
                lastName: x.name.lastName,
                nationalIdentificationNumber: x.other.nationalIdentificationNumber,
                nationality: x.other.nationality,
                passportNumber: x.other.passportNumber,
                phoneNumber: x.contact.phoneNumber,
                groupId: x.other.groupId,
                title: x.name.title,
                username: x.name.username,
                id: x.name.id
            }
        };
        this.agentService.updateAgent(updateAgent, x.name.id).subscribe((resp) => {
            this.alert.success('Agent Updated');
            this.getAgents({});
        }, (err) => {
            this.alert.error(err.error.message);
            this.dialog = false;
            console.log(updateAgent);
        });
    }
    viewauthority(x) {
        this
            .router
            .navigate([`admin/user-authorities/${x.id}`]);
    }
    viewAgent(x) {
        this
            .router
            .navigate([`admin/agent/${x.id}/view`]);
    }
}
ClientAgentComponent.ɵfac = function ClientAgentComponent_Factory(t) { return new (t || ClientAgentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AgentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ClientAgentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientAgentComponent, selectors: [["app-client-agent"]], decls: 13, vars: 3, consts: [[1, "card"], [1, "card-block"], ["shape", "switch", "size", "28"], ["routerLink", "/admin/agents"], ["routerLink", "/admin/clientagents"], [3, "submitting", "childSubmit"], [3, "agents", "total", "updatedState", "view", "edit", "authority", "enable"]], template: function ClientAgentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "clr-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Our Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Clients Agents ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-client-agent-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childSubmit", function ClientAgentComponent_Template_app_client_agent_form_childSubmit_11_listener($event) { return ctx.Submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-client-agent-ui", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updatedState", function ClientAgentComponent_Template_app_client_agent_ui_updatedState_12_listener($event) { return ctx.getAgents($event); })("view", function ClientAgentComponent_Template_app_client_agent_ui_view_12_listener($event) { return ctx.viewAgent($event); })("edit", function ClientAgentComponent_Template_app_client_agent_ui_edit_12_listener($event) { return ctx.editAgent($event); })("authority", function ClientAgentComponent_Template_app_client_agent_ui_authority_12_listener($event) { return ctx.viewauthority($event); })("enable", function ClientAgentComponent_Template_app_client_agent_ui_enable_12_listener($event) { return ctx.activateUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("submitting", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("agents", ctx.agents)("total", ctx.total);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIconCustomTag"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ui_admin_ui_Agent_client_agent_form_client_agent_form_component__WEBPACK_IMPORTED_MODULE_6__["ClientAgentFormComponent"], _ui_admin_ui_Agent_client_agent_ui_client_agent_ui_component__WEBPACK_IMPORTED_MODULE_7__["ClientAgentUiComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2FkbWluL2NsaWVudC1hZ2VudC9jbGllbnQtYWdlbnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientAgentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-agent',
                templateUrl: './client-agent.component.html',
                styleUrls: ['./client-agent.component.css']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["AgentsService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["GroupsService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/dashboard/dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/controllers/admin/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DashboardComponent {
    constructor() { }
    ngOnInit() {
        console.log('ladong dashbaord');
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Audits Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/documents/documents.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/controllers/admin/documents/documents.component.ts ***!
  \********************************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ui_admin_ui_Documents_document_form_document_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/admin-ui/Documents/document-form/document-form.component */ "./src/app/ui/admin-ui/Documents/document-form/document-form.component.ts");
/* harmony import */ var _ui_admin_ui_Documents_document_ui_document_ui_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/admin-ui/Documents/document-ui/document-ui.component */ "./src/app/ui/admin-ui/Documents/document-ui/document-ui.component.ts");








class DocumentsComponent {
    constructor(projectService, documentService, alert, router, formBuilder) {
        this.projectService = projectService;
        this.documentService = documentService;
        this.alert = alert;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.templateForm = this.formBuilder.group({
            fileName: ['']
        });
        this.getProjects({});
    }
    getProjects(state) {
        this.loading = false;
        this.documentService.getPaginatedDocuments(_models__WEBPACK_IMPORTED_MODULE_1__["Utilities"].formatDatagridState(state, state.page
            ? state.page.from / state.page.size
            : 0)).subscribe((resp) => {
            this.documents = resp.content;
            this.total = resp.totalElements;
            this.loading = false;
            console.log(this.documents);
        }, (err) => {
            console.log(err);
            this.loading = false;
        });
        this.projectService.getAllClients().subscribe((res) => {
            this.project = res.content;
        });
    }
    Submit(x) {
        console.log('subbing');
        this.submitting = true;
        const newDocument = {
            fileName: x.fileName,
            clientId: x.clientId,
            name: x.fileName
        };
        let formData = new FormData();
        formData.append('file', this.file, this.file.name);
        console.log(this.file);
        this.documentService.uploadFile(formData).subscribe((res) => {
            console.log(res);
            const newDoc = { clientId: this.templateForm.value.clientId, fileName: res.fileName, name: this.file.name };
            this.documentService.newDocument(newDoc).subscribe((res) => {
                this.alert.success('New Document uploaded');
                this.getProjects({});
                this.submitting = false;
                console.log(res);
            }, (err) => {
                this.alert.error(err.error.message);
            });
        }, err => {
            this.alert.error(err.error.message);
        });
    }
    uploadFile(x) {
        if (x.target.files.length > 0) {
            this.file = x.target.files[0];
        }
    }
    deleteDocument(x) {
        console.log(x);
        this.documentService.deleteDocument(x).subscribe((res) => {
            this.getProjects({});
            this.alert.success("Document deleted successfully");
        }, (err) => {
            this.alert.error(err.message);
        });
    }
}
DocumentsComponent.ɵfac = function DocumentsComponent_Factory(t) { return new (t || DocumentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["DocumentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
DocumentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentsComponent, selectors: [["app-documents"]], decls: 2, vars: 5, consts: [[3, "projects", "submitting", "childSubmit"], [3, "projects", "documents", "total", "updatedState", "delete"]], template: function DocumentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-document-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childSubmit", function DocumentsComponent_Template_app_document_form_childSubmit_0_listener($event) { return ctx.Submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-document-ui", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updatedState", function DocumentsComponent_Template_app_document_ui_updatedState_1_listener($event) { return ctx.getProjects($event); })("delete", function DocumentsComponent_Template_app_document_ui_delete_1_listener($event) { return ctx.deleteDocument($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projects", ctx.project)("submitting", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projects", ctx.projects)("documents", ctx.documents)("total", ctx.total);
    } }, directives: [_ui_admin_ui_Documents_document_form_document_form_component__WEBPACK_IMPORTED_MODULE_5__["DocumentFormComponent"], _ui_admin_ui_Documents_document_ui_document_ui_component__WEBPACK_IMPORTED_MODULE_6__["DocumentUiComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2FkbWluL2RvY3VtZW50cy9kb2N1bWVudHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-documents',
                templateUrl: './documents.component.html',
                styleUrls: ['./documents.component.css']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["DocumentsService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/group-authorities/group-authorities.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/controllers/admin/group-authorities/group-authorities.component.ts ***!
  \************************************************************************************/
/*! exports provided: GroupAuthoritiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupAuthoritiesComponent", function() { return GroupAuthoritiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _ui_admin_ui_Group_group_authority_form_group_authority_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/admin-ui/Group/group-authority-form/group-authority-form.component */ "./src/app/ui/admin-ui/Group/group-authority-form/group-authority-form.component.ts");
/* harmony import */ var _ui_admin_ui_Group_group_authority_group_authority_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/admin-ui/Group/group-authority/group-authority.component */ "./src/app/ui/admin-ui/Group/group-authority/group-authority.component.ts");






class GroupAuthoritiesComponent {
    constructor(alert, access) {
        this.alert = alert;
        this.access = access;
    }
    ngOnInit() {
    }
    Submit(x) {
        console.log('subbing');
    }
    getAccess(state) {
        this.access.getPaginatedAuthorites(_models__WEBPACK_IMPORTED_MODULE_1__["Utilities"].formatDatagridState(state, state.page
            ? state.page.from / state.page.size
            : 0)).subscribe((res) => {
            this.authorities = res.content;
            this.total = res.totalElements;
        });
    }
}
GroupAuthoritiesComponent.ɵfac = function GroupAuthoritiesComponent_Factory(t) { return new (t || GroupAuthoritiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AccessControlService"])); };
GroupAuthoritiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupAuthoritiesComponent, selectors: [["app-group-authorities"]], decls: 2, vars: 3, consts: [[3, "groups", "childSubmit"], [3, "total", "groupAuthorities", "updatedState"]], template: function GroupAuthoritiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-group-authority-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childSubmit", function GroupAuthoritiesComponent_Template_app_group_authority_form_childSubmit_0_listener($event) { return ctx.Submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-group-authority", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updatedState", function GroupAuthoritiesComponent_Template_app_group_authority_updatedState_1_listener($event) { return ctx.getAccess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", ctx.group);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx.total)("groupAuthorities", ctx.authorities);
    } }, directives: [_ui_admin_ui_Group_group_authority_form_group_authority_form_component__WEBPACK_IMPORTED_MODULE_3__["GroupAuthorityFormComponent"], _ui_admin_ui_Group_group_authority_group_authority_component__WEBPACK_IMPORTED_MODULE_4__["GroupAuthorityComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2FkbWluL2dyb3VwLWF1dGhvcml0aWVzL2dyb3VwLWF1dGhvcml0aWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupAuthoritiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-group-authorities',
                templateUrl: './group-authorities.component.html',
                styleUrls: ['./group-authorities.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["AccessControlService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/maps/maps.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/controllers/admin/maps/maps.component.ts ***!
  \**********************************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function MapsComponent_agm_marker_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "agm-marker", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "agm-info-window", null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marker_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", marker_r1.lat)("longitude", marker_r1.long);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", marker_r1.lat, " ");
} }
class MapsComponent {
    constructor(route, router, answerSer) {
        this.route = route;
        this.router = router;
        this.answerSer = answerSer;
        this.answer = [];
        this.load = false;
        this.arrayCoodinates = [];
        this.lat = -18.820770;
        this.long = 29.825491;
        this.zoom = 7;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.getAnnswe(this.id);
    }
    getAnnswe(xy) {
        this
            .answerSer
            .getPaginatedAnswers(xy)
            .subscribe((data) => {
            this.answer = data.content;
            console.log(this.answer);
            this.cleanArray();
        });
    }
    cleanArray() {
        this
            .answer
            .map((x) => {
            this.load = true;
            console.log(x + "eer");
            return this
                .arrayCoodinates
                .push({ lat: x.latitude, long: x.longitude });
        });
    }
}
MapsComponent.ɵfac = function MapsComponent_Factory(t) { return new (t || MapsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AnswersService"])); };
MapsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapsComponent, selectors: [["app-maps"]], decls: 12, vars: 4, consts: [[1, "container"], [1, "card"], [1, "card-block"], ["shape", "switch", "size", "28"], ["routerLink", "/admin/allsurveys"], [3, "latitude", "longitude", "zoom"], [3, "latitude", "longitude", 4, "ngFor", "ngForOf"], [3, "latitude", "longitude"], ["infoWindow", ""]], template: function MapsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "clr-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Maps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Go back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "agm-map", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MapsComponent_agm_marker_11_Template, 4, 3, "agm-marker", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.long)("zoom", ctx.zoom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrayCoodinates);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMap"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmMarker"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmInfoWindow"]], styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbGxlcnMvYWRtaW4vbWFwcy9tYXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsYUFBQTtBQUVWIiwiZmlsZSI6InNyYy9hcHAvY29udHJvbGxlcnMvYWRtaW4vbWFwcy9tYXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7IGhlaWdodDogNjAwcHg7IH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'app-maps', templateUrl: './maps.component.html', styleUrls: ['./maps.component.scss'] }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["AnswersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/project/projects/projects.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/controllers/admin/project/projects/projects.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_admin_ui_Project_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/admin-ui/Project/project-form/project-form.component */ "./src/app/ui/admin-ui/Project/project-form/project-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_admin_ui_Project_project_ui_project_ui_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/admin-ui/Project/project-ui/project-ui.component */ "./src/app/ui/admin-ui/Project/project-ui/project-ui.component.ts");
/* harmony import */ var _ui_admin_ui_Project_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/admin-ui/Project/edit-project/edit-project.component */ "./src/app/ui/admin-ui/Project/edit-project/edit-project.component.ts");









function ProjectsComponent_app_edit_project_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-edit-project", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childSubmit", function ProjectsComponent_app_edit_project_1_Template_app_edit_project_childSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.SubmitEdit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", ctx_r0.project);
} }
class ProjectsComponent {
    constructor(projectService, alert, groupService, router) {
        this.projectService = projectService;
        this.alert = alert;
        this.groupService = groupService;
        this.router = router;
    }
    ngOnInit() {
    }
    getProjects(state) {
        this.loading = false;
        this.projectService.getPaginatedProjects(_models__WEBPACK_IMPORTED_MODULE_1__["Utilities"].formatDatagridState(state, state.page
            ? state.page.from / state.page.size
            : 0)).subscribe((resp) => {
            this.projects = resp.content;
            this.total = resp.totalElements;
            this.loading = false;
            console.log(this.projects);
        }, (err) => {
            console.log(err);
            this.loading = false;
        });
        this.groupService.getPaginatedGroups().subscribe((res) => {
            this.group = res;
        });
    }
    activateUser(x) {
        this
            .projectService
            .changeUserAdminActivationStatus(!x.enabled, `${x.id}`)
            .subscribe(res => {
            console.log(res);
            this.getProjects({});
        }, err => {
            console.log(err);
        });
    }
    viewauthority(x) {
        this
            .router
            .navigate([`admin/user-authorities/${x.id}`]);
    }
    Submit(x) {
        console.log('subbing');
        this.submitting = true;
        const newProject = {
            description: x.description,
            email: x.email,
            name: x.name,
            phoneNumber: x.phoneNumber,
            username: x.username
        };
        this.projectService.newUser(newProject).subscribe((resp) => {
            this.alert.success('New Project Added');
            this.getProjects({});
            this.submitting = false;
            console.log(newProject);
        }, (err) => {
            this.alert.error(err.error.message);
            this.submitting = false;
            console.log(newProject);
        });
    }
    editUser(x) {
        this.project = x;
        this.dialog = true;
    }
    SubmitEdit(x) {
        console.log(this.project);
        const newProject = {
            description: x.description,
            email: x.email,
            name: x.name,
            phoneNumber: x.phoneNumber,
            username: x.username
        };
        this.projectService.updateProject(newProject, this.project.id).subscribe((resp) => {
            this.alert.success('Project Updated');
            this.getProjects({});
            this.dialog = false;
        }, (err) => {
            this.alert.error(err.error.message);
            this.dialog = false;
        });
    }
    viewUser(x) {
        this
            .router
            .navigate([`admin/project/${x.id}/view`]);
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 3, vars: 3, consts: [[3, "childSubmit"], [3, "project", "childSubmit", 4, "ngIf"], [3, "projects", "total", "updatedState", "view", "edit", "authority", "enable"], [3, "project", "childSubmit"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-project-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childSubmit", function ProjectsComponent_Template_app_project_form_childSubmit_0_listener($event) { return ctx.Submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsComponent_app_edit_project_1_Template, 1, 1, "app-edit-project", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-project-ui", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updatedState", function ProjectsComponent_Template_app_project_ui_updatedState_2_listener($event) { return ctx.getProjects($event); })("view", function ProjectsComponent_Template_app_project_ui_view_2_listener($event) { return ctx.viewUser($event); })("edit", function ProjectsComponent_Template_app_project_ui_edit_2_listener($event) { return ctx.editUser($event); })("authority", function ProjectsComponent_Template_app_project_ui_authority_2_listener($event) { return ctx.viewauthority($event); })("enable", function ProjectsComponent_Template_app_project_ui_enable_2_listener($event) { return ctx.activateUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projects", ctx.projects)("total", ctx.total);
    } }, directives: [_ui_admin_ui_Project_project_form_project_form_component__WEBPACK_IMPORTED_MODULE_4__["ProjectFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ui_admin_ui_Project_project_ui_project_ui_component__WEBPACK_IMPORTED_MODULE_6__["ProjectUiComponent"], _ui_admin_ui_Project_edit_project_edit_project_component__WEBPACK_IMPORTED_MODULE_7__["EditProjectComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2FkbWluL3Byb2plY3QvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["GroupsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/project/single-project/single-project.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/controllers/admin/project/single-project/single-project.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SingleProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProjectComponent", function() { return SingleProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ui_admin_ui_Project_view_project_view_project_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../ui/admin-ui/Project/view-project/view-project.component */ "./src/app/ui/admin-ui/Project/view-project/view-project.component.ts");



class SingleProjectComponent {
    constructor() { }
    ngOnInit() {
    }
}
SingleProjectComponent.ɵfac = function SingleProjectComponent_Factory(t) { return new (t || SingleProjectComponent)(); };
SingleProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleProjectComponent, selectors: [["app-single-project"]], decls: 1, vars: 0, template: function SingleProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-project");
    } }, directives: [_ui_admin_ui_Project_view_project_view_project_component__WEBPACK_IMPORTED_MODULE_1__["ViewProjectComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2FkbWluL3Byb2plY3Qvc2luZ2xlLXByb2plY3Qvc2luZ2xlLXByb2plY3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-project',
                templateUrl: './single-project.component.html',
                styleUrls: ['./single-project.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/user-authorities/user-authorities.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/controllers/admin/user-authorities/user-authorities.component.ts ***!
  \**********************************************************************************/
/*! exports provided: UserAuthoritiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthoritiesComponent", function() { return UserAuthoritiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_admin_ui_User_user_authority_form_user_authority_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/admin-ui/User/user-authority-form/user-authority-form.component */ "./src/app/ui/admin-ui/User/user-authority-form/user-authority-form.component.ts");
/* harmony import */ var _ui_admin_ui_User_user_authority_list_user_authority_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/admin-ui/User/user-authority-list/user-authority-list.component */ "./src/app/ui/admin-ui/User/user-authority-list/user-authority-list.component.ts");







class UserAuthoritiesComponent {
    constructor(access, Alert, route) {
        this.access = access;
        this.Alert = Alert;
        this.route = route;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
    }
    getUserAccess(state) {
        this.access.getpaginatedUserAuthority(this.id, _models__WEBPACK_IMPORTED_MODULE_1__["Utilities"].formatDatagridState(state, state.page
            ? state.page.from / state.page.size
            : 0)).subscribe((resp) => {
            this.authorites = resp.conent;
            this.total = resp.totalElements;
            console.log(resp);
        }, (err) => {
            console.log(err);
        });
        this.access.getSystemAuthorites().subscribe((res) => {
            this.auths = res;
        });
    }
    Submit(x) {
        this.submitting = true;
        console.log('.... we are now submiitting');
        const newAuth = {
            authorityIds: [x.authorityIds],
            userId: this.id
        };
        this.access.postUserAuthority(newAuth).subscribe((resp) => {
            alert('Success');
        }, (err) => {
            alert('Error');
            console.log(err);
        });
    }
}
UserAuthoritiesComponent.ɵfac = function UserAuthoritiesComponent_Factory(t) { return new (t || UserAuthoritiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AccessControlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
UserAuthoritiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserAuthoritiesComponent, selectors: [["app-user-authorities"]], decls: 2, vars: 4, consts: [[3, "auths", "submitting", "childSubmit"], [3, "total", "authorites", "updatedState"]], template: function UserAuthoritiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-user-authority-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childSubmit", function UserAuthoritiesComponent_Template_app_user_authority_form_childSubmit_0_listener($event) { return ctx.Submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-user-authority-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updatedState", function UserAuthoritiesComponent_Template_app_user_authority_list_updatedState_1_listener($event) { return ctx.getUserAccess($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("auths", ctx.auths)("submitting", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("total", ctx.total)("authorites", ctx.authorites);
    } }, directives: [_ui_admin_ui_User_user_authority_form_user_authority_form_component__WEBPACK_IMPORTED_MODULE_4__["UserAuthorityFormComponent"], _ui_admin_ui_User_user_authority_list_user_authority_list_component__WEBPACK_IMPORTED_MODULE_5__["UserAuthorityListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2FkbWluL3VzZXItYXV0aG9yaXRpZXMvdXNlci1hdXRob3JpdGllcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAuthoritiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-authorities',
                templateUrl: './user-authorities.component.html',
                styleUrls: ['./user-authorities.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_2__["AccessControlService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controllers/admin/user/single-user/single-user.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/controllers/admin/user/single-user/single-user.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SingleUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleUserComponent", function() { return SingleUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_admin_ui_User_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ui/admin-ui/User/view-user/view-user.component */ "./src/app/ui/admin-ui/User/view-user/view-user.component.ts");





class SingleUserComponent {
    constructor(formBuilder, route, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.childSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
SingleUserComponent.ɵfac = function SingleUserComponent_Factory(t) { return new (t || SingleUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SingleUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleUserComponent, selectors: [["app-single-user"]], outputs: { childSubmit: "childSubmit" }, decls: 1, vars: 0, template: function SingleUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-view-user");
    } }, directives: [_ui_admin_ui_User_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_3__["ViewUserComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2FkbWluL3VzZXIvc2luZ2xlLXVzZXIvc2luZ2xlLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-user',
                templateUrl: './single-user.component.html',
                styleUrls: ['./single-user.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { childSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/controllers/admin/user/users/users.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/controllers/admin/user/users/users.component.ts ***!
  \*****************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models */ "./src/app/models/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_admin_ui_User_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/admin-ui/User/user-form/user-form.component */ "./src/app/ui/admin-ui/User/user-form/user-form.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_admin_ui_User_user_ui_user_ui_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/admin-ui/User/user-ui/user-ui.component */ "./src/app/ui/admin-ui/User/user-ui/user-ui.component.ts");
/* harmony import */ var _ui_admin_ui_User_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/admin-ui/User/edit-user/edit-user.component */ "./src/app/ui/admin-ui/User/edit-user/edit-user.component.ts");










function UsersComponent_app_edit_user_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-edit-user", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childSubmit", function UsersComponent_app_edit_user_1_Template_app_edit_user_childSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.SubmitEdit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", ctx_r0.group)("user", ctx_r0.user);
} }
class UsersComponent {
    constructor(userService, alert, groupService, router) {
        this.userService = userService;
        this.alert = alert;
        this.groupService = groupService;
        this.router = router;
    }
    ngOnInit() { }
    getUsers(state) {
        this.loading = false;
        this
            .userService
            .getPaginatedUsers(_models__WEBPACK_IMPORTED_MODULE_1__["Utilities"].formatDatagridState(state, state.page
            ? state.page.from / state.page.size
            : 0))
            .subscribe((resp) => {
            this.users = resp.content;
            this.total = resp.totalElements;
            this.loading = false;
        }, (err) => {
            console.log(err);
            this.loading = false;
        });
        this
            .groupService
            .getPaginatedGroups()
            .subscribe((res) => {
            this.group = res;
        });
    }
    Submit(x) {
        console.log('subbing');
        this.submitting = true;
        const newUser = {
            dateOfBirth: moment__WEBPACK_IMPORTED_MODULE_2__(x.name.dateOfBirth).format('DD/MM/YYYY'),
            driverLicenseNumber: x.other.driverLicenseNumber,
            email: x.contact.email,
            firstName: x.name.firstName,
            gender: x.name.gender,
            initials: x.name.initials,
            lastName: x.name.lastName,
            nationalIdentificationNumber: x.other.nationalIdentificationNumber,
            nationality: x.other.nationality,
            passportNumber: x.other.passportNumber,
            phoneNumber: x.contact.phoneNumber,
            groupId: x.other.groupId,
            title: x.name.title,
            username: x.name.username,
            id: ''
        };
        this
            .userService
            .newUser(newUser)
            .subscribe((resp) => {
            this
                .alert
                .success('New User Added');
            this.getUsers({});
            this.submitting = false;
        }, (err) => {
            this
                .alert
                .error(err.error.message);
            this.submitting = false;
        });
    }
    editUser(x) {
        this.user = x;
        this.dialog = true;
    }
    SubmitEdit(x) {
        console.log(x.name.dateOfBirth);
        const newUser = {
            dateOfBirth: x.name.dateOfBirth || moment__WEBPACK_IMPORTED_MODULE_2__(x.name.dateOfBirth).format('DD/MM/YYYY'),
            driverLicenseNumber: x.other.driverLicenseNumber,
            email: x.contact.email,
            firstName: x.name.firstName,
            gender: x.name.gender,
            initials: x.name.initials,
            lastName: x.name.lastName,
            nationalIdentificationNumber: x.other.nationalIdentificationNumber,
            nationality: x.other.nationality,
            passportNumber: x.other.passportNumber,
            phoneNumber: x.contact.phoneNumber,
            groupId: x.other.groupId,
            title: x.name.title,
            username: x.name.username,
            id: x.name.id
        };
        this
            .userService
            .updateUserAdmin(newUser, x.name.id)
            .subscribe((resp) => {
            this
                .alert
                .success('User Updated');
            this.getUsers({});
        }, (err) => {
            this
                .alert
                .error(err.error.message);
            this.dialog = false;
        });
    }
    viewauthority(x) {
        this
            .router
            .navigate([`admin/user-authorities/${x.id}`]);
    }
    activateUser(x) {
        this
            .userService
            .changeUserAdminActivationStatus(!x.enabled, `${x.id}`)
            .subscribe(res => {
            console.log(res);
            this.getUsers({});
        }, err => {
            console.log(err);
        });
    }
    viewUser(x) {
        this
            .router
            .navigate([`admin/user/${x.id}/view`]);
    }
    Useropned(x) {
        this.dialog = true;
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["GroupsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 3, vars: 5, consts: [[3, "groups", "submitting", "childSubmit"], [3, "groups", "user", "childSubmit", 4, "ngIf"], [3, "users", "total", "updatedState", "view", "edit", "authority", "enable"], [3, "groups", "user", "childSubmit"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-user-form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childSubmit", function UsersComponent_Template_app_user_form_childSubmit_0_listener($event) { return ctx.Submit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersComponent_app_edit_user_1_Template, 1, 2, "app-edit-user", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-user-ui", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updatedState", function UsersComponent_Template_app_user_ui_updatedState_2_listener($event) { return ctx.getUsers($event); })("view", function UsersComponent_Template_app_user_ui_view_2_listener($event) { return ctx.viewUser($event); })("edit", function UsersComponent_Template_app_user_ui_edit_2_listener($event) { return ctx.editUser($event); })("authority", function UsersComponent_Template_app_user_ui_authority_2_listener($event) { return ctx.viewauthority($event); })("enable", function UsersComponent_Template_app_user_ui_enable_2_listener($event) { return ctx.activateUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", ctx.group)("submitting", ctx.submitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("users", ctx.users)("total", ctx.total);
    } }, directives: [_ui_admin_ui_User_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_5__["UserFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ui_admin_ui_User_user_ui_user_ui_component__WEBPACK_IMPORTED_MODULE_7__["UserUiComponent"], _ui_admin_ui_User_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_8__["EditUserComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2FkbWluL3VzZXIvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'app-users', templateUrl: './users.component.html', styleUrls: ['./users.component.scss'] }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_3__["GroupsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/controllers/auth/password-management/password-management.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/controllers/auth/password-management/password-management.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PasswordManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordManagementComponent", function() { return PasswordManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _ui_login_ui_password_management_ui_password_management_ui_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/login-ui/password-management-ui/password-management-ui.component */ "./src/app/ui/login-ui/password-management-ui/password-management-ui.component.ts");




class PasswordManagementComponent {
    constructor(Auth, alert) {
        this.Auth = Auth;
        this.alert = alert;
        this.loading = false;
    }
    ngOnInit() {
    }
    managePassword(x) {
        this.loading = true;
        this.Auth.UpdatePassword(x).subscribe((resp) => {
            this.alert.success('Your password has been changed');
            this.loading = false;
        }, (err) => {
            this.alert.error(err.error.message);
            this.loading = false;
        });
    }
}
PasswordManagementComponent.ɵfac = function PasswordManagementComponent_Factory(t) { return new (t || PasswordManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"])); };
PasswordManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordManagementComponent, selectors: [["app-password-management"]], decls: 1, vars: 1, consts: [[3, "loading", "childSubmit"]], template: function PasswordManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-password-management-ui", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childSubmit", function PasswordManagementComponent_Template_app_password_management_ui_childSubmit_0_listener($event) { return ctx.managePassword($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading);
    } }, directives: [_ui_login_ui_password_management_ui_password_management_ui_component__WEBPACK_IMPORTED_MODULE_2__["PasswordManagementUiComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xsZXJzL2F1dGgvcGFzc3dvcmQtbWFuYWdlbWVudC9wYXNzd29yZC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PasswordManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-password-management',
                templateUrl: './password-management.component.html',
                styleUrls: ['./password-management.component.scss']
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_1__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/models/Utilites.ts":
/*!************************************!*\
  !*** ./src/app/models/Utilites.ts ***!
  \************************************/
/*! exports provided: Utilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return Utilities; });
class Utilities {
    constructor() { }
    static formatDatagridState(state, page) {
        const filters = {};
        if (state.filters) {
            const searchQueries = Object.values(state.filters)
                .map((val) => {
                return val.property + ':' + val.value;
            })
                .join(',');
            filters.search = searchQueries;
        }
        if (state.sort) {
            filters.sort = state.sort.by;
            filters.order = state.sort.reverse ? 'DESC' : 'ASC';
        }
        filters.page = page;
        filters.size = 10;
        return filters;
    }
}


/***/ }),

/***/ "./src/app/models/agents.ts":
/*!**********************************!*\
  !*** ./src/app/models/agents.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/models/answers.ts":
/*!***********************************!*\
  !*** ./src/app/models/answers.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/models/authority.ts":
/*!*************************************!*\
  !*** ./src/app/models/authority.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/models/documents.ts":
/*!*************************************!*\
  !*** ./src/app/models/documents.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/models/group-authorities.ts":
/*!*********************************************!*\
  !*** ./src/app/models/group-authorities.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/models/groups.ts":
/*!**********************************!*\
  !*** ./src/app/models/groups.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.interface */ "./src/app/models/page.interface.ts");
/* harmony import */ var _page_interface__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_page_interface__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _page_interface__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _page_interface__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users */ "./src/app/models/users.ts");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_users__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _users__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _users__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _group_authorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-authorities */ "./src/app/models/group-authorities.ts");
/* harmony import */ var _group_authorities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_group_authorities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _group_authorities__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _group_authorities__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _groups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groups */ "./src/app/models/groups.ts");
/* harmony import */ var _groups__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_groups__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _groups__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _groups__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Utilites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utilites */ "./src/app/models/Utilites.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Utilities", function() { return _Utilites__WEBPACK_IMPORTED_MODULE_4__["Utilities"]; });

/* harmony import */ var _user_authorities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-authorities */ "./src/app/models/user-authorities.ts");
/* harmony import */ var _user_authorities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_user_authorities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_authorities__WEBPACK_IMPORTED_MODULE_5__) if(["Utilities","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_authorities__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _authority__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authority */ "./src/app/models/authority.ts");
/* harmony import */ var _authority__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_authority__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _authority__WEBPACK_IMPORTED_MODULE_6__) if(["Utilities","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _authority__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects */ "./src/app/models/projects.ts");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_projects__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _projects__WEBPACK_IMPORTED_MODULE_7__) if(["Utilities","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _projects__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _agents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agents */ "./src/app/models/agents.ts");
/* harmony import */ var _agents__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_agents__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _agents__WEBPACK_IMPORTED_MODULE_8__) if(["Utilities","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _agents__WEBPACK_IMPORTED_MODULE_8__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _documents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./documents */ "./src/app/models/documents.ts");
/* harmony import */ var _documents__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_documents__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _documents__WEBPACK_IMPORTED_MODULE_9__) if(["Utilities","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _documents__WEBPACK_IMPORTED_MODULE_9__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _questions_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./questions.interface */ "./src/app/models/questions.interface.ts");
/* harmony import */ var _questions_interface__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_questions_interface__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _questions_interface__WEBPACK_IMPORTED_MODULE_10__) if(["Utilities","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _questions_interface__WEBPACK_IMPORTED_MODULE_10__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _answers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./answers */ "./src/app/models/answers.ts");
/* harmony import */ var _answers__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_answers__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _answers__WEBPACK_IMPORTED_MODULE_11__) if(["Utilities","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _answers__WEBPACK_IMPORTED_MODULE_11__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _questionAndAnswer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./questionAndAnswer */ "./src/app/models/questionAndAnswer.ts");
/* harmony import */ var _questionAndAnswer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_questionAndAnswer__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _questionAndAnswer__WEBPACK_IMPORTED_MODULE_12__) if(["Utilities","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _questionAndAnswer__WEBPACK_IMPORTED_MODULE_12__[key]; }) }(__WEBPACK_IMPORT_KEY__));















/***/ }),

/***/ "./src/app/models/page.interface.ts":
/*!******************************************!*\
  !*** ./src/app/models/page.interface.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/models/projects.ts":
/*!************************************!*\
  !*** ./src/app/models/projects.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/models/questionAndAnswer.ts":
/*!*********************************************!*\
  !*** ./src/app/models/questionAndAnswer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/models/questions.interface.ts":
/*!***********************************************!*\
  !*** ./src/app/models/questions.interface.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/models/user-authorities.ts":
/*!********************************************!*\
  !*** ./src/app/models/user-authorities.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/app/models/users.ts":
/*!*********************************!*\
  !*** ./src/app/models/users.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map