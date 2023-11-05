<script lang="ts">
    import type {PageData} from './$types';
    import {MapLibre} from 'svelte-maplibre';
    export let data;
</script>

<body class="container-fluid">
<main>
    <h1 class="mb-2" style="font-size: 2.5em; text-align: center;"> Hospital Dashboard</h1>
    <div class="container-fluid" >
        
        <h1 class="mb-2" style="font-size: 1.2em;"> Incoming Patients</h1>
        <table role="grid">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Category</th>
                <th>ETA</th>
                <th> Actions </th>
            </tr>
        {#each data.rows as {first, last, age, type, cc, acknowledged, ETA}}
            <tr>
                <td>{first} {last}</td>
                <td>{age}</td>
                <td>{type}</td>
                <td>{ETA}</td>
                <td> 
                {#if acknowledged}
                    <button class="secondary">Details</button>
                {:else}
                    <button>Aknowledge</button>
                {/if}
                </td>
            </tr>
        {/each}
        </table>
    </div>

    <!-- credit: MapLibre mapping libre Svelte wrapper -->
    <div class="container-fluid">
        <h1 class="mb-2" style="font-size: 1.2em;" > Unit Map </h1>
        <div class="containerfluid">
        <MapLibre
        center={[-73.75, 42.5]}
        zoom={7}
        class="map"
        standardControls
        style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        >
        <!--
        {#each markers as { lngLat, label, name } (label)}
            <Marker
            {lngLat}
            on:click={() => (clickedName = name)}
            class="border-gray-200 border shadow-2xl focus:outline-2 focus:outline-black w-8 h-8 bg-red-300 text-black rounded-full grid place-items-center"
            >
            <span>
                {label}
            </span>

            <Popup openOn="hover" offset={[0, -10]}>
                <div class="text-lg font-bold">{name}</div>
            </Popup>
            </Marker>
        {/each}
        -->
        </MapLibre>
        <style>
            .map 
            {
                height: 1000px;
                width: 1000px;
            }
        </style>
        </div>
    </div>
</main>
</body>