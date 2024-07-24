const farmsUrl = 'http://localhost:3000/farms';
const flocksUrl = 'http://localhost:3000/flocks';
const feedUrl = 'http://localhost:3000/feed';
const healthRecordsUrl = 'http://localhost:3000/healthRecords';
const eggProductionUrl = 'http://localhost:3000/eggProduction';
const salesUrl = 'http://localhost:3000/sales';

document.addEventListener('DOMContentLoaded', () => {
    fetchFarms();
    fetchFlocks();
    fetchFeed();
    fetchHealthRecords();
    fetchEggProduction();
    fetchSales();
});

function fetchFarms() {
    fetch(farmsUrl)
        .then(res => res.json())
        .then(data => {
            const content = document.getElementById('farmsContainer');
            data.forEach(farm => {
                const farmDiv = document.createElement('div');

                const name = document.createElement('h2');
                name.textContent = farm.name;
                farmDiv.appendChild(name);

                const location = document.createElement('h3');
                location.textContent = farm.location;
                farmDiv.appendChild(location);

                const owner = document.createElement('h3');
                owner.textContent = farm.owner;
                farmDiv.appendChild(owner);

                content.appendChild(farmDiv);
            });
        });
}

function fetchFlocks() {
    fetch(flocksUrl)
        .then(res => res.json())
        .then(flocks => {
            const flockies = document.getElementById('flocksContainer');
            flocks.forEach(flock => {
                const flockDiv = document.createElement('div');

                const name = document.createElement('h2');
                name.textContent = flock.name;
                flockDiv.appendChild(name);

                const breed = document.createElement('h3');
                breed.textContent = `Breed: ${flock.breed}`;
                flockDiv.appendChild(breed);

                const size = document.createElement('h3');
                size.textContent = `Size: ${flock.size}`;
                flockDiv.appendChild(size);

                const age = document.createElement('h3');
                age.textContent = `Age: ${flock.age}`;
                flockDiv.appendChild(age);

                flockies.appendChild(flockDiv);
            });
        });
}

function fetchFeed() {
    fetch(feedUrl)
        .then(res => res.json())
        .then(feeds => {
            const container = document.getElementById('feedContainer');
            feeds.forEach(feed => {
                const feedDiv = document.createElement('div');

                const type = document.createElement('h2');
                type.textContent = `Type: ${feed.type}`;
                feedDiv.appendChild(type);

                const quantity = document.createElement('h3');
                quantity.textContent = `Quantity: ${feed.quantity}`;
                feedDiv.appendChild(quantity);

                const date = document.createElement('h3');
                date.textContent = `Date: ${feed.date}`;
                feedDiv.appendChild(date);

                container.appendChild(feedDiv);
            });
        });
}

function fetchHealthRecords() {
    fetch(healthRecordsUrl)
        .then(res => res.json())
        .then(records => {
            const container = document.getElementById('healthRecordsContainer');
            records.forEach(record => {
                const recordDiv = document.createElement('div');

                const issue = document.createElement('h2');
                issue.textContent = `Issue: ${record.issue}`;
                recordDiv.appendChild(issue);

                const treatment = document.createElement('h3');
                treatment.textContent = `Treatment: ${record.treatment}`;
                recordDiv.appendChild(treatment);

                const date = document.createElement('h3');
                date.textContent = `Date: ${record.date}`;
                recordDiv.appendChild(date);

                container.appendChild(recordDiv);
            });
        });
}

function fetchEggProduction() {
    fetch(eggProductionUrl)
        .then(res => res.json())
        .then(production => {
            const container = document.getElementById('eggProductionContainer');
            production.forEach(record => {
                const recordDiv = document.createElement('div');

                const date = document.createElement('h2');
                date.textContent = `Date: ${record.date}`;
                recordDiv.appendChild(date);

                const quantity = document.createElement('h3');
                quantity.textContent = `Quantity: ${record.quantity} eggs`;
                recordDiv.appendChild(quantity);

                container.appendChild(recordDiv);
            });
        });
}

function fetchSales() {
    fetch(salesUrl)
        .then(res => res.json())
        .then(sales => {
            const container = document.getElementById('salesContainer');
            sales.forEach(sale => {
                const saleDiv = document.createElement('div');

                const product = document.createElement('h2');
                product.textContent = `Product: ${sale.product}`;
                saleDiv.appendChild(product);

                const quantity = document.createElement('h3');
                quantity.textContent = `Quantity: ${sale.quantity}`;
                saleDiv.appendChild(quantity);

                const price = document.createElement('h3');
                price.textContent = `Price: $${sale.price}`;
                saleDiv.appendChild(price);

                const date = document.createElement('h3');
                date.textContent = `Date: ${sale.date}`;
                saleDiv.appendChild(date);

                container.appendChild(saleDiv);
            });
        });
}
