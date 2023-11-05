<script lang="ts">
    // import type {PageData} from './$types';

    // export let data: PageData;
</script>

<div class="container-fluid">
    <h1 style="padding-top: 20px; text-align: center">EMS Report</h1>
    <div class="container-fluid mx-3">
        <form id="patientinformation" class="formClass">
            <div class="grid">
                <div>
                    <label for="ptfirstname"> First</label>
                    <input style="width: 200px; height: 50px;" type="text" id="ptfirstname"> <br>
                    <label for="ptlastname"> Last</label>
                    <input style="width: 200px; height: 50px;" type="text" id="ptlastname"> <br>
                </div>
                <div>
                    <label for="ptDOB"> DOB </label>
                    <input style="width: 200px; height: 50px;" type="date" id = "ptDOB"> <br>
                
                    <label for="ptage"> Age</label>
                    <input style="width: 200px; height: 50px;" type="number" id="ptage"> <br>
                </div>
                <div>
                <!--  should save as 0 for male, 1 for female, 2 for unknown  -->
                    <label for="ptgender"> Gender</label>
                    <input style="width: 200px; height: 50px;" type="number" id="ptgender"> <br>

                    <label for="ptCC"> Chief Complaint</label>
                    <input style="width: 200px; height: 50px;" type="text" id="ptCC"> <br>
                </div>
                <div>
                <!-- implement dropdown later on -->
                    <label for="hospitaldestination"> Hospital Destination </label>
                    <input style="width: 200px; height: 50px;" type="text" id="hospitaldestination"> <br>

                    <label for="notifybutton">Notify</label>
                    <button style="background-color: #f44336; width: 200px; height: 50px; border:none;" id="notifyButton"> ! ! !</button>
                </div>
            </div>
        </form>
    </div>
    <hr style="border-top: 2px solid black; width: 75%;">
    <h1 style="text-align: center; padding-top: 20px">Vital Signs</h1>
    <div class="container-fluid"></div>
</div>
<style>
    .formClass{
        font-size: 1em;
    }
</style>