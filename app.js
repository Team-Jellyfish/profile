function serializeObject()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function submitForm() {
	var t = JSON.stringify($('#form[name="RoomMe"]').serializeObject()); 
	console.log(t);
        $("#result").text(JSON.stringify($('form[name="RoomMe"]').serializeObject()));
        return false;
};
