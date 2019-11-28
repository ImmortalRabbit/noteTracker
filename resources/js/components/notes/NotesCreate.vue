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
                            <textarea type="text" v-model="note.text" class="form-control" name="editor-container"></textarea>
                        </div>
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success">Create</button>
                        </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script src="https://cdn.ckeditor.com/ckeditor5/15.0.0/classic/ckeditor.js"></script>
<script>
    CKEDITOR.replace('editor-container',{});
</script>

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
                var newNote = app.note;
                axios.post('/api/v1/notes', newNote)
                    .then(function (resp) {
                        app.$router.push({path: '/'});
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your note");
                    });
            }
        }
    }
</script>
