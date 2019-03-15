var db = null;
var var_no = null;
var position = null;
var index;

$(document).ready( function() {
    openDB();
    createTable();

    $('#submit1').click( function() {
        insertNamecard();
    });

    $('#cancel1').click( function() {
        $('#relation').val('가족').attr('selected', 'selected');
        $('#relation').selectmenu('refresh');
    });

    $('#search2').click( function() {
        var name = $('#uName').val();
        selectNamecard2(name);
    });
    $('#submit2').click( function() {
        updateNamecard();
    });
    $('#cancel2').click( function() {
        $('#uRelation').val('가족').attr('selected', 'selected');
        $('#uRelation').selectmenu('refresh');
    });
    $('#search3').click( function() {
        var name = $('#dName').val();
        selectNamecard3(name);
    });
    $('#submit3').click( function() {
        deleteNamecard();
    });
    $('#search4').click( function() {
        var name = $('#sName').val();
        selectNamecard4(name);
    });

    $('#first').click( function() {
        position='first';
        listNamecard();
    });
    $('#prev').click( function() {
        position='prev';
        listNamecard();
    });
    $('#next').click( function() {
        position='next';
        listNamecard();
    });
    $('#last').click( function() {
        position='last';
        listNamecard();
    });
});

function openDB(){
   db = window.openDatabase('namecardDB', '1.0', '명함DB', 1024*1024);
   console.log('1_DB 생성...');
}

function createTable() {
   db.transaction(function(tr){
   var createSQL = 'create table if not exists namecard(relation text, name text, tel text, address text, email text)';
   tr.executeSql(createSQL, [], function(){
     	  console.log('2_1_테이블생성_sql 실행 성공...');
	   }, function(){
	      console.log('2_1_테이블생성_sql 실행 실패...');
	   });
	   }, function(){
	      console.log('2_2_테이블 생성 트랜잭션 실패...롤백은 자동');
	   }, function(){
	      console.log('2_2_테이블 생성 트랜잭션 성공...');
     });
}

function insertNamecard(){
    db.transaction(function(tr){
  		var relation = $('#relation').val();
  		var name = $('#name').val();
        var tel = $('#tel').val();
        var address = $('#address').val();
        var email = $('#email').val();

  		var insertSQL = 'insert into namecard(relation, name, tel, address, email) values(?, ?, ?, ?, ?)';
     	tr.executeSql(insertSQL, [relation, name, tel, address, email], function(tr, rs){
      	    console.log('3_ 명함 등록...no: ' + rs.insertId);
	        alert('명함이름 ' + $('#name').val() + ' 이 입력되었습니다');
	   		$('#name').val('');
			$('#relation').val('가족').attr('selected', 'selected');
			$('#relation').selectmenu('refresh');
            $('#tel').val('');
            $('#address').val('');
            $('#email').val('');
		}, function(tr, err){
				alert('DB오류 ' + err.message + err.code);
			}
		);
    });
 }

function listNamecard(){
  db.transaction(function(tr){
 	var selectSQL = 'select * from namecard';
  	tr.executeSql(selectSQL, [], function(tr, rs){
       console.log(' 명함 조회... ' + rs.rows.length + '건.');
       if (position == 'first') {
       	  if(index == 0)
       	  	alert('더 이상의 명함이 없습니다');
          else
          	index = 0;
	   	 }
       else if (position == 'prev') {
       	  if(index == 0)
       	  	alert('더 이상의 명함이 없습니다');
          else
          	index = --index;
	 		 }
       else if (position == 'next') {
       	  if(index == rs.rows.length-1)
       	  	alert('더 이상의 명함이 없습니다');
		      else
		      	index = ++index;
       }
       else
       {
       	  if(index == rs.rows.length-1)
       	  	alert('더 이상의 명함이 없습니다');
		      else
	       	  index = rs.rows.length-1;
       }
       $('#sRelation').val(rs.rows.item(index).relation);
       $('#sName').val(rs.rows.item(index).name);
 		});
  });
}

function updateNamecard(){
    db.transaction(function(tr){
    	var type = $('#uRelation').val();
    	var new_name = $('#uName').val();
    	var old_name = $('#uName2').val();
		var updateSQL = 'update namecard set relation = ?, name = ? where name = ?';
     	tr.executeSql(updateSQL, [relation, new_name, old_name], function(tr, rs){
	         console.log('5_책 수정.... ') ;
	         alert('명함이름 ' + $('#uName').val() + ' 이 수정되었습니다');
	   		 $('#uName2').val('');
	   		 $('#uRelation').val('가족').attr('selected', 'selected');
			 $('#uRelation').selectmenu('refresh');
             $('#uTel').val('');
             $('#uAddress').val('');
             $('#uEmail').val('');
		}, function(tr, err){
				alert('DB오류 ' + err.message + err.code);
			}
		);
    });
}

function deleteNamecard(){
   db.transaction(function(tr){
	  var name = $('#dName').val();
 	  var deleteSQL = 'delete from namecard where name = ?';

	  tr.executeSql(deleteSQL, [name], function(tr, rs){
	     console.log('6_명함 삭제... ');
	     alert('명함이름 ' + $('#dName').val() + ' 이 삭제되었습니다');
	   	 $('#dRelation').val('');
         $('#dName').val('');
         $('#dTel').val('');
         $('#dAddress').val('');
         $('#eEmail').val('');
		}, function(tr, err){
				alert('DB오류 ' + err.message + err.code);
			}
		);
   });
}

function selectNamecard2(name){
   db.transaction(function(tr){
	 var selectSQL = 'select relation, name from namecard where name=?';
  	 tr.executeSql(selectSQL, [name], function(tr, rs){
  	 	 $('#sReletion').val(rs.rows.item(0).relation).attr('selected', 'selected');
	 		 $('#sRelation').selectmenu('refresh');
       $('#sName').val(rs.rows.item(0).name);
	 	});
   });
}

function selectNamecard3(name){
   db.transaction(function(tr){
 	 var selectSQL = 'select relation, name from namecard where name=?';
		tr.executeSql(selectSQL, [name], function(tr, rs){
			 $('#dRelation').val(rs.rows.item(0).relation);
       $('#dName').val(rs.rows.item(0).name);
		}, function(tr, err){
				alert('DB오류 ' + err.message + err.code);
			}
		);
	});
}

function selectNamecard4(name){
   db.transaction(function(tr){
 	 var selectSQL = 'select relation, name from namecard where name=?';
  	 tr.executeSql(selectSQL, [name], function(tr, rs){
         $('#sRelation').val(rs.rows.item(0).relation);
         $('#sName').val(rs.rows.item(0).name);
		}, function(tr, err){
				alert('DB오류 ' + err.message + err.code);
			}
		);
   });
 };
