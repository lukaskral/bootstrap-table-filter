Bootstrap table filters
=======================

This is an extension for [Bootstrap table](http://wenzhixin.net.cn/p/bootstrap-table/docs/extensions.html) module which aim is to provide data tables with filtering feature.

Usage
-----
### Simple example
First of all, you need to include Bootstrap and this extension:
```
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
    <link rel="../src/stylesheet" href="bootstrap-table-filter.css">

    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="../src/bootstrap-table-filter.js"></script>
```

Then you can create placeholder element and initialize it with javascript as a filter:
```
<div id="filter-bar"></div>
<script type="javascript">
    $(function() {
        $('#filter-bar').bootstrapTableFilter({
            filters:[
                {
                    field: 'id',    // field identifier
                    label: 'ID',    // filter label
                    type: 'range'   // filter type
                },
                {
                    field: 'label',
                    label: 'Label',
                    type: 'search',
                    enabled: true   // filter is visible by default
                },
                {
                    field: 'role',
                    label: 'Role',
                    type: 'select',
                    values: [
                        {id: 'ROLE_ANONYMOUS', label: 'Anonymous'},
                        {id: 'ROLE_USER', label: 'User'},
                        {id: 'ROLE_ADMIN', label: 'Admin'}
                    ],
                },
                {
                    field: 'username',
                    label: 'User Name',
                    type: 'search'
                },
                {
                    field: 'city',
                    label: 'City',
                    type: 'ajaxSelect',
                    source: 'http://example.com/get-cities.php'
                }
            ],
            onSubmit: function() {
                var data = $('#filter-bar').bootstrapTableFilter('getData');
                console.log(data);
            }
        });
    });
</script>
```