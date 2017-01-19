/* global describe, beforeEach, it */

import chai from 'chai'
import YamlFileLoader from '../../../lib/Loader/YamlFileLoader'
import ContainerBuilder from '../../../lib/ContainerBuilder'
import Foo from '../../Resources/foo'
import Bar from '../../Resources/bar'
import path from 'path'

let assert = chai.assert

describe('YamlFileLoader', () => {
  let loader
  let container

  beforeEach(() => {
    container = new ContainerBuilder()
    loader = new YamlFileLoader(container, path.join(__dirname, '/../../Resources/fake-services.yml'))
  })

  describe('load', () => {
    it('should throw an exception if the yaml file not exists', () => {
      // Arrange.
      let path = 'fake-filePath.yml'
      loader = new YamlFileLoader(container, path)

      // Act.
      let actual = () => loader.load()

      // Assert.
      assert.throws(actual, Error, 'The file not exists')
    })

    it('should load a simple container', () => {
      // Arrange.
      let serviceName = 'foo'

      // Act.
      loader.load()
      let service = container.get(serviceName)

      // Assert.
      assert.instanceOf(service, Foo)
      assert.instanceOf(service.bar, Bar)
      assert.strictEqual(service.param, 'foo-bar')
    })
  })
})
