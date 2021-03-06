// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-c2e5-770e6219d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-01.azure-dns.com.\",\"ns2-01.azure-dns.net.\",\"ns3-01.azure-dns.org.\",\"ns4-01.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-c2e5-770e6219d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '82f5dd9e-550d-4acf-a03f-79d4844914e9',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '67a00f52-4a09-4433-b6ee-d2a8d75d8c85',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082724Z:67a00f52-4a09-4433-b6ee-d2a8d75d8c85',
  date: 'Wed, 28 Sep 2016 08:27:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-c2e5-770e6219d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-01.azure-dns.com.\",\"ns2-01.azure-dns.net.\",\"ns3-01.azure-dns.org.\",\"ns4-01.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '508',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-c2e5-770e6219d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '82f5dd9e-550d-4acf-a03f-79d4844914e9',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '67a00f52-4a09-4433-b6ee-d2a8d75d8c85',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082724Z:67a00f52-4a09-4433-b6ee-d2a8d75d8c85',
  date: 'Wed, 28 Sep 2016 08:27:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/CNAME/set-cname?api-version=2016-04-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-cname' does not exist in resource group 'xplat-test-dns-zone-record-set9100' of subscription '2c224e7e-3ef5-431d-a57b-e71f4662e3a6'.\"}", { 'cache-control': 'private',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'a0f36e5b-2e25-4308-923b-cadd66e895b6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '11154c56-451a-40d0-aba0-164d344ed778',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082725Z:11154c56-451a-40d0-aba0-164d344ed778',
  date: 'Wed, 28 Sep 2016 08:27:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/CNAME/set-cname?api-version=2016-04-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-cname' does not exist in resource group 'xplat-test-dns-zone-record-set9100' of subscription '2c224e7e-3ef5-431d-a57b-e71f4662e3a6'.\"}", { 'cache-control': 'private',
  'content-length': '189',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'a0f36e5b-2e25-4308-923b-cadd66e895b6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '11154c56-451a-40d0-aba0-164d344ed778',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082725Z:11154c56-451a-40d0-aba0-164d344ed778',
  date: 'Wed, 28 Sep 2016 08:27:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/CNAME/set-cname?api-version=2016-04-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"49397455-d8dd-4f9b-b893-383792427fd9\",\"properties\":{\"fqdn\":\"set-cname.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"testcname\"}}}", { 'cache-control': 'private',
  'content-length': '390',
  'content-type': 'application/json; charset=utf-8',
  etag: '49397455-d8dd-4f9b-b893-383792427fd9',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '761bcac3-6071-4409-8f95-d3c2f8902426',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '7a169df3-add6-4251-b96a-43bcebfde3af',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082726Z:7a169df3-add6-4251-b96a-43bcebfde3af',
  date: 'Wed, 28 Sep 2016 08:27:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone-record-set9100/providers/Microsoft.Network/dnszones/example1.com/CNAME/set-cname?api-version=2016-04-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone-record-set9100\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/set-cname\",\"name\":\"set-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"49397455-d8dd-4f9b-b893-383792427fd9\",\"properties\":{\"fqdn\":\"set-cname.example1.com.\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"testcname\"}}}", { 'cache-control': 'private',
  'content-length': '390',
  'content-type': 'application/json; charset=utf-8',
  etag: '49397455-d8dd-4f9b-b893-383792427fd9',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '761bcac3-6071-4409-8f95-d3c2f8902426',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11998',
  'x-ms-correlation-request-id': '7a169df3-add6-4251-b96a-43bcebfde3af',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082726Z:7a169df3-add6-4251-b96a-43bcebfde3af',
  date: 'Wed, 28 Sep 2016 08:27:26 GMT',
  connection: 'close' });
 return result; }]];