function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {


if (msg == ".봇기종") {

var battery=Device.getBatteryLevel();

var device_profile_name = android.provider.Settings.Global.getString(Api.getContext().getContentResolver(), "device_name");

var isCharging = Device.isCharging()?"배터리 충전중":"배터리 사용중";

replier.reply("봇 베터리상태『🔋』:  "+battery+"\n『🔌』:  "+isCharging+"\n폰기종『📱』:  "+device_profile_name);

}
}
