<template>
    <div class="contact">
        <div class="title">
            Contact
        </div>
        <div id="map"></div>
    </div>
    
    <div class="contact">
        <div class="title">
            Office & Factory
        </div>
        <div class="content">
            Komplek Multiguna Blok E1-E2<br>
            Jln. Raya Serpong km 7.<br>
            Pakualam, Serpong Utara, Tanggerang Selatan.<br>
            Tlp.: (021) 5399 254, 5398 006<br>
            Fax.: (021) 5399 165, 5398 010
        </div>
    </div>
</template>

<script>

// import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
export default {
    name: 'Contact',
    methods: {
        initMap(){
            let location = [106.64522047538054, -6.234875373571143];

            mapboxgl.accessToken = 'pk.eyJ1Ijoia3l1cmluZSIsImEiOiJja3RlZWN3aXMxMTdrMnZwbmZjc3hubzVmIn0.i2683d8q__o8dCTml7x9DA';
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: location, // starting position
                zoom: 15
            });
            map.addControl(new mapboxgl.NavigationControl());

            const marker = new mapboxgl.Marker()
            .setLngLat(location)
            .addTo(map);
        },
        
    },
    mounted(){
        this.initMap();
    }
}
</script>

<style scoped src="./style.scss"></style>
