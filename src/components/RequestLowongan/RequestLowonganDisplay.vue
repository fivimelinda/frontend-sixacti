<template>
<div>
    <h1>Request Lowongan display all</h1>
    <!-- <div>
        <ul v-for ="req in requestLowongan" :key="req.id">
            <li>
                <span>
                    {{req.jobTitle}}
                </span>
            </li>
        </ul>
    </div> -->
    <table class="table">
        <thead>
            <tr>
                <th scope="col">No.</th>
                <th scope="col">Judul</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Tanggal diiginkan</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="req in requestLowongan" :key="req.id">
                <th scope=row>{{req.id}}</th>
                <td>{{req.jobTitle}}</td>
                <td>{{req.jumlah}}</td>
                <td>{{req.dateWanted}}</td>
                <td>{{req.status}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            requestLowongan: []
        }
    },
    mounted() {
        this.load()
    },
    methods: {
        load() {
            axios.get('http://localhost:8081/request/all').then(res => {
                this.requestLowongan = res.data
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>