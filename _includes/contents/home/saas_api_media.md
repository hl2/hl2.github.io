{% highlight json linenos %}
  {
    "ts": {
      "gte": 1497564000,
      "lte": 1497650399
    },
    "queries": [{
      "includes": ["room temperature"],
      "products": ["58ada14316b15b000f7be550"],
      "query": {
        "bool": {
          "filter": [{
            "terms": {
              "device.id": ["58ada0ab16b15b000f7be54d"]
            }
          }]
        }
      }
    }]
  }
{% endhighlight %}
