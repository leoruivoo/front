<!DOCTYPE html>
<html lang="pt">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>CRUD - Mentoria</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="main.js"></script>
    </head>
<body>
    <main>
        <h2>Cadastra Cursoo</h2>
        <div class="addCurso">
            <h3>Curso:</h3>
            <input type="text" name="cursoName" value="">

            <h3>Departamento:</h3>
            <input type="text" name="departamentoName" value="">

            <button type="submit" onclick="postCurso()">Add</button>
        </div>
            <ul class="respList">
                <li>
                    <span class="resp">01</span>
                </li>
            </ul>
    </main>
    </body>
</html>
