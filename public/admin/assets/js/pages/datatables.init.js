$(document).ready(function() {
    $("#datatable-buttons").DataTable({
       lengthChange:1,
        buttons: [
            {
                extend: 'copy',
                exportOptions: {
                columns: ':visible',
                rows: ':visible'
                }
            },
            {
                extend: 'pdf',
                exportOptions: {
                columns: ':visible',
                rows: ':visible'
                }
            },
            {
                extend: 'csv',
                exportOptions: {
                columns: ':visible',
                rows: ':visible'
                }
            },
            {
                extend : 'excel',
                exportOptions : {
                columns: ':visible',
                rows: ':visible'
                }
            },
            { 
                extend : 'print',
                exportOptions : {
                columns: ':visible',
                rows: ':visible'
                }
            }
        ],
    }).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)")
})


