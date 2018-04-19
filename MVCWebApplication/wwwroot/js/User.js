var tableNo = 1;
var Url = 'http://localhost:63941/api/';
$(document).ready(function () {
    BindUserdetails()
});

function BindUserdetails() {
    var rowData = '';
    var Userdetailsurl = Url + "UserInfoApi/GetUserDetails";
    $.ajax({
        type: "GET",
        url: Userdetailsurl,
        async: true,
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        Accept: "application/json; charset=utf-8",
        crossDomain: true,
        success: function (data) {
            if (data.length > 0) {
                $("#noDataDiv").hide();
                $("#dataDiv").show();
                $.each(data, function (key, value) {
                    var id = key + 1
                    rowData += "<tr>";
                    rowData += '<td class="Grid-td">' + value.userId + "</td>";
                    rowData += '<td class="Grid-td">' + value.userName + '</td><td class="Grid-td">' + value.emailId + '</td><td class="Grid-td">' + value.mobileNumber + '</td>';
                });
                var tableHeader = "<table id='example" + tableNo.toString() + "' class='display' width='100%'><thead><tr>";
                tableHeader += "<th class='grid-header'>User Id</th><th class='grid-header'>Name</th><th class='grid-header'>Email Id</th><th class='grid-header'>Mobile No</th>";
                tableHeader += "</tr></thead><tbody>";
                $("#tableDiv").html(tableHeader + rowData + '</tr></tbody></table>');

                tableNo++;
            }
            else {
                $("#lblNoData").html("No data found");
                $("#noDataDiv").hide();
                $("#dataDiv").hide();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Error occurred while fetching project details" + "\n" + jqXHR + "\n" + textStatus + "\n" + errorThrown);
        }
    });
}