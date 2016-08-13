package github.xjj59307;

import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

class ReadWriteLockDemo {

  public static void main(String[] args) {
    final ReadWriteLock lock = new ReentrantReadWriteLock();

    new Thread(() -> {
      lock.readLock().lock();

      try {
        System.out.println("thread 1 got read lock");
        Thread.sleep(2000);
        System.out.println("thread 1 got read lock");
      } catch (Exception e) {
        e.printStackTrace();
      } finally {
        lock.readLock().unlock();
      }
    }).start();

    new Thread(() -> {
      lock.readLock().lock();

      try {
        System.out.println("thread 2 got read lock");
        Thread.sleep(2000);
        System.out.println("thread 2 got read lock");
      } catch (Exception e) {
        e.printStackTrace();
      } finally {
        lock.readLock().unlock();
      }
    }).start();

    new Thread(() -> {
      lock.writeLock().lock();

      try {
        System.out.println("thread 3 got write lock");
        Thread.sleep(2000);
        System.out.println("thread 3 got write lock");
      } catch (Exception e) {
        e.printStackTrace();
      } finally {
        lock.writeLock().unlock();
      }
    }).start();
  }
}
