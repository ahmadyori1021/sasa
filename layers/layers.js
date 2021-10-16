ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];

var format_waterLevel_rakata_0 = new ol.format.GeoJSON();
var features_waterLevel_rakata_0 = format_waterLevel_rakata_0.readFeatures(json_waterLevel_rakata_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterLevel_rakata_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterLevel_rakata_0.addFeatures(features_waterLevel_rakata_0);
var lyr_waterLevel_rakata_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterLevel_rakata_0, 
                style: style_waterLevel_rakata_0,
                interactive: true,
    title: 'waterLevel_rakata<br />\
    <img src="styles/legend/waterLevel_rakata_0_0.png" /> 0 - 5<br />\
    <img src="styles/legend/waterLevel_rakata_0_1.png" /> 5 - 10<br />\
    <img src="styles/legend/waterLevel_rakata_0_2.png" /> 10 - 15<br />\
    <img src="styles/legend/waterLevel_rakata_0_3.png" /> 15 - 20<br />\
    <img src="styles/legend/waterLevel_rakata_0_4.png" /> 20 - 100<br />'
        });
var format_waterLevel_sertung_1 = new ol.format.GeoJSON();
var features_waterLevel_sertung_1 = format_waterLevel_sertung_1.readFeatures(json_waterLevel_sertung_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterLevel_sertung_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterLevel_sertung_1.addFeatures(features_waterLevel_sertung_1);
var lyr_waterLevel_sertung_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterLevel_sertung_1, 
                style: style_waterLevel_sertung_1,
                interactive: true,
    title: 'waterLevel_sertung<br />\
    <img src="styles/legend/waterLevel_sertung_1_0.png" /> 0 - 5<br />\
    <img src="styles/legend/waterLevel_sertung_1_1.png" /> 5 - 10<br />\
    <img src="styles/legend/waterLevel_sertung_1_2.png" /> 10 - 15<br />\
    <img src="styles/legend/waterLevel_sertung_1_3.png" /> 15 - 20<br />\
    <img src="styles/legend/waterLevel_sertung_1_4.png" /> 20 - 100<br />'
        });
var format_waterLevel_panjang_2 = new ol.format.GeoJSON();
var features_waterLevel_panjang_2 = format_waterLevel_panjang_2.readFeatures(json_waterLevel_panjang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterLevel_panjang_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterLevel_panjang_2.addFeatures(features_waterLevel_panjang_2);
var lyr_waterLevel_panjang_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterLevel_panjang_2, 
                style: style_waterLevel_panjang_2,
                interactive: true,
    title: 'waterLevel_panjang<br />\
    <img src="styles/legend/waterLevel_panjang_2_0.png" /> 0 - 5<br />\
    <img src="styles/legend/waterLevel_panjang_2_1.png" /> 5 - 10<br />\
    <img src="styles/legend/waterLevel_panjang_2_2.png" /> 10 - 15<br />\
    <img src="styles/legend/waterLevel_panjang_2_3.png" /> 15 - 20<br />\
    <img src="styles/legend/waterLevel_panjang_2_4.png" /> 20 - 100<br />'
        });
var format_weather_sertung_3 = new ol.format.GeoJSON();
var features_weather_sertung_3 = format_weather_sertung_3.readFeatures(json_weather_sertung_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_weather_sertung_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_weather_sertung_3.addFeatures(features_weather_sertung_3);
var lyr_weather_sertung_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_weather_sertung_3, 
                style: style_weather_sertung_3,
                interactive: true,
    title: 'weather_sertung<br />\
    <img src="styles/legend/weather_sertung_3_0.png" /> 0 - 10<br />\
    <img src="styles/legend/weather_sertung_3_1.png" /> 10 - 20<br />\
    <img src="styles/legend/weather_sertung_3_2.png" /> 20 - 30<br />\
    <img src="styles/legend/weather_sertung_3_3.png" /> 30 - 40<br />\
    <img src="styles/legend/weather_sertung_3_4.png" /> 40 - 100<br />'
        });
