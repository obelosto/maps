window.onload = function () {

    ymaps.ready(function () {

        var mapA = new ymaps.Map('mapA', {
            center: [51.963836, 4.624820],
            zoom: 8,
            controls: ['zoomControl']
        });
        ymaps.geoXml.load('https://raw.githubusercontent.com/obelosto/maps/main/kml/MyWheels.kml')
            .then(function (res) {
                mapA.geoObjects.add(res.geoObjects);
            }, function (error){   // Called if the YMapsML file failed to load
                alert('Error: ' + error);
            });


        var mapB = new ymaps.Map('mapB', {
            center: [51.117418, 4.185367],
            zoom: 8,
            controls: ['zoomControl']
        });
        //After the data in the YMapsML file is loaded, a callback function is called
        ymaps.geoXml.load('https://raw.githubusercontent.com/obelosto/maps/main/kml/GoSharing.kml')
            .then(function (res) {
                //Add a collection of geo objects to the map
                mapB.geoObjects.add(res.geoObjects);
            }, function (error){   // Called if the YMapsML file failed to load
                alert('Error: ' + error);
            });


        var mapC = new ymaps.Map('mapC', {
            center: [51.619425, 7.099491],
            zoom: 8,
            controls: ['zoomControl']
        });
        //After the data in the YMapsML file is loaded, a callback function is called
        ymaps.geoXml.load('https://raw.githubusercontent.com/obelosto/maps/main/kml/Bondi.kml')
            .then(function (res) {
                //Add a collection of geo objects to the map
                mapC.geoObjects.add(res.geoObjects);
            }, function (error){   // Called if the YMapsML file failed to load
                alert('Error: ' + error);
            });

////////////////////////////////////////////////////////////


        var myMap = new ymaps.Map('mergedMap', {
            center: [52.07122129, 4.47517342],
            zoom: 7,
            controls: ['zoomControl']
        });
        //After the data in the YMapsML file is loaded, a callback function is called
        ymaps.geoXml.load('https://raw.githubusercontent.com/obelosto/maps/main/kml/Bondi.kml')
            .then(function (res) {
                //Add a collection of geo objects to the map
                myMap.geoObjects.add(res.geoObjects);
            }, function (error){   // Called if the YMapsML file failed to load
                alert('Error: ' + error);
            });

        //After the data in the YMapsML file is loaded, a callback function is called
        ymaps.geoXml.load('https://raw.githubusercontent.com/obelosto/maps/main/kml/GoSharing.kml')
            .then(function (res) {
                //Add a collection of geo objects to the map
                myMap.geoObjects.add(res.geoObjects);
            }, function (error){   // Called if the YMapsML file failed to load
                alert('Error: ' + error);
            });

        //After the data in the YMapsML file is loaded, a callback function is called
        ymaps.geoXml.load('https://raw.githubusercontent.com/obelosto/maps/main/kml/MyWheels.kml')
            .then(function (res) {

                res.geoObjects.options.set({
                    "preset": "gpx#plain"
                });

                //Add a collection of geo objects to the map
                myMap.geoObjects.add(res.geoObjects);
            }, function (error){   // Called if the YMapsML file failed to load
                alert('Error: ' + error);
            });


    });

}