# bos-bikes

## Bikes cli


## Installation
```
  > npm install -g `city-code`-bikes
```

Don't forget the "-g" to install it globally. (then you can run bikes (command) anywhere)

## Usage

On your terminal:
```
  > bikes `station-id`
```
Basically the bikes command and whatever bikes you want to check.

At first use, you will obviously not know the id of a particular station.
You can get that with the command `bikes --help`. It is a deliberate api design decision. The reality is that you most frequently use only 3 to 4 stations anyways. By your fourth use you will know the id by heart (one or two digits)


## Raison d'être

Going to a map (resizing, load time) is annoying and waste time. If you are using Boston's bike sharing system on a regular basis, download this global package and get the number of available bikes and docks instantly, right in your command line.


## Related
*** include similar: clis from other cities.


##### Building on top
Please send a PR, if could use these following to (additional features):

> nicer design on displaying the list of ids and dates
>update notifier : to alert user a bike is available - empty dock available
>configstore: to persist data through manipulation
>chalk styling: making the updates and results colorful

#### Api decisions



## License
MIT © [Mohamed Hayibor](https://github.com/mohamedhayibor)
