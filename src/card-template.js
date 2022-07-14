

const mangerCard = () => {
    return `
    <div class="card p-0 m-3 col-lg-3 col-md-6" >
        <div class="card-body bg-primary">
            <h5 class="card-title text-white">${manger.name}</h5>
            <h6 class="card-subtitle mb-2 text-white">Manger</h6>
        </div>
        <div class="card-body bg-secondary">
            <div class="card w-auto p-3" >
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: ${manager.email}</li>
                    <li class="list-group-item">Office number: ${manger.office}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

const engineerCard = () => {
    return `
    <div class="card p-0 m-3 col-lg-3 col-md-6" >
        <div class="card-body bg-primary">
            <h5 class="card-title text-white">${engineer.name}</h5>
            <h6 class="card-subtitle mb-2 text-white">Engineer</h6>
        </div>
        <div class="card-body bg-secondary">
            <div class="card w-auto p-3" >
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: ${engineer.email}</li>
                    <li class="list-group-item">GitHub: ${engineer.github}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

const internCard = () => {
    return `
    <div class="card p-0 m-3 col-lg-3 col-md-6" >
        <div class="card-body bg-primary">
            <h5 class="card-title text-white">${intern.name}</h5>
            <h6 class="card-subtitle mb-2 text-white">Intern</h6>
        </div>
        <div class="card-body bg-secondary">
            <div class="card w-auto p-3" >
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: ${intern.email}</li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}
