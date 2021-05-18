! function(e) {
	function t(t) {
		for(var r, i, s = t[0], c = t[1], l = t[2], d = 0, p = []; d < s.length; d++) i = s[d], Object.prototype.hasOwnProperty.call(a, i) && a[i] && p.push(a[i][0]), a[i] = 0;
		for(r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
		for(u && u(t); p.length;) p.shift()();
		return o.push.apply(o, l || []), n()
	}

	function n() {
		for(var e, t = 0; t < o.length; t++) {
			for(var n = o[t], r = !0, s = 1; s < n.length; s++) {
				var c = n[s];
				0 !== a[c] && (r = !1)
			}
			r && (o.splice(t--, 1), e = i(i.s = n[0]))
		}
		return e
	}
	var r = {},
		a = {
			0: 0
		},
		o = [];

	function i(t) {
		if(r[t]) return r[t].exports;
		var n = r[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
	}
	i.m = e, i.c = r, i.d = function(e, t, n) {
		i.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, i.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, i.t = function(e, t) {
		if(1 & t && (e = i(e)), 8 & t) return e;
		if(4 & t && "object" == typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if(i.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for(var r in e) i.d(n, r, function(t) {
				return e[t]
			}.bind(null, r));
		return n
	}, i.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return i.d(t, "a", t), t
	}, i.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, i.p = "";
	var s = window.webpackJsonp = window.webpackJsonp || [],
		c = s.push.bind(s);
	s.push = t, s = s.slice();
	for(var l = 0; l < s.length; l++) t(s[l]);
	var u = c;
	o.push([276, 5, 2, 4, 10, 3, 8, 6, 7, 9, 1]), n()
}({
	13: function(e, t) {
		e.exports = {
			API_MARKETING_BANNER: "API_MARKETING_BANNER",
			API_TUNA_REQUEST: "API_TUNA_REQUEST",
			API_TUNA_FAILURE: "API_TUNA_FAILURE",
			API_TUNA_NODATA: "API_TUNA_NODATA",
			API_TUNA_SUCCESS: "API_TUNA_SUCCESS",
			API_RELATED_WORDS_REQUEST: "API_RELATED_WORDS_REQUEST",
			API_RELATED_WORDS_FAILURE: "API_RELATED_WORDS_FAILURE",
			API_RELATED_WORDS_NODATA: "API_RELATED_WORDS_NODATA",
			API_RELATED_WORDS_SUCCESS: "API_RELATED_WORDS_SUCCESS",
			API_SOTD: "API_SOTD",
			API_WOTD: "API_WOTD",
			CHANGE_ACTIVE_POS_TAB: "CHANGE_ACTIVE_POS_TAB",
			TOGGLE_WORD_GRID_SORT_TYPE: "TOGGLE_WORD_GRID_SORT_TYPE",
			CHANGE_LENGTH_FILTER_VALUE: "CHANGE_LENGTH_FILTER_VALUE",
			SPELL_SUGGESTION_REQUEST: "SPELL_SUGGESTION_REQUEST",
			SPELL_SUGGESTION_FAILURE: "SPELL_SUGGESTION_FAILURE",
			SPELL_SUGGESTION_NODATA: "SPELL_SUGGESTION_NODATA",
			SPELL_SUGGESTION_SUCCESS: "SPELL_SUGGESTION_SUCCESS",
			UPDATE_DETECTED_DEVICE: "UPDATE_DETECTED_DEVICE",
			UPDATE_DETECTED_REGION: "UPDATE_DETECTED_REGION",
			UPDATE_IS_EU: "UPDATE_IS_EU",
			EDITORIAL_EXPLORE: "EDITORIAL_EXPLORE",
			EDITORS_NOTES: "EDITORS_NOTES",
			EDITORIAL_RELATED_CONTENT: "EDITORIAL_RELATED_CONTENT",
			CATEGORY_LIST: "CATEGORY_LIST",
			AUTH_STATE: "AUTH_STATE",
			UPDATE_LDID: "UPDATE_LDID",
			API_QUIZ_LIST: "API_QUIZ_LIST"
		}
	},
	14: function(e, t) {
		e.exports = {
			GRAMMAR_COACH_AD: {
				banner: "hcgfa1",
				button: "x15n6h"
			},
			LINKID_SYNONYM: "nn1ov4",
			LINKID_ANTONYM: "nn1ov4",
			LINKID_MISSPELL_FIRST: "h7k7u4",
			LINKID_MISSPELL_OTHER: "t2d8x3",
			LINKID_DEFINITION: "k7mlp0",
			LINKID_DEFINITION_MOBILE: "qky0mc",
			LINKID_WORDS_RELATED_TO: "nn1ov4",
			LINKID_PAGINATION: "2b1bcp",
			LINKID_WOTD: "rpilnc",
			LINKID_EDCONTENT_TITLE: "2azoy5",
			LINKID_EDCONTENT_TILES: ["m9a2e2", "r0eap9", "mw8sx6", "nfcsuc", "b00rn2", "ytn3fh", "gdjn7o", "mxi818", "3og0dl", "7pjs9o"],
			LINKID_INFLECTIONS: "k601kd",
			LINKID_BREADCRUMBS: "se362z",
			LINKID_AZ_GRID: "74qg7q",
			LINKID_SAVE_WORD_BTN_SIGNED_OUT: "x2c42t",
			LINKID_SECONDARY_SEARCH: "6ueexp",
			LINKID_SEE_ANTONYMS_CTA: "znknxq",
			LINKID_QUIZ_CTA: "hw6pfx",
			LINK_ID_SYNONYM_OF_THE_DAY: {
				DEFLECTORS: "17vwmm",
				SYNONYM: "lpcqde"
			}
		}
	},
	141: function(e, t, n) {
		"use strict";
		(function(e) {
			var r = n(29),
				a = n.n(r),
				o = n(7);
			t.a = function(t) {
				if(!a()(t)) try {
					var n = JSON.parse(t),
						r = n["base64-encoded"];
					return r ? JSON.parse(e.from(r, "base64").toString("binary")) : n
				} catch(e) {
					Object(o.G)() || Object(o.H)() || (console.warn("## ParseParselyMetadata error", e), console.warn("## Raw metadata is ", t))
				}
				return null
			}
		}).call(this, n(19).Buffer)
	},
	15: function(e, t) {
		e.exports = {
			ANTONYMS: "antonyms",
			BROWSE: "browse",
			FOUR0FOUR: "404",
			MISSPELLING: "misspelling",
			NO_RESULT: "noresult"
		}
	},
	23: function(e, t) {
		e.exports = {
			DEVICE_MOBILE: "Mobile",
			DEVICE_TABLET: "Tablet",
			DEVICE_DESKTOP: "Desktop",
			PROTOCOL: "http",
			SOTD_API_ENDPOINT: "https://api-portal.thesaurus.com/editorial/sotd",
			TCOM_SITE_NAME: "thesaurus",
			TCOM_URL: "www.thesaurus.com",
			DCOM_URL: "www.dictionary.com",
			WEBPACK_OUTPUT_FOLDER: "dist",
			STICKY_REFERENCE_POINT_ID: "sticky-reference-point-id",
			EDITORIAL_CONTAINER_CLASSNAME: "editorials-container",
			POS_TAB_CONTAINER_CLASSNAME: "postab-container",
			ACTIVE_POS_TAB_CLASSNAME: "active-postab",
			PREVENT_CLICK_TRACKING: "prevent-click-tracking",
			TRACKING_URL: "https://track.thesaurus.com/main.gif",
			DICTIONARY_SPANID_URL: "https://spanids.dictionary.com/",
			REFRESH_ADS_ON_POS_TAB_CLICK: "true",
			LDID: "0",
			LAZY_LOAD_CLASSNAME: "lazyload",
			WRITING_TOOL_API_ENDPOINT: "https://thesaurus.com/api/writing-tool",
			CATEGORYID_API_ENDPOINT: "https://category.staging.dictionary.com/categoryId",
			CATEGORY_LIST_API_ENDPOINT: "https://www.dictionary.com/e/wp-json/dictionary/v1/universal-menu",
			ENABLE_AUTO_SUGGEST: !1,
			API_LISTAZ_ENDPOINT: "https://tuna.staging.thesaurus.com/list",
			API_MARKETING_BANNER_ENDPOINT: "https://www.dictionary.com/e/wp-json/dictionary/v1/marketing-message",
			QUIZ_LIST_API_ENDPOINT: "https://www.dictionary.com/e/wp-json/dictionary/v1/quiz-list",
			EDITOR_NOTES_API_ENDPOINT: "https://api-portal.thesaurus.com/editorial/editors-notes",
			DEV_DEFAULT_ENV_VARIABLES: {
				ADSCRIPT_PREFIX: "https://test.thesaurus.com",
				WRITING_TOOL_API_ENDPOINT: "http://thesaurus.com/api/writing-tool",
				API_MARKETING_BANNER_ENDPOINT: "https://www.dictionary.com/e/wp-json/dictionary/v1/marketing-message",
				TUNA_API_ENDPOINT: "https://tuna.thesaurus.com",
				EDITORIAL_API_ENDPOINT: "https://editorial-content-feed.dictionary.com/tcomserp",
				SPELL_SUGGESTIONS_API_ENDPOINT: "http://api-spell-suggestions-stage.cmuxwcyf4s.us-east-1.elasticbeanstalk.com/spellSuggestions",
				WOTD_API_ENDPOINT: "http://restcdn.dictionary.com/v2/wordoftheday.json",
				PARSELY_EXPLORE_API_ENDPOINT: "https://www.dictionary.com/editorial-feed/v1/parsely/explore",
				PARSELY_SUGGESTIONS_API_ENDPOINT: "https://www.dictionary.com/editorial-feed/v1/parsely/suggestions",
				ONETRUST_URL: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",
				SERVER_LOGGING_LEVEL: "debug",
				CLIENT_LOGGING_LEVEL: "debug",
				API_REQUEST_LOGGING_LEVEL: "info",
				ALLOW_DISABLED_ADS: "true",
				ONETRUST_FEATURE_ENABLED: "true",
				PREVENT_LOKI_PERCENT: 50,
				COGNITO_CLIENT_ID: "36nbbssv8eq8o8jlcuv56vm3tc",
				COGNITO_USER_POOL_ID: "us-east-1_ZzrrbmwpR",
				AUTH_COOKIE_DOMAIN: "localhost",
				AUTH_COOKIE_USE_SECURE: "0",
				DCOM_AUTH_URL: "http://local.dictionary.com:4000/auth",
				TCOM_AUTH_URL: "http://local.thesaurus.com:4000/auth",
				GRAPHQL_URI: "https://thor-graphql.staging.dictionary.com"
			},
			PROD_DEFAULT_ENV_VARIABLES: {
				SERVER_LOGGING_LEVEL: "error",
				CLIENT_LOGGING_LEVEL: "error",
				API_REQUEST_LOGGING_LEVEL: "info",
				ALLOW_DISABLED_ADS: "false",
				ONETRUST_FEATURE_ENABLED: "true",
				PREVENT_LOKI_PERCENT: 4,
				DCOM_AUTH_URL: "https://dictionary.com/auth",
				TCOM_AUTH_URL: "https://thesaurus.com/auth"
			},
			TEST_DEFAULT_ENV_VARIABLES: {
				WRITING_TOOL_API_ENDPOINT: "http://thesaurus.com/api/writing-tool",
				API_MARKETING_BANNER_ENDPOINT: "https://www.dictionary.com/e/wp-json/dictionary/v1/marketing-message",
				TUNA_API_ENDPOINT: "https://tuna.staging.thesaurus.com",
				EDITORIAL_API_ENDPOINT: "https://editorial-content-feed.dictionary.com/tcomserp",
				SPELL_SUGGESTIONS_API_ENDPOINT: "http://api-spell-suggestions-stage.cmuxwcyf4s.us-east-1.elasticbeanstalk.com/spellSuggestions",
				WOTD_API_ENDPOINT: "http://restcdn.dictionary.com/v2/wordoftheday.json",
				PARSELY_EXPLORE_API_ENDPOINT: "https://www.dictionary.com/editorial-feed/v1/parsely/explore",
				ONETRUST_URL: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",
				SERVER_LOGGING_LEVEL: "debug",
				CLIENT_LOGGING_LEVEL: "debug",
				API_REQUEST_LOGGING_LEVEL: "error",
				ALLOW_DISABLED_ADS: "true",
				ONETRUST_FEATURE_ENABLED: !1,
				PREVENT_LOKI_PERCENT: 4,
				COGNITO_CLIENT_ID: "312d2g264lhk952dj5mbvue5hq",
				COGNITO_USER_POOL_ID: "us-east-1_q6QTHjM6t",
				AUTH_COOKIE_DOMAIN: "localhost",
				AUTH_COOKIE_USE_SECURE: "0"
			},
			EDITORIAL_SECTION_TITLES: {
				MISSPELLS_NO_RESULTS_EDITORIAL_FEED: "EXPLORE DICTIONARY.COM",
				RIGHT_RAIL_EDITORIAL_FEED: "OTHERS ARE READING"
			}
		}
	},
	256: function(e) {
		e.exports = JSON.parse('[{"link":"https://www.thesaurus.com/antonyms/meaning","headword":"meaning"},{"link":"https://www.thesaurus.com/antonyms/confident","headword":"confident"},{"link":"https://www.thesaurus.com/antonyms/challenge","headword":"challenge"},{"link":"https://www.thesaurus.com/antonyms/isolate","headword":"isolate"},{"link":"https://www.thesaurus.com/antonyms/intimidate","headword":"intimidate"},{"link":"https://www.thesaurus.com/antonyms/hypocritical","headword":"hypocritical"},{"link":"https://www.thesaurus.com/antonyms/prejudice","headword":"prejudice"},{"link":"https://www.thesaurus.com/antonyms/change","headword":"change"},{"link":"https://www.thesaurus.com/antonyms/moderation","headword":"moderation"},{"link":"https://www.thesaurus.com/antonyms/proponent","headword":"proponent"},{"link":"https://www.thesaurus.com/antonyms/reminisce","headword":"reminisce"},{"link":"https://www.thesaurus.com/antonyms/proactive","headword":"proactive"},{"link":"https://www.thesaurus.com/antonyms/judgmental","headword":"judgmental"},{"link":"https://www.thesaurus.com/antonyms/theme","headword":"theme"},{"link":"https://www.thesaurus.com/antonyms/justify","headword":"justify"},{"link":"https://www.thesaurus.com/antonyms/approve","headword":"approve"},{"link":"https://www.thesaurus.com/antonyms/frustrated","headword":"frustrated"},{"link":"https://www.thesaurus.com/antonyms/pronounce","headword":"pronounce"},{"link":"https://www.thesaurus.com/antonyms/anomaly","headword":"anomaly"},{"link":"https://www.thesaurus.com/antonyms/entitled","headword":"entitled"},{"link":"https://www.thesaurus.com/antonyms/individualism","headword":"individualism"},{"link":"https://www.thesaurus.com/antonyms/retrospective","headword":"retrospective"},{"link":"https://www.thesaurus.com/antonyms/countenance","headword":"countenance"},{"link":"https://www.thesaurus.com/antonyms/anti-feminist","headword":"anti-feminist"},{"link":"https://www.thesaurus.com/antonyms/immigrant","headword":"immigrant"},{"link":"https://www.thesaurus.com/antonyms/contemplate","headword":"contemplate"},{"link":"https://www.thesaurus.com/antonyms/concurrent","headword":"concurrent"},{"link":"https://www.thesaurus.com/antonyms/inundate","headword":"inundate"},{"link":"https://www.thesaurus.com/antonyms/euphemism","headword":"euphemism"},{"link":"https://www.thesaurus.com/antonyms/inverse","headword":"inverse"},{"link":"https://www.thesaurus.com/antonyms/lonely","headword":"lonely"},{"link":"https://www.thesaurus.com/antonyms/greater%20than","headword":"greater%20than"},{"link":"https://www.thesaurus.com/antonyms/progression","headword":"progression"},{"link":"https://www.thesaurus.com/antonyms/condition","headword":"condition"},{"link":"https://www.thesaurus.com/antonyms/melt","headword":"melt"},{"link":"https://www.thesaurus.com/antonyms/supportive","headword":"supportive"},{"link":"https://www.thesaurus.com/antonyms/suspend","headword":"suspend"},{"link":"https://www.thesaurus.com/antonyms/vengeance","headword":"vengeance"},{"link":"https://www.thesaurus.com/antonyms/accolade","headword":"accolade"},{"link":"https://www.thesaurus.com/antonyms/reaction","headword":"reaction"},{"link":"https://www.thesaurus.com/antonyms/precursor","headword":"precursor"},{"link":"https://www.thesaurus.com/antonyms/glutton","headword":"glutton"},{"link":"https://www.thesaurus.com/antonyms/cascade","headword":"cascade"},{"link":"https://www.thesaurus.com/antonyms/philanthropist","headword":"philanthropist"},{"link":"https://www.thesaurus.com/antonyms/situation","headword":"situation"},{"link":"https://www.thesaurus.com/antonyms/character","headword":"character"},{"link":"https://www.thesaurus.com/antonyms/planned","headword":"planned"},{"link":"https://www.thesaurus.com/antonyms/quivering","headword":"quivering"},{"link":"https://www.thesaurus.com/antonyms/retroactive","headword":"retroactive"},{"link":"https://www.thesaurus.com/antonyms/friendly","headword":"friendly"},{"link":"https://www.thesaurus.com/antonyms/entreat","headword":"entreat"},{"link":"https://www.thesaurus.com/antonyms/pariah","headword":"pariah"},{"link":"https://www.thesaurus.com/antonyms/misanthrope","headword":"misanthrope"},{"link":"https://www.thesaurus.com/antonyms/paraphernalia","headword":"paraphernalia"},{"link":"https://www.thesaurus.com/antonyms/talisman","headword":"talisman"},{"link":"https://www.thesaurus.com/antonyms/interfere","headword":"interfere"},{"link":"https://www.thesaurus.com/antonyms/quarantine","headword":"quarantine"},{"link":"https://www.thesaurus.com/antonyms/delegate","headword":"delegate"},{"link":"https://www.thesaurus.com/antonyms/adjourn","headword":"adjourn"},{"link":"https://www.thesaurus.com/antonyms/undulate","headword":"undulate"},{"link":"https://www.thesaurus.com/antonyms/synchronize","headword":"synchronize"},{"link":"https://www.thesaurus.com/antonyms/punishment","headword":"punishment"},{"link":"https://www.thesaurus.com/antonyms/constraint","headword":"constraint"},{"link":"https://www.thesaurus.com/antonyms/egalitarian","headword":"egalitarian"},{"link":"https://www.thesaurus.com/antonyms/patriotism","headword":"patriotism"},{"link":"https://www.thesaurus.com/antonyms/predator","headword":"predator"},{"link":"https://www.thesaurus.com/antonyms/accidentally","headword":"accidentally"},{"link":"https://www.thesaurus.com/antonyms/definition","headword":"definition"},{"link":"https://www.thesaurus.com/antonyms/smile","headword":"smile"},{"link":"https://www.thesaurus.com/antonyms/biological","headword":"biological"},{"link":"https://www.thesaurus.com/antonyms/despotic","headword":"despotic"},{"link":"https://www.thesaurus.com/antonyms/ego","headword":"ego"},{"link":"https://www.thesaurus.com/antonyms/settle","headword":"settle"},{"link":"https://www.thesaurus.com/antonyms/similarity","headword":"similarity"},{"link":"https://www.thesaurus.com/antonyms/mandate","headword":"mandate"},{"link":"https://www.thesaurus.com/antonyms/ration","headword":"ration"},{"link":"https://www.thesaurus.com/antonyms/ingratiate","headword":"ingratiate"},{"link":"https://www.thesaurus.com/antonyms/tangent","headword":"tangent"},{"link":"https://www.thesaurus.com/antonyms/decay","headword":"decay"},{"link":"https://www.thesaurus.com/antonyms/aspect","headword":"aspect"},{"link":"https://www.thesaurus.com/antonyms/feature","headword":"feature"},{"link":"https://www.thesaurus.com/antonyms/delude","headword":"delude"},{"link":"https://www.thesaurus.com/antonyms/fabricate","headword":"fabricate"},{"link":"https://www.thesaurus.com/antonyms/clich%C3%A9","headword":"clich%C3%A9"},{"link":"https://www.thesaurus.com/antonyms/device","headword":"device"},{"link":"https://www.thesaurus.com/antonyms/diplomatic","headword":"diplomatic"},{"link":"https://www.thesaurus.com/antonyms/negotiate","headword":"negotiate"},{"link":"https://www.thesaurus.com/antonyms/retaliation","headword":"retaliation"},{"link":"https://www.thesaurus.com/antonyms/additional","headword":"additional"},{"link":"https://www.thesaurus.com/antonyms/rhythm","headword":"rhythm"},{"link":"https://www.thesaurus.com/antonyms/sheepish","headword":"sheepish"},{"link":"https://www.thesaurus.com/antonyms/question","headword":"question"},{"link":"https://www.thesaurus.com/antonyms/contaminate","headword":"contaminate"},{"link":"https://www.thesaurus.com/antonyms/give%20up","headword":"give%20up"},{"link":"https://www.thesaurus.com/antonyms/judgmental","headword":"judgmental"},{"link":"https://www.thesaurus.com/antonyms/melt","headword":"melt"},{"link":"https://www.thesaurus.com/antonyms/antonym","headword":"antonym"},{"link":"https://www.thesaurus.com/antonyms/delusion","headword":"delusion"},{"link":"https://www.thesaurus.com/antonyms/grievance","headword":"grievance"},{"link":"https://www.thesaurus.com/antonyms/edify","headword":"edify"},{"link":"https://www.thesaurus.com/antonyms/commiserate","headword":"commiserate"},{"link":"https://www.thesaurus.com/antonyms/conformist","headword":"conformist"},{"link":"https://www.thesaurus.com/antonyms/interrogate","headword":"interrogate"},{"link":"https://www.thesaurus.com/antonyms/concoct","headword":"concoct"},{"link":"https://www.thesaurus.com/antonyms/iconoclast","headword":"iconoclast"},{"link":"https://www.thesaurus.com/antonyms/remnant","headword":"remnant"},{"link":"https://www.thesaurus.com/antonyms/sequence","headword":"sequence"},{"link":"https://www.thesaurus.com/antonyms/culprit","headword":"culprit"},{"link":"https://www.thesaurus.com/antonyms/sassy","headword":"sassy"},{"link":"https://www.thesaurus.com/antonyms/flabbergasted","headword":"flabbergasted"},{"link":"https://www.thesaurus.com/antonyms/invest","headword":"invest"},{"link":"https://www.thesaurus.com/antonyms/designate","headword":"designate"},{"link":"https://www.thesaurus.com/antonyms/hamper","headword":"hamper"},{"link":"https://www.thesaurus.com/antonyms/outcome","headword":"outcome"},{"link":"https://www.thesaurus.com/antonyms/utilize","headword":"utilize"},{"link":"https://www.thesaurus.com/antonyms/revoke","headword":"revoke"},{"link":"https://www.thesaurus.com/antonyms/bully","headword":"bully"},{"link":"https://www.thesaurus.com/antonyms/kid","headword":"kid"},{"link":"https://www.thesaurus.com/antonyms/cycle","headword":"cycle"},{"link":"https://www.thesaurus.com/antonyms/exception","headword":"exception"},{"link":"https://www.thesaurus.com/antonyms/misleading","headword":"misleading"},{"link":"https://www.thesaurus.com/antonyms/plaintive","headword":"plaintive"},{"link":"https://www.thesaurus.com/antonyms/prescient","headword":"prescient"},{"link":"https://www.thesaurus.com/antonyms/rehabilitation","headword":"rehabilitation"},{"link":"https://www.thesaurus.com/antonyms/route","headword":"route"},{"link":"https://www.thesaurus.com/antonyms/shadow","headword":"shadow"},{"link":"https://www.thesaurus.com/antonyms/clue","headword":"clue"},{"link":"https://www.thesaurus.com/antonyms/bipartisan","headword":"bipartisan"},{"link":"https://www.thesaurus.com/antonyms/candidate","headword":"candidate"},{"link":"https://www.thesaurus.com/antonyms/cheat","headword":"cheat"},{"link":"https://www.thesaurus.com/antonyms/coincidentally","headword":"coincidentally"},{"link":"https://www.thesaurus.com/antonyms/coordinate","headword":"coordinate"},{"link":"https://www.thesaurus.com/antonyms/ethnic","headword":"ethnic"},{"link":"https://www.thesaurus.com/antonyms/feel","headword":"feel"},{"link":"https://www.thesaurus.com/antonyms/spell","headword":"spell"},{"link":"https://www.thesaurus.com/antonyms/install","headword":"install"},{"link":"https://www.thesaurus.com/antonyms/opportunist","headword":"opportunist"},{"link":"https://www.thesaurus.com/antonyms/permission","headword":"permission"},{"link":"https://www.thesaurus.com/antonyms/posthumous","headword":"posthumous"},{"link":"https://www.thesaurus.com/antonyms/standardized","headword":"standardized"},{"link":"https://www.thesaurus.com/antonyms/status%20quo","headword":"status%20quo"},{"link":"https://www.thesaurus.com/antonyms/naturalist","headword":"naturalist"},{"link":"https://www.thesaurus.com/antonyms/covet","headword":"covet"},{"link":"https://www.thesaurus.com/antonyms/besiege","headword":"besiege"},{"link":"https://www.thesaurus.com/antonyms/post","headword":"post"},{"link":"https://www.thesaurus.com/antonyms/inextricably","headword":"inextricably"},{"link":"https://www.thesaurus.com/antonyms/modify","headword":"modify"},{"link":"https://www.thesaurus.com/antonyms/rummage","headword":"rummage"},{"link":"https://www.thesaurus.com/antonyms/warn","headword":"warn"},{"link":"https://www.thesaurus.com/antonyms/contorted","headword":"contorted"},{"link":"https://www.thesaurus.com/antonyms/coquettish","headword":"coquettish"},{"link":"https://www.thesaurus.com/antonyms/tool","headword":"tool"},{"link":"https://www.thesaurus.com/antonyms/rest","headword":"rest"},{"link":"https://www.thesaurus.com/antonyms/bond","headword":"bond"},{"link":"https://www.thesaurus.com/antonyms/congruent","headword":"congruent"},{"link":"https://www.thesaurus.com/antonyms/petrified","headword":"petrified"},{"link":"https://www.thesaurus.com/antonyms/repercussion","headword":"repercussion"},{"link":"https://www.thesaurus.com/antonyms/weather","headword":"weather"},{"link":"https://www.thesaurus.com/antonyms/loan","headword":"loan"},{"link":"https://www.thesaurus.com/antonyms/append","headword":"append"},{"link":"https://www.thesaurus.com/antonyms/book","headword":"book"},{"link":"https://www.thesaurus.com/antonyms/poison","headword":"poison"},{"link":"https://www.thesaurus.com/antonyms/replicate","headword":"replicate"},{"link":"https://www.thesaurus.com/antonyms/scramble","headword":"scramble"},{"link":"https://www.thesaurus.com/antonyms/self-confidence","headword":"self-confidence"},{"link":"https://www.thesaurus.com/antonyms/antonym","headword":"antonym"},{"link":"https://www.thesaurus.com/antonyms/alas","headword":"alas"},{"link":"https://www.thesaurus.com/antonyms/blossom","headword":"blossom"},{"link":"https://www.thesaurus.com/antonyms/embedded","headword":"embedded"},{"link":"https://www.thesaurus.com/antonyms/fan","headword":"fan"},{"link":"https://www.thesaurus.com/antonyms/flashback","headword":"flashback"},{"link":"https://www.thesaurus.com/antonyms/genetic","headword":"genetic"},{"link":"https://www.thesaurus.com/antonyms/pair","headword":"pair"},{"link":"https://www.thesaurus.com/antonyms/plaintiff","headword":"plaintiff"},{"link":"https://www.thesaurus.com/antonyms/register","headword":"register"},{"link":"https://www.thesaurus.com/antonyms/socialism","headword":"socialism"},{"link":"https://www.thesaurus.com/antonyms/vagrant","headword":"vagrant"},{"link":"https://www.thesaurus.com/antonyms/plateau","headword":"plateau"},{"link":"https://www.thesaurus.com/antonyms/idiosyncratic","headword":"idiosyncratic"},{"link":"https://www.thesaurus.com/antonyms/monitoring","headword":"monitoring"},{"link":"https://www.thesaurus.com/antonyms/imbed","headword":"imbed"},{"link":"https://www.thesaurus.com/antonyms/motif","headword":"motif"},{"link":"https://www.thesaurus.com/antonyms/laggard","headword":"laggard"},{"link":"https://www.thesaurus.com/antonyms/ramification","headword":"ramification"},{"link":"https://www.thesaurus.com/antonyms/predatory","headword":"predatory"},{"link":"https://www.thesaurus.com/antonyms/muttered","headword":"muttered"},{"link":"https://www.thesaurus.com/antonyms/confederate","headword":"confederate"},{"link":"https://www.thesaurus.com/antonyms/immersed","headword":"immersed"},{"link":"https://www.thesaurus.com/antonyms/lecture","headword":"lecture"},{"link":"https://www.thesaurus.com/antonyms/braggart","headword":"braggart"},{"link":"https://www.thesaurus.com/antonyms/copy","headword":"copy"},{"link":"https://www.thesaurus.com/antonyms/debt","headword":"debt"},{"link":"https://www.thesaurus.com/antonyms/gleaming","headword":"gleaming"},{"link":"https://www.thesaurus.com/antonyms/pro","headword":"pro"},{"link":"https://www.thesaurus.com/antonyms/substantive","headword":"substantive"},{"link":"https://www.thesaurus.com/antonyms/valley","headword":"valley"},{"link":"https://www.thesaurus.com/antonyms/admission","headword":"admission"},{"link":"https://www.thesaurus.com/antonyms/deception","headword":"deception"},{"link":"https://www.thesaurus.com/antonyms/picture","headword":"picture"},{"link":"https://www.thesaurus.com/antonyms/attire","headword":"attire"},{"link":"https://www.thesaurus.com/antonyms/cavort","headword":"cavort"},{"link":"https://www.thesaurus.com/antonyms/commissioned","headword":"commissioned"},{"link":"https://www.thesaurus.com/antonyms/defamatory","headword":"defamatory"},{"link":"https://www.thesaurus.com/antonyms/engrave","headword":"engrave"},{"link":"https://www.thesaurus.com/antonyms/hereditary","headword":"hereditary"},{"link":"https://www.thesaurus.com/antonyms/king","headword":"king"},{"link":"https://www.thesaurus.com/antonyms/looming","headword":"looming"},{"link":"https://www.thesaurus.com/antonyms/mystical","headword":"mystical"},{"link":"https://www.thesaurus.com/antonyms/perch","headword":"perch"},{"link":"https://www.thesaurus.com/antonyms/specialized","headword":"specialized"},{"link":"https://www.thesaurus.com/antonyms/spell","headword":"spell"},{"link":"https://www.thesaurus.com/antonyms/stinky","headword":"stinky"},{"link":"https://www.thesaurus.com/antonyms/tattered","headword":"tattered"},{"link":"https://www.thesaurus.com/antonyms/edification","headword":"edification"},{"link":"https://www.thesaurus.com/antonyms/jingoistic","headword":"jingoistic"},{"link":"https://www.thesaurus.com/antonyms/coveted","headword":"coveted"},{"link":"https://www.thesaurus.com/antonyms/warrant","headword":"warrant"},{"link":"https://www.thesaurus.com/antonyms/concession","headword":"concession"},{"link":"https://www.thesaurus.com/antonyms/panorama","headword":"panorama"},{"link":"https://www.thesaurus.com/antonyms/interwoven","headword":"interwoven"},{"link":"https://www.thesaurus.com/antonyms/imbue","headword":"imbue"},{"link":"https://www.thesaurus.com/antonyms/circumnavigation","headword":"circumnavigation"},{"link":"https://www.thesaurus.com/antonyms/supply","headword":"supply"},{"link":"https://www.thesaurus.com/antonyms/french","headword":"french"},{"link":"https://www.thesaurus.com/antonyms/presage","headword":"presage"},{"link":"https://www.thesaurus.com/antonyms/cyclical","headword":"cyclical"},{"link":"https://www.thesaurus.com/antonyms/retrograde","headword":"retrograde"},{"link":"https://www.thesaurus.com/antonyms/whimper","headword":"whimper"},{"link":"https://www.thesaurus.com/antonyms/dwelling","headword":"dwelling"},{"link":"https://www.thesaurus.com/antonyms/stride","headword":"stride"},{"link":"https://www.thesaurus.com/antonyms/fossil","headword":"fossil"},{"link":"https://www.thesaurus.com/antonyms/projectile","headword":"projectile"},{"link":"https://www.thesaurus.com/antonyms/wander","headword":"wander"},{"link":"https://www.thesaurus.com/antonyms/memory","headword":"memory"},{"link":"https://www.thesaurus.com/antonyms/militaristic","headword":"militaristic"},{"link":"https://www.thesaurus.com/antonyms/financial","headword":"financial"},{"link":"https://www.thesaurus.com/antonyms/gasp","headword":"gasp"},{"link":"https://www.thesaurus.com/antonyms/hibernation","headword":"hibernation"},{"link":"https://www.thesaurus.com/antonyms/intolerant","headword":"intolerant"},{"link":"https://www.thesaurus.com/antonyms/verbal","headword":"verbal"},{"link":"https://www.thesaurus.com/antonyms/flower","headword":"flower"},{"link":"https://www.thesaurus.com/antonyms/image","headword":"image"},{"link":"https://www.thesaurus.com/antonyms/egoistic","headword":"egoistic"},{"link":"https://www.thesaurus.com/antonyms/embargo","headword":"embargo"},{"link":"https://www.thesaurus.com/antonyms/embossed","headword":"embossed"},{"link":"https://www.thesaurus.com/antonyms/hermit","headword":"hermit"},{"link":"https://www.thesaurus.com/antonyms/hypochondriac","headword":"hypochondriac"},{"link":"https://www.thesaurus.com/antonyms/indent","headword":"indent"},{"link":"https://www.thesaurus.com/antonyms/medial","headword":"medial"},{"link":"https://www.thesaurus.com/antonyms/polarize","headword":"polarize"},{"link":"https://www.thesaurus.com/antonyms/renew","headword":"renew"},{"link":"https://www.thesaurus.com/antonyms/replication","headword":"replication"},{"link":"https://www.thesaurus.com/antonyms/subterranean","headword":"subterranean"},{"link":"https://www.thesaurus.com/antonyms/travel","headword":"travel"},{"link":"https://www.thesaurus.com/antonyms/definition","headword":"definition"},{"link":"https://www.thesaurus.com/antonyms/staccato","headword":"staccato"},{"link":"https://www.thesaurus.com/antonyms/swarming","headword":"swarming"},{"link":"https://www.thesaurus.com/antonyms/seethe","headword":"seethe"},{"link":"https://www.thesaurus.com/antonyms/promontory","headword":"promontory"},{"link":"https://www.thesaurus.com/antonyms/hallowed","headword":"hallowed"},{"link":"https://www.thesaurus.com/antonyms/humanism","headword":"humanism"},{"link":"https://www.thesaurus.com/antonyms/epithet","headword":"epithet"},{"link":"https://www.thesaurus.com/antonyms/subsidize","headword":"subsidize"},{"link":"https://www.thesaurus.com/antonyms/acquisitive","headword":"acquisitive"},{"link":"https://www.thesaurus.com/antonyms/archive","headword":"archive"},{"link":"https://www.thesaurus.com/antonyms/accretion","headword":"accretion"},{"link":"https://www.thesaurus.com/antonyms/naps","headword":"naps"},{"link":"https://www.thesaurus.com/antonyms/infiltrate","headword":"infiltrate"},{"link":"https://www.thesaurus.com/antonyms/infuse","headword":"infuse"},{"link":"https://www.thesaurus.com/antonyms/wail","headword":"wail"},{"link":"https://www.thesaurus.com/antonyms/client","headword":"client"},{"link":"https://www.thesaurus.com/antonyms/inscribe","headword":"inscribe"},{"link":"https://www.thesaurus.com/antonyms/look%20up","headword":"look%20up"},{"link":"https://www.thesaurus.com/antonyms/berserk","headword":"berserk"},{"link":"https://www.thesaurus.com/antonyms/decompose","headword":"decompose"},{"link":"https://www.thesaurus.com/antonyms/graze","headword":"graze"},{"link":"https://www.thesaurus.com/antonyms/idealize","headword":"idealize"},{"link":"https://www.thesaurus.com/antonyms/imperiously","headword":"imperiously"},{"link":"https://www.thesaurus.com/antonyms/knave","headword":"knave"},{"link":"https://www.thesaurus.com/antonyms/around","headword":"around"},{"link":"https://www.thesaurus.com/antonyms/coexist","headword":"coexist"},{"link":"https://www.thesaurus.com/antonyms/manacle","headword":"manacle"},{"link":"https://www.thesaurus.com/antonyms/redeem","headword":"redeem"}]')
	},
	276: function(e, t, n) {
		e.exports = n(492)
	},
	375: function(e, t) {},
	383: function(e, t) {
		e.exports = http
	},
	384: function(e, t) {
		e.exports = https
	},
	492: function(e, t, n) {
		"use strict";
		n.r(t);
		var r = n(76),
			a = n.n(r),
			o = n(245),
			i = n.n(o),
			s = n(10),
			c = n.n(s),
			l = n(0),
			u = n.n(l),
			d = n(11),
			p = n(108),
			m = n(92),
			h = n(26),
			f = n.n(h),
			g = n(178),
			w = n.n(g),
			y = n(3),
			b = n(149),
			E = n(30),
			O = n(43),
			v = n(40),
			k = n(1),
			S = n(37),
			_ = n.n(S),
			x = n(12),
			T = n.n(x),
			j = n(8),
			I = n.n(j),
			A = n(29),
			P = n.n(A),
			C = n(66),
			D = n.n(C),
			N = {
				debug: C.DEBUG,
				info: C.INFO,
				warn: C.WARN,
				error: C.ERROR,
				off: C.OFF
			},
			L = n(7),
			R = function(e) {
				var t = function(e) {
					return N[e] ? N[e] : null
				}(e);
				t && D.a.setLevel(t)
			};
		if(D.a.useDefaults(), L.E) {
			var U = function() {
				for(var e = {}, t = [], n = window.location.search, r = n.slice(n.indexOf("?") + 1).split("&"), a = 0; a < r.length; a += 1) e[(t = r[a].split("="))[0]] = t[1];
				return e
			}().loglevel;
			R(U || Object(L.f)())
		} else R(Object(L.x)());
		var M = D.a,
			z = n(13);

		function F(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function q(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? F(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var W = function(e) {
				return {
					REQUEST: e + "/REQUEST",
					FAILURE: e + "/FAILURE",
					SUCCESS: e + "/SUCCESS",
					request: function(t) {
						for(var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
						return q({
							payload: t,
							type: e + "/REQUEST"
						}, r)
					},
					failure: function(t) {
						for(var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
						return q({
							payload: t,
							type: e + "/FAILURE"
						}, r)
					},
					success: function(t) {
						for(var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
						return q({
							payload: t,
							type: e + "/SUCCESS"
						}, r)
					}
				}
			},
			G = W(z.AUTH_STATE),
			B = W(z.CATEGORY_LIST),
			H = W(z.EDITORIAL_EXPLORE),
			Y = W(z.EDITORS_NOTES),
			K = W(z.API_MARKETING_BANNER),
			V = W(z.API_QUIZ_LIST),
			Z = W(z.EDITORIAL_RELATED_CONTENT),
			Q = W(z.API_SOTD),
			$ = W(z.API_WOTD),
			X = n(78),
			J = n.n(X),
			ee = n(24),
			te = n.n(ee),
			ne = n(247),
			re = {
				keepAlive: !0,
				keepAliveMsecs: 5e3
			},
			ae = function() {};
		if(!L.E) {
			var oe = new(n(383).Agent)(re),
				ie = new(n(384).Agent)(re);
			ae = function(e) {
				return {
					timeout: 5e3,
					headers: {
						Connection: "keep-alive"
					},
					agent: e && 0 === e.indexOf("https") ? ie : oe
				}
			}
		}
		var se = function(e) {
				return e.replace(/\//g, "%2F")
			},
			ce = function(e) {
				return L.E ? e : new ne.URL(e).href
			},
			le = ae,
			ue = function(e, t) {
				return e && t ? e.concat(e.split("?")[1] ? "&" : "?").concat(t) : e
			},
			de = function(e) {
				if(e.status >= 400 && e.status < 500) throw new Error("Bad Request: " + e.status);
				if(e.status >= 500) throw new Error("Server Error: " + e.status);
				return e
			};

		function pe(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}
		var me = le(Object(L.l)()),
			he = function(e, t) {
				var n = function(e) {
					for(var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? pe(Object(n), !0).forEach((function(t) {
							c()(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}({
					q: e,
					limit: 6,
					exclude: "tags:nsfw"
				}, t);
				return ue(Object(L.l)(), J.a.stringify(n))
			},
			fe = function() {
				var e = T()(I.a.mark((function e(t) {
					var n, r, a;
					return I.a.wrap((function(e) {
						for(;;) switch(e.prev = e.next) {
							case 0:
								return e.prev = 0, n = "" + he(t, {
									limit: 2,
									tag: "serp-" + t
								}), e.next = 5, te()(n, me).then(de);
							case 5:
								return r = e.sent, e.next = 8, r.json();
							case 8:
								return a = e.sent, e.abrupt("return", {
									data: a
								});
							case 12:
								return e.prev = 12, e.t0 = e.catch(0), M.error("dispatchEditorialRelatedContentRequest error:", e.t0), e.abrupt("return", {
									error: e.t0
								});
							case 16:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[0, 12]
					])
				})));
				return function(t) {
					return e.apply(this, arguments)
				}
			}(),
			ge = function(e) {
				return function() {
					var t = T()(I.a.mark((function t(n) {
						var r, a, o;
						return I.a.wrap((function(t) {
							for(;;) switch(t.prev = t.next) {
								case 0:
									return n(Z.request()), t.next = 3, fe(e);
								case 3:
									r = t.sent, a = r.error, o = r.data, n(a ? Z.failure() : Z.success(o));
								case 7:
								case "end":
									return t.stop()
							}
						}), t)
					})));
					return function(e) {
						return t.apply(this, arguments)
					}
				}()
			},
			we = function() {
				var e = T()(I.a.mark((function e(t) {
					var n, r, a;
					return I.a.wrap((function(e) {
						for(;;) switch(e.prev = e.next) {
							case 0:
								return e.prev = 0, e.next = 3, te()(Object(L.m)() + "?page=" + t).then(de);
							case 3:
								return n = e.sent, e.next = 6, n.json();
							case 6:
								return r = e.sent, a = r.editorsNotes, e.abrupt("return", {
									data: a[0]
								});
							case 11:
								return e.prev = 11, e.t0 = e.catch(0), console.error("getEditorsNotes error:", e.t0), e.abrupt("return", {
									error: e.t0
								});
							case 15:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[0, 11]
					])
				})));
				return function(t) {
					return e.apply(this, arguments)
				}
			}(),
			ye = function(e) {
				var t = e.term;
				return function() {
					var e = T()(I.a.mark((function e(n) {
						var r, a, o;
						return I.a.wrap((function(e) {
							for(;;) switch(e.prev = e.next) {
								case 0:
									return n(Y.request()), e.next = 3, we(t);
								case 3:
									r = e.sent, a = r.error, o = r.data, n(a ? Y.failure() : Y.success(o));
								case 7:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			},
			be = n(6),
			Ee = n.n(be),
			Oe = function(e) {
				return e >= 400 && e < 500
			},
			ve = function(e) {
				return e >= 500
			};

		function ke(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Se(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? ke(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ke(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var _e = le(Object(L.y)()),
			xe = function(e) {
				void 0 === e && (e = "");
				var t = e.split("/").filter((function(e) {
					return "" !== e
				}));
				return {
					urlPageName: t[0],
					slug: t[1]
				}
			},
			Te = function(e, t) {
				return function() {
					var n = T()(I.a.mark((function n(r) {
						var a, o, i;
						return I.a.wrap((function(n) {
							for(;;) switch(n.prev = n.next) {
								case 0:
									return r({
										type: z.SPELL_SUGGESTION_REQUEST,
										term: e
									}), a = xe(t), n.next = 4, te()(ce(Object(L.y)() + "/" + se(e)), _e).catch((function(e) {
										return M.debug(e)
									}));
								case 4:
									if(o = n.sent) {
										n.next = 7;
										break
									}
									return n.abrupt("return", r({
										type: z.SPELL_SUGGESTION_FAILURE,
										payload: {
											url: a
										}
									}));
								case 7:
									if(!Oe(o.status)) {
										n.next = 9;
										break
									}
									return n.abrupt("return", r({
										type: z.SPELL_SUGGESTION_NODATA,
										payload: {
											url: a
										}
									}));
								case 9:
									if(!ve(o.status)) {
										n.next = 11;
										break
									}
									return n.abrupt("return", r({
										type: z.SPELL_SUGGESTION_FAILURE,
										payload: {
											url: a
										}
									}));
								case 11:
									return n.next = 13, o.json();
								case 13:
									if(i = n.sent, Ee()(i, "data.tuna", []).length) {
										n.next = 16;
										break
									}
									return n.abrupt("return", r({
										type: z.SPELL_SUGGESTION_NODATA,
										payload: {
											url: a
										}
									}));
								case 16:
									return n.abrupt("return", r({
										type: z.SPELL_SUGGESTION_SUCCESS,
										payload: Se(Se({}, i), {}, {
											url: a
										})
									}));
								case 17:
								case "end":
									return n.stop()
							}
						}), n)
					})));
					return function(e) {
						return n.apply(this, arguments)
					}
				}()
			},
			je = function(e) {
				return e ? 9 : 6
			},
			Ie = function(e, t) {
				void 0 === t && (t = !1);
				var n = Number(e),
					r = je(t);
				return {
					page: n,
					limit: n > 1 ? 9 : r,
					offset: n > 1 ? 9 * (n - 1) - (9 - r) : 0
				}
			},
			Ae = function(e, t) {
				void 0 === t && (t = !1);
				var n = je(t);
				return Math.ceil((e - n) / 9 + 1)
			};

		function Pe(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Ce(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Pe(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pe(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var De = le(Object(L.v)()),
			Ne = function(e) {
				void 0 === e && (e = "");
				var t = e.split("/").filter((function(e) {
					return "" !== e
				}));
				return {
					urlPageName: t[0],
					slug: t[1]
				}
			},
			Le = function(e, t) {
				return {
					type: z.API_RELATED_WORDS_REQUEST,
					pushToHistory: t,
					term: e
				}
			},
			Re = function(e, t, n) {
				return {
					type: z.API_RELATED_WORDS_SUCCESS,
					appendData: t,
					payload: Ce(Ce({}, e), {}, {
						urlData: n
					})
				}
			},
			Ue = function(e) {
				return {
					type: z.API_RELATED_WORDS_NODATA,
					payload: e
				}
			},
			Me = function(e) {
				var t = e.term,
					n = e.page,
					r = void 0 === n ? 1 : n,
					a = e.extendedFirstPage,
					o = void 0 !== a && a,
					i = e.pushToHistory,
					s = void 0 === i || i,
					c = e.appendData,
					l = void 0 !== c && c,
					u = e.url;
				return function() {
					var e = T()(I.a.mark((function e(n) {
						var a, i, c, d, p, m, h;
						return I.a.wrap((function(e) {
							for(;;) switch(e.prev = e.next) {
								case 0:
									return n(Le(t, s)), a = Ie(r, o), i = a.offset, c = function(e) {
										return 1 === e ? "?limit=" + (o ? 9 : 6) : "?limit=9&offset=" + i
									}, d = Ne(u), e.next = 6, te()(ce(Object(L.v)() + "/" + se(t) + c(r)), De);
								case 6:
									if(p = e.sent, !Oe(p.status)) {
										e.next = 9;
										break
									}
									return e.abrupt("return", n(Ue({
										url: d
									})));
								case 9:
									if(!ve(p.status)) {
										e.next = 11;
										break
									}
									return e.abrupt("return", n((f = {
										url: d
									}, {
										type: z.API_RELATED_WORDS_FAILURE,
										payload: f
									})));
								case 11:
									return e.next = 13, p.json();
								case 13:
									if((m = e.sent) && m.data) {
										e.next = 16;
										break
									}
									return e.abrupt("return", n(Ue({
										url: d
									})));
								case 16:
									return h = {
										data: m.data,
										meta: Ce(Ce({}, m.meta), {}, {
											page: r
										})
									}, e.abrupt("return", n(Re(h, l)));
								case 18:
								case "end":
									return e.stop()
							}
							var f
						}), e)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			};

		function ze(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Fe(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? ze(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ze(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var qe = le(Object(L.r)()),
			We = function(e) {
				void 0 === e && (e = "");
				var t = e.split("/").filter((function(e) {
					return "" !== e
				}));
				return {
					urlPageName: t[0],
					slug: t[1]
				}
			},
			Ge = function(e, t, n) {
				return {
					type: z.API_TUNA_REQUEST,
					pushToHistory: n,
					term: e,
					queryParams: t
				}
			},
			Be = function(e, t) {
				return {
					type: z.API_TUNA_FAILURE,
					error: e,
					payload: t
				}
			},
			He = function(e) {
				return {
					type: z.API_TUNA_NODATA,
					payload: e
				}
			},
			Ye = function(e, t, n, r) {
				return void 0 === t && (t = {}), void 0 === n && (n = !0),
					function() {
						var a = T()(I.a.mark((function a(o) {
							var i, s, c;
							return I.a.wrap((function(a) {
								for(;;) switch(a.prev = a.next) {
									case 0:
										return o(Ge(e, t, n)), i = We(r), a.prev = 2, a.next = 5, te()(ce(Object(L.r)() + "/" + se(e)), qe);
									case 5:
										if(s = a.sent, !Oe(s.status)) {
											a.next = 8;
											break
										}
										return a.abrupt("return", o(He(s)));
									case 8:
										if(!ve(s.status)) {
											a.next = 10;
											break
										}
										return a.abrupt("return", o(Be(s)));
									case 10:
										return a.next = 12, s.json();
									case 12:
										if(c = a.sent, Ee()(c, "data", !1)) {
											a.next = 15;
											break
										}
										return a.abrupt("return", o(He({
											url: i
										})));
									case 15:
										return a.abrupt("return", o((l = Fe(Fe({}, c), {}, {
											url: i
										}), {
											type: z.API_TUNA_SUCCESS,
											payload: l
										})));
									case 18:
										a.prev = 18, a.t0 = a.catch(2), M.error("dispatchApiTunaRequest error:", a.t0), o(Be(a.t0, {
											url: i
										}));
									case 22:
										return a.abrupt("return", void 0);
									case 23:
									case "end":
										return a.stop()
								}
								var l
							}), a, null, [
								[2, 18]
							])
						})));
						return function(e) {
							return a.apply(this, arguments)
						}
					}()
			},
			Ke = function(e) {
				var t = e.term,
					n = e.page,
					r = e.extendedFirstPage,
					a = void 0 !== r && r,
					o = e.queryParams,
					i = void 0 === o ? {} : o,
					s = e.pushToHistory,
					c = void 0 === s || s,
					l = e.url,
					u = void 0 === l ? "" : l;
				return function() {
					var e = T()(I.a.mark((function e(r) {
						var o;
						return I.a.wrap((function(e) {
							for(;;) switch(e.prev = e.next) {
								case 0:
									if(!P()(t)) {
										e.next = 3;
										break
									}
									return M.error("dispatchSearch did not revieve a term!"), e.abrupt("return", Promise.resolve());
								case 3:
									return o = t.replace(/\+/g, " "), e.abrupt("return", Promise.all([Te(o, u)(r), Ye(o, i, c, u)(r), Me({
										term: o,
										page: n,
										extendedFirstPage: a,
										pushToHistory: c,
										url: u
									})(r), r(ye({
										term: t
									})), ge(t)(r)]));
								case 5:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			},
			Ve = le(Object(L.e)()),
			Ze = function() {
				var e = T()(I.a.mark((function e() {
					var t, n;
					return I.a.wrap((function(e) {
						for(;;) switch(e.prev = e.next) {
							case 0:
								return e.prev = 0, e.next = 3, te()("" + ue(Object(L.e)(), J.a.stringify({
									page: "global"
								})), Ve).then(de);
							case 3:
								return t = e.sent, e.next = 6, t.json();
							case 6:
								return n = e.sent, e.abrupt("return", {
									data: n
								});
							case 10:
								return e.prev = 10, e.t0 = e.catch(0), M.error("dispatchCategoryListRequest error:", e.t0), e.abrupt("return", {
									error: e.t0
								});
							case 14:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[0, 10]
					])
				})));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			Qe = function() {
				return function() {
					var e = T()(I.a.mark((function e(t) {
						var n, r, a;
						return I.a.wrap((function(e) {
							for(;;) switch(e.prev = e.next) {
								case 0:
									return t(B.request()), e.next = 3, Ze();
								case 3:
									n = e.sent, r = n.error, a = n.data, t(r ? B.failure() : B.success(a));
								case 7:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			},
			$e = le(Object(L.q)()),
			Xe = function() {
				var e = T()(I.a.mark((function e() {
					var t, n;
					return I.a.wrap((function(e) {
						for(;;) switch(e.prev = e.next) {
							case 0:
								return e.prev = 0, e.next = 3, te()("" + Object(L.q)(), $e).then(de);
							case 3:
								return t = e.sent, e.next = 6, t.json();
							case 6:
								return n = e.sent, e.abrupt("return", {
									data: n
								});
							case 10:
								return e.prev = 10, e.t0 = e.catch(0), M.error("getMarketingBanner error:", e.t0), e.abrupt("return", {
									error: e.t0
								});
							case 14:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[0, 10]
					])
				})));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			Je = function() {
				return function() {
					var e = T()(I.a.mark((function e(t) {
						var n, r, a;
						return I.a.wrap((function(e) {
							for(;;) switch(e.prev = e.next) {
								case 0:
									return t(K.request()), e.next = 3, Xe();
								case 3:
									n = e.sent, r = n.data, a = n.error, t(a ? K.failure() : K.success(r));
								case 7:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			},
			et = le(Object(L.k)()),
			tt = function() {
				var e = T()(I.a.mark((function e() {
					var t, n;
					return I.a.wrap((function(e) {
						for(;;) switch(e.prev = e.next) {
							case 0:
								return e.prev = 0, e.next = 3, te()("" + (r = void 0, r = {
									period_start: "1d",
									pub_date_start: "2017-12-01",
									limit: 10,
									sort: "visitors",
									tag: "crb_post_group_editorial"
								}, ue(Object(L.k)(), J.a.stringify(r))), et).then(de);
							case 3:
								return t = e.sent, e.next = 6, t.json();
							case 6:
								return n = e.sent, e.abrupt("return", {
									data: n
								});
							case 10:
								return e.prev = 10, e.t0 = e.catch(0), M.error("getEditorialExplore error:", e.t0), e.abrupt("return", {
									error: e.t0
								});
							case 14:
							case "end":
								return e.stop()
						}
						var r
					}), e, null, [
						[0, 10]
					])
				})));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			nt = function() {
				return function() {
					var e = T()(I.a.mark((function e(t) {
						var n, r;
						return I.a.wrap((function(e) {
							for(;;) switch(e.prev = e.next) {
								case 0:
									return t(H.request()), e.next = 3, tt();
								case 3:
									if(n = e.sent, r = n.data, !n.error) {
										e.next = 8;
										break
									}
									return e.abrupt("return", t(H.failure()));
								case 8:
									return e.abrupt("return", t(H.success(r)));
								case 9:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			},
			rt = function(e) {
				return Ee()(It(e), "tunaApiData.posTabs", [])
			},
			at = function(e) {
				return Ee()(It(e), "tunaApiData.entry", null)
			},
			ot = function(e) {
				return Ee()(It(e), "tunaApiData.exampleSentences", null)
			},
			it = function(e) {
				return Ee()(It(e), "tunaApiData.inflections", [])
			},
			st = n(79),
			ct = function(e) {
				return Ee()(e, "posTabs.activeIndex", 0)
			},
			lt = Object(st.a)([rt, ct], (function(e, t) {
				return Ee()(e[t], "synonyms", [])
			})),
			ut = Object(st.a)([rt, ct], (function(e, t) {
				return Ee()(e[t], "antonyms", [])
			})),
			dt = function(e) {
				return Ee()(It(e), "relatedWordsApiData.data", [])
			},
			pt = Object(st.a)([rt, ct], (function(e, t) {
				return Ee()(e[t], "definition", null)
			})),
			mt = function(e) {
				return Ee()(It(e), "tunaApiData.slug", null)
			},
			ht = function(e) {
				return Ee()(It(e), "tunaApiData.slugLuna", null)
			},
			ft = function(e) {
				return Ee()(It(e), "tunaApiData.pronunciation", null)
			},
			gt = function(e) {
				return Ee()(It(e), "relatedWordsApiData.meta", {
					page: 1,
					count: 0
				})
			},
			wt = function(e) {
				return Ee()(It(e), "searchTerm", "")
			},
			yt = function(e) {
				return Ee()(It(e), "pageName", "")
			},
			bt = function(e) {
				return Ee()(e, "searchData.tunaApiData.entry", "")
			},
			Et = function(e) {
				return e.detectedDevice.isTablet
			},
			Ot = function(e) {
				return e.detectedDevice.isMobile
			},
			vt = function(e) {
				return e.detectedRegion.region
			},
			kt = function(e) {
				return Ee()(e, "localization.isEU", !1)
			},
			St = function(e) {
				return Ee()(e, "editorialData.data.exploreEditorialData", [])
			},
			_t = function(e) {
				return e.editorialRelatedContent.data
			},
			xt = function(e) {
				return Ee()(It(e), "spellSuggestionsData", "")
			},
			Tt = function(e) {
				var t = xt(e);
				return null != t && t[0] ? t[0] : null
			},
			jt = function(e) {
				var t = xt(e);
				return(null == t ? void 0 : t.length) > 1 ? t.slice(1, 9) : null
			},
			It = function(e) {
				return Ee()(e, "searchData", {})
			},
			At = function(e) {
				return Ee()(It(e), "tunaApiData", {})
			},
			Pt = function(e) {
				return Ee()(It(e), "tunaApiData.type", null)
			},
			Ct = function(e) {
				return Ee()(It(e), "tunaApiData.note", null)
			},
			Dt = function(e) {
				return e.wotdData.data
			},
			Nt = function(e) {
				return Ee()(It(e), "isFetchingRelatedWordsApi", !1)
			},
			Lt = function(e) {
				return Ee()(It(e), "queryParams", {})
			},
			Rt = function(e) {
				return Ee()(e, "marketingBanner.data", {})
			},
			Ut = function(e) {
				return e.categoryListData.data.menu
			},
			Mt = function(e) {
				return e.editorsNotes.data
			},
			zt = function(e) {
				return e.authState.isSignedIn
			},
			Ft = function(e) {
				return e.authState.userInfo || {}
			},
			qt = function(e) {
				return e.authState.hasFetched
			},
			Wt = function(e) {
				return Ee()(e, "abTest.ldIdData", !1)
			},
			Gt = function(e) {
				return Ee()(e, "quizList.data", {})
			},
			Bt = function(e) {
				return Ee()(It(e), "tunaApiData.posTabs", []).filter((function(e) {
					var t;
					return(null == e || null == (t = e.antonyms) ? void 0 : t.length) > 0
				}))
			},
			Ht = Object(st.a)([Bt, ct], (function(e, t) {
				return Ee()(e[t], "antonyms", [])
			})),
			Yt = function(e) {
				return e.sotdData.data
			},
			Kt = n(15),
			Vt = "antonyms",
			Zt = "the",
			Qt = "the-spell",
			$t = "tcom-404";

		function Xt(e) {
			switch(e) {
				case Kt.ANTONYMS:
					return Vt;
				case Kt.BROWSE:
					return Zt;
				case Kt.NO_RESULT:
				case Kt.MISSPELLING:
					return Qt;
				case Kt.FOUR0FOUR:
					return $t;
				default:
					return void M.warn("getAnalyticsPagenameFor received an invalid app page name")
			}
		}
		Object(L.C)(), Object(L.j)();
		var Jt = n(248),
			en = n(251),
			tn = n.n(en),
			nn = n(252),
			rn = n.n(nn),
			an = (n(253), n(15)),
			on = n.n(an),
			sn = {
				adjective: "adj.",
				adverb: "adv.",
				contraction: "contraction",
				conjunction: "conj.",
				determiner: "determiner",
				interjection: "interj.",
				noun: "noun",
				prefix: "prefix",
				preposition: "prep.",
				pronoun: "pron.",
				verb: "verb",
				abbreviation: "abb.",
				phrase: "phrase",
				article: "article"
			},
			cn = function(e) {
				return sn[e] ? sn[e] : e
			},
			ln = "",
			un = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#x27;",
				"/": "&#x2F;"
			},
			dn = function() {
				if(ln) return ln;
				var e = "";
				return tn()(sn, (function(t, n) {
					var r = "/" + n;
					e.length > 0 && (r = "|" + r), e += r
				})), ln = e
			},
			pn = (new RegExp("/" + an.BROWSE + "/(\\S+)(" + dn() + ")(/|$)"), new RegExp("(/" + an.BROWSE + "/\\S+)(?:" + dn() + ")"), function(e) {
				return Object(L.s)() + "://" + Object(L.A)() + (e ? "/browse/" + e : "")
			}),
			mn = function(e) {
				return Object(L.s)() + "://" + Object(L.i)() + (e ? "/browse/" + e : "")
			};
		var hn = function(e) {
				var t = rn()(e.pathname.split("/"));
				return {
					endpoint: t[0],
					term: t[1],
					page: t[2]
				}
			},
			fn = function(e) {
				var t, n = e.pageName,
					r = e.tunaEntry,
					a = e.searchTerm;
				return n === an.BROWSE || n === an.ANTONYMS ? r : (t = a) ? t.replace(/['"<>/&]/g, (function(e) {
					return un[e]
				})) : ""
			},
			gn = function(e) {
				var t = Ee()(e, "search", ""),
					n = J.a.parse(t, {
						ignoreQueryPrefix: !0
					});
				return Ee()(n, "term", "")
			},
			wn = function(e) {
				return Object(L.F)() ? "" + e : Object(L.t)() + "/" + e
			},
			yn = n(75),
			bn = n.n(yn);

		function En(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function On(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? En(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : En(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var vn = function(e) {
				return On(On({}, e), {}, {
					pos: cn(e.pos)
				})
			},
			kn = function(e) {
				return Ee()(e, "definitionData.definitions", []).map(vn)
			},
			Sn = function(e) {
				var t = Ee()(e, "data", null);
				return bn()(t) ? {
					entry: Ee()(t, "definitionData.entry", null),
					type: Ee()(t, "definitionData.type", null),
					slugLuna: Ee()(t, "slugLuna", null),
					slug: Ee()(t, "definitionData.slug", null),
					note: Ee()(t, "definitionData.definitions[0].note", null),
					pronunciation: Ee()(t, "pronunciation", {}),
					posTabs: kn(t),
					synonyms: Ee()(t, "definitionData.synonyms", []),
					antonyms: Ee()(t, "definitionData.antonyms", []),
					exampleSentences: Ee()(t, "exampleSentences", []),
					inflections: Ee()(t, "inflections", [])
				} : null
			},
			_n = n(141),
			xn = function(e) {
				var t = e.data || [];
				return t && Array.isArray(t) ? t.map((function(e) {
					return function(e) {
						if(!e.title || !e.url) return null;
						var t = e.title,
							n = e.metadata,
							r = e.url,
							a = e.thumb_url_medium,
							o = e.section,
							i = Object(_n.a)(n);
						return i && (Array.isArray(i) && (i = {}), i.description || (i.description = "")), {
							title: t,
							metadata: i,
							url: r,
							thumb_url_medium: a,
							section: o
						}
					}(e)
				})).filter((function(e) {
					return e
				})) : []
			},
			Tn = function(e) {
				return {
					data: Ee()(e, "data", []),
					meta: {
						page: Number(Ee()(e, "meta.page", 1)),
						count: Ee()(e, "meta.count", 0)
					}
				}
			},
			jn = function(e) {
				var t = Ee()(e, "data.tunaWithSlug", null);
				return t && t.length ? t.map((function(e) {
					return {
						term: e.displayForm,
						slug: e.slug
					}
				})) : null
			},
			In = n(14),
			An = n.p + "editorial-default-image-5c10ee588f12ea6d3eecc1722de31bc5.jpg",
			Pn = In.LINKID_EDCONTENT_TILES,
			Cn = function(e) {
				var t = Object(_n.a)(e.metadata);
				if(!P()(t)) try {
					if(t.image_url_150x150) return t.image_url_150x150
				} catch(e) {
					console.warn("## ParseParselyMetadata Image error", e), console.warn("## Metadata image is ", t.image_url_150x150)
				}
				return wn(An)
			},
			Dn = function(e) {
				return !P()(e) && Array.isArray(e.data) ? {
					exploreEditorialData: function(e, t, n) {
						return e.slice(t, n).map((function(e, n) {
							return {
								title: e.title,
								url: e.url,
								image: Cn(e),
								linkId: Pn[n + t]
							}
						}))
					}(e.data, 4, e.data.length)
				} : {}
			},
			Nn = function(e) {
				var t, n = Ee()(e, "wordoftheday.date", ""),
					r = Ee()(e, "wordoftheday.results." + n, {});
				return P()(r) ? {} : ((t = {}).word = r.word, t.audioUrl = Ee()(r, "audio", null), t.pos = Ee()(r, "pos", null), t.pronunciation = Ee()(r, "pronunciation", null), t)
			},
			Ln = function(e) {
				return {
					url: e.url,
					text: e.text,
					backgroundColor: e.backgroundColor,
					secondaryColor: e.secondaryColor,
					textColor: e.textColor,
					beginDate: e.beginDate,
					endDate: e.endDate
				}
			},
			Rn = {
				TERM: "term"
			},
			Un = n(256);

		function Mn(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function zn(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Mn(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mn(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var Fn, qn = n(15),
			Wn = function(e) {
				var t = e.replace(" ", "%20"),
					n = Un.find((function(e) {
						return e.headword === t
					}));
				return n ? n.link : null
			},
			Gn = function(e) {
				return e.isFetchingTunaApi || e.isFetchingRelatedWordsApi || e.isFetchingSpellSuggestion
			},
			Bn = function(e, t) {
				var n = function(e, t) {
					if(void 0 === t && (t = null), null != e && e.isFetchingTunaApi || null != e && e.isFetchingRelatedWordsApi) return null;
					var n = [];
					Object.keys(e.queryParams || {}).forEach((function(t) {
						return n.push(t + "=" + e.queryParams[t])
					}));
					var r = n.join("&");
					if(e.error) return null;
					if(e.tunaApiData) {
						if(t && "antonyms" === t.urlPageName) {
							var a = Wn(t.slug);
							return a ? {
								url: a,
								pageName: qn.ANTONYMS
							} : {
								url: "/" + qn.FOUROFOUR,
								pageName: qn.FOUROFOUR
							}
						}
						var o = Ee()(e.relatedWordsApiData, "meta.page", 0) > 1 ? "/" + e.relatedWordsApiData.meta.page : "";
						return {
							url: "/" + qn.BROWSE + "/" + e.tunaApiData.slug + o + (r ? "?" + r : ""),
							pageName: qn.BROWSE
						}
					}
					return e.isFetchingSpellSuggestion ? null : e.spellSuggestionsData ? {
						url: "/" + qn.MISSPELLING + "?" + Rn.TERM + "=" + e.searchTerm + (r ? "&" + r : ""),
						pageName: qn.MISSPELLING
					} : {
						url: "/" + qn.NO_RESULT + "?" + Rn.TERM + "=" + e.searchTerm + (r ? "&" + r : ""),
						pageName: qn.NO_RESULT
					}
				}(e, t);
				return n ? zn(zn({}, e), {}, {
					pageTransitionCounter: e.pageTransitionCounter + (Gn(e) ? 0 : 1),
					url: n.url,
					pageName: n.pageName
				}) : e
			},
			Hn = function(e, t) {
				void 0 === e && (e = {
					isFetchingTunaApi: !1,
					isFetchingSpellSuggestion: !1,
					isFetchingRelatedWordsApi: !1,
					searchTerm: null,
					tunaApiData: null,
					relatedWordsApiData: null,
					spellSuggestionsData: null,
					queryParams: {},
					url: null,
					pushToHistory: !0,
					pageTransitionCounter: 0,
					pageName: "",
					error: !1
				});
				var n = t.type,
					r = t.payload;
				switch(n) {
					case z.API_TUNA_REQUEST:
						return zn(zn({}, e), {}, {
							pushToHistory: t.pushToHistory,
							queryParams: t.queryParams,
							searchTerm: t.term,
							isFetchingTunaApi: !0
						});
					case z.SPELL_SUGGESTION_REQUEST:
						return zn(zn({}, e), {}, {
							isFetchingSpellSuggestion: !0
						});
					case z.API_TUNA_SUCCESS:
						return Bn(zn(zn({}, e), {}, {
							isFetchingTunaApi: !1,
							tunaApiData: Sn(r)
						}), null == r ? void 0 : r.url);
					case z.SPELL_SUGGESTION_SUCCESS:
						return Bn(zn(zn({}, e), {}, {
							isFetchingSpellSuggestion: !1,
							spellSuggestionsData: jn(r)
						}), null == r ? void 0 : r.url);
					case z.API_TUNA_FAILURE:
						return Bn(zn(zn({}, e), {}, {
							isFetchingTunaApi: !1,
							tunaApiData: null,
							error: r
						}));
					case z.API_TUNA_NODATA:
						return Bn(zn(zn({}, e), {}, {
							isFetchingTunaApi: !1,
							tunaApiData: null
						}), null == r ? void 0 : r.url);
					case z.SPELL_SUGGESTION_FAILURE:
					case z.SPELL_SUGGESTION_NODATA:
						return Bn(zn(zn({}, e), {}, {
							isFetchingSpellSuggestion: !1,
							spellSuggestionsData: null
						}), null == r ? void 0 : r.url);
					case z.API_RELATED_WORDS_REQUEST:
						return zn(zn({}, e), {}, {
							pushToHistory: t.pushToHistory,
							searchTerm: t.term,
							isFetchingRelatedWordsApi: !0
						});
					case z.API_RELATED_WORDS_SUCCESS:
						return Bn(zn(zn({}, e), {}, {
							isFetchingRelatedWordsApi: !1,
							relatedWordsApiData: Tn({
								data: t.appendData ? [].concat(e.relatedWordsApiData.data, r.data) : r.data,
								meta: r.meta
							}, null == r ? void 0 : r.url)
						}));
					case z.API_RELATED_WORDS_FAILURE:
					case z.API_RELATED_WORDS_NODATA:
						return Bn(zn(zn({}, e), {}, {
							isFetchingRelatedWordsApi: !1,
							relatedWordsApiData: null
						}), null == r ? void 0 : r.url);
					default:
						return e
				}
			},
			Yn = on.a.ANTONYMS,
			Kn = on.a.BROWSE,
			Vn = function(e) {
				return "string" != typeof e ? "" : e.charAt(0).toUpperCase() + e.slice(1)
			},
			Zn = function(e, t) {
				var n = e.pageName,
					r = e.slug,
					a = e.page,
					o = e.count;
				if(void 0 === t && (t = 0), n === Yn) return n + "/" + r;
				if(n === Kn) {
					var i = a + t;
					return i > Ae(o) || i <= 0 ? "" : n + "/" + r + (i && i > 1 ? "/" + i : "") || ""
				}
				return ""
			},
			Qn = function(e) {
				return Object(L.s)() + "://" + Object(L.A)() + "/" + e
			},
			$n = function(e) {
				var t = e.entry,
					n = e.currentPage,
					r = e.relatedWordCount,
					a = e.pageName,
					o = e.numWords,
					i = Vn(t),
					s = t.toUpperCase(),
					c = "",
					l = "synonym" === t.toLowerCase();
				1 !== n && (c = " (Page " + n + " of " + Ae(r) + ")");
				switch(a) {
					case on.a.MISSPELLING:
					case on.a.NO_RESULT:
						return s + " Synonyms & Antonyms | Thesaurus.com\n    ";
					case on.a.ANTONYMS:
						return i + " Antonyms: Find the Opposite of " + i + " | Thesaurus.com";
					case on.a.BROWSE:
						return l ? "Synonyms: Find Similar Words & Examples | Thesaurus.com" : !!Wn(t) ? i + " Synonyms: Find Another Word for " + i + " | Thesaurus.com" + c : s + " Synonyms: " + o + " Synonyms & Antonyms for " + s + " | Thesaurus.com" + c;
					default:
						return s + " Synonyms: " + o + " Synonyms & Antonyms for " + s + " | Thesaurus.com" + c
				}
			},
			Xn = n(257),
			Jn = n(258),
			er = n.p + "thesaurus_social_logo-eeee10b5437579b91b60707c4343e49a.png",
			tr = ["//ads.pubmatic.com", "//securepubads.g.doubleclick.net", "//cm.g.doubleclick.net", "//pagead2.googlesyndication.com", "//ib.adnxs.com", "//ce.lijit.com", "//ap.lijit.com", "//us-u.openx.net"],
			nr = ["//fastlane.rubiconproject.com", "//pixel.rubiconproject.com", "//token.rubiconproject.com", "//dsum-sec.casalemedia.com", "//as-sec.casalemedia.com", "//gum.criteo.com", "//static.criteo.net", "//bidder.criteo.com", "//adserver.adtech.advertising.com", "//cdata.carambo.la"],
			rr = function() {
				var e = Object(d.e)(yt),
					t = Object(d.e)(rt),
					n = Object(d.e)(Ot),
					r = Object(d.e)(gt),
					a = r.page,
					o = r.count,
					i = Object(d.e)(bt),
					s = Object(d.e)(mt),
					c = Object(d.e)(wt),
					l = fn({
						pageName: e,
						tunaEntry: i,
						searchTerm: c
					}),
					p = a,
					m = o,
					h = function(e) {
						return e.reduce((function(e, t) {
							var n = t.synonyms,
								r = void 0 === n ? [] : n,
								a = t.antonyms,
								o = void 0 === a ? [] : a;
							return e + (r.length + o.length)
						}), 0)
					}(t),
					f = function(e) {
						var t = e.pageName,
							n = e.slug,
							r = e.entryTermFromState;
						return t === Kn ? {
							"@context": "https://schema.org/",
							"@type": "BreadcrumbList",
							itemListElement: [{
								"@type": "ListItem",
								position: 1,
								name: "Thesaurus",
								item: "https://www.thesaurus.com"
							}, {
								"@type": "ListItem",
								position: 2,
								name: r,
								item: "https://www.thesaurus.com/browse/" + n
							}]
						} : null
					}({
						pageName: e,
						slug: s,
						entryTermFromState: l
					}),
					g = Zn({
						pageName: e,
						slug: s,
						page: a,
						count: o
					}),
					w = Zn({
						pageName: e,
						slug: s,
						page: a,
						count: o
					}, -1),
					y = Zn({
						pageName: e,
						slug: s,
						page: a,
						count: o
					}, 1),
					b = $n({
						entry: l,
						currentPage: p,
						relatedWordCount: m,
						pageName: e,
						numWords: h
					}),
					E = function(e) {
						var t = e.entry,
							n = e.pageName,
							r = e.numWords,
							a = e.currentPage,
							o = e.relatedWordCount,
							i = Vn(t),
							s = t.toUpperCase(),
							c = "synonym" === t.toLowerCase(),
							l = "";
						1 !== a && (l = " (Page " + a + " of " + Ae(o) + ")");
						return c ? "Find synonyms, near synonyms, antonyms, related words, and example sentences on Thesaurus.com." : n === Yn ? "See antonyms for " + i + " along with related words and example sentences at Thesaurus.com, the world's most trusted free thesaurus." : !!Wn(t) ? "See synonyms for " + i + " along with related words and example sentences at Thesaurus.com, the world's most trusted free thesaurus." + l : "Find " + r + " ways to say " + s + ", along with antonyms, related words, and example sentences at Thesaurus.com, the world's most trusted free thesaurus." + l
					}({
						entry: l,
						pageName: e,
						numWords: h,
						relatedWordCount: m,
						currentPage: p
					});
				return u.a.createElement(Jt.a, null, u.a.createElement("meta", {
					charSet: "utf-8"
				}), u.a.createElement("title", null, b), u.a.createElement("meta", {
					name: "description",
					content: E
				}), function(e) {
					return e !== Kn && e !== Yn
				}(e) && u.a.createElement("meta", {
					name: "robots",
					content: "noindex"
				}), i && u.a.createElement("meta", {
					property: "og:title",
					content: "Synonyms of " + i + " | Thesaurus.com"
				}), i && u.a.createElement("meta", {
					property: "og:description",
					content: "Synonyms for " + l + " from Thesaurus.com, the world’s leading online source for synonyms, antonyms, and more."
				}), u.a.createElement("meta", {
					property: "og:image",
					content: wn(er)
				}), u.a.createElement("meta", {
					property: "og:site_name",
					content: Object(L.A)()
				}), u.a.createElement("meta", {
					property: "twitter:card",
					content: "summary"
				}), u.a.createElement("meta", {
					property: "twitter:site",
					content: "@Dictionarycom"
				}), u.a.createElement("meta", {
					property: "fb:app_id",
					content: "118269238218175"
				}), u.a.createElement("meta", {
					property: "fb:admins",
					content: "100000304287730,109125464873"
				}), u.a.createElement("meta", {
					name: "msvalidate.01",
					content: "DF5542D7723770377E9ABFF59AC1DC97"
				}), u.a.createElement("link", {
					rel: "icon",
					type: "image/png",
					href: wn(Jn.a)
				}), n && u.a.createElement("meta", {
					name: "viewport",
					content: "width=device-width, initial-scale=1.0"
				}), w && u.a.createElement("link", {
					rel: "prev",
					href: Qn(w)
				}), u.a.createElement("link", {
					rel: "canonical",
					href: Qn(g)
				}), y && u.a.createElement("link", {
					rel: "next",
					href: Qn(y)
				}), u.a.createElement("link", {
					rel: "preload",
					href: wn(Xn.a),
					as: "font",
					type: "font/woff",
					crossOrigin: "anonymous"
				}), tr.map((function(e) {
					return u.a.createElement("link", {
						key: e,
						rel: "preconnect",
						href: e,
						crossOrigin: !0
					})
				})), nr.map((function(e) {
					return u.a.createElement("link", {
						key: e,
						rel: "dns-prefetch",
						href: e
					})
				})), f && u.a.createElement("script", {
					type: "application/ld+json"
				}, JSON.stringify(f)))
			},
			ar = "#35CEF2",
			or = "#B8F1FF",
			ir = 1200,
			sr = 900,
			cr = 500,
			lr = 300,
			ur = 1088,
			dr = n(25),
			pr = n.n(dr),
			mr = n(65),
			hr = n.n(mr),
			fr = n(2),
			gr = n.n(fr),
			wr = n(32),
			yr = n.n(wr),
			br = (n(187), function(e) {
				return {
					tx1: "results",
					tx2: "serp",
					ptype: "content",
					ld: e
				}
			}),
			Er = "thesaurus_serp_atf_728x90",
			Or = "tcom_serp_dkt_atf_728x90_3",
			vr = [{
				placement: Er,
				code: "/23219321/iac.dict.thesrs.dw/dic/serp_0_n",
				ad_uuid: Er,
				sizes: [
					[728, 90],
					[970, 90],
					[970, 250]
				],
				targeting: {
					pos: "top",
					pos2: "1"
				}
			}, {
				placement: "thesaurus_serp_atf_300x250",
				code: "/23219321/iac.dict.thesrs.dw/dic/serp_0_n",
				ad_uuid: "thesaurus_serp_atf_300x250",
				sizes: [
					[300, 250],
					[300, 600]
				],
				targeting: {
					pos: "top",
					pos2: "10"
				}
			}, {
				placement: Or,
				code: "/23219321/iac.dict.thesrs.dw/dic/serp_0_n",
				ad_uuid: Or,
				sizes: [
					[728, 90]
				],
				targeting: {
					pos: "top",
					pos2: "20"
				}
			}],
			kr = [{
				placement: "tcom_desktop_300x250_50",
				code: "/23219321/iac.dict.thesrs.dw/dic/serp_0_n",
				ad_uuid: "tcom_desktop_300x250_50",
				sizes: [
					[300, 250]
				],
				targeting: {
					pos: "bot",
					pos2: "40"
				},
				lazy: !0,
				sticky: !0
			}, {
				placement: "tcom_desktop_300x250_70",
				code: "/23219321/iac.dict.thesrs.dw/dic/serp_0_n",
				ad_uuid: "tcom_desktop_300x250_70",
				sizes: [
					[300, 250]
				],
				targeting: {
					pos: "bot",
					pos2: "50"
				},
				lazy: !0,
				sticky: !0
			}, {
				placement: "tcom_desktop_728x90_80",
				code: "/23219321/iac.dict.thesrs.dw/dic/serp_0_n",
				ad_uuid: "tcom_desktop_728x90_80",
				sizes: [
					[300, 250]
				],
				targeting: {
					pos: "bot",
					pos2: "60"
				},
				lazy: !0,
				sticky: !0
			}, {
				placement: "tcom_desktop_300x250_90",
				code: "/23219321/iac.dict.thesrs.dw/dic/serp_0_n",
				ad_uuid: "tcom_desktop_300x250_90",
				sizes: [
					[300, 250]
				],
				targeting: {
					pos: "bot",
					pos2: "70"
				},
				lazy: !0,
				sticky: !0
			}],
			Sr = function(e) {
				return {
					tx1: "results",
					tx2: "misspelled_0_n",
					ptype: "content",
					ld: e
				}
			},
			_r = [{
				placement: "thesaurus_serp_atf_728x90",
				code: "/23219321/iac.dict.thesrs.dw/dic/misspelled_0_n",
				ad_uuid: "728x90_top",
				targeting: {
					pos: "top",
					pos2: "728x90_1"
				},
				sizes: [
					[728, 90],
					[970, 90]
				]
			}, {
				placement: "thesaurus_serp_atf_300x250",
				code: "/23219321/iac.dict.thesrs.dw/dic/misspelled_0_n",
				ad_uuid: "300x250_top",
				targeting: {
					pos: "top",
					pos2: "300x250_1"
				},
				sizes: [
					[300, 250]
				]
			}, {
				placement: "thesaurus_serp_728x90_p6",
				code: "/23219321/iac.dict.thesrs.dw/dic/misspelled_0_n",
				ad_uuid: "728x90_bot",
				targeting: {
					pos: "bot",
					pos2: "728x90_2"
				},
				sizes: [
					[728, 90]
				]
			}],
			xr = function(e) {
				return {
					tx1: "results",
					tx2: "no-match_0_n",
					ptype: "content",
					ld: e
				}
			},
			Tr = [{
				placement: "thesaurus_serp_atf_728x90",
				code: "/23219321/iac.dict.thesrs.dw/dic/no-match_0_n",
				ad_uuid: "728x90_top",
				targeting: {
					pos: "top",
					pos2: "728x90_1"
				},
				sizes: [
					[728, 90],
					[970, 90]
				]
			}, {
				placement: "thesaurus_serp_atf_300x250",
				code: "/23219321/iac.dict.thesrs.dw/dic/no-match_0_n",
				ad_uuid: "300x250_top",
				targeting: {
					pos: "top",
					pos2: "300x250_1"
				},
				sizes: [
					[300, 250]
				]
			}, {
				placement: "thesaurus_serp_728x90_p6",
				code: "/23219321/iac.dict.thesrs.dw/dic/no-match_0_n",
				ad_uuid: "728x90_bot",
				targeting: {
					pos: "bot",
					pos2: "728x90_2"
				},
				sizes: [
					[728, 90]
				]
			}],
			jr = function(e) {
				return {
					tx1: "results",
					tx2: "serp",
					ptype: "content",
					ld: e
				}
			},
			Ir = [{
				placement: "tcom_serp_mweb_atf_320x50_1",
				code: "/23219321/iac.dict.thesrs.mw/results/serp/content",
				ad_uuid: "1",
				targeting: {
					pos: "top",
					pos2: "1"
				},
				sizes: [
					[320, 50]
				]
			}, {
				placement: "tcom_serp_mweb_atf_300x250_2",
				code: "/23219321/iac.dict.thesrs.mw/results/serp/content",
				ad_uuid: "2",
				targeting: {
					pos: "top",
					pos2: "2"
				},
				sizes: [
					[300, 250]
				]
			}],
			Ar = [{
				placement: "tcom_serp_mweb_mid_300x250_3",
				code: "/23219321/iac.dict.thesrs.mw/results/serp/content",
				ad_uuid: "3",
				targeting: {
					pos: "mid",
					pos2: "3"
				},
				sizes: [
					[300, 250]
				],
				lazy: !0
			}, {
				placement: "tcom_serp_mweb_btf_300x250_4",
				code: "/23219321/iac.dict.thesrs.mw/results/serp/content",
				ad_uuid: "4",
				targeting: {
					pos: "bot",
					pos2: "4"
				},
				sizes: [
					[300, 250]
				],
				lazy: !0
			}],
			Pr = function(e) {
				return {
					tx1: "results",
					tx2: "misspelled",
					ptype: "content",
					ld: e
				}
			},
			Cr = [{
				placement: "dmwMisspellThesTop",
				code: "/23219321/iac.dict.thesrs.mw/results/misspelled/content",
				ad_uuid: "320x50_top",
				targeting: {
					pos: "top",
					pos2: "320x50_1"
				},
				sizes: [
					[320, 50],
					[320, 100]
				]
			}, {
				placement: "dmwMisspellThesBottom",
				code: "/23219321/iac.dict.thesrs.mw/results/misspelled/content",
				ad_uuid: "320x50_bot",
				targeting: {
					pos: "bot",
					pos2: "320x50_2"
				},
				sizes: [
					[300, 250]
				]
			}],
			Dr = function(e, t) {
				switch(e) {
					case "tcom-serp":
						return {
							pageTargeting: br(t),
							slotConfigs: vr,
							lazySlotConfigs: kr
						};
					case "tcom-no-result":
						return {
							pageTargeting: xr(t),
							slotConfigs: Tr,
							lazySlotConfigs: []
						};
					case "tcom-misspell":
						return {
							pageTargeting: Sr(t),
							slotConfigs: _r,
							lazySlotConfigs: []
						};
					case "tcom-mweb-serp":
						return {
							pageTargeting: jr(t),
							slotConfigs: Ir,
							lazySlotConfigs: Ar
						};
					case "tcom-mweb-misspell":
						return {
							pageTargeting: Pr(t),
							slotConfigs: Cr,
							lazySlotConfigs: []
						};
					default:
						return null
				}
			},
			Nr = function(e) {
				return window.dispatchEvent(new CustomEvent("requestLazyAd", {
					detail: e
				})), !0
			},
			Lr = function(e) {
				var t = vr.concat(kr, _r, Tr, Cr, Ir, Ar).filter((function(t) {
					return t.placement === e
				}))[0];
				return t ? Math.min.apply(Math, Ee()(t, "sizes", [0]).map((function(e) {
					return e[1]
				}))) : 0
			},
			Rr = function(e) {
				var t = vr.concat(kr, _r, Tr, Cr, Ir, Ar).filter((function(t) {
					return t.placement === e
				}))[0];
				return t ? Math.max.apply(Math, Ee()(t, "sizes", [0]).map((function(e) {
					return e[1]
				}))) : 0
			};
		var Ur = function(e, t) {
				if(void 0 === t && (t = {
						isMobile: !1,
						exclude: [],
						posTabRefresh: !1
					}), !(Object(L.b)() && window.location.search.indexOf("ads_disabled") >= 0)) {
					var n = "";
					if(t.isMobile) switch(e) {
						case on.a.BROWSE:
							n = "tcom-mweb-serp";
							break;
						case on.a.NO_RESULT:
						case on.a.MISSPELLING:
							n = "tcom-mweb-misspell";
							break;
						default:
							M.warn("refreshAdsForPage received an invalid pageName")
					} else switch(e) {
						case on.a.BROWSE:
							n = "tcom-serp";
							break;
						case on.a.NO_RESULT:
							n = "tcom-no-result";
							break;
						case on.a.MISSPELLING:
							n = "tcom-misspell";
							break;
						default:
							M.warn("refreshAdsForPage received an invalid pageName")
					}
					var r = Dr(n),
						a = r.pageTargeting,
						o = r.slotConfigs,
						i = r.lazySlotConfigs;
					window.dispatchEvent(new CustomEvent("refreshAds", {
						detail: {
							page: n,
							pageTargeting: a,
							slotConfigs: o,
							lazySlotConfigs: i,
							isNotPageTransition: t.posTabRefresh
						}
					}))
				}
			},
			Mr = n(93),
			zr = n.n(Mr),
			Fr = function(e) {
				zr.a.configure({
					cognitoUserPoolId: Object(L.h)(),
					cognitoClientId: Object(L.g)(),
					authCookieDomain: e,
					authCookieUseSecure: Object(L.d)()
				})
			},
			qr = T()(I.a.mark((function e() {
				var t;
				return I.a.wrap((function(e) {
					for(;;) switch(e.prev = e.next) {
						case 0:
							return e.prev = 0, e.next = 3, zr.a.currentAuthenticatedUser();
						case 3:
							return t = e.sent, e.abrupt("return", t);
						case 7:
							return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", null);
						case 10:
						case "end":
							return e.stop()
					}
				}), e, null, [
					[0, 7]
				])
			}))),
			Wr = function() {
				return function() {
					var e = T()(I.a.mark((function e(t) {
						var n, r, a;
						return I.a.wrap((function(e) {
							for(;;) switch(e.prev = e.next) {
								case 0:
									return t(G.request()), e.prev = 1, e.next = 4, qr();
								case 4:
									n = e.sent, r = !!n, a = n ? {
										email: n.attributes.email
									} : null, t(G.success({
										isSignedIn: r,
										userInfo: a
									})), e.next = 14;
									break;
								case 10:
									e.prev = 10, e.t0 = e.catch(1), M.error("dispatchAuthStateRequest error:", e.t0), t(G.failure());
								case 14:
								case "end":
									return e.stop()
							}
						}), e, null, [
							[1, 10]
						])
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			},
			Gr = n(73),
			Br = n.n(Gr),
			Hr = n(23),
			Yr = function(e) {
				var t, n = JSON.parse(e.getAttribute("data-cts") || null),
					r = {};
				return null !== n ? (r.linkId = n.linkId, r.item = "", r.ordinal = n.ordinal) : null != (t = Br()(e, "[data-linkid]", !0)) && null == Br()(e, "[data-type]", !0) && (r.linkId = t.getAttribute("data-linkid"), r.item = function(e) {
					var t = "";
					return null != Br()(e, "[data-item]", !0) && (t = e.textContent.trim()), t
				}(e), r.ordinal = function(e, t) {
					var n, r = 0;
					if(t !== e && void 0 !== (n = Br()(e, "[data-ordinal]", !0)))
						for(var a = n.getElementsByTagName("a"), o = 0; o < a.length; o += 1) e === a[o] && (r = o + 1);
					return r
				}(e, t), r.ensureWebtrack = "true" === t.getAttribute("data-ensure-webtrack"), r.href = t.getAttribute("href")), r
			},
			Kr = function(e, t) {
				e.addEventListener("click", (function(e) {
					if(e.target.classList.contains(Hr.PREVENT_CLICK_TRACKING)) return !1;
					var n = Br()(e.target, "A", !0);
					if(n) {
						var r = Br()(n, ".cts-enabled", !0),
							a = Br()(n, ".cts-disabled", !0),
							o = n.href,
							i = Yr(n);
						if(i.ensureWebtrack && e.preventDefault(), "" === o) return !0;
						if(n.classList.contains("cts-clicked")) return !1;
						if(null != a && (null == r || a.childNodes.length < r.childNodes.length)) return !0;
						if(void 0 === i.linkId) return !0;
						n.classList.add("cts-clicked");
						var s = {
							linkIds: i.linkId || "",
							item: i.item || "",
							ordinal: i.ordinal || "",
							destination: o
						};
						Ee()(t, "report", !1) ? t.report(new S.ClickEvent(s)) : console.warn("No tracker.report function found, cannot log event"), i.ensureWebtrack && setTimeout((function() {
							window.location = i.href
						}), 50)
					}
					return !1
				}))
			},
			Vr = n(259),
			Zr = function(e, t) {
				return e.searchData.pageTransitionCounter !== t.searchData.pageTransitionCounter
			},
			Qr = function(e) {
				function t(t) {
					var n, r;
					return n = e.call(this, t) || this, c()(pr()(n), "getTrackerPageName", (function(e) {
						return Xt(e || on.a.FOUR0FOUR)
					})), c()(pr()(n), "getTrackerTerm", (function(e) {
						return e.pageName === on.a.BROWSE || e.pageName === on.a.ANTONYMS ? Ee()(e, "tunaData.slug", void 0) : Ee()(e, "searchData.searchTerm", void 0)
					})), c()(pr()(n), "initializeAuth", (function() {
						var e = n.props.isTestingHOC,
							t = Object(L.c)();
						Fr(e ? "localhost" : t)
					})), c()(pr()(n), "updateGTMDataLayer", (function(e) {
						var t, n = e.pageName,
							r = e.title,
							a = e.ldId;
						window.dataLayer = window.dataLayer || [];
						var o = n || on.a.FOUR0FOUR;
						window.dataLayer.push(((t = {}).event = "pageupdate", t.pageName = Xt(o), t.LDid = a, t.sessionId = yr.a.get("sid") || null, t.browserId = yr.a.get("bid") || null, t.virtualPageUrl = window.location.toString(), t.virtualPageTitle = r, t))
					})), c()(pr()(n), "updateTrackerObject", (function() {
						var e = n.props.pageName,
							t = Fn || ("object" == typeof window && void 0 === Fn && (window.ANALYTICS ? (Fn = window.ANALYTICS, delete window.ANALYTICS) : (M.warn("Could not find analytics object on the page"), Fn = null)), Fn);
						t && (t.term = n.getTrackerTerm(n.props), t.pageName = n.getTrackerPageName(e), n.tracker = new _.a(t))
					})), c()(pr()(n), "reportAnalytics", (function(e) {
						n.tracker || n.updateTrackerObject(), n.tracker.setPreviousURL(e), n.tracker.report([new S.PageViewEvent, new S.SearchEvent])
					})), n.updateTrackerObject(), (r = n.props).history.listen((function(e, t) {
						var n = Ee()(hn(e), "endpoint", "");
						if("POP" === t)
							if(n === an.BROWSE) {
								var a = hn(e),
									o = a.term,
									i = a.page;
								r.dispatchSearch({
									term: o,
									page: i,
									pushToHistory: !1
								})
							} else if(n === an.MISSPELLING || n === an.NO_RESULT) {
							var s = gn(e);
							r.dispatchSearch({
								term: s,
								page: 1,
								pushToHistory: !1
							})
						} else M.warn('Invalid pageName provided. "' + n + '" is not a valid pageName')
					})), n
				}
				hr()(t, e);
				var n = t.prototype;
				return n.UNSAFE_componentWillMount = function() {
					L.E && Object(b.b)(window.emotionIds)
				}, n.componentDidMount = function() {
					var e = this.props.dispatchAuth;
					this.reportAnalytics(document.referrer, window.location.search), Kr(document.body, this.tracker), "loading" in HTMLImageElement.prototype ? document.querySelectorAll("img." + Hr.LAZY_LOAD_CLASSNAME).forEach((function(e) {
						var t = e;
						return t.src = e.dataset.src, t
					})) : Vr.init(), this.initializeAuth(), e()
				}, n.UNSAFE_componentWillReceiveProps = function(e) {
					var t = this.props.history;
					(function(e, t) {
						return Zr(e, t) && t.searchData.pushToHistory
					})(this.props, e) && t.push(e.searchData.url)
				}, n.componentDidUpdate = function(e) {
					var t = this.props,
						n = t.pageName,
						r = t.ldId,
						a = t.isMobile,
						o = t.searchData;
					if(Zr(e, this.props)) {
						var i = gt(this.props),
							s = i.page,
							c = i.count,
							l = decodeURI(o.searchTerm),
							u = $n({
								entry: l,
								currentPage: s,
								relatedWordCount: c,
								pageName: n
							});
						this.updateTrackerObject(), this.reportAnalytics("" + Object(L.A)() + e.searchData.url, window.location.search), this.updateGTMDataLayer({
							ldId: r,
							pageName: n,
							title: u
						}), Ur(n, {
							isMobile: a,
							LD_ID: r
						}), e.location.hash || window.scrollTo(0, 0)
					}
				}, n.componentDidCatch = function(e, t) {
					M.error("Error Caught by Base Boundary:", e, t)
				}, n.render = function() {
					var e = this.props;
					return(0, e.children)({
						userInfo: e.userInfo,
						ldId: e.ldId,
						tracker: this.tracker
					})
				}, t
			}(u.a.Component);
		Qr.propTypes = {
			history: Object(fr.shape)({
				listen: fr.func
			}),
			isTestingHOC: fr.bool
		}, Qr.defaultProps = {
			history: {
				listen: function() {
					return null
				}
			},
			isTestingHOC: !1
		};
		var $r = Object(d.c)((function(e) {
				return {
					searchData: It(e),
					tunaData: At(e),
					pageName: yt(e),
					isMobile: Ot(e),
					isEU: kt(e),
					userInfo: Ft(e),
					ldId: Wt(e)
				}
			}), (function(e) {
				return {
					dispatchSearch: Object(v.bindActionCreators)(Ke, e),
					dispatchAuth: Object(v.bindActionCreators)(Wr, e)
				}
			}))(Qr),
			Xr = n(81),
			Jr = n.n(Xr);

		function ea(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}
		var ta = Object(y.default)("div", {
				target: "e1n64g3r0"
			})({
				name: "18ew0w6",
				styles: "position:sticky;top:0;transition:transform 0.4s ease;width:100%;z-index:2000000001"
			}),
			na = function(e) {
				var t = e.tracker,
					n = e.windowObject;
				t.report(new S.ClickEvent({
					linkIds: "205vpa",
					destination: pn()
				}), (function() {
					return function(e, t) {
						e.location.href = pn(t)
					}(n)
				}))
			},
			ra = function(e) {
				var t = e.term,
					n = e.tracker,
					r = e.windowObject;
				n.report(new S.ClickEvent({
					linkIds: "59wn52",
					destination: mn(t)
				}), (function() {
					return function(e, t) {
						e.location.href = mn(t)
					}(r, t)
				}))
			},
			aa = function(e) {
				var t = e.dispatchSearch,
					n = e.isMobile,
					r = e.isTablet,
					a = e.searchedTerm,
					o = e.enableAutoCompleteFeature,
					i = e.tracker,
					s = e.userEmail,
					l = Object(d.e)(Ut),
					p = Object(d.e)(zt);
				return u.a.createElement(ta, {
					isMobile: n
				}, u.a.createElement(Jr.a, {
					siteName: Xr.SITE_NAME_THESAURUS,
					searchedTerm: a || "",
					onSearchThesaurus: function(e) {
						i.report(new S.ClickEvent({
							linkIds: "205vpa"
						})), t({
							term: e
						})
					},
					onSearchDictionary: function(e) {
						return ra({
							term: e,
							tracker: i,
							windowObject: window
						})
					},
					isMobile: n,
					isTablet: r,
					headerTabClickCallback: function(e) {
						return function(e) {
							var t = e.event,
								n = e.searchInput,
								r = e.isMobile,
								a = e.tracker,
								o = t.target.href || "";
							r && o && (o.toLowerCase().includes(Xr.SITE_NAME_THESAURUS) && na({
								tracker: a,
								windowObject: window
							}), o.toLowerCase().includes(Xr.SITE_NAME_DICTIONARY) && ra({
								tracker: a,
								term: n,
								windowObject: window
							}))
						}(function(e) {
							for(var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {};
								t % 2 ? ea(Object(n), !0).forEach((function(t) {
									c()(e, t, n[t])
								})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ea(Object(n)).forEach((function(t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
								}))
							}
							return e
						}({
							tracker: i
						}, e))
					},
					shouldEnableAutoComplete: o,
					minCharsForAutoComplete: 2,
					autoCompleteTcomApiEndpoint: Object(L.p)(),
					numberOfResults: 10,
					categoryList: l,
					isSignedIn: p,
					userEmail: s,
					tcomAuthUrl: Object(L.z)(),
					situationalDcomURL: Object(L.s)() + "://" + Object(L.i)()
				}))
			},
			oa = n(260),
			ia = n.n(oa),
			sa = function(e) {
				var t = e.shouldDisplayDoNotSellLink;
				return u.a.createElement(ia.a, {
					aboutLinkId: "gy27eg",
					isAZFooter: !0,
					shouldDisplayDoNotSellLink: t,
					siteName: Hr.TCOM_SITE_NAME,
					termsAndPrivacyLinkId: "gy27eg"
				})
			};
		sa.propTypes = {
			shouldDisplayDoNotSellLink: fr.bool.isRequired
		};
		var ca = sa,
			la = Object(y.default)("div", {
				target: "eah4o3n0"
			})("bottom:", k.spaces.medium, ";position:fixed;right:0;z-index:100;"),
			ua = {
				rightMarketingSlot: function(e) {
					var t = e.config,
						n = e.currentPage;
					return t.activePages && t.activePages.includes(n)
				}
			},
			da = function(e) {
				var t = e.children,
					n = e.currentPage,
					r = e.currentSlug,
					a = e.config;
				if(a.activePages && a.activePages.includes(n)) {
					var o = {};
					return Object.keys(a.campaigns).forEach((function(e) {
						ua[e]({
							currentPage: n,
							currentSlug: r,
							config: a
						}) && (o[e] = a.campaigns[e])
					})), t(o)
				}
				return t({
					campaigns: {}
				})
			},
			pa = on.a.MISSPELLING,
			ma = on.a.NO_RESULT,
			ha = on.a.FOUR0FOUR,
			fa = function(e) {
				return {
					activePages: [pa, ma, ha],
					campaigns: {
						rightMarketingSlot: e && e.text ? u.a.createElement(Xr.RightRibbon, f()({
							linkid: "kpu0de",
							type: Xr.RIBBON_TYPES.POINTED
						}, e)) : null
					}
				}
			};
		var ga = Object(y.default)("div", {
				target: "e1orooix2"
			})("background-color:", k.utilityColors.background, ";display:flex;flex-direction:column;justify-content:space-between;min-height:100vh;"),
			wa = Object(y.default)("div", {
				target: "e1orooix1"
			})({
				name: "1oxnttq",
				styles: "flex-grow:1;flex-shrink:0"
			}),
			ya = Object(y.default)("main", {
				target: "e1orooix0"
			})("display:block;margin:0 auto;padding:0;@media (min-width: ", lr + sr + 25, "px){width:", lr + sr, "px;}"),
			ba = function(e) {
				var t = e.marketingConfig,
					n = e.headword,
					r = e.isMobile,
					a = e.isTablet,
					o = e.marketingBanner,
					i = e.pageName,
					s = e.region,
					c = e.searchTerm,
					l = e.slug,
					d = e.dispatchSearch,
					p = e.route,
					h = e.tracker,
					f = e.userInfo,
					g = e.ldId,
					w = "US" === s,
					y = function(e, t) {
						var n = Xt(i);
						return h.setPageName(n), h.report(new S.ClickInnerEvent(e, t))
					},
					O = function(e) {
						return h.report(e)
					},
					v = function(e) {
						var t = e.term;
						return d({
							term: t
						})
					};
				return u.a.createElement(E.a, {
					value: b.a
				}, u.a.createElement(rr, null), u.a.createElement(da, {
					currentPage: i,
					currentSlug: l,
					config: t || fa(o)
				}, (function(e) {
					var t = e.rightMarketingSlot;
					return u.a.createElement(ga, null, u.a.createElement(aa, {
						dispatchSearch: d,
						enableAutoCompleteFeature: "true" === Object(L.n)(),
						isMobile: r,
						isTablet: a,
						searchedTerm: n || c,
						tracker: h,
						userEmail: f.email
					}), u.a.createElement(wa, null, u.a.createElement(ya, null, Object(m.b)(p.routes, {
						reportClickInner: y,
						report: O,
						searchThesaurus: v,
						region: s,
						tracker: h,
						ldId: g
					}))), t && u.a.createElement(la, null, t), u.a.createElement(ca, {
						shouldDisplayDoNotSellLink: w
					}))
				})))
			},
			Ea = function(e) {
				var t = e.history,
					n = e.location,
					r = w()(e, ["history", "location"]);
				return u.a.createElement($r, {
					history: t,
					location: n
				}, (function(e) {
					var a = e.tracker,
						o = e.userInfo;
					return u.a.createElement(ba, f()({
						tracker: a,
						userInfo: o,
						history: t,
						location: n
					}, r))
				}))
			};
		Ea.loadData = function(e) {
			var t = e.store,
				n = [t.dispatch(Je()), t.dispatch(nt()), t.dispatch(Qe())];
			return Promise.all(n)
		};
		var Oa = Object(O.e)(Object(d.c)((function(e) {
				return {
					headword: at(e),
					isMobile: Ot(e),
					isTablet: Et(e),
					isEU: kt(e),
					marketingBanner: Rt(e),
					pageName: yt(e),
					region: vt(e),
					searchTerm: wt(e),
					slug: mt(e),
					queryParam: Lt(e)
				}
			}), (function(e) {
				return {
					dispatchSearch: Object(v.bindActionCreators)(Ke, e)
				}
			}))(Ea)),
			va = function(e) {
				return function(t) {
					return t({
						type: z.CHANGE_ACTIVE_POS_TAB,
						activePosTabIndex: e
					})
				}
			},
			ka = Object(y.default)("section", {
				target: "e1h3b0ep0"
			})("align-items:center;display:flex;flex-direction:column;padding-bottom:15px;position:relative;@media only screen and (min-width: ", ur, "px){align-items:unset;flex-direction:row;padding:0 15px 15px 15px;}");
		var Sa = Object(y.default)("section", {
				target: "e1v16r9g0"
			})({
				name: "19763d6",
				styles: "flex:1;max-width:850px;padding:0 10px;width:100%"
			}),
			_a = Object(y.default)("div", {
				target: "e1eym3ob0"
			})("color:", k.utilityColors.baseFont, ";position:relative;top:", (function(e) {
				return e.adjustTopPosition ? "0" : "-12px"
			}), ";"),
			xa = function(e) {
				var t = e.adjustTopPosition;
				return u.a.createElement(_a, {
					adjustTopPosition: t
				}, "Roget's 21st Century Thesaurus, Third Edition Copyright © 2013 by the Philip Lief Group.")
			},
			Ta = Object(fr.arrayOf)(Object(fr.shape)({
				isInformal: fr.string,
				isVulgar: fr.string,
				similarity: fr.string,
				targetSlug: fr.string,
				targetTerm: fr.string,
				term: fr.string
			})),
			ja = Object(y.default)("div", {
				target: "e1qo4u831"
			})("background-color:", k.utilityColors.white, ";margin-bottom:", k.spaces.regular, ";padding:", k.spaces.medium, ";@media (min-width: ", k.deviceScreenWidths.medium, "px){padding:", k.spaces.big, " ", k.spaces.giant, ";}"),
			Ia = Object(y.default)("div", {
				target: "e1qo4u830"
			})("background-color:", k.utilityColors.white, ";padding:", k.spaces.medium, ";@media (min-width: ", k.deviceScreenWidths.medium, "px){padding:", k.spaces.big, " ", k.spaces.giant, ";}"),
			Aa = Object(y.default)("div", {
				target: "e1i572590"
			})("margin-bottom:", (function(e) {
				return e.marginBottom
			}), ";");
		Aa.propTypes = {
			marginBottom: fr.string.isRequired
		};
		var Pa = Aa,
			Ca = n(27),
			Da = n.n(Ca),
			Na = n(17);
		var La = Object(y.default)("div", {
				target: "e6b5qz03"
			})({
				name: "bjn8wh",
				styles: "position:relative"
			}),
			Ra = Object(y.default)(Na.TemplateButton, {
				target: "e6b5qz02"
			})({
				name: "1pzwbxw",
				styles: "align-items:center;display:flex;flex-direction:column;position:absolute;top:-4px;width:100%"
			}),
			Ua = Object(y.default)("span", {
				target: "e6b5qz01"
			})({
				name: "j4ka3j",
				styles: "font-weight:bold;margin-bottom:2px"
			}),
			Ma = Object(y.default)("div", {
				target: "e6b5qz00"
			})("background:", k.utilityColors.tcomPrimary, ";border-radius:50%;color:", k.utilityColors.white, ";display:flex;transform:", (function(e) {
				return e.isOpen ? "rotate(180deg)" : "none"
			}), ";"),
			za = function(e) {
				var t = e.children,
					n = e.isOpen,
					r = e.setIsOpen,
					a = e.expanderOptions,
					o = e.reportClickInner,
					i = a.clickInner,
					s = a.closedText,
					c = a.openText;
				return u.a.createElement(u.a.Fragment, null, t, u.a.createElement(La, null, u.a.createElement(Ra, {
					type: "button",
					"aria-label": n ? c : s,
					onClick: function() {
						var e = n ? i.fewer : i.more;
						o(e), r(!n)
					}
				}, u.a.createElement(Ua, null, n ? c : s), u.a.createElement(Ma, {
					isOpen: n
				}, u.a.createElement(Da.a, {
					glyph: k.icons.downArrow
				})))))
			},
			Fa = function(e, t, n) {
				return n ? function(e) {
					return "-100" === e ? ar : or
				}(e) : t !== Za ? k.utilityColors.white : "100" === e ? k.utilityColors.tcomPrimary : "50" === e ? k.oranges.orange300 : "-100" === e || "-50" === e ? k.grays.gray200 : e < 0 ? k.utilityColors.background : e > 0 ? k.oranges.orange200 : "inherit"
			},
			qa = function(e, t) {
				return "100" === e && t === Za ? k.utilityColors.white : k.grays.gray600
			},
			Wa = function(e) {
				return e !== Va ? "inherit" : "normal"
			},
			Ga = function(e, t) {
				return e && t ? {
					onClick: function(n) {
						return n.preventDefault(), t(e)
					},
					href: "/" + on.a.BROWSE + "/" + e
				} : {}
			},
			Ba = function(e) {
				var t = e.linkId,
					n = e.word,
					r = e.sortType,
					a = e.itemClickHandler,
					o = e.isAntonymsPage,
					i = n.slug || n.targetSlug,
					s = Ga(i, a),
					c = s.onClick,
					l = s.href,
					d = {
						mainColor: Fa(n.similarity, r, o),
						textColor: qa(n.similarity, r),
						fontWeight: Wa(r),
						textAlign: "left"
					},
					p = {
						onClick: c
					},
					m = {
						href: l,
						dataLinkid: t
					};
				return u.a.createElement(Na.CompactSolidButton, {
					options: d,
					handlers: p,
					link: m
				}, n.term)
			};
		Ba.propTypes = {
			word: Object(fr.shape)({}),
			sortType: fr.string.isRequired,
			itemClickHandler: fr.func,
			isAntonymsPage: fr.bool.isRequired
		}, Ba.defaultProps = {
			word: null,
			itemClickHandler: null
		};
		var Ha = Ba;

		function Ya(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Ka(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Ya(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ya(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var Va = "SORT_TYPE_A_TO_Z",
			Za = "SORT_TYPE_RELEVANCE",
			Qa = Object(y.default)("ul", {
				target: "e1ccqdb60"
			})("display:grid;grid-auto-flow:column;grid-gap:", k.spaces.tiny, ";hyphens:auto;list-style-type:none;width:100%;word-wrap:break-word;@media (min-width: ", ir, "px){grid-template-rows:repeat(\n      ", (function(e) {
				var t = e.adShifted,
					n = e.columns,
					r = e.numWords,
					a = t ? 3 : n.large;
				return Math.ceil(r / a)
			}), ",\n      auto\n    );}@media (max-width: ", ir, "px) and (min-width: ", k.deviceScreenWidths.large, "px){grid-template-rows:repeat(\n      ", (function(e) {
				var t = e.adShifted,
					n = e.columns,
					r = e.numWords,
					a = t ? 2 : n.medium;
				return Math.ceil(r / a)
			}), ",\n      auto\n    );}@media (max-width: ", k.deviceScreenWidths.large, "px) and (min-width: ", k.deviceScreenWidths.small, "px){grid-template-rows:repeat(\n      ", (function(e) {
				var t = e.adShifted,
					n = e.columns,
					r = e.numWords,
					a = t ? 2 : n.small;
				return Math.ceil(r / a)
			}), ",\n      auto\n    );}@media (max-width: ", k.deviceScreenWidths.small, "px){grid-template-rows:repeat(\n      ", (function(e) {
				var t = e.columns,
					n = e.numWords,
					r = t.extraSmall;
				return Math.ceil(n / r)
			}), ",\n      auto\n    );}"),
			$a = function(e, t) {
				return e < t ? -1 : 1
			},
			Xa = function(e, t) {
				return void 0 === (n = t) && (n = !1), e.sort((function(e, t) {
					var r = Math.abs(e.similarity),
						a = Math.abs(t.similarity);
					return e.similarity === t.similarity ? $a(e.term, t.term) : n ? r - a : a - r
				}));
				var n
			},
			Ja = {
				large: 5,
				medium: 4,
				small: 3,
				extraSmall: 2
			},
			eo = function(e) {
				var t = e.isAntonymsPage,
					n = e.linkId,
					r = e.wordData,
					a = e.sortType,
					o = e.itemClickHandler,
					i = e.adShifted,
					s = e.columnsCount;
				if(!Array.isArray(r) || P()(r)) return null;
				var c = r;
				c = a === Va ? r.sort((function(e, t) {
					return $a(e.term, t.term)
				})) : a === Za ? Xa(r) : r;
				var l = Ka(Ka({}, Ja), s);
				return u.a.createElement(Qa, {
					numWords: c.length,
					columns: l,
					adShifted: i
				}, c.map((function(e) {
					return u.a.createElement("li", {
						key: e.term + "-" + e.similarity
					}, u.a.createElement(Ha, {
						word: e,
						sortType: a,
						itemClickHandler: o,
						linkId: n,
						isAntonymsPage: t
					}))
				})))
			};
		eo.propTypes = {
			isAntonymsPage: fr.bool.isRequired,
			linkId: fr.string,
			wordData: Object(fr.arrayOf)(Object(fr.shape)({
				term: fr.string
			})),
			sortType: fr.string,
			itemClickHandler: fr.func,
			adShifted: fr.bool
		}, eo.defaultProps = {
			linkId: null,
			wordData: [],
			sortType: void 0,
			itemClickHandler: null,
			adShifted: !1
		};
		var to = eo,
			no = function(e) {
				var t = e.linkId,
					n = e.wordData,
					r = void 0 === n ? [] : n,
					a = e.itemClickHandler,
					o = e.sortType,
					i = e.columnsCount,
					s = e.supportingContent,
					c = e.headingContent,
					l = e.isAntonymsPage;
				return !Array.isArray(r) || P()(r) ? null : u.a.createElement(u.a.Fragment, null, c, u.a.createElement(Pa, {
					marginBottom: s ? k.spaces.medium : "0"
				}, u.a.createElement(to, {
					wordData: r,
					sortType: o,
					columnsCount: i,
					isAntonymsPage: l,
					itemClickHandler: a,
					linkId: t
				})), s)
			};
		no.propTypes = {
			linkId: fr.string,
			wordData: Object(fr.arrayOf)(Object(fr.shape)({
				term: fr.string
			})),
			sortType: fr.string.isRequired,
			itemClickHandler: fr.func,
			supportingContent: fr.element,
			headingContent: fr.element,
			isAntonymsPage: fr.bool
		}, no.defaultProps = {
			linkId: null,
			wordData: [],
			itemClickHandler: null,
			supportingContent: null,
			headingContent: null,
			isAntonymsPage: !1
		};
		var ro = no,
			ao = Object(y.default)("h2", {
				target: "e1qhuuqg0"
			})("color:", k.grays.gray600, ";font-size:", k.fontSizes.regular, ";font-weight:bold;margin-bottom:", k.spaces.regular, ";margin-top:0;text-transform:uppercase;");
		var oo = Object(y.default)("span", {
				target: "e11qmgl1"
			})("position:relative;::before{border-bottom:", (function(e) {
				return "3px solid " + e.color
			}), ";content:'';left:0;position:absolute;top:90%;width:100%;z-index:0;}"),
			io = Object(y.default)("span", {
				target: "e11qmgl0"
			})({
				name: "burnx3",
				styles: "font-style:italic;position:relative;text-transform:lowercase;z-index:1"
			}),
			so = function(e) {
				var t = e.children,
					n = e.color;
				return u.a.createElement(oo, {
					color: n
				}, u.a.createElement(io, null, t))
			};
		so.propTypes = {
			children: fr.node,
			color: fr.string
		}, so.defaultProps = {
			children: null,
			color: k.utilityColors.tcomPrimary
		};
		var co = so,
			lo = Object(y.default)("div", {
				target: "e1ofkxl60"
			})("color:", k.utilityColors.baseFont, ";font-size:", k.fontSizes.tiny, ";&::before{background-color:", (function(e) {
				return e.color
			}), ";border-radius:100px;content:'';display:inline-block;height:10px;margin-right:", k.spaces.tiny, ";width:10px;}"),
			uo = function(e) {
				var t = e.children,
					n = e.color;
				return u.a.createElement(lo, {
					color: n
				}, t)
			};
		uo.propTypes = {
			color: fr.string.isRequired
		};
		var po = uo,
			mo = function(e) {
				var t = e.headword,
					n = e.isMobile;
				return u.a.createElement(Pa, {
					marginBottom: n ? k.spaces.large : "0px"
				}, u.a.createElement(Na.CompactSolidButton, {
					options: {
						mainColor: k.utilityColors.tcomPrimary,
						flashy: !0
					},
					link: {
						href: "/browse/" + t
					}
				}, "SEE SYNONYMS"))
			};
		mo.propTypes = {
			headword: fr.string.isRequired,
			isMobile: fr.bool.isRequired
		};
		var ho = mo;
		var fo = Object(y.default)("div", {
				target: "e1t02uey0"
			})({
				name: "1fttcpj",
				styles: "display:flex;flex-direction:column"
			}),
			go = "nav_antonyms",
			wo = "nav_close",
			yo = "nav_open",
			bo = "nav_related_words",
			Eo = "nav_meanings",
			Oo = "nav_grmmarcoach",
			vo = "nav_when_to_use",
			ko = "nav_related_content",
			So = "nav_pronoun_usage_note",
			_o = {
				closedText: "MORE ANTONYMS",
				openText: "SEE FEWER ANTONYMS",
				clickInner: {
					fewer: "fewer_synonyms",
					more: "more_synonyms"
				}
			},
			xo = function(e) {
				var t = e.headword;
				return u.a.createElement(ao, null, "other words for ", u.a.createElement(co, null, t))
			},
			To = function(e) {
				var t = e.isOpen,
					n = e.isAntonymsPage,
					r = e.isMobile,
					a = e.headword;
				return u.a.createElement(fo, null, n && u.a.createElement(ho, {
					isMobile: r,
					headword: a
				}), t && u.a.createElement(Pa, {
					marginBottom: k.spaces.medium
				}, u.a.createElement(po, {
					color: n ? ar : k.grays.gray200
				}, "MOST RELEVANT")))
			},
			jo = function(e) {
				var t = e.headword,
					n = e.reportClickInner,
					r = e.antonyms,
					a = e.isAntonymsPage,
					o = e.searchThesaurus,
					i = e.isMobile,
					s = Object(l.useState)(!1),
					c = s[0],
					d = s[1],
					p = r.slice(0, 8);
				return u.a.createElement(za, {
					isOpen: c,
					setIsOpen: function() {
						return d(!c)
					},
					expanderOptions: _o,
					reportClickInner: n
				}, u.a.createElement(ro, {
					isAntonymsPage: a,
					wordData: c ? r : p,
					itemClickHandler: function(e) {
						return o({
							term: e.trim()
						})
					},
					linkId: In.LINKID_SYNONYM,
					sortType: Za,
					headingContent: u.a.createElement(xo, {
						isAntonymsPage: a,
						headword: t
					}),
					supportingContent: u.a.createElement(To, {
						isMobile: i,
						headowrd: t,
						isAntonymsPage: a,
						isOpen: c
					})
				}))
			};
		jo.propTypes = {
			antonyms: Ta.isRequired,
			headword: fr.string.isRequired,
			isAntonymsPage: fr.bool.isRequired,
			isMobile: fr.bool.isRequired,
			reportClickInner: fr.func.isRequired,
			searchThesaurus: fr.func.isRequired
		};
		var Io = jo;
		var Ao = Object(y.default)("div", {
				target: "exogpc81"
			})({
				name: "skgbeu",
				styles: "display:flex;justify-content:flex-end"
			}),
			Po = Object(y.default)("div", {
				target: "exogpc80"
			})({
				name: "1f3egm3",
				styles: "display:flex;flex-wrap:wrap;justify-content:space-between"
			}),
			Co = function(e) {
				var t = e.headword,
					n = e.isAntonymsPage,
					r = e.isMobile;
				return u.a.createElement(Po, null, u.a.createElement(ao, null, "antonyms of ", u.a.createElement(co, null, t)), u.a.createElement(Pa, {
					marginBottom: r ? k.spaces.medium : "0px"
				}, u.a.createElement(po, {
					color: n ? ar : k.grays.gray200
				}, "MOST RELEVANT")))
			},
			Do = function(e) {
				var t = e.antonyms,
					n = e.headword,
					r = e.isAntonymsPage,
					a = e.isMobile,
					o = e.searchThesaurus;
				return u.a.createElement(ro, {
					isAntonymsPage: r,
					wordData: t,
					sortType: Za,
					itemClickHandler: function(e) {
						return o({
							term: e.trim()
						})
					},
					linkId: In.LINKID_ANTONYM,
					supportingContent: r ? u.a.createElement(Ao, null, u.a.createElement(ho, {
						isMobile: a,
						headword: n
					})) : null,
					headingContent: u.a.createElement(Co, {
						isAntonymsPage: r,
						headword: n,
						isMobile: a
					})
				})
			};
		Do.propTypes = {
			antonyms: Ta.isRequired,
			headword: fr.string.isRequired,
			isAntonymsPage: fr.bool.isRequired,
			isMobile: fr.bool.isRequired,
			searchThesaurus: fr.func.isRequired
		};
		var No = Do,
			Lo = function(e) {
				var t = e.antonyms,
					n = e.isAntonymsPage,
					r = e.reportClickInner,
					a = e.searchThesaurus,
					o = Object(d.e)(Ot),
					i = Object(d.e)(at),
					s = n && o && t.length > 8;
				return u.a.createElement(ja, {
					id: "antonyms"
				}, s ? u.a.createElement(Io, {
					antonyms: t,
					headword: i,
					isAntonymsPage: n,
					isMobile: o,
					reportClickInner: r,
					searchThesaurus: a
				}) : u.a.createElement(No, {
					antonyms: t,
					headword: i,
					isAntonymsPage: n,
					isMobile: o,
					searchThesaurus: a
				}))
			};
		Lo.propTypes = {
			antonyms: Ta,
			isAntonymsPage: fr.bool.isRequired,
			reportClickInner: fr.func.isRequired,
			searchThesaurus: fr.func.isRequired
		}, Lo.defaultProps = {
			antonyms: []
		};
		var Ro = Lo,
			Uo = n(31),
			Mo = Object(y.default)("div", {
				target: "ekc3hqz0"
			})("color:", k.grays.gray400, ";margin:0 auto;max-width:850px;padding:", k.spaces.tiny, " 10px;width:100%;@media (min-width: ", ur, "px){margin:0;padding-left:25px;}"),
			zo = function(e) {
				var t = e.headword;
				return u.a.createElement(Mo, null, u.a.createElement(Uo.ChameleonAnchor, {
					"data-linkid": In.LINKID_BREADCRUMBS,
					href: "/"
				}, "Thesaurus"), " ", "/ ", u.a.createElement("i", null, t))
			},
			Fo = n(142),
			qo = n.n(Fo),
			Wo = Object(y.default)("aside", {
				target: "e1wyd5nb0"
			})("align-items:flex-start;display:flex;justify-content:center;min-height:", (function(e) {
				return e.minHeight
			}), "px;"),
			Go = function(e) {
				var t = e.adId,
					n = Lr(t);
				return u.a.createElement(Wo, {
					id: t,
					minHeight: n
				})
			};
		Go.propTypes = {
			adId: fr.string.isRequired
		};
		var Bo = Go;

		function Ho(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Yo(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Ho(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ho(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var Ko = Object(L.a)(),
			Vo = Object(y.default)("aside", {
				target: "erjrm7p0"
			})("margin:0 auto;min-height:", (function(e) {
				return e.minHeight
			}), "px;text-align:center;"),
			Zo = function(e) {
				function t(t) {
					var n;
					return n = e.call(this, t) || this, c()(pr()(n), "setLazyAdElement", (function(e) {
						n.lazyAd = e
					})), c()(pr()(n), "removeScrollEventHandler", (function() {
						return "undefined" != typeof window && (window.removeEventListener ? window.removeEventListener("scroll", n.throttledHandleAdRequest) : window.detachEvent("onscroll", n.throttledHandleAdRequest), !0)
					})), c()(pr()(n), "setupAfterScrollTimer", (function() {
						var e = n.props.adId,
							t = n.state.adRequested;
						n.afterScroll && clearTimeout(n.afterScroll), n.afterScroll = setTimeout((function() {
							if(!t && n.shouldRequestAd()) {
								clearInterval(n.timer);
								var r = Nr(e);
								n.setState({
									adRequested: r
								})
							}
						}), 500)
					})), c()(pr()(n), "handleAdRequest", (function(e) {
						var t = n.props.adId,
							r = n.state.adRequested;
						if(e && (e.preventDefault || e.stopPropagation) && (e.preventDefault(), e.stopPropagation()), n.setupAfterScrollTimer(), r) n.removeScrollEventHandler();
						else if(n.shouldRequestAd()) {
							clearInterval(n.timer), n.afterScroll && clearTimeout(n.afterScroll);
							var a = Nr(t);
							return n.setState({
								adRequested: a
							}), !0
						}
						return !1
					})), n.state = {
						adRequested: !1
					}, n.throttledHandleAdRequest = null, n.scrollY = 0, n.scrollSpeed = 0, n.afterScroll = null, n
				}
				hr()(t, e);
				var n = t.prototype;
				return n.componentDidMount = function() {
					var e = this;
					this.addScrollEventHandler(), this.handleAdRequest(), this.scrollY = window.scrollY, this.timer = setInterval((function() {
						var t = window.scrollY,
							n = e.scrollY;
						e.scrollSpeed = Math.abs(t - n), e.scrollY = t
					}), 500)
				}, n.componentDidUpdate = function() {
					var e = this.props.adId,
						t = function(t) {
							return t.placement === e
						},
						n = Ee()(window, "refreshLazyAds", []),
						r = n.find(t);
					!P()(r) && r.refresh && (this.addScrollEventHandler(), window.refreshLazyAds = n.map((function(e) {
						return t(e) ? Yo(Yo({}, e), {}, {
							refresh: !1
						}) : e
					})))
				}, n.componentWillUnmount = function() {
					this.removeScrollEventHandler(), this.timer && clearInterval(this.timer), this.afterScroll && clearTimeout(this.afterScroll)
				}, n.addScrollEventHandler = function() {
					return "undefined" != typeof window && (this.throttledHandleAdRequest = qo()(this.handleAdRequest, 500), window.addEventListener ? window.addEventListener("scroll", this.throttledHandleAdRequest, !1) : window.attachEvent("onscroll", this.throttledHandleAdRequest), this.setState({
						adRequested: !1
					}, this.throttledHandleAdRequest), !0)
				}, n.shouldRequestAd = function() {
					if(!this.lazyAd) return M.error("this.lazyAd not found to calculate shouldRequestAd"), !1;
					var e = this.lazyAd.getBoundingClientRect();
					if(0 === e.top) return !1;
					var t = this.props.deferredThreshold,
						n = void 0 !== t ? t : 0;
					return this.lazyAd && e.top >= 0 - n && e.bottom <= window.innerHeight + n && this.scrollSpeed < Ko
				}, n.render = function() {
					var e = this.props,
						t = e.adId,
						n = e.isMobile;
					return u.a.createElement(Vo, {
						minHeight: Lr(t),
						isMobile: n
					}, u.a.createElement("div", {
						id: t,
						ref: this.setLazyAdElement
					}))
				}, t
			}(u.a.Component);
		Zo.propTypes = {
			adId: fr.string,
			isMobile: fr.bool
		}, Zo.defaultProps = {
			adId: "",
			isMobile: !1
		};
		var Qo = Zo,
			$o = Object(y.default)("aside", {
				target: "em66cyi1"
			})((function(e) {
				return e.isAdSticky ? "\n  position: fixed;\n  position: sticky;\n  top: -20px;\n  z-index: 1;" : ""
			}), ";"),
			Xo = Object(y.default)("aside", {
				target: "em66cyi0"
			})("display:flex;flex-direction:column;justify-content:center;margin:", (function(e) {
				return e.isMobile ? "10" : "20"
			}), "px 0;z-index:", (function(e) {
				return e.stickyAd ? "1" : "auto"
			}), ";", (function(e) {
				var t = e.marginTop;
				return void 0 !== t && "margin-top: " + t + "px;"
			}), " ", (function(e) {
				var t = e.marginBottom;
				return void 0 !== t && "margin-bottom: " + t + "px;"
			}), ";"),
			Jo = function(e) {
				function t(t) {
					var n;
					return n = e.call(this, t) || this, c()(pr()(n), "activateStickyAd", (function() {
						var e = n.state.isAdSticky,
							t = document.getElementById(Hr.STICKY_REFERENCE_POINT_ID).offsetTop;
						return window.pageYOffset > t ? !e && n.setState({
							isAdSticky: !0
						}) : e && n.setState({
							isAdSticky: !1
						}), !0
					})), c()(pr()(n), "attachScrollToStickyAd", (function() {
						window && !n.throttledScrollListener && (n.throttledScrollListener = qo()(n.activateStickyAd, 100), window.addEventListener("scroll", n.throttledScrollListener, !1))
					})), c()(pr()(n), "removeScrollListener", (function() {
						window && window.removeEventListener("scroll", n.throttledScrollListener)
					})), n.state = {
						isAdSticky: !1
					}, n
				}
				hr()(t, e);
				var n = t.prototype;
				return n.componentDidMount = function() {
					this.props.stickyAd && this.attachScrollToStickyAd()
				}, n.componentDidUpdate = function() {
					this.props.stickyAd && this.attachScrollToStickyAd()
				}, n.componentWillUnmount = function() {
					this.removeScrollListener()
				}, n.setStickyAdElement = function(e) {
					this.stickyAdElement = e
				}, n.render = function() {
					var e = this.props,
						t = e.adId,
						n = e.stickyAd,
						r = e.marginBottom,
						a = e.marginTop,
						o = e.lazyLoad,
						i = this.state.isAdSticky;
					return u.a.createElement(u.a.Fragment, null, n && u.a.createElement("div", {
						id: Hr.STICKY_REFERENCE_POINT_ID
					}), u.a.createElement($o, {
						isAdSticky: i
					}, u.a.createElement(Xo, {
						stickyAd: n,
						marginTop: a,
						marginBottom: r
					}, o ? u.a.createElement(Qo, this.props) : u.a.createElement(Bo, {
						adId: t
					}))))
				}, t
			}(u.a.Component);
		Jo.propTypes = {
			marginTop: fr.number,
			marginBottom: fr.number,
			lazyLoad: fr.bool
		}, Jo.defaultProps = {
			marginTop: void 0,
			marginBottom: void 0,
			lazyLoad: !1
		};
		var ei = Jo,
			ti = n(41),
			ni = function() {
				return new ti.ApolloClient({
					cache: new ti.InMemoryCache,
					uri: Object(L.o)() + "/graphql"
				})
			},
			ri = Object(y.default)("div", {
				target: "e18dru2v2"
			})("display:flex;flex-wrap:nowrap;margin-right:", k.spaces.tiny, ";"),
			ai = Object(y.default)(Na.TemplateButton, {
				target: "e18dru2v1"
			})("cursor:pointer;margin-right:", k.spaces.tiny, ";position:relative;:hover{transform:scale(1.1);}:focus{outline:4px solid ", k.blues.blue300, ";}:focus:not(:hover):not(:active):not([disabled]){::before{opacity:1;}}"),
			oi = Object(y.default)(Da.a, {
				target: "e18dru2v0"
			})("border:none;color:", (function(e) {
				return e.iconColor
			}), ";font-size:", (function(e) {
				return e.fontSize
			}), ";height:", (function(e) {
				return e.squareDimension
			}), ";margin-bottom:2px;width:", (function(e) {
				return e.squareDimension
			}), ";"),
			ii = function() {
				var e = Object(l.useState)({}),
					t = e[0],
					n = e[1],
					r = Object(l.useState)(""),
					a = r[0],
					o = r[1];
				return Object(l.useEffect)((function() {
					T()(I.a.mark((function e() {
						var t;
						return I.a.wrap((function(e) {
							for(;;) switch(e.prev = e.next) {
								case 0:
									return e.prev = 0, e.next = 3, zr.a.currentSession();
								case 3:
									t = e.sent, n(t), o(t.getIdToken().getJwtToken()), e.next = 12;
									break;
								case 8:
									e.prev = 8, e.t0 = e.catch(0), n({}), o("");
								case 12:
								case "end":
									return e.stop()
							}
						}), e, null, [
							[0, 8]
						])
					})))()
				}), []), [t, a]
			};

		function si(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function ci(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? si(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : si(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var li = function(e, t) {
			var n, r = ii()[1],
				a = ci(ci({}, t), {}, {
					context: ci(ci({}, t.context || {}), {}, {
						headers: ci(ci({}, (null == (n = t.context) ? void 0 : n.headers) || {}), {}, {
							authorization: r
						})
					})
				});
			return Object(ti.useMutation)(e, a)
		};

		function ui(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function di(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? ui(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ui(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var pi, mi, hi, fi = function(e, t) {
				var n, r = ii()[1],
					a = di(di({}, t), {}, {
						context: di(di({}, t.context || {}), {}, {
							headers: di(di({}, (null == (n = t.context) ? void 0 : n.headers) || {}), {}, {
								authorization: r
							})
						})
					});
				return Object(ti.useLazyQuery)(e, di(di({}, a), {}, {
					skip: !r
				}))
			},
			gi = n(80),
			wi = n.n(gi),
			yi = Object(ti.gql)(pi || (pi = wi()(["\n  query GetWordListsForSlug($slug: String!) {\n    wordListsForSlug(slug: $slug) {\n      id\n    }\n  }\n"]))),
			bi = Object(ti.gql)(mi || (mi = wi()(["\n  mutation SaveWordBySlug(\n    $slug: String!\n    $displayForm: String!\n    $productSource: String!\n  ) {\n    saveWord(\n      slug: $slug\n      displayForm: $displayForm\n      productSource: $productSource\n    ) {\n      slug\n      displayForm\n      wordListId\n    }\n  }\n"]))),
			Ei = Object(ti.gql)(hi || (hi = wi()(["\n  mutation DeleteWord($slug: String!, $wordListId: ID) {\n    deleteWord(slug: $slug, wordList: $wordListId) {\n      slug\n      wordListId\n      success\n    }\n  }\n"]))),
			Oi = function(e, t, n) {
				var r = Object(l.useState)(""),
					a = r[0],
					o = r[1],
					i = fi(yi, {
						variables: {
							slug: t
						}
					}),
					s = i[0],
					c = i[1],
					u = c.data,
					d = c.loading,
					p = c.error;
				Object(l.useEffect)((function() {
					n && function() {
						var e = T()(I.a.mark((function e() {
							var t;
							return I.a.wrap((function(e) {
								for(;;) switch(e.prev = e.next) {
									case 0:
										return e.next = 2, s();
									case 2:
										o(null != (t = null == u ? void 0 : u.id) ? t : "");
									case 3:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}()()
				}), [n]);
				var m = li(Ei, {
						variables: {
							slug: t,
							wordListId: a
						},
						update: function(e) {
							e.writeQuery({
								query: yi,
								variables: {
									slug: t
								},
								data: {
									wordListsForSlug: []
								}
							})
						}
					}),
					h = m[0],
					f = m[1],
					g = f.error,
					w = f.loading,
					y = li(bi, {
						variables: {
							slug: t,
							displayForm: e,
							productSource: "tcom"
						},
						update: function(e, n) {
							var r = e.readQuery({
									query: yi,
									variables: {
										slug: t
									}
								}).wordListsForSlug,
								a = n.data.saveWord.wordListId;
							e.writeQuery({
								query: yi,
								variables: {
									slug: t
								},
								data: {
									wordListsForSlug: [].concat(r, [{
										id: a
									}])
								}
							})
						}
					}),
					b = y[0],
					E = y[1],
					O = E.error,
					v = E.loading,
					k = O || g;
				return Object(l.useEffect)((function() {
					var e;
					(function(e) {
						if(!e) return !1;
						var t = e.graphQLErrors;
						return !(!t || !t.length) && !!t.filter((function(e) {
							return e.message && "Invalid token." === e.message
						})).length
					})(k) && (e = ("" + Object(L.A)()).replace(/:.*/, ""), Object.keys(yr.a.get()).forEach((function(t) {
						t.match("CognitoIdentityServiceProvider") && yr.a.remove(t, {
							path: "/",
							domain: e
						})
					})), window.location.href = function(e) {
						var t = Object(L.s)() + "://" + Object(L.A)() + "/browse/" + e;
						return "//" + Object(L.i)() + "/sign-up?redirect=" + t
					}(t))
				}), [k]), {
					data: u,
					loading: d,
					error: p,
					deleteWord: h,
					deleteWordError: g,
					deleteWordLoading: w,
					saveWord: b,
					saveWordError: O,
					saveWordLoading: v
				}
			},
			vi = function(e) {
				var t = e.headword,
					n = e.slug,
					r = e.reportClickInner,
					a = e.queryParams,
					o = Object(d.e)(qt),
					i = Object(d.e)(zt),
					s = Oi(t, n, i),
					c = s.data,
					p = s.loading,
					m = s.error,
					h = s.deleteWord,
					f = s.deleteWordError,
					g = s.deleteWordLoading,
					w = s.saveWord,
					y = s.saveWordError,
					b = s.saveWordLoading;
				Object(l.useEffect)((function() {
					o && i && "action" in a && "save" === a.action && (w(), r("ua_save_word"))
				}), [o]);
				var E = !(!c || !c.wordListsForSlug.length),
					O = p || m || b || y || f || g,
					v = "https://" + Object(L.A)() + "/browse/" + n,
					S = "https://" + Object(L.i)() + "/sign-up?redirect=" + v + "?action=save";
				return i && o ? u.a.createElement(ai, {
					"aria-pressed": E,
					"aria-label": E ? "delete word" : "save word",
					onClick: function() {
						i && (E ? (r("ua_unsave_word"), h()) : (r("ua_save_word"), w()))
					},
					disabled: O
				}, u.a.createElement(oi, {
					glyph: E ? k.icons.star : k.icons.starOutline,
					iconColor: E ? k.oranges.orange200 : k.grays.gray600,
					fontSize: k.fontSizes.heading,
					squareDimension: k.fontSizes.heading
				})) : u.a.createElement("a", {
					href: S,
					"data-linkid": In.LINKID_SAVE_WORD_BTN_SIGNED_OUT
				}, u.a.createElement(ai, {
					"aria-pressed": "false",
					"aria-label": "save word"
				}, u.a.createElement(oi, {
					glyph: k.icons.starOutline,
					iconColor: k.grays.gray600,
					fontSize: k.fontSizes.heading,
					squareDimension: k.fontSizes.heading
				})))
			};
		vi.propTypes = {
			headword: fr.string.isRequired,
			slug: fr.string.isRequired,
			reportClickInner: fr.func.isRequired
		};
		var ki = vi,
			Si = ni(),
			_i = function(e) {
				var t = e.playAudio,
					n = e.reportClickInner;
				return u.a.createElement(ai, {
					"aria-label": "play pronunciation",
					onClick: function(e) {
						n("audio"), t(e)
					}
				}, u.a.createElement(oi, {
					glyph: k.icons.audio,
					iconColor: k.grays.gray600,
					fontSize: "33px",
					squareDimension: "33px"
				}))
			},
			xi = function(e) {
				var t = e.headword,
					n = e.pronunciation,
					r = e.reportClickInner;
				if(!n || !n.audio || !Object.keys(n.audio).length) return null;
				var a = null;
				return u.a.createElement(u.a.Fragment, null, u.a.createElement(_i, {
					playAudio: function(e) {
						e && e.preventDefault && e.preventDefault(), e && e.stopPropagation && e.stopPropagation(), a && a.play()
					},
					reportClickInner: r
				}), u.a.createElement("audio", {
					key: t,
					preload: "none",
					ref: function(e) {
						a = e
					}
				}, Object.keys(n.audio).map((function(e) {
					return u.a.createElement("source", {
						key: e,
						src: n.audio[e],
						type: e
					})
				}))))
			},
			Ti = function(e) {
				var t = e.headword,
					n = e.slug,
					r = e.pronunciation,
					a = void 0 === r ? {} : r,
					o = e.reportClickInner,
					i = e.queryParams;
				return u.a.createElement(ti.ApolloProvider, {
					client: Si
				}, u.a.createElement(ri, null, u.a.createElement(xi, {
					headword: t,
					pronunciation: a,
					reportClickInner: o
				}), u.a.createElement(ki, {
					headword: t,
					slug: n,
					reportClickInner: o,
					queryParams: i
				})))
			},
			ji = Object(fr.shape)({
				audio: Object(fr.shape)({
					"audio/ogg": fr.string,
					"audio/mpeg": fr.string
				})
			});
		Ti.propTypes = {
			headword: fr.string.isRequired,
			slug: fr.string.isRequired,
			pronunciation: ji,
			reportClickInner: fr.func.isRequired
		}, Ti.defaultProps = {
			pronunciation: {}
		};
		var Ii = Ti;
		var Ai = Object(y.default)("span", {
				target: "e1ibdjtj6"
			})("margin-right:", (function(e) {
				return e.marginRight
			}), ";"),
			Pi = Object(y.default)("div", {
				target: "e1ibdjtj5"
			})("align-items:flex-start;display:flex;flex-direction:column;margin-bottom:", k.spaces.tiny, ";width:100%;@media (min-width: ", k.deviceScreenWidths.medium, "px){align-items:flex-end;flex-direction:row;}"),
			Ci = Object(y.default)("div", {
				target: "e1ibdjtj4"
			})({
				name: "1x68g3a",
				styles: "align-items:center;align-self:flex-start;display:flex;flex-wrap:wrap"
			}),
			Di = Object(y.default)("h1", {
				target: "e1ibdjtj3"
			})("color:", k.grays.gray600, ";display:inline-block;font-size:36px;font-weight:bold;margin:0 ", k.spaces.tiny, " 0 0;word-break:break-all;@media (min-width: ", k.deviceScreenWidths.medium, "px){font-size:", k.fontSizes.xLarge, ";}"),
			Ni = Object(y.default)(Di, {
				target: "e1ibdjtj2"
			})("color:", k.grays.gray400, ";"),
			Li = Object(y.default)("a", {
				target: "e1ibdjtj1"
			})("color:", k.utilityColors.dcomPrimary, ";display:inline-block;font-size:14px;font-weight:bold;white-space:nowrap;&:focus,&:hover,&:visited,&:link,&:active{text-decoration:none;}"),
			Ri = function(e) {
				var t = e.headword,
					n = e.serpType;
				return u.a.createElement(Di, null, u.a.createElement(Ai, {
					marginRight: n ? k.spaces.regular : "0px"
				}, t), n && u.a.createElement(Ni, {
					as: "span"
				}, " ", n))
			},
			Ui = Object(y.default)("div", {
				target: "e1ibdjtj0"
			})({
				name: "1phjj2a",
				styles: "align-items:center;display:flex;flex:1;flex-wrap:wrap"
			}),
			Mi = function(e) {
				var t = e.isAntonymsMVPword,
					n = e.headword,
					r = e.serpType,
					a = e.includeButtons,
					o = e.reportClickInner,
					i = e.slug,
					s = e.queryParams,
					c = Object(d.e)(ht),
					l = Object(d.e)(ft);
				if(!c && !l && !n) return null;
				var p = {
					"data-linkid": In.LINKID_DEFINITION
				};
				return u.a.createElement(Pi, null, u.a.createElement(Ui, null, u.a.createElement(Ci, null, u.a.createElement(Ri, {
					headword: n,
					isAntonymsMVPword: t,
					serpType: r
				}), a && u.a.createElement(Ii, {
					headword: n,
					slug: i,
					pronunciation: l,
					reportClickInner: o,
					queryParams: s
				})), c && u.a.createElement(Li, f()({
					"data-test-headword-link": !0,
					href: "" + mn(c)
				}, p, {
					target: "_blank"
				}), "See definition of ", u.a.createElement("em", null, n), " ", u.a.createElement("span", null, "on Dictionary.com"))))
			},
			zi = Object(fr.shape)({
				audio: Object(fr.shape)({
					"audio/ogg": fr.string,
					"audio/mpeg": fr.string
				})
			});
		Mi.propTypes = {
			slug: fr.string.isRequired,
			pronunciation: zi,
			headword: fr.string,
			reportClickInner: fr.func,
			serpType: Object(fr.oneOf)(["synonyms", "antonyms", null])
		}, Mi.defaultProps = {
			reportClickInner: function() {
				return null
			},
			pronunciation: {},
			headword: "",
			serpType: null
		};
		var Fi = Mi,
			qi = "\n  width: 100px;\n  position: absolute;\n  bottom: 0;\n  pointer-events: none;\n",
			Wi = "\n  display: inline-block;\n  font-size: 0;\n  line-height: 30px;\n  width: 30px;\n  color: " + k.grays.gray600 + ";\n  outline: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: all;\n  background: transparent;\n\n  :hover {\n    cursor: pointer;\n  }\n",
			Gi = Object(y.default)("div", {
				target: "egrl43c3"
			})(qi, ";background:linear-gradient(\n    to right,\n    ", "rgba(245, 244, 244, 1)", " 0%,\n    ", "rgba(245, 244, 244, 0)", " 100%\n  );left:0;"),
			Bi = Object(y.default)("div", {
				target: "egrl43c2"
			})(qi, ";background:linear-gradient(\n    to left,\n    ", "rgba(245, 244, 244, 1)", " 0%,\n    ", "rgba(245, 244, 244, 0)", " 100%\n  );right:0;text-align:right;"),
			Hi = Object(y.default)(Na.TemplateButton, {
				target: "egrl43c1"
			})(Wi, ";text-align:left;::before{border-bottom:5px solid transparent;border-right:6px solid ", k.grays.gray600, ";border-top:5px solid transparent;content:'';height:0;width:0;}"),
			Yi = Object(y.default)(Na.TemplateButton, {
				target: "egrl43c0"
			})(Wi, ";text-align:right;::before{border-bottom:5px solid transparent;border-left:6px solid ", k.grays.gray600, ";border-top:5px solid transparent;content:'';height:0;width:0;}"),
			Ki = function(e) {
				var t = e.length,
					n = e.minTabsForArrows,
					r = e.activeTabIndex,
					a = e.onTabClick;
				return u.a.createElement(u.a.Fragment, null, t >= n && r > 0 && u.a.createElement(Gi, null, u.a.createElement(Hi, {
					"aria-label": "Previous tab",
					onClick: function(e) {
						e && e.preventDefault && e.preventDefault(), r > 0 && a(r - 1)
					}
				})), t >= n && r < t - 1 && u.a.createElement(Bi, null, u.a.createElement(Yi, {
					"aria-label": "Next tab",
					onClick: function(e) {
						e && e.preventDefault && e.preventDefault(), r < t - 1 && a(r + 1)
					}
				})))
			};
		Ki.propTypes = {
			length: fr.number.isRequired,
			minTabsForArrows: fr.number.isRequired,
			activeTabIndex: fr.number.isRequired,
			onTabClick: fr.func.isRequired
		};
		var Vi = Ki;
		var Zi = Object(y.default)("li", {
				target: "ew5makj5"
			})("background-color:", (function(e) {
				return e.active ? k.utilityColors.white : k.grays.gray200
			}), ";display:inline-block;line-height:17px;margin:0 ", k.spaces.mini, " 0 0;position:relative;@media (max-width: ", cr, "px){margin:0 ", k.spaces.tiny, " 0 0;}::before{content:'';height:0;left:0;position:absolute;top:0;width:0;}"),
			Qi = Object(y.default)("div", {
				target: "ew5makj4"
			})({
				name: "cthfds",
				styles: "height:30px;overflow:hidden;position:relative"
			}),
			$i = Object(y.default)("ul", {
				target: "ew5makj3"
			})("left:", (function(e) {
				return e.left
			}), "px;position:absolute;top:0;transition:left ", (function(e) {
				return e.animate ? .3 : 0
			}), "s;white-space:nowrap;"),
			Xi = Object(y.default)("a", {
				target: "ew5makj2"
			})("color:", (function(e) {
				return e.active ? k.grays.gray600 : k.grays.gray400
			}), ";cursor:pointer;display:inline-block;padding:7px 10px 6px 16px;text-decoration:none;&:hover strong{color:", k.utilityColors.baseFont, ";}"),
			Ji = Object(y.default)("em", {
				target: "ew5makj1"
			})("color:", k.grays.gray400, ";font-size:12px;line-height:13px;margin-right:", k.spaces.mini, ";@media (max-width: ", k.deviceScreenWidths.medium, "px){font-size:16px;}"),
			es = Object(y.default)("div", {
				target: "ew5makj0"
			})({
				name: "bjn8wh",
				styles: "position:relative"
			}),
			ts = function(e, t) {
				return e === t
			},
			ns = function(e) {
				function t(t) {
					var n;
					return(n = e.call(this, t) || this).tabs = [], n.data = t.posTabs, n.asIn = "as-in" === t.type, n.minTabsForArrows = t.isMobile ? 2 : 4, n
				}
				hr()(t, e);
				var n = t.prototype;
				return n.componentDidMount = function() {
					this.sendSetPosEvent()
				}, n.UNSAFE_componentWillReceiveProps = function(e) {
					var t = this.props.headword;
					e.headword !== t && (this.data = e.posTabs, this.tabs = []), this.asIn = "as-in" === e.type
				}, n.componentDidUpdate = function() {
					this.sendSetPosEvent()
				}, n.getTabListLeftOffset = function() {
					var e = this.tabs,
						t = this.tabListEl,
						n = this.minTabsForArrows,
						r = this.props.activeTabIndex;
					if(!e || e.length < n) return 0;
					var a = e[r].offsetLeft - 65;
					return a > t.offsetWidth && (a = t.offsetWidth + 20), a > 0 ? -a : 0
				}, n.sendSetPosEvent = function() {
					var e, t = this.props,
						n = t.posTabs,
						r = t.activeTabIndex;
					r && (window.dataLayer = window.dataLayer || [], window.dataLayer.push(((e = {}).event = "setPOS", e.selectedPOS = n[r].pos, e.selectedTab = r, e)))
				}, n.render = function() {
					var e = this;
					if(!this.data || !this.data.length) return null;
					var t = this.asIn,
						n = this.data,
						r = this.tabs,
						a = this.minTabsForArrows,
						o = this.props,
						i = o.activeTabIndex,
						s = o.onTabClick;
					return u.a.createElement(es, null, u.a.createElement(Qi, {
						className: Hr.POS_TAB_CONTAINER_CLASSNAME
					}, u.a.createElement($i, {
						left: this.getTabListLeftOffset(),
						animate: r.length >= a,
						ref: function(t) {
							e.tabListEl = t
						}
					}, n.map((function(e, n) {
						var a = function(e, t, n, r, a) {
							return {
								pos: e.pos,
								definition: e.definition,
								targetTerm: e.targetTerm,
								active: ts(t, n),
								onTabClick: function() {
									return r(t)
								},
								asIn: a
							}
						}(e, n, i, s, t);
						return u.a.createElement(Zi, {
							"data-test-pos-tab": !0,
							key: "" + n + a.definition,
							active: a.active,
							className: a.active ? Hr.ACTIVE_POS_TAB_CLASSNAME : "",
							ref: function(e) {
								e && (r[n] = e)
							}
						}, u.a.createElement(Xi, {
							onClick: a.onTabClick,
							active: a.active
						}, u.a.createElement(Ji, null, a.asIn ? "as in" : a.pos), u.a.createElement("strong", null, a.asIn ? a.targetTerm : a.definition)))
					})))), u.a.createElement(Vi, {
						length: n.length,
						minTabsForArrows: a,
						activeTabIndex: i,
						onTabClick: s
					}))
				}, t
			}(u.a.Component);
		ns.propTypes = {
			posTabs: Object(fr.arrayOf)(Object(fr.shape)({
				pos: fr.string.isRequired,
				definition: fr.string.isRequired,
				targetTerm: fr.string
			})),
			activeTabIndex: fr.number,
			onTabClick: fr.func,
			headword: fr.string.isRequired,
			type: fr.string
		}, ns.defaultProps = {
			posTabs: [],
			activeTabIndex: 0,
			onTabClick: function() {
				return null
			},
			type: "normal"
		};
		var rs = ns;
		var as = Object(y.default)("div", {
				target: "e1br8a1p0"
			})({
				name: "bjn8wh",
				styles: "position:relative"
			}),
			os = Object(y.default)("section", {
				target: "eome24q0"
			})("margin-bottom:", k.spaces.medium, ";"),
			is = function(e) {
				var t = e.showIf,
					n = void 0 === t || t,
					r = e.adId,
					a = e.isMobile;
				return n ? u.a.createElement(ei, {
					adId: r,
					isMobile: a,
					showText: a
				}) : null
			},
			ss = Object(y.default)("div", {
				target: "ezq74ly1"
			})("position:", (function(e) {
				return e.isSticky ? "sticky" : "static"
			}), ";top:120px;"),
			cs = Object(y.default)("div", {
				target: "ezq74ly0"
			})("flex:1;height:", (function(e) {
				return e.height
			}), "px;left:0;margin-bottom:", (function(e) {
				return e.marginBottom
			}), "px;max-height:", (function(e) {
				return e.height
			}), "px;top:", (function(e) {
				return e.top
			}), "px;width:100%;"),
			ls = function(e) {
				var t = e.adId,
					n = e.height,
					r = e.top,
					a = e.lazyLoad,
					o = e.isSticky,
					i = e.marginBottom;
				return u.a.createElement(cs, {
					height: n,
					top: r,
					marginBottom: i
				}, u.a.createElement(ss, {
					isSticky: o
				}, u.a.createElement(ei, {
					adId: t,
					lazyLoad: a,
					marginTop: 0,
					marginBottom: 0
				})))
			},
			us = function(e) {
				var t = e.isMobile,
					n = e.region;
				return ["US", "CA", "UK", "AU", "NZ"].includes(n) && !t
			},
			ds = function() {
				var e = ps.STICKY_REGION,
					t = ps.MARGIN_BOTTOM,
					n = Object(l.useState)(!1),
					r = n[0],
					a = n[1];
				return Object(l.useEffect)((function() {
					a(!0),
						function(e, t, n, r, a, o, i, s, c, l, u, d, p) {
							if(null === t.getElementById(o)) {
								var m = t.createElement(r);
								m.src = p + Math.floor(1e3 * Math.random()), m.id = o, m.setAttribute(a, n), m.async = 1;
								var h = t.getElementsByTagName(r)[0];
								h.parentNode.insertBefore(m, h);
								var f = (new Date).getTime();
								try {
									e[s][c + u](d, e[s][l + u](d) + "&" + f)
								} catch(t) {
									e[d] = f
								}
							} else void 0 !== e[i] ? e[i] += 1 : e[i] = 1
						}(window, document, "InContent", "script", "mediaType", "carambola_proxy", "Cbola_IC", "localStorage", "set", "get", "Item", "cbolaDt", "//route.carambo.la/inimage/getlayer?pid=dctn68&did=112846&wid=6&rdn=")
				}), []), u.a.createElement(cs, {
					height: 300 + e,
					marginBottom: t,
					top: 850
				}, u.a.createElement(ss, {
					isSticky: !0
				}, u.a.createElement("img", {
					height: "0",
					width: "0",
					alt: "",
					src: "//pixel.carambo.la/Pixel/dctn68/112846/6/1/0",
					style: {
						display: "block",
						width: 0,
						height: 0
					}
				}), r && u.a.createElement("script", {
					"data-cfasync": "false",
					className: "carambola_InContent",
					type: "text/javascript",
					cbola_wid: "6"
				})))
			},
			ps = {
				STICKY_REGION: 250,
				MARGIN_BOTTOM: 0,
				MINIMUM_ADS: 2
			},
			ms = Object(y.default)("aside", {
				target: "evk9ulx0"
			})("display:none;flex-direction:column;margin-left:20px;position:relative;width:", lr, "px;@media (min-width: 768px){display:flex;}@media (max-width: ", k.deviceScreenWidths.medium, "px){margin:20px auto auto auto;max-width:", lr, "px;}"),
			hs = function(e) {
				var t = e.railAds,
					n = Object(d.e)(Ot),
					r = Object(d.e)(vt);
				return u.a.createElement(ms, null, function(e, t, n) {
					var r = ps.STICKY_REGION,
						a = ps.MARGIN_BOTTOM,
						o = us({
							isMobile: e,
							region: n
						});
					return t.map((function(e, n) {
						var i = Rr(e.ad_uuid) + r,
							s = t.slice(1, n).reduce((function(e) {
								return e + i
							}), 0);
						return u.a.createElement(u.a.Fragment, {
							key: e.placement
						}, o && 1 === n && u.a.createElement(ds, null), u.a.createElement(ls, {
							adId: e.placement,
							height: i,
							top: s,
							lazyLoad: e.lazy,
							isSticky: e.sticky,
							marginBottom: a
						}))
					}))
				}(n, t, r))
			};
		hs.propTypes = {
			railAds: gr.a.arrayOf(gr.a.shape({
				placement: gr.a.string,
				ad_uuid: gr.a.string,
				lazyLoad: gr.a.bool
			}))
		}, hs.defaultProps = {
			railAds: []
		};
		var fs = hs,
			gs = [vr[1]].concat(kr),
			ws = function(e) {
				var t = e.reportClickInner,
					n = e.searchThesaurus,
					r = Object(d.e)(ct),
					a = Object(d.e)(Ht),
					o = Object(d.e)(at),
					i = Object(d.e)(Ot),
					s = Object(d.e)(Bt),
					c = Object(d.e)(mt),
					l = Object(d.e)(Pt),
					p = Object(d.d)();
				return u.a.createElement(u.a.Fragment, null, u.a.createElement(zo, {
					headword: o
				}), u.a.createElement(ei, {
					marginTop: 0,
					marginBottom: 16,
					adId: i ? "tcom_serp_mweb_atf_320x50_1" : Er,
					isMobile: i
				}), u.a.createElement(ka, {
					"data-antonyms-serp-mvp": !0
				}, u.a.createElement(Sa, null, u.a.createElement(as, null, u.a.createElement(Fi, {
					headword: o,
					slug: c,
					isAntonymsMVPword: !0,
					serpType: "antonyms"
				}), u.a.createElement(rs, {
					posTabs: s,
					activeTabIndex: r,
					onTabClick: function(e) {
						p(va(e))
					},
					headword: o,
					type: l,
					isMobile: i
				}), u.a.createElement(Pa, {
					marginBottom: i ? k.spaces.large : k.spaces.medium
				}, u.a.createElement(Ro, {
					antonyms: a,
					searchThesaurus: n,
					isAntonymsPage: !0,
					reportClickInner: t
				})), u.a.createElement(xa, null), u.a.createElement(os, {
					"data-non-synonym-serp-ad": !0
				}, u.a.createElement(is, {
					adId: i ? "tcom_serp_mweb_atf_300x250_2" : Or,
					isMobile: i,
					position: "antonymsATF",
					showIf: !0
				})))), !i && u.a.createElement(fs, {
					railAds: gs.slice(0, 1)
				})))
			};
		ws.propTypes = {
			reportClickInner: fr.func.isRequired,
			searchThesaurus: fr.func.isRequired
		};
		var ys = ws,
			bs = function(e) {
				var t = e.reportClickInner,
					n = e.searchThesaurus;
				return u.a.createElement(ys, {
					reportClickInner: t,
					searchThesaurus: n
				})
			};
		bs.loadData = function(e) {
			var t = e.store,
				n = e.match,
				r = e.queryParams,
				a = n.params,
				o = a.slug,
				i = a.page,
				s = [t.dispatch(Ke({
					term: o,
					page: i,
					queryParams: r,
					url: n.url
				}))];
			return Promise.all(s)
		};
		var Es = bs,
			Os = le(Object(L.u)()),
			vs = function() {
				var e = T()(I.a.mark((function e() {
					var t, n;
					return I.a.wrap((function(e) {
						for(;;) switch(e.prev = e.next) {
							case 0:
								return e.prev = 0, e.next = 3, te()("" + Object(L.u)(), Os).then(de);
							case 3:
								return t = e.sent, e.next = 6, t.json();
							case 6:
								return n = e.sent, e.abrupt("return", {
									data: (r = n, a = void 0, a = r[0].quiz, {
										name: a.name,
										url: "https://www.dictionary.com/games/quizzes/" + a.slug
									})
								});
							case 10:
								return e.prev = 10, e.t0 = e.catch(0), M.error("getQuizList error:", e.t0), e.abrupt("return", {
									error: e.t0
								});
							case 14:
							case "end":
								return e.stop()
						}
						var r, a
					}), e, null, [
						[0, 10]
					])
				})));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			ks = function() {
				return function() {
					var e = T()(I.a.mark((function e(t) {
						var n, r, a;
						return I.a.wrap((function(e) {
							for(;;) switch(e.prev = e.next) {
								case 0:
									return t(V.request()), e.next = 3, vs();
								case 3:
									n = e.sent, r = n.error, a = n.data, t(r ? V.failure() : V.success(a));
								case 7:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			},
			Ss = function(e) {
				if(!e) return null;
				try {
					var t = e.slice(0, 4),
						n = e.slice(5, 7) - 1,
						r = e.slice(8, 10),
						a = new Date(t, n, r).toLocaleDateString("en-us", {
							year: "numeric",
							month: "long",
							day: "numeric"
						});
					if("Invalid Date" === a) throw new Error("Invalid Date");
					return a
				} catch(e) {
					return null
				}
			},
			_s = Object(L.w)(),
			xs = function(e) {
				var t = e.date,
					n = e.results[t];
				return {
					date: Ss(t),
					word: n.word,
					deflectors: n.deflectors
				}
			},
			Ts = function() {
				var e = T()(I.a.mark((function e() {
					var t, n, r, a;
					return I.a.wrap((function(e) {
						for(;;) switch(e.prev = e.next) {
							case 0:
								return e.prev = 0, e.next = 3, te()(_s).then(de);
							case 3:
								return t = e.sent, e.next = 6, t.json();
							case 6:
								return n = e.sent, r = n.synonymoftheday, a = xs(r), e.abrupt("return", {
									data: a
								});
							case 12:
								return e.prev = 12, e.t0 = e.catch(0), M.error("getSotd error:", e.t0), e.abrupt("return", {
									error: e.t0
								});
							case 16:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[0, 12]
					])
				})));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			js = function() {
				return function() {
					var e = T()(I.a.mark((function e(t) {
						var n, r, a;
						return I.a.wrap((function(e) {
							for(;;) switch(e.prev = e.next) {
								case 0:
									return t(Q.request()), e.next = 3, Ts();
								case 3:
									n = e.sent, r = n.error, a = n.data, t(r ? Q.failure() : Q.success(a));
								case 7:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			},
			Is = le(Object(L.D)()),
			As = function() {
				var e = T()(I.a.mark((function e() {
					var t, n;
					return I.a.wrap((function(e) {
						for(;;) switch(e.prev = e.next) {
							case 0:
								return e.prev = 0, e.next = 3, te()("" + Object(L.D)(), Is).then(de);
							case 3:
								return t = e.sent, e.next = 6, t.json();
							case 6:
								return n = e.sent, e.abrupt("return", {
									data: n
								});
							case 10:
								return e.prev = 10, e.t0 = e.catch(0), M.error("getWotd error:", e.t0), e.abrupt("return", {
									error: e.t0
								});
							case 14:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[0, 10]
					])
				})));
				return function() {
					return e.apply(this, arguments)
				}
			}(),
			Ps = function() {
				return function() {
					var e = T()(I.a.mark((function e(t) {
						var n, r, a;
						return I.a.wrap((function(e) {
							for(;;) switch(e.prev = e.next) {
								case 0:
									return t($.request()), e.next = 3, As();
								case 3:
									n = e.sent, r = n.error, a = n.data, t(r ? $.failure() : $.success(a));
								case 7:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(t) {
						return e.apply(this, arguments)
					}
				}()
			},
			Cs = n(42),
			Ds = n.n(Cs),
			Ns = n(110),
			Ls = n.n(Ns),
			Rs = n(111);
		var Us = Rs.constants.COLLAPSIBLE_IS_COLLAPSED_CLASSNAME,
			Ms = Rs.constants.COLLAPSIBLE_CONTROL_CLASSNAME,
			zs = Object(y.default)("div", {
				target: "e1dkhfa64"
			})("bottom:0;height:97px;left:0;position:absolute;width:100%;.", Us, "+.", Ms, " &{background-image:linear-gradient(\n      to top,\n      white 45%,\n      rgba(255, 255, 255, 0)\n    );}"),
			Fs = Object(y.default)("span", {
				target: "e1dkhfa63"
			})("color:", k.grays.gray400, ";cursor:pointer;display:block;margin-top:", k.spaces.giant, ";padding-top:20px;text-align:center;"),
			qs = Object(y.default)("span", {
				target: "e1dkhfa62"
			})({
				name: "e0dnmk",
				styles: "cursor:pointer"
			}),
			Ws = Object(y.default)("p", {
				target: "e1dkhfa61"
			})("background-color:white;border-radius:50%;box-shadow:0 0 0 3px ", k.utilityColors.background, ";cursor:pointer;font-family:", k.fonts.iconFont, ";font-size:20px;height:20px;line-height:20px;margin:5px auto;width:20px;&::after{content:", (function(e) {
				return e.arrowIcon
			}), ";}"),
			Gs = Object(y.default)("div", {
				target: "e1dkhfa60"
			})({
				name: "bjn8wh",
				styles: "position:relative"
			}),
			Bs = Object(y.default)("div", {
				target: "e13t8ida0"
			})("background:", k.utilityColors.tcomPrimary, ";border-radius:50%;color:", k.utilityColors.white, ";height:40px;left:", k.spaces.medium, ";padding-left:", k.spaces.tiny, ";padding-top:", k.spaces.tiny, ";position:absolute;top:0;width:40px;z-index:99;");
		var Hs = Object(y.default)("div", {
				target: "e3ysboy0"
			})({
				name: "doyeql",
				styles: "padding-top:20px;position:relative"
			}),
			Ys = function(e) {
				var t = e.children,
					n = e.glyph;
				return u.a.createElement(Hs, null, u.a.createElement(Bs, null, u.a.createElement(Da.a, {
					glyph: n
				})), t)
			};
		Ys.propTypes = {
			glyph: fr.string.isRequired
		};
		var Ks = Ys;
		var Vs = Object(y.default)("div", {
				target: "e1e4voi1"
			})("color:", k.grays.gray400, ";font-size:10px;"),
			Zs = Object(y.default)("span", {
				target: "e1e4voi0"
			})({
				name: "1ro4jg5",
				styles: "height:17px;margin:0 5px 0 5px;width:1px;::before{content:'|';}"
			}),
			Qs = function(e) {
				var t = e.exampleSentenceSource;
				return u.a.createElement(Vs, null, u.a.createElement(Uo.ChameleonAnchor, {
					href: t.url,
					rel: "nofollow noreferrer",
					target: "_blank"
				}, t.title.toUpperCase()), u.a.createElement(Zs, null), t.author.toUpperCase(), t.publication_date && u.a.createElement(u.a.Fragment, null, u.a.createElement(Zs, null), function(e) {
					if(!e) return null;
					try {
						var t = new Date(e.replace("Z", "")).toLocaleDateString("en-us", {
							year: "numeric",
							month: "long",
							day: "numeric"
						});
						if("Invalid Date" === t) throw new Error("Invalid Date");
						return t
					} catch(e) {
						return null
					}
				}(t.publication_date).toUpperCase()), t.source_name && u.a.createElement(u.a.Fragment, null, u.a.createElement(Zs, null), u.a.createElement(Uo.ChameleonAnchor, {
					href: t.url,
					rel: "nofollow"
				}, t.source_name.toUpperCase())))
			};
		Qs.propTypes = {
			exampleSentenceSource: Object(fr.shape)({
				author: fr.string,
				publication_date: fr.string,
				source_name: fr.string,
				title: fr.string,
				url: fr.string
			}).isRequired
		};
		var $s = Qs,
			Xs = function(e) {
				var t = e.children,
					n = e.reportClickInner;
				return u.a.createElement(Rs.Collapsible, {
					expandPrompt: function(e) {
						var t = function() {
							n("expand"), e()
						};
						return u.a.createElement(zs, null, u.a.createElement(Fs, {
							className: "example-sentences-container",
							onClick: t
						}, u.a.createElement(qs, null, "SEE MORE EXAMPLES"), u.a.createElement(Ws, {
							onClick: t,
							arrowIcon: k.icons.downArrow
						})))
					},
					collapsePrompt: function(e) {
						var t = function() {
							n("collapse"), e()
						};
						return u.a.createElement(zs, null, u.a.createElement(Fs, {
							className: "example-sentences-container",
							onClick: t
						}, u.a.createElement(qs, null, "SEE FEWER EXAMPLES"), u.a.createElement(Ws, {
							onClick: t,
							arrowIcon: k.icons.upArrow
						})))
					},
					maxHeight: "275px"
				}, t)
			};
		Xs.propTypes = {
			reportClickInner: fr.func.isRequired
		};
		var Js = Xs,
			ec = function(e, t, n) {
				if(!t) return e;
				var r = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
					a = new RegExp("(" + r + ")", "gi");
				return e.replace(a, '<span class="' + n + '">$1</span>')
			},
			tc = function(e) {
				var t = e.exampleSentence,
					n = e.headword;
				return u.a.createElement("span", {
					dangerouslySetInnerHTML: {
						__html: ec(t, n, "italic")
					}
				})
			};
		tc.propTypes = {
			exampleSentence: fr.string.isRequired,
			headword: fr.string.isRequired
		};
		var nc = tc;
		var rc = Object(y.default)("div", {
				target: "e1wcrhwt0"
			})({
				name: "1m7xl5f",
				styles: "line-height:1.5"
			}),
			ac = function(e) {
				var t = e.exampleSentences,
					n = e.headword,
					r = e.reportClickInner;
				return u.a.createElement(os, null, u.a.createElement(Ks, {
					glyph: k.icons.doublequotes
				}, u.a.createElement(Gs, {
					id: "example-sentences"
				}, u.a.createElement(Ia, null, u.a.createElement(Js, {
					reportClickInner: r,
					key: t[0] && t[0].id
				}, u.a.createElement(Ds.a, {
					heading: "h2",
					size: "h4",
					marginBottom: "large"
				}, "EXAMPLE SENTENCES FROM THE WEB"), t.map((function(e) {
					return u.a.createElement(rc, {
						key: e.id
					}, u.a.createElement(Ls.a, {
						as: "div"
					}, u.a.createElement(nc, {
						exampleSentence: e.sentence,
						headword: n
					}), u.a.createElement($s, {
						exampleSentenceSource: e.source
					})))
				})))))))
			},
			oc = Object(fr.arrayOf)(Object(fr.shape)({
				source: Object(fr.shape)({
					abbreviation: fr.string,
					author: fr.string,
					publication_date: fr.string || null,
					source_name: fr.string || null,
					title: fr.string,
					type: fr.string,
					url: fr.string
				}),
				sentence: fr.string,
				profanity: fr.number,
				id: Object(fr.oneOfType)([fr.string, fr.number])
			}));
		ac.propTypes = {
			reportClickInner: fr.func,
			exampleSentences: oc,
			headword: fr.string
		}, ac.defaultProps = {
			reportClickInner: function() {
				return null
			},
			exampleSentences: [],
			headword: null
		};
		var ic = ac,
			sc = Object(y.default)(Ds.a, {
				target: "ell1i0r1"
			})("margin-bottom:", k.spaces.regular, ";"),
			cc = Object(y.default)(Ds.a, {
				target: "ell1i0r0"
			})("line-height:1.15;margin-bottom:", k.spaces.medium, ";"),
			lc = function() {
				var e = Object(d.e)(Gt);
				return e && Object.keys(e).length > 0 ? u.a.createElement(ja, {
					"data-testid": "quiz-module"
				}, u.a.createElement(sc, {
					heading: "h2",
					size: "h4"
				}, "QUIZZES"), u.a.createElement(cc, {
					heading: "h3",
					size: "h3"
				}, e.name), u.a.createElement(Na.RoomySolidButton, {
					link: {
						href: e.url,
						target: "_blank",
						dataLinkid: In.LINKID_QUIZ_CTA
					},
					options: {
						mainColor: k.utilityColors.tcomPrimary,
						flashy: !0,
						responsive: !0
					},
					rel: "noopener"
				}, "START THE QUIZ")) : null
			},
			uc = n(273),
			dc = {
				items_per_page: "/ page",
				jump_to: "Goto",
				jump_to_confirm: "confirm",
				page: "",
				prev_page: "Previous Page",
				next_page: "Next Page",
				prev_5: "Previous 5 Pages",
				next_5: "Next 5 Pages",
				prev_3: "Previous 3 Pages",
				next_3: "Next 3 Pages"
			},
			pc = Object(y.default)(uc.a, {
				target: "e1eolsbk0"
			})(".rc-pagination{font-size:12px;padding:0;user-select:none;}.rc-pagination>li{list-style:none;}.rc-pagination-total-text{float:left;height:30px;line-height:30px;list-style:none;margin:0 8px 0 0;padding:0;}.rc-pagination::after{clear:both;content:' ';display:block;height:0;overflow:hidden;visibility:hidden;}.rc-pagination-item{background-color:#fff;border:1px solid #d9d9d9;border-radius:6px;cursor:pointer;float:left;height:28px;line-height:28px;list-style:none;margin-right:8px;min-width:28px;text-align:center;}.rc-pagination-item a{color:", k.grays.gray600, ";text-decoration:none;}.rc-pagination-item-active{background-color:#2db7f5;border-color:#2db7f5;}.rc-pagination-item-active a{color:#fff;}.rc-pagination-item:hover{border-color:#2db7f5;}.rc-pagination-jump-prev::after,.rc-pagination-jump-next::after{bottom:0;color:#ccc;content:'•••';display:block;font-size:12px;left:0;letter-spacing:2px;margin-top:1px;position:absolute;right:0;top:0;}.rc-pagination-jump-prev:hover::after,.rc-pagination-jump-next:hover::after{color:#2db7f5;}.rc-pagination-jump-prev:hover::after{content:'«';}.rc-pagination-jump-next:hover::after{content:'»';}.rc-pagination-prev,.rc-pagination-jump-prev,.rc-pagination-jump-next{margin-right:8px;}.rc-pagination-prev,.rc-pagination-next,.rc-pagination-jump-prev,.rc-pagination-jump-next{border-radius:6px;color:", k.grays.gray600, ";cursor:pointer;float:left;font-size:10px;height:28px;line-height:28px;list-style:none;min-width:28px;text-align:center;}.rc-pagination-prev,.rc-pagination-next{border:1px solid #d9d9d9;font-size:18px;}.rc-pagination-prev a,.rc-pagination-next a{color:", k.grays.gray600, ";}.rc-pagination-disabled a{color:#ccc;}.rc-pagination-item:hover a{color:#2db7f5;}.rc-pagination-item-active:hover a{color:#fff;}.rc-pagination-prev a::after{content:'‹';display:block;}.rc-pagination-next a::after{content:'›';display:block;}.rc-pagination-prev a::after,.rc-pagination-next a::after{margin-top:-1px;}.rc-pagination-disabled{cursor:not-allowed;}.rc-pagination-options{float:left;margin-left:15px;}.rc-pagination-options-size-changer{float:left;width:80px;}.rc-pagination-options-quick-jumper{float:left;height:28px;line-height:28px;margin-left:16px;}.rc-pagination-options-quick-jumper input{background-color:#fff;border:1px solid #d9d9d9;border-radius:6px;box-sizing:border-box;height:28px;margin:0 8px;outline:none;padding:3px 12px;width:50px;}.rc-pagination-options-quick-jumper input:hover{border-color:#2db7f5;}.rc-pagination-options-quick-jumper button{background-color:#fff;background-image:none;border:1px solid transparent;border-color:#d9d9d9;border-radius:6px;color:rgba(0, 0, 0, 0.65);cursor:pointer;display:inline-block;font-size:12px;font-weight:500;height:28px;margin:0 8px;padding:0 15px;position:relative;text-align:center;touch-action:manipulation;transition:all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);user-select:none;white-space:nowrap;}.rc-pagination-options-quick-jumper button:hover,.rc-pagination-options-quick-jumper button:active,.rc-pagination-options-quick-jumper button:focus{background-color:#fff;border-color:#2db7f5;color:#2db7f5;}.rc-pagination-simple .rc-pagination-prev,.rc-pagination-simple .rc-pagination-next{border:none;font-size:18px;height:24px;line-height:24px;margin:0;}.rc-pagination-simple .rc-pagination-simple-pager{float:left;list-style:none;margin-right:8px;}.rc-pagination-simple .rc-pagination-simple-pager .rc-pagination-slash{margin:0 10px;}.rc-pagination-simple .rc-pagination-simple-pager input{background-color:#fff;border:1px solid #d9d9d9;border-radius:6px;box-sizing:border-box;margin:0 8px;min-height:20px;outline:none;padding:5px 8px;}.rc-pagination-simple .rc-pagination-simple-pager input:hover{border-color:#2db7f5;}.rc-pagination-simple .rc-pagination-simple-pager button{background-color:#fff;background-image:none;border:1px solid transparent;border-color:#d9d9d9;border-radius:6px;color:rgba(0, 0, 0, 0.65);cursor:pointer;display:inline-block;font-size:12px;font-weight:500;height:26px;margin:0 8px;padding:0 8px;position:relative;text-align:center;touch-action:manipulation;transition:all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);user-select:none;white-space:nowrap;}.rc-pagination-simple .rc-pagination-simple-pager button:hover,.rc-pagination-simple .rc-pagination-simple-pager button:active,.rc-pagination-simple .rc-pagination-simple-pager button:focus{background-color:#fff;border-color:#2db7f5;color:#2db7f5;}@media only screen and (max-width: 1024px){.rc-pagination-item-after-jump-prev,.rc-pagination-item-before-jump-next{display:none;}}", "\n  .rc-pagination {\n    margin: 0 auto;\n  }\n\n  & .rc-pagination-next a::after,\n  & .rc-pagination-prev a::after {\n    content: '' !important;\n\n    li:focus {\n      outline: none;\n    }\n  }\n\n  .rc-pagination-item-link {\n    border-width: 0;\n  }\n\n  .rc-pagination-item {\n    border-radius: 0;\n    border: none;\n    text-decoration: none;\n    /* this removes the blue of the hovering that is set in the library */\n    &:hover a {\n      color: inherit;\n    }\n    &:hover {\n      border-color: inherit;\n    }\n  }\n\n  .rc-pagination-item-active {\n    /* this removes the blue that is set in the library */\n    & a {\n      color: inherit;\n    }\n\n    background-color: inherit;\n  }\n\n  .rc-pagination-prev,\n  .rc-pagination-next {\n    margin: 0 10px;\n    font-size: 14px;\n    font-family: inherit;\n    font-weight: normal;\n  }\n\n  .rc-pagination-prev,\n  .rc-pagination-next,\n  .rc-pagination-jump-prev,\n  .rc-pagination-jump-next {\n    border: 0;\n    text-decoration: none;\n    color: #333;\n  }\n\n  .rc-pagination-jump-prev,\n  .rc-pagination-jump-next {\n    position: relative;\n    &:hover::after {\n      color: inherit;\n      content: '•••';\n    }\n  }\n", ";"),
			mc = Object(y.default)("div", {
				target: "e1gu66k43"
			})("background-color:", (function(e) {
				return e.isActive ? k.utilityColors.tcomPrimary : k.grays.gray200
			}), ";color:", k.grays.gray600, ";"),
			hc = Object(y.default)("div", {
				target: "e1gu66k42"
			})("border-bottom:1px solid ", k.grays.gray200, ";border-top:1px solid ", k.grays.gray200, ";color:", k.grays.gray400, ";display:flex;font-weight:bold;padding:18px 0 10px;"),
			fc = {
				"data-linkid": In.LINKID_PAGINATION
			},
			gc = Object(y.default)("a", {
				target: "e1gu66k41"
			})("color:", k.grays.gray400, ";display:flex;text-decoration:none;"),
			wc = Object(y.default)("span", {
				target: "e1gu66k40"
			})("color:", k.utilityColors.white, ";color:", (function(e) {
				return e.isActive ? k.utilityColors.white : k.grays.gray400
			}), ";text-align:center;width:100%;"),
			yc = function(e) {
				var t = e.totalPages,
					n = void 0 === t ? 1 : t,
					r = e.activePage,
					a = void 0 === r ? 1 : r,
					o = e.onChange,
					i = void 0 === o ? function() {
						return null
					} : o,
					s = e.slug,
					c = e.showFewerPageLinks,
					l = void 0 !== c && c;
				return n > 1 && u.a.createElement(hc, {
					"data-pagination-container": !0
				}, u.a.createElement(pc, {
					pageSize: 1,
					current: a,
					locale: dc,
					itemRender: function(e, t, n) {
						return function(e, t, n, r, a) {
							var o = e > 0 ? "/browse/" + a + (1 !== e ? "/" + e : "") : null;
							return "page" === t ? u.a.createElement(mc, {
								isActive: e === r,
								"data-pagination-specific": !0
							}, u.a.createElement(gc, f()({
								onClick: function(e) {
									return e.preventDefault()
								},
								href: o
							}, fc), u.a.createElement(wc, {
								isActive: e === r
							}, e))) : "prev" === t ? u.a.createElement(gc, f()({
								"data-pagination-prev": !0,
								onClick: function(e) {
									return e.preventDefault()
								},
								href: o
							}, fc), "PREVIOUS") : "next" === t ? u.a.createElement(gc, f()({
								"data-pagination-next": !0,
								onClick: function(e) {
									return e.preventDefault()
								},
								href: o
							}, fc), "NEXT") : n
						}(e, t, n, a, s)
					},
					onChange: function(e) {
						return e !== a && i(s, e)
					},
					total: n,
					showLessItems: l
				}))
			};
		var bc = Object(y.default)("h3", {
				target: "e1m1tvmx3"
			})("color:", k.utilityColors.baseFont, ";display:inline-block;font-size:40px;font-weight:bold;hyphens:auto;line-height:56px;margin:0 15px ", k.spaces.tiny, " 0;word-break:break-all;word-wrap:break-word;@media (min-width: ", k.deviceScreenWidths.medium, "px){font-size:50px;}"),
			Ec = Object(y.default)("a", {
				target: "e1m1tvmx2"
			})({
				name: "tdvcnh",
				styles: "color:inherit;text-decoration:none"
			}),
			Oc = Object(y.default)("span", {
				target: "e1m1tvmx1"
			})("color:", k.utilityColors.baseFont, ";font-size:16px;margin-bottom:", k.spaces.regular, ";@media (max-width: 600px){display:block;}"),
			vc = Object(y.default)("span", {
				target: "e1m1tvmx0"
			})("color:", k.grays.gray400, ";font-style:italic;margin-right:5px;"),
			kc = function(e) {
				var t = e.definition,
					n = e.partOfSpeech,
					r = e.headword,
					a = e.headwordSlug,
					o = e.itemClickHandler;
				return u.a.createElement("div", {
					id: "related-words"
				}, u.a.createElement(bc, null, a ? u.a.createElement(Ec, f()({
					"data-linkid": In.LINKID_WORDS_RELATED_TO
				}, Ga(a, o)), r) : r), u.a.createElement(Oc, null, u.a.createElement(vc, null, n), u.a.createElement("span", null, t)))
			};
		kc.propTypes = {
			headword: fr.string.isRequired,
			headwordSlug: fr.string,
			definition: fr.string,
			partOfSpeech: fr.string
		}, kc.defaultProps = {
			headwordSlug: null,
			definition: null,
			partOfSpeech: null
		};
		var Sc = kc,
			_c = function(e, t) {
				var n = [],
					r = e / t;
				if(!Number.isInteger(r)) return L.H || console.warn("getSectionSlices: could not properly calculate section slices of  " + e + " / " + t + ".  The result must be an integer for proper calculation."), [
					[0, e]
				];
				for(var a = 0; a < e; a += 1) a % r == 0 && n.push([a, a + r]);
				return n
			},
			xc = Object(y.default)("h2", {
				target: "ehjwmox0"
			})("color:", k.grays.gray400, ";font-size:16px;font-weight:normal;margin:0 0 ", k.spaces.small, ";"),
			Tc = function(e) {
				var t = e.relatedWords,
					n = e.lazyLoadedRelatedWords,
					r = e.itemClickHandler,
					a = Object(d.e)(at),
					o = Object(d.e)(Ot);
				if(!t || !t.length) return null;
				var i = _c(je(!0), 3);
				return u.a.createElement(u.a.Fragment, null, u.a.createElement(xc, null, "WORDS RELATED TO ", u.a.createElement("span", null, a.toUpperCase())), i.map((function(e) {
					var n = e[0],
						a = e[1];
					return u.a.createElement("section", {
						key: "words-related-section-" + n + "-" + a
					}, t.slice(n, a).map((function(e, t) {
						return u.a.createElement(Pa, {
							marginBottom: k.spaces.medium,
							key: e.targetTerm + " | " + e.pos + " | " + e.definition
						}, u.a.createElement(Sc, {
							headword: e.targetTerm,
							headwordSlug: e.targetSlug,
							partOfSpeech: e.pos,
							definition: e.definition,
							itemClickHandler: r
						}), u.a.createElement(Ia, null, u.a.createElement(ro, {
							sortType: Va,
							wordData: e.synonyms,
							itemClickHandler: r,
							linkId: In.LINKID_WORDS_RELATED_TO,
							columnsCount: {
								large: 4
							}
						})), o && 0 === t && 0 === n && u.a.createElement(ei, {
							adId: "tcom_serp_mweb_mid_300x250_3",
							isMobile: o,
							lazyLoad: !0,
							deferredThreshold: 200
						}))
					})))
				})), u.a.createElement("section", null, n.map((function(e) {
					return u.a.createElement(Pa, {
						marginBottom: k.spaces.medium,
						key: e.targetTerm + " | " + e.pos + " | " + e.definition
					}, u.a.createElement(Sc, {
						headword: e.targetTerm,
						headwordSlug: e.targetSlug,
						partOfSpeech: e.pos,
						definition: e.definition,
						itemClickHandler: r
					}), u.a.createElement(Ia, null, u.a.createElement(ro, {
						sortType: Va,
						wordData: e.synonyms,
						partOfSpeech: e.pos,
						definition: e.definition,
						headword: e.targetTerm,
						headwordSlug: e.targetSlug,
						itemClickHandler: r,
						linkId: In.LINKID_WORDS_RELATED_TO
					})))
				}))))
			};
		Tc.propTypes = {
			relatedWords: Object(fr.arrayOf)(Object(fr.shape)({
				definition: fr.string,
				pos: fr.string,
				word: fr.string,
				synonyms: Object(fr.arrayOf)(Object(fr.shape)({
					term: fr.string
				}))
			})),
			lazyLoadedRelatedWords: Object(fr.arrayOf)(Object(fr.shape)({
				definition: fr.string,
				pos: fr.string,
				word: fr.string,
				synonyms: Object(fr.arrayOf)(Object(fr.shape)({
					term: fr.string
				}))
			})),
			itemClickHandler: fr.func
		}, Tc.defaultProps = {
			relatedWords: [],
			lazyLoadedRelatedWords: [],
			itemClickHandler: null
		};
		var jc = Tc;
		var Ic = Object(y.default)("div", {
				target: "e1qtz70c2"
			})("border-bottom:", (function(e) {
				return e.showBorderBottom ? "1px solid " + k.utilityColors.horizontalRule : ""
			}), ";"),
			Ac = Object(y.default)("div", {
				target: "e1qtz70c1"
			})({
				name: "16t89lr",
				styles: "align-items:center;display:flex;justify-content:space-between"
			}),
			Pc = Object(y.default)(Ds.a, {
				target: "e1qtz70c0"
			})("margin:", k.spaces.regular, " 0;"),
			Cc = function(e) {
				var t = e.title;
				return u.a.createElement(Pc, {
					heading: "h3",
					size: "h4",
					color: k.utilityColors.baseFont
				}, u.a.createElement("span", {
					dangerouslySetInnerHTML: {
						__html: t
					}
				}))
			},
			Dc = function(e) {
				var t = e.children,
					n = e.isInitiallyExpanded,
					r = e.showBorderBottom,
					a = e.title,
					o = Object(l.useState)(n),
					i = o[0],
					s = o[1];
				return u.a.createElement(Ic, {
					showBorderBottom: r
				}, u.a.createElement(Ac, null, u.a.createElement(Cc, {
					title: a
				}), u.a.createElement(Na.IconButton, {
					ariaLabel: "Close section",
					onClick: function() {
						s(!i)
					}
				}, u.a.createElement(Da.a, {
					color: k.grays.gray400,
					glyph: i ? k.icons.close : k.icons.plus
				}))), i && t)
			};
		var Nc = Object(y.default)("div", {
				target: "ex69thx1"
			})({
				name: "1p3w8zj",
				styles: "margin-bottom:20px;padding-top:20px;position:relative;z-index:1"
			}),
			Lc = Object(y.default)("div", {
				target: "ex69thx0"
			})("color:", k.utilityColors.baseFont, ";font-size:", k.fontSizes.regular, ";line-height:1.5;padding-right:", k.spaces.medium, ";"),
			Rc = function(e) {
				var t = e.editorsNotes,
					n = t.sectionType,
					r = t.entries;
				return u.a.createElement(Nc, {
					id: "editors-notes",
					"data-testid": "editors-notes"
				}, u.a.createElement(Bs, null, u.a.createElement(Da.a, {
					glyph: k.icons.glasses,
					color: k.utilityColors.white
				})), u.a.createElement(Ia, null, u.a.createElement(Ds.a, {
					heading: "h2",
					size: "h4",
					marginBottom: "large"
				}, n.toUpperCase()), r.map((function(e, t) {
					return u.a.createElement(Dc, {
						key: e.title,
						isInitiallyExpanded: 0 === t,
						showBorderBottom: r.length > 1 && t !== r.length - 1,
						title: e.title
					}, u.a.createElement(Lc, {
						dangerouslySetInnerHTML: {
							__html: e.body
						}
					}))
				}))))
			};
		Rc.propTypes = {
			entries: Object(fr.arrayOf)(Object(fr.shape)({
				sectionType: fr.string,
				entries: fr.string
			})),
			sectionType: fr.string
		}, Rc.defaultProps = {
			entries: null,
			sectionType: ""
		};
		var Uc = Rc,
			Mc = Object(y.default)("div", {
				target: "ejxevfx1"
			})("color:", k.utilityColors.heading, ";font-size:", k.fontSizes.regular, ";"),
			zc = Object(y.default)("span", {
				target: "ejxevfx0"
			})("color:", k.utilityColors.tcomPrimary, ";font-weight:bold;"),
			Fc = function(e) {
				var t = e.inflections;
				if(t.length <= 0) return null;
				var n = t.slice(0, 3);
				return u.a.createElement(Mc, {
					"data-testid": "synonym-inflections"
				}, "See also synonyms for: ", n.map((function(e, n) {
					var r = e.displayForm,
						a = e.slug;
					return u.a.createElement(zc, {
						key: r
					}, u.a.createElement(Uo.ChameleonAnchor, {
						"data-linkid": In.LINKID_INFLECTIONS,
						href: a
					}, r), n !== t.length - 1 && u.a.createElement("span", null, " / "))
				})))
			};
		Fc.propTypes = {
			inflections: Object(fr.arrayOf)(Object(fr.shape)({
				displayForm: fr.string,
				slug: fr.string
			})).isRequired
		};
		var qc = Fc,
			Wc = function(e) {
				var t = e.headword,
					n = e.isMobile,
					r = {
						fontWeight: "bold",
						mainColor: ar,
						textAlign: "left",
						textColor: k.grays.gray600
					},
					a = {
						dataLinkid: In.LINKID_SEE_ANTONYMS_CTA,
						href: "/" + on.a.ANTONYMS + "/" + t
					};
				return u.a.createElement(Pa, {
					marginBottom: n ? k.spaces.large : "0px"
				}, u.a.createElement(Na.CompactSolidButton, {
					link: a,
					options: r
				}, "SEE ANTONYMS"))
			},
			Gc = {
				closedText: "MORE SYNONYMS",
				openText: "SEE FEWER SYNONYMS",
				clickInner: {
					fewer: "fewer_synonyms",
					more: "more_synonyms"
				}
			},
			Bc = function(e) {
				var t = e.headword;
				return u.a.createElement(ao, null, "other words for ", u.a.createElement(co, null, t))
			},
			Hc = function(e) {
				var t = e.headword,
					n = e.inflections,
					r = e.isAntonymsMVPword,
					a = e.isMobile,
					o = e.isOpen;
				return u.a.createElement(fo, null, r && u.a.createElement(Wc, {
					headword: t,
					isMobile: a
				}), o && u.a.createElement(u.a.Fragment, null, u.a.createElement(Pa, {
					marginBottom: k.spaces.medium
				}, u.a.createElement(po, {
					color: k.utilityColors.tcomPrimary
				}, "MOST RELEVANT")), u.a.createElement(Pa, {
					marginBottom: k.spaces.medium
				}, u.a.createElement(qc, {
					inflections: n
				}))))
			},
			Yc = function(e) {
				var t = e.headword,
					n = e.isAntonymsMVPword,
					r = e.isMobile,
					a = e.reportClickInner,
					o = e.synonyms,
					i = e.searchThesaurus,
					s = Object(d.e)(it),
					c = Object(l.useState)(!1),
					p = c[0],
					m = c[1],
					h = o.slice(0, 8);
				return u.a.createElement(za, {
					isOpen: p,
					setIsOpen: function() {
						return m(!p)
					},
					expanderOptions: Gc,
					reportClickInner: a
				}, u.a.createElement(ro, {
					wordData: p ? o : h,
					itemClickHandler: function(e) {
						return i({
							term: e.trim()
						})
					},
					linkId: In.LINKID_SYNONYM,
					headingContent: u.a.createElement(Bc, {
						headword: t
					}),
					sortType: Za,
					supportingContent: u.a.createElement(Hc, {
						headword: t,
						inflections: s,
						isAntonymsMVPword: n,
						isMobile: r,
						isOpen: p
					})
				}))
			};
		var Kc = Object(y.default)("div", {
				target: "efhksxz2"
			})({
				name: "zjik7",
				styles: "display:flex"
			}),
			Vc = Object(y.default)(Kc, {
				target: "efhksxz1"
			})({
				name: "i3i6f4",
				styles: "flex:1;justify-content:flex-end"
			}),
			Zc = Object(y.default)("div", {
				target: "efhksxz0"
			})({
				name: "1f3egm3",
				styles: "display:flex;flex-wrap:wrap;justify-content:space-between"
			}),
			Qc = function(e) {
				var t = e.headword,
					n = e.isMobile;
				return u.a.createElement(Zc, null, u.a.createElement(ao, null, "other words for ", u.a.createElement(co, null, t)), u.a.createElement(Pa, {
					marginBottom: n ? k.spaces.medium : "0px"
				}, u.a.createElement(po, {
					color: k.utilityColors.tcomPrimary
				}, "MOST RELEVANT")))
			},
			$c = function(e) {
				var t = e.headword,
					n = e.isAntonymsMVPword,
					r = e.isMobile,
					a = e.searchThesaurus,
					o = e.synonyms,
					i = Object(d.e)(it);
				return u.a.createElement(ro, {
					wordData: o,
					itemClickHandler: function(e) {
						return a({
							term: e.trim()
						})
					},
					linkId: In.LINKID_SYNONYM,
					sortType: Za,
					headingContent: t && u.a.createElement(Qc, {
						headword: t,
						isMobile: r
					}),
					supportingContent: u.a.createElement(Kc, null, u.a.createElement(qc, {
						inflections: i
					}), n && u.a.createElement(Vc, null, u.a.createElement(Wc, {
						headword: t,
						isMobile: r
					})))
				})
			},
			Xc = function(e) {
				var t = e.anchorId,
					n = e.isAntonymsMVPword,
					r = e.searchThesaurus,
					a = e.synonyms,
					o = e.reportClickInner,
					i = Object(d.e)(at),
					s = Object(d.e)(Ot),
					c = s && a.length > 8;
				return u.a.createElement(ja, {
					id: t
				}, c ? u.a.createElement(Yc, {
					headword: i,
					reportClickInner: o,
					synonyms: a,
					searchThesaurus: r,
					isAntonymsMVPword: n,
					isMobile: s
				}) : u.a.createElement($c, {
					headword: i,
					synonyms: a,
					isAntonymsMVPword: n,
					searchThesaurus: r,
					isMobile: s
				}))
			};
		Xc.propTypes = {
			anchorId: fr.string,
			reportClickInner: fr.func.isRequired
		}, Xc.defaultProps = {
			anchorId: void 0
		};
		var Jc = Xc,
			el = Object(y.default)(ja, {
				target: "etomf561"
			})("padding:", k.spaces.medium, ";@media (min-width: ", k.deviceScreenWidths.medium, "){padding:", k.spaces.big, " ", k.spaces.giant, ";}"),
			tl = Object(y.default)("p", {
				target: "etomf560"
			})("color:", k.utilityColors.baseFont, ";font-size:", k.fontSizes.regular, ";line-height:1.5;margin:0;"),
			nl = function(e) {
				var t = e.tunaPronounUsageNote;
				return u.a.createElement(el, {
					"data-testid": "usage-note",
					id: "pronouns-usage-note"
				}, u.a.createElement(tl, null, t))
			};
		nl.propTypes = {
			tunaPronounUsageNote: fr.string.isRequired
		};
		var rl = nl;
		var al = Object(y.default)("h2", {
				target: "ee5399w8"
			})("color:", k.grays.gray400, ";font-size:", k.fontSizes.regular, ";font-weight:unset;margin:", k.spaces.big, " 0 ", k.spaces.tiny, ";"),
			ol = Object(y.default)("div", {
				target: "ee5399w7"
			})("display:flex;flex-direction:column;@media (min-width: ", k.deviceScreenWidths.small, "px){flex-direction:unset;:last-child{align-self:flex-end;}}"),
			il = Object(y.default)("a", {
				target: "ee5399w6"
			})("cursor:pointer;display:flex;flex-grow:1;min-height:50px;overflow:hidden;position:relative;text-decoration:none;:first-of-type{margin-bottom:", k.spaces.regular, ";}@media (min-width: ", k.deviceScreenWidths.small, "px){flex-basis:0;:first-of-type{margin-bottom:unset;margin-right:", k.spaces.medium, ";}}"),
			sl = Object(y.default)("div", {
				target: "ee5399w5"
			})({
				name: "327myh",
				styles: "align-items:stretch;display:flex;flex-direction:column"
			}),
			cl = Object(y.default)("span", {
				target: "ee5399w4"
			})("color:", k.grays.gray500, ";font-weight:bold;margin-bottom:", k.spaces.tiny, ";"),
			ll = Object(y.default)("div", {
				target: "ee5399w3"
			})("color:", k.grays.gray300, ";flex:1;margin-bottom:", k.spaces.tiny, ";overflow:hidden;position:relative;text-overflow:ellipsis;"),
			ul = Object(y.default)("div", {
				target: "ee5399w2"
			})({
				name: "taknbf",
				styles: "background:linear-gradient(rgba(255, 255, 255, 0), white);height:50%;position:absolute;top:50%;width:100%"
			}),
			dl = Object(y.default)("span", {
				target: "ee5399w1"
			})("align-self:flex-start;color:", k.utilityColors.dcomPrimary, ";font-size:", k.fontSizes.small, ";"),
			pl = Object(y.default)("div", {
				target: "ee5399w0"
			})("margin-bottom:", k.spaces.regular, ";@media (min-width: ", k.deviceScreenWidths.small, "px){margin-bottom:", k.spaces.medium, ";}"),
			ml = function(e) {
				var t = e.content,
					n = e.reportClickInner,
					r = e.sourceWord;
				return u.a.createElement(u.a.Fragment, null, u.a.createElement(al, {
					id: "related-content"
				}, "CONTENT RELATED TO ", u.a.createElement("span", null, r.toUpperCase())), u.a.createElement(pl, null, u.a.createElement(Ia, null, u.a.createElement(ol, null, t.map((function(e, t) {
					var r = e.title,
						a = e.metadata,
						o = e.url;
					return u.a.createElement(il, {
						href: o,
						key: r,
						target: "_blank",
						rel: "noopener",
						onClick: function() {
							return function(e) {
								n(0 === e ? "content_related_left" : "content_related_right")
							}(t)
						}
					}, u.a.createElement(sl, null, u.a.createElement(cl, null, r), u.a.createElement(ll, null, a.description, u.a.createElement(ul, null)), u.a.createElement(dl, null, "READ MORE")))
				}))))))
			},
			hl = n(266),
			fl = n.n(hl),
			gl = n(94),
			wl = Object(y.default)("div", {
				target: "eacaz2h2"
			})("align-items:center;display:flex;flex:1;justify-content:flex-end;padding-bottom:", k.spaces.large, ";.wotd-container{width:auto;}@media (min-width: ", k.deviceScreenWidths.medium, "px){margin-right:", k.spaces.medium, ";padding-bottom:0;}"),
			yl = Object(y.default)("section", {
				target: "eacaz2h1"
			})("flex:1;max-width:400px;@media (min-width: ", k.deviceScreenWidths.medium, "px){margin-left:", k.spaces.medium, ";}"),
			bl = Object(y.default)("div", {
				target: "eacaz2h0"
			})("align-items:center;display:flex;flex-direction:column;justify-content:center;margin-top:", k.spaces.medium, ";padding-bottom:", k.spaces.medium, ";@media (min-width: ", k.deviceScreenWidths.medium, "px){flex-direction:row;}@media (min-width: ", k.deviceScreenWidths.large, "px){margin-left:auto;margin-right:auto;margin-top:", k.spaces.large, ";}"),
			El = function(e) {
				var t = e.reportClickInner,
					n = Object(d.e)(Dt),
					r = Object(d.e)(St).slice(0, 4);
				return u.a.createElement(bl, null, u.a.createElement(wl, {
					"data-linkid": In.LINKID_WOTD
				}, u.a.createElement(fl.a, f()({}, n, {
					linkColor: k.utilityColors.tcomPrimary,
					outerCircleColor: k.utilityColors.white,
					innerCircleColor: "transparent",
					wotdWordColor: k.utilityColors.baseFont,
					audioCallback: function() {
						t("audio")
					},
					preventClickTrackingClassName: Hr.PREVENT_CLICK_TRACKING
				}))), u.a.createElement(yl, {
					className: Hr.EDITORIAL_CONTAINER_CLASSNAME
				}, u.a.createElement(gl.EditorialBlock, {
					editorialData: r.slice(0, 4),
					titleLinkId: In.LINKID_EDCONTENT_TITLE,
					sectionTitle: "",
					colCountDesktop: 1,
					colCountMobile: 1,
					lazyLoad: !0,
					lazyLoadClassName: Hr.LAZY_LOAD_CLASSNAME
				})))
			};
		El.propTypes = {
			reportClickInner: fr.func.isRequired
		};
		var Ol = El,
			vl = n(496),
			kl = Object(y.default)("div", {
				target: "e1401u3u1"
			})("align-items:flex-start;background-color:", k.utilityColors.white, ";border:3px solid ", k.utilityColors.tcomPrimary, ";border-radius:20px;bottom:", k.spaces.colossal, ";color:", k.utilityColors.heading, ";display:flex;flex-direction:column;padding:", k.spaces.small, ";position:absolute;transition:opacity 250ms,transform 250ms;width:248px;z-index:1;&.floating-nav-enter{opacity:0;transform:translateY(16px);}&.floating-nav-enter-active{opacity:1;transform:translateY(0);}&.floating-nav-exit{opacity:1;transform:translateY(0);}&.floating-nav-exit-active{opacity:0;transform:translateY(16px);}"),
			Sl = Object(y.default)("button", {
				target: "e1401u3u0"
			})("background-color:transparent;border-width:0;color:", k.utilityColors.heading, ";cursor:pointer;font-size:", k.fontSizes.small, ";padding:", k.spaces.small, ";text-align:left;text-transform:uppercase;"),
			_l = function(e, t) {
				return e ? [t] : []
			},
			xl = function(e) {
				var t = e.closeMenu,
					n = e.pageModules,
					r = e.reportClickInner,
					a = e.show,
					o = function(e) {
						return [].concat(_l(e.synonyms, {
							title: "Other words for",
							id: "headword",
							analyticsTarget: Eo
						}), _l(e.pronounUsageNote, {
							title: "Usage Note",
							id: "pronouns-usage-note",
							analyticsTarget: So
						}), [{
							title: "Grammar Coach",
							id: "grammar-coach-ad",
							analyticsTarget: Oo
						}], _l(e.antonyms, {
							title: "Antonyms of",
							id: "antonyms",
							analyticsTarget: go
						}), _l(e.editorsNotes, {
							title: "When to use",
							id: "editors-notes",
							analyticsTarget: vo
						}), _l(e.relatedContent, {
							title: "Related content",
							id: "related-content",
							analyticsTarget: ko
						}), _l(e.relatedWords, {
							title: "Related Words",
							id: "related-words",
							analyticsTarget: bo
						}))
					}(n).map((function(e) {
						return u.a.createElement(Sl, {
							key: e.title,
							onClick: function() {
								var n, a;
								r(e.analyticsTarget), n = e.id, a = document.getElementById(n).getBoundingClientRect().top + window.pageYOffset - 150, window.scrollTo({
									top: a,
									behavior: "smooth"
								}), t(e.analyticsTarget)
							}
						}, u.a.createElement("b", null, e.title))
					}));
				return u.a.createElement(vl.a, {
					mountOnEnter: !0,
					unmountOnExit: !0,
					in : a,
					classNames: "floating-nav",
					timeout: 250
				}, u.a.createElement(kl, null, o))
			};
		xl.propTypes = {
			closeMenu: fr.func.isRequired,
			pageModules: Object(fr.shape)({
				antonyms: fr.bool,
				exampleCreator: fr.bool,
				exampleSentences: fr.bool,
				relatedContent: fr.bool.isRequired,
				relatedWords: fr.bool.isRequired,
				synonyms: fr.bool.isRequired
			}).isRequired,
			reportClickInner: fr.func.isRequired,
			show: fr.bool.isRequired
		};
		var Tl = xl;
		var jl = Object(y.default)("button", {
				target: "e1p0sp4a3"
			})("align-items:center;background-color:", k.utilityColors.tcomPrimary, ";border-radius:50%;border-width:0;color:", k.utilityColors.white, ";cursor:pointer;display:flex;height:", k.spaces.giant, ";justify-content:center;transition:transform 0.25s;width:", k.spaces.giant, ";z-index:2;:hover{transform:scale(1.1);}"),
			Il = Object(y.default)(Da.a, {
				target: "e1p0sp4a2"
			})({
				name: "1ucylfr",
				styles: "align-items:center;display:flex;justify-content:center"
			}),
			Al = Object(y.default)("div", {
				target: "e1p0sp4a1"
			})("bottom:", k.spaces.medium, ";margin-left:", k.spaces.regular, ";position:absolute;"),
			Pl = Object(y.default)("div", {
				target: "e1p0sp4a0"
			})({
				name: "1tmuahu",
				styles: "bottom:0;height:0;left:50%;max-width:1316px;position:fixed;transform:translateX(-50%);width:100%;z-index:100"
			}),
			Cl = function(e) {
				var t = e.pageModules,
					n = e.reportClickInner,
					r = Object(l.useState)(!1),
					a = r[0],
					o = r[1],
					i = a ? k.icons.close : k.icons.kebab;
				return u.a.createElement(Pl, null, u.a.createElement(Al, null, u.a.createElement(jl, {
					onClick: function() {
						n(a ? wo : yo), o(!a)
					}
				}, u.a.createElement(Il, {
					glyph: i
				})), u.a.createElement(Tl, {
					pageModules: t,
					closeMenu: function() {
						return o(!1)
					},
					reportClickInner: n,
					show: a
				})))
			};
		Cl.propTypes = {
			pageModules: Object(fr.shape)({
				antonyms: fr.bool,
				exampleCreator: fr.bool,
				exampleSentences: fr.bool,
				relatedContent: fr.bool.isRequired,
				relatedWords: fr.bool.isRequired,
				synonyms: fr.bool.isRequired,
				pronounUsageNote: fr.bool.isRequired
			}).isRequired,
			reportClickInner: fr.func.isRequired
		};
		var Dl = Cl,
			Nl = n(268);
		var Ll, Rl = Object(y.default)(Nl.SearchInput, {
				target: "ev44qty4"
			})("border:2px solid ", k.grays.gray200, ";border-radius:", k.borderRadii.base, ";font-size:", k.fontSizes.regular, ";height:40px;padding:", k.spaces.small, " ", k.spaces.big, " ", k.spaces.small, " ", k.spaces.small, ";"),
			Ul = Object(y.default)(Uo.CallToActionAnchor, {
				target: "ev44qty3"
			})({
				name: "gqbxjp",
				styles: "text-transform:unset"
			}),
			Ml = Object(y.default)("span", {
				target: "ev44qty2"
			})("font-size:", k.fontSizes.regular, ";"),
			zl = Object(y.default)("div", {
				target: "ev44qty1"
			})("position:absolute;right:", k.spaces.mini, ";top:", k.spaces.tiny, ";:hover{cursor:pointer;}"),
			Fl = Object(y.default)("div", {
				target: "ev44qty0"
			})({
				name: "bjn8wh",
				styles: "position:relative"
			}),
			ql = function(e) {
				var t = e.report,
					n = e.searchThesaurus,
					r = Object(l.useState)(""),
					a = r[0],
					o = r[1],
					i = function() {
						return t([new S.ClickEvent({
							linkIds: In.LINKID_SECONDARY_SEARCH
						})]), n({
							term: a.trim()
						})
					},
					s = {
						border: "3px solid " + k.oranges.orange350,
						borderRadius: "" + k.borderRadii.base
					};
				return u.a.createElement(ja, {
					"data-secondary-search": !0,
					style: s
				}, u.a.createElement(Pa, {
					marginBottom: k.spaces.small
				}, u.a.createElement(Ds.a, {
					heading: "h2",
					size: "h4"
				}, "FIND THE RIGHT SYNONYM")), u.a.createElement(Pa, {
					marginBottom: k.spaces.regular
				}, u.a.createElement(Fl, null, u.a.createElement(Rl, {
					onChange: function(e) {
						return o(e.target.value)
					},
					onKeyDown: function(e) {
						"Enter" === e.key && i()
					},
					placeholder: "Search Thesaurus.com"
				}), u.a.createElement(zl, null, u.a.createElement(ai, {
					"aria-label": "Search"
				}, u.a.createElement(Da.a, {
					onClick: i,
					glyph: k.icons.search
				}))))), u.a.createElement(Ml, null, "Looking for definitions instead? Go to", " ", u.a.createElement(Ul, {
					href: "https://www.dictionary.com"
				}, "Dictionary.com"), "."))
			},
			Wl = n(269),
			Gl = n.n(Wl),
			Bl = [{
				key: "browseAZItem0",
				path: "/list/0",
				text: "#"
			}, {
				key: "browseAZItemA",
				path: "/list/a",
				text: "Aa"
			}, {
				key: "browseAZItemB",
				path: "/list/b",
				text: "Bb"
			}, {
				key: "browseAZItemC",
				path: "/list/c",
				text: "Cc"
			}, {
				key: "browseAZItemD",
				path: "/list/d",
				text: "Dd"
			}, {
				key: "browseAZItemE",
				path: "/list/e",
				text: "Ee"
			}, {
				key: "browseAZItemF",
				path: "/list/f",
				text: "Ff"
			}, {
				key: "browseAZItemG",
				path: "/list/g",
				text: "Gg"
			}, {
				key: "browseAZItemH",
				path: "/list/h",
				text: "Hh"
			}, {
				key: "browseAZItemI",
				path: "/list/i",
				text: "Ii"
			}, {
				key: "browseAZItemJ",
				path: "/list/j",
				text: "Jj"
			}, {
				key: "browseAZItemK",
				path: "/list/k",
				text: "Kk"
			}, {
				key: "browseAZItemL",
				path: "/list/l",
				text: "Ll"
			}, {
				key: "browseAZItemM",
				path: "/list/m",
				text: "Mm"
			}, {
				key: "browseAZItemN",
				path: "/list/n",
				text: "Nn"
			}, {
				key: "browseAZItemO",
				path: "/list/o",
				text: "Oo"
			}, {
				key: "browseAZItemP",
				path: "/list/p",
				text: "Pp"
			}, {
				key: "browseAZItemQ",
				path: "/list/q",
				text: "Qq"
			}, {
				key: "browseAZItemR",
				path: "/list/r",
				text: "Rr"
			}, {
				key: "browseAZItemS",
				path: "/list/s",
				text: "Ss"
			}, {
				key: "browseAZItemT",
				path: "/list/t",
				text: "Tt"
			}, {
				key: "browseAZItemU",
				path: "/list/u",
				text: "Uu"
			}, {
				key: "browseAZItemV",
				path: "/list/v",
				text: "Vv"
			}, {
				key: "browseAZItemW",
				path: "/list/w",
				text: "Ww"
			}, {
				key: "browseAZItemX",
				path: "/list/x",
				text: "Xx"
			}, {
				key: "browseAZItemY",
				path: "/list/y",
				text: "Yy"
			}, {
				key: "browseAZItemZ",
				path: "/list/z",
				text: "Zz"
			}],
			Hl = function() {
				return u.a.createElement(ja, {
					"data-browse-a-z": !0
				}, u.a.createElement(Pa, {
					marginBottom: k.spaces.regular
				}, u.a.createElement(Ds.a, {
					heading: "h2",
					size: "h4"
				}, "BROWSE THESAURUS.COM")), u.a.createElement(Gl.a, {
					linkId: In.LINKID_AZ_GRID,
					list: Bl,
					primaryColor: k.utilityColors.tcomPrimary
				}))
			},
			Yl = n(47),
			Kl = Object(Yl.keyframes)(Ll || (Ll = wi()(["\n  from {\n      transform: translateY(-50%);\n      opacity: 0;\n  }\n  to {\n      transform: translateY(0);\n      opacity: 1;\n  }\n\n"]))),
			Vl = Object(y.default)("div", {
				target: "e1terdkn0"
			})("animation-duration:500ms;animation-name:", Kl, ";overflow:hidden;"),
			Zl = Object(y.default)("div", {
				target: "e9o58ue3"
			})("background:", k.utilityColors.white, ";margin-bottom:", k.spaces.small, ";padding:", k.spaces.small, ";", (function(e) {
				var t = e.borderColor;
				return t && "border: 1px solid " + t + ";"
			}), ";"),
			Ql = Object(y.default)("div", {
				target: "e9o58ue2"
			})("align-items:center;display:flex;flex-direction:column;@media (min-width: ", k.deviceScreenWidths.small, "px){flex-direction:row;}"),
			$l = Object(y.default)("div", {
				target: "e9o58ue1"
			})("flex:1;margin-bottom:", k.spaces.regular, ";@media (min-width: ", k.deviceScreenWidths.small, "px){margin-bottom:0;margin-right:", k.spaces.tiny, ";}"),
			Xl = Object(y.default)("span", {
				target: "e9o58ue0"
			})("font-size:", k.fontSizes.small, ";font-weight:bold;");

		function Jl() {
			return u.a.createElement(Vl, null, u.a.createElement(Zl, {
				borderColor: k.utilityColors.tcomPrimary
			}, u.a.createElement(Ql, null, u.a.createElement($l, null, u.a.createElement(Xl, null, "We notice the sentence is getting long. Check out our Writing Tool for a better experience.")), u.a.createElement(Na.CompactSolidButton, {
				options: {
					mainColor: k.utilityColors.tcomPrimary
				},
				link: {
					href: "https://www.thesaurus.com/writingtool"
				}
			}, "SEE WRITING TOOL"))))
		}
		var eu = Object(y.default)("div", {
				target: "eljf5l18"
			})("border:1px solid ", k.grays.gray200, ";display:flex;flex-direction:column;font-size:", k.fontSizes.regular, ";margin-bottom:", k.spaces.tiny, ";padding:", k.spaces.regular, ";@media (min-width: ", k.deviceScreenWidths.small, "px){flex-direction:row;padding:", k.spaces.tiny, ";}"),
			tu = Object(y.default)("textarea", {
				target: "eljf5l17"
			})("border:none;flex:1;font-size:", k.fontSizes.regular, ";margin-bottom:", k.spaces.tiny, ";min-height:64px;resize:none;@media (min-width: ", k.deviceScreenWidths.small, "px){max-height:24px;min-height:auto;padding-top:", k.spaces.tiny, ";}"),
			nu = Object(y.default)("input", {
				target: "eljf5l16"
			})("border:none;flex:1;margin-bottom:", k.spaces.tiny, ";max-height:32px;@media (min-width: ", k.deviceScreenWidths.small, "px){margin-bottom:0;margin-right:", k.spaces.small, ";}"),
			ru = Object(y.default)("span", {
				target: "eljf5l15"
			})((function(e) {
				var t = e.color;
				return t && "color: " + t + ";"
			}), ";"),
			au = Object(y.default)("span", {
				target: "eljf5l14"
			})("color:", k.grays.gray500, ";"),
			ou = Object(y.default)("div", {
				target: "eljf5l13"
			})("align-items:center;display:flex;flex-direction:row;margin-top:", k.spaces.tiny, ";"),
			iu = Object(y.default)("span", {
				target: "eljf5l12"
			})({
				name: "nkt64x",
				styles: "margin-right:10px"
			}),
			su = Object(y.default)(Ls.a, {
				target: "eljf5l11"
			})({
				name: "ti75j2",
				styles: "margin:0"
			}),
			cu = Object(y.default)("span", {
				target: "eljf5l10"
			})("font-size:", k.fontSizes.regular, ";"),
			lu = function(e) {
				var t = e.errorState,
					n = e.fetchModifiedSentences,
					r = e.headword,
					a = e.reportClickInner,
					o = e.reset,
					i = e.isMobile,
					s = Object(l.useRef)(null),
					c = Object(l.useState)({
						characterCount: 0,
						exampleSentence: ""
					}),
					d = c[0],
					p = c[1];
				Object(l.useEffect)((function() {
					p({
						characterCount: 0,
						exampleSentence: ""
					}), s.current.value = ""
				}), [r]);
				var m = d.characterCount > 140,
					h = 0 === d.characterCount,
					f = t ? t.message : "";
				m && (f = "Please keep the character count under 140");
				var g = f.length > 0,
					w = function() {
						return a("excreator_activation")
					},
					y = function(e) {
						o(), p({
							exampleSentence: e.target.value,
							characterCount: e.target.value.length
						})
					},
					b = 'Enter a sentence with the word "' + r + '" to see examples in context.';
				return u.a.createElement(u.a.Fragment, null, u.a.createElement(Ds.a, {
					heading: "h2",
					size: "h4",
					marginBottom: "large"
				}, "USE ", u.a.createElement(co, null, r), " IN A SENTENCE"), u.a.createElement(Ls.a, {
					color: k.grays.gray400
				}, u.a.createElement(cu, null, "See how your sentence looks with different synonyms.")), u.a.createElement("form", null, u.a.createElement(eu, null, i ? u.a.createElement(tu, {
					ref: s,
					type: "text",
					placeholder: b,
					"aria-label": b,
					onFocus: w,
					onChange: function(e) {
						return y(e)
					}
				}) : u.a.createElement(nu, {
					ref: s,
					placeholder: b,
					"aria-label": b,
					onFocus: w,
					onChange: function(e) {
						return y(e)
					}
				}), u.a.createElement(Na.CompactSolidButton, {
					options: {
						mainColor: k.utilityColors.tcomPrimary
					},
					state: {
						disabled: m || h
					},
					handlers: {
						onClick: function(e) {
							e.preventDefault(), n({
								sentences: [d.exampleSentence.trim()],
								lemma: r
							}), a("excreator_return"), s.current.blur()
						}
					},
					type: "submit"
				}, "TRY NOW")), u.a.createElement("div", null, u.a.createElement(au, null, "Characters: "), u.a.createElement(ru, {
					color: m ? k.utilityColors.error : k.grays.gray600
				}, d.characterCount + "/140"))), g && u.a.createElement(ou, {
					"data-example-creator-error": !0
				}, u.a.createElement(iu, null, u.a.createElement(Da.a, {
					glyph: k.icons.warning,
					color: k.utilityColors.error
				})), u.a.createElement(su, null, f)), m && u.a.createElement(Jl, null))
			};
		lu.propTypes = {
			headword: gr.a.string,
			fetchModifiedSentences: gr.a.func,
			errorState: gr.a.node,
			reportClickInner: gr.a.func
		}, lu.defaultProps = {
			headword: "",
			fetchModifiedSentences: function() {},
			errorState: null,
			reportClickInner: function() {
				return null
			}
		};
		var uu = lu,
			du = Object(y.default)("div", {
				target: "er15lfu1"
			})("align-items:center;background:", k.utilityColors.background, ";display:flex;flex-direction:column;font-size:", k.fontSizes.regular, ";justify-content:center;padding:", k.spaces.regular, ";@media (min-width: ", k.deviceScreenWidths.small, "px){flex-direction:row;}"),
			pu = Object(y.default)("div", {
				target: "er15lfu0"
			})("color:", k.grays.gray500, ";margin-bottom:", k.spaces.regular, ";text-align:center;@media (min-width: ", k.deviceScreenWidths.small, "px){margin-bottom:0;margin-right:", k.spaces.regular, ";}"),
			mu = function() {
				return u.a.createElement(du, null, u.a.createElement(pu, null, "Are these sentences helpful? Wish they were different? Let us know!"), u.a.createElement(Na.CompactSolidButton, {
					options: {
						mainColor: k.utilityColors.dcomPrimary
					},
					link: {
						href: "https://dictionary.typeform.com/to/IhJMMU",
						target: "_blank"
					}
				}, "GIVE FEEDBACK"))
			},
			hu = function(e) {
				for(var t = e.synonym, n = e.tokenizedSentences, r = e.synonymToken, a = n[0].sentence, o = n[0].tokens, i = [], s = 0; a.length > 0; s += 1) {
					var c = o[s],
						l = c.word,
						u = a.indexOf(l),
						d = a.slice(0, u);
					d && i.push({
						word: d,
						isLemma: !1,
						selectedLemma: !1
					});
					var p = s === r.token.index,
						m = p && t ? t.inflection : l,
						h = c.lemma === r.token.token.lemma;
					m && i.push({
						word: m,
						isLemma: h,
						selectedLemma: p,
						token: h && c
					}), a = (a = a.slice(u)).replace(l, "")
				}
				return i
			};

		function fu(e, t) {
			return e.map((function(e) {
				var n = function(e) {
						return e.synonyms.data.definitionData.definitions.reduce((function(e, t) {
							return e.concat(t.synonyms)
						}), [])
					}(e),
					r = [];
				r.push(hu({
					tokenizedSentences: t,
					synonym: {
						inflection: e.token.token.word
					},
					synonymToken: e
				}));
				for(var a = 0; a < 5; a += 1) {
					var o = n[a],
						i = hu({
							tokenizedSentences: t,
							synonym: o,
							synonymToken: e
						});
					r.push(i)
				}
				return {
					token: e,
					sentences: r
				}
			}))
		}
		var gu = function() {
				var e = T()(I.a.mark((function e(t) {
					var n;
					return I.a.wrap((function(e) {
						for(;;) switch(e.prev = e.next) {
							case 0:
								return n = t.map((function(e) {
									return fetch(Object(L.B)() + "/synonyms?word=" + e.token.word + "&tag=" + e.token.tag + "&lemma=" + e.token.lemma).then((function(t) {
										return {
											response: t,
											token: e
										}
									}))
								})), e.abrupt("return", Promise.all(n).then(function() {
									var e = T()(I.a.mark((function e(t) {
										var n;
										return I.a.wrap((function(e) {
											for(;;) switch(e.prev = e.next) {
												case 0:
													if(!t.some((function(e) {
															return e.status >= 400 && e.status < 500
														}))) {
														e.next = 2;
														break
													}
													return e.abrupt("return", null);
												case 2:
													if(!t.some((function(e) {
															return e.status >= 500
														}))) {
														e.next = 4;
														break
													}
													return e.abrupt("return", null);
												case 4:
													return n = t.map((function(e) {
														return e.response.json().then((function(t) {
															return {
																token: e.token,
																synonyms: t
															}
														}))
													})), e.abrupt("return", Promise.all(n));
												case 6:
												case "end":
													return e.stop()
											}
										}), e)
									})));
									return function(t) {
										return e.apply(this, arguments)
									}
								}()).catch((function(e) {
									console.log(e)
								})));
							case 2:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function(t) {
					return e.apply(this, arguments)
				}
			}(),
			wu = function() {
				var e = T()(I.a.mark((function e(t) {
					var n, r;
					return I.a.wrap((function(e) {
						for(;;) switch(e.prev = e.next) {
							case 0:
								return n = t.sentences, e.prev = 1, e.next = 4, fetch(Object(L.B)() + "/pos", (o = void 0, i = void 0, s = void 0, c = void 0, l = void 0, u = void 0, d = void 0, p = void 0, o = (a = {
									body: {
										sentences: n
									},
									method: "POST"
								}).headers, i = void 0 === o ? {
									Connection: "keep-alive"
								} : o, s = a.body, c = void 0 === s ? null : s, l = a.timeout, u = void 0 === l ? 5e3 : l, d = a.method, "GET" !== (p = {
									timeout: u,
									headers: i,
									method: void 0 === d ? "GET" : d
								}).method && (p.body = c ? JSON.stringify(c) : c), p));
							case 4:
								if(!((r = e.sent).status >= 400 && r.status < 500)) {
									e.next = 7;
									break
								}
								return e.abrupt("return", null);
							case 7:
								if(!(r.status >= 500)) {
									e.next = 9;
									break
								}
								return e.abrupt("return", null);
							case 9:
								return e.next = 11, r.json();
							case 11:
								return e.abrupt("return", e.sent);
							case 14:
								e.prev = 14, e.t0 = e.catch(1), M.error("dispatchRequestExamplePosData error:", e.t0);
							case 17:
								return e.abrupt("return", null);
							case 18:
							case "end":
								return e.stop()
						}
						var a, o, i, s, c, l, u, d, p
					}), e, null, [
						[1, 14]
					])
				})));
				return function(t) {
					return e.apply(this, arguments)
				}
			}(),
			yu = function() {
				var e = T()(I.a.mark((function e(t) {
					var n, r, a, o, i, s;
					return I.a.wrap((function(e) {
						for(;;) switch(e.prev = e.next) {
							case 0:
								return n = t.sentences, r = t.lemma, e.next = 3, wu({
									sentences: n
								});
							case 3:
								if(a = e.sent, o = a && a.sentences ? [].concat(a.sentences) : [], i = [], a && a.sentences && a.sentences.forEach((function(e) {
										e.tokens.forEach((function(e, t) {
											r !== e.lemma && r !== e.word || i.push({
												token: e,
												index: t
											})
										}))
									})), s = [], !i.length) {
									e.next = 12;
									break
								}
								return e.next = 11, gu(i);
							case 11:
								s = e.sent;
							case 12:
								return e.abrupt("return", {
									synonymTokens: s,
									tokenizedSentences: o
								});
							case 13:
							case "end":
								return e.stop()
						}
					}), e)
				})));
				return function(t) {
					return e.apply(this, arguments)
				}
			}(),
			bu = function(e) {
				return {
					code: 2,
					message: 'Please use a phrase with the word "' + e + '".'
				}
			},
			Eu = {
				code: 3,
				message: "We are having trouble providing the correct synonyms for you. \n    Sorry for the inconvenience, and thank you for your patience with our beta feature!"
			},
			Ou = function(e) {
				return {
					code: 4,
					message: 'We could not find any appropriate synonyms for "' + e + '".'
				}
			},
			vu = function(e) {
				return 0 === e.length
			},
			ku = function(e) {
				var t = e.headword,
					n = e.synonymTokens;
				return function(e) {
					var t = e.synonymTokens,
						n = e.tokenizedSentences,
						r = e.headword,
						a = function(e, t) {
							return e ? e.tokens.filter((function(e) {
								return e.word === t || e.lemma === t
							})) : []
						}(n[0], r);
					return vu(t) && a.find((function(e) {
						return "PROPN" === e.pos
					}))
				}(e) || function(e) {
					var t = e.synonymTokens;
					return t[0] && "PROPN" === t[0].token.token.pos
				}(e) ? Eu : vu(n) ? bu(t) : function(e) {
					return e.some((function(e) {
						var t, n, r, a;
						return(null == (t = e.synonyms) || null == (n = t.data) || null == (r = n.definitionData) || null == (a = r.definitions) ? void 0 : a.length) > 0
					}))
				}(n) ? null : Ou(t)
			};
		var Su = Object(y.default)("div", {
				target: "erepvss6"
			})("display:flex;margin-bottom:", k.spaces.tiny, ";"),
			_u = Object(y.default)("div", {
				target: "erepvss5"
			})("align-self:center;color:", k.utilityColors.baseFont, ";flex:1;font-size:", k.fontSizes.regular, ";font-weight:bold;"),
			xu = Object(y.default)("div", {
				target: "erepvss4"
			})("margin-bottom:", k.spaces.tiny, ";"),
			Tu = Object(y.default)("div", {
				target: "erepvss3"
			})("border:3px solid ", k.utilityColors.tcomPrimary, ";margin-bottom:", k.spaces.tiny, ";padding:", k.spaces.small, " ", k.spaces.regular, ";"),
			ju = Object(y.default)("div", {
				target: "erepvss2"
			})("border-bottom:1px solid ", k.utilityColors.horizontalRule, ";padding:", k.spaces.regular, " 0;&:last-child{border-bottom:none;}"),
			Iu = Object(y.default)("span", {
				target: "erepvss1"
			})("color:", k.grays.gray500, ";"),
			Au = Object(y.default)("span", {
				target: "erepvss0"
			})("background:", k.utilityColors.tcomPrimary, ";color:", k.utilityColors.white, ";padding:2px ", k.spaces.mini, ";"),
			Pu = function(e) {
				var t = e.originalSentence,
					n = e.sentences,
					r = e.reset;
				return u.a.createElement(u.a.Fragment, null, u.a.createElement(Su, {
					"data-test-example-sentences": !0
				}, u.a.createElement(_u, null, "Showing examples for the selected word:"), u.a.createElement(Na.TemplateButton, {
					onClick: r
				}, u.a.createElement(Da.a, {
					glyph: k.icons.close
				}))), u.a.createElement(xu, null, t, n), u.a.createElement(mu, null))
			},
			Cu = function(e) {
				function t(t) {
					var n;
					return n = e.call(this, t) || this, c()(pr()(n), "selectLemma", (function(e) {
						n.setState({
							modifiedSentenceIndex: e
						})
					})), c()(pr()(n), "toggleExamples", (function(e) {
						n.setState({
							showExamples: e
						})
					})), c()(pr()(n), "modifiedSentence", (function(e) {
						var t = 0;
						return e.map((function(e, r) {
							var a = e.word,
								o = e.isLemma;
							if(e.selectedLemma) return t += 1, u.a.createElement(Au, {
								key: "" + a + r
							}, a);
							if(o) {
								var i = t;
								return t += 1, u.a.createElement(Na.TemplateButton, {
									onClick: function() {
										return n.selectLemma(i)
									}
								}, u.a.createElement(co, {
									key: "" + a + r,
									color: k.utilityColors.horizontalRule
								}, a))
							}
							return u.a.createElement("span", {
								key: "" + a + r
							}, a)
						}))
					})), c()(pr()(n), "originalSentence", (function() {
						var e = n.props.modifiedSentences[n.state.modifiedSentenceIndex].sentences[0];
						return u.a.createElement(Tu, null, n.modifiedSentence(e))
					})), c()(pr()(n), "modifiedSentences", (function() {
						var e = n.props.modifiedSentences,
							t = n.state.modifiedSentenceIndex;
						return e[t].sentences.map((function(e, t) {
							return 0 === t ? null : u.a.createElement(ju, {
								"data-test-swapped-sentence": !0,
								key: e.map((function(e) {
									return e.word
								})).join("")
							}, u.a.createElement(Iu, null, n.modifiedSentence(e)))
						}))
					})), n.state = {
						showExamples: !0,
						modifiedSentenceIndex: 0
					}, n
				}
				hr()(t, e);
				var n = t.prototype;
				return n.shouldShowExampleSentences = function() {
					var e = this.props.modifiedSentences,
						t = this.state,
						n = t.errorState,
						r = t.showExamples,
						a = t.modifiedSentenceIndex;
					return !(!r || n) && e[a]
				}, n.render = function() {
					var e = this.props,
						t = e.isMobile,
						n = e.fetchModifiedSentences,
						r = e.headword,
						a = e.errorState,
						o = e.reportClickInner,
						i = e.reset;
					return u.a.createElement("section", null, u.a.createElement(ja, null, u.a.createElement(uu, {
						isMobile: t,
						fetchModifiedSentences: n,
						headword: r,
						errorState: a,
						reportClickInner: o,
						reset: function() {
							return i()
						}
					})), this.shouldShowExampleSentences() && u.a.createElement(ja, null, u.a.createElement(Pu, {
						originalSentence: this.originalSentence(),
						sentences: this.modifiedSentences(),
						reset: function() {
							return i()
						}
					})))
				}, t
			}(u.a.Component);
		uu.propTypes = {
			headword: gr.a.string
		}, uu.defaultProps = {
			headword: ""
		};
		var Du = function(e) {
				var t = e.isMobile,
					n = function(e) {
						var t = e.headword,
							n = e.tracker,
							r = Object(l.useState)([]),
							a = r[0],
							o = r[1],
							i = Object(l.useState)(null),
							s = i[0],
							c = i[1],
							u = Object(l.useState)(t),
							d = u[0],
							p = u[1],
							m = function() {
								o([]), c(null)
							};
						return t !== d && (p(t), m()), {
							errorState: s,
							fetchModifiedSentences: function() {
								var e = T()(I.a.mark((function e(r) {
									var a, i, s, l, u, d, p;
									return I.a.wrap((function(e) {
										for(;;) switch(e.prev = e.next) {
											case 0:
												return a = r.sentences, i = r.lemma, e.next = 3, yu({
													sentences: a,
													lemma: i
												});
											case 3:
												s = e.sent, l = s.synonymTokens, u = s.tokenizedSentences, d = ku({
													headword: t,
													synonymTokens: l,
													tokenizedSentences: u
												}), c(d), d || (p = fu(l, u), o(p)), n.report(new S.ExampleCreatorResponse("x", {
													pn: window.location.pathname,
													qr: a[0],
													ds: window.location.href,
													rc: d ? d.code : 1
												}));
											case 10:
											case "end":
												return e.stop()
										}
									}), e)
								})));
								return function(t) {
									return e.apply(this, arguments)
								}
							}(),
							modifiedSentences: a,
							reset: m
						}
					}(e),
					r = n.errorState,
					a = n.modifiedSentences,
					o = n.fetchModifiedSentences,
					i = n.reset;
				return u.a.createElement(Cu, f()({
					modifiedSentences: a,
					fetchModifiedSentences: o,
					errorState: r,
					reset: i,
					isMobile: t
				}, e))
			},
			Nu = Object(y.default)("div", {
				target: "ekthe0n0"
			})("margin-bottom:", k.spaces.regular, ";padding-top:20px;position:relative;@media (min-width: ", k.deviceScreenWidths.small, "px){margin-bottom:", k.spaces.medium, ";}"),
			Lu = function(e) {
				var t = e.reportClickInner,
					n = e.showExampleCreator,
					r = e.tracker,
					a = Object(d.e)(at),
					o = Object(d.e)(Ot);
				return n ? u.a.createElement(Nu, {
					id: "example-creator"
				}, u.a.createElement(Bs, null, u.a.createElement(Da.a, {
					glyph: k.icons.pencil
				})), u.a.createElement(Du, {
					isMobile: o,
					headword: a,
					tracker: r,
					reportClickInner: t
				})) : null
			},
			Ru = [{
				term: "important",
				targetSlug: "important"
			}, {
				term: "good",
				targetSlug: "good"
			}, {
				term: "different",
				targetSlug: "different"
			}, {
				term: "beautiful",
				targetSlug: "beautiful"
			}, {
				term: "however",
				targetSlug: "however"
			}, {
				term: "search",
				targetSlug: "search"
			}, {
				term: "experience",
				targetSlug: "experience"
			}, {
				term: "bad",
				targetSlug: "bad"
			}, {
				term: "change",
				targetSlug: "change"
			}, {
				term: "happy",
				targetSlug: "happy"
			}],
			Uu = function(e) {
				var t = e.searchThesaurus,
					n = e.word,
					r = {
						mainColor: k.utilityColors.tcomPrimary,
						textColor: k.utilityColors.white,
						fontWeight: "normal",
						textAlign: "left"
					},
					a = {
						href: n.targetSlug,
						dataLinkid: "3yswi3"
					},
					o = {
						onClick: function(e) {
							e.preventDefault(), t({
								term: n.term.trim()
							})
						},
						href: "/" + on.a.BROWSE + "/" + n.term
					};
				return u.a.createElement("li", null, u.a.createElement(Na.CompactSolidButton, {
					options: r,
					handlers: o,
					link: a
				}, n.term))
			},
			Mu = function(e) {
				var t = e.searchThesaurus;
				return u.a.createElement(ja, null, u.a.createElement(ao, null, "MOST SEARCHED WORDS"), u.a.createElement(Qa, {
					columns: Ja,
					numWords: Ru.length
				}, Ru.map((function(e) {
					return u.a.createElement(Uu, {
						key: e.term,
						searchThesaurus: t,
						word: e
					})
				}))))
			};
		Mu.propTypes = {
			searchThesaurus: fr.func.isRequired
		};
		var zu = Mu,
			Fu = n.p + "grammar-coach-ad-mobile-a128a04f44d64344c602abb573ebcf5e.png",
			qu = n.p + "grammar-coach-ad-desktop-d581d346a326fb2fb4bdb16af8853045.png",
			Wu = Object(y.default)("section", {
				target: "e1b2n07b5"
			})("background-color:", k.utilityColors.white, ";border:12px solid ", k.oranges.orange300, ";margin-bottom:", k.spaces.medium, ";padding:", k.spaces.medium, ";@media (min-width: ", k.deviceScreenWidths.medium, "px){max-height:230px;padding:", k.spaces.big, " ", k.spaces.giant, ";}"),
			Gu = Object(y.default)("img", {
				target: "e1b2n07b4"
			})("height:auto;margin-bottom:", k.spaces.regular, ";width:100%;@media (min-width: ", k.deviceScreenWidths.medium, "px){display:block;height:131px;margin-bottom:0;width:auto;}"),
			Bu = Object(y.default)("span", {
				target: "e1b2n07b3"
			})("color:", k.utilityColors.heading, ";font-size:", k.fontSizes.heading, ";margin-bottom:", k.spaces.regular, ";margin-top:0;"),
			Hu = Object(y.default)("div", {
				target: "e1b2n07b2"
			})("display:flex;flex-direction:column;justify-content:center;margin-right:", k.spaces.large, ";"),
			Yu = Object(y.default)("div", {
				target: "e1b2n07b1"
			})("display:flex;flex-direction:column;@media (min-width: ", k.deviceScreenWidths.medium, "px){display:none;flex-direction:row;justify-content:space-between;visibility:hidden;}"),
			Ku = Object(y.default)(Yu, {
				target: "e1b2n07b0"
			})("display:none;visibility:hidden;@media (min-width: ", k.deviceScreenWidths.medium, "px){display:flex;flex-direction:row;visibility:visible;}"),
			Vu = {
				mainColor: k.utilityColors.tcomPrimary,
				flashy: !0,
				responsive: !0
			},
			Zu = {
				dataLinkid: In.GRAMMAR_COACH_AD.button,
				href: "/grammarcoach"
			},
			Qu = function() {
				return u.a.createElement(Yu, null, u.a.createElement(Bu, null, u.a.createElement("b", null, "Meet Grammar Coach")), u.a.createElement("a", {
					href: Zu.href,
					"data-linkid": In.GRAMMAR_COACH_AD.banner
				}, u.a.createElement(Gu, {
					alt: "Write or paste your essary, email, or story into Grammar Coach and get grammar help",
					loading: "lazy",
					src: wn(Fu)
				})), u.a.createElement(Na.RoomySolidButton, {
					options: Vu,
					link: Zu
				}, "Improve Your Writing"))
			},
			$u = function() {
				return u.a.createElement(Ku, null, u.a.createElement(Hu, null, u.a.createElement(Bu, null, u.a.createElement("b", null, "Meet Grammar Coach")), u.a.createElement(Na.RoomySolidButton, {
					options: Vu,
					link: Zu
				}, "Improve Your Writing")), u.a.createElement("a", {
					href: Zu.href,
					"data-linkid": In.GRAMMAR_COACH_AD.banner
				}, u.a.createElement(Gu, {
					alt: "Write or paste your essary, email, or story into Grammar Coach and get grammar help",
					loading: "lazy",
					src: wn(qu)
				})))
			},
			Xu = function() {
				return u.a.createElement(Wu, {
					"data-testid": "grammar-coach-ad",
					id: "grammar-coach-ad"
				}, u.a.createElement(Qu, null), u.a.createElement($u, null))
			};
		var Ju = Object(y.default)("svg", {
				target: "e1cwe4mh0"
			})({
				name: "19fp85x",
				styles: "height:22px;width:18px"
			}),
			ed = function() {
				return u.a.createElement(Ju, {
					viewBox: "0 0 18 22",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, u.a.createElement("path", {
					d: "M13.1747 0.154089L17.9287 6.42398C18.1086 6.66329 17.9287 6.98636 17.6075 6.98636L15.3333 6.98636C15.1277 6.98636 14.9478 7.15387 14.9478 7.34532L14.9478 12.5623C14.9478 12.8375 14.6138 13.0169 14.3568 12.8734L10.9519 10.923C10.8363 10.8632 10.7721 10.7435 10.7721 10.6119L10.7721 7.33336C10.7721 7.12994 10.605 6.97439 10.3866 6.97439L8.09959 6.97439C7.79122 6.97439 7.5985 6.65132 7.77837 6.41202L12.5323 0.142123C12.6993 -0.0493237 13.0206 -0.0493237 13.1747 0.154089ZM5.46565 21.8474L10.2196 15.5775C10.3995 15.3382 10.2196 15.0152 9.89837 15.0152L7.62419 15.0152C7.40577 15.0152 7.23874 14.8596 7.23874 14.6562L7.23874 11.3777C7.23874 11.258 7.1745 11.1384 7.05886 11.0666L3.65401 9.12817C3.39704 8.98459 3.06298 9.1521 3.06298 9.43927L3.06298 14.6562C3.06298 14.8596 2.8831 15.0152 2.67753 15.0152L0.390498 15.0152C0.0821355 15.0152 -0.110593 15.3382 0.0692857 15.5775L4.82322 21.8474C4.9774 22.0509 5.31147 22.0509 5.46565 21.8474Z",
					fill: k.utilityColors.tcomPrimary
				}))
			};
		var td = Object(y.default)("div", {
				target: "e1753ktb7"
			})("&:not(:last-of-type){margin-bottom:", k.spaces.small, ";margin-right:0;@media (min-width: ", k.deviceScreenWidths.medium, "px){margin-bottom:0;margin-right:", k.spaces.small, ";}}"),
			nd = Object(y.default)(Na.RoomyGhostButton, {
				target: "e1753ktb6"
			})({
				name: "10ikx64",
				styles: "border-style:dashed"
			}),
			rd = Object(y.default)("div", {
				target: "e1753ktb5"
			})("align-items:center;display:flex;flex-direction:column;justify-content:center;@media (min-width: ", k.deviceScreenWidths.medium, "px){flex-direction:row;}"),
			ad = Object(y.default)("span", {
				target: "e1753ktb4"
			})("color:", k.grays.grays400, ";font-size:", k.fontSizes.small, ";font-weight:bold;margin-bottom:", k.spaces.small, ";"),
			od = Object(y.default)(Uo.ChameleonAnchor, {
				target: "e1753ktb3"
			})({
				name: "3xdkux",
				styles: "display:flex;&:hover{text-decoration:none;}"
			}),
			id = Object(y.default)("span", {
				target: "e1753ktb2"
			})("color:", k.utilityColors.heading, ";font-size:", k.fontSizes.large, ";text-align:center;"),
			sd = Object(y.default)("span", {
				target: "e1753ktb1"
			})("color:", k.utilityColors.tcomPrimary, ";font-style:italic;font-weight:bold;"),
			cd = Object(y.default)("section", {
				target: "e1753ktb0"
			})("align-items:center;background-color:", k.utilityColors.white, ";border:12px solid ", k.utilityColors.tcomPrimary, ";display:flex;flex-direction:column;justify-content:center;padding:", k.spaces.medium, ";@media (min-width: ", k.deviceScreenWidths.medium, "px){padding:", k.spaces.big, ";}"),
			ld = {
				mainColor: k.utilityColors.tcomPrimary,
				textColor: k.grays.gray600,
				fontSize: "24px",
				fontWeight: "normal"
			},
			ud = {
				href: "//" + Object(L.A)() + "/e/synonym-of-the-day/",
				dataLinkid: In.LINK_ID_SYNONYM_OF_THE_DAY.DEFLECTORS
			},
			dd = function(e) {
				var t = e.synonymOfTheDay,
					n = t.date,
					r = t.deflectors,
					a = t.word;
				return u.a.createElement(cd, {
					"data-testid": "synonym-of-the-day"
				}, u.a.createElement(ad, null, "SYNONYM OF THE DAY"), u.a.createElement(ad, null, n.toUpperCase()), u.a.createElement(Pa, {
					marginBottom: k.spaces.tiny
				}, u.a.createElement(od, {
					"data-linkid": In.LINK_ID_SYNONYM_OF_THE_DAY.SYNONYM,
					href: "//" + Object(L.A)() + "/e/synonym-of-the-day/"
				}, u.a.createElement(id, null, "Choose the synonym for", " ", u.a.createElement(sd, null, a)))), u.a.createElement(Pa, {
					marginBottom: k.spaces.small
				}, u.a.createElement(ed, null)), u.a.createElement(rd, null, r.map((function(e) {
					return u.a.createElement(td, {
						key: e
					}, u.a.createElement(nd, {
						options: ld,
						link: ud
					}, e))
				}))))
			};
		dd.propTypes = {
			synonymOfTheDay: Object(fr.shape)({
				date: fr.string,
				deflectors: Object(fr.arrayOf)(fr.string),
				word: fr.string
			}).isRequired
		};
		var pd = dd,
			md = Object(y.default)("div", {
				target: "e1l3hbp60"
			})("margin-bottom:", k.spaces.tiny, ";@media (min-width: ", k.deviceScreenWidths.medium, "px){margin-bottom:", k.spaces.medium, ";}"),
			hd = Object(y.default)(Uo.CallToActionAnchor, {
				target: "e16d6do20"
			})("background-color:", k.utilityColors.tcomPrimary, ";border-radius:", k.borderRadii.base, " ", k.borderRadii.base, " 0 0;color:", k.utilityColors.white, ";font-size:", k.fontSizes.small, ";padding:", k.spaces.tiny, ";position:fixed;right:0px;top:300px;transform:rotate(270deg);transform-origin:bottom right;z-index:100;@media (min-width: ", k.deviceScreenWidths.medium, "px){top:140px;}"),
			fd = "https://dictionary.typeform.com/to/eGal7BBQ",
			gd = function() {
				var e = Object(l.useState)(fd),
					t = e[0],
					n = e[1];
				return Object(l.useEffect)((function() {
					var e = yr.a.get("bid"),
						t = yr.a.get("sid");
					n(fd + "?bid=" + e + "&sid=" + t)
				}), []), u.a.createElement(hd, {
					decoration: !1,
					target: "_blank",
					href: t
				}, "FEEDBACK")
			},
			wd = Object(y.default)("div", {
				target: "e19r4lud0"
			})("background:#ffd866;display:inline-block;font-family:", k.fonts.main, ";font-size:14px;line-height:", (function(e) {
				return e.badgeHeight || 24
			}), "px;margin-bottom:", k.spaces.tiny, ";margin-left:", k.spaces.tiny, ";padding:0 ", k.spaces.tiny, ";position:relative;::before{border-bottom:", (function(e) {
				return(e.badgeHeight || 24) / 2
			}), "px solid #ffd866;border-left:", k.spaces.tiny, " solid transparent;border-top:", (function(e) {
				return(e.badgeHeight || 24) / 2
			}), "px solid #ffd866;content:'';left:-", k.spaces.tiny, ";position:absolute;top:0;}::after{border-bottom:", (function(e) {
				return(e.badgeHeight || 24) / 2
			}), "px solid #ffd866;border-right:", k.spaces.tiny, " solid transparent;border-top:", (function(e) {
				return(e.badgeHeight || 24) / 2
			}), "px solid #ffd866;content:'';position:absolute;right:-", k.spaces.tiny, ";top:0;}"),
			yd = Object(y.default)(Uo.ChameleonAnchor, {
				target: "e11u72g30"
			})("color:", k.utilityColors.heading, ";font-weight:bold;text-transform:uppercase;white-space:nowrap;:hover{cursor:pointer;text-decoration:none;}"),
			bd = function() {
				return "existential" !== Object(d.e)(at) ? null : u.a.createElement(wd, null, u.a.createElement(yd, {
					href: "https://www.dictionary.com/e/word-of-the-year/",
					"data-linkid": "lnc8a5",
					"data-ensure-webtrack": "true"
				}, "2019 Word of the Year"))
			},
			Ed = ps.MARGIN_BOTTOM,
			Od = ps.MINIMUM_ADS,
			vd = ps.STICKY_REGION,
			kd = [vr[1]].concat(kr),
			Sd = /[$&'(),-./:;=\\]/gm,
			_d = function(e) {
				var t = e.activePosTabIndex,
					n = e.antonyms,
					r = e.changeActivePosTab,
					a = e.dispatchRelatedWordsRequest,
					o = e.editorialRelatedContentData,
					i = e.editorsNotes,
					s = e.exampleSentences,
					c = e.headword,
					d = e.isFetchingRelatedWords,
					p = e.isMobile,
					m = e.ldId,
					h = e.pagination,
					f = e.posTabs,
					g = e.queryParams,
					w = e.region,
					y = e.relatedWords,
					b = void 0 === y ? [] : y,
					E = e.report,
					O = e.reportClickInner,
					v = e.searchThesaurus,
					k = e.slug,
					S = e.sotd,
					_ = e.synonyms,
					x = e.tracker,
					T = e.tunaPronounUsageNote,
					j = e.type,
					I = Object(l.useState)(null),
					A = I[0],
					P = I[1],
					C = Object(l.useState)(Od),
					D = C[0],
					N = C[1],
					R = Object(l.useRef)(null),
					U = function() {
						var e = Ed + vd,
							t = Rr(kd[0].ad_uuid) + e + (us({
								isMobile: p,
								region: w
							}) ? 250 : 0),
							n = R.current.clientHeight,
							r = kd.slice(2).reduce((function(t, r) {
								var a = Rr(r.ad_uuid) + e;
								return a + t.height > n ? t : {
									adCount: t.adCount + 1,
									height: t.height + a
								}
							}), {
								adCount: Od,
								height: t
							}).adCount;
						N(r)
					};
				Object(l.useEffect)((function() {
					U(), P(Date.now())
				}), []), Object(l.useEffect)((function() {
					d || (U(), P(Date.now()))
				}), [c]);
				var M = !!Wn(c),
					z = n && n.length || 0,
					F = p ? "tcom_serp_mweb_atf_300x250_2" : Or,
					q = 1 === h.page,
					W = "synonym" === c.toLowerCase(),
					G = function(e) {
						var t = e.type,
							n = e.slug,
							r = e.synonyms;
						return "as-in" !== t && !n.match(Sd) && r.length > 0
					}({
						type: j,
						slug: k,
						synonyms: _
					}),
					B = _ && _.length || 0,
					H = {
						antonyms: z > 0 && !M,
						editorsNotes: i.entries && i.entries.length,
						exampleCreator: G,
						exampleSentences: (null == s ? void 0 : s.length) > 0,
						relatedContent: (null == o ? void 0 : o.length) > 0,
						relatedWords: (null == b ? void 0 : b.length) > 0,
						synonyms: B > 0,
						pronounUsageNote: (null == T ? void 0 : T.length) > 0
					},
					Y = f.some((function(e) {
						return e.antonyms.length
					}));
				return u.a.createElement(u.a.Fragment, null, u.a.createElement(zo, {
					headword: c
				}), u.a.createElement(gd, null), u.a.createElement(ei, {
					marginTop: 0,
					marginBottom: 16,
					adId: p ? "tcom_serp_mweb_atf_320x50_1" : Er,
					isMobile: p
				}), u.a.createElement(Dl, {
					pageModules: H,
					reportClickInner: O
				}), u.a.createElement(ka, {
					className: "MainContentContainer"
				}, u.a.createElement(Sa, {
					ref: R
				}, u.a.createElement(as, {
					id: "headword"
				}, W && u.a.createElement(u.a.Fragment, null, u.a.createElement(ql, {
					report: E,
					searchThesaurus: v
				}), u.a.createElement("div", {
					"data-synonym-serp-ad": !0
				}, u.a.createElement(is, {
					adId: F,
					isMobile: p,
					position: "antonymsATF"
				}))), u.a.createElement(bd, null), u.a.createElement(Fi, {
					includeButtons: !0,
					headword: c,
					reportClickInner: O,
					slug: k,
					isAntonymsMVPword: M,
					queryParams: g,
					serpType: M ? "synonyms" : null
				}), !T && q && u.a.createElement(rs, {
					posTabs: f,
					activeTabIndex: t,
					onTabClick: function(e) {
						Object(L.I)() && Date.now() > A + 1e4 && Ur(on.a.BROWSE, {
							isMobile: p,
							posTabRefresh: !0,
							LD_ID: m
						}), r(e), O("POS"), P(Date.now())
					},
					headword: c,
					type: j,
					isMobile: p
				})), q && u.a.createElement(u.a.Fragment, null, T ? u.a.createElement(rl, {
					tunaPronounUsageNote: T
				}) : u.a.createElement(Jc, {
					anchorId: "meanings",
					isAntonymsMVPword: M && Y,
					searchThesaurus: v,
					showExampleCreator: G,
					synonyms: _,
					reportClickInner: O
				}), 0 === z && c && u.a.createElement(xa, {
					adjustTopPosition: p && _.length > 8
				}), W && u.a.createElement(u.a.Fragment, null, u.a.createElement(Hl, {
					reportClickInner: O
				}), u.a.createElement(zu, {
					searchThesaurus: v
				})), !W && u.a.createElement(os, {
					"data-non-synonym-serp-ad": !0
				}, u.a.createElement(is, {
					adId: F,
					isMobile: p,
					position: "antonymsATF"
				})), u.a.createElement(Xu, null), H.antonyms && u.a.createElement(u.a.Fragment, null, u.a.createElement(Ro, {
					antonyms: n,
					isAntonymsPage: !1,
					reportClickInner: O,
					searchThesaurus: v
				}), c && z > 0 && u.a.createElement(xa, null)), u.a.createElement(Lu, {
					reportClickInner: O,
					showExampleCreator: G,
					tracker: x
				}), H.editorsNotes && u.a.createElement(Uc, {
					editorsNotes: i
				}), u.a.createElement(lc, null), H.relatedContent && u.a.createElement(ml, {
					content: o,
					sourceWord: c,
					reportClickInner: O
				})), H.exampleSentences && u.a.createElement(ic, {
					exampleSentences: s,
					headword: c,
					reportClickInner: O
				}), S && u.a.createElement(md, null, u.a.createElement(pd, {
					synonymOfTheDay: S
				})), u.a.createElement(jc, {
					relatedWords: b.slice(0, Ie(h.page).limit),
					lazyLoadedRelatedWords: b.slice(Ie(h.page).limit),
					itemClickHandler: function(e) {
						return v({
							term: e.trim()
						})
					}
				}), h.count > 0 && u.a.createElement(xa, {
					word: c
				}), u.a.createElement(yc, {
					totalPages: Ae(h.count),
					activePage: h.page,
					slug: k,
					onChange: function(e, t) {
						a({
							term: e,
							page: t
						})
					},
					showFewerPageLinks: p
				}), u.a.createElement(Ol, {
					reportClickInner: O
				})), p ? u.a.createElement(ei, {
					adId: "tcom_serp_mweb_btf_300x250_4",
					lazyLoad: !0,
					deferredThreshold: 200
				}) : u.a.createElement(fs, {
					railAds: kd.slice(0, D)
				})))
			};
		_d.propTypes = {
			exampleSentences: oc
		}, _d.defaultProps = {
			exampleSentences: []
		};
		var xd = _d;

		function Td(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}
		var jd = function(e) {
			return e.headword ? u.a.createElement(xd, e) : null
		};
		jd.loadData = function(e) {
			var t = e.store,
				n = e.match,
				r = e.queryParams,
				a = n.params,
				o = a.slug,
				i = a.page,
				s = decodeURIComponent(o),
				c = [t.dispatch(ge(s)), t.dispatch(Ke({
					term: o,
					page: i,
					queryParams: r,
					url: n.url
				})), t.dispatch(Ps()), t.dispatch(ks()), t.dispatch(js())];
			return Promise.all(c)
		};
		var Id = Object(d.c)((function(e) {
			return {
				synonyms: lt(e),
				antonyms: ut(e),
				tunaPronounUsageNote: Ct(e),
				definition: pt(e),
				posTabs: rt(e),
				type: Pt(e),
				headword: at(e),
				exampleSentences: ot(e),
				slug: mt(e),
				isFetchingRelatedWords: Nt(e),
				queryParams: Lt(e),
				relatedWords: dt(e),
				pagination: gt(e),
				activePosTabIndex: ct(e),
				editorsNotes: Mt(e),
				editorialRelatedContentData: _t(e),
				isMobile: Ot(e),
				sotd: Yt(e)
			}
		}), (function(e) {
			return function(e) {
				for(var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? Td(Object(n), !0).forEach((function(t) {
						c()(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Td(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}({}, Object(v.bindActionCreators)({
				dispatchSearch: Ke,
				dispatchRelatedWordsRequest: Me,
				dispatchWotdDataRequest: Ps,
				changeActivePosTab: va
			}, e))
		}))(jd);
		var Ad = Object(y.default)(Ia, {
				target: "em255g50"
			})({
				name: "wt3lag",
				styles: "margin:20px 0"
			}),
			Pd = [vr[1]],
			Cd = function(e) {
				var t = e.adBottom,
					n = void 0 === t ? "" : t,
					r = e.adTop,
					a = void 0 === r ? "" : r,
					o = e.children,
					i = Object(d.e)(St),
					s = Object(d.e)(Ot);
				return u.a.createElement(u.a.Fragment, null, u.a.createElement(ei, {
					adId: a,
					isMobile: s
				}), u.a.createElement(ka, {
					className: "MainContentContainer"
				}, u.a.createElement(Sa, null, o, u.a.createElement(Xu, null), i.length > 0 && u.a.createElement(Ad, {
					className: Hr.EDITORIAL_CONTAINER_CLASSNAME,
					"data-testid": "editorial-container"
				}, u.a.createElement(gl.EditorialBlock, {
					editorialData: i,
					titleLinkId: In.LINKID_EDCONTENT_TITLE,
					titleHoverColor: k.utilityColors.dcomPrimary,
					sectionTitle: Hr.EDITORIAL_SECTION_TITLES.MISSPELLS_NO_RESULTS_EDITORIAL_FEED,
					colCountDesktop: 2,
					colCountMobile: 1,
					lazyLoad: !0,
					lazyLoadClassName: Hr.LAZY_LOAD_CLASSNAME
				}))), !s && u.a.createElement(fs, {
					railAds: Pd
				})), u.a.createElement(ei, {
					adId: n,
					isMobile: s
				}))
			};
		Cd.propTypes = {
			adTop: fr.string.isRequired,
			adBottom: fr.string.isRequired
		};
		var Dd = Cd;
		var Nd = Object(y.default)("h1", {
				target: "e1wla5066"
			})("color:", k.grays.gray500, ";font-size:", k.fontSizes.regular, ";margin:0;"),
			Ld = Object(y.default)("span", {
				target: "e1wla5065"
			})("color:", k.grays.gray600, ";font-size:24px;"),
			Rd = Object(y.default)("hr", {
				target: "e1wla5064"
			})("background-color:", k.grays.gray200, ";border-width:0;height:2px;width:100%;"),
			Ud = Object(y.default)("span", {
				target: "e1wla5063"
			})("color:", k.grays.gray600, ";font-size:", k.fontSizes.regular, ";"),
			Md = Object(y.default)("div", {
				target: "e1wla5062"
			})({
				name: "5kov97",
				styles: "display:flex;flex-wrap:wrap"
			}),
			zd = Object(y.default)("div", {
				target: "e1wla5061"
			})("margin-right:", k.spaces.tiny, ";"),
			Fd = Object(y.default)(ja, {
				target: "e1wla5060"
			})("margin-bottom:", k.spaces.medium, ";padding-bottom:", k.spaces.small, ";@media (min-width: ", k.deviceScreenWidths.medium, "px){padding-bottom:28px;}"),
			qd = function(e) {
				var t = e.itemClickHandler,
					n = e.term,
					r = Object(d.e)(Tt),
					a = Object(d.e)(jt),
					o = function(e, n) {
						return e.preventDefault(), t(n)
					};
				return u.a.createElement(Fd, {
					className: "spell-suggestions"
				}, u.a.createElement(Pa, {
					marginBottom: r ? k.spaces.tiny : k.spaces.small
				}, u.a.createElement(Nd, null, "0 results for ", u.a.createElement("b", null, n))), r && u.a.createElement(Pa, {
					marginBottom: k.spaces.small
				}, u.a.createElement(Ld, null, "did you mean:", " ", u.a.createElement(Na.CompactSolidButton, {
					link: {
						dataLinkid: In.LINKID_MISSPELL_FIRST,
						href: "/browse/" + r.slug
					},
					onClick: function(e) {
						return o(e, r.slug)
					},
					options: {
						mainColor: k.utilityColors.tcomPrimary
					}
				}, r.term))), a && u.a.createElement(u.a.Fragment, null, u.a.createElement(Pa, {
					marginBottom: k.spaces.small
				}, u.a.createElement(Rd, null)), u.a.createElement(Pa, {
					marginBottom: k.spaces.regular
				}, u.a.createElement(Ud, null, "More Suggestions")), u.a.createElement(Md, null, a.map((function(e) {
					return u.a.createElement(zd, {
						key: e.term
					}, u.a.createElement(Pa, {
						marginBottom: k.spaces.small
					}, u.a.createElement(Na.CompactSolidButton, {
						link: {
							dataLinkid: In.LINKID_MISSPELL_OTHER,
							href: "/browse/" + e.slug
						},
						onClick: function(t) {
							return o(t, e.slug)
						},
						options: {
							mainColor: k.utilityColors.tcomPrimary
						}
					}, e.term)))
				})))))
			};
		qd.propTypes = {
			term: fr.string.isRequired,
			itemClickHandler: fr.func
		}, qd.defaultProps = {
			itemClickHandler: null
		};
		var Wd = qd,
			Gd = function(e) {
				var t = e.location,
					n = gn(t),
					r = Object(d.e)(Ot);
				return u.a.createElement(Dd, {
					adBottom: r ? "dmwMisspellThesBottom" : "thesaurus_serp_728x90_p6",
					adTop: r ? "dmwMisspellThesTop" : "thesaurus_serp_atf_728x90"
				}, u.a.createElement(Wd, {
					itemClickHandler: null,
					term: n
				}))
			};
		Gd.loadData = function(e) {
			var t = e.store,
				n = e.urlObject,
				r = e.queryParams,
				a = [t.dispatch(Ke({
					term: gn(n),
					queryParams: r
				}))];
			return Promise.all(a)
		};
		var Bd = Object(O.e)(Gd),
			Hd = function(e) {
				var t = e.location,
					n = e.searchThesaurus,
					r = Object(d.e)(Ot),
					a = gn(t);
				return u.a.createElement(Dd, {
					adBottom: r ? "dmwMisspellThesBottom" : "thesaurus_serp_728x90_p6",
					adTop: r ? "dmwMisspellThesTop" : "thesaurus_serp_atf_728x90"
				}, u.a.createElement(Wd, {
					itemClickHandler: function(e) {
						return n({
							term: e.trim()
						})
					},
					term: a
				}))
			};
		Hd.loadData = function(e) {
			var t = e.store,
				n = e.urlObject,
				r = e.queryParams,
				a = [t.dispatch(Ke({
					term: gn(n),
					queryParams: r
				}))];
			return Promise.all(a)
		};
		var Yd = Object(O.e)(Hd),
			Kd = function(e, t) {
				return e && e.isMobile ? t >= 0 && t < 20 ? 36 : t >= 20 && t < 30 ? 24 : t >= 30 && t < 35 ? 20 : 18 : t >= 0 && t < 20 ? 49 : t >= 20 && t < 30 ? 29 : 22
			};
		var Vd = Object(y.default)("hr", {
				target: "epesi0b15"
			})("border-bottom:1px solid ", k.grays.gray200, ";border-top:0;margin-bottom:20px;"),
			Zd = Object(y.default)("div", {
				target: "epesi0b14"
			})({
				name: "wt3lag",
				styles: "margin:20px 0"
			}),
			Qd = Object(y.default)("sup", {
				target: "epesi0b13"
			})({
				name: "h8pib5",
				styles: "margin-left:-6px;margin-right:6px;top:6px;vertical-align:top"
			}),
			$d = Object(y.default)("div", {
				target: "epesi0b12"
			})("color:", k.grays.gray600, ";display:inline-block;margin-right:10px;"),
			Xd = Object(y.default)("h1", {
				target: "epesi0b11"
			})("display:inline;font-size:", Kd({
				isMobile: !1
			}, 3), "px;font-weight:bold;line-height:normal;", "\n  .subscript {\n    vertical-align: sub;\n    font-size: 0.7em;\n  }\n", ";margin:0 10px 10px 0;word-break:break-word;@media (max-width: ", k.deviceScreenWidths.medium, "px){font-size:", Kd({
				isMobile: !0
			}, 3), "px;margin:0 10px 10px 0;}"),
			Jd = Object(y.default)("div", {
				target: "epesi0b10"
			})("color:", k.utilityColors.baseFont, ";display:inline-block;font-size:20px;vertical-align:super;@media (max-width: ", k.deviceScreenWidths.medium, "px){font-size:18px;}"),
			ep = Object(y.default)("h3", {
				target: "epesi0b9"
			})("color:", k.utilityColors.baseFont, ";margin:25px 0 0 0;@media (max-width: ", k.deviceScreenWidths.medium, "px){margin-bottom:2px;}"),
			tp = Object(y.default)("h3", {
				target: "epesi0b8"
			})("color:", k.utilityColors.baseFont, ";font-size:16px;font-weight:normal;margin:0 0 ", k.spaces.tiny, " 0;text-transform:uppercase;"),
			np = Object(y.default)("span", {
				target: "epesi0b7"
			})("color:", k.grays.gray600, ";display:inline;font-size:18px;font-weight:normal;"),
			rp = Object(y.default)("div", {
				target: "epesi0b6"
			})("font-size:15px;margin-bottom:", k.spaces.mini, ";margin-left:20px;padding-left:25px;position:relative;::before{color:", k.grays.gray400, ";content:'1';font-size:14px;height:32px;left:0;line-height:26px;position:absolute;top:-5px;}"),
			ap = Object(y.default)("div", {
				target: "epesi0b5"
			})("display:flex;flex-direction:row;margin:20px 0;>*{flex:6 0;margin:0;}>*:not(:first-child){flex:4;margin-left:20px;}@media (max-width: ", k.deviceScreenWidths.large, "px){flex-direction:column;>*:not(:first-child){margin-left:0;margin-top:20px;}}"),
			op = Object(y.default)("div", {
				target: "epesi0b4"
			})({
				name: "1kva0eo",
				styles: "font-size:16px;padding-top:5px"
			}),
			ip = Object(y.default)("a", {
				target: "epesi0b3"
			})("color:", k.utilityColors.dcomPrimary, ";font-size:16px;margin:5px 0 10px;text-decoration:none;&:hover{cursor:pointer;text-decoration:underline;}"),
			sp = Object(y.default)("div", {
				target: "epesi0b2"
			})({
				name: "157sdy5",
				styles: "margin-top:26px"
			}),
			cp = Object(y.default)("div", {
				target: "epesi0b1"
			})("background-color:", k.utilityColors.error, ";border-radius:50%;color:", k.utilityColors.white, ";display:inline-block;font-weight:bold;height:20px;line-height:20px;text-align:center;width:20px;"),
			lp = Object(y.default)("span", {
				target: "epesi0b0"
			})("color:", k.utilityColors.error, ";font-weight:bold;margin-left:", k.spaces.tiny, ";"),
			up = function(e) {
				var t = e.itemClickHandler;
				return u.a.createElement(u.a.Fragment, null, u.a.createElement(sp, null, u.a.createElement(cp, null, "!"), u.a.createElement(lp, null, "Uh oh, looks like something went wrong.")), u.a.createElement(Zd, null, u.a.createElement(Ia, null, u.a.createElement($d, null, u.a.createElement(Xd, null, "404"), u.a.createElement(Qd, null, "1"), u.a.createElement(Jd, null, "[ fohr-oh-fohr ]")), u.a.createElement(Vd, null), u.a.createElement("section", null, u.a.createElement(ep, null, "noun"), u.a.createElement(np, null, u.a.createElement(ap, null, u.a.createElement(rp, null, "An embarrassing error for which we are incredibly sorry.")))))), u.a.createElement(Ia, null, u.a.createElement(tp, null, "Related Words"), u.a.createElement(op, null, u.a.createElement(ip, {
					onClick: function() {
						return t("blunder")
					}
				}, "blunder"), ", ", u.a.createElement(ip, {
					onClick: function() {
						return t("mistake")
					}
				}, "mistake"), ", ", u.a.createElement(ip, {
					onClick: function() {
						return t("slipup")
					}
				}, "slipup"))))
			};
		up.propTypes = {
			itemClickHandler: gr.a.func.isRequired
		};
		var dp = up;
		var pp = [vr[1]],
			mp = Object(y.default)(Ia, {
				target: "ez0jk790"
			})({
				name: "wt3lag",
				styles: "margin:20px 0"
			}),
			hp = function(e) {
				var t = e.children,
					n = e.searchThesaurus,
					r = Object(d.e)(St),
					a = Object(d.e)(Ot);
				return u.a.createElement(ka, {
					className: "MainContentContainer"
				}, u.a.createElement(Sa, null, u.a.createElement(as, null, u.a.createElement(dp, {
					itemClickHandler: function(e) {
						return n({
							term: e.trim()
						})
					}
				})), t, !P()(r) && u.a.createElement(mp, {
					className: Hr.EDITORIAL_CONTAINER_CLASSNAME
				}, u.a.createElement(gl.EditorialBlock, {
					editorialData: r,
					titleLinkId: In.LINKID_EDCONTENT_TITLE,
					titleHoverColor: k.utilityColors.dcomPrimary,
					sectionTitle: Hr.EDITORIAL_SECTION_TITLES.MISSPELLS_NO_RESULTS_EDITORIAL_FEED,
					colCountDesktop: 2,
					colCountMobile: 1,
					lazyLoad: !0,
					lazyLoadClassName: Hr.LAZY_LOAD_CLASSNAME
				}))), !a && u.a.createElement(fs, {
					railAds: pp
				}))
			},
			fp = function(e) {
				return u.a.createElement(hp, e)
			};
		fp.loadData = function(e) {
			var t = [e.store.dispatch(Ps())];
			return Promise.all(t)
		};
		var gp = fp,
			wp = n(97),
			yp = n.n(wp),
			bp = [{
				component: Oa,
				exact: !1,
				routes: [{
					path: yp.a.antonyms,
					exact: !0,
					component: Es
				}, {
					path: yp.a.browsepaginated,
					exact: !0,
					component: Id
				}, {
					path: yp.a.browse,
					exact: !0,
					component: Id
				}, {
					path: yp.a.noresult,
					exact: !0,
					component: Bd
				}, {
					path: yp.a.misspelling,
					exact: !0,
					component: Yd
				}, {
					component: gp
				}]
			}];

		function Ep(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}
		var Op = function(e, t, n) {
				return u.a.createElement(d.a, {
					store: e
				}, u.a.createElement(p.a, {
					history: t
				}, u.a.createElement("div", null, Object(m.b)(bp, function(e) {
					for(var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? Ep(Object(n), !0).forEach((function(t) {
							c()(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ep(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}({}, n)))))
			},
			vp = n(242),
			kp = n(271),
			Sp = n(272),
			_p = n(59);

		function xp(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Tp(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? xp(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xp(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var jp = {
				isFetching: !1,
				data: {
					menu: []
				}
			},
			Ip = function(e, t) {
				void 0 === e && (e = jp);
				var n = t.type,
					r = t.payload;
				switch(n) {
					case B.REQUEST:
						return Tp(Tp({}, e), {}, {
							isFetching: !0
						});
					case B.SUCCESS:
						return Tp(Tp({}, e), {}, {
							isFetching: !1,
							data: r
						});
					case B.FAILURE:
						return Tp(Tp({}, e), {}, {
							isFetching: !1,
							data: {}
						});
					default:
						return e
				}
			};

		function Ap(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Pp(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Ap(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ap(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var Cp = {
				isMobile: !1,
				isTablet: !1
			},
			Dp = function(e, t) {
				switch(void 0 === e && (e = Cp), t.type) {
					case z.UPDATE_DETECTED_DEVICE:
						return Pp(Pp({}, e), {}, {
							isMobile: t.isMobile,
							isTablet: t.isTablet
						});
					default:
						return e
				}
			};

		function Np(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Lp(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Np(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Np(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var Rp = {
				region: null
			},
			Up = function(e, t) {
				switch(void 0 === e && (e = Rp), t.type) {
					case z.UPDATE_DETECTED_REGION:
						return Lp(Lp({}, e), {}, {
							region: t.region
						});
					default:
						return e
				}
			};

		function Mp(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function zp(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Mp(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mp(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var Fp = function(e, t) {
			void 0 === e && (e = {
				isFetching: !1
			});
			var n = t.payload;
			switch(t.type) {
				case H.REQUEST:
					return zp(zp({}, e), {}, {
						isFetching: !0
					});
				case H.SUCCESS:
					return zp(zp({}, e), {}, {
						isFetching: !1,
						data: Dn(n)
					});
				case H.FAILURE:
					return zp(zp({}, e), {}, {
						isFetching: !1,
						data: {}
					});
				default:
					return e
			}
		};

		function qp(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Wp(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? qp(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qp(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var Gp = {
				data: {}
			},
			Bp = function(e, t) {
				void 0 === e && (e = Gp);
				var n = t.payload;
				switch(t.type) {
					case Y.SUCCESS:
						return Wp(Wp({}, e), {}, {
							data: n
						});
					case Y.FAILURE:
						return Wp(Wp({}, e), {}, {
							data: {}
						});
					default:
						return e
				}
			};

		function Hp(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Yp(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Hp(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Hp(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var Kp = function(e, t) {
			void 0 === e && (e = {
				data: {},
				isFetching: !1
			});
			var n = t.payload;
			switch(t.type) {
				case Z.REQUEST:
					return Yp(Yp({}, e), {}, {
						isFetching: !0
					});
				case Z.SUCCESS:
					return Yp(Yp({}, e), {}, {
						isFetching: !1,
						data: xn(n)
					});
				case Z.FAILURE:
					return Yp(Yp({}, e), {}, {
						isFetching: !1
					});
				default:
					return e
			}
		};

		function Vp(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Zp(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Vp(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vp(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var Qp = function(e, t) {
			switch(void 0 === e && (e = {}), t.type) {
				case z.UPDATE_IS_EU:
					return Zp(Zp({}, e), {}, {
						isEU: t.isEU
					});
				default:
					return e
			}
		};

		function $p(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Xp(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? $p(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $p(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var Jp = {
				isFetching: !1
			},
			em = function(e, t) {
				void 0 === e && (e = Jp);
				var n = t.payload;
				switch(t.type) {
					case K.REQUEST:
						return Xp(Xp({}, e), {}, {
							isFetching: !0
						});
					case K.SUCCESS:
						var r = Ln(n);
						return Xp(Xp({}, e), {}, {
							isFetching: !1,
							data: r
						});
					case K.FAILURE:
						return Xp(Xp({}, e), {}, {
							isFetching: !1,
							data: {}
						});
					default:
						return e
				}
			};

		function tm(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function nm(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? tm(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tm(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var rm = function(e, t, n) {
				return t[n] || e
			},
			am = function(e, t, n) {
				var r = function(e) {
						var t = Ee()(e, "data", null);
						return t ? kn(t) : []
					}(e).map((function(e) {
						return e.pos
					})),
					a = rm("", r, 0),
					o = rm(a, n, t);
				return {
					activeIndex: function(e, t) {
						var n = e.findIndex((function(e) {
							return e === t
						}));
						return -1 === n && (n = 0), n
					}(r, o),
					activePos: o,
					posArray: r
				}
			},
			om = function(e, t) {
				switch(void 0 === e && (e = {
					activeIndex: 0,
					lastActivePOS: "",
					lastPosArray: []
				}), t.type) {
					case z.CHANGE_ACTIVE_POS_TAB:
						return nm(nm({}, e), {}, {
							activeIndex: t.activePosTabIndex,
							lastActivePOS: rm("", e.lastPosArray, t.activePosTabIndex),
							lastPosArray: e.lastPosArray
						});
					case z.API_TUNA_SUCCESS:
						var n = am(t.payload, e.activeIndex, e.lastPosArray),
							r = n.activeIndex,
							a = n.activePos,
							o = n.posArray;
						return nm(nm({}, e), {}, {
							activeIndex: r,
							lastActivePOS: a,
							lastPosArray: o
						});
					default:
						return e
				}
			};

		function im(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function sm(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? im(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : im(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var cm = function(e, t) {
			void 0 === e && (e = {
				isFetching: !1,
				data: {}
			});
			var n = t.payload;
			switch(t.type) {
				case $.REQUEST:
					return sm(sm({}, e), {}, {
						isFetching: !0
					});
				case $.SUCCESS:
					var r = Nn(n);
					return sm(sm({}, e), {}, {
						isFetching: !1,
						data: r
					});
				case $.FAILURE:
					return sm(sm({}, e), {}, {
						isFetching: !1
					});
				default:
					return e
			}
		};

		function lm(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function um(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? lm(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lm(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var dm = {
				data: null
			},
			pm = function(e, t) {
				void 0 === e && (e = dm);
				var n = t.payload;
				switch(t.type) {
					case Q.SUCCESS:
						return um(um({}, e), {}, {
							data: n
						});
					default:
						return e
				}
			};

		function mm(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function hm(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? mm(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mm(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var fm = {
				hasFetched: !1,
				isSignedIn: function() {
					try {
						return /CognitoIdentityServiceProvider[^;]*idToken/.test(document.cookie)
					} catch(e) {
						return !1
					}
				}(),
				userInfo: null
			},
			gm = function(e, t) {
				void 0 === e && (e = fm);
				var n = t.payload;
				switch(t.type) {
					case G.REQUEST:
						return hm({}, e);
					case G.SUCCESS:
						var r = n.isSignedIn,
							a = n.userInfo;
						return hm(hm({}, e), {}, {
							hasFetched: !0,
							isSignedIn: r,
							userInfo: a
						});
					case G.FAILURE:
						return hm(hm({}, e), {}, {
							hasFetched: !0
						});
					default:
						return e
				}
			};

		function wm(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function ym(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? wm(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wm(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var bm = function(e, t) {
			switch(void 0 === e && (e = {}), t.type) {
				case z.UPDATE_LDID:
					return ym(ym({}, e), {}, {
						ldIdData: t.ldId
					});
				default:
					return e
			}
		};

		function Em(e, t) {
			var n = Object.keys(e);
			if(Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Om(e) {
			for(var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Em(Object(n), !0).forEach((function(t) {
					c()(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Em(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}
		var vm = {
				isFetching: !1
			},
			km = function(e, t) {
				void 0 === e && (e = vm);
				var n = t.payload;
				switch(t.type) {
					case V.REQUEST:
						return Om(Om({}, e), {}, {
							isFetching: !0
						});
					case V.SUCCESS:
						return Om(Om({}, e), {}, {
							isFetching: !1,
							data: n
						});
					case V.FAILURE:
						return Om(Om({}, e), {}, {
							isFetching: !1,
							data: {}
						});
					default:
						return e
				}
			},
			Sm = function(e) {
				return Object(v.combineReducers)({
					categoryListData: Ip,
					detectedDevice: Dp,
					detectedRegion: Up,
					editorialData: Fp,
					editorsNotes: Bp,
					editorialRelatedContent: Kp,
					router: Object(p.b)(e),
					localization: Qp,
					marketingBanner: em,
					posTabs: om,
					searchData: Hn,
					sotdData: pm,
					wotdData: cm,
					authState: gm,
					abTest: bm,
					quizList: km
				})
			};
		i.a.polyfill();
		var _m = window.INITIAL_STATE || {};
		delete window.INITIAL_STATE;
		var xm, Tm, jm;
		xm = function(e, t, n) {
			var r;
			void 0 === e && (e = {}), r = t ? Object(_p.c)({
				initialEntries: [n]
			}) : Object(_p.a)();
			var a = Object(vp.a)(r),
				o = Object(kp.composeWithDevTools)(Object(v.applyMiddleware)(a, Sp.a)),
				i = Object(v.createStore)(Sm(r), e, o);
			return Object(L.F)(), {
				history: r,
				store: i
			}
		}(_m), Tm = xm.history, jm = xm.store, a.a.hydrate(Op(jm, Tm, {}), document.getElementById("root"))
	},
	7: function(e, t, n) {
		"use strict";
		(function(e) {
			n.d(t, "a", (function() {
				return U
			})), n.d(t, "B", (function() {
				return w
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "A", (function() {
				return f
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "r", (function() {
				return c
			})), n.d(t, "v", (function() {
				return l
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "x", (function() {
				return v
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "D", (function() {
				return h
			})), n.d(t, "y", (function() {
				return u
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "I", (function() {
				return x
			})), n.d(t, "F", (function() {
				return z
			})), n.d(t, "H", (function() {
				return F
			})), n.d(t, "G", (function() {
				return q
			})), n.d(t, "E", (function() {
				return a
			})), n.d(t, "C", (function() {
				return b
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "s", (function() {
				return S
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "n", (function() {
				return T
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "z", (function() {
				return N
			})), n.d(t, "o", (function() {
				return L
			})), n.d(t, "u", (function() {
				return R
			})), n.d(t, "w", (function() {
				return M
			}));
			var r, a = e.browser,
				o = function(e) {
					return e && e.replace(/\/$/, "")
				},
				i = function() {
					return a ? window.ENV_VARS : (r || (console.warn("envVars not found in the server! If you are running tests, this is fine."), r = {}), r)
				},
				s = function(e) {
					return i()[e]
				},
				c = function() {
					return o(s("TUNA_API_ENDPOINT")) + "/pageData"
				},
				l = function() {
					return o(s("TUNA_API_ENDPOINT")) + "/relatedWords"
				},
				u = function() {
					return o(s("SPELL_SUGGESTIONS_API_ENDPOINT"))
				},
				d = function() {
					return s("EDITOR_NOTES_API_ENDPOINT")
				},
				p = function() {
					return o(s("PARSELY_EXPLORE_API_ENDPOINT"))
				},
				m = function() {
					return o(s("PARSELY_SUGGESTIONS_API_ENDPOINT"))
				},
				h = function() {
					return o(s("WOTD_API_ENDPOINT"))
				},
				f = function() {
					return s("TCOM_URL")
				},
				g = function() {
					return s("DCOM_URL")
				},
				w = function() {
					return s("WRITING_TOOL_API_ENDPOINT")
				},
				y = function() {
					return s("CATEGORY_LIST_API_ENDPOINT")
				},
				b = function() {
					return s("TRACKING_URL")
				},
				E = function() {
					return s("DICTIONARY_SPANID_URL")
				},
				O = function() {
					return s("CLIENT_LOGGING_LEVEL")
				},
				v = function() {
					return s("SERVER_LOGGING_LEVEL")
				},
				k = function() {
					return s("PUBLIC_ASSETS_URL")
				},
				S = function() {
					return s("PROTOCOL")
				},
				_ = function() {
					return "true" === s("ALLOW_DISABLED_ADS")
				},
				x = function() {
					return "false" !== s("REFRESH_ADS_ON_POS_TAB_CLICK")
				},
				T = function() {
					return s("ENABLE_AUTO_SUGGEST")
				},
				j = function() {
					return s("API_LISTAZ_ENDPOINT")
				},
				I = function() {
					return s("API_MARKETING_BANNER_ENDPOINT")
				},
				A = function() {
					return s("COGNITO_CLIENT_ID")
				},
				P = function() {
					return s("COGNITO_USER_POOL_ID")
				},
				C = function() {
					return s("AUTH_COOKIE_DOMAIN")
				},
				D = function() {
					return "1" === s("AUTH_COOKIE_USE_SECURE")
				},
				N = function() {
					return s("TCOM_AUTH_URL")
				},
				L = function() {
					return s("GRAPHQL_URI")
				},
				R = function() {
					return s("QUIZ_LIST_API_ENDPOINT")
				},
				U = function() {
					return s("AD_SCROLL_SPEED_LIMIT")
				},
				M = function() {
					return s("SOTD_API_ENDPOINT")
				},
				z = function() {
					return s("dev") || !1
				},
				F = function() {
					return s("test") || !1
				},
				q = function() {
					return s("prod") || !1
				}
		}).call(this, n(122))
	},
	97: function(e, t, n) {
		var r = n(15),
			a = {
				antonyms: "/" + r.ANTONYMS + "/:slug+",
				browse: "/" + r.BROWSE + "/:slug+",
				browsepaginated: "/" + r.BROWSE + "/:slug+/:page(\\d+)",
				noresult: "/" + r.NO_RESULT,
				misspelling: "/" + r.MISSPELLING,
				Four0Four: "/" + r.FOUR0FOUR + "/"
			};
		e.exports = a
	}
});
//# sourceMappingURL=client-bfd247be.js.map
