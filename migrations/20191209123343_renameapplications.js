
exports.up = function(knex) {
    return knex.schema.table("applications",function(table){
        table.renameColumn("application_id","id");

      // table.renameColumn("jobs_id", "id");
    })
};

exports.down = function(knex) {
  
};
