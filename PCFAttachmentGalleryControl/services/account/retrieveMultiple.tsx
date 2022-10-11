const searchQuery = (id: string) => {
  let fetchXml = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false" >
  <entity name="annotation" >
      <attribute name="documentbody" />
      <attribute name="mimetype" />
      <attribute name="notetext" />
      <attribute name="subject" />
      <attribute name="filename" />
      <attribute name="annotationid" />
      <order attribute="filename" descending="false" />
      <filter type="and" >
          <filter type="and" >
              <condition attribute="isdocument" operator="eq" value="1" />
              <filter type="or" >
                  <condition attribute="mimetype" operator="like" value="application/pdf%" />
                  <condition attribute="mimetype" operator="like" value="image/%" />
              </filter>
          </filter>
      </filter>
      <link-entity name="account" from="accountid" to="objectid" link-type="inner" alias="aa" >
          <filter type="and" >
              <condition attribute="accountid" operator="eq" uiname="Test" uitype="account" value="${id}" />
          </filter>
      </link-entity>
  </entity>
</fetch>`;

  return `?fetchXml=${encodeURIComponent(fetchXml)}`;
};

export const RetrieveMultiple = (context: any, id: string) => {
  return context.webAPI.retrieveMultipleRecords('annotation', searchQuery(id));
};
