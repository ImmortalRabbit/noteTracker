<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Create new note</div>
            <div class="panel-body">
                <form v-on:submit="saveForm()">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Title</label>
                            <input type="text" v-model="note.title" class="form-control">
                        </div>
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Text</label>
                            <tinymce-editor v-model="note.text" api-key="hnirpybcyxg50gn2me6z4bvuef7pdfb1dycxpcah9lai4lae" :init="{plugins: 'wordcount'}"></tinymce-editor>
<!--                            <textarea type="text" v-model="note.text" class="form-control" id="content-text"></textarea>-->
                        </div>
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success">Create</button>
                        </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
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
                let newNote = app.note;
                axios.post('/api/v1/notes', newNote)
                    .then(function (resp) {
                        app.$router.push({path: '/'});
                    })
                    .catch(function (resp) {
                        alert("Could not create your note");
                    });
            }
        }
    }
</script>
