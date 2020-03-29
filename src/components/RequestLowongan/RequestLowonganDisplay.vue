<template>
<div>
    <h1>Request Lowongan display all</h1>
    <div>
        <ul v-for ="req in requestLowongan" :key="req.id">
            <li>
                <span>
                    {{req.jobTitle}}
                </span>
            </li>
        </ul>
    </div>
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