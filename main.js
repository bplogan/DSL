function showErrorMessage(message, $container, delay) {
	$err = $('<div/>', {
		id : 'error_message'
	});
	$err.attr('data-role', 'popup');
	$err.attr('data-theme', 'b');
	$err.attr('data-overlay-theme', 'a');
	$err.attr('data-transition', 'slidedown');
	$err.attr('data-position-to', 'window');
	$err.addClass('ui-content');
	$err.html(message);

	$container.children().detach();
	$container.append($err);

	$err.popup();
	$err.popup("open");

	if (delay > 0) {
		setTimeout(function() {
			$err.popup("close");
		}, delay);
	}
}

function SubmitForm1(){
	var CID = window.localStorage.getItem("CID");
	var aSMAW = "0";
	if ($("#aSMAW").is(':checked')) {
		aSMAW = 1;
	}
	var aGMAW = "0";
	if ($("#aGMAW").is(':checked')) {
		aGMAW = 1;
	}
	var aFCAW = "0";
	if ($("#aFCAW").is(':checked')) {
		aFCAW = 1;
	}
	var aSAW= "0";
	if ($("#aSAW").is(':checked')) {
		aSAW = 1;
	}
	var aGTAW = "0";
	if ($("#aGTAW").is(':checked')) {
		aGTAW = 1;
	}
	var aOther = "0";
	if ($("#aOther").is(':checked')) {
		aOther = 1;
	}
	var bSMAW = "0";
	if ($("#bSMAW").is(':checked')) {
		bSMAW = 1;
	}
	var bGMAW = "0";
	if ($("#bGMAW").is(':checked')) {
		bGMAW = 1;
	}
	var bFCAW = "0";
	if ($("#bFCAW").is(':checked')) {
		bFCAW = 1;
	}
	var bSAW= "0";
	if ($("#bSAW").is(':checked')) {
		bSAW = 1;
	}
	var bGTAW = "0";
	if ($("#bGTAW").is(':checked')) {
		bGTAW = 1;
	}
	var bOther = "0";
	if ($("#bOther").is(':checked')) {
		bOther = 1;
	}
	var qc = $("input[name='crad']:checked").val();
	var qd = $("input[name='drad']:checked").val();
	var qe = encodeURI($("#eNOTES").val());
	var qf = $("input[name='frad']:checked").val();
	var qg = $("input[name='grad']:checked").val();
	var qh = $("input[name='hrad']:checked").val();
	var qi = $("input[name='irad']:checked").val();
	var qj = $("input[name='jrad']:checked").val();
	var qk = $("input[name='krad']:checked").val();
	var ql = $("input[name='lrad']:checked").val();
	var qm = $("input[name='mrad']:checked").val();
	var qn = $("input[name='nrad']:checked").val();
	var qo = "0";
	if ($("#oYES").is(':checked')) {
		qo = "1";
	}
	var qp = encodeURI($("#pCOMMENTS").val());	
	alert(qp);
	var ftype = $("input[name='chkType']:checked").val();
	var pass = $("input[name='radPass']:checked").val();
	var by = encodeURI($("#txtBy").val());
	alert(by);
	$.ajax({
		type : "POST",
		url : "http://mycfit.ca/site_dsl/services/add_form.php",
		async : false,
		data : {'aSMAW' : aSMAW, 'aGMAW' : aGMAW, 'aFCAW' : aFCAW, 'aSAW' : aSAW, 'aGTAW' : aGTAW, 'aOTHER' : aOther,
				'bSMAW' : bSMAW, 'bGMAW' : bGMAW, 'bFCAW' : bFCAW, 'bSAW' : bSAW, 'bGTAW' : bGTAW, 'bOTHER' : bOther,
				'qc' : qc, 'qd' : qd, 'qe' : qe, 'qf' : qf, 'qg' : qg, 'qh' : qh, 'qi' : qi, 'qj' : qj, 'qk' : qk, 'ql' : ql, 'qm' : qm, 'qn' : qn, 'qo' :qo, 'qp' : qp,
				'ftype' : ftype, 'pass' : pass, 'by' : by, 'CID' : CID
			   },
		dataType : "json",
		success : function(data) {
			
			if(data.result > 0){
				window.localStorage.setItem("SUCCESS",data.result);
				window.location= "forms.html";
			}
			
		},
		error : function(xhr, desc, err) {
			showErrorMessage("Woops!  Something went wrong, please try again.", $("#err"), 0);
			
		}
	});
	
			
			
			
			
	
}
