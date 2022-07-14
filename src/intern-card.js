const internCard = (name, id, email, school) => {
    return `
    <div class="card p-0 m-3 col-lg-3 col-md-6" >
        <div class="card-body bg-primary">
            <h5 class="card-title text-white">${name}</h5>
            <h6 class="card-subtitle mb-2 text-white">Intern</h6>
        </div>
        <div class="card-body bg-secondary">
            <div class="card w-auto p-3" >
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}

module.exports = internCard;
