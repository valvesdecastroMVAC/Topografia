var wms_layers = [];

var lyr_TopografaTigre_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Topografía Tigre",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TopografaTigre_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6567872.318662, -4118702.962078, -6456512.318706, -4028785.886625]
                            })
                        });
var format_Hidrografia_1 = new ol.format.GeoJSON();
var features_Hidrografia_1 = format_Hidrografia_1.readFeatures(json_Hidrografia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrografia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografia_1.addFeatures(features_Hidrografia_1);
var lyr_Hidrografia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hidrografia_1, 
                style: style_Hidrografia_1,
                popuplayertitle: "Hidrografia",
                interactive: true,
                title: '<img src="styles/legend/Hidrografia_1.png" /> Hidrografia'
            });
var format_Limiteinterprovincial_2 = new ol.format.GeoJSON();
var features_Limiteinterprovincial_2 = format_Limiteinterprovincial_2.readFeatures(json_Limiteinterprovincial_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limiteinterprovincial_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limiteinterprovincial_2.addFeatures(features_Limiteinterprovincial_2);
var lyr_Limiteinterprovincial_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limiteinterprovincial_2, 
                style: style_Limiteinterprovincial_2,
                popuplayertitle: "Limite interprovincial",
                interactive: true,
                title: '<img src="styles/legend/Limiteinterprovincial_2.png" /> Limite interprovincial'
            });
var format_Lmitepartidoslimtrofes_3 = new ol.format.GeoJSON();
var features_Lmitepartidoslimtrofes_3 = format_Lmitepartidoslimtrofes_3.readFeatures(json_Lmitepartidoslimtrofes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmitepartidoslimtrofes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmitepartidoslimtrofes_3.addFeatures(features_Lmitepartidoslimtrofes_3);
var lyr_Lmitepartidoslimtrofes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmitepartidoslimtrofes_3, 
                style: style_Lmitepartidoslimtrofes_3,
                popuplayertitle: "Límite partidos limítrofes",
                interactive: true,
                title: '<img src="styles/legend/Lmitepartidoslimtrofes_3.png" /> Límite partidos limítrofes'
            });
var format_Localidades_4 = new ol.format.GeoJSON();
var features_Localidades_4 = format_Localidades_4.readFeatures(json_Localidades_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_4.addFeatures(features_Localidades_4);
var lyr_Localidades_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidades_4, 
                style: style_Localidades_4,
                popuplayertitle: "Localidades",
                interactive: true,
                title: '<img src="styles/legend/Localidades_4.png" /> Localidades'
            });
var format_LmitepartidodeTigre_5 = new ol.format.GeoJSON();
var features_LmitepartidodeTigre_5 = format_LmitepartidodeTigre_5.readFeatures(json_LmitepartidodeTigre_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitepartidodeTigre_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmitepartidodeTigre_5.addFeatures(features_LmitepartidodeTigre_5);
var lyr_LmitepartidodeTigre_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmitepartidodeTigre_5, 
                style: style_LmitepartidodeTigre_5,
                popuplayertitle: "Límite partido de Tigre",
                interactive: true,
                title: '<img src="styles/legend/LmitepartidodeTigre_5.png" /> Límite partido de Tigre'
            });

lyr_TopografaTigre_0.setVisible(true);lyr_Hidrografia_1.setVisible(true);lyr_Limiteinterprovincial_2.setVisible(true);lyr_Lmitepartidoslimtrofes_3.setVisible(true);lyr_Localidades_4.setVisible(true);lyr_LmitepartidodeTigre_5.setVisible(true);
var layersList = [lyr_TopografaTigre_0,lyr_Hidrografia_1,lyr_Limiteinterprovincial_2,lyr_Lmitepartidoslimtrofes_3,lyr_Localidades_4,lyr_LmitepartidodeTigre_5];
lyr_Hidrografia_1.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'sag': 'sag', });
lyr_Limiteinterprovincial_2.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'nam': 'nam', 'gna': 'gna', 'vlj': 'vlj', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Lmitepartidoslimtrofes_3.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'vlp': 'vlp', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Localidades_4.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_LmitepartidodeTigre_5.set('fieldAliases', {'fid': 'fid', 'FRACCION': 'FRACCION', 'CLAVEF': 'CLAVEF', 'Partido': 'Partido', });
lyr_Hidrografia_1.set('fieldImages', {'gid': 'TextEdit', 'entidad': 'TextEdit', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'sag': 'TextEdit', });
lyr_Limiteinterprovincial_2.set('fieldImages', {'gid': 'TextEdit', 'entidad': 'TextEdit', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'nam': 'TextEdit', 'gna': 'TextEdit', 'vlj': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_Lmitepartidoslimtrofes_3.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'vlp': '', 'fdc': '', 'sag': '', });
lyr_Localidades_4.set('fieldImages', {'Nombre': 'TextEdit', });
lyr_LmitepartidodeTigre_5.set('fieldImages', {'fid': 'TextEdit', 'FRACCION': 'TextEdit', 'CLAVEF': 'TextEdit', 'Partido': 'TextEdit', });
lyr_Hidrografia_1.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'sag': 'no label', });
lyr_Limiteinterprovincial_2.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'fna': 'no label', 'nam': 'no label', 'gna': 'no label', 'vlj': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_Lmitepartidoslimtrofes_3.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'vlp': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_Localidades_4.set('fieldLabels', {'Nombre': 'header label - always visible', });
lyr_LmitepartidodeTigre_5.set('fieldLabels', {'fid': 'no label', 'FRACCION': 'no label', 'CLAVEF': 'no label', 'Partido': 'no label', });
lyr_LmitepartidodeTigre_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});