var format_weather_rakata_4 = new ol.format.GeoJSON();
var features_weather_rakata_4 = format_weather_rakata_4.readFeatures(json_weather_rakata_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_weather_rakata_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_weather_rakata_4.addFeatures(features_weather_rakata_4);
var lyr_weather_rakata_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_weather_rakata_4, 
                style: style_weather_rakata_4,
                interactive: true,
    title: 'weather_rakata<br />\
    <img src="styles/legend/weather_rakata_4_0.png" /> 0 - 10<br />\
    <img src="styles/legend/weather_rakata_4_1.png" /> 10 - 20<br />\
    <img src="styles/legend/weather_rakata_4_2.png" /> 20 - 30<br />\
    <img src="styles/legend/weather_rakata_4_3.png" /> 30 - 40<br />\
    <img src="styles/legend/weather_rakata_4_4.png" /> 40 - 100<br />'
        });
var format_buoy_nearSertung_5 = new ol.format.GeoJSON();
var features_buoy_nearSertung_5 = format_buoy_nearSertung_5.readFeatures(json_buoy_nearSertung_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buoy_nearSertung_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buoy_nearSertung_5.addFeatures(features_buoy_nearSertung_5);
var lyr_buoy_nearSertung_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buoy_nearSertung_5, 
                style: style_buoy_nearSertung_5,
                interactive: true,
    title: 'buoy_nearSertung<br />\
    <img src="styles/legend/buoy_nearSertung_5_0.png" /> 0 - 5<br />\
    <img src="styles/legend/buoy_nearSertung_5_1.png" /> 5 - 10<br />\
    <img src="styles/legend/buoy_nearSertung_5_2.png" /> 10 - 15<br />\
    <img src="styles/legend/buoy_nearSertung_5_3.png" /> 15 - 20<br />\
    <img src="styles/legend/buoy_nearSertung_5_4.png" /> 20 - 100<br />'
        });
var format_buoy_nearRakata_6 = new ol.format.GeoJSON();
var features_buoy_nearRakata_6 = format_buoy_nearRakata_6.readFeatures(json_buoy_nearRakata_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buoy_nearRakata_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buoy_nearRakata_6.addFeatures(features_buoy_nearRakata_6);
var lyr_buoy_nearRakata_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buoy_nearRakata_6, 
                style: style_buoy_nearRakata_6,
                interactive: true,
    title: 'buoy_nearRakata<br />\
    <img src="styles/legend/buoy_nearRakata_6_0.png" /> 0 - 5<br />\
    <img src="styles/legend/buoy_nearRakata_6_1.png" /> 5 - 10<br />\
    <img src="styles/legend/buoy_nearRakata_6_2.png" /> 10 - 15<br />\
    <img src="styles/legend/buoy_nearRakata_6_3.png" /> 15 - 20<br />\
    <img src="styles/legend/buoy_nearRakata_6_4.png" /> 20 - 100<br />'
        });
var format_seismic_rakata_7 = new ol.format.GeoJSON();
var features_seismic_rakata_7 = format_seismic_rakata_7.readFeatures(json_seismic_rakata_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seismic_rakata_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seismic_rakata_7.addFeatures(features_seismic_rakata_7);
var lyr_seismic_rakata_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_seismic_rakata_7, 
                style: style_seismic_rakata_7,
                interactive: true,
    title: 'seismic_rakata<br />\
    <img src="styles/legend/seismic_rakata_7_0.png" /> 0 - 2<br />\
    <img src="styles/legend/seismic_rakata_7_1.png" /> 2 - 4<br />\
    <img src="styles/legend/seismic_rakata_7_2.png" /> 4 - 6<br />\
    <img src="styles/legend/seismic_rakata_7_3.png" /> 6 - 8<br />\
    <img src="styles/legend/seismic_rakata_7_4.png" /> 8 - 10<br />'
        });
