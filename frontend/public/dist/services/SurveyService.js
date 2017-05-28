define(['exports'],function(exports){'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var SurveyService=exports.SurveyService=function(){function SurveyService(){_classCallCheck(this,SurveyService)}_createClass(SurveyService,null,[{key:'getSurvey',/**
   * @return {Promise}
   */value:function getSurvey(){return fetch('/api/v1/survey').then(checkStatus).then(function(data){return data.json()})}/**
   * @param  {Object} replies
   * @return {Promise}
   */},{key:'sendReplies',value:function sendReplies(replies){return fetch('/api/v1/survey/reply',{headers:{'Accept':'application/json','Content-Type':'application/json'},method:'POST',body:JSON.stringify({data:replies})}).then(checkStatus).then(function(data){return data.json()})}}]);return SurveyService}();/**
 * @param {Object} response
 *
 * @return {Object}
 */function checkStatus(response){if(response.status>=200&&response.status<300){return response}else{var error=new Error(response.statusText);error.response=response;throw error}}});