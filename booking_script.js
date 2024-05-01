document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("bookingForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            //  form data
            const checkInDate = document.getElementById("check-in").value;
            const checkOutDate = document.getElementById("check-out").value;
            const numAdults = document.getElementById("adults").value;
            const price = document.getElementById("price").value;

            // Store booking details 
            sessionStorage.setItem("checkInDate", checkInDate);
            sessionStorage.setItem("checkOutDate", checkOutDate);
            sessionStorage.setItem("numAdults", numAdults);
            sessionStorage.setItem("price", price);

            // Redirect to booking confirmation page
            window.location.href = "bookingconfirmation.html";
        });
    }

    // Retrieve booking details if available
    const checkInDate = sessionStorage.getItem("checkInDate");
    const checkOutDate = sessionStorage.getItem("checkOutDate");
    const numAdults = sessionStorage.getItem("numAdults");
    const price = sessionStorage.getItem("price");

    // Display booking details on the confirmation page
    if (checkInDate && checkOutDate && numAdults && price) {
        document.getElementById("check-in-date").textContent = checkInDate;
        document.getElementById("check-out-date").textContent = checkOutDate;
        document.getElementById("num-adults").textContent = numAdults;
        document.getElementById("price").textContent = price;
    }
});