var format_sensor_panjang_8 = new ol.format.GeoJSON();
var features_sensor_panjang_8 = format_sensor_panjang_8.readFeatures(json_sensor_panjang_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sensor_panjang_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sensor_panjang_8.addFeatures(features_sensor_panjang_8);
var lyr_sensor_panjang_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sensor_panjang_8, 
                style: style_sensor_panjang_8,
                interactive: true,
    title: 'sensor_panjang<br />\
    <img src="styles/legend/sensor_panjang_8_0.png" /> 0 - 2<br />\
    <img src="styles/legend/sensor_panjang_8_1.png" /> 2 - 4<br />\
    <img src="styles/legend/sensor_panjang_8_2.png" /> 4 - 6<br />\
    <img src="styles/legend/sensor_panjang_8_3.png" /> 6 - 8<br />\
    <img src="styles/legend/sensor_panjang_8_4.png" /> 8 - 10<br />'
        });
var format_sensor_gunungAnakKrakatau_9 = new ol.format.GeoJSON();
var features_sensor_gunungAnakKrakatau_9 = format_sensor_gunungAnakKrakatau_9.readFeatures(json_sensor_gunungAnakKrakatau_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sensor_gunungAnakKrakatau_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sensor_gunungAnakKrakatau_9.addFeatures(features_sensor_gunungAnakKrakatau_9);
var lyr_sensor_gunungAnakKrakatau_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sensor_gunungAnakKrakatau_9, 
                style: style_sensor_gunungAnakKrakatau_9,
                interactive: true,
    title: 'sensor_gunungAnakKrakatau<br />\
    <img src="styles/legend/sensor_gunungAnakKrakatau_9_0.png" /> 0 - 2<br />\
    <img src="styles/legend/sensor_gunungAnakKrakatau_9_1.png" /> 2 - 4<br />\
    <img src="styles/legend/sensor_gunungAnakKrakatau_9_2.png" /> 4 - 6<br />\
    <img src="styles/legend/sensor_gunungAnakKrakatau_9_3.png" /> 6 - 8<br />\
    <img src="styles/legend/sensor_gunungAnakKrakatau_9_4.png" /> 8 - 10<br />'
        });
var format_seismic_sertung_10 = new ol.format.GeoJSON();
var features_seismic_sertung_10 = format_seismic_sertung_10.readFeatures(json_seismic_sertung_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seismic_sertung_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seismic_sertung_10.addFeatures(features_seismic_sertung_10);
var lyr_seismic_sertung_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_seismic_sertung_10, 
                style: style_seismic_sertung_10,
                interactive: true,
    title: 'seismic_sertung<br />\
    <img src="styles/legend/seismic_sertung_10_0.png" /> 0 - 2<br />\
    <img src="styles/legend/seismic_sertung_10_1.png" /> 2 - 4<br />\
    <img src="styles/legend/seismic_sertung_10_2.png" /> 4 - 6<br />\
    <img src="styles/legend/seismic_sertung_10_3.png" /> 6 - 8<br />\
    <img src="styles/legend/seismic_sertung_10_4.png" /> 8 - 10<br />'
        });

        var lyr_GoogleSateliteHybrid_11 = new ol.layer.Tile({
            'title': 'Google Satelite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var group_seismicsensor = new ol.layer.Group({
                                layers: [lyr_seismic_rakata_7,lyr_sensor_panjang_8,lyr_sensor_gunungAnakKrakatau_9,lyr_seismic_sertung_10,],
                                title: "seismic sensor"});
var group_buoysensor = new ol.layer.Group({
                                layers: [lyr_buoy_nearSertung_5,lyr_buoy_nearRakata_6,],
                                title: "buoy sensor"});
var group_weathersensor = new ol.layer.Group({
                                layers: [lyr_weather_sertung_3,lyr_weather_rakata_4,],
                                title: "weather sensor"});
var group_waterlevelsensor = new ol.layer.Group({
                                layers: [lyr_waterLevel_rakata_0,lyr_waterLevel_sertung_1,lyr_waterLevel_panjang_2,],
                                title: "water level sensor"});

