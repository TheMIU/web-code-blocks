document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('.vehicle-checkbox');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            filterVehicles();
        });
    });

    function filterVehicles() {
        const selectedVehicle = document.querySelector('input[name="vehicle"]:checked').value;
        const selectedColor = document.querySelector('input[name="color"]:checked').value;

        const vehicles = document.querySelectorAll('[data-tags]');
        vehicles.forEach(function(vehicle) {
            const tags = vehicle.getAttribute('data-tags').split(',');
            const vehicleType = tags[0];
            const vehicleColor = tags[1];

            if ((selectedVehicle === 'all-vehicles' || vehicleType === selectedVehicle) &&
                (selectedColor === 'all-colors' || vehicleColor === selectedColor)) {
                vehicle.style.display = 'block';
            } else {
                vehicle.style.display = 'none';
            }
        });
    }
});
