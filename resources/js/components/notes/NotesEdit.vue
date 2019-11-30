<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Edit note</div>
            <div class="panel-body">
                <form v-on:submit="saveForm()">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Title</label>
                            <input type="text" v-model="note.title" class="form-control">
                        </div>
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Text</label>
                            <tinymce-editor v-model="note.text" api-key="hnirpybcyxg50gn2me6z4bvuef7pdfb1dycxpcah9lai4lae" :init="{plugins: 'wordcount'}"></tinymce-editor>
                        </div>
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success">Save</button>
                        </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {

            let app = this;
            let id = app.$route.params.id;
            app.noteId = id;
            axios.get('/api/v1/notes/' + id)
                .then(function (resp) {
                    app.note = resp.data;
                })
                .catch(function () {
                    alert("Could not load your company")
                });
        },
        data: function () {
            return {
                noteId: null,
                note: {
                    title: '',
                    text: '',
                }
            }
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var newNote = app.note;
                axios.patch('/api/v1/notes/' + app.noteId, newNote)
                    .then(function (resp) {
                        app.$router.replace('/');
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your note");
                    });
            }
        }
    }
</script>
