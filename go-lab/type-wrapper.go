package main

import "fmt"

type ReadWriter interface {
  Reader
  Writer
}

type Reader interface {
  Read()
}

type Writer interface {
  Write()
}

type Foo struct{}

func (f Foo) Read() {
  fmt.Println("I am Reader")
}

func (f Foo) Write() {
  fmt.Println("I am Writer")
}

func main() {
  var f ReadWriter = Foo{}

  func(r Reader) {
    r.Read()
  }(f)

  func(r Writer) {
    r.Write()
  }(f)
}
