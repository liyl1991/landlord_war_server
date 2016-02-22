CREATE TABLE game_history
(
	uid VARCHAR(32) NOT NULL,
	is_landlord INT,
	result INT,
	other1 VARCHAR(32),
	other2 VARCHAR(32)

) 
;


CREATE TABLE friend_list
(
	uid VARCHAR(32) NOT NULL,
	friend_uid VARCHAR(32) NOT NULL,
	PRIMARY KEY (uid, friend_uid)

) 
;


CREATE TABLE player
(
	uid VARCHAR(32) NOT NULL,
	nickname VARCHAR(255) NOT NULL,
	head_img_url VARCHAR(255),
	total_score INT DEFAULT 0,
	PRIMARY KEY (uid)

) 
;
