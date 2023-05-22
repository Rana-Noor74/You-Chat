$.ajax({
    "url" : "/admin-ajax/getAll-companies/",
    "method" : "GET",
    "success" : function(response){
        if(response.success){
            let companyArray = response.message;
            for(let i = 0; i < companyArray.length; i++){
                $("#companyTableBody").append(`
                    <tr>
                        <td>${i+1}</td>
                        <td>${companyArray[i].name}</td>
                        <td>${companyArray[i].email}</td>
                        <td>${companyArray[i].password}</td>
                        <td>
                            <span class="dataTablesActionIconsText">
                                <i class="fas fa-lock text-info"></i>
                            </span>
                            <span class="dataTablesActionIconsText">
                                <a href="/admin/update-company/${companyArray[i]._id}/">
                                    <i class="fas fa-pencil-alt text-success"></i>
                                </a>
                            </span>
                            <span class="dataTablesActionIconsText">
                                <a href="/admin/company-details/${companyArray[i]._id}/">
                                    <i class="far fa-eye"></i>
                                </a>
                            </span>
                            <span class="dataTablesActionIconsText" data-companyDocId="${companyArray[i]._id}">
                                <i class="fas fa-trash text-danger deleteCompanyBtn"></i>
                            </span> 
                        </td>
                    </tr>
                `);

                if(i == ((companyArray.length)-1)){
                    $("#company-DataTable").DataTable({
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
                    }).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)");
                };
            };
        }else{
            Swal.fire({
                title: "Failed to fetch data",
                text: "An unexpected error has been occured.",
                icon: "error",
                confirmButtonColor: "red",
            });
        };
    }
});

$(document).on("click", ".deleteCompanyBtn", function(){
    console.log("I am delete")
    Swal.fire({
        title: "Are you sure?",
        text: "You want to delete this company?",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel!",
        confirmButtonClass: "btn btn-success mt-2",
        cancelButtonClass: "btn btn-danger ms-2 mt-2",
        buttonsStyling: !1
    }).then(function(e) {
        e.value ? Swal.fire({
            title: "Deleted!",
            text: "Company has been deleted successfully!",
            icon: "success",
            confirmButtonColor: "#5156be"
        }) : e.dismiss === Swal.DismissReason.cancel && Swal.fire({
            title: "Cancelled",
            text: "You cancel the deletion",
            icon: "error",
            confirmButtonColor: "#5156be"
        })
    })
})