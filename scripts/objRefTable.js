const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Plugins.Browser,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Touch.Exps.TouchCount,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Touch.Cnds.OnDoubleTapGestureObject,
		C3.Plugins.System.Cnds.PickNth,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Text.Acts.SetFontSize,
		C3.Plugins.Text.Acts.SetFontColor,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Browser.Acts.RequestFullScreen
	];
};
self.C3_JsPropNameTable = [
	{Map: 0},
	{IsMarked: 0},
	{Değişken1: 0},
	{Target: 0},
	{Marked: 0},
	{Dokun: 0},
	{ScoreText: 0},
	{Tarayıcı: 0},
	{fullscreen: 0},
	{IsDragging: 0},
	{DeltaX: 0},
	{DeltaY: 0},
	{TouchLastX: 0},
	{TouchLastY: 0},
	{Puan: 0},
	{Score: 0}
];

self.InstanceType = {
	Map: class extends self.ISpriteInstance {},
	Target: class extends self.ISpriteInstance {},
	Marked: class extends self.ISpriteInstance {},
	Dokun: class extends self.IInstance {},
	ScoreText: class extends self.ITextInstance {},
	Tarayıcı: class extends self.IInstance {},
	fullscreen: class extends self.ISpriteInstance {}
}