lyr_waterLevel_rakata_0.setVisible(true);lyr_waterLevel_sertung_1.setVisible(true);lyr_waterLevel_panjang_2.setVisible(true);lyr_weather_sertung_3.setVisible(true);lyr_weather_rakata_4.setVisible(true);lyr_buoy_nearSertung_5.setVisible(true);lyr_buoy_nearRakata_6.setVisible(true);lyr_seismic_rakata_7.setVisible(true);lyr_sensor_panjang_8.setVisible(true);lyr_sensor_gunungAnakKrakatau_9.setVisible(true);lyr_seismic_sertung_10.setVisible(true);lyr_GoogleSateliteHybrid_11.setVisible(true);
var layersList = [group_waterlevelsensor,group_weathersensor,group_buoysensor,group_seismicsensor,lyr_GoogleSateliteHybrid_11];
lyr_waterLevel_rakata_0.set('fieldAliases', {'id': 'id', 'value': 'value', });
lyr_waterLevel_sertung_1.set('fieldAliases', {'id': 'id', 'value': 'value', });
lyr_waterLevel_panjang_2.set('fieldAliases', {'id': 'id', 'value': 'value', });
lyr_weather_sertung_3.set('fieldAliases', {'id': 'id', 'value': 'value', });
lyr_weather_rakata_4.set('fieldAliases', {'id': 'id', 'value': 'value', });
lyr_buoy_nearSertung_5.set('fieldAliases', {'id': 'id', 'value': 'value', });
lyr_buoy_nearRakata_6.set('fieldAliases', {'id': 'id', 'value': 'value', });
lyr_seismic_rakata_7.set('fieldAliases', {'id': 'id', 'value': 'value', });
lyr_sensor_panjang_8.set('fieldAliases', {'id': 'id', 'value': 'value', });
lyr_sensor_gunungAnakKrakatau_9.set('fieldAliases', {'id': 'id', 'value': 'value', });
lyr_seismic_sertung_10.set('fieldAliases', {'id': 'id', 'value': 'value', });
lyr_waterLevel_rakata_0.set('fieldImages', {'id': 'TextEdit', 'value': 'TextEdit', });
lyr_waterLevel_sertung_1.set('fieldImages', {'id': 'TextEdit', 'value': 'TextEdit', });
lyr_waterLevel_panjang_2.set('fieldImages', {'id': 'TextEdit', 'value': 'TextEdit', });
lyr_weather_sertung_3.set('fieldImages', {'id': 'TextEdit', 'value': 'TextEdit', });
lyr_weather_rakata_4.set('fieldImages', {'id': 'TextEdit', 'value': 'TextEdit', });
lyr_buoy_nearSertung_5.set('fieldImages', {'id': 'TextEdit', 'value': 'TextEdit', });
lyr_buoy_nearRakata_6.set('fieldImages', {'id': 'TextEdit', 'value': 'TextEdit', });
lyr_seismic_rakata_7.set('fieldImages', {'id': 'TextEdit', 'value': 'TextEdit', });
lyr_sensor_panjang_8.set('fieldImages', {'id': 'TextEdit', 'value': 'TextEdit', });
lyr_sensor_gunungAnakKrakatau_9.set('fieldImages', {'id': 'TextEdit', 'value': 'TextEdit', });
lyr_seismic_sertung_10.set('fieldImages', {'id': 'TextEdit', 'value': 'TextEdit', });
lyr_waterLevel_rakata_0.set('fieldLabels', {});
lyr_waterLevel_sertung_1.set('fieldLabels', {});
lyr_waterLevel_panjang_2.set('fieldLabels', {});
lyr_weather_sertung_3.set('fieldLabels', {});
lyr_weather_rakata_4.set('fieldLabels', {});
lyr_buoy_nearSertung_5.set('fieldLabels', {});
lyr_buoy_nearRakata_6.set('fieldLabels', {});
lyr_seismic_rakata_7.set('fieldLabels', {});
lyr_sensor_panjang_8.set('fieldLabels', {});
lyr_sensor_gunungAnakKrakatau_9.set('fieldLabels', {});
lyr_seismic_sertung_10.set('fieldLabels', {});
lyr_seismic_sertung_